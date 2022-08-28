import { RecursiveWebApp } from "../packages/app/index";
import { ColorPicker, Div, Link } from "../html";
import { useApp } from "../packages/components";

const App = new RecursiveWebApp({
    root: document.body,
    route: { path: "/", component: () => "Home" },
    onAppInit: (_app) => {
        useApp(_app);
    },
    app: () => {
        const [value, setValue] = setState("state", "#000000");

        return Div({
            style: { inline: { backgroundColor: value } },
            children: [
                Link({
                    href: "/route",
                    children: "Hello World",
                }),
                ColorPicker({
                    value,
                    onInput: (e) => {
                        setValue(e.target.value);
                    },
                }),
                renderRoute(),
            ],
        });
    },
});

App.render();

/**
 * Return parameters as a keyed object.
 * @returns
 */
function getParams() {
    return App.getParams();
}

/**
 * Redirect the app to the provided path.
 * @param {string} path
 * @returns
 */
function goTo(path) {
    App.goTo(path);
}

/**
 * Return the appropriate component.
 *
 * _`Do not use as the root of the app, should be nested in another element instead.`_
 * @returns {HTMLElement | Text} component
 */
function renderRoute() {
    return App.renderRoute();
}

/**
 * Retrieve an existing stateful object from the `state` store if it exists.
 * @param {string} key identifier
 * @throw an error if the state does not exist.
 * @returns {import("../lib").StateArray} StateArray
 */
function getState(key) {
    return App.getState(key);
}

/**
 * Create and save a stateful object in the `state` store within the global `StateStore`.
 *
 * Objects created by this method are deleted when they are not used or called in a rendering iteration.
 * @param {string} key unique identifier of the state whithin its store.
 * @param {any} value initial value
 * @param {Function} onInit a function that will execute when the state is initialized.
 * If the return value of this function is a function itself,
 * it will be executed whe the state is destroyed.
 * @param {Function} onRemoved a function that will execute when the state has been destroyed.
 * @returns {import("../lib").StateArray} StateArray
 */
function setState(key, value, onInit, onRemoved) {
    return App.setState(key, value, onInit, onRemoved);
}

/**
 * Retrieve an existing stateful object from the `cache` store if it exists.
 * @param {string} key identifier
 * @throw an error if the state does not exist.
 * @returns {import("../lib").StateArray} StateArray
 */
function getCache(key) {
    return App.getCache(key);
}

/**
 * Create and save a stateful object in the `cache` store within the global `StateStore`.
 *
 * Objects created by this method are not deleted when they are not used,
 * unless the number of cached object exceed the maximum allocated size which is by default `1000`.
 *
 * Older states will be deleted first.
 *
 * @param {string} key unique identifier of the state whithin its store.
 * @param {any} value initial value
 * @param {Function} onInit a function that will execute when the state is initialized.
 * If the return value of this function is a function itself,
 * it will be executed whe the state is destroyed.
 * @param {Function} onRemoved a function that will execute when the state has been destroyed.
 * @returns {import("../lib").StateArray} StateArray
 */
function setCache(key, value, onInit, onRemoved) {
    return App.setCache(key, value, onInit, onRemoved);
}

/**
 * Retrieve an existing element from the `reference` store, or the default value.
 * @param {string} key identifier
 * @returns {HTMLElement} element
 */
function getRef(key, defaultValue = document.createElement("div")) {
    return App.getRef(key, defaultValue);
}

/**
 * Batch update made within the callback.
 *
 * Used generally to state update after an asynchronous call.
 *
 * The callback function should not be an asynchronous function.
 *
 * @example
 * // Correct use
 * const data = await getData();
 * updateOn(() => {
 *      setState1(data.value1);
 *      setState2(data.value2);
 * })
 *
 * // Bad use and can cause unexpected behavior
 *
 * updateOn(async () => {
 *      const data = await getData();
 *
 *      setState1(data.value1);
 *      setState2(data.value2);
 *
 * })
 * @param {Function} callback
 */
function updateOn(callback) {
    App.updateOn(callback);
}

/**
 * Add a style sheet that will be evaluated every time the app is updated.
 * @param {import("../lib").FreeStyleSheet} cssObject
 */
function setStyle(cssObject) {
    App.setStyle(cssObject);
}

/**
 *
 * @param {import("../lib").StyleSheet} param
 * @returns
 */
function createComponentStyle(param) {
    return App.createComponentStyle(param);
}

/**
 * Returns the current route path.
 * @returns {string}
 */
function getRoute() {
    return App.getRoute();
}

export {
    Link,
    goTo,
    createComponentStyle,
    setStyle,
    setState,
    updateOn,
    getRef,
    getState,
    setCache,
    getCache,
    getParams,
    getRoute,
    renderRoute,
};
