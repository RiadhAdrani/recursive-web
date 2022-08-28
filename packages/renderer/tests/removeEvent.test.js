/**
 * @jest-environment jsdom
 */

const { app } = require("./test.utility");

it("should remove the event callback from the dom element", () => {
    const renderer = app((testApp) =>
        testApp.createElement("span", {
            onClick: () => {
                return 3;
            },
        })
    ).renderer;

    renderer.render();

    renderer.useRendererRemoveEvent("onClick", renderer.current.instance);

    expect(document.body.childNodes.item(0).onclick).toBeFalsy();
});
