const fs = require("fs");
const path = require("path");

const html = require("../components/HTMLelements");
const svg = require("../components/SVGelements");
const util = require("../components/Utilities");

let generated = "// This file is generated \n\n";

generated += fs.readFileSync(path.join("../../core.d.ts"), { encoding: "utf-8" });

for (let ele in html) {
    let customInterface = `export interface ${ele}Props extends HTMLAttributes{`;

    for (let prop in html[ele].props) {
        customInterface += `${prop}:${html[ele].props[prop]};`;
    }

    customInterface += "}\n\n";

    generated += customInterface;
}

for (let ele in util) {
    let customInterface = `export interface ${ele}Props extends HTMLAttributes{`;

    for (let prop in util[ele].props) {
        customInterface += `${prop}:${util[ele].props[prop]};`;
    }

    customInterface += "}\n\n";

    generated += customInterface;
}

for (let ele in svg) {
    let customInterface = `export interface SVG${ele}Props extends SVGAttributes{`;

    for (let prop in svg[ele].props) {
        customInterface += `${prop}:${svg[ele].props[prop]};`;
    }

    customInterface += "}\n\n";

    generated += customInterface;
}

fs.writeFileSync(path.join("../../lib.d.ts"), generated);
