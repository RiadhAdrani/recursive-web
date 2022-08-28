/**
 * @jest-environment jsdom
 */

const { emptyApp } = require("./test.utility");

it("should update text", () => {
    const app = emptyApp();
    const renderer = app.renderer;

    const text1 = app.createElement("#text", { children: 1 });
    const text2 = app.createElement("#text", { children: 2 });

    const div = renderer.renderInstance(text1);

    renderer.useRendererUpdateText(text1, text2);

    expect(text1.instance.data).toBe("2");
});
