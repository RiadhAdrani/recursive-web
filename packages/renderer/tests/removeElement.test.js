/**
 * @jest-environment jsdom
 */

const { createElement } = require("../../../use");
const { app } = require("./test.utility");

it("should remove the instance from the dom", () => {
    const renderer = app(() => createElement("span")).renderer;

    renderer.render();

    renderer.useRendererRemoveElement(renderer.current);

    expect(document.body.childNodes.length).toBe(0);
});
