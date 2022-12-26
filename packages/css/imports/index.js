/**
 * @param {Array<string>} list
 */
function renderImport(list) {
    if (!Array.isArray(list)) return "";

    let output = "";

    list.forEach((item) => {
        output += `@import url("${item}");`;
    });

    return output;
}

export { renderImport };
