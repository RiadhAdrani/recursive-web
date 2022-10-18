/**
 * @important
 * Do not run this file using node.
 * use `npm run generate` instead
 */
const { ListOfCssProperties } = require("../../css/properties");
const { ListOfCssSelectors } = require("../../css/selectors");
const {
    transformCssSelectorTemplate,
    transformCssPropertyTemplate,
    transformInterface,
    createFileContent,
    writeIntoFile,
    write,
    useImport,
} = require("../utility");

module.exports = () => {
    const SelectorInterface = transformInterface({
        name: "Selector",
        keys: Object.keys(ListOfCssProperties),
        callback: (key) => {
            const data = ListOfCssProperties[key];

            return transformCssPropertyTemplate({ key, template: data });
        },
    });

    const SelectorTypesInterface = transformInterface({
        name: "SelectorTypes",
        keys: Object.keys(ListOfCssSelectors),
        callback: (key) => {
            const data = ListOfCssSelectors[key];

            return transformCssSelectorTemplate({ key, template: data });
        },
    });

    const _FILE_D_TS = createFileContent(
        [...SelectorInterface, ...SelectorTypesInterface],
        [useImport(["CssPropertyDeclarationOf", "CssColor"], "./style")]
    );

    writeIntoFile(write(_FILE_D_TS), "../../../types/selector.d.ts");
};
