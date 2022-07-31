const { render: renderSelector } = require("./CssSelectors");

/**
 * Return if the given name is valid as an animation name.
 * @param {String} name
 * @returns {Boolean}
 */
function isValidName(name) {
    if (typeof name !== "string") return false;
    if (!name.trim()) return false;
    if (["unset", "none", "initial", "inherit"].includes(name)) return false;
    if (name.includes(" ")) return false;
    if (name.substring(0, 2) == "--") return false;

    return true;
}

/**
 * Check if the provided object is represent valid animations steps.
 * @param {Object} stepsObject
 * @returns {boolean}
 */
function isValidStepsObject(stepsObject) {
    if (typeof stepsObject != "object") return false;
    if (Array.isArray(stepsObject)) return false;
    if (stepsObject == null) return false;
    if (Object.keys(stepsObject).length == 0) return false;

    return true;
}

/**
 * Convert the given animation name and steps into its CSS declaration.
 * @param {string} name
 * @param {Object} steps
 * @returns
 */
function render(name, steps) {
    if (!isValidName(name) || !isValidStepsObject(steps)) return "";

    name = name.trim();

    let output = `@keyframes ${name}{`;

    for (let step in steps) {
        output += renderSelector(step, steps[step]);
    }

    output += "}";

    return output;
}

module.exports = { isValidName, isValidStepsObject, render };
