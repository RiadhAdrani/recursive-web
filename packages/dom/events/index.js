const { event, EventTypes } = require("../../templates");
const { handler } = require("../../window");

/**
 * @credit MDN (2022) - https://developer.mozilla.org/en-US/docs/Web/Events
 */
module.exports = {
    onAbort: event({
        listener: "abort",
        on: "onabort",
        type: EventTypes.Event,
        docs: [
            "The abort event is fired when the resource was not fully loaded, but not as the result of an error.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/abort_event",
        ],
    }),
    onAnimationEnd: event({
        listener: "animationend",
        on: "onanimationend",
        type: EventTypes.AnimationEvent,
        docs: [
            "The animationend event is fired when a CSS Animation has completed. If the animation aborts before reaching completion, such as if the element is removed from the DOM or the animation is removed from the element, the animationend event is not fired.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Element/animationend_event",
        ],
    }),
    onAnimationIteration: event({
        listener: "animationiteration",
        on: "onanimationiteration",
        type: EventTypes.AnimationEvent,
        docs: [
            "The animationiteration event is fired when an iteration of a CSS Animation ends, and another one begins. This event does not occur at the same time as the animationend event, and therefore does not occur for animations with an animation-iteration-count of one.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Element/animationiteration_event",
        ],
    }),
    onAnimationStart: event({
        listener: "animationstart",
        on: "onanimationstart",
        type: EventTypes.AnimationEvent,
        docs: [
            "The animationstart event is fired when a CSS Animation has started. If there is an animation-delay, this event will fire once the delay period has expired. A negative delay will cause the event to fire with an elapsedTime equal to the absolute value of the delay (and, correspondingly, the animation will begin playing at that time index into the sequence).",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Element/animationstart_event",
        ],
    }),
    onAnimationEnd: event({
        listener: "animationend",
        on: "onanimationend",
        type: EventTypes.AnimationEvent,
        docs: [
            "The animationend event is fired when a CSS Animation has completed. If the animation aborts before reaching completion, such as if the element is removed from the DOM or the animation is removed from the element, the animationend event is not fired.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Element/animationend_event",
        ],
    }),
    onBeforePrint: event({
        listener: "beforeprint",
        on: "onbeforeprint",
        type: EventTypes.Event,
        docs: [
            "The beforeprint event is fired when the associated document is about to be printed or previewed for printing.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeprint_event",
        ],
    }),
    onBeforeUnload: event({
        listener: "beforeunload",
        on: "onberforeunload",
        type: EventTypes.BeforeUnloadEvent,
        docs: [
            "The beforeunload event is fired when the window, the document and its resources are about to be unloaded. The document is still visible and the event is still cancelable at this point.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event",
        ],
    }),
    onBlur: event({
        listener: "blur",
        on: "onblur",
        type: EventTypes.FocusEvent,
        docs: ["The blur event fires when an element has lost focus."],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Window/blur_event",
        ],
    }),
    onCanPlay: event({
        listener: "canplay",
        on: "oncanplay",
        type: EventTypes.Event,
        docs: [
            "The canplay event is fired when the user agent can play the media, but estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/canplay_event",
        ],
    }),
    onCanPlayThrough: event({
        listener: "canplaythrough",
        on: "oncanplaythroug",
        type: EventTypes.Event,
        docs: [
            "The canplaythrough event is fired when the user agent can play the media, and estimates that enough data has been loaded to play the media up to its end without having to stop for further buffering of content.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/canplaythrough_event",
        ],
    }),
    onChange: event({
        listener: "change",
        on: "onchange",
        type: EventTypes.Event,
        docs: [
            "The change event is fired for ``<input>``, ``<select>``, and ``<textarea>`` elements when the user modifies the element's value. Unlike the input event, the change event is not necessarily fired for each alteration to an element's value.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event",
        ],
    }),
    onContextMenu: event({
        listener: "contextmenu",
        on: "oncontextmenu",
        type: EventTypes.MouseEvent,
        docs: [
            "The contextmenu event fires when the user attempts to open a context menu. This event is typically triggered by clicking the right mouse button, or by pressing the context menu key.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Element/contextmenu_event",
        ],
    }),
    onCopy: event({
        listener: "copy",
        on: "oncopy",
        type: EventTypes.ClipboardEvent,
        docs: [
            "The copy event fires when the user initiates a copy action through the browser's user interface.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Element/copy_event",
        ],
    }),
    onCut: event({
        listener: "cut",
        on: "oncut",
        type: EventTypes.ClipboardEvent,
        docs: [
            `The cut event is fired when the user has initiated a "cut" action through the browser's user interface.`,
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Element/cut_event",
        ],
    }),
    onDurationChange: event({
        listener: "durationchange",
        on: "ondurationchange",
        type: EventTypes.Event,
        docs: [
            "The durationchange event is fired when the duration attribute has been updated.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/durationchange_event",
        ],
    }),
    onEnded: event({
        listener: "ended",
        on: "onended",
        docs: [
            "The ended event is fired when playback or streaming has stopped because the end of the media was reached or because no further data is available.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/ended_event",
        ],
    }),
    onError: event({
        listener: "error",
        on: "onerror",
        docs: [
            "The error event is fired on a Window object when a resource failed to load or couldn't be used — for example if a script has an execution error.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Window/error_event",
        ],
    }),
    onFocus: event({
        listener: "focus",
        on: "onfocus",
        type: EventTypes.FocusEvent,
        docs: [
            "The focus event fires when an element has received focus. The main difference between this event and focusin is that focusin bubbles while focus does not.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event",
        ],
    }),
    onFocusIn: event({
        listener: "focusin",
        on: "onfocusin",
        type: EventTypes.FocusEvent,
        docs: [
            "The focusin event fires when an element is about to receive focus. The main difference between this event and focus is that focusin bubbles while focus does not.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Element/focusin_event",
        ],
    }),
    onFocusOut: event({
        listener: "focusout",
        on: "onfocusout",
        type: EventTypes.FocusEvent,
        docs: [
            "The focusout event fires when an element is about to lose focus. The main difference between this event and blur is that focusout bubbles while blur does not.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Element/focusout_event",
        ],
    }),
    onFullScreenChange: event({
        listener: "fullscreenchange",
        on: "onfullscreenchange",
        docs: [
            "The fullscreenchange event is fired immediately after the browser switches into or out of fullscreen mode.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Document/fullscreenchange_event",
        ],
    }),
    onHashChange: event({
        listener: "hashchange",
        on: "onhashchange",
        type: EventTypes.HashChangeEvent,
        docs: [
            "The hashchange event is fired when the fragment identifier of the URL has changed (the part of the URL beginning with and following the # symbol).",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Window/hashchange_event",
        ],
    }),
    onInvalid: event({
        listener: "invalid",
        on: "oninvalid",
        docs: [
            "The invalid event fires when a submittable element has been checked for validity and doesn't satisfy its constraints.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/invalid_event",
        ],
    }),
    onLoad: event({
        listener: "load",
        on: "onload",
        docs: [
            "The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images. This is in contrast to DOMContentLoaded, which is fired as soon as the page DOM has been loaded, without waiting for resources to finish loading.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event",
        ],
    }),
    onLoadedData: event({
        listener: "loadeddata",
        on: "onloadeddata",
        docs: [
            "The loadeddata event is fired when the frame at the current playback position of the media has finished loading; often the first frame.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/loadeddata_event",
        ],
    }),
    onLoadedMetaData: event({
        listener: "loadedmetadata",
        on: "onloadedmetadata",
        docs: [
            "The loadedmetadata event is fired when the metadata has been loaded.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/loadedmetadata_event",
        ],
    }),
    onLoadStart: event({
        listener: "loadstart",
        on: "onloadstart",
        docs: [
            "The loadstart event is fired when the browser has started to load a resource.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/loadstart_event",
        ],
    }),
    onMessage: event({
        listener: "message",
        on: "onmessage",
        docs: [
            "The message event is fired on a Window object when the window receives a message, for example from a call to Window.postMessage() from another browsing context.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Window/message_event",
        ],
    }),
    onOffline: event({
        listener: "offline",
        on: "ononffline",
        docs: [
            "The offline event of the Window interface is fired when the browser has lost access to the network and the value of Navigator.onLine switches to false.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Window/offline_event",
        ],
    }),
    onOnline: event({
        listener: "online",
        on: "ononline",
        docs: [
            "The online event of the Window interface is fired when the browser has gained access to the network and the value of Navigator.onLine switches to true.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Window/online_event",
        ],
    }),
    onPageHide: event({
        listener: "pagehide",
        on: "onpagehide",
        type: EventTypes.PageTransitionEvent,
        docs: [
            "The pagehide event is sent to a Window when the browser hides the current page in the process of presenting a different page from the session's history.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Window/pagehide_event",
        ],
    }),
    onPageShow: event({
        listener: "pageshow",
        on: "onpageshow",
        type: EventTypes.PageTransitionEvent,
        docs: [
            "The pageshow event is sent to a Window when the browser displays the window's document due to navigation.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Window/pageshow_event",
        ],
    }),
    onPaste: event({
        listener: "paste",
        on: "onpaste",
        type: EventTypes.ClipboardEvent,
        docs: [
            `The paste event is fired when the user has initiated a "paste" action through the browser's user interface.`,
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Element/paste_event",
        ],
    }),
    onPause: event({
        listener: "pause",
        on: "onpause",
        docs: [
            "The pause event is sent when a request to pause an activity is handled and the activity has entered its paused state, most commonly after the media has been paused through a call to the element's pause() method.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/pause_event",
        ],
    }),
    onPlay: event({
        listener: "play",
        on: "onplay",
        docs: [
            "The play event is fired when the paused property is changed from true to false, as a result of the play method, or the autoplay attribute.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play_event",
        ],
    }),
    onPlaying: event({
        listener: "playing",
        on: "onplaying",
        docs: [
            "The playing event is fired after playback is first started, and whenever it is restarted. For example it is fired when playback resumes after having been paused or delayed due to lack of data.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/playing_event",
        ],
    }),
    onProgress: event({
        listener: "progress",
        on: "onprogress",
        docs: [
            "The progress event is fired periodically as the browser loads a resource.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/progress_event",
        ],
    }),
    onRateChange: event({
        listener: "ratechange",
        on: "onratechange",
        docs: [
            "The ratechange event is fired when the playback rate has changed.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/ratechange_event",
        ],
    }),
    onResize: event({
        listener: "resize",
        on: "onresize",
        type: EventTypes.UIEvent,
        docs: [
            "The resize event fires when the document view (window) has been resized.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event",
        ],
    }),
    onReset: event({
        listener: "reset",
        on: "onreset",
        docs: ["The reset event fires when a ``<form>`` is reset."],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset_event",
        ],
    }),
    onScroll: event({
        listener: "scroll",
        on: "onscroll",
        docs: [
            "The scroll event fires when the document view has been scrolled. For element scrolling, see Element: scroll event.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event",
        ],
    }),
    onSearch: event({
        listener: "search",
        on: "onsearch",

        docs: [],
        links: [],
    }),
    onSeeked: event({
        listener: "seeked",
        on: "onseeked",
        docs: [
            'The search event is fired when a search is initiated using an ``<input>`` element of type="search".',
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/search_event",
        ],
        decorators: ["non-standard"],
    }),
    onSeeking: event({
        listener: "seeking",
        on: "onseeking",
        docs: [
            "The seeking event is fired when a seek operation starts, meaning the Boolean seeking attribute has changed to true and the media is seeking a new position.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/seeking_event",
        ],
    }),
    onSelect: event({
        listener: "select",
        on: "onselect",
        docs: ["The select event fires when some text has been selected."],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select_event",
        ],
    }),
    onSelectionChange: event({
        listener: "selectionchange",
        on: "onselectionchange",
        docs: [
            "The selectionchange event of the Selection API is fired when the current Selection of a Document is changed.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Document/selectionchange_event",
        ],
    }),
    onShow: event({
        listener: "show",
        on: "onshow",
        decorators: ["deprecated"],
        docs: [
            "The show event is fired when a contextmenu event was fired on/bubbled to an element that has a contextmenu attribute.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Element/show_event",
        ],
    }),
    onStalled: event({
        listener: "stalled",
        on: "onstalled",
        docs: [
            "The stalled event is fired when the user agent is trying to fetch media data, but data is unexpectedly not forthcoming.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/stalled_event",
        ],
    }),
    onStorage: event({
        listener: "storage",
        on: "onstorage",
        type: EventTypes.StorageEvent,
        docs: [
            "The storage event of the Window interface fires when a storage area (localStorage) has been modified in the context of another document.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event",
        ],
    }),
    onSubmit: event({
        listener: "submit",
        on: "onsubmit",
        type: EventTypes.SubmitEvent,
        docs: ["The submit event fires when a ``<form>`` is submitted."],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event",
        ],
    }),
    onSuspend: event({
        listener: "suspend",
        on: "onsuspend",
        docs: [
            "The suspend event is fired when media data loading has been suspended.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/suspend_event",
        ],
    }),
    onTimeUpdate: event({
        listener: "timeupdate",
        on: "ontimeupdate",
        docs: [
            "The timeupdate event is fired when the time indicated by the currentTime attribute has been updated.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/timeupdate_event",
        ],
    }),
    onToggle: event({
        listener: "toggle",
        on: "ontoggle",
        docs: [
            "The toggle event fires when the open/closed state of a ``<details>`` element is toggled.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/HTMLDetailsElement/toggle_event",
        ],
    }),
    onTransitionEnd: event({
        listener: "transitionend",
        on: "ontransitionend",
        type: EventTypes.TransitionEvent,
        docs: [
            "The transitionend event is fired when a CSS transition has completed. In the case where a transition is removed before completion, such as if the transition-property is removed or display is set to none, then the event will not be generated.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Element/transitionend_event",
        ],
    }),
    onUnload: event({
        listener: "unload",
        on: "onunload",
        decorators: ["avoid"],
        docs: [
            "The unload event is fired when the document or a child resource is being unloaded.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Window/unload_event",
        ],
    }),
    onVolumeChange: event({
        listener: "volumnechange",
        on: "onvolumechange",
        docs: ["The volumechange event is fired when the volume has changed."],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/volumechange_event",
        ],
    }),
    onWaiting: event({
        listener: "waiting",
        on: "onwaiting",
        docs: [
            "The waiting event is fired when playback has stopped because of a temporary lack of data.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/waiting_event",
        ],
    }),
    onWheel: event({
        listener: "wheel",
        on: "onwheel",
        type: EventTypes.WheelEvent,
        docs: [
            "The wheel event fires when the user rotates a wheel button on a pointing device (typically a mouse).",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event",
        ],
    }),
    /**
     * Input Events
     */
    onInput: event({
        listener: "input",
        on: "oninput",
        type: EventTypes.InputEvent,
        docs: [
            "The input event fires when the value of an ``<input>``, ``<select>``, or ``<textarea>`` element has been changed.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event",
        ],
    }),

    /**
     * Drag Events
     */
    onDrag: event({
        listener: "drag",
        on: "ondrag",
        type: EventTypes.DragEvent,
        docs: [
            "The DragEvent interface is a DOM event that represents a drag and drop interaction. The user initiates a drag by placing a pointer device (such as a mouse) on the touch surface and then dragging the pointer to a new location (such as another DOM element). Applications are free to interpret a drag and drop interaction in an application-specific way.",
        ],
        links: ["https://developer.mozilla.org/en-US/docs/Web/API/DragEvent"],
    }),
    onDragEnd: event({
        listener: "dragend",
        on: "ondragend",
        type: EventTypes.DragEvent,
        docs: [
            "The dragend event is fired when a drag operation is being ended (by releasing a mouse button or hitting the escape key).",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragend_event",
        ],
    }),
    onDragEnter: event({
        listener: "dragenter",
        on: "ondragenter",
        type: EventTypes.DragEvent,
        docs: [
            "The dragenter event is fired when a dragged element or text selection enters a valid drop target.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragenter_event",
        ],
    }),
    onDragLeave: event({
        listener: "dragleave",
        on: "ondragleave",
        type: EventTypes.DragEvent,
        docs: [
            "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragleave_event",
        ],
        links: [
            "The dragleave event is fired when a dragged element or text selection leaves a valid drop target.",
        ],
    }),
    onDragOver: event({
        listener: "dragover",
        on: "ondragover",
        type: EventTypes.DragEvent,
        docs: [
            "The dragover event is fired when an element or text selection is being dragged over a valid drop target (every few hundred milliseconds).",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragover_event",
        ],
    }),
    onDragStart: event({
        listener: "dragstart",
        on: "ondragstart",
        type: EventTypes.DragEvent,
        docs: [
            "The dragstart event is fired when the user starts dragging an element or text selection.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragstart_event",
        ],
    }),
    onDrop: event({
        listener: "drop",
        on: "ondrop",
        type: EventTypes.DragEvent,
        docs: [
            "The drop event is fired when an element or text selection is dropped on a valid drop target.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/drop_event",
        ],
    }),
    /**
     * Keyboard Events
     */
    onKeyDown: event({
        listener: "keydown",
        on: "onkeydown",
        type: EventTypes.KeyboardEvent,
        docs: ["The keydown event is fired when a key is pressed."],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event",
        ],
    }),
    onKeyPress: event({
        listener: "keypress",
        on: "onkeypress",
        type: EventTypes.KeyboardEvent,
        docs: [
            "The keypress event is fired when a key that produces a character value is pressed down.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Element/keypress_event",
        ],
        decorators: ["deprecated"],
    }),
    onKeyUp: event({
        listener: "keyup",
        on: "onkeyup",
        type: EventTypes.KeyboardEvent,
        docs: ["The keyup event is fired when a key is released."],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Element/keyup_event",
        ],
    }),
    /**
     * Mouse Events
     */
    onClick: event({
        listener: "click",
        on: "onclick",
        type: EventTypes.MouseEvent,
        docs: [
            "An element receives a click event when a pointing device button (such as a mouse's primary mouse button) is both pressed and released while the pointer is located inside the element.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event",
        ],
    }),
    onDoubleClick: event({
        listener: "dblclick",
        on: "ondblclick",
        type: EventTypes.MouseEvent,
        docs: [
            "The dblclick event fires when a pointing device button (such as a mouse's primary button) is double-clicked; that is, when it's rapidly clicked twice on a single element within a very short span of time.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event",
        ],
    }),
    onMouseDown: event({
        listener: "mousedown",
        on: "onmousedown",
        type: EventTypes.MouseEvent,
        docs: [
            "The mousedown event is fired at an Element when a pointing device button is pressed while the pointer is inside the element.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Element/mousedown_event",
        ],
    }),
    onMouseEnter: event({
        listener: "mouseenter",
        on: "onmouseenter",
        type: EventTypes.MouseEvent,
        docs: [
            "The mouseenter event is fired at an Element when a pointing device (usually a mouse) is initially moved so that its hotspot is within the element at which the event was fired.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event",
        ],
    }),
    onMouseLeave: event({
        listener: "mouseleave",
        on: "onmouseleave",
        type: EventTypes.MouseEvent,
        docs: [
            "The mouseleave event is fired at an Element when the cursor of a pointing device (usually a mouse) is moved out of it.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event",
        ],
    }),
    onMouseMove: event({
        listener: "mousemove",
        on: "onmousemove",
        type: EventTypes.MouseEvent,
        docs: [
            "The mousemove event is fired at an element when a pointing device (usually a mouse) is moved while the cursor's hotspot is inside it.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event",
        ],
    }),
    onMouseOver: event({
        listener: "mouseover",
        on: "onmouseover",
        type: EventTypes.MouseEvent,
        docs: [
            "The mouseover event is fired at an Element when a pointing device (such as a mouse or trackpad) is used to move the cursor onto the element or one of its child elements.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event",
        ],
    }),
    onMouseOut: event({
        listener: "mouseout",
        on: "onmouseout",
        type: EventTypes.MouseEvent,
        docs: [
            "The mouseout event is fired at an Element when a pointing device (usually a mouse) is used to move the cursor so that it is no longer contained within the element or one of its children.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseout_event",
        ],
    }),
    onMouseUp: event({
        listener: "mouseup",
        on: "onmouseup",
        type: EventTypes.MouseEvent,
        docs: [
            "The mouseup event is fired at an Element when a button on a pointing device (such as a mouse or trackpad) is released while the pointer is located inside it.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseup_event",
        ],
    }),
    /**
     * Pointer events
     */
    onPointerOver: event({
        listener: "pointerover",
        on: "onpointerover",
        type: EventTypes.PointerEvent,
        docs: [
            "The pointerover event is fired when a pointing device is moved into an element's hit test boundaries.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerover_event",
        ],
    }),
    onPointerEnter: event({
        listener: "pointerenter",
        on: "onpointerenter",
        type: EventTypes.PointerEvent,
        docs: [
            "The pointerenter event fires when a pointing device is moved into the hit test boundaries of an element or one of its descendants, including as a result of a pointerdown event from a device that does not support hover (see pointerdown).",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerenter_event",
        ],
    }),
    onPointerDown: event({
        listener: "pointerdown",
        on: "onpointerdown",
        type: EventTypes.PointerEvent,
        docs: [
            "The pointerdown event is fired when a pointer becomes active. For mouse, it is fired when the device transitions from no buttons pressed to at least one button pressed. For touch, it is fired when physical contact is made with the digitizer. For pen, it is fired when the stylus makes physical contact with the digitizer.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerdown_event",
        ],
    }),
    onPointerMove: event({
        listener: "pointermove",
        on: "onpointermove",
        type: EventTypes.PointerEvent,
        docs: [
            "The pointermove event is fired when a pointer changes coordinates, and the pointer has not been canceled by a browser touch-action.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Element/pointermove_event",
        ],
    }),
    onPointerUp: event({
        listener: "pointerup",
        on: "onpointerup",
        type: EventTypes.PointerEvent,
        docs: [
            "The pointerup event is fired when a pointer is no longer active.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerup_event",
        ],
    }),
    onPointerCancel: event({
        listener: "pointercancel",
        on: "onpointercancel",
        type: EventTypes.PointerEvent,
        docs: [
            "The pointercancel event is fired when the browser determines that there are unlikely to be any more pointer events, or if after the pointerdown event is fired, the pointer is then used to manipulate the viewport by panning, zooming, or scrolling.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Element/pointercancel_event",
        ],
    }),
    onPointerOut: event({
        listener: "pointerout",
        on: "onpointerout",
        type: EventTypes.PointerEvent,
        docs: [
            "The pointerout event is fired for several reasons including: pointing device is moved out of the hit test boundaries of an element; firing the pointerup event for a device that does not support hover (see pointerup); after firing the pointercancel event (see pointercancel); when a pen stylus leaves the hover range detectable by the digitizer.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerout_event",
        ],
    }),
    onPointerLeave: event({
        listener: "pointerleave",
        on: "onpointerleave",
        type: EventTypes.PointerEvent,
        docs: [
            "The pointerleave event is fired when a pointing device is moved out of the hit test boundaries of an element. For pen devices, this event is fired when the stylus leaves the hover range detectable by the digitizer.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerleave_event",
        ],
    }),
    onGotPointerCapture: event({
        listener: "gotpointercapture",
        on: "ongotpointercapture",
        type: EventTypes.PointerEvent,
        docs: [
            "The gotpointercapture event is fired when an element captures a pointer using setPointerCapture().",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Element/gotpointercapture_event",
        ],
    }),
    onLostPointerCapture: event({
        listener: "lostpointercapture",
        on: "onlostpointercapture",
        type: EventTypes.PointerEvent,
        docs: [
            "The lostpointercapture event is fired when a captured pointer is released.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Element/lostpointercapture_event",
        ],
    }),
    /**
     * Touch events
     */
    onTouchCancel: event({
        listener: "touchcancel",
        on: "ontouchcancel",
        type: EventTypes.TouchEvent,
        docs: [
            "The touchcancel event is fired when one or more touch points have been disrupted in an implementation-specific manner (for example, too many touch points are created).",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Element/touchcancel_event",
        ],
    }),
    onTouchEnd: event({
        listener: "touchend",
        on: "ontouchend",
        type: EventTypes.TouchEvent,
        docs: [
            "The touchend event fires when one or more touch points are removed from the touch surface.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Element/touchend_event",
        ],
    }),
    onTouchMove: event({
        listener: "touchmove",
        on: "ontouchmove",
        type: EventTypes.TouchEvent,
        docs: [
            "The touchcancel event is fired when one or more touch points have been disrupted in an implementation-specific manner (for example, too many touch points are created).",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Element/touchcancel_event",
        ],
    }),
    onTouchStart: event({
        listener: "touchstart",
        on: "ontouchstart",
        type: EventTypes.TouchEvent,
        docs: [
            "The touchstart event is fired when one or more touch points are placed on the touch surface.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/API/Element/touchstart_event",
        ],
    }),
    /**
     * Recursive Window events
     */
    onClickGlobal: handler({
        store: "onclickglobal",
        type: EventTypes.PointerEvent,
        docs: [
            "The `onClickGlobal` event is fired when another element is clicked in the DOM.",
        ],
        decorators: ["recursive-event"],
    }),
    onResizeGlobal: handler({
        store: "onresizeglobal",
        docs: [
            "The `onResizeGlobal` event is fired when the window is being resized.",
        ],
        decorators: ["recursive-event"],
    }),
    onKeyUpGlobal: handler({
        store: "onkeyupglobal",
        type: EventTypes.KeyboardEvent,
        docs: ["The `onKeyUpGlobal` event is fired when a key is released."],
        decorators: ["recursive-event"],
    }),
    onKeyDownGlobal: handler({
        store: "onkeydownglobal",
        type: EventTypes.KeyboardEvent,
        docs: [
            "The `onKeyUpGlobal` event is fired when a key is being pressed.",
        ],
        decorators: ["recursive-event"],
    }),
    onContextMenuGlobal: handler({
        store: "oncontextmenuglobal",
        type: EventTypes.PointerEvent,
        docs: [
            "The `onContextMenuGlobal` event is fired when another element is being right-clicked.",
        ],
        decorators: ["recursive-event"],
    }),
    onScrollGlobal: handler({
        store: "onscrollglobal",
        docs: [
            "The `onScrollGlobal` event is fired when the window is being scrolled into.",
        ],
        decorators: ["recursive-event"],
    }),
    onBeforeUnloadGlobal: handler({
        store: "onbeforeunloadglobal",
        type: "BeforeUnloadEvent",
        docs: [
            "The `onBeforeUnloadGlobal` event is fired when the user attempt to leave the page.",
        ],
        decorators: ["recursive-event"],
    }),
};
