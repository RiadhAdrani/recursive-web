/**
 * Merge an array of style sheet into a single one.
 * @param {Array<import("../../../core").StyleSheet>} styleSheets
 * @returns {import("../../../core").StyleSheet}
 */
function mergeStyleSheets(styleSheets) {
    if (!Array.isArray(styleSheets)) return {};

    const output = {};

    function isValidSelectorContent(content) {
        if (
            [null, undefined].includes(content) ||
            ["string", "number", "bigint", "boolean", "symbol"].includes(typeof content) ||
            Array.isArray(content)
        )
            return false;

        if (typeof content == "object" && Object.keys(content).length == 0) return false;

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
                            if (!isValidSelectorContent(sheet.animations[animation])) continue;

                            if (!output.animations) output.animations = {};

                            // TODO : solve conflicts

                            output.animations[animation] = sheet.animations[animation];
                        }
                    }
                    break;
                case "mediaQueries":
                    {
                        if (!sheet.mediaQueries) break;

                        for (let query in sheet.mediaQueries) {
                            if (!isValidSelectorContent(sheet.mediaQueries[query])) continue;

                            if (!output.mediaQueries) output.mediaQueries = {};

                            for (let selector in sheet.mediaQueries[query]) {
                                if (!output.mediaQueries[query]) output.mediaQueries[query] = {};

                                // TODO : solve conflicts

                                output.mediaQueries[query][selector] =
                                    sheet.mediaQueries[query][selector];
                            }
                        }
                    }
                    break;
                case "fontFace":
                    {
                        if (!Array.isArray(sheet.fontFace)) break;

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

                            if (typeof sheet.var[v] == "string" && sheet.var[v].trim()) {
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
                        if (!sheet.selectors) break;

                        for (let selector in sheet.selectors) {
                            if (!isValidSelectorContent(sheet.selectors[selector])) continue;

                            if (!output.selectors) output.selectors = {};

                            // TODO : solve conflicts

                            output.selectors[selector] = sheet.selectors[selector];
                        }
                    }
                    break;
            }
        }
    });

    return output;
}

module.exports = mergeStyleSheets;
