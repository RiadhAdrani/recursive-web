import onGlobal from "./events/onGlobal";
import handler from "./events/handler";
import { RecursiveApp, createElement } from "../../use";
import {
    WINDOW_ON_CLICK,
    WINDOW_ON_CONTEXT_MENU,
    WINDOW_ON_RESIZE,
    WINDOW_ON_KEY_UP,
    WINDOW_ON_KEY_DOWN,
    WINDOW_ON_SCROLL,
    WINDOW_ON_BEFORE_UNLOAD,
    WINDOW_ON_MOUSE_DOWN,
    WINDOW_ON_MOUSE_MOVE,
    WINDOW_ON_MOUSE_UP,
} from "../constants/index";

/**
 * @type {import('../app/index').RecursiveWebApp}
 */
let app;

const useApp = () => app;

/**
 * @param {RecursiveApp} currentAppInstance
 */
function useRecursiveWindow(currentAppInstance) {
    app = currentAppInstance;

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
    registerEvent("mouseup", WINDOW_ON_MOUSE_UP);
    registerEvent("mousedown", WINDOW_ON_MOUSE_DOWN);
    registerEvent("mousemove", WINDOW_ON_MOUSE_MOVE);
}

/**
 * @param {import("../../types/util").ImportScriptParams} params
 */
const importFile = (type = "script", params) => {
    const element = createElement(type, {
        ...params,
        className: "__import__file__",
    });

    document.querySelector("head").append(app.renderElement(element));
};

export { handler, useRecursiveWindow, useApp, importFile };
