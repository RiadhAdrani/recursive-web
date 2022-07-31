/**
 * @jest-environment jsdom
 */

const { app } = require("./test.utility");

it("should get the correct pathname", () => {
    const router = app().router;

    history.pushState({}, "", "/myRoute");

    expect(router.useRouterGetLocationPath()).toBe("/myRoute");
});
