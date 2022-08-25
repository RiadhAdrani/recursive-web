/**
 * @jest-environment jsdom
 */

const { createElement } = require("../../../use");
const { emptyApp } = require("./test.utility");
const {
    ELEMENT_TYPE_TEXT_NODE,
    RECURSIVE_ELEMENT_SYMBOL,
    ELEMENT_TYPE_RAW,
} = require("@riadh-adrani/recursive/packages/constants");

it("should add an html div element", () => {
    const renderer = emptyApp().renderer;

    renderer.render();

    const el = createElement("div");

    const parent = { instance: document.body.children.item(0) };

    renderer.useRendererAddElement(el, parent);

    expect(document.body.children.item(0).childElementCount).toBe(1);
});

it("should add a raw element", () => {
    const renderer = emptyApp().renderer;

    renderer.render();

    const el = createElement(ELEMENT_TYPE_RAW, {
        children: [
            {
                elementType: ELEMENT_TYPE_TEXT_NODE,
                $$_RecursiveSymbol: RECURSIVE_ELEMENT_SYMBOL,
                children: "<p>Hello</p>",
                instance: undefined,
            },
        ],
    });

    const parent = { instance: document.body.children.item(0) };

    renderer.useRendererAddElement(el, parent);

    expect(document.body.children.item(0).children.item(0).innerHTML).toBe(
        "<p>Hello</p>"
    );
});
