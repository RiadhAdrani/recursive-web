/**
 * @jest-environment jsdom
 */

import { createElement } from "../../../use";
import { emptyApp } from "./test.utility";

it("should add event", () => {
    const app = emptyApp();
    const renderer = app.renderer;

    const ele = createElement("div", { events: {} });
    const eleInstance = renderer.renderInstance(ele);

    renderer.useRendererAddEvent("onClick", () => {}, ele);

    expect(eleInstance.onclick).toBeTruthy();
});
