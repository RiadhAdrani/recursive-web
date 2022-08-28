/**
 * @jest-environment jsdom
 */

const { app } = require("./test.utility");

it("should update inline style attribute", () => {
    const testApp = app((testApp) =>
        testApp.createElement("span", { style: { inline: { color: "red" } } })
    );

    const renderer = testApp.renderer;

    const newElement = testApp.createElement("span", {
        style: { inline: { color: "blue" } },
    });

    renderer.render();

    renderer.useRendererUpdateStyle(renderer.current, newElement);

    expect(document.body.childNodes.item(0).style.color).toBe("blue");
});

it("should reset non-existing attributes in the new element", () => {
    const testApp = app((testApp) =>
        testApp.createElement("span", { style: { inline: { color: "red" } } })
    );

    const renderer = testApp.renderer;

    const newElement = testApp.createElement("span", {
        style: { inline: { backgroundColor: "blue" } },
    });

    renderer.render();

    renderer.useRendererUpdateStyle(renderer.current, newElement);

    expect(document.body.childNodes.item(0).style.color).toBe("");
});
