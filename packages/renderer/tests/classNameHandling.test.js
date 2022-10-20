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

it.each([
    ["", "", false, ""],
    ["test", "", false, "test"],
    ["", "test", false, "test"],
    ["test", "", true, "test -_u"],
    ["", "", true, "-_u"],
    ["test", "test2", true, "test test2-_u"],
    ["", "test2", true, "test2-_u"],
])(
    "should handle style.className with attribute.className correctly : '%s' | '%s' | '%s' => '%s'",
    (attrClass, styleClass, scoped, expected) => {
        const renderer = app((testApp) =>
            testApp.createElement("div", {
                className: attrClass,
                style: {
                    normal: {},
                    className: styleClass,
                    scoped,
                },
            })
        ).renderer;

        renderer.render();

        expect(document.body.children.item(0).className).toBe(expected);
    }
);
