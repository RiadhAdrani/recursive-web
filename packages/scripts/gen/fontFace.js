/**
 * @important
 * Do not run this file using node.
 * use `npm run generate` instead
 */
import { ListOfFontFaceProperties } from "../../css/font-face/index.js";
import {
    transformCssPropertyTemplate,
    transformInterface,
    createFileContent,
    writeIntoFile,
    write,
    useImport,
} from "../utility/index.js";

export default () => {
    const FontFaceInterface = transformInterface({
        name: "FontFace",
        keys: Object.keys(ListOfFontFaceProperties),
        callback: (key) => {
            const data = ListOfFontFaceProperties[key];

            return transformCssPropertyTemplate({
                key,
                template: data,
            });
        },
    });

    const _FILE_D_TS = createFileContent(
        [...FontFaceInterface],
        [useImport(["CssPropertyDeclarationOf"], "./style")]
    );

    writeIntoFile(write(_FILE_D_TS), "../../../types/fontFace.d.ts");
};
