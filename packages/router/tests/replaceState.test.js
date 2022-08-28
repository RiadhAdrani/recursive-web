/**
 * @jest-environment jsdom
 */

const { app } = require("./test.utility");

it("should replace the current state", () => {
    const router = app().router;

    router.useRouterReplaceState("/anotherRoute", "/anotherRoute", "#anchor");

    expect(history.state).toStrictEqual({ route: "/anotherRoute" });
});
