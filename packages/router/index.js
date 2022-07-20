import { Router } from "../../use";

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
                const [template] = this.getRouteState();

                _route = template;
            }

            const _to = this.useRouterGetRoute();

            const _template = this.routes[_route] ? this.routes[_route] : this.routes["/404"];

            this.loadRoute(_template, _to);

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

    /**
     * Replace the current history state with another one.
     * @param {any} template
     * @param {string} hash
     */
    useRouterReplaceState(template, hash) {
        history.replaceState(
            { route: template.route.path },
            "",
            this.useRouterMakeURL(`${template.path}${hash}`)
        );
    }

    /**
     * Push another history state to the stack.
     * @param {any} template
     */
    useRouterPushState(template) {
        history.pushState({ route: template.route.path }, "", this.useRouterMakeURL(template.path));
    }

    /**
     * Scroll into the anchor view if it exists.
     * @param {string} anchor
     */
    useRouterGoToAnchor(anchor) {
        const target = document.getElementById(anchor.replace("#", ""));

        if (target) {
            target.scrollIntoView();
        }
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

        const [routeTemplate] = this.stateManager.getReserved("route");

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

export default RecursiveWebRouter;
