import { CssPropertyTemplate } from "../../templates";

export type CssPropertyType = string | number | Array<string | number>;

/**
 * check if the given key is a valid key of a property.
 * @param key property name
 */
export function is(key: string): boolean;

/**
 * return the CSS property name of the key.
 * @param key property name
 */
export function get(key: string): string;

/**
 * return the list of support properties in browsers.
 * @param key property name
 */
export function getPropertySupport(key: string): Array<string>;

/**
 * check if the input is a valid CSS value.
 * @param value property value to be checked.
 */
export function validValue(value: string | number): boolean;

/**
 * tansform the given array into a CSS value.
 * @param value Property value.
 * @param propertyName Property name. needed to display warnings.
 */
export function renderValue(
    value: CssPropertyType,
    propertyName: string
): string;

/**
 * render a css property declaration.
 * @param property Property as string.
 * @param value Property value as string or array.
 */
export function renderProperty(
    property: string,
    value: CssPropertyType
): string;

export const ListOfCssProperties: { [key: string]: CssPropertyTemplate };

export const globalValues: Array<string>;
