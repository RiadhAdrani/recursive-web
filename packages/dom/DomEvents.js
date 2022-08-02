const { handler } = require("../window");

const list = {
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
    onContextMenu: { listener: "contextmenu", on: "oncontextmenu", type: "Event" },
    onCopy: { listener: "copy", on: "oncopy", type: "Event" },
    onCut: { listener: "cut", on: "oncut", type: "Event" },
    onDurationChange: { listener: "durationchange", on: "ondurationchange", type: "Event" },
    onEnded: { listener: "ended", on: "onended", type: "Event" },
    onError: { listener: "error", on: "onerror", type: "Event" },
    onFocus: { listener: "focus", on: "onfocus", type: "Event" },
    onFocusIn: { listener: "focusin", on: "onfocusin", type: "Event" },
    onFocusOut: { listener: "focusout", on: "onfocusout", type: "Event" },
    onFullScreenChange: { listener: "fullscreenchange", on: "onfullscreenchange", type: "Event" },
    onHashChange: { listener: "hashchange", on: "onhashchange", type: "Event" },
    onInvalid: { listener: "invalid", on: "oninvalid", type: "Event" },
    onLoad: { listener: "load", on: "onload", type: "Event" },
    onLoadedData: { listener: "loadeddata", on: "onloadeddata", type: "Event" },
    onLoadedMetaData: { listener: "loadedmetadata", on: "onloadedmetadata", type: "Event" },
    onLoadStart: { listener: "loadstart", on: "onloadstart", type: "Event" },
    onMessage: { listener: "message", on: "onmessage", type: "Event" },
    onOffline: { listener: "offline", on: "ononffline", type: "Event" },
    onOnline: { listener: "online", on: "ononline", type: "Event" },
    onOpen: { listener: "open", on: "onopen", type: "Event" },
    onPageHide: { listener: "pagehide", on: "onpagehide", type: "Event" },
    onPageShow: { listener: "pageshow", on: "onpageshow", type: "Event" },
    onPaste: { listener: "paste", on: "onpaste", type: "Event" },
    onPause: { listener: "pause", on: "onpause", type: "Event" },
    onPlay: { listener: "play", on: "onplay", type: "Event" },
    onPlaying: { listener: "playing", on: "onplaying", type: "Event" },
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
    onTransitionEnd: { listener: "transitionend", on: "ontransitionend", type: "Event" },
    onUnload: { listener: "unload", on: "onunload", type: "Event" },
    onVolumeChange: { listener: "volumnechange", on: "onvolumechange", type: "Event" },
    onWaiting: { listener: "waiting", on: "onwaiting", type: "Event" },
    onWheel: { listener: "wheel", on: "onwheel", type: "WheelEvent" },
    /**
     * Input Events
     */
    onInput: { listener: "input", on: "oninput", type: "InputEvent" },

    /**
     * Drag Events
     */
    onDrag: { listener: "drag", on: "ondrag", type: "DragEvent" },
    onDragEnd: { listener: "dragend", on: "ondragend", type: "DragEvent" },
    onDragEnter: { listener: "dragenter", on: "ondragenter", type: "DragEvent" },
    onDragLeave: { listener: "dragleave", on: "ondragleave", type: "DragEvent" },
    onDragOver: { listener: "dragover", on: "ondragover", type: "DragEvent" },
    onDragStart: { listener: "dragstart", on: "ondragstart", type: "DragEvent" },
    onDrop: { listener: "drop", on: "ondrop", type: "DragEvent" },
    /**
     * Keyboard Events
     */
    onKeyDown: { listener: "keydown", on: "onkeydown", type: "KeyboardEvent" },
    onKeyPress: { listener: "keypress", on: "onkeypress", type: "KeyboardEvent" },
    onKeyUp: { listener: "keyup", on: "onkeyup", type: "KeyboardEvent" },
    /**
     * Mouse Events
     */
    onClick: { listener: "click", on: "onclick", type: "MouseEvent" },
    onDoubleClick: { listener: "dblclick", on: "ondblclick", type: "MouseEvent" },
    onMouseDown: { listener: "mousedown", on: "onmousedown", type: "MouseEvent" },
    onMouseEnter: { listener: "mouseenter", on: "onmouseenter", type: "MouseEvent" },
    onMouseLeave: { listener: "mouseleave", on: "onmouseleave", type: "MouseEvent" },
    onMouseMove: { listener: "mousemove", on: "onmousemove", type: "MouseEvent" },
    onMouseOver: { listener: "mouseover", on: "onmouseover", type: "MouseEvent" },
    onMouseOut: { listener: "mouseout", on: "onmouseout", type: "MouseEvent" },
    onMouseUp: { listener: "mouseup", on: "onmouseup", type: "MouseEvent" },
    /**
     * Pointer events
     */
    onPointerOver: { listener: "pointerover", on: "onpointerover", type: "PointerEvent" },
    onPointerEnter: { listener: "pointerenter", on: "onpointerenter", type: "PointerEvent" },
    onPointerDown: { listener: "pointerdown", on: "onpointerdown", type: "PointerEvent" },
    onPointerMove: { listener: "pointermove", on: "onpointermove", type: "PointerEvent" },
    onPointerUp: { listener: "pointerup", on: "onpointerup", type: "PointerEvent" },
    onPointerCancel: { listener: "pointercancel", on: "onpointercancel", type: "PointerEvent" },
    onPointerOut: { listener: "pointerout", on: "onpointerout", type: "PointerEvent" },
    onPointerLeave: { listener: "pointerleave", on: "onpointerleave", type: "PointerEvent" },
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
    onTouchCancel: { listener: "touchcancel", on: "ontouchcancel", type: "TouchEvent" },
    onTouchEnd: { listener: "touchend", on: "ontouchend", type: "TouchEvent" },
    onTouchMove: { listener: "touchmove", on: "ontouchmove", type: "TouchEvent" },
    onTouchStart: { listener: "touchstart", on: "ontouchstart", type: "TouchEvent" },
    /**
     * Recursive Window events
     *
     */
    onClickGlobal: handler("onclickglobal", "PointerEvent"),
    onResizeGlobal: handler("onresizeglobal", "Event"),
    onKeyUpGlobal: handler("onkeyupglobal", "KeyboardEvent"),
    onKeyDownGlobal: handler("onkeydownglobal", "KeyboardEvent"),
    onContextMenuGlobal: handler("oncontextmenuglobal", "PointerEvent"),
    onScrollGlobal: handler("onscrollglobal", "Event"),
    onBeforeUnloadGlobal: handler("onbeforeunloadglobal", "BeforeUnloadEvent"),
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
