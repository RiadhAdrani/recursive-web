/**
 * @jest-environment jsdom
 */

const { app } = require("./test.utility");

it("should inject attributes", () => {
    const renderer = app((testApp) =>
        testApp.createElement("div", { id: "myId" })
    ).renderer;

    renderer.render();

    expect(document.body.children.item(0).id).toBe("myId");
});
