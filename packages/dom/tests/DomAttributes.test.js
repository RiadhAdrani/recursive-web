const { is } = require("../DomAttributes");

it.each([
    ["title", true],
    ["z", true],
    ["imaginaryProperty", false],
])("should confirm valid attributes", (attr, expected) => {
    expect(is(attr)).toBe(expected);
});
