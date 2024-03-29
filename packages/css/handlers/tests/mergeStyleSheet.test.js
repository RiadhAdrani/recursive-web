import mergeStyleSheets from "../mergeStyleSheets";

it.each([
    [undefined],
    [null],
    [""],
    [{}],
    [0],
    [[]],
    ["string"],
    [{ noAValidKey: {} }],
])("input '%s' should be empty value", (input) => {
    expect(mergeStyleSheets(input)).toStrictEqual({});
});

it.each([["div"], [".div"], ["#div"], ["div:hover"], [""]])(
    "selector '%s' to be valid",
    (selector) => {
        const object = {
            selectors: {
                [selector]: { color: "red" },
            },
        };

        expect(mergeStyleSheets([object])).toStrictEqual({
            selectors: [{ selector, content: { color: "red" } }],
        });
    }
);

it("should keep duplicate selectors with different content", () => {
    const object = [
        {
            selectors: {
                ".div": { color: "red" },
            },
        },
        {
            selectors: {
                ".div": { color: "blue" },
            },
        },
    ];

    expect(mergeStyleSheets(object)).toStrictEqual({
        selectors: [
            { selector: ".div", content: { color: "red" } },
            { selector: ".div", content: { color: "blue" } },
        ],
    });
});

it.each([[undefined], [null], [0], ["name"], [true], [Symbol.for()], [{}]])(
    "should not override falsy duplicate selectors",
    (selectorContent) => {
        const object = [
            {
                selectors: { ".div": { color: "red" } },
            },
            {
                selectors: { ".div": selectorContent },
            },
        ];

        expect(mergeStyleSheets(object)).toStrictEqual({
            selectors: [{ selector: ".div", content: { color: "red" } }],
        });
    }
);

it("should convert animations", () => {
    const object = [
        {
            animations: {
                customAnimation: {
                    "0%": { color: "red" },
                    "100%": { color: "blue" },
                },
            },
        },
    ];

    expect(mergeStyleSheets(object)).toStrictEqual({
        animations: {
            customAnimation: {
                "0%": { color: "red" },
                "100%": { color: "blue" },
            },
        },
    });
});

it.each([[undefined], [null], [""], [0], [[]], [{}], [Symbol.for()], [false]])(
    "should should skip falsy animations",
    (animationContent) => {
        const object = [
            {
                animations: {
                    animationsName: animationContent,
                },
            },
        ];

        expect(mergeStyleSheets(object)).toStrictEqual({});
    }
);

it.each([[undefined], [null], [0], ["name"], [true], [Symbol.for()], [{}]])(
    "should not override falsy duplicate animations",
    (selectorContent) => {
        const object = [
            {
                animations: {
                    anim: { color: "red" },
                },
            },
            {
                animations: {
                    anim: selectorContent,
                },
            },
        ];

        expect(mergeStyleSheets(object)).toStrictEqual({
            animations: { anim: { color: "red" } },
        });
    }
);

it("should convert media query", () => {
    const object = [
        {
            mediaQueries: [
                { condition: "customMediaQuery", normal: { color: "red" } },
            ],
        },
    ];

    expect(mergeStyleSheets(object)).toStrictEqual({
        mediaQueries: [
            {
                condition: "customMediaQuery",
                selectors: { normal: { color: "red" } },
            },
        ],
    });
});

it("should skip duplicate media queries", () => {
    const object = [
        {
            mediaQueries: [
                { condition: "customMediaQuery", normal: { color: "red" } },
                { condition: "customMediaQuery", normal: { color: "red" } },
            ],
        },
    ];

    expect(mergeStyleSheets(object)).toStrictEqual({
        mediaQueries: [
            {
                condition: "customMediaQuery",
                selectors: { normal: { color: "red" } },
            },
        ],
    });
});

it.each([[undefined], [null], [""], [0], [[]], [{}], [Symbol.for()], [false]])(
    "should should skip falsy media queries",
    (content) => {
        const object = [
            {
                mediaQueries: [content],
            },
        ];

        expect(mergeStyleSheets(object)).toStrictEqual({});
    }
);

it("should append imports statements", () => {
    expect(mergeStyleSheets([{ imports: ["Hello World"] }])).toStrictEqual({
        imports: ["Hello World"],
    });

    expect(
        mergeStyleSheets([{ imports: ["Hello World", "Hello World"] }])
    ).toStrictEqual({
        imports: ["Hello World"],
    });
});

it.each([[undefined], [null], [""], [0], [[]], [{}], [Symbol.for()], [false]])(
    "should ignore non-string statements",
    (item) => {
        expect(mergeStyleSheets([{ imports: [item] }])).toStrictEqual({
            imports: [],
        });
    }
);

it("should append vars", () => {
    expect(mergeStyleSheets([{ var: { color: "blue" } }])).toStrictEqual({
        var: { color: "blue" },
    });
});

it.each([[undefined], [null], [""], [0], [[]], [{}], [Symbol.for()], [false]])(
    "should ignore falsy var declarations",
    (item) => {
        expect(mergeStyleSheets([{ var: item }])).toStrictEqual({});
    }
);
