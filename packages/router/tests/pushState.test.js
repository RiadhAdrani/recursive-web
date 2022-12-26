/**
 * @jest-environment jsdom
 */

import { app } from "./test.utility";

it("should push state correctly", () => {
    const router = app().router;

    router.useRouterPushState("/myRoute", "/myRoute", "#anchor");

    expect(history.state).toStrictEqual({ route: "/myRoute" });
});
