/**
 * @important
 * Do not run this file using node.
 * use `npm run generate` instead
 */

const { ListOfAttributes } = require("../../dom");

const {
    transformInterface,
    transformAttributeTemplate,
    createFileContent,
    write,
    writeIntoFile,
    useImport,
} = require("../utility");

module.exports = () => {
    const CommonHTMLAttributesInterface = transformInterface({
        name: "HTMLAttributes",
        extending: [],
        keys: Object.keys(ListOfAttributes),
        callback: (key) => {
            const data = ListOfAttributes[key];

            if (data.els !== true) return [];

            return transformAttributeTemplate({ key, template: data });
        },
    });

    const _HTML_COMMON_D_TS = createFileContent(CommonHTMLAttributesInterface, [
        useImport(["AttributeDeclarationOf"], "./attributes"),
    ]);

    writeIntoFile(write(_HTML_COMMON_D_TS), "../../../types/htmlCommon.d.ts");
};
