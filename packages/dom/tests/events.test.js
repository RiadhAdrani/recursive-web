const { isEvent } = require("..");

it.each([
    ["onClick", true],
    ["onClickGlobal", true],
    ["onMyEvent", false],
])("should confirm valid events", (attr, expected) => {
    expect(isEvent(attr)).toBe(expected);
});
