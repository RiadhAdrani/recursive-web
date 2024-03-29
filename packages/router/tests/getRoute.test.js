/**
 * @jest-environment jsdom
 */

import { app } from "./test.utility";

it("should resolve the current route", () => {
    const router = app().router;

    router.goTo("/myRoute");

    expect(router.useRouterGetRoute()).toBe("/myRoute");
});
