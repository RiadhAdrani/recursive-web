/**
 * @jest-environment jsdom
 */

const { createElement } = require("../../../use");
const { app } = require("./test.utility");

it("should inject attributes", () => {
    const renderer = app(() => createElement("div", { id: "myId" })).renderer;

    renderer.render();

    expect(document.body.children.item(0).id).toBe("myId");
});
