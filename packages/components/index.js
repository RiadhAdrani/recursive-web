const { createElement, RecursiveConsole, RecursiveApp } = require("../../use");
const { component } = require("../templates");

/**
 * @type {RecursiveApp}
 */
let bootstrapper = undefined;

/**
 * Retrieve the current app instance.
 * @returns {RecursiveApp}
 */
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
 * Set the instance of the app to be used by the components.
 * @param {RecursiveApp} app current app instance.
 */
function setBootstrappingApplication(app) {
    bootstrapper = app;
}

module.exports = {
    createElement,
    component,
    getApp,
    setBootstrappingApplication,
};
