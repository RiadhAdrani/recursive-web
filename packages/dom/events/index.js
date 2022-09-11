const { event } = require("../../templates");
const { handler } = require("../../window");

/**
 * @credit MDN (2022) - https://developer.mozilla.org/en-US/docs/Web/Events
 */
module.exports = {
    onAbort: event({
        listener: "abort",
        on: "onabort",
        type: "Event",
        docs: [],
    }),
    onAnimationEnd: event({
        listener: "animationend",
        on: "onanimationend",
        type: "Event",
        docs: [],
    }),
    onAnimationIteration: event({
        listener: "animationiteration",
        on: "onanimationiteration",
        type: "Event",
    }),
    onAnimationStart: event({
        listener: "animationstart",
        on: "onanimationstart",
        type: "Event",
        docs: [],
    }),
    onAnimationEnd: event({
        listener: "animationend",
        on: "onanimationend",
        type: "Event",
        docs: [],
    }),
    onBeforePrint: event({
        listener: "beforeprint",
        on: "onbeforeprint",
        type: "Event",
        docs: [],
    }),
    onBeforeUnload: event({
        listener: "beforeunload",
        on: "onberforeunload",
        type: "Event",
        docs: [],
    }),
    onBlur: event({ listener: "blur", on: "onblur", type: "Event", docs: [] }),
    onCanPlay: event({
        listener: "canplay",
        on: "oncanplay",
        type: "Event",
        docs: [],
    }),
    onCanPlayThrough: event({
        listener: "canplaythrough",
        on: "oncanplaythroug",
        type: "Event",
        docs: [],
    }),
    onChange: event({
        listener: "change",
        on: "onchange",
        type: "Event",
        docs: [],
    }),
    onContextMenu: event({
        listener: "contextmenu",
        on: "oncontextmenu",
        type: "Event",
        docs: [],
    }),
    onCopy: event({ listener: "copy", on: "oncopy", type: "Event", docs: [] }),
    onCut: event({ listener: "cut", on: "oncut", type: "Event", docs: [] }),
    onDurationChange: event({
        listener: "durationchange",
        on: "ondurationchange",
        type: "Event",
        docs: [],
    }),
    onEnded: event({
        listener: "ended",
        on: "onended",
        type: "Event",
        docs: [],
    }),
    onError: event({
        listener: "error",
        on: "onerror",
        type: "Event",
        docs: [],
    }),
    onFocus: event({
        listener: "focus",
        on: "onfocus",
        type: "Event",
        docs: [],
    }),
    onFocusIn: event({
        listener: "focusin",
        on: "onfocusin",
        type: "Event",
        docs: [],
    }),
    onFocusOut: event({
        listener: "focusout",
        on: "onfocusout",
        type: "Event",
        docs: [],
    }),
    onFullScreenChange: event({
        listener: "fullscreenchange",
        on: "onfullscreenchange",
        type: "Event",
        docs: [],
    }),
    onHashChange: event({
        listener: "hashchange",
        on: "onhashchange",
        type: "Event",
        docs: [],
    }),
    onInvalid: event({
        listener: "invalid",
        on: "oninvalid",
        type: "Event",
        docs: [],
    }),
    onLoad: event({ listener: "load", on: "onload", type: "Event", docs: [] }),
    onLoadedData: event({
        listener: "loadeddata",
        on: "onloadeddata",
        type: "Event",
        docs: [],
    }),
    onLoadedMetaData: event({
        listener: "loadedmetadata",
        on: "onloadedmetadata",
        type: "Event",
        docs: [],
    }),
    onLoadStart: event({
        listener: "loadstart",
        on: "onloadstart",
        type: "Event",
        docs: [],
    }),
    onMessage: event({
        listener: "message",
        on: "onmessage",
        type: "Event",
        docs: [],
    }),
    onOffline: event({
        listener: "offline",
        on: "ononffline",
        type: "Event",
        docs: [],
    }),
    onOnline: event({
        listener: "online",
        on: "ononline",
        type: "Event",
        docs: [],
    }),
    onOpen: event({ listener: "open", on: "onopen", type: "Event", docs: [] }),
    onPageHide: event({
        listener: "pagehide",
        on: "onpagehide",
        type: "Event",
        docs: [],
    }),
    onPageShow: event({
        listener: "pageshow",
        on: "onpageshow",
        type: "Event",
        docs: [],
    }),
    onPaste: event({
        listener: "paste",
        on: "onpaste",
        type: "Event",
        docs: [],
    }),
    onPause: event({
        listener: "pause",
        on: "onpause",
        type: "Event",
        docs: [],
    }),
    onPlay: event({ listener: "play", on: "onplay", type: "Event", docs: [] }),
    onPlaying: event({
        listener: "playing",
        on: "onplaying",
        type: "Event",
        docs: [],
    }),
    onProgress: event({
        listener: "progress",
        on: "onprogress",
        type: "Event",
        docs: [],
    }),
    onRateChange: event({
        listener: "ratechange",
        on: "onratechange",
        type: "Event",
        docs: [],
    }),
    onResize: event({
        listener: "resize",
        on: "onresize",
        type: "Event",
        docs: [],
    }),
    onReset: event({
        listener: "reset",
        on: "onreset",
        type: "Event",
        docs: [],
    }),
    onScroll: event({
        listener: "scroll",
        on: "onscroll",
        type: "Event",
        docs: [],
    }),
    onSearch: event({
        listener: "search",
        on: "onsearch",
        type: "Event",
        docs: [],
    }),
    onSeeked: event({
        listener: "seeked",
        on: "onseeked",
        type: "Event",
        docs: [],
    }),
    onSeeking: event({
        listener: "seeking",
        on: "onseeking",
        type: "Event",
        docs: [],
    }),
    onSelect: event({
        listener: "select",
        on: "onselect",
        type: "Event",
        docs: [],
    }),
    onSelectionChange: event({
        listener: "selectionchange",
        on: "onselectionchange",
        type: "Event",
        docs: [],
    }),
    onShow: event({ listener: "show", on: "onshow", type: "Event", docs: [] }),
    onStalled: event({
        listener: "stalled",
        on: "onstalled",
        type: "Event",
        docs: [],
    }),
    onStorage: event({
        listener: "storage",
        on: "onstorage",
        type: "Event",
        docs: [],
    }),
    onSubmit: event({
        listener: "submit",
        on: "onsubmit",
        type: "Event",
        docs: [],
    }),
    onSuspend: event({
        listener: "suspend",
        on: "onsuspend",
        type: "Event",
        docs: [],
    }),
    onTimeUpdate: event({
        listener: "timeupdate",
        on: "ontimeupdate",
        type: "Event",
        docs: [],
    }),
    onToggle: event({
        listener: "toggle",
        on: "ontoggle",
        type: "Event",
        docs: [],
    }),
    onTransitionEnd: event({
        listener: "transitionend",
        on: "ontransitionend",
        type: "Event",
        docs: [],
    }),
    onUnload: event({
        listener: "unload",
        on: "onunload",
        type: "Event",
        docs: [],
    }),
    onVolumeChange: event({
        listener: "volumnechange",
        on: "onvolumechange",
        type: "Event",
        docs: [],
    }),
    onWaiting: event({
        listener: "waiting",
        on: "onwaiting",
        type: "Event",
        docs: [],
    }),
    onWheel: event({
        listener: "wheel",
        on: "onwheel",
        type: "WheelEvent",
        docs: [],
    }),
    /**
     * Input Events
     */
    onInput: event({
        listener: "input",
        on: "oninput",
        type: "InputEvent",
        docs: [],
    }),

    /**
     * Drag Events
     */
    onDrag: event({
        listener: "drag",
        on: "ondrag",
        type: "DragEvent",
        docs: [],
    }),
    onDragEnd: event({
        listener: "dragend",
        on: "ondragend",
        type: "DragEvent",
        docs: [],
    }),
    onDragEnter: event({
        listener: "dragenter",
        on: "ondragenter",
        type: "DragEvent",
        docs: [],
    }),
    onDragLeave: event({
        listener: "dragleave",
        on: "ondragleave",
        type: "DragEvent",
        docs: [],
    }),
    onDragOver: event({
        listener: "dragover",
        on: "ondragover",
        type: "DragEvent",
        docs: [],
    }),
    onDragStart: event({
        listener: "dragstart",
        on: "ondragstart",
        type: "DragEvent",
        docs: [],
    }),
    onDrop: event({
        listener: "drop",
        on: "ondrop",
        type: "DragEvent",
        docs: [],
    }),
    /**
     * Keyboard Events
     */
    onKeyDown: event({
        listener: "keydown",
        on: "onkeydown",
        type: "KeyboardEvent",
        docs: [],
    }),
    onKeyPress: event({
        listener: "keypress",
        on: "onkeypress",
        type: "KeyboardEvent",
        docs: [],
    }),
    onKeyUp: event({
        listener: "keyup",
        on: "onkeyup",
        type: "KeyboardEvent",
        docs: [],
    }),
    /**
     * Mouse Events
     */
    onClick: event({
        listener: "click",
        on: "onclick",
        type: "MouseEvent",
        docs: [],
    }),
    onDoubleClick: event({
        listener: "dblclick",
        on: "ondblclick",
        type: "MouseEvent",
        docs: [],
    }),
    onMouseDown: event({
        listener: "mousedown",
        on: "onmousedown",
        type: "MouseEvent",
        docs: [],
    }),
    onMouseEnter: event({
        listener: "mouseenter",
        on: "onmouseenter",
        type: "MouseEvent",
        docs: [],
    }),
    onMouseLeave: event({
        listener: "mouseleave",
        on: "onmouseleave",
        type: "MouseEvent",
        docs: [],
    }),
    onMouseMove: event({
        listener: "mousemove",
        on: "onmousemove",
        type: "MouseEvent",
        docs: [],
    }),
    onMouseOver: event({
        listener: "mouseover",
        on: "onmouseover",
        type: "MouseEvent",
        docs: [],
    }),
    onMouseOut: event({
        listener: "mouseout",
        on: "onmouseout",
        type: "MouseEvent",
        docs: [],
    }),
    onMouseUp: event({
        listener: "mouseup",
        on: "onmouseup",
        type: "MouseEvent",
        docs: [],
    }),
    /**
     * Pointer events
     */
    onPointerOver: event({
        listener: "pointerover",
        on: "onpointerover",
        type: "PointerEvent",
        docs: [],
    }),
    onPointerEnter: event({
        listener: "pointerenter",
        on: "onpointerenter",
        type: "PointerEvent",
        docs: [],
    }),
    onPointerDown: event({
        listener: "pointerdown",
        on: "onpointerdown",
        type: "PointerEvent",
        docs: [],
    }),
    onPointerMove: event({
        listener: "pointermove",
        on: "onpointermove",
        type: "PointerEvent",
        docs: [],
    }),
    onPointerUp: event({
        listener: "pointerup",
        on: "onpointerup",
        type: "PointerEvent",
        docs: [],
    }),
    onPointerCancel: event({
        listener: "pointercancel",
        on: "onpointercancel",
        type: "PointerEvent",
        docs: [],
    }),
    onPointerOut: event({
        listener: "pointerout",
        on: "onpointerout",
        type: "PointerEvent",
        docs: [],
    }),
    onPointerLeave: event({
        listener: "pointerleave",
        on: "onpointerleave",
        type: "PointerEvent",
        docs: [],
    }),
    onGotPointerCapture: event({
        listener: "gotpointercapture",
        on: "ongotpointercapture",
        type: "PointerEvent",
    }),
    onLostPointerCapture: event({
        listener: "lostpointercapture",
        on: "onlostpointercapture",
        type: "PointerEvent",
    }),
    /**
     * Touch events
     */
    onTouchCancel: event({
        listener: "touchcancel",
        on: "ontouchcancel",
        type: "TouchEvent",
        docs: [],
    }),
    onTouchEnd: event({
        listener: "touchend",
        on: "ontouchend",
        type: "TouchEvent",
        docs: [],
    }),
    onTouchMove: event({
        listener: "touchmove",
        on: "ontouchmove",
        type: "TouchEvent",
        docs: [],
    }),
    onTouchStart: event({
        listener: "touchstart",
        on: "ontouchstart",
        type: "TouchEvent",
        docs: [],
    }),
    /**
     * Recursive Window events
     */
    onClickGlobal: handler({
        store: "onclickglobal",
        type: "PointerEvent",
        docs: [],
    }),
    onResizeGlobal: handler({
        store: "onresizeglobal",
        type: "Event",
        docs: [],
    }),
    onKeyUpGlobal: handler({
        store: "onkeyupglobal",
        type: "KeyboardEvent",
        docs: [],
    }),
    onKeyDownGlobal: handler({
        store: "onkeydownglobal",
        type: "KeyboardEvent",
        docs: [],
    }),
    onContextMenuGlobal: handler({
        store: "oncontextmenuglobal",
        type: "PointerEvent",
        docs: [],
    }),
    onScrollGlobal: handler({
        store: "onscrollglobal",
        type: "Event",
        docs: [],
    }),
    onBeforeUnloadGlobal: handler({
        store: "onbeforeunloadglobal",
        type: "BeforeUnloadEvent",
        docs: [],
    }),
};
