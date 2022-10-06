/**
 * @important
 * Do not run this file using node.
 * use `npm run generate` instead
 */

const fs = require("fs");
const path = require("path");
const { generateAttributeDoc, generateInterfaceProp } = require(".");
const html = require("../components/html").items;
const svg = require("../components/svg").items;
const util = require("../components/utility").items;
const { ListOfAttributes } = require("../dom");

let generated = "// This file is generated \n\n";

generated += fs.readFileSync(path.join("./core.d.ts"), { encoding: "utf-8" });

function createElementPropsInterface(name, extending = [], content = "") {
    let _interface = `export interface ${name} `;
    _interface += extending.length > 0 ? `extends ${extending.join(",")}` : "";
    _interface += "{";
    _interface += content;
    _interface += "}\n\n";

    return _interface;
}

/**
 * Generates utility interfaces for common HTML elements
 */
for (let ele in html) {
    let _content = ``;

    for (let prop in html[ele].props) {
        const generated =
            "\n" + generateInterfaceProp(prop, ListOfAttributes[prop]);

        _content += generated;
    }

    const _name = `${ele}Props`;
    const _header = [
        "CommonAttributes",
        `Events<${html[ele].nativeInterface}>`,
        "HTMLAttributes",
    ];

    if (html[ele].childless != true) _header.push("ElementChildren");

    generated += createElementPropsInterface(_name, _header, _content);
}

/**
 * Generates utility interfaces for utility HTML elements
 */
for (let ele in util) {
    let _content = ``;

    for (let prop in util[ele].props) {
        _content += `${prop}:${util[ele].props[prop]};`;
    }

    const _name = `${ele}Props`;
    const _header = [
        "CommonAttributes",
        `Events<${util[ele].nativeInterface}>`,
        "HTMLAttributes",
    ];

    if (util[ele].childless != true) _header.push("ElementChildren");

    generated += createElementPropsInterface(_name, _header, _content);
}

/**
 * Generates utility interfaces for SVG elements
 */
for (let ele in svg) {
    let _content = ``;

    for (let prop in svg[ele].props) {
        _content += "\n" + generateInterfaceProp(prop, ListOfAttributes[prop]);
    }

    const _name = `SVG${ele}Props`;
    const _header = [
        "CommonAttributes",
        `Events<${svg[ele].nativeInterface}>`,
        "HTMLAttributes",
    ];

    if (svg[ele].childless != true) _header.push("ElementChildren");

    generated += createElementPropsInterface(_name, _header, _content);
}

/**
 * Generate HTML Common interface
 */
const gProps = [];

for (let prop in ListOfAttributes) {
    if (ListOfAttributes[prop].els === true) {
        gProps.push(prop);
    }
}

let htmlCommonInterface =
    "export interface HTMLAttributes extends CommonAttributes, Events {";

for (let prop of gProps) {
    let values = "";

    if (ListOfAttributes[prop].values) {
        values = Array.isArray(ListOfAttributes[prop].values)
            ? ListOfAttributes[prop].values.map((val) => `"${val}"`).join(" | ")
            : ListOfAttributes[prop].values;
    }

    htmlCommonInterface += `${generateAttributeDoc(
        prop,
        ListOfAttributes[prop]
    )}
${prop}:${values};\n`;
}

htmlCommonInterface += "}";

generated += htmlCommonInterface;

module.exports = () => {
    try {
        fs.writeFileSync(path.join("./lib.d.ts"), generated);
        console.log("Types written");
    } catch (error) {
        console.log("Failed to write Types");
        console.log(error);
    }
};
