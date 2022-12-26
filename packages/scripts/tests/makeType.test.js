/**
 * @jest-environment jsdom
 */

import { makeType } from "../utility";

it.each([
    ["string", "string"],
    [[100, 200, 300], '"100" | "200" | "300"'],
    [["text", "password", "search"], '"text" | "password" | "search"'],
])("should render type correctly", (param, expected) => {
    expect(makeType(param)).toStrictEqual(expected);
});
