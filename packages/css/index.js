const processComponentStyleSheet = require("./handlers/processComponentStyleSheet");
const mergeStyleSheets = require("./handlers/mergeStyleSheets");
const renderStyleSheet = require("./render");

/**
 * Create an return a style element within the `head` element.
 * @returns {HTMLStyleElement} style element.
 */
function createStyleElement() {
    const temp = document.createElement("style");
    document.querySelector("head").append(temp);
    return temp;
}

/**
 * Manage CSS within a `RecursiveWebApp`.
 */
class RecursiveCSSOM {
    /**
     * Used to inject static and unchanged styles.
     * Once injected, it can't be removed.
     */
    static common = createStyleElement();

    /**
     * Used for dynamic style injection.
     * Store `imports`, `fontFace` and `charSet` declarations.
     */
    static highPriority = createStyleElement();

    /**
     * Used for low priority dynamic style injection.
     * Store `vars`, `selectos`, `animations` and `mediaQueries` declarations.
     */
    static lowPriority = createStyleElement();

    /**
     * Create a new CSSOM controller instance.
     */
    constructor() {
        this.highPriority = "";
        this.lowPriority = "";

        this.dynamicStack = [];
    }

    /**
     * Update component's and dynamic styles of the application.
     * @param {Object} stack contains styles declarations
     */
    update(stack) {
        const computedComponentStyle = (stack || []).map((item) =>
            processComponentStyleSheet(item)
        );

        const res = renderStyleSheet(
            mergeStyleSheets([...this.dynamicStack, ...computedComponentStyle])
        );

        if (this.highPriority !== res.highPriority) {
            RecursiveCSSOM.highPriority.innerHTML = res.highPriority;
            this.highPriority = res.highPriority;
        }

        if (this.lowPriority !== res.lowPriority) {
            RecursiveCSSOM.lowPriority.innerHTML = res.lowPriority;
            this.lowPriority = res.lowPriority;
        }

        this.dynamicStack = [];
    }

    /**
     * Add the given style sheet as static.
     * @param {import("../../lib").FreeStyleSheet} styleSheet style sheet declaration.
     */
    static addStaticStyle(styleSheet) {
        const computed = renderStyleSheet(styleSheet);

        RecursiveCSSOM.common.innerHTML += computed.highPriority;
        RecursiveCSSOM.common.innerHTML += computed.lowPriority;
    }

    /**
     * Add the style sheet object to the dynamic stack.
     * @param {object} styleObject style sheet declaration.
     */
    addDynamicDeclaration(styleObject) {
        this.dynamicStack.push(styleObject);
    }

    /**
     * Add a new style sheet declaration.
     * @param {import("../../lib").FreeStyleSheet} cssDeclaration style sheet declaration.
     */
    setStyle(cssDeclaration) {
        this.addDynamicDeclaration(cssDeclaration);
    }
}

module.exports = RecursiveCSSOM;
