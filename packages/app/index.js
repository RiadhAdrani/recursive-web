const RecursiveWebRenderer = require("../renderer");
const RecursiveWebRouter = require("../router");
const { useRecursiveWindow } = require("../window");
const { RecursiveApp } = require("../../use");
require("../components/custom-elements/");

/**
 * Web implementation of the `RecursiveApp` class.
 * @extends {RecursiveApp}
 */
class RecursiveWebApp extends RecursiveApp {
    /**
     * Create a new instance of Recursive App for the web.
     *
     * Despite the fact that you can create multiple instance,
     * that does not mean that it is a good idea,
     * while most of the modules like the `Renderer` or `State` may work
     * flawlessly, the `Router` module will not work as expected.
     * @param {object} params
     * @param {HTMLElement} params.root html element in which the app will be injected.
     * @param {() => import("@riadh-adrani/recursive/lib").RecursiveElement} params.app a function returning the tree of component.
     * The return type should be `RecursiveElement`.
     * @param {import("@riadh-adrani/recursive/lib").Route} params.route routing tree object.
     * @param {string} params.base the base url of the web app.
     * @param {boolean} params.scrollCorrection a boolean indicating if the page should scroll to the top when the route changes.
     * @param {number} params.cacheSize an integer representing the maximum number of cached stateful objects.
     * @param {(app:RecursiveWebApp) => void} params.onAppInit function to be executed after the app initialization.
     */
    constructor({
        root,
        app,
        route,
        base = "",
        scrollCorrection = false,
        cacheSize = 1000,
        onAppInit,
    }) {
        super({
            renderer: new RecursiveWebRenderer(app, root),
            cacheSize,
            buildRouter: (_app) => {
                if (typeof route == "object") {
                    return new RecursiveWebRouter(
                        route,
                        base,
                        scrollCorrection,
                        _app.stateManager,
                        _app.orchestrator
                    );
                }
            },
            onAppInit: (_app) => {
                useRecursiveWindow(_app.orchestrator);

                if (typeof onAppInit == "function") onAppInit(_app);
            },
        });
    }

    /**
     * Add a style sheet that will be evaluated every time the app rerender.
     *
     * Can be used multiple times, at any depth within the tree of components.
     *
     * @param {import("../../lib").FreeStyleSheet} styleSheet style sheet declaration.
     */
    setStyle(styleSheet) {
        this.renderer.styler.setStyle(styleSheet);
    }

    /**
     * Helper function to create a style for a components.
     *
     * @param {import("../../lib").StyleSheet} param style sheet object.
     * @returns {import("../../lib").StyleSheet}
     */
    createComponentStyle(param) {
        return param;
    }
}

module.exports = { RecursiveWebApp };
