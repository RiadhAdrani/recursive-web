/**
 * @important
 * Do not run this file using node.
 * use `npm run generate` instead
 */

const { HTML_NS, SVG_NS } = require("../constants/index.js");
const { generateComponent } = require("./index.js");
const HTML = require("../components/html").items;
const Utility = require("../components/utility").items;
const SVG = require("../components/svg").items;

function writeFile({ imports = [], filePath = "", content = [] }) {
    const fs = require("fs");
    const path = require("path");

    const _imports = [
        `import {createElement} from "../packages/components";`,
        ...imports,
    ];

    const contentAsString = [..._imports, ...content].join("\n");

    try {
        fs.writeFileSync(path.resolve(__dirname, filePath), contentAsString);
        console.log(`Successfully written into file "${filePath}"`);
    } catch (e) {
        console.log(e);
    }
}

const html_file_content = [];
const svg_file_content = [];

html_file_content.push(
    ...Object.keys(HTML).map((name) => {
        const data = HTML[name];

        return generateComponent(
            name,
            data.tag,
            HTML_NS,
            `${name}Props`,
            data,
            null,
            "https://developer.mozilla.org/en-US/docs/Web/HTML/Element"
        );
    })
);

html_file_content.push(
    ...Object.keys(Utility).map((name) => {
        const data = Utility[name];

        const handler = data.handler
            ? `CustomElements.items.${name}.handler(el);`
            : null;

        return generateComponent(
            name,
            data.tag,
            HTML_NS,
            `${name}Props`,
            data,
            handler,
            false
        );
    })
);

svg_file_content.push(
    ...Object.keys(SVG).map((name) => {
        const data = SVG[name];

        return generateComponent(
            name,
            data.tag,
            SVG_NS,
            `SVG${name}Props`,
            data,
            null,
            "https://developer.mozilla.org/en-US/docs/Web/SVG/Element"
        );
    })
);

module.exports = () => {
    writeFile({
        imports: [
            'import CustomElements from "../packages/components/utility";',
        ],
        content: html_file_content,
        filePath: "../../html/index.js",
    });

    writeFile({
        content: svg_file_content,
        filePath: "../../svg/index.js",
    });
};
