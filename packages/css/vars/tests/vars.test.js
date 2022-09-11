const { renderVar } = require("..");

it.each([
    ["myColor", "red", "--myColor:red;"],
    ["myOpacity", 1, "--myOpacity:1;"],
    [undefined, "any", ""],
    [null, "any", ""],
    [undefined, "any", ""],
    ["", "any", ""],
    [1, "any", ""],
    [null, "any", ""],
    ["any", undefined, ""],
    ["any", null, ""],
    ["any", undefined, ""],
    ["any", "", ""],
    ["any", null, ""],
])(
    "should render correct statement | case key='%s' value='%s' expected='%s'",
    (key, value, expected) => {
        expect(renderVar(key, value)).toBe(expected);
    }
);
