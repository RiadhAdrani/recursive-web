const { RecursiveApp } = require("@riadh-adrani/recursive");
const { Console } = require("../../use");

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
        Console.error(
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
        Console.error(
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
        Console.error(
            "Recursive Web : The app used by the components is not of type RecursiveApp."
        );
    }

    return getApp().createElement(...args);
}

/**
 * create a blue print of a component.
 * @param {object} params
 * @param {string} params.tag a string representing the HTML tag of the element.
 * @param {object} params.props an object containing the unique attributes of the element.
 * @param {Array<string>} params.docs an array of string defining the component documentation.
 * @param {boolean} params.childless indicates if the component is childless or not.
 * @param {import("../../core").ComponentHandler} params.handler
 */
function component({ tag, props = {}, docs = [], handler, childless = false }) {
    return { tag, props, docs, handler, childless };
}

module.exports = { getApp, useApp, createElement, component };
