/**
 * @jest-environment jsdom
 */

import { app } from "./test.utility";

it.each([
    ["id", "btn", "btn"],
    ["accessKey", "k", "k"],
    ["className", ["btn", "primary", "outlined"], "btn primary outlined"],
    ["contentEditable", true, true],
    ["height", 50, 50],
    ["dir", "", ""],
])(
    "should inject attributes (%s) with value (%s)",
    (attribute, value, expected) => {
        const renderer = app((testApp) =>
            testApp.createElement("div", { [attribute]: value })
        ).renderer;

        renderer.render();

        expect(document.body.children.item(0)[attribute]).toBe(expected);
    }
);
