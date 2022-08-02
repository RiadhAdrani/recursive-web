/**
 * @important
 * Do not run this file using node.
 * use `npm run generate` instead
 */

const fs = require("fs");
const path = require("path");

const html = require("../components/HTMLelements").items;
const svg = require("../components/SVGelements").items;
const util = require("../components/Utilities").items;
const { list } = require("../dom/DomEvents");

let generated = "// This file is generated \n\n";

generated += fs.readFileSync(path.join("./core.d.ts"), { encoding: "utf-8" });

/**
 * Generates utility interfaces for common HTML elements
 */
for (let ele in html) {
    let customInterface = `export interface ${ele}Props extends HTMLAttributes{`;

    for (let prop in html[ele].props) {
        customInterface += `${prop}:${html[ele].props[prop]};`;
    }

    if (html[ele].childless == undefined) {
        customInterface += `children:Array<RecursiveElement>;`;
    }

    customInterface += "}\n\n";

    generated += customInterface;
}

/**
 * Generates utility interfaces for utility HTML elements
 */
for (let ele in util) {
    let customInterface = `export interface ${ele}Props extends HTMLAttributes{`;

    for (let prop in util[ele].props) {
        customInterface += `${prop}:${util[ele].props[prop]};`;
    }

    if (util[ele].childless == undefined) {
        customInterface += `children:Array<RecursiveElement>;`;
    }

    customInterface += "}\n\n";

    generated += customInterface;
}

/**
 * Generates utility interfaces for SVG elements
 */
for (let ele in svg) {
    let customInterface = `export interface SVG${ele}Props extends SVGAttributes{`;

    for (let prop in svg[ele].props) {
        customInterface += `${prop}:${svg[ele].props[prop]};`;
    }

    customInterface += "}\n\n";

    generated += customInterface;
}

try {
    fs.writeFileSync(path.join("./lib.d.ts"), generated);
    console.log("Types written");
} catch (error) {
    console.log("Failed to write Types");
    console.log(error);
}
