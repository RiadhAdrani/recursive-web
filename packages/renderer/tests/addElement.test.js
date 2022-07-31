/**
 * @jest-environment jsdom
 */

const { createElement } = require("../../../use");
const { emptyApp } = require("./test.utility");

it("should add an html div element", () => {
    const renderer = emptyApp().renderer;

    renderer.render();

    renderer.useRendererAddElement(createElement("div"), renderer.current);

    expect(document.body.children.item(0).childElementCount).toBe(1);
});
