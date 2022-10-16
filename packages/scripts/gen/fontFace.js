/**
 * @important
 * Do not run this file using node.
 * use `npm run generate` instead
 */
const { ListOfFontFaceProperties } = require("../../css/font-face");
const {
    transformCssPropertyTemplate,
    transformInterface,
    createFileContent,
    writeIntoFile,
    write,
} = require("../utility");

module.exports = () => {
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

    const _FILE_D_TS = createFileContent([...FontFaceInterface], []);

    writeIntoFile(write(_FILE_D_TS), "../../../types/fontFace.d.ts");
};
