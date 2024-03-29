/**
 * @jest-environment jsdom
 */

import { transformKey } from "../utility/index";

it.each([
    [
        "title",
        "string",
        ["cool title"],
        ["/**", "* ## title", "* cool title", "*/", '"title":string;'],
    ],
    [
        "title",
        ["string", "number"],
        ["cool title"],
        ["/**", "* ## title", "* cool title", "*/", '"title":string | number;'],
    ],
    ["title", "string", [], ["/**", "* ## title", "*/", '"title":string;']],
    ["", "string", ["cool title"], []],
    ["title", "", ["cool title"], []],
])("should render key correctly", (attr, value, docs, expected) => {
    expect(
        transformKey({ key: attr, docs, value, isOptional: false })
    ).toStrictEqual(expected);
});
