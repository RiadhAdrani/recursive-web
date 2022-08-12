const { Router } = require("../../use");

class RecursiveWebRouter extends Router {
    constructor(route, base, scroll, manager, orchestrator) {
        super(route, base, scroll, manager, orchestrator);
    }

    /**
     * Add a `popstate` event listener to the window.
     */
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

    /**
     * Create a url from the given path.
     * @param {string} path
     * @returns {string}
     */
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

    /**
     * Retreive the current location.
     * @returns {string}
     */
    useRouterGetRoute() {
        return this.base
            ? window.location.pathname.replace("/" + this.base, "")
            : window.location.pathname;
    }

    /**
     * Retrieve the current location pathname.
     * @returns
     */
    useRouterGetLocationPath() {
        return location.pathname;
    }

    useRouterReplaceState(destination, routeForm, hash) {
        history.replaceState({ route: destination }, "", this.useRouterMakeURL(destination));
    }

    useRouterPushState(destination, routeForm, hash) {
        history.pushState({ route: destination }, "", this.useRouterMakeURL(destination));
    }

    /**
     * Scroll into the anchor view if it exists.
     * @param {string} anchor
     */
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
        }, 10);
    }

    /**
     * Scroll to the top of the window.
     */
    useRouterScrollToTop() {
        if (this.scroll) window.scrollTo({ top: 0, behavior: "smooth" });
    }

    /**
     * Execute when the app has loaded.
     */
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

    /**
     * Change the tab title.
     * @param {string} title
     */
    useRouterSetTitle(title) {
        document.title = title;
    }
}

module.exports = RecursiveWebRouter;
