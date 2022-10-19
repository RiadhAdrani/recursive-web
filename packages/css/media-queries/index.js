const { hasProperty, isBlank, isFalsy } = require("@riadh-adrani/utility-js");
const { renderSelector } = require("../selectors/index.js");

/**
 * @param {import("../../../lib.js").MediaQuery} object
 */
function isValidMediaQueryDeclaration(object) {
    if (isFalsy(object)) return false;

    if (typeof object !== "object") return false;

    if (Array.isArray(object)) return false;

    if (!hasProperty(object, "condition")) return false;

    if (isBlank(object.condition)) return false;

    if (Object.keys(object).filter((key) => key !== "condition").length === 0)
        return false;

    return true;
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
