/**
 * @important
 * Do not run this file using node.
 * use `npm run generate` instead
 */

const { HTML_NS, SVG_NS } = require("../constants/index.js");
const { generateComponent } = require("./index.js");
const Elements = require("../components/HTMLelements.js").items;
const Custom = require("../components/Utilities.js").items;
const SVG = require("../components/SVGelements.js").items;

(() => {
    let imp = `import CustomElements from "../packages/components/Utilities.js";
import {createElement} from "..";`;

    let elements = "";

    for (let element in Elements) {
        elements += generateComponent(
            element,
            element.toLowerCase(),
            HTML_NS,
            `${element}Props`,
            Elements[element],
            null,
            "https://developer.mozilla.org/en-US/docs/Web/HTML/Element"
        );
    }

    for (let element in Custom) {
        elements += generateComponent(
            element,
            Custom[element].tag,
            HTML_NS,
            `${element}Props`,
            Custom[element],
            Custom[element].handler
                ? `CustomElements.items.${element}.handler(el);`
                : null
        );
    }

    const output = imp + "\n" + elements;

    const fs = require("fs");
    const path = require("path");

    try {
        fs.writeFileSync(
            path.resolve(__dirname, "../../html/index.js"),
            output
        );
        console.log("HTML Element written");
    } catch (error) {
        console.log("Failed to write HTML ELEMENTS");
        console.log(error);
    }
})();

(() => {
    let imp = `import {createElement} from "..";`;

    let elements = "";

    for (let element in SVG) {
        elements += generateComponent(
            element,
            element.toLocaleLowerCase(),
            SVG_NS,
            `SVG${element}Props`,
            SVG[element],
            null,
            "https://developer.mozilla.org/en-US/docs/Web/SVG/Element"
        );
    }

    const output = imp + "\n" + elements;

    const fs = require("fs");
    const path = require("path");

    try {
        fs.writeFileSync(path.resolve(__dirname, "../../svg/index.js"), output);
        console.log("SVG Element written");
    } catch (error) {
        console.log("Failed to write SVG ELEMENTS");
        console.log(error);
    }
})();
