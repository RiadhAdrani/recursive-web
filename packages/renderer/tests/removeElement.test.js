/**
 * @jest-environment jsdom
 */

import { app } from "./test.utility";

it("should remove the instance from the dom", () => {
    const renderer = app((testApp) => testApp.createElement("span")).renderer;

    renderer.render();

    renderer.useRendererRemoveElement(renderer.current);

    expect(document.body.childNodes.length).toBe(0);
});
