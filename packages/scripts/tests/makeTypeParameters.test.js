/**
 * @jest-environment jsdom
 */

import { makeTypeParameters } from "../utility";

it.each([
    [[], ""],
    [["T", "K"], "< T , K >"],
    [["T = string", "K = string"], "< T = string , K = string >"],
])("should render type correctly", (param, expected) => {
    expect(makeTypeParameters(param)).toStrictEqual(expected);
});
