import { Selector } from "../../../lib";

/**
 * rturn if the given name is valid as an animation name.
 * @param name animation name.
 */
export function isValidName(name: string): boolean;

/**
 * check if the provided object is represent valid animations steps.
 * @param object animation step object
 */
export function isValidStepObject(object: any): boolean;

/**
 * convert the given animation name and steps into its CSS declaration.
 * @param name animation name
 * @param steps animations steps
 */
export function renderAnimation(
    name: string,
    steps: { [key: string]: Selector }
): string;
