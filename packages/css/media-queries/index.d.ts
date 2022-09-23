import { Selector } from "../../../lib";

/**
 * check if a given media query object is valid or not.
 * @param object media query object.
 */
export function isValidMediaQueryDeclaration(object: any): boolean;

/**
 * convert media query declaration to a string.
 * @param rule sondition of the media query.
 * @param selectors selectors within the media query.
 */
export function renderMediaQuery(
    rule: string,
    selectors: { [key: string]: Selector }
): string;
