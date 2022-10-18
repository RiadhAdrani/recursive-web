/**
 * @jest-environment jsdom
 */

const { app } = require("./test.utility");

it.each([
    ["", false, false, {}, ""],
    ["test", false, false, {}, "test"],
    ["test", false, false, { normal: {} }, "test"],
    ["test", true, false, { normal: {} }, "test-_u"],
    ["test", false, true, { normal: {} }, "test"],
    ["test", true, true, { normal: {} }, "test-_u"],
    ["test", true, true, {}, "test"],
])(
    "should add className correctly : '%s' | '%s' | '%s' | '%s' => '%s'",
    (className, scoped, globalScoped, selectors, expected) => {
        const renderer = app(
            (testApp) =>
                testApp.createElement("div", {
                    style: {
                        ...selectors,
                        className,
                        scoped,
                    },
                }),
            globalScoped
        ).renderer;

        renderer.render();

        expect(document.body.children.item(0).className).toBe(expected);
    }
);
