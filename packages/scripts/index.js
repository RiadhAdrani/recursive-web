const { HTML_NS } = require("../constants");

/**
 * Transform an array of strings to a `JSDoc` block.
 * @param {Array<string>} content
 * @param {Array<string>} before
 * @param {Array<string>} after
 *
 */
function makeJsDocBlock(content = [], before = [], after = []) {
    const all = [];

    if (Array.isArray(before)) {
        all.push(...before);
    }

    if (Array.isArray(content)) {
        all.push(...content);
    }

    if (Array.isArray(after)) {
        all.push(...after);
    }

    const res = all.reduce((sum, val, index) => {
        return `${sum}* ${val}${index == all.length - 1 ? "" : "\n"}`;
    }, "");

    return `/**\n${res}\n*/`;
}

function generateComponent(
    IdName,
    htmlTag,
    ns = HTML_NS,
    propsType,
    data,
    handler,
    linkTemplate = false
) {
    return `
    ${makeJsDocBlock(
        data.docs,
        ["## _`" + IdName + "` Component_", ""],
        [
            "",
            linkTemplate ? `@link ${linkTemplate}/${htmlTag}` : "",
            `@param {import("../lib.js").${propsType}} props properties`,
            `@returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element`,
        ]
    )}
    export function ${IdName}(props){
        const el = createElement("${htmlTag}",{...props,rendererOptions:{ns:"${ns}"}});
        ${handler || ""}
        return el;
    }`;
}

function generateAttributeDoc(attrName, data) {
    let used = "";
    let values = "";

    if (data.els) {
        used =
            data.els === true
                ? "Global attribute"
                : data.els.reduce((sum, val) => {
                      return sum + " `" + val + "`";
                  }, "");
    }

    if (data.values) {
        values = Array.isArray(data.values)
            ? data.values.map((val) => `"${val}"`).join(" | ")
            : data.values;
    }

    return `${makeJsDocBlock(
        data.docs,
        ["### _`" + data.name + "` Attribute_", ""],
        [`@used ${used}`]
    )}`;
}

function generateAttributeType(attrName, typeSuffix, data) {
    let used = "";
    let values = "";

    if (data.els) {
        used =
            data.els === true
                ? "Global attribute"
                : data.els.reduce((sum, val) => {
                      return sum + " `" + val + "`";
                  }, "");
    }

    if (data.values) {
        values = Array.isArray(data.values)
            ? data.values.map((val) => `"${val}"`).join(" | ")
            : data.values;
    }

    return `${makeJsDocBlock(
        data.docs,
        ["## _`" + data.name + "` Attribute_", ""],
        [`@used ${used}`]
    )}export type ${capitalize(attrName)}${typeSuffix} = ${values};`;
}

/**
 *
 * @param {string} input
 */
function capitalize(input) {
    return input.substring(0, 1).toUpperCase() + input.substring(1);
}

function generateInterfaceProp(name, data) {
    let values = "";

    if (data.values) {
        values = Array.isArray(data.values)
            ? data.values.map((val) => `"${val}"`).join(" | ")
            : data.values;
    }

    return `${generateAttributeDoc(name, data)}
${name}:${values};`;
}

module.exports = {
    makeJsDocBlock,
    generateComponent,
    generateAttributeType,
    generateAttributeDoc,
    generateInterfaceProp,
    capitalize,
};
