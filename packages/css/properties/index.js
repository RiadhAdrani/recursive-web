const { RecursiveConsole } = require("../../../use");
const { ListOfCssProperties, globalValues } = require("./index.list");

const regEx = /\{|\}/g;

/**
 * @param {string} key
 */
function is(key) {
    return (
        ListOfCssProperties[key] !== undefined &&
        ListOfCssProperties[key].css != undefined
    );
}

/**
 * @param {string} key
 */
function get(key) {
    return ListOfCssProperties[key].css;
}

/**
 * @param {string} key
 */
function getPropertySupport(key) {
    if (!is(key)) return [];

    return ListOfCssProperties[key].support;
}

/**
 * @param {string | number} value
 */
function validValue(value) {
    if (!["number", "string"].includes(typeof value)) return false;

    value = value.toString().trim();

    if (!value) return false;

    if (value.search(regEx) != -1) return false;

    return true;
}

/**
 * @param {Array<String | Number>} value
 * @param {string} propertyName
 */
function renderValue(value, propertyName) {
    let _value = "";

    const array = [];

    if (Array.isArray(value)) array.push(...value);
    else array.push(value);

    const filteredArray = [];

    array.forEach((item) => {
        if (validValue(item)) filteredArray.push(item);
        else {
            RecursiveConsole.warn(
                `Recursive Web CSSOM: value "${item}" of property "${propertyName}" has been ignored.`
            );
        }
    });

    const joiner = is(propertyName)
        ? ListOfCssProperties[propertyName].joiner
        : " ";

    _value = filteredArray.join(joiner);

    return _value;
}

/**
 * @param {String} property
 * @param {String | Array<string>} value
 */
function renderProperty(property, value) {
    const propertyName = is(property) ? get(property) : property;

    if (!propertyName || [undefined, null, ""].includes(value)) return "";

    const _value = renderValue(value, property);

    if (!_value) return "";

    const output = [];

    getPropertySupport(property).forEach((item) => {
        output.push(`${item}:${_value};`);
    });

    output.push(`${propertyName}:${_value};`);

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
