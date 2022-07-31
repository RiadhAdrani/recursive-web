const processComponentStyleSheet = require("./handlers/processComponentStyleSheet");
const mergeStyleSheets = require("./handlers/mergeStyleSheets");
const renderStyleSheet = require("./CssRender");

class RecursiveCSSOM {
    constructor() {
        this.appStaticStyle = document.createElement("style");
        this.appDynamicStyle = document.createElement("style");
        this.appStyle = document.createElement("style");

        document.querySelector("head").append(this.appStaticStyle);
        document.querySelector("head").append(this.appDynamicStyle);
        document.querySelector("head").append(this.appStyle);

        this.sheet = "";
        this.staticSheet = "";
        this.dynamicSheet = "";

        this.dynamicStack = [];
    }

    /**
     * Update component's and dynamic styles of the application.
     * @param {Object} stack contains styles declarations
     */
    update(stack) {
        this.injectDynamicStyle();

        const res = renderStyleSheet(
            mergeStyleSheets((stack || []).map((item) => processComponentStyleSheet(item)))
        );

        if (this.sheet !== res) {
            this.appStyle.innerHTML = res;
            this.sheet = res;
        }
    }

    addStaticStyle(styleSheet) {
        this.appStaticStyle.innerHTML += renderStyleSheet(styleSheet);
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
            import: [],
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
