/**
 * @jest-environment jsdom
 */

const { createElement } = require("../../../use");
const { app } = require("./test.utility");

it("should inject a child", () => {
    const renderer = app(() =>
        createElement("span", { id: "myId", children: [createElement("p")] })
    ).renderer;

    renderer.render();

    expect(document.body.children.item(0).childNodes.length).toBe(1);
});

it("should inject many children", () => {
    const renderer = app(() =>
        createElement("span", {
            id: "myId",
            children: [
                createElement("p"),
                createElement("p"),
                createElement("p"),
            ],
        })
    ).renderer;

    renderer.render();

    expect(document.body.children.item(0).childNodes.length).toBe(3);
});

it("should inject text nodes", () => {
    const renderer = app(() =>
        createElement("span", {
            id: "myId",
            children: ["Text", "Node"],
        })
    ).renderer;

    renderer.render();

    expect(document.body.children.item(0).childNodes.length).toBe(2);
});
