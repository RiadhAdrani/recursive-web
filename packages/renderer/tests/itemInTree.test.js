/**
 * @jest-environment jsdom
 */

const { app } = require("./test.utility");

it("should detect if the element instance is in the tree", () => {
    const renderer = app((testApp) =>
        testApp.createElement("span", { id: "myId", children: [] })
    ).renderer;

    renderer.render();

    expect(renderer.useRendererItemInTree(renderer.current)).toBeTruthy();
});

it("should detect nested elements", () => {
    const renderer = app((testApp) =>
        testApp.createElement("span", {
            id: "myId",
            children: [testApp.createElement("div")],
        })
    ).renderer;

    renderer.render();

    expect(
        renderer.useRendererItemInTree(renderer.current.children[0])
    ).toBeTruthy();
});

it("should detect a falsy element", () => {
    const testApp = app((testApp) =>
        testApp.createElement("span", { id: "myId", children: [] })
    );

    const renderer = testApp.renderer;

    renderer.render();

    expect(
        renderer.useRendererItemInTree(testApp.createElement("p"))
    ).toBeFalsy();
});
