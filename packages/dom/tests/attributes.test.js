/**
 * @jest-environment jsdom
 */

const { isAttribute, renderAttributeValue } = require("..");

it.each([
    ["title", true],
    ["z", true],
    ["imaginaryProperty", false],
])("should confirm valid attributes", (attr, expected) => {
    expect(isAttribute(attr)).toBe(expected);
});

it.each([
    ["className", "btn", "btn"],
    ["className", ["btn", "btn-primary", "wide"], "btn btn-primary wide"],
])("should render attribute values correctly", (attr, value, expected) => {
    expect(renderAttributeValue(attr, value)).toBe(expected);
});
