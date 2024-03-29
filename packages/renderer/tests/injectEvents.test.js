/**
 * @jest-environment jsdom
 */

import { app } from "./test.utility";

it("should inject an event", () => {
    const renderer = app((testApp) =>
        testApp.createElement("span", { id: "myId", onClick: () => {} })
    ).renderer;

    renderer.render();

    expect(document.body.children.item(0).onclick).toBeTruthy();
});
