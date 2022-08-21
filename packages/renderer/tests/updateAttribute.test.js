/**
 * @jest-environment jsdom
 */

const { createElement } = require("../../../use");
const { app } = require("./test.utility");

it("should update a given attribute", () => {
    const renderer = app(() => createElement("span", { id: "myId" })).renderer;

    renderer.render();

    renderer.useRendererSetAttribute("id", "myNewId", renderer.current);

    expect(document.body.childNodes.item(0).id).toBe("myNewId");
});

it("should update a togglable attribute", () => {
    const renderer = app(() =>
        createElement("input", { checked: false })
    ).renderer;

    renderer.render();

    renderer.useRendererSetAttribute("checked", true, renderer.current);

    expect(document.body.childNodes.item(0).checked).toBe(true);
});
