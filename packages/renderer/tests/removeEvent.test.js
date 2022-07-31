/**
 * @jest-environment jsdom
 */

const { createElement } = require("../../../use");
const { app } = require("./test.utility");

it("should remove the event callback from the dom element", () => {
    const renderer = app(() =>
        createElement("span", {
            onClick: () => {
                return 3;
            },
        })
    ).renderer;

    renderer.render();

    renderer.useRendererRemoveEvent("onClick", renderer.current.instance);

    expect(document.body.childNodes.item(0).events.onClick()).toBeFalsy();
});
