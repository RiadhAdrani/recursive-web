/**
 * @jest-environment jsdom
 */

import { app } from "./test.utility";

it("should build the url from a route", () => {
    const router = app().router;

    expect(router.useRouterMakeURL("/myRoute")).toBe(
        `${location.origin}/myRoute`
    );
});
