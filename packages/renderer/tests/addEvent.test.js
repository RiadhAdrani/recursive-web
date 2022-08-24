/**
 * @jest-environment jsdom
 */

const { createElement } = require("../../../use");
const { emptyApp } = require("./test.utility");

it("should add event", () => {
    const renderer = emptyApp().renderer;

    const ele = createElement("div", { events: {} });
    const eleInstance = renderer.renderInstance(ele);

    renderer.useRendererAddEvent("onClick", () => {}, ele);

    expect(eleInstance.onclick).toBeTruthy();
});
