const { isAttribute } = require("..");

it.each([
    ["title", true],
    ["z", true],
    ["imaginaryProperty", false],
])("should confirm valid attributes", (attr, expected) => {
    expect(isAttribute(attr)).toBe(expected);
});
