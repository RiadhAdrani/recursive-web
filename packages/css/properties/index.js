const { RecursiveConsole } = require("../../../use");
const { ListOfCssProperties, globalValues } = require("./index.list");

const regEx = /\{|\}/g;

/**
 * Check if the given key is a valid key of a property.
 * @param {string} key string representing the property.
 * @returns {boolean} Check result.
 */
function is(key) {
    return (
        ListOfCssProperties[key] !== undefined &&
        ListOfCssProperties[key].css != undefined
    );
}

/**
 * Return the CSS property name of the key.
 * @param {string} key string representing the property.
 * @returns {string} CSS version of the property.
 */
function get(key) {
    return ListOfCssProperties[key].css;
}

/**
 * Return the list of support properties in browsers.
 * @param {string} key
 * @returns {Array<string>}
 */
function getPropertySupport(key) {
    if (!is(key)) return [];

    return ListOfCssProperties[key].support;
}

/**
 * Check if the input is a valid CSS value.
 * @param {string | number} value Property value to be checked.
 * @returns {boolean} Check result.
 */
function validValue(value) {
    if (!["number", "string"].includes(typeof value)) return false;

    value = value.toString().trim();

    if (!value) return false;

    if (value.search(regEx) != -1) return false;

    return true;
}

/**
 * Transform the given array into a CSS value.
 * @param {Array<String | Number>} value Property value.
 * @param {string} propertyName Property name. needed to display warnings.
 * @returns {string} Processed value.
 */
function renderValue(value, propertyName) {
    let _value = "";

    const array = [];

    if (Array.isArray(value)) array.push(...value);
    else array.push(value);

    array.forEach((item) => {
        if (validValue(item)) {
            _value += ` ${item}`;
        } else {
            RecursiveConsole.warn(
                `Recursive Web CSSOM: value "${item}" of property "${propertyName}" has been ignored.`
            );
        }
    });

    return _value;
}

/**
 * Render a css property declaration.
 * @param {String} property Property as string.
 * @param {String | Array<string>} value Property value as string or array.
 * @returns {string} Valid property-value pair.
 */
function renderProperty(property, value) {
    if (!is(property) || [undefined, null, ""].includes(value)) return "";

    const _value = renderValue(value, property);

    if (!_value) return "";

    const output = [];

    getPropertySupport(property).forEach((item) => {
        output.push(`${item}:${_value};`);
    });

    output.push(`${get(property)}:${_value};`);

    return output.join("");
}

module.exports = {
    is,
    get,
    renderProperty,
    renderValue,
    validValue,
    ListOfCssProperties,
    globalValues,
};
