/**
 * @jest-environment jsdom
 */

const { app } = require("./test.utility");

it("should remove the attributes from the dom element.", () => {
    const renderer = app((testApp) =>
        testApp.createElement("span", { id: "myId" })
    ).renderer;

    renderer.render();

    renderer.useRendererRemoveAttribute("id", renderer.current.instance);

    expect(document.body.childNodes.item(0).id).toBeFalsy();
});
