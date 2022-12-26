import mergeStyleSheets from "../mergeStyleSheets";
import processComponentStyleSheet from "../processComponentStyleSheet";

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
