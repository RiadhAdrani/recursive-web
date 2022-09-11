const { renderSelector } = require("../selectors");

/**
 * Return if the given name is valid as an animation name.
 * @param {string} name Animation name.
 * @returns {boolean} Check result.
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
 * @param {Object} stepsObject Object to be validated.
 * @returns {boolean} Check result.
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
 * @param {string} name Animation name.
 * @param {object} steps An object containg the different steps of the animation.
 * @returns {string} Valid CSS declaration.
 */
function renderAnimation(name, steps) {
    if (!isValidName(name) || !isValidStepsObject(steps)) return "";

    name = name.trim();

    let output = `@keyframes ${name}{`;

    for (let step in steps) {
        output += renderSelector(step, steps[step]);
    }

    output += "}";

    return output;
}

module.exports = { isValidName, isValidStepsObject, renderAnimation };
