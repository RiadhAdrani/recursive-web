/**
 * @jest-environment jsdom
 */

const { createElement } = require("../../../use");
const { app } = require("./test.utility");

it("should update inline style attribute", () => {
    const renderer = app(() =>
        createElement("span", { style: { inline: { color: "red" } } })
    ).renderer;

    const newElement = createElement("span", {
        style: { inline: { color: "blue" } },
    });

    renderer.render();

    renderer.useRendererUpdateStyle(renderer.current, newElement);

    expect(document.body.childNodes.item(0).style.color).toBe("blue");
});

it("should reset non-existing attributes in the new element", () => {
    const renderer = app(() =>
        createElement("span", { style: { inline: { color: "red" } } })
    ).renderer;

    const newElement = createElement("span", {
        style: { inline: { backgroundColor: "blue" } },
    });

    renderer.render();

    renderer.useRendererUpdateStyle(renderer.current, newElement);

    expect(document.body.childNodes.item(0).style.color).toBe("");
});
