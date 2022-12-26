import { renderProperty } from "../properties";
import { ListOfCssSelectors } from "./index.list";

/**
 * @param {string} key
 */
function is(key) {
    return (
        ListOfCssSelectors[key] !== undefined &&
        ListOfCssSelectors[key].css !== undefined
    );
}

/**
 * @param {string} key
 */
function get(key) {
    return is(key) ? ListOfCssSelectors[key].css : key;
}

/**
 * @param {string} selector
 */
function customSelectorAlreadyExists(selector) {
    for (let key in ListOfCssSelectors) {
        if (ListOfCssSelectors[key].css == selector.trim()) {
            return key;
        }
    }

    return false;
}

/**
 * @param {String} selector
 * @param {import("../../../lib").Selector} content
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

/**
 * @param {string} key
 */
function getSelectorSupport(key) {
    if (!is(key)) return [];

    return ListOfCssSelectors[key].support;
}

export {
    ListOfCssSelectors,
    is,
    get,
    renderSelector,
    customSelectorAlreadyExists,
    getSelectorSupport,
};
