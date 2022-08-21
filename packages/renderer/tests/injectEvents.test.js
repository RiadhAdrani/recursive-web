/**
 * @jest-environment jsdom
 */

const { createElement } = require("../../../use");
const { app } = require("./test.utility");

it("should inject an event", () => {
    const renderer = app(() =>
        createElement("span", { id: "myId", onClick: () => {} })
    ).renderer;

    renderer.render();

    expect(document.body.children.item(0).events.onClick).toBeTruthy();
});
