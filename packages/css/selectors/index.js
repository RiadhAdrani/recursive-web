const { renderProperty } = require("../properties");
const { ListOfCssSelectors } = require("./index.list");

/**
 * Check if the given exist in the list of predefined selectors.
 * @param {string} key String representing the selector.
 * @returns {boolean} Check result.
 */
function is(key) {
    return (
        ListOfCssSelectors[key] !== undefined &&
        ListOfCssSelectors[key].css !== undefined
    );
}

/**
 * Get the corresponding CSS selector.
 * @param {string} key String representing the selector.
 * @returns {string} CSS version of the selector.
 */
function get(key) {
    return is(key) ? ListOfCssSelectors[key].css : key;
}

/**
 * Check if the selector already exist in the list of selectors
 * @param {string} selector String representing the selector.
 * @returns {boolean} Check result.
 */
function customSelectorAlreadyExist(selector) {
    for (let key in ListOfCssSelectors) {
        if (ListOfCssSelectors[key].css == selector.trim()) {
            return key;
        }
    }

    return false;
}

/**
 * Render a selector declaration
 * @param {String} selector String representing the selector.
 * @param {import("../../../lib").Selector} content Object representing the selector's content.
 * @returns {string} Valid CSS selector declaration.
 */
function renderSelector(selector, content) {
    if (typeof selector != "string" || !selector || !content) return "";

    let output = `${selector}{`;

    for (let prop in content) {
        output += renderProperty(prop, content[prop]);
    }

    output += "}";

    return output;
}

module.exports = {
    ListOfCssSelectors,
    is,
    get,
    renderSelector,
    customSelectorAlreadyExist,
};
