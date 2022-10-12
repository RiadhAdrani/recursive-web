const { renderValue } = require("../properties");
const ListOfFontFaceProperties = require("./index.list");

/**
 * @param {string} key
 */
function isFontFaceProperty(key) {
    return ListOfFontFaceProperties.hasOwnProperty(key);
}

/**
 * @param {string} key
 */
function getFontFaceProperty(key) {
    return ListOfFontFaceProperties[key].css;
}

/**
 * @param {string} key
 * @param {string | Array<string>} value
 * @returns {string}
 */
function renderFontFaceProperty(key, value) {
    if (!value) return "";
    if (!key) return "";

    const att = isFontFaceProperty(key) ? getFontFaceProperty(key) : key;
    const val = renderValue(value, att);

    return `${att}:${val};`;
}

function renderFontFace(content) {
    if (!Array.isArray(content)) return "";

    if (content.length === 0) return "";

    const all = [];

    content.forEach((item) => {
        if (typeof item != "object") return;

        if (Object.keys(item).length === 0) return;

        const _content = Object.keys(item)
            .map((attribute) =>
                renderFontFaceProperty(attribute, item[attribute])
            )
            .filter((val) => val);

        all.push(`@font-face{${_content.join("")}}`);
    });

    return all.join("");
}

module.exports = {
    ListOfFontFaceProperties,
    isFontFaceProperty,
    getFontFaceProperty,
    renderFontFaceProperty,
    renderFontFace,
};
