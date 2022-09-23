const { renderSelector } = require("../selectors/index.js");

/**
 * @param {Object} mediaQueryObject
 */
function isValidMediaQueryDeclaration(mediaQueryObject) {
    if (
        mediaQueryObject &&
        typeof mediaQueryObject == "object" &&
        !Array.isArray(mediaQueryObject) &&
        Object.keys(mediaQueryObject).length > 0
    ) {
        return true;
    }

    return false;
}

/**
 * @param {string} rule
 * @param {import("../../../lib.js").SelectorTypes} selectors
 */
function renderMediaQuery(rule, selectors) {
    if (typeof rule != "string" || !rule.trim()) return "";
    if (selectors === null) return "";
    if (typeof selectors != "object") return "";
    if (Array.isArray(selectors)) return "";
    if (Object.keys(selectors).length == 0) return "";

    let output = `@media ${rule}{`;
    for (let selector in selectors) {
        output += renderSelector(selector, selectors[selector]);
    }
    output += "}";

    return output;
}

module.exports = { renderMediaQuery, isValidMediaQueryDeclaration };
