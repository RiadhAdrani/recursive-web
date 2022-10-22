const onGlobal = require("./events/onGlobal");
const handler = require("./events/handler");
const { RecursiveApp } = require("../../use");
const {
    WINDOW_ON_CLICK,
    WINDOW_ON_CONTEXT_MENU,
    WINDOW_ON_RESIZE,
    WINDOW_ON_KEY_UP,
    WINDOW_ON_KEY_DOWN,
    WINDOW_ON_SCROLL,
    WINDOW_ON_BEFORE_UNLOAD,
    WINDOW_ON_DROP,
} = require("../constants/index");

/**
 * @param {RecursiveApp} app
 */
function useRecursiveWindow(app) {
    const orchestrator = app.orchestrator;

    /**
     * @param {string} store
     * @param {string} event
     */
    const registerEvent = (event, store, checkTarget = false) => {
        onGlobal(
            orchestrator,
            event,
            store.toLocaleLowerCase(),
            store,
            checkTarget
        );
    };

    registerEvent("click", WINDOW_ON_CLICK);
    registerEvent("contextmenu", WINDOW_ON_CONTEXT_MENU);
    registerEvent("resize", WINDOW_ON_RESIZE, false);
    registerEvent("keyup", WINDOW_ON_KEY_UP, false);
    registerEvent("keydown", WINDOW_ON_KEY_DOWN, false);
    registerEvent("scroll", WINDOW_ON_SCROLL, false);
    registerEvent("beforeunload", WINDOW_ON_BEFORE_UNLOAD, false);
    registerEvent("drop", WINDOW_ON_DROP);
}

module.exports = { handler, useRecursiveWindow };
