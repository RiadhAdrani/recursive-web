const { isValidMediaQueryDeclaration } = require("../media-queries");
const { areEqual } = require("@riadh-adrani/utility-js");
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

        for (let key in sheet) {
            switch (key) {
                case "animations":
                    {
                        if (!sheet.animations) break;

                        for (let animation in sheet.animations) {
                            if (
                                !isValidSelectorContent(
                                    sheet.animations[animation]
                                )
                            )
                                continue;

                            if (!output.animations) output.animations = {};

                            output.animations[animation] =
                                sheet.animations[animation];
                        }
                    }
                    break;
                case "mediaQueries":
                    {
                        if (!Array.isArray(sheet.mediaQueries)) {
                            RecursiveConsole.warn(
                                "Recursive CSSOM : mediaQueries property is not of type array and therefore it was ignored."
                            );
                            break;
                        }

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
                    break;
                case "fontFace":
                    {
                        if (!Array.isArray(sheet.fontFace)) {
                            RecursiveConsole.warn(
                                "Recursive CSSOM : fontFace property is not of type array and therefore it was ignored."
                            );

                            break;
                        }

                        if (!output.fontFace) output.fontFace = [];

                        output.fontFace.push(...sheet.fontFace);
                    }
                    break;
                case "var":
                    {
                        if (
                            !sheet.var ||
                            typeof sheet.var != "object" ||
                            Array.isArray(sheet.var) ||
                            Object.keys(sheet.var).length == 0
                        )
                            break;

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
                    break;
                case "imports":
                    {
                        if (!Array.isArray(sheet.imports)) break;

                        if (!output.imports) output.imports = [];

                        // TODO : solve conflicts

                        sheet.imports.forEach((item) => {
                            if (typeof item == "string" && item.trim())
                                output.imports.push(item.trim());
                        });
                    }
                    break;
                case "selectors":
                    {
                        if (!sheet.hasOwnProperty("selectors")) break;

                        for (let selector in sheet.selectors) {
                            if (
                                !isValidSelectorContent(
                                    sheet.selectors[selector]
                                )
                            )
                                continue;

                            if (!output.hasOwnProperty("selectors"))
                                output.selectors = [];

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
                    break;
            }
        }
    });

    return output;
}

module.exports = mergeStyleSheets;
