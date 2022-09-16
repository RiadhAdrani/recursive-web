const { RecursiveApp } = require("@riadh-adrani/recursive");
const { RecursiveConsole } = require("../../use");
const { component } = require("../templates");

/**
 * The instance of the Recursive app that will be used by the components.
 * @type {RecursiveApp}
 */
let _app = undefined;

/**
 * Retrieve the current app instance.
 * @returns {RecursiveApp}
 */
function getApp() {
    if (!_app) {
        RecursiveConsole.error(
            "Recursive Web : Failed to load the current App instance.",
            [
                "This error is caused by an element that needs to use some methods from the app instance",
                "Make sure to initialize with 'useApp' before calling the render() method.",
            ]
        );
    }

    return _app;
}

/**
 * Set the instance of the app to be used by the components.
 * @param {RecursiveApp} app current app instance.
 */
function useApp(app) {
    if (app) {
        _app = app;
    } else {
        RecursiveConsole.error(
            "Recursive Web : The app used by the components is not of type RecursiveApp."
        );
    }
}

/**
 * Create an element using the current app method.
 * @param  {...any} args arguments
 */
function createElement(...args) {
    const app = getApp();

    if (!app) {
        RecursiveConsole.error(
            "Recursive Web : The app used by the components is not of type RecursiveApp."
        );
    }

    return getApp().createElement(...args);
}

module.exports = { getApp, useApp, createElement, component };
