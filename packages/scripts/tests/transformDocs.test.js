/**
 * @jest-environment jsdom
 */

import { transformDocs } from "../utility/index";

it.each([
    [["cool title"], ["/**", "* cool title", "*/"]],
    [
        ["## Title", "documentation goes here", "@see {@link someLink.com}"],
        [
            "/**",
            "* ## Title",
            "* documentation goes here",
            "* @see {@link someLink.com}",
            "*/",
        ],
    ],
])("should render render docs correctly", (docs, expected) => {
    expect(transformDocs(docs)).toStrictEqual(expected);
});
