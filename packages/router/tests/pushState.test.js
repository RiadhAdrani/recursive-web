/**
 * @jest-environment jsdom
 */

const { app } = require("./test.utility");

it("should build the url from a route", () => {
    const router = app().router;

    router.useRouterPushState({ route: { path: "/myRoute" }, path: "/myRoute" }, "#anchor");

    expect(history.state).toStrictEqual({ route: "/myRoute" });
});
