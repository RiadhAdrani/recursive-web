/**
 * @important
 * Do not run this file using node.
 * use `npm run generate` instead
 */
import { ListOfCssProperties } from "../../css/properties/index.js";
import { ListOfCssSelectors } from "../../css/selectors/index.js";
import {
    transformCssSelectorTemplate,
    transformCssPropertyTemplate,
    transformInterface,
    createFileContent,
    writeIntoFile,
    write,
    useImport,
} from "../utility/index.js";

export default () => {
    const SelectorInterface = transformInterface({
        name: "Selector",
        extending: ["BaseSelector"],
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
        [
            useImport(
                ["CssPropertyDeclarationOf", "CssColor", "BaseSelector"],
                "./style"
            ),
        ]
    );

    writeIntoFile(write(_FILE_D_TS), "../../../types/selector.d.ts");
};
