import { AttributeTemplate, EventTemplate } from "../templates";

/**
 * return if the given key correspond to an attribute within the current list of attributes.
 * @param key attribute name.
 */
export function isAttribute(key: string): boolean;

/**
 * retrieve the attribute name if it exists.
 * @param key attribute name.
 */
export function getAttributeName(key: string): string;

/**
 * Return if an attribute is toggleable or not.
 *
 * A toggleable attribute accepts only boolean values.
 *
 * @param key attribute identifier
 */
export function isToggleableAttribute(key: string): boolean;

/**
 * return if the given key correspond to an event within the current list of events.
 * @param key event name.
 */
export function isEvent(key: string): boolean;

/**
 * return the event data template with the given key if it exists.
 * @param key event name.
 */
export function getEvent(key: string): EventTemplate;

/**
 * return if the event has a custom handler.
 * @param key event name.
 */
export function eventHasHandler(key: string): boolean;

/**
 * return the event listener with the given key if it exists.
 * @param key event name.
 */
export function getEventListener(key: string): string;

export const ListOfAttributes: { [key: string]: AttributeTemplate };

export const ListOfEvents: { [key: string]: EventTemplate };
