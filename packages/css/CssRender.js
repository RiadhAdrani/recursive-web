const { render: renderSelector } = require("./CssSelectors");
const { render: renderAnimation } = require("./CssAnimations");
const { render: renderQuery } = require("./CssMediaQueries");
const { render: renderFont } = require("./CssFontFace");
const { render: renderImport } = require("./CssImport");
const { render: renderVar } = require("./CssVar");

/**
 * Convert style object to string
 * @param {import("../../core").FreeStyleSheet} styleSheet static style object
 */
function renderCSS(styleSheet) {
    const output = { lowPriority: "", highPriority: "" };

    if (!styleSheet) return output;

    output.highPriority += renderImport(styleSheet.imports);
    output.highPriority += renderFont(styleSheet.fontFace);

    if (styleSheet["charset"]) {
        for (let item in styleSheet.charset) {
            output.highPriority += `@charset "${styleSheet.font[item]}";`;
        }
    }

    output.lowPriority += renderVar(styleSheet.var);

    if (styleSheet["selectors"]) {
        for (let rule in styleSheet.selectors) {
            output.lowPriority += renderSelector(
                rule,
                styleSheet.selectors[rule]
            );
        }
    }

    if (styleSheet["mediaQueries"]) {
        for (let query in styleSheet.mediaQueries) {
            output.lowPriority += renderQuery(
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
