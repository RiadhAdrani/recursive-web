const { handler } = require("../window");

const list = {
    onAbort: { listener: "abort", on: "onabort", type: "Event", docs: [] },
    onAnimationEnd: { listener: "animationend", on: "onanimationend", type: "Event", docs: [] },
    onAnimationIteration: {
        listener: "animationiteration",
        on: "onanimationiteration",
        type: "Event",
    },
    onAnimationStart: {
        listener: "animationstart",
        on: "onanimationstart",
        type: "Event",
        docs: [],
    },
    onAnimationEnd: { listener: "animationend", on: "onanimationend", type: "Event", docs: [] },
    onBeforePrint: { listener: "beforeprint", on: "onbeforeprint", type: "Event", docs: [] },
    onBeforeUnload: { listener: "beforeunload", on: "onberforeunload", type: "Event", docs: [] },
    onBlur: { listener: "blur", on: "onblur", type: "Event", docs: [] },
    onCanPlay: { listener: "canplay", on: "oncanplay", type: "Event", docs: [] },
    onCanPlayThrough: {
        listener: "canplaythrough",
        on: "oncanplaythroug",
        type: "Event",
        docs: [],
    },
    onChange: { listener: "change", on: "onchange", type: "Event", docs: [] },
    onContextMenu: { listener: "contextmenu", on: "oncontextmenu", type: "Event", docs: [] },
    onCopy: { listener: "copy", on: "oncopy", type: "Event", docs: [] },
    onCut: { listener: "cut", on: "oncut", type: "Event", docs: [] },
    onDurationChange: {
        listener: "durationchange",
        on: "ondurationchange",
        type: "Event",
        docs: [],
    },
    onEnded: { listener: "ended", on: "onended", type: "Event", docs: [] },
    onError: { listener: "error", on: "onerror", type: "Event", docs: [] },
    onFocus: { listener: "focus", on: "onfocus", type: "Event", docs: [] },
    onFocusIn: { listener: "focusin", on: "onfocusin", type: "Event", docs: [] },
    onFocusOut: { listener: "focusout", on: "onfocusout", type: "Event", docs: [] },
    onFullScreenChange: {
        listener: "fullscreenchange",
        on: "onfullscreenchange",
        type: "Event",
        docs: [],
    },
    onHashChange: { listener: "hashchange", on: "onhashchange", type: "Event", docs: [] },
    onInvalid: { listener: "invalid", on: "oninvalid", type: "Event", docs: [] },
    onLoad: { listener: "load", on: "onload", type: "Event", docs: [] },
    onLoadedData: { listener: "loadeddata", on: "onloadeddata", type: "Event", docs: [] },
    onLoadedMetaData: {
        listener: "loadedmetadata",
        on: "onloadedmetadata",
        type: "Event",
        docs: [],
    },
    onLoadStart: { listener: "loadstart", on: "onloadstart", type: "Event", docs: [] },
    onMessage: { listener: "message", on: "onmessage", type: "Event", docs: [] },
    onOffline: { listener: "offline", on: "ononffline", type: "Event", docs: [] },
    onOnline: { listener: "online", on: "ononline", type: "Event", docs: [] },
    onOpen: { listener: "open", on: "onopen", type: "Event", docs: [] },
    onPageHide: { listener: "pagehide", on: "onpagehide", type: "Event", docs: [] },
    onPageShow: { listener: "pageshow", on: "onpageshow", type: "Event", docs: [] },
    onPaste: { listener: "paste", on: "onpaste", type: "Event", docs: [] },
    onPause: { listener: "pause", on: "onpause", type: "Event", docs: [] },
    onPlay: { listener: "play", on: "onplay", type: "Event", docs: [] },
    onPlaying: { listener: "playing", on: "onplaying", type: "Event", docs: [] },
    onProgress: { listener: "progress", on: "onprogress", type: "Event", docs: [] },
    onRateChange: { listener: "ratechange", on: "onratechange", type: "Event", docs: [] },
    onResize: { listener: "resize", on: "onresize", type: "Event", docs: [] },
    onReset: { listener: "reset", on: "onreset", type: "Event", docs: [] },
    onScroll: { listener: "scroll", on: "onscroll", type: "Event", docs: [] },
    onSearch: { listener: "search", on: "onsearch", type: "Event", docs: [] },
    onSeeked: { listener: "seeked", on: "onseeked", type: "Event", docs: [] },
    onSeeking: { listener: "seeking", on: "onseeking", type: "Event", docs: [] },
    onSelect: { listener: "select", on: "onselect", type: "Event", docs: [] },
    onSelectionChange: {
        listener: "selectionchange",
        on: "onselectionchange",
        type: "Event",
        docs: [],
    },
    onShow: { listener: "show", on: "onshow", type: "Event", docs: [] },
    onStalled: { listener: "stalled", on: "onstalled", type: "Event", docs: [] },
    onStorage: { listener: "storage", on: "onstorage", type: "Event", docs: [] },
    onSubmit: { listener: "submit", on: "onsubmit", type: "Event", docs: [] },
    onSuspend: { listener: "suspend", on: "onsuspend", type: "Event", docs: [] },
    onTimeUpdate: { listener: "timeupdate", on: "ontimeupdate", type: "Event", docs: [] },
    onToggle: { listener: "toggle", on: "ontoggle", type: "Event", docs: [] },
    onTransitionEnd: { listener: "transitionend", on: "ontransitionend", type: "Event", docs: [] },
    onUnload: { listener: "unload", on: "onunload", type: "Event", docs: [] },
    onVolumeChange: { listener: "volumnechange", on: "onvolumechange", type: "Event", docs: [] },
    onWaiting: { listener: "waiting", on: "onwaiting", type: "Event", docs: [] },
    onWheel: { listener: "wheel", on: "onwheel", type: "WheelEvent", docs: [] },
    /**
     * Input Events
     */
    onInput: { listener: "input", on: "oninput", type: "InputEvent", docs: [] },

    /**
     * Drag Events
     */
    onDrag: { listener: "drag", on: "ondrag", type: "DragEvent", docs: [] },
    onDragEnd: { listener: "dragend", on: "ondragend", type: "DragEvent", docs: [] },
    onDragEnter: { listener: "dragenter", on: "ondragenter", type: "DragEvent", docs: [] },
    onDragLeave: { listener: "dragleave", on: "ondragleave", type: "DragEvent", docs: [] },
    onDragOver: { listener: "dragover", on: "ondragover", type: "DragEvent", docs: [] },
    onDragStart: { listener: "dragstart", on: "ondragstart", type: "DragEvent", docs: [] },
    onDrop: { listener: "drop", on: "ondrop", type: "DragEvent", docs: [] },
    /**
     * Keyboard Events
     */
    onKeyDown: { listener: "keydown", on: "onkeydown", type: "KeyboardEvent", docs: [] },
    onKeyPress: { listener: "keypress", on: "onkeypress", type: "KeyboardEvent", docs: [] },
    onKeyUp: { listener: "keyup", on: "onkeyup", type: "KeyboardEvent", docs: [] },
    /**
     * Mouse Events
     */
    onClick: { listener: "click", on: "onclick", type: "MouseEvent", docs: [] },
    onDoubleClick: { listener: "dblclick", on: "ondblclick", type: "MouseEvent", docs: [] },
    onMouseDown: { listener: "mousedown", on: "onmousedown", type: "MouseEvent", docs: [] },
    onMouseEnter: { listener: "mouseenter", on: "onmouseenter", type: "MouseEvent", docs: [] },
    onMouseLeave: { listener: "mouseleave", on: "onmouseleave", type: "MouseEvent", docs: [] },
    onMouseMove: { listener: "mousemove", on: "onmousemove", type: "MouseEvent", docs: [] },
    onMouseOver: { listener: "mouseover", on: "onmouseover", type: "MouseEvent", docs: [] },
    onMouseOut: { listener: "mouseout", on: "onmouseout", type: "MouseEvent", docs: [] },
    onMouseUp: { listener: "mouseup", on: "onmouseup", type: "MouseEvent", docs: [] },
    /**
     * Pointer events
     */
    onPointerOver: { listener: "pointerover", on: "onpointerover", type: "PointerEvent", docs: [] },
    onPointerEnter: {
        listener: "pointerenter",
        on: "onpointerenter",
        type: "PointerEvent",
        docs: [],
    },
    onPointerDown: { listener: "pointerdown", on: "onpointerdown", type: "PointerEvent", docs: [] },
    onPointerMove: { listener: "pointermove", on: "onpointermove", type: "PointerEvent", docs: [] },
    onPointerUp: { listener: "pointerup", on: "onpointerup", type: "PointerEvent", docs: [] },
    onPointerCancel: {
        listener: "pointercancel",
        on: "onpointercancel",
        type: "PointerEvent",
        docs: [],
    },
    onPointerOut: { listener: "pointerout", on: "onpointerout", type: "PointerEvent", docs: [] },
    onPointerLeave: {
        listener: "pointerleave",
        on: "onpointerleave",
        type: "PointerEvent",
        docs: [],
    },
    onGotPointerCapture: {
        listener: "gotpointercapture",
        on: "ongotpointercapture",
        type: "PointerEvent",
    },
    onLostPointerCapture: {
        listener: "lostpointercapture",
        on: "onlostpointercapture",
        type: "PointerEvent",
    },
    /**
     * Touch events
     */
    onTouchCancel: { listener: "touchcancel", on: "ontouchcancel", type: "TouchEvent", docs: [] },
    onTouchEnd: { listener: "touchend", on: "ontouchend", type: "TouchEvent", docs: [] },
    onTouchMove: { listener: "touchmove", on: "ontouchmove", type: "TouchEvent", docs: [] },
    onTouchStart: { listener: "touchstart", on: "ontouchstart", type: "TouchEvent", docs: [] },
    /**
     * Recursive Window events
     */
    onClickGlobal: handler("onclickglobal", "PointerEvent", []),
    onResizeGlobal: handler("onresizeglobal", "Event", []),
    onKeyUpGlobal: handler("onkeyupglobal", "KeyboardEvent", []),
    onKeyDownGlobal: handler("onkeydownglobal", "KeyboardEvent", []),
    onContextMenuGlobal: handler("oncontextmenuglobal", "PointerEvent", []),
    onScrollGlobal: handler("onscrollglobal", "Event", []),
    onBeforeUnloadGlobal: handler("onbeforeunloadglobal", "BeforeUnloadEvent", []),
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

module.exports = { is, get, hasHandler, getListener, list };
