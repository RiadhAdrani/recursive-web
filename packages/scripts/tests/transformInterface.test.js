const { transformInterface } = require("../utility");

it.each([
    [
        {
            name: "MyInterface",
            keys: ["name", "version"],
            callback: (key) => [`${key}:string;`],
            docs: [],
            extending: [],
            typeParams: [],
        },
        [
            "/**",
            "* ## MyInterface",
            "*/",
            "export interface MyInterface",
            "{",
            "name:string;",
            "version:string;",
            "}",
        ],
    ],
    [
        {
            name: "MyInterface",
            keys: ["name", "version"],
            callback: (key) => [`${key}:T;`],
            docs: ["This is my interface"],
            extending: ["HisInterface"],
            typeParams: ["T = string"],
        },
        [
            "/**",
            "* ## MyInterface",
            "* This is my interface",
            "*/",
            "export interface MyInterface < T = string > extends HisInterface",
            "{",
            "name:T;",
            "version:T;",
            "}",
        ],
    ],
    [
        {
            name: "MyInterface",
            keys: ["name", "version"],
            callback: (key) => [`${key}:T;`],
            docs: ["This is my interface"],
            extending: ["HisInterface", "TheirInterface"],
            typeParams: ["T = string", "Y = number"],
        },
        [
            "/**",
            "* ## MyInterface",
            "* This is my interface",
            "*/",
            "export interface MyInterface < T = string,Y = number > extends HisInterface,TheirInterface",
            "{",
            "name:T;",
            "version:T;",
            "}",
        ],
    ],
])("should render interface jsDocs correctly", (params, expected) => {
    expect(transformInterface(params)).toStrictEqual(expected);
});
