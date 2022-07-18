import { Orchestrator as RecursiveOrchestrator, State as RecursiveState } from "./use";
import RecursiveWebRenderer from "./packages/renderer/";
import RecursiveWebRouter from "./packages/router";
import { useRecursiveWindow } from "./packages/window";
import "./packages/components/DefineElements.js";
import { Console } from "./use";

/**
 * @type {RecursiveWebRouter}
 */
let appRouter = undefined;

/**
 * @type {RecursiveOrchestrator}
 */
let appOrchestrator = undefined;

/**
 * @type {RecursiveWebRenderer}
 */
let appRenderer = undefined;

/**
 * @type {RecursiveState}
 */
let appState = undefined;

function checkRouter(callback) {
    if (typeof callback !== "function") return;
    if (appRouter === undefined) return;

    return callback(appRouter);
}

function checkState(callback) {
    if (typeof callback !== "function") return;
    if (appState === undefined) return;

    return callback(appState);
}

function checkStyle(callback) {
    if (typeof callback !== "function") return;
    if (appRenderer.styler === undefined) return;

    return callback(appRenderer.styler);
}

/**
 * Create a route.
 * * `path` - url of the route. should not contain `/` unless it is the origin route.
 * * `component` - element representing the route.
 * * `title` - tab title.
 * * `routes` - nested children routes.
 * * `redirectTo` - path to which the app will try to redirect.
 * * `onLoad` - function executing when the route is loaded.
 * * `onExit` - function executing when the route is dropped.
 * @param {import("./lib").Route} param
 * @returns
 */
function route(param) {
    return param;
}

/**
 * Return the current route url path.
 * @returns
 */
function getRoute() {
    return checkRouter((router) => router.useRouterGetRoute());
}

/**
 * Return parameters as a keyed object.
 * @returns
 */
function getParams() {
    return checkRouter((router) => router.getParams());
}

/**
 * Return the base of the router.
 * @returns {string} base
 */
function getBase() {
    return checkRouter((router) => router.base);
}

/**
 * Redirect the app to the provided path.
 * @param {string} path
 * @returns
 */
function goTo(path) {
    return checkRouter((router) => router.goTo(path));
}

/**
 * Update the tab title.
 * @param {string} title
 * @returns
 */
function updateTitle(title) {
    return checkRouter(() => (document.title = title));
}

/**
 * Return the appropriate component.
 *
 * _`Do not use as the root of the app, should be nested in another element instead.`_
 * @returns {any} component
 */
function renderRoute() {
    return checkRouter((router) => router.renderRoute());
}

/**
 * Retrieve an existing stateful object from the `state` store if it exists.
 * @param {string} key identifier
 * @throw an error if the state does not exist.
 * @returns {import("./lib").StateArray} StateArray
 */
function getState(key) {
    return checkState((stateManager) => stateManager.getState(key));
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
 * @returns {import("./lib").StateArray} StateArray
 */
function setState(key, value, onInit, onRemoved) {
    return checkState((stateManager) => stateManager.setState(key, value, onInit, onRemoved));
}

/**
 * Retrieve an existing stateful object from the `cache` store if it exists.
 * @param {string} key identifier
 * @throw an error if the state does not exist.
 * @returns {import("./lib").StateArray} StateArray
 */
function getCache(key) {
    return checkState((stateManager) => stateManager.getCache(key));
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
 * @returns {import("./lib").StateArray} StateArray
 */
function setCache(key, value, onInit, onRemoved) {
    return checkState((stateManager) => stateManager.setCache(key, value, onInit, onRemoved));
}

/**
 * Retrieve an existing element from the `reference` store, or the default value.
 * @param {string} key identifier
 * @returns {HTMLElement} element
 */
function getRef(key, defaultValue = document.createElement("div")) {
    return checkState((stateManager) => stateManager.getRef(key, defaultValue));
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
    appOrchestrator.batchCallback(callback, "update-on-" + Date.now());
}

/**
 * Add a style sheet that will be evaluated every time the app is updated.
 * @param {import("./lib").FreeStyleSheet} cssObject
 */
function setStyle(cssObject) {
    checkStyle(() => {
        appRenderer.styler.setStyle(cssObject);
    });
}

/**
 *
 * @param {import("./lib").StyleSheet} param
 * @returns
 */
function componentStyleSheet(param) {
    return param;
}

/**
 * Create `<a>` element.
 * @param {import("./lib").AProps} props
 */
function Link(props) {
    const el = { ...props, elementType: "a" };

    if (appRouter && el.href) {
        const _onClick = el.onClick || (() => {});
        el.href = appRouter.useRouterMakeURL(el.href);

        el.onClick = (e) => {
            e.preventDefault();

            appRouter.goTo(props.href);
            _onClick(e);
        };
    }

    return el;
}

/**
 * Render and inject the `app` inside the given `root`.
 * @param {import("./lib").RenderOptions} params
 */
function Render(params) {
    const app = params.app;
    const router = params.router;
    const root = params.root;
    const cacheSize = params.cacheSize;

    appOrchestrator = new RecursiveOrchestrator();
    appRenderer = new RecursiveWebRenderer(app, root);

    appState = new RecursiveState();

    if (router && router.route) {
        appRouter = new RecursiveWebRouter(
            router.route,
            router.base,
            router.scroll,
            appState,
            appOrchestrator
        );
    }

    appState.orchestrator = appOrchestrator;
    appOrchestrator.renderer = appRenderer;
    appRenderer.stateManager = appState;
    appRenderer.orchestrator = appOrchestrator;

    if (typeof cacheSize == "number" && cacheSize != appState.cacheSize) {
        appState.cacheSize = cacheSize;
    }

    useRecursiveWindow(appOrchestrator);

    appRenderer.render();

    if (appRouter) appRouter.useRouterOnLoad();
}

/**
 * Display a log message to the console.
 *
 * Logs using this method will not be displayed in production.
 * @env development
 * @param {any} msg
 */
function log(msg) {
    Console.log(msg);
}

export {
    Render,
    getBase,
    getParams,
    getRoute,
    Link,
    goTo,
    updateTitle,
    renderRoute,
    route,
    getState,
    setState,
    getCache,
    setCache,
    getRef,
    updateOn,
    setStyle,
    componentStyleSheet,
    log,
};
