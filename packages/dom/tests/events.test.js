/**
 * @jest-environment jsdom
 */

import { isEvent } from "..";

it.each([
    ["onClick", true],
    ["onClickGlobal", true],
    ["onMyEvent", false],
])("should confirm valid events", (attr, expected) => {
    expect(isEvent(attr)).toBe(expected);
});
