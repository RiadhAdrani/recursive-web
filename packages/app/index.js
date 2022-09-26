const RecursiveWebRenderer = require("../renderer");
const RecursiveWebRouter = require("../router");
const { RecursiveApp } = require("../../use");
const { useRecursiveWindow } = require("../window");
const { useRecursiveComponents } = require("../components");
require("../components/custom-elements");

class RecursiveWebApp extends RecursiveApp {
    /**
     * @param {import(".").RecursiveWebAppConstructorParams} params
     */
    constructor({
        root,
        app,
        route,
        base = "",
        scrollCorrection = false,
        cacheSize = 1000,
        onAppInit,
        scopedStyle,
    }) {
        super({
            cacheSize,
            buildRenderer: (_app) => {
                return new RecursiveWebRenderer(app, root, _app, {
                    scopedStyle,
                });
            },
            buildRouter: (_app) => {
                if (typeof route == "object") {
                    return new RecursiveWebRouter(
                        route,
                        base,
                        scrollCorrection,
                        _app
                    );
                }
            },
            onAppInit: (_app) => {
                useRecursiveComponents(_app);
                useRecursiveWindow(_app);

                if (typeof onAppInit == "function") onAppInit(_app);
            },
        });
    }

    /**
     * @param {import("../../lib").FreeStyleSheet} styleSheet style sheet declaration.
     */
    setStyle(styleSheet) {
        this.renderer.styler.setStyle(styleSheet);
    }
}

/**
 * @param {import("../../lib").StyleSheet} params
 */
function createComponentStyle(params) {
    return { ...params };
}

module.exports = { RecursiveWebApp, createComponentStyle };
