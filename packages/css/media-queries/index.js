const { renderSelector } = require("../selectors/index.js");

/**
 * Check if a given media query object is valid or not.
 * @param {Object} mediaQueryObject Media query object.
 * @returns {boolean} Check result.
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
 * @param {string} rule Condition of the media query.
 * @param {import("../../../lib.js").SelectorTypes} selectors Selectors within the media query.
 * @returns {String} Valid CSS media query declaration.
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
