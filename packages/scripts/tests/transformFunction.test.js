/**
 * @jest-environment jsdom
 */

import { transformFunction } from "../utility";

it.each([
    [
        {
            isDeclaration: false,
            docs: ["Documentation for my function."],
            decorators: [],
            async: false,
            name: "myFunction",
            typedParams: [],
            params: [],
            body: [],
            returnType: "void",
        },
        [
            "/**",
            "* ## myFunction",
            "* Documentation for my function.",
            "* @returns {void}",
            "*/",
            "export  function  myFunction (  )",
            "{",
            "}",
        ],
    ],
    [
        {
            isDeclaration: true,
            docs: ["Documentation for my function."],
            decorators: [],
            async: false,
            name: "myFunction",
            typedParams: [],
            params: [],
            body: [],
            returnType: "void",
        },
        [
            "/**",
            "* ## myFunction",
            "* Documentation for my function.",
            "* @returns {void}",
            "*/",
            "export  function  myFunction (  ) : void ;",
        ],
    ],
    [
        {
            isDeclaration: false,
            docs: ["Documentation for my function."],
            decorators: ["deprecated"],
            async: true,
            name: "myFunction",
            typedParams: ["T"],
            params: ["input"],
            body: ["return input;"],
            returnType: "T",
        },
        [
            "/**",
            "* ## myFunction",
            "* Documentation for my function.",
            "* @deprecated",
            "* @returns {T}",
            "*/",
            "export async function < T > myFunction ( input )",
            "{",
            "return input;",
            "}",
        ],
    ],
    [
        {
            isDeclaration: true,
            docs: ["Documentation for my function."],
            decorators: ["deprecated"],
            async: true,
            name: "myFunction",
            typedParams: ["T"],
            params: ["input"],
            body: ["return input;"],
            returnType: "T",
        },
        [
            "/**",
            "* ## myFunction",
            "* Documentation for my function.",
            "* @deprecated",
            "* @returns {T}",
            "*/",
            "export async function < T > myFunction ( input ) : T ;",
        ],
    ],
])("should render function correctly", (params, expected) => {
    expect(transformFunction(params)).toStrictEqual(expected);
});
