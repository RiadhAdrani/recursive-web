const processComponentStyleSheet = require("./handlers/processComponentStyleSheet");
const mergeStyleSheets = require("./handlers/mergeStyleSheets");
const renderStyleSheet = require("./CssRender");

class RecursiveCSSOM {
    /**
     * Used to inject static and unchanged styles.
     * Once injected, it can't be removed.
     */
    static common = (() => {
        const temp = document.createElement("style");
        document.querySelector("head").append(temp);
        return temp;
    })();

    /**
     * Used for dynamic style injection.
     * Store `imports`, `fontFace` and `charSet` declarations.
     */
    static highPriority = (() => {
        const temp = document.createElement("style");
        document.querySelector("head").append(temp);
        return temp;
    })();

    /**
     * Used for low priority dynamic style injection.
     * Store `vars`, `selectos`, `animations` and `mediaQueries` declarations.
     */
    static lowPriority = (() => {
        const temp = document.createElement("style");
        document.querySelector("head").append(temp);
        return temp;
    })();

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

    static addStaticStyle(styleSheet) {
        const computed = renderStyleSheet(styleSheet);

        RecursiveCSSOM.common.innerHTML += computed.highPriority;
        RecursiveCSSOM.common.innerHTML += computed.lowPriority;
    }

    addDynamicDeclaration(
        object = {
            var: {},
            import: [],
            fontFace: {},
            selectors: {},
            animations: {},
            mediaQueries: {},
        }
    ) {
        this.dynamicStack.push(object);
    }

    injectDynamicStyle() {
        const res = renderStyleSheet(mergeStyleSheets(this.dynamicStack));

        if (this.dynamicSheet !== res) {
            this.appDynamicStyle.innerHTML = res;
            this.dynamicSheet = res;
        }

        this.dynamicStack = [];
    }

    setStyle(
        cssobject = {
            var: {},
            imports: [],
            fontFace: {},
            selectors: {},
            animations: {},
            mediaQueries: {},
        }
    ) {
        this.addDynamicDeclaration(cssobject);
    }
}

module.exports = RecursiveCSSOM;
