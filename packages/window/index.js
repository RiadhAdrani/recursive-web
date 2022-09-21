const onGlobal = require("./events/onGlobal.js");
const handler = require("./events/handler.js");
const { RecursiveApp } = require("../../use");
const {
    WINDOW_ON_CLICK,
    WINDOW_ON_CONTEXT_MENU,
    WINDOW_ON_RESIZE,
    WINDOW_ON_KEY_UP,
    WINDOW_ON_KEY_DOWN,
    WINDOW_ON_SCROLL,
    WINDOW_ON_BEFORE_UNLOAD,
} = require("../constants/index.js");

/**
 * Initialize the global window object with the global events.
 * @param {RecursiveApp} app Application orchestrator.
 */
function useRecursiveWindow(app) {
    const orchestrator = app.orchestrator;

    onGlobal(
        orchestrator,
        "click",
        WINDOW_ON_CLICK.toLowerCase(),
        WINDOW_ON_CLICK
    );
    onGlobal(
        orchestrator,
        "contextmenu",
        WINDOW_ON_CONTEXT_MENU.toLowerCase(),
        WINDOW_ON_CONTEXT_MENU
    );
    onGlobal(
        orchestrator,
        "resize",
        WINDOW_ON_RESIZE.toLowerCase(),
        WINDOW_ON_RESIZE,
        false
    );
    onGlobal(
        orchestrator,
        "keyup",
        WINDOW_ON_KEY_UP.toLowerCase(),
        WINDOW_ON_KEY_UP,
        false
    );
    onGlobal(
        orchestrator,
        "keydown",
        WINDOW_ON_KEY_DOWN.toLowerCase(),
        WINDOW_ON_KEY_DOWN,
        false
    );
    onGlobal(
        orchestrator,
        "scroll",
        WINDOW_ON_SCROLL.toLowerCase(),
        WINDOW_ON_SCROLL,
        false
    );
    onGlobal(
        orchestrator,
        "beforeunload",
        WINDOW_ON_BEFORE_UNLOAD.toLowerCase(),
        WINDOW_ON_BEFORE_UNLOAD,
        false
    );
}

module.exports = { handler, useRecursiveWindow };
