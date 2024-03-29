import { is, renderSelector, customSelectorAlreadyExists } from "..";

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
    expect(typeof customSelectorAlreadyExists(input)).toBe("string");
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
    ["div", { color: "red" }, "div{color:red;}"],
    ["div", { myColor: "red" }, "div{myColor:red;}"],
])(
    "should render selector content correctly | case '%s':'%s'",
    (selector, content, expected) => {
        expect(renderSelector(selector, content)).toBe(expected);
    }
);
