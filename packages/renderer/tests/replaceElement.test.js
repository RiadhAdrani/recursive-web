/**
 * @jest-environment jsdom
 */

const { app } = require("./test.utility");

it("should replace the element", () => {
    const _app = app((testApp) => testApp.createElement("span"));

    const renderer = _app.renderer;

    renderer.render();

    renderer.useRendererReplaceElement(
        renderer.current,
        _app.createElement("div")
    );

    expect(document.body.childNodes.item(0).tagName).toBe("DIV");
});
