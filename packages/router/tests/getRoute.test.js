/**
 * @jest-environment jsdom
 */

const { app } = require("./test.utility");

it("should resolve the current route", () => {
    const router = app().router;

    router.goTo("/myRoute");

    expect(router.useRouterGetRoute()).toBe("/myRoute");
});
