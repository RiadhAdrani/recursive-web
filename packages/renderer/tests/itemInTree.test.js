/**
 * @jest-environment jsdom
 */

const { createElement } = require("../../../use");
const { app } = require("./test.utility");

it("should detect if the element instance is in the tree", () => {
    const renderer = app(() =>
        createElement("span", { id: "myId", children: [] })
    ).renderer;

    renderer.render();

    expect(renderer.useRendererItemInTree(renderer.current)).toBeTruthy();
});

it("should detect nested elements", () => {
    const renderer = app(() =>
        createElement("span", { id: "myId", children: [createElement("div")] })
    ).renderer;

    renderer.render();

    expect(
        renderer.useRendererItemInTree(renderer.current.children[0])
    ).toBeTruthy();
});

it("should detect a falsy element", () => {
    const renderer = app(() =>
        createElement("span", { id: "myId", children: [] })
    ).renderer;

    renderer.render();

    expect(renderer.useRendererItemInTree(createElement("p"))).toBeFalsy();
});
