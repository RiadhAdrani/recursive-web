import { Selector } from "../../../lib";
import { ObjectOf } from "../../../types/util";

/**
 * check if a given media query object is valid or not.
 * @param object media query object.
 */
export function isValidMediaQueryDeclaration(object: any): boolean;

/**
 * convert media query declaration to a string.
 * @param rule condition of the media query.
 * @param selectors selectors within the media query.
 */
export function renderMediaQuery(
    rule: string,
    selectors: ObjectOf<Selector>
): string;
