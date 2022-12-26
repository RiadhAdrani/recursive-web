/**
 * @jest-environment jsdom
 */

import { app } from "./test.utility";

it("should inject a child", () => {
    const renderer = app((testApp) =>
        testApp.createElement("span", {
            id: "myId",
            children: [testApp.createElement("p")],
        })
    ).renderer;

    renderer.render();

    expect(document.body.children.item(0).childNodes.length).toBe(1);
});

it("should inject many children", () => {
    const renderer = app((testApp) =>
        testApp.createElement("span", {
            id: "myId",
            children: [
                testApp.createElement("p"),
                testApp.createElement("p"),
                testApp.createElement("p"),
            ],
        })
    ).renderer;

    renderer.render();

    expect(document.body.children.item(0).childNodes.length).toBe(3);
});

it("should inject text nodes", () => {
    const renderer = app((testApp) =>
        testApp.createElement("span", {
            id: "myId",
            children: ["Text", "Node"],
        })
    ).renderer;

    renderer.render();

    expect(document.body.children.item(0).childNodes.length).toBe(2);
});
