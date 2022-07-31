const { render: renderProp } = require("./CssProperties");
const { List: list } = require("./lists/Selectors");

/**
 * Check if the given exist in the list of predefined selectors.
 * @param {string} key
 * @returns
 */
function is(key) {
    return list[key] !== undefined && list[key].css !== undefined;
}

/**
 * Get the corresponding CSS selector.
 * @param {string} key
 * @returns
 */
function get(key) {
    return is(key) ? list[key].css : key;
}

/**
 * Check if the selector already exist in the list of selectors
 * @param {string} selector
 * @returns
 */
function customSelectorAlreadyExist(selector) {
    for (let key in list) {
        if (list[key].css == selector.trim()) {
            return key;
        }
    }

    return false;
}

/**
 * Render a selector declaration
 * @param {String} selector
 * @param {import("../../lib").Selector} content
 */
function render(selector, content) {
    if (typeof selector != "string" || !selector || !content) return "";

    let output = `${selector}{`;

    for (let prop in content) {
        output += renderProp(prop, content[prop]);
    }

    output += "}";

    return output;
}

module.exports = { list, is, get, render, customSelectorAlreadyExist };
