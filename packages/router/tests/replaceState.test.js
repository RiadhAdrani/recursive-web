/**
 * @jest-environment jsdom
 */

const { app } = require("./test.utility");

it("should build the url from a route", () => {
    const router = app().router;

    router.useRouterReplaceState(
        { route: { path: "/anotherRoute" }, path: "/anotherRoute" },
        "#anchor"
    );

    expect(history.state).toStrictEqual({ route: "/anotherRoute" });
});
