const {
    get,
    is,
    render,
    customSelectorAlreadyExist,
} = require("../CssSelectors");

it.each([
    [undefined],
    [null],
    [""],
    [{}],
    [0],
    [[]],
    ["string"],
    ["anImaginarySelector"],
])("should ignore invalid falsy values and data types | case '%s'", (input) => {
    expect(is(input)).toBe(false);
});

it.each([
    [""],
    [":hover"],
    [":active"],
    [" :focus"],
    [" ::-webkit-scrollbar "],
    [" ::-webkit-scrollbar-thumb:active "],
])("should be able to detect existing selectors | case '%s'", (input) => {
    expect(typeof customSelectorAlreadyExist(input)).toBe("string");
});

it.each([
    [[], { color: "red" }, ""],
    [0, { color: "red" }, ""],
    [null, { color: "red" }, ""],
    [undefined, { color: "red" }, ""],
    ["", { color: "red" }, ""],
    ["div", undefined, ""],
    ["div", null, ""],
    ["div", 0, ""],
    ["div", [], "div{}"],
    ["div", { color: "red" }, "div{color: red;}"],
    ["div", { culur: "red" }, "div{}"],
])(
    "should render selector content correctly | case '%s':'%s'",
    (selector, content, expected) => {
        expect(render(selector, content)).toBe(expected);
    }
);
