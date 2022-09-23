import { RecursiveApp, createElement } from "../../use";
import { component } from "../templates";

/**
 * retrieve the current app instance.
 */
export function getApp(): RecursiveApp;

/**
 * set the instance of the app to be used by the components.
 * @param app current app instance.
 */
export function useRecursiveComponents(app: RecursiveApp): void;

export { createElement, component };
