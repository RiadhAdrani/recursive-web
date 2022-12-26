/**
 * @important
 * Do not run this file using node.
 * use `npm run generate` instead
 */

import { ListOfAttributes } from "../../dom/index.js";

import {
    transformInterface,
    transformAttributeTemplate,
    createFileContent,
    write,
    writeIntoFile,
    useImport,
} from "../utility/index.js";

export default () => {
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
