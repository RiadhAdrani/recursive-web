/**
 * @important
 * Do not run this file using node.
 * use `npm run generate` instead
 */

const fs = require("fs");
const path = require("path");
const { generateAttributeDoc, generateInterfaceProp } = require(".");

const html = require("../components/HTMLelements").items;
const svg = require("../components/SVGelements").items;
const util = require("../components/Utilities").items;
const { list: attrs } = require("../dom/DomAttributes");

let generated = "// This file is generated \n\n";

generated += fs.readFileSync(path.join("./core.d.ts"), { encoding: "utf-8" });

/**
 * Generates utility interfaces for common HTML elements
 */
for (let ele in html) {
    let customInterface = `export interface ${ele}Props extends CommonAttributes, Events, HTMLAttributes{`;

    for (let prop in html[ele].props) {
        const generated = "\n" + generateInterfaceProp(prop, attrs[prop]);

        customInterface += generated;
    }

    if (html[ele].childless == undefined) {
        customInterface += `\nchildren:Array<RecursiveElement>;`;
    }

    customInterface += "}\n\n";

    generated += customInterface;
}

/**
 * Generates utility interfaces for utility HTML elements
 */
for (let ele in util) {
    let customInterface = `export interface ${ele}Props extends CommonAttributes, Events, HTMLAttributes{`;

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

/**
 * Generate HTML Common interface
 */
const gProps = [];

for (let prop in attrs) {
    if (attrs[prop].els === true) {
        gProps.push(prop);
    }
}

let htmlCommonInterface =
    "export interface HTMLAttributes extends CommonAttributes, Events {";

for (let prop of gProps) {
    let values = "";

    if (attrs[prop].values) {
        values = Array.isArray(attrs[prop].values)
            ? attrs[prop].values.map((val) => `"${val}"`).join(" | ")
            : attrs[prop].values;
    }

    htmlCommonInterface += `${generateAttributeDoc(prop, attrs[prop])}
${prop}:${values};\n`;
}

htmlCommonInterface += "}";

generated += htmlCommonInterface;

try {
    fs.writeFileSync(path.join("./lib.d.ts"), generated);
    console.log("Types written");
} catch (error) {
    console.log("Failed to write Types");
    console.log(error);
}
