const { render: renderSelector } = require("./CssSelectors.js");

/**
 * Check if a given media query object is valid or not.
 * @param {Object} mediaQueryObject
 * @returns {boolean}
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
 * Convert media query declaration to a string.
 * @param {string} rule
 * @param {import("../../lib.js").SelectorTypes} selectors
 * @returns {String}
 */
function render(rule, selectors) {
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

module.exports = { render, isValidMediaQueryDeclaration };
