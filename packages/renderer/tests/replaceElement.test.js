/**
 * @jest-environment jsdom
 */

const { createElement } = require("../../../use");
const { app } = require("./test.utility");

it("should replace the element", () => {
    const renderer = app(() => createElement("span")).renderer;

    renderer.render();

    renderer.useRendererReplaceElement(renderer.current, createElement("div"));

    expect(document.body.childNodes.item(0).tagName).toBe("DIV");
});
