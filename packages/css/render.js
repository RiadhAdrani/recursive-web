import { renderSelector } from "./selectors";
import { renderAnimation } from "./animations";
import { renderMediaQuery } from "./media-queries";
import { renderFontFace } from "./font-face";
import { renderImport } from "./imports";
import { renderVars } from "./vars";

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

export default renderCSS;
