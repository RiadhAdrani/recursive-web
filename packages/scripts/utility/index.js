const { isBlank, wrap } = require("@riadh-adrani/utility-js/string");
const { isFalsy } = require("@riadh-adrani/utility-js/");
const { HTML_NS } = require("../../constants");
const { isAttribute, ListOfAttributes } = require("../../dom");

function makeJsDocs({ title = "", docs = [], decorators = [], links = [] }) {
    const content = [
        `## ${title}`,
        ...docs,
        ...decorators.map((item) => `@${item}`),
        ...links.map((item) => `@see {@link ${item}}`),
    ];

    return transformDocs(content);
}

/**
 * @param {Array<string> | string} values
 * @returns {string}
 */
function makeType(values) {
    return typeof values === "string"
        ? values
        : values.map((item) => `"${item}"`).join(" | ");
}

/**
 * @param {Array<string>} content
 * @return {Array<string>}
 */
function transformDocs(content = []) {
    return ["/**", ...content.map((line) => `* ${line}`), "*/"];
}

/**
 * @param {import(".").transformKeyParams} params
 * @return {Array<string>}
 */
function transformKey({
    key,
    value = "string",
    docs = [],
    decorators = [],
    links = [],
}) {
    if (isBlank(key) || isFalsy(value)) return [];

    const _value = Array.isArray(value) ? value : [value];

    const _key = wrap(key, '"');
    const _type = _value.join(" | ");

    const __content = makeJsDocs({ title: key, docs, decorators, links });
    const __key = `${_key}:${_type};`;

    return [...__content, __key];
}

/**
 * @param {import(".").transformInterfaceParams} params
 * @return {Array<string>}
 */
function transformInterface({
    name,
    typeParams = [],
    extending = [],
    keys = [],
    callback,
    docs = [],
}) {
    const _docs = makeJsDocs({ title: name, docs });
    const _type = typeParams.length > 0 ? ["<", typeParams.join(","), ">"] : [];
    const _extends =
        extending.length > 0 ? ["extends", extending.join(",")] : [];

    const _header = ["export", "interface", name, ..._type, ..._extends].join(
        " "
    );

    const _content = [];

    keys.forEach((key) => {
        const res = callback(key);

        _content.push(...res);
    });

    return [..._docs, _header, "{", ..._content, "}"];
}

/**
 * @param {Array<string>} types
 */
function makeTypeParameters(types) {
    if (!Array.isArray(types) || types.length == 0) return "";

    return ["<", types.join(" , "), ">"].join(" ");
}

function transformFunction({
    name,
    async = false,
    docs = [],
    body = [],
    params = [],
    typedParams = [],
    returnType = "void",
    isDeclaration = false,
    decorators = [],
}) {
    const _async = async ? "async" : "";
    const _params = typeof params === "string" ? params : params.join(",");
    const _decorators = decorators.length > 0 ? decorators : [];
    const _docs = makeJsDocs({
        title: name,
        docs,
        decorators: returnType
            ? [..._decorators, `returns {${returnType}}`]
            : _decorators,
    });
    const _typedParams = makeTypeParameters(typedParams);

    const _header_d = [
        "export",
        _async,
        "function",
        _typedParams,
        name,
        "(",
        _params,
        ")",
        ":",
        returnType,
        ";",
    ].join(" ");

    const _header = [
        "export",
        _async,
        "function",
        _typedParams,
        name,
        "(",
        _params,
        ")",
    ].join(" ");

    return isDeclaration
        ? [..._docs, _header_d]
        : [..._docs, _header, "{", ...body, "}"];
}

/**
 * @param {import(".").transformTemplateParams<import("../../templates").AttributeTemplate>} params
 * @return {Array<string>}
 */
function transformAttributeTemplate(params) {
    return transformKey({
        key: params.key,
        value: makeType(params.template.values),
        docs: params.template.docs,
        decorators: params.template.decorators,
        links: params.template.links,
    });
}

