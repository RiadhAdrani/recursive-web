import { renderSelector } from "../selectors";

/**
 * @param {string} name
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
 * @param {Object} stepsObject
 */
function isValidStepsObject(stepsObject) {
    if (typeof stepsObject != "object") return false;
    if (Array.isArray(stepsObject)) return false;
    if (stepsObject == null) return false;
    if (Object.keys(stepsObject).length == 0) return false;

    return true;
}

/**
 * @param {string} name
 * @param {object} steps
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

export { isValidName, isValidStepsObject, renderAnimation };
