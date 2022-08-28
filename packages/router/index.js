const { Router, State, Orchestrator } = require("../../use");

/**
 * Manage web application routing.
 */
class RecursiveWebRouter extends Router {
    /**
     * Create new instance of the Recursive Web Router.
     * @param {import("@riadh-adrani/recursive/lib").Route} route root route.
     * @param {string} base Aapplication base.
     * @param {boolean} scroll Boolean indicating if the app should reset scrolling when mounting a new route.
     * @param {State} manager Application state manager.
     * @param {Orchestrator} orchestrator Application orchestrator.
     */
    constructor(route, base, scroll, manager, orchestrator) {
        super(route, base, scroll, manager, orchestrator);
    }

    useRouterNavigationListener() {
        window.addEventListener("popstate", (e) => {
            let _route;

            if (e.state) {
                _route = e.state.route;
            } else {
                _route = this.useRouterGetRoute();
            }

            const [newPath, routeForm, anchor] = this.resolvePath(_route);

            this.mountNewRoute(newPath, routeForm, anchor);

            e.preventDefault();
        });
    }

    useRouterMakeURL(path) {
        let url = `${location.origin}/`;

        if (this.base.trim()) {
            url += `${this.base}/`;
        }

        if (path.charAt(0) == "/") {
            url += path.slice(1);
        } else {
            url += path;
        }

        return url;
    }

    useRouterGetRoute() {
        return this.base
            ? window.location.pathname.replace("/" + this.base, "")
            : window.location.pathname;
    }

    useRouterGetLocationPath() {
        return location.pathname;
    }

    useRouterReplaceState(destination, routeForm, hash) {
        history.replaceState(
            { route: destination },
            "",
            this.useRouterMakeURL(destination)
        );
    }

    useRouterPushState(destination, routeForm, hash) {
        history.pushState(
            { route: destination },
            "",
            this.useRouterMakeURL(destination)
        );
    }

    useRouterGoToAnchor(anchor) {
        /**
         * We need to wait a little bit,
         * there is a delay between the start of the update
         * and its finish.
         * It is asynchronous.
         */
        setTimeout(() => {
            const eleId = anchor.replace("#", "");

            const target = document.getElementById(eleId);

            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    }

    useRouterScrollToTop() {
        if (this.scroll) window.scrollTo({ top: 0, behavior: "smooth" });
    }

    useRouterOnLoad() {
        const route = this.useRouterGetRoute();

        const hash = location.hash;

        const [routeTemplate] = this.getRouteState();

        if (routeTemplate.title) {
            this.useRouterSetTitle(routeTemplate.title);
        }

        if (typeof routeTemplate.onLoad == "function") {
            routeTemplate.onLoad();
        }

        if (route === "/") return;

        this.replace(route, hash);
    }

    useRouterSetTitle(title) {
        document.title = title;
    }
}

module.exports = RecursiveWebRouter;
