import {
    AttributeTemplate,
    CssPropertyTemplate,
    CssSelectorTemplate,
    EventTemplate,
    ComponentTemplate,
} from "../../templates";

interface transformKeyParams {
    key: string;
    isOptional: boolean;
    value: string | Array<string>;
    docs: Array<string>;
}

interface transformInterfaceParams {
    name: string;
    typeParams: Array<string>;
    extending: Array<string>;
    keys: Array<string>;
    callback: (key: string) => Array<string>;
    docs: Array<string>;
}

interface transformTemplateParams<T> {
    key: string;
    template: T;
}

interface transformFunctionParams {
    name: string;
    async: boolean;
    docs: Array<string>;
    body: Array<string>;
    params: Array<string>;
    typedParams: Array<string>;
    returnType: string;
    isDeclaration: boolean;
    decorators: Array<string>;
}

interface makeJsDocsParams {
    title: string;
    docs: Array<string>;
    decorators: Array<string>;
    links: Array<string>;
}

export function transformKey(params: transformKeyParams): Array<string>;

export function transformDocs(content: Array<string>): Array<string>;

export function makeJsDocs(params: makeJsDocsParams): Array<string>;

export function makeType(valuesOrType: string | Array<string>): string;

export function makeTypeParameters(types: Array<string>): string;

export function transformInterface(
    params: transformInterfaceParams
): Array<string>;

export function transformAttributeTemplate(
    params: transformTemplateParams<AttributeTemplate>
): Array<string>;

export function transformCssPropertyTemplate(
    params: transformTemplateParams<CssPropertyTemplate>
): Array<string>;

export function transformCssSelectorTemplate(
    params: transformTemplateParams<CssSelectorTemplate>
): Array<string>;

export function transformEventTemplate(
    params: transformTemplateParams<EventTemplate>
): Array<string>;

export function transformComponentTemplate(
    params: transformTemplateParams<ComponentTemplate>,
    ns: string,
    handler: boolean
): Array<string>;

export function transformComponentTemplateProps(
    name: string,
    params: transformTemplateParams<ComponentTemplate>,
    extending: Array<string>
): Array<string>;

export function useImport(name: string, path: string): string;

export function createFileContent(
    content: Array<string>,
    imports: Array<string>
): void;

export function transformFunction(
    params: transformFunctionParams
): Array<string>;

export function write(array: Array<string>): string;

export function writeIntoFile(text: string, filePath: string): void;

export function render(array: Array<string>): string;
