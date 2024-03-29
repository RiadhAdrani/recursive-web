/**
 * @param {string} key
 * @param {string} value
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
 * @param {object} list
 */
function renderVars(list) {
    if (!list) return "";

    let output = ":root{";

    for (let key in list) {
        output += renderVar(key, list[key]);
    }
    output += "}";

    return output;
}

export { renderVars, renderVar };
