/**
 * @jest-environment jsdom
 */

import { createElement } from "../../../use";
import { createApp } from "../../testing";

describe("isWithinRoute", () => {
    const app = createApp({
        app: () => createElement("div"),
        route: {
            path: "/",
            component: () => "",
            routes: [
                {
                    path: "parent",
                    component: () => "",
                    routes: [
                        {
                            path: "route",
                            component: () => "",
                            routes: [
                                {
                                    path: "nested",
                                    component: () => "",
                                    routes: [
                                        {
                                            path: "route",
                                            component: () => "",
                                        },
                                        {
                                            path: ":id",
                                            component: () => "",
                                        },
                                    ],
                                },
                                { path: ":id", component: () => "" },
                            ],
                        },
                        { path: ":id", component: () => "" },
                    ],
                },
            ],
        },
    });

    app.render();

    const router = app.router;

    it.each([
        ["/parent", true],
        ["/parent/route", true],
        ["/parent/route/nested", true],
        ["/parent/route/nested/route", true],
        ["/not-parent", false],
        ["/parent/not-route", false],
        ["/parent/route/not-nested", false],
        ["/parent/route/nested/not-route", false],
        ["/parent/route/nested/route/excess", false],
    ])(
        "should determine if '/parent/route/nested/route' is within '%s'",
        (route, expected) => {
            router.goTo("/parent/route/nested/route");

            expect(router.isWithinRoute(route)).toBe(expected);
        }
    );

    it.each([
        ["/parent/:id", "/parent/123", true],
        ["/parent/route/:id", "/parent/route/abc", true],
        ["/parent/route/nested/:id", "/parent/route/nested/a_z", true],
        ["/parent/route/nested/:id", "/parent/route/nested/b_d", true],
        ["/parent/route/nested/route/:id", "/parent/route/nested/route", false],
    ])(
        "should determine is dynamic route '%s' is a parent of '%s'",
        (route, currentRoute, expected) => {
            router.goTo(currentRoute);

            expect(router.isWithinRoute(route)).toBe(expected);
        }
    );
});
