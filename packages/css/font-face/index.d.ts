import { ObjectOf } from "../../../types/util";
import { CssPropertyTemplate } from "../../templates";

export function isFontFaceProperty(key: string): boolean;

export function getFontFaceProperty(key: string): string;

export function renderFontFaceProperty(
    key: string,
    value: string | Array<string>
): string;

export function renderFontFace(content: Array<ObjectOf<string>>): string;

export const ListOfFontFaceProperties: Object<CssPropertyTemplate>;
