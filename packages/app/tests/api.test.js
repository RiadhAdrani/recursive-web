/**
 * @jest-environment jsdom
 */

const { createElement, createRoute } = require("../../../use");
const { createApp, getElement } = require("../../testing");

describe("Recursive Web App", () => {
    beforeEach(() => {
        webApp.goTo("/");
    });

    const webApp = createApp({
        app: () => createElement("div", { children: webApp.renderRoute() }),
        base: "my-base",
        route: {
            path: "/",
            title: "Home",
            component: () => "Home",
            routes: [
                {
                    path: "user",
                    title: "User",
                    component: () => webApp.renderRoute(),
                    routes: [
                        {
                            path: ":id",
                            component: () => webApp.getParams().id,
                            title: "User Profile",
                        },
                    ],
                },
                {
                    path: "page",
                    title: "Page",
                    component: () => webApp.renderRoute(),
                    routes: [
                        {
                            path: ":id",
                            component: () => webApp.getParams().id,
                            title: "Page",
                        },
                    ],
                },
                {
                    path: "state",
                    title: "Page",
                    component: () => {
                        const [count, setCount] = webApp.setState("count", 0);

                        return createElement("div", {
                            children: [
                                createElement("p", { children: count }),
                                createElement("button", {
                                    id: "count",
                                    children: "click",
                                    onClick: () => setCount(count + 1),
                                }),
                            ],
                        });
                    },
                },
                {
                    path: "cache",
                    title: "Cache",
                    component: () => {
                        const [count, setCount] = webApp.setCache("count", 0);

                        return createElement("div", {
                            children: [
                                createElement("p", { children: count }),
                                createElement("button", {
                                    id: "count",
                                    children: "click",
                                    onClick: () => setCount(count + 1),
                                }),
                            ],
                        });
                    },
                },
                {
                    path: "ref",
                    title: "Reference",
                    component: () => {
                        return createElement("h1", {
                            hooks: { onRef: () => "ref" },
                        });
                    },
                },
            ],
        },
    });

    webApp.render();

    it("should create render a div element correctly", () => {
        const el = webApp.renderElement(createElement("div"));

        expect(el).toBeTruthy();
        expect(el.tagName).toBe("DIV");
    });

    it("should create a route correctly", () => {
        const component = () => "component";

        expect(
            createRoute({
                path: "/",
                title: "Home",
                redirectTo: "/home",
                routes: [],
                component,
                onExit: component,
                onLoad: component,
            })
        ).toStrictEqual({
            path: "/",
            title: "Home",
            redirectTo: "/home",
            routes: [],
            component,
            onExit: component,
            onLoad: component,
        });
    });

    it("should mount routes", () => {
        expect(webApp.getBase()).toBe("my-base");

        expect(webApp.getRoute()).toBe("/");
        expect(webApp.getParams()).toStrictEqual({});
        expect(getElement("").innerHTML).toBe("<div>Home</div>");

        webApp.goTo("/user#about");
        expect(webApp.getAnchor()).toBe("#about");
        expect(webApp.getRoute()).toBe("/user");
        expect(webApp.getParams()).toStrictEqual({});
        expect(getElement("").innerHTML).toBe("<div></div>");

        webApp.goTo("/user/123");
        expect(webApp.getRoute()).toBe("/user/123");
        expect(webApp.getParams()).toStrictEqual({ id: "123" });
        expect(getElement("").innerHTML).toBe("<div>123</div>");

        webApp.goTo("/not-a-route");
        expect(getElement("").innerHTML).toBe("<div>404 Not Found</div>");
    });

    it("should add and remove states", () => {
        webApp.goTo("/state");
        expect(webApp.getState("count")[0]).toBe(0);

        getElement(" #count").click();

        expect(webApp.getState("count")[0]).toBe(1);

        webApp.goTo("/");
        webApp.goTo("/state");

        expect(webApp.getState("count")[0]).toBe(0);
    });

    it("should add and preserve cache", () => {
        webApp.goTo("/cache");
        expect(webApp.getCache("count")[0]).toBe(0);

        getElement(" #count").click();

        expect(webApp.getCache("count")[0]).toBe(1);

        webApp.goTo("/");

        expect(webApp.getCache("count")[0]).toBe(1);
    });

    it("should add and remove reference", () => {
        webApp.goTo("/ref");
        expect(webApp.getRef("ref", null).tagName).toBe("H1");

        webApp.goTo("/");

        expect(webApp.getRef("ref", "test")).toBe("test");

        webApp.goTo("/ref");

        expect(webApp.getRef("ref", null).tagName).toBe("H1");
    });
});
