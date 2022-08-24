import { RecursiveWebApp } from "../packages/app/index";
import {
    DateTimeLocalPicker,
    Div,
    HtmlContainer,
    Input,
    Spacer,
    TextField,
} from "../html";
import { G, Path, Svg } from "../svg";

const App = new RecursiveWebApp({
    root: document.body,
    app: () => {
        return Div({
            children: [
                HtmlContainer({
                    children: ["<p>One</p>", {}, 0, 1, "<h1>yeet</h2>"],
                }),
                Input({ contentEditable: "true", placeholder: "Hello World" }),
                TextField({ value: "string" }),
                DateTimeLocalPicker({}),
                Svg({
                    viewBox: "0 0 24 24",
                    height: "50px",
                    width: "30px",
                    children: [
                        Path({
                            d: "M15,5.63L20.66,12L15,18.37V15v-1h-1c-3.96,0-7.14,1-9.75,3.09c1.84-4.07,5.11-6.4,9.89-7.1L15,9.86V9V5.63 M14,3v6 C6.22,10.13,3.11,15.33,2,21c2.78-3.97,6.44-6,12-6v6l8-9L14,3L14,3z",
                        }),
                    ],
                }),
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
 * Create a modifed `<a>` element for routing.
 * @param {import("../lib").AProps} props
 * @returns
 */
function Link(props) {
    return App.Link(props);
}

/**
 * Returns the currentl route path.
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

const arias = [
    "aria-autocomplete",
    "aria-checked",
    "aria-disabled",
    "aria-errormessage",
    "aria-expanded",
    "aria-haspopup",
    "aria-hidden",
    "aria-invalid",
    "aria-label",
    "aria-level",
    "aria-modal",
    "aria-multiline",
    "aria-multiselectable",
    "aria-orientation",
    "aria-placeholder",
    "aria-pressed",
    "aria-readonly",
    "aria-required",
    "aria-selected",
    "aria-sort",
    "aria-valuemax",
    "aria-valuemin",
    "aria-valuenow",
    "aria-valuetext",
    "aria-busy",
    "aria-live",
    "aria-relevant",
    "aria-atomic",
    "aria-dropeffect",
    "aria-grabbed",
    "aria-activedescendant",
    "aria-colcount",
    "aria-colindex",
    "aria-colspan",
    "aria-controls",
    "aria-describedby",
    "aria-description",
    "aria-details",
    "aria-errormessage",
    "aria-flowto",
    "aria-labelledby",
    "aria-owns",
    "aria-posinset",
    "aria-rowcount",
    "aria-rowindex",
    "aria-rowspan",
    "aria-setsize",
    "aria-atomic",
    "aria-busy",
    "aria-controls",
    "aria-current",
    "aria-describedby",
    "aria-description",
    "aria-details",
    "aria-disabled",
    "aria-dropeffect",
    "aria-errormessage",
    "aria-flowto",
    "aria-grabbed",
    "aria-haspopup",
    "aria-hidden",
    "aria-invalid",
    "aria-keyshortcuts",
    "aria-label",
    "aria-labelledby",
    "aria-live",
    "aria-owns",
    "aria-relevant",
    "aria-roledescription",
];

const obj = {};

arias.forEach((item) => {
    const name = item
        .split("-")
        .map((part, index) => {
            if (index > 0) {
                return part.substring(0, 1).toUpperCase() + part.substring(1);
            } else {
                return part;
            }
        })
        .join("");

    const itemObj = {
        name: item,
        type: "normal",
        values: "string",
        els: true,
        docs: [],
    };

    obj[name] = itemObj;
});

// console.log(obj);
