/**
 * @important
 * Do not run this file using node.
 * use `npm run generate` instead
 */

import { items as HTML } from "../../components/html/index.js";
import { items as Utility } from "../../components/utility/index.js";
import { items as SVG } from "../../components/svg/index.js";
import { CssColor } from "../../templates/types.js";
import { HTML_NS, SVG_NS } from "../../constants/index.js";
import {
    writeIntoFile,
    transformComponentTemplate,
    write,
    useImport,
    createFileContent,
    transformFunction,
    transformComponentTemplateProps,
} from "../utility/index.js";

const HtmlComponents = [];
const HtmlComponentsDeclaration = [];

const SvgComponents = [];
const SvgComponentsDeclaration = [];

function generateComponents({
    list = {},
    extending = [],
    ns = HTML_NS,
    jsOutput = [],
    tsOutput = [],
}) {
    Object.keys(list).forEach((key) => {
        /**
         * @type {import("../../templates").ComponentTemplate}
         */
        const data = list[key];
        const paramInterface = `${key}Params`;
        const _extending = [...extending];

        if (!data.childless) _extending.push("ElementChildren");

        jsOutput.push(
            ...transformComponentTemplate(
                {
                    key,
                    template: data,
                },
                ns,
                data.handler !== false
            )
        );

        tsOutput.push(
            ...transformComponentTemplateProps(
                paramInterface,
                {
                    key,
                    template: data,
                },
                _extending
            ),
            ...transformFunction({
                isDeclaration: true,
                docs: data.docs,
                name: key,
                params: `params : ${paramInterface}`,
                returnType: "BaseElement",
            })
        );
    });
}

generateComponents({
    list: HTML,
    extending: ["HTMLAttributes"],
    ns: HTML_NS,
    jsOutput: HtmlComponents,
    tsOutput: HtmlComponentsDeclaration,
});

generateComponents({
    list: Utility,
    extending: ["HTMLAttributes"],
    ns: HTML_NS,
    jsOutput: HtmlComponents,
    tsOutput: HtmlComponentsDeclaration,
});

generateComponents({
    list: SVG,
    extending: ["SVGAttributes"],
    ns: SVG_NS,
    jsOutput: SvgComponents,
    tsOutput: SvgComponentsDeclaration,
});

module.exports = () => {
    const jsCommonImports = [
        useImport(["createElement"], "../packages/components"),
        useImport("CustomElements", "../packages/components/utility"),
    ];

    const tsCommonImports = [
        useImport(["BaseElement"], "@riadh-adrani/recursive/lib"),
        useImport(["CommonAttributes", "ElementChildren"], "../lib"),
        useImport(["Events"], "../lib"),
        useImport([CssColor], "../lib"),
        useImport(["AttributeDeclarationOf"], "../lib"),
    ];

    const _HTML_COMPONENTS_JS = createFileContent(HtmlComponents, [
        ...jsCommonImports,
    ]);

    const _SVG_COMPONENTS_JS = createFileContent(SvgComponents, [
        ...jsCommonImports,
    ]);

    const _HTML_COMPONENTS_D_TS = createFileContent(HtmlComponentsDeclaration, [
        ...tsCommonImports,
        useImport(["HTMLAttributes"], "../types/htmlCommon"),
    ]);

    const _SVG_COMPONENTS_D_TS = createFileContent(SvgComponentsDeclaration, [
        ...tsCommonImports,
        useImport(["SVGAttributes"], "../types/svgCommon"),
    ]);

    writeIntoFile(write(_HTML_COMPONENTS_JS), "../../../html/index.js");
    writeIntoFile(write(_HTML_COMPONENTS_D_TS), "../../../html/index.d.ts");

    writeIntoFile(write(_SVG_COMPONENTS_JS), "../../../svg/index.js");
    writeIntoFile(write(_SVG_COMPONENTS_D_TS), "../../../svg/index.d.ts");
};
