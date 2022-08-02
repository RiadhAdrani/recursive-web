/**
 * @important
 * Do not run this file using node.
 * use `npm run generate` instead
 */

const { globalValues, List: list } = require("../css/lists/Properties");
const fs = require("fs");
const path = require("path");

let generated = "// This file has been generated. \n";
let selector = "";

function toUpperCamelCase(input = "") {
    const sequence = input.split(/[\s-]/);

    return sequence.reduce((sum, value) => sum + value[0].toUpperCase() + value.substring(1), "");
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

    return `${key}:${type};`;
}

for (let key in list) {
    selector += addToSelector(key, list[key]);

    if (list[key].values.length == 0 && list[key].methods.length == 0) continue;
    generated += makeUtil(key, list[key]);
}

const old = fs.readFileSync(path.join("./lib.d.ts"), { encoding: "utf-8" });
const newTypes = old.replace(
    "export interface Selector {}",
    `export interface Selector {${selector}}`
);

fs.writeFileSync(path.join("./style/index.js"), generated);
fs.writeFileSync(path.join("./lib.d.ts"), newTypes);

console.log("StyleSheet written");
