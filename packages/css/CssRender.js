const { render: renderSelector } = require("./CssSelectors");
const { render: renderAnimation } = require("./CssAnimations");
const { render: renderQuery } = require("./CssMediaQueries");
const { render: renderFont } = require("./CssFontFace");
const { render: renderImport } = require("./CssImport");
const { render: renderVar } = require("./CssVar");

/**
 * Convert static style to string
 * @param {JSON} styleSheet static style object
 */
function renderCSS(styleSheet) {
    if (!styleSheet) return;

    let output = "";
    output += renderVar(styleSheet.var);
    output += renderImport(styleSheet.imports);
    output += renderFont(styleSheet.fontFace);

    if (styleSheet["charset"]) {
        for (let item in styleSheet.charset) {
            output += `@charset "${styleSheet.font[item]}";`;
        }
    }

    if (styleSheet["selectors"]) {
        for (let rule in styleSheet.selectors) {
            output += renderSelector(rule, styleSheet.selectors[rule]);
        }
    }

    if (styleSheet["mediaQueries"]) {
        for (let query in styleSheet.mediaQueries) {
            output += renderQuery(query, styleSheet.mediaQueries[query]);
        }
    }

    if (styleSheet["animations"]) {
        for (let anim in styleSheet.animations) {
            output += renderAnimation(anim, styleSheet.animations[anim]);
        }
    }

    return output;
}

module.exports = renderCSS;
