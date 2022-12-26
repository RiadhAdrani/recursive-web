import { createElement, RecursiveConsole, RecursiveApp } from "../../use";
import { component } from "../templates";

/**
 * @type {RecursiveApp}
 */
let bootstrapper = undefined;

function getApp() {
    if (!bootstrapper instanceof RecursiveApp) {
        RecursiveConsole.error(
            "Recursive Web : Failed to load the current App instance.",
            [
                "This error is caused by an element that needs to use some methods from the app instance",
                "Make sure to initialize with 'useApp' before calling the render() method.",
            ]
        );
    }

    return bootstrapper;
}

/**
 * @param {RecursiveApp} app
 */
function useRecursiveComponents(app) {
    bootstrapper = app;
}

export { createElement, component, getApp, useRecursiveComponents };
