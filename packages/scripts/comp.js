/**
 * @important
 * Do not run this file using node.
 * use `npm run generate` instead
 */

const Elements = require("../components/HTMLelements.js").items;
const Custom = require("../components/Utilities.js").items;
const SVG = require("../components/SVGelements.js").items;

const component = (tag) => `
/**
 * Create \`<${tag.toLocaleLowerCase()}>\` element.
 * @param {import("../lib.js").${tag}Props} props 
 * @returns Recursive Web Element
 */
function ${tag}(props){
    return {...props,elementType:"${tag.toLocaleLowerCase()}"};
}`;

const svgComponent = (tag) => `
/**
 * Create \`<${tag.toLocaleLowerCase()}>\` element.
 * @param {import("../lib.js").SVG${tag}Props} props
 * @returns Recursive Web Element
 */
function ${tag}(props){
    return {...props,rendererOptions:{ns:"http://www.w3.org/2000/svg"},elementType:"${tag.toLocaleLowerCase()}"};
}`;

const customComponent = (name, tag, handler) => `
/**
 * Create \`<${tag.toLocaleLowerCase()}>\` element.
 * @param {import("../lib.js").${name}Props} props 
 * @returns Recursive Web Element
 */
function ${name}(props){
    const el = {...props,elementType:"${tag.toLocaleLowerCase()}"}

    ${handler ? `CustomElements.items.${name}.handler(el);` : ""}

    return el;
 
}`;

(() => {
    let imp = `import CustomElements from "../packages/components/Utilities.js";`;

    let elements = "";
    let exp = "export {";

    for (let element in Elements) {
        elements += component(element);
        exp += element + ",";
    }

    for (let element in Custom) {
        elements += customComponent(element, Custom[element].tag, Custom[element].handler);
        exp += element + ",";
    }

    exp += "}";

    const output = imp + "\n" + elements + "\n" + exp;

    const fs = require("fs");
    const path = require("path");

    fs.writeFile(path.resolve(__dirname, "../../html/index.js"), output, (err) => {
        console.log(err ? "Failed" : "Success");
        console.log(err);
    });
})();

(() => {
    let imp = ``;

    let elements = "";
    let exp = "export {";

    for (let element in SVG) {
        elements += svgComponent(element);
        exp += element + ",";
    }

    exp += "}";

    const output = imp + "\n" + elements + "\n" + exp;

    const fs = require("fs");
    const path = require("path");

    fs.writeFile(path.resolve(__dirname, "../../svg/index.js"), output, (err) => {
        console.log(err ? "Failed" : "Success");
    });
})();
