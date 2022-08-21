const RecursiveWebRenderer = require("../renderer");
const RecursiveWebRouter = require("../router");
const { useRecursiveWindow } = require("../window");
const { App, createElement, Console } = require("../../use");
require("../components/DefineElements");

class RecursiveWebApp extends App {
    constructor({
        root,
        app,
        route = { path: "/", component: () => "" },
        base = "",
        scrollCorrection = false,
        cacheSize = 1000,
    }) {
        super({
            renderer: new RecursiveWebRenderer(app, root),
            cacheSize,
            buildRouter: (_app) => {
                return new RecursiveWebRouter(
                    route,
                    base,
                    scrollCorrection,
                    _app.stateManager,
                    _app.orchestrator
                );
            },
            onAppInit: (_app) => {
                useRecursiveWindow(_app.orchestrator);
            },
        });
    }

    /**
     * Create `<a>` element for routing.
     * @param {import("../../lib").AProps} props
     */
    Link(props) {
        const element = createElement("a", props);

        if (element.href) {
            const _onClick = element.onClick || (() => {});

            const to = element.href;

            element.href = this.router.useRouterMakeURL(to);

            element.onClick = (e) => {
                e.preventDefault();

                this.router.goTo(to);

                _onClick(e);
            };
        }

        return element;
    }

    /**
     * Add a style sheet that will be evaluated every time the app rerender.
     * @param {import("../../lib").FreeStyleSheet} styleSheet
     */
    setStyle(styleSheet) {
        this.renderer.styler.setStyle(styleSheet);
    }

    /**
     *
     * @param {import("../../lib").StyleSheet} param
     * @returns
     */
    createComponentStyle(param) {
        return param;
    }

    /**
     * Display a log message to the console.
     *
     * Logs using this method will not be displayed in production.
     * @env development
     * @param {any} msg
     */
    log(msg) {
        Console.log(msg);
    }

    /**
     * Update the tab title.
     * @param {string} title
     * @returns
     */
    updateTitle(title) {
        document.title = title;
    }
}

module.exports = { RecursiveWebApp };
