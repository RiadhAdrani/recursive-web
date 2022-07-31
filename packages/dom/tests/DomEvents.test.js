const { is } = require("../DomEvents");

it.each([
    ["onClick", true],
    ["onClickGlobal", true],
    ["onMyEvent", false],
])("should confirm valid events", (attr, expected) => {
    expect(is(attr)).toBe(expected);
});
