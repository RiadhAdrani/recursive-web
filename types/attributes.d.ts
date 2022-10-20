import { StringWithAutoComplete, TypeOrArray } from "./util";

export type AttributeDeclarationOf<T> = TypeOrArray<StringWithAutoComplete<T>>;
