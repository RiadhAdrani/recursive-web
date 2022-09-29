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
    static common = createStyleElement();
    static highPriority = createStyleElement();
    static lowPriority = createStyleElement();

    constructor() {
        this.highPriority = "";
        this.lowPriority = "";

        this.dynamicStack = [];
    }

    /**
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
     * @param {import("../../lib").FreeStyleSheet} styleSheet style sheet declaration.
     */
    static addStaticStyle(styleSheet) {
        const computed = renderStyleSheet(mergeStyleSheets([styleSheet]));

        RecursiveCSSOM.common.innerHTML += computed.highPriority;
        RecursiveCSSOM.common.innerHTML += computed.lowPriority;
    }

    /**
     * @param {object} styleObject style sheet declaration.
     */
    addDynamicDeclaration(styleObject) {
        this.dynamicStack.push(styleObject);
    }

    /**
     * @param {import("../../lib").FreeStyleSheet} cssDeclaration style sheet declaration.
     */
    setStyle(cssDeclaration) {
        this.addDynamicDeclaration(cssDeclaration);
    }
}

module.exports = RecursiveCSSOM;
