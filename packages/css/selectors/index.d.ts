import { CssSelectorTemplate as SelectorTemplate } from "../../templates";
import { Selector } from "../../../lib";

/**
 * check if the given exist in the list of predefined selectors.
 * @param key selector name.
 */
export function is(key: string): boolean;

/**
 * get the corresponding CSS selector.
 * @param key selector name.
 */
export function get(key: string): string;

/**
 * check if the selector already exist in the list of selectors
 * @param selector custom selector name.
 */
export function customSelectorAlreadyExists(selector: string): boolean;

/**
 * render a selector declaration
 * @param selector selector name.
 * @param content selector content.
 */
export function renderSelector(selector: string, content: Selector): string;

/**
 * retrieve the list of the selector support naming.
 * @param key selector name.
 */
export function getSelectorSupport(key: string): Array<string>;

export const ListOfCssSelectors: { [key: string]: SelectorTemplate };
