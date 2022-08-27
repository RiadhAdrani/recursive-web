const { Console } = require("../../use");
const { List: list } = require("./lists/Properties.js");

const regEx = /\{|\}/g;

/**
 * Check if the given key is a valid key of a property.
 * @param {string} key
 * @returns
 */
function is(key) {
    return list[key] !== undefined && list[key].css != undefined;
}

/**
 * Return the CSS property name of the key.
 * @param {string} key
 * @returns
 */
function get(key) {
    return list[key].css;
}

/**
 * Check if the input is a valid CSS value.
 * @param {string | number} value
 * @returns {boolean}
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
 * @param {Array<String | Number>} value
 * @param {string} propertyName
 * @returns
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
            console.log(
                "property " + propertyName + " of " + propertyName + " igonred"
            );

            Console.warn(
                `CSS: value "${item}" of property "${propertyName}" has been ignored.`
            );
        }
    });

    return _value;
}

/**
 * Render a css property declaration.
 * @param {String} property
 * @param {String | Array<string>} value
 * @returns
 */
function render(property, value) {
    if (!is(property) || [undefined, null, ""].includes(value)) return "";

    const _value = renderValue(value, property);

    if (!_value) return "";

    return `${get(property)}:${_value};`;
}

module.exports = { is, get, render, renderValue, validValue };
