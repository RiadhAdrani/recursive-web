/**
 * @jest-environment jsdom
 */

const { createElement } = require("../../../use");
const { emptyApp } = require("./test.utility");

it("should update text", () => {
    const renderer = emptyApp().renderer;

    const text1 = createElement("#text", { children: 1 });
    const text2 = createElement("#text", { children: 2 });

    const div = renderer.renderInstance(text1);

    renderer.useRendererUpdateText(text1, text2);

    expect(text1.instance.data).toBe("2");
});
