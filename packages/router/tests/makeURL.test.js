/**
 * @jest-environment jsdom
 */

const { app } = require("./test.utility");

it("should build the url from a route", () => {
    const router = app().router;

    expect(router.useRouterMakeURL("/myRoute")).toBe(
        `${location.origin}/myRoute`
    );
});
