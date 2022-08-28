/**
 * Render a single CSS variable.
 * @param {string} key Variable name.
 * @param {string} value Variable value.
 * @returns {string} CSS variable declaration.
 */
function renderVar(key, value) {
    if (typeof key != "string" || !key.trim()) return "";
    if (key.substring(0, 2) === "--") return "";
    if (key.includes(";")) return "";
    if (key.includes("{")) return "";
    if (key.includes("}")) return "";

    if (!["string", "number"].includes(typeof value)) return "";
    if (value.toString().includes(";")) return "";
    if (value.toString().includes("{")) return "";
    if (value.toString().includes("}")) return "";
    if (!value.toString().trim()) return "";

    return `--${key}:${value};`;
}

/**
 * Render and return statements of `--var`.
 * @param {object} list list containing key-value pairs of CSS variables.
 * @returns {string} Transformed list.
 */
function render(list) {
    if (!list) return "";

    let output = ":root{";

    for (let key in list) {
        output += renderVar(key, list[key]);
    }
    output += "}";

    return output;
}

module.exports = { render, renderVar };
