import { handler } from "../window/index.js";

const list = {
    // Standard Events

    onAbort: { listener: "abort", on: "onabort", type: "Event" },
    onAnimationEnd: { listener: "animationend", on: "onanimationend", type: "Event" },
    onAnimationIteration: {
        listener: "animationiteration",
        on: "onanimationiteration",
        type: "Event",
    },
    onAnimationStart: { listener: "animationstart", on: "onanimationstart", type: "Event" },
    onAnimationEnd: { listener: "animationend", on: "onanimationend", type: "Event" },
    onBeforePrint: { listener: "beforeprint", on: "onbeforeprint", type: "Event" },
    onBeforeUnload: { listener: "beforeunload", on: "onberforeunload", type: "Event" },
    onBlur: { listener: "blur", on: "onblur", type: "Event" },
    onCanPlay: { listener: "canplay", on: "oncanplay", type: "Event" },
    onCanPlayThrough: { listener: "canplaythrough", on: "oncanplaythroug", type: "Event" },
    onChange: { listener: "change", on: "onchange", type: "Event" },
    onClick: { listener: "click", on: "onclick", type: "Event" },
    onContextMenu: { listener: "contextmenu", on: "oncontextmenu", type: "Event" },
    onCopy: { listener: "copy", on: "oncopy", type: "Event" },
    onCut: { listener: "cut", on: "oncut", type: "Event" },
    onDoubleClick: { listener: "dblclick", on: "ondblclick", type: "Event" },
    onDrag: { listener: "drag", on: "ondrag", type: "Event" },
    onDragEnd: { listener: "dragend", on: "ondragend", type: "Event" },
    onDragEnter: { listener: "dragenter", on: "ondragenter", type: "Event" },
    onDragLeave: { listener: "dragleave", on: "ondragleave", type: "Event" },
    onDragOver: { listener: "dragover", on: "ondragover", type: "Event" },
    onDragStart: { listener: "dragstart", on: "ondragstart", type: "Event" },
    onDrop: { listener: "drop", on: "ondrop", type: "Event" },
    onDurationChange: { listener: "durationchange", on: "ondurationchange", type: "Event" },
    onEnded: { listener: "ended", on: "onended", type: "Event" },
    onError: { listener: "error", on: "onerror", type: "Event" },
    onFocus: { listener: "focus", on: "onfocus", type: "Event" },
    onFocusIn: { listener: "focusin", on: "onfocusin", type: "Event" },
    onFocusOut: { listener: "focusout", on: "onfocusout", type: "Event" },
    onFullScreenChange: { listener: "fullscreenchange", on: "onfullscreenchange", type: "Event" },
    onHashChange: { listener: "hashchange", on: "onhashchange", type: "Event" },
    onInput: { listener: "input", on: "oninput", type: "Event" },
    onInvalid: { listener: "invalid", on: "oninvalid", type: "Event" },
    onKeyDown: { listener: "keydown", on: "onkeydown", type: "Event" },
    onKeyPress: { listener: "keypress", on: "onkeypress", type: "Event" },
    onKeyUp: { listener: "keyup", on: "onkeyup", type: "Event" },
    onLoad: { listener: "load", on: "onload", type: "Event" },
    onLoadedData: { listener: "loadeddata", on: "onloadeddata", type: "Event" },
    onLoadedMetaData: { listener: "loadedmetadata", on: "onloadedmetadata", type: "Event" },
    onLoadStart: { listener: "loadstart", on: "onloadstart", type: "Event" },
    onMessage: { listener: "message", on: "onmessage", type: "Event" },
    onMouseDown: { listener: "mousedown", on: "onmousedown", type: "Event" },
    onMouseEnter: { listener: "mouseenter", on: "onmouseenter", type: "Event" },
    onMouseLeave: { listener: "mouseleave", on: "onmouseleave", type: "Event" },
    onMouseMove: { listener: "mousemove", on: "onmousemove", type: "Event" },
    onMouseOver: { listener: "mouseover", on: "onmouseover", type: "Event" },
    onMouseOut: { listener: "mouseout", on: "onmouseout", type: "Event" },
    onMouseUp: { listener: "mouseup", on: "onmouseup", type: "Event" },
    onOffline: { listener: "offline", on: "ononffline", type: "Event" },
    onOnline: { listener: "online", on: "ononline", type: "Event" },
    onOpen: { listener: "open", on: "onopen", type: "Event" },
    onPageHide: { listener: "pagehide", on: "onpagehide", type: "Event" },
    onPageShow: { listener: "pageshow", on: "onpageshow", type: "Event" },
    onPaste: { listener: "paste", on: "onpaste", type: "Event" },
    onPause: { listener: "pause", on: "onpause", type: "Event" },
    onPlay: { listener: "play", on: "onplay", type: "Event" },
    onPlaying: { listener: "playing", on: "onplaying", type: "Event" },
    onPopState: { listener: "popstate", on: "onpopstate", type: "Event" },
    onProgress: { listener: "progress", on: "onprogress", type: "Event" },
    onRateChange: { listener: "ratechange", on: "onratechange", type: "Event" },
    onResize: { listener: "resize", on: "onresize", type: "Event" },
    onReset: { listener: "reset", on: "onreset", type: "Event" },
    onScroll: { listener: "scroll", on: "onscroll", type: "Event" },
    onSearch: { listener: "search", on: "onsearch", type: "Event" },
    onSeeked: { listener: "seeked", on: "onseeked", type: "Event" },
    onSeeking: { listener: "seeking", on: "onseeking", type: "Event" },
    onSelect: { listener: "select", on: "onselect", type: "Event" },
    onSelectionChange: { listener: "selectionchange", on: "onselectionchange", type: "Event" },
    onShow: { listener: "show", on: "onshow", type: "Event" },
    onStalled: { listener: "stalled", on: "onstalled", type: "Event" },
    onStorage: { listener: "storage", on: "onstorage", type: "Event" },
    onSubmit: { listener: "submit", on: "onsubmit", type: "Event" },
    onSuspend: { listener: "suspend", on: "onsuspend", type: "Event" },
    onTimeUpdate: { listener: "timeupdate", on: "ontimeupdate", type: "Event" },
    onToggle: { listener: "toggle", on: "ontoggle", type: "Event" },
    onTouchCancel: { listener: "touchcancel", on: "ontouchcancel", type: "Event" },
    onTouchEnd: { listener: "touchend", on: "ontouchend", type: "Event" },
    onTouchMove: { listener: "touchmove", on: "ontouchmove", type: "Event" },
    onTouchStart: { listener: "touchstart", on: "ontouchstart", type: "Event" },
    onTransitionEnd: { listener: "transitionend", on: "ontransitionend", type: "Event" },
    onUnload: { listener: "unload", on: "onunload", type: "Event" },
    onVolumeChange: { listener: "volumnechange", on: "onvolumechange", type: "Event" },
    onWaiting: { listener: "waiting", on: "onwaiting", type: "Event" },
    onWheel: { listener: "wheel", on: "onwheel", type: "Event" },

    // Recursive Window events

    onClickGlobal: handler("onclickglobal"),
    onResizeGlobal: handler("onresizeglobal"),
    onKeyUpGlobal: handler("onkeyupglobal"),
    onKeyDownGlobal: handler("onkeydownglobal"),
    onContextMenuGlobal: handler("oncontextmenuglobal"),
    onScrollGlobal: handler("onscrollglobal"),
    onBeforeUnloadGlobal: handler("onbeforeunloadglobal"),
};

function is(key) {
    return list[key] !== undefined;
}

function get(key) {
    return list[key];
}

function hasHandler(key) {
    return is(key) && get(key).handler !== undefined;
}

function getListener(key) {
    return get(key).listener;
}

export { is, get, hasHandler, getListener };
