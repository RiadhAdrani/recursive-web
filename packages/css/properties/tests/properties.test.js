const { is, renderProperty, renderValue, validValue } = require("..");

it.each([
    [undefined],
    [null],
    [""],
    [{}],
    [0],
    [[]],
    ["string"],
    ["anImaginaryProperty"],
])("should ignore invalid falsy values and data types | case '%s'", (input) => {
    expect(is(input)).toBe(false);
});

it.each([
    [undefined],
    [null],
    [""],
    [{}],
    [[]],
    [" "],
    ["{lorem"],
    ["{lorem}"],
    ["}lorem"],
    ["lor{e}m"],
    ["lor{}em"],
    ["lorem{"],
    ["lorem}"],
    ["lorem{}"],
    ["{}lorem"],
])("should ignore invalid values | case '%s'", (input) => {
    expect(validValue(input)).toBe(false);
});

it.each([
    [undefined, ""],
    [null, ""],
    ["", ""],
    [{}, ""],
    [[], ""],
    [" ", ""],
    ["{lorem", ""],
    ["{lorem}", ""],
    ["}lorem", ""],
    ["lor{e}m", ""],
    ["lor{}em", ""],
    ["lorem{", ""],
    ["lorem}", ""],
    ["lorem{}", ""],
    ["{}lorem", ""],
    ["red", "red"],
    ["data:local_url", "data:local_url"],
    [["red"], "red"],
    [["red", "green", "blue"], "red green blue"],
    [["", "green", "blue"], "green blue"],
    [["red", "", "blue"], "red blue"],
    [["red", "green", ""], "red green"],
    [["", "", ""], ""],
])("should render the correct value | case '%s'", (input, expected) => {
    expect(renderValue(input)).toBe(expected);
});

it.each([
    ["color", "red", "color:red;"],
    ["backgroundColor", "blue", "background-color:blue;"],
    ["borderTopLeftRadius", "10px", "border-top-left-radius:10px;"],
    ["my-custom-property", "value", "my-custom-property:value;"],
    [
        "transitionProperty",
        ["color", "background-color"],
        "transition-property:color, background-color;",
    ],
])(
    "should render '{property}:{value}' correctly | case '%s'",
    (property, value, expected) => {
        expect(renderProperty(property, value)).toBe(expected);
    }
);
