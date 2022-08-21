const mergeStyleSheets = require("../mergeStyleSheets");
const processComponentStyleSheet = require("../processComponentStyleSheet");

it.each([
    [undefined],
    [null],
    [""],
    [{}],
    [0],
    [[]],
    ["string"],
    [{ notAValidKey: {} }],
])("input '%s' to be ignored or empty", (input) => {
    expect(processComponentStyleSheet(input)).toStrictEqual({});
});
