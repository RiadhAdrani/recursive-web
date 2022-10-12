/**
 * @important
 * Do not run this file using node.
 * use `npm run generate` instead
 */

const { globalValues, ListOfCssProperties } = require("../css/properties");
const { ListOfFontFaceProperties } = require("../css/font-face/");
const { ListOfCssSelectors } = require("../css/selectors");
const fs = require("fs");
const path = require("path");
const { makeJsDocBlock } = require(".");

let generated = "// This file has been generated. \n";
let selector = "";
let selectorsType = "";

function toUpperCamelCase(input = "") {
    const sequence = input.split(/[\s-]/);

    return sequence.reduce(
        (sum, value) => sum + value[0].toUpperCase() + value.substring(1),
        ""
    );
}

function makeUtil(key, object) {
    let util = `export const ${toUpperCamelCase(key)} = {`;

    [...globalValues, ...object.values].forEach((value) => {
        util += `${toUpperCamelCase(value)}:"${value}",`;
    });

    util += "};\n";

    return util;
}

function addToSelector(key, object) {
    let type = "";

    if (object.type != "string") {
        type = object.type;
    } else if (object.values.length > 0) {
        object.values.forEach((value, index) => {
            type += `"${value}"`;
            type += index != object.values.length - 1 ? "|" : "";
        });
    } else {
        type = object.type;
    }

    return `${makeJsDocBlock(
        object.docs,
        ["## `" + object.css + "`", ""],
        [
            ...object.decorators.map((item) => `@${item}`),
            ...object.links.map((link) => `@see {@link ${link}}`),
        ]
    )}${key}:${type};`;
}

function addSelectorType(key, object) {
    return `${makeJsDocBlock(
        object.docs,
        ["## `.element" + object.css + "`", ""],
        [
            ...object.decorators.map((item) => `@${item}`),
            ...object.links.map((link) => `@see {@link ${link}}`),
        ]
    )}${key}:Selector;\n`;
}

function addFontFace() {
    return Object.keys(ListOfFontFaceProperties)
        .map((prop) => {
            const object = ListOfFontFaceProperties[prop];

            const type =
                object.values.length > 0
                    ? object.values.map((val) => `"${val}"`).join(" | ")
                    : object.type;

            return `${makeJsDocBlock(
                object.docs,
                ["## `" + object.css + "`", ""],
                [
                    ...object.decorators.map((item) => `@${item}`),
                    ...object.links.map((link) => `@see {@link ${link}}`),
                ]
            )}${prop}:${type};`;
        })
        .join("\n");
}

module.exports = () => {
    for (let key in ListOfCssProperties) {
        selector += addToSelector(key, ListOfCssProperties[key]);

        if (ListOfCssProperties[key].values.length == 0) continue;
        generated += makeUtil(key, ListOfCssProperties[key]);
    }

    for (let key in ListOfCssSelectors) {
        selectorsType += addSelectorType(key, ListOfCssSelectors[key]);
    }

    const old = fs.readFileSync(path.join("./lib.d.ts"), { encoding: "utf-8" });
    const newTypes = old
        .replace(
            "export interface Selector {}",
            `export interface Selector {${selector}}`
        )
        .replace(
            "export interface SelectorTypes {}",
            `export interface SelectorTypes {${selectorsType}}`
        )
        .replace(
            "export interface FontFace {}",
            `export interface FontFace {${addFontFace()}}`
        );

    fs.writeFileSync(path.join("./style/index.js"), generated);
    fs.writeFileSync(path.join("./lib.d.ts"), newTypes);

    console.log("StyleSheet written");
};
