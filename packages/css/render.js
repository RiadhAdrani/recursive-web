const { renderSelector } = require("./selectors");
const { renderAnimation } = require("./animations");
const { renderMediaQuery } = require("./media-queries");
const { renderFontFace } = require("./font-face");
const { renderImport } = require("./imports");
const { renderVars } = require("./vars");

/**
 * Convert style object to string
 * @param {import("../../lib").ComputedStyleSheets} styleSheet static style object
 * @returns Rendered style by importance.
 */
function renderCSS(styleSheet) {
    const output = { lowPriority: "", highPriority: "" };

    if (!styleSheet) return output;

    output.highPriority += renderImport(styleSheet.imports);
    output.highPriority += renderFontFace(styleSheet.fontFace);

    if (styleSheet["charset"]) {
        for (let item in styleSheet.charset) {
            output.highPriority += `@charset "${styleSheet.font[item]}";`;
        }
    }

    output.lowPriority += renderVars(styleSheet.var);

    if (styleSheet["selectors"]) {
        for (let selector of styleSheet.selectors) {
            output.lowPriority += renderSelector(
                selector.selector,
                selector.content
            );
        }
    }

    if (styleSheet["mediaQueries"]) {
        for (let query in styleSheet.mediaQueries) {
            output.lowPriority += renderMediaQuery(
                styleSheet.mediaQueries[query].condition,
                styleSheet.mediaQueries[query].selectors
            );
        }
    }

    if (styleSheet["animations"]) {
        for (let anim in styleSheet.animations) {
            output.lowPriority += renderAnimation(
                anim,
                styleSheet.animations[anim]
            );
        }
    }

    return output;
}

module.exports = renderCSS;
