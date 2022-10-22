const { isBlank } = require("@riadh-adrani/utility-js");
const { RecursiveRouter } = require("../../use");

class RecursiveWebRouter extends RecursiveRouter {
    constructor(route, base, scroll, app) {
        super(route, base, scroll, app);
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
        const pathname = window.location.pathname;

        const maybeBase = pathname.substring(1, this.base.length + 1);

        if (!isBlank(this.base) && maybeBase === this.base) {
            return pathname.substring(this.base.length + 1);
        }

        return pathname;
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
        }, 200);
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
