import { RecursiveWebApp } from "../packages/app/index";
import { Column, Details, NumberPicker, P, Summary, TextField } from "../html";
import { useApp } from "../packages/components";

const App = new RecursiveWebApp({
    root: document.body,
    onAppInit: (_app) => {
        useApp(_app);
    },
    app: () => {
        setStyle({
            animations: {
                hello: { world: { color: "red" }, y: { color: "blue" } },
            },
            selectors: {
                "*": {
                    color: "yellowgreen",
                },
            },
            var: {
                yeet: "1px",
            },
            fontFace: [
                { fontWeight: "bold", fontFamily: "red", fontStyle: "italic" },
                { fontWeight: "bold", fontFamily: "red", fontStyle: "italic" },
            ],
            imports: ["http://localhost:8080/"],
            mediaQueries: {
                "(max-width:600px)": { "*": { fontSize: "1.5em" } },
            },
        });

        const [count, setCount] = setState("count", 0);
        const [text, setText] = setState("text", "bruh");

        setEffect("log count when updated", [count], () => {
            const timeOut = setTimeout(() => {
                console.log("count is ", count);
            }, 2000);

            return () => clearTimeout(timeOut);
        });

        return Column({
            children: [
                TextField({
                    value: text,
                    onInput: (e) => setText(e.target.value),
                    style: {
                        scoped: true,
                        normal: {
                            animation: ["bruh", "1s", "infinite"],
                        },
                        hover: { color: "red" },
                        mediaQueries: [
                            {
                                condition: "(max-width:1000px)",
                                hover: { color: "blue" },
                            },
                        ],
                        animations: [
                            {
                                name: "bruh",
                                steps: {
                                    from: { color: "orange" },
                                    to: { color: "green" },
                                },
                            },
                        ],
                    },
                }),
                NumberPicker({
                    max: 10,
                    min: 5,
                    value: count,
                    onInput: (e) => setCount(e.target.value),
                }),
                Details({
                    children: [
                        Summary({ children: "Hello World" }),
                        P({
                            onToggle: () => {},
                            children:
                                "The open function is called when we want to expand the accordion. This function does not control the animation of the accordion yet. First, we calculate the height of the <details> element and we apply this height with inline styles on it. Once it’s done, we can set the open attribute on it to make the content visible but hiding as we have an overflow: hidden and a fixed height on the element. We then wait for the next frame to call the expand function and animate the element.",
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
 * Returns the current route path.
 * @returns {string}
 */
function getRoute() {
    return App.getRoute();
}

/**
 * Execute a new effect.
 * @param {string} key identifier.
 * @param {Function} callback callback to be executed.
 * @param {Array<>} dependencies effect dependencies that will decide if the effect should be called again.
 */
function setEffect(key, dependencies, callback) {
    App.setEffect(key, callback, dependencies);
}

export {
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
    setEffect,
};
