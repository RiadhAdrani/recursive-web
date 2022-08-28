/**
 * @jest-environment jsdom
 */

const {
    ELEMENT_TYPE_TEXT_NODE,
    RECURSIVE_ELEMENT_SYMBOL,
    ELEMENT_TYPE_RAW,
} = require("@riadh-adrani/recursive/packages/constants");
const { emptyApp } = require("./test.utility");

it("should update raw container", () => {
    const app = emptyApp();
    const renderer = app.renderer;

    const text1 = app.createElement(ELEMENT_TYPE_RAW, {
        children: [
            {
                elementType: ELEMENT_TYPE_TEXT_NODE,
                $$_RecursiveSymbol: RECURSIVE_ELEMENT_SYMBOL,
                children: "<p>World</p>",
                instance: undefined,
            },
        ],
    });
    const text2 = app.createElement(ELEMENT_TYPE_RAW, {
        children: [
            {
                elementType: ELEMENT_TYPE_TEXT_NODE,
                $$_RecursiveSymbol: RECURSIVE_ELEMENT_SYMBOL,
                children: "<p>Hello Recursive</p>",
                instance: undefined,
            },
        ],
    });

    renderer.renderInstance(text1);

    renderer.useRendererUpdateRawContainersAgainstEachOthers(text1, text2);

    expect(text1.instance.innerHTML).toBe("<p>Hello Recursive</p>");
});
