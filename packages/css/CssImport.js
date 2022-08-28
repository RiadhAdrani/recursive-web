/**
 * Render import statements.
 * Wrap every statement in `url()`.
 * @param {Array<string>} list array of statements.
 * @returns {string} Converted statement as string.
 */
function render(list) {
    if (!Array.isArray(list)) return "";

    let output = "";

    list.forEach((item) => {
        output += `@import url("${item}");`;
    });

    return output;
}

module.exports = { render };