/**
 * @param {import(".").transformTemplateParams<import("../../templates").CssPropertyTemplate>} params
 * @return {Array<string>}
 */
function transformCssPropertyTemplate(params) {
    return transformKey({
        key: params.key,
        value: makeType(
            params.template.values.length > 0
                ? params.template.values
                : params.template.type
        ),
        docs: params.template.docs,
        decorators: params.template.decorators,
        links: params.template.links,
    });
}

/**
 * @param {import(".").transformTemplateParams<import("../../templates").CssSelectorTemplate>} params
 * @return {Array<string>}
 */
function transformCssSelectorTemplate(params) {
    return transformKey({
        key: params.key,
        value: "Selector",
        docs: params.template.docs,
        decorators: params.template.decorators,
        links: params.template.links,
    });
}

/**
 * @param {import(".").transformTemplateParams<import("../../templates").EventTemplate>} params
 * @return {Array<string>}
 */
function transformEventTemplate(params) {
    return transformKey({
        key: params.key,
        value: `EventDeclaration<${params.template.type}, E>`,
        docs: params.template.docs,
        decorators: params.template.decorators,
        links: params.template.links,
    });
}

/**
 * @param {import(".").transformTemplateParams<import("../../templates").ComponentTemplate>} params
 * @return {Array<string>}
 */
function transformComponentTemplate(params, ns = HTML_NS, handler = false) {
    const _handler =
        handler !== false
            ? `CustomElements.items.${params.key}.handler(element);`
            : "";

    return transformFunction({
        docs: params.template.docs,
        decorators: [
            ...params.template.decorators,
            `param {import('./index').${params.key}Params} props`,
        ],
        returnType: "import('@riadh-adrani/recursive/lib').BaseElement",
        name: params.key,
        params: ["props"],
        body: [
            `const element = createElement('${params.template.tag}',{...props, rendererOptions : {ns : "${ns}"}});`,
            _handler,
            `return element`,
        ],
    });
}

/**
 * @param {import(".").transformTemplateParams<import("../../templates").ComponentTemplate>} params
 * @param {string} name
 * @param {Array<string>} extending
 * @return {Array<string>}
 */
function transformComponentTemplateProps(name, params, extending = []) {
    return transformInterface({
        docs: params.template.docs,
        name,
        extending: [
            "CommonAttributes",
            `Events<${params.template.nativeInterface}>`,
            ...extending,
        ],
        keys: Object.keys(params.template.props),
        callback: (key) => {
            if (typeof params.template.props[key] === "object") {
                return transformAttributeTemplate({
                    key,
                    template: params.template.props[key],
                });
            }

            if (isAttribute(key)) {
                return transformAttributeTemplate({
                    key,
                    template: ListOfAttributes[key],
                });
            }

            return [];
        },
    });
}

/**
 * @param {string | Array<string>} name
 * @param {string} path
 * @returns
 */
function useImport(name, path) {
    const _name =
        typeof name === "string" ? name : ["{", name.join(","), "}"].join(" ");

    return ["import", _name, "from", `"${path}"`].join(" ");
}

function createFileContent(content = [], imports = []) {
    return [...imports, "", ...content];
}

/**
 * @param {Array<string>} array
 * @returns {string}
 */
function write(array) {
    return array.join("\n");
}

/**
 * @param {string} text
 * @param {string} filePath
 */
function writeIntoFile(text, filePath) {
    const fs = require("fs");
    const path = require("path");

    try {
        fs.writeFileSync(path.resolve(__dirname, filePath), text);
        console.log(`Successfully written into file "${filePath}"`);
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    useImport,
    createFileContent,
    makeJsDocs,
    makeType,
    makeTypeParameters,
    write,
    writeIntoFile,
    transformKey,
    transformDocs,
    transformFunction,
    transformInterface,
    transformAttributeTemplate,
    transformEventTemplate,
    transformCssPropertyTemplate,
    transformCssSelectorTemplate,
    transformComponentTemplate,
    transformComponentTemplateProps,
};
