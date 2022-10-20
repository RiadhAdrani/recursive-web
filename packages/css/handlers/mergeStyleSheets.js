const { isValidMediaQueryDeclaration } = require("../media-queries");
const { areEqual, hasProperty, isBlank } = require("@riadh-adrani/utility-js");
const { RecursiveConsole } = require("../../../use");

/**
 * Merge an array of style sheet into a single one.
 * @param {Array<import("../../../lib").FreeStyleSheet>} styleSheets An array of style sheets.
 * @returns {import("../../../lib").ComputedStyleSheets}
 */
function mergeStyleSheets(styleSheets) {
    if (!Array.isArray(styleSheets)) return {};

    /**
     * @type {import("../../../lib").ComputedStyleSheets}
     */
    const output = {};

    function isValidSelectorContent(content) {
        if (
            [null, undefined].includes(content) ||
            ["string", "number", "bigint", "boolean", "symbol"].includes(
                typeof content
            ) ||
            Array.isArray(content)
        )
            return false;

        if (typeof content == "object" && Object.keys(content).length == 0)
            return false;

        return true;
    }

    styleSheets.forEach((sheet) => {
        if (!sheet) return;

        if (hasProperty(sheet, "animations")) {
            if (typeof sheet.animations === "object") {
                for (let animation in sheet.animations) {
                    if (!isValidSelectorContent(sheet.animations[animation]))
                        continue;

                    if (!output.animations) output.animations = {};

                    output.animations[animation] = sheet.animations[animation];
                }
            }
        }

        if (hasProperty(sheet, "mediaQueries")) {
            if (!Array.isArray(sheet.mediaQueries)) {
                RecursiveConsole.warn(
                    "Recursive CSSOM : mediaQueries property is not of type array and therefore it was ignored."
                );
            } else {
                const queries = [];

                sheet.mediaQueries.forEach((query) => {
                    if (!isValidMediaQueryDeclaration(query)) return;

                    const selectors = {};

                    Object.keys(query)
                        .filter((key) => key != "condition")
                        .forEach((key) => {
                            selectors[key] = query[key];
                        });

                    const toBeAdded = {
                        condition: query.condition,
                        selectors,
                    };

                    for (let i = 0; i < queries.length; i++) {
                        if (areEqual(toBeAdded, queries[i])) {
                            return;
                        }
                    }

                    queries.push(toBeAdded);
                });

                if (queries.length > 0) {
                    output.mediaQueries = [];
                    output.mediaQueries.push(...queries);
                }
            }
        }

        if (hasProperty(sheet, "fontFace")) {
            if (!Array.isArray(sheet.fontFace)) {
                RecursiveConsole.warn(
                    "Recursive CSSOM : fontFace property is not of type array and therefore it was ignored."
                );
            } else {
                if (!output.fontFace) output.fontFace = [];

                output.fontFace.push(...sheet.fontFace);
            }
        }

        if (hasProperty(sheet, "var")) {
            if (
                !sheet.var ||
                typeof sheet.var != "object" ||
                Array.isArray(sheet.var) ||
                Object.keys(sheet.var).length == 0
            ) {
            } else {
                for (let v in sheet.var) {
                    if (!output.var) output.var = {};

                    if (
                        typeof sheet.var[v] == "string" &&
                        sheet.var[v].trim()
                    ) {
                        output.var[v] = sheet.var[v];
                    }
                }
            }
        }

        if (hasProperty(sheet, "imports")) {
            if (Array.isArray(sheet.imports) && sheet.imports.length !== 0) {
                if (!output.imports) output.imports = [];

                output.imports.push(
                    ...sheet.imports.filter(
                        (item, index) =>
                            !isBlank(item) &&
                            !sheet.imports.slice(0, index).includes(item)
                    )
                );
            }
        }

        if (hasProperty(sheet, "selectors")) {
            for (let selector in sheet.selectors) {
                if (!isValidSelectorContent(sheet.selectors[selector]))
                    continue;

                if (!output.hasOwnProperty("selectors")) output.selectors = [];

                const newSelector = {
                    selector,
                    content: sheet.selectors[selector],
                };

                function selectorAlreadyExist() {
                    for (let _selector of output.selectors) {
                        if (areEqual(newSelector, _selector)) {
                            return true;
                        }
                    }

                    return false;
                }

                if (!selectorAlreadyExist()) {
                    output.selectors.push(newSelector);
                }
            }
        }
    });

    return output;
}

module.exports = mergeStyleSheets;
