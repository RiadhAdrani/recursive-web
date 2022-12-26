/**
 * @jest-environment jsdom
 */

import { emptyApp } from "./test.utility";
import { createElement } from "../../../use";
import { ELEMENT_TYPE_RAW } from "@riadh-adrani/recursive/packages/constants";

it("should add an html div element", () => {
    const app = emptyApp();
    const renderer = app.renderer;

    renderer.render();

    const el = app.createElement("div");

    const parent = { instance: document.body.children.item(0) };

    renderer.useRendererAddElement(el, parent);

    expect(document.body.children.item(0).childElementCount).toBe(1);
});

it.each([
    ["<p>Hello</p>", "<p>Hello</p>"],
    [["Hello", createElement("span")], "Hello<span></span>"],
    [[createElement("p"), createElement("span")], "<p></p><span></span>"],
    [
        [
            createElement("p", { children: "Hello" }),
            "And",
            createElement("span", { children: "Welcome" }),
        ],
        "<p>Hello</p>And<span>Welcome</span>",
    ],
])("should add a raw element", (children, expected) => {
    const app = emptyApp();

    const el = app.renderElement(createElement(ELEMENT_TYPE_RAW, { children }));

    expect(el.outerHTML).toBe(`<html-container>${expected}</html-container>`);
});
