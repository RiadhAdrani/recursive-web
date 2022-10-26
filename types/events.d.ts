/**
 *  ██████╗ ███████╗███╗   ██╗███████╗██████╗  █████╗ ████████╗███████╗██████╗
 * ██╔════╝ ██╔════╝████╗  ██║██╔════╝██╔══██╗██╔══██╗╚══██╔══╝██╔════╝██╔══██╗
 * ██║  ███╗█████╗  ██╔██╗ ██║█████╗  ██████╔╝███████║   ██║   █████╗  ██║  ██║
 * ██║   ██║██╔══╝  ██║╚██╗██║██╔══╝  ██╔══██╗██╔══██║   ██║   ██╔══╝  ██║  ██║
 * ╚██████╔╝███████╗██║ ╚████║███████╗██║  ██║██║  ██║   ██║   ███████╗██████╔╝
 *  ╚═════╝ ╚══════╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═════╝
 * ------------ Do not delete or modify the content of this file -------------
 */
import { EventDeclaration } from "../packages/dom/event";

/**
 * ## Events
 */
export interface Events<E = HTMLElement> {
    /**
     * ## onAbort
     * The abort event is fired when the resource was not fully loaded, but not as the result of an error.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/abort_event}
     */
    onAbort: EventDeclaration<Event, E>;
    /**
     * ## onAnimationEnd
     * The animationend event is fired when a CSS Animation has completed. If the animation aborts before reaching completion, such as if the element is removed from the DOM or the animation is removed from the element, the animationend event is not fired.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/animationend_event}
     */
    onAnimationEnd: EventDeclaration<AnimationEvent, E>;
    /**
     * ## onAnimationIteration
     * The animationiteration event is fired when an iteration of a CSS Animation ends, and another one begins. This event does not occur at the same time as the animationend event, and therefore does not occur for animations with an animation-iteration-count of one.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/animationiteration_event}
     */
    onAnimationIteration: EventDeclaration<AnimationEvent, E>;
    /**
     * ## onAnimationStart
     * The animationstart event is fired when a CSS Animation has started. If there is an animation-delay, this event will fire once the delay period has expired. A negative delay will cause the event to fire with an elapsedTime equal to the absolute value of the delay (and, correspondingly, the animation will begin playing at that time index into the sequence).
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/animationstart_event}
     */
    onAnimationStart: EventDeclaration<AnimationEvent, E>;
    /**
     * ## onBeforePrint
     * The beforeprint event is fired when the associated document is about to be printed or previewed for printing.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeprint_event}
     */
    onBeforePrint: EventDeclaration<Event, E>;
    /**
     * ## onBeforeUnload
     * The beforeunload event is fired when the window, the document and its resources are about to be unloaded. The document is still visible and the event is still cancelable at this point.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event}
     */
    onBeforeUnload: EventDeclaration<BeforeUnloadEvent, E>;
    /**
     * ## onBlur
     * The blur event fires when an element has lost focus.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/blur_event}
     */
    onBlur: EventDeclaration<FocusEvent, E>;
    /**
     * ## onCanPlay
     * The canplay event is fired when the user agent can play the media, but estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/canplay_event}
     */
    onCanPlay: EventDeclaration<Event, E>;
    /**
     * ## onCanPlayThrough
     * The canplaythrough event is fired when the user agent can play the media, and estimates that enough data has been loaded to play the media up to its end without having to stop for further buffering of content.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/canplaythrough_event}
     */
    onCanPlayThrough: EventDeclaration<Event, E>;
    /**
     * ## onChange
     * The change event is fired for ``<input>``, ``<select>``, and ``<textarea>`` elements when the user modifies the element's value. Unlike the input event, the change event is not necessarily fired for each alteration to an element's value.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event}
     */
    onChange: EventDeclaration<Event, E>;
    /**
     * ## onContextMenu
     * The contextmenu event fires when the user attempts to open a context menu. This event is typically triggered by clicking the right mouse button, or by pressing the context menu key.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/contextmenu_event}
     */
    onContextMenu: EventDeclaration<MouseEvent, E>;
    /**
     * ## onCopy
     * The copy event fires when the user initiates a copy action through the browser's user interface.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/copy_event}
     */
    onCopy: EventDeclaration<ClipboardEvent, E>;
    /**
     * ## onCut
     * The cut event is fired when the user has initiated a "cut" action through the browser's user interface.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/cut_event}
     */
    onCut: EventDeclaration<ClipboardEvent, E>;
    /**
     * ## onDurationChange
     * The durationchange event is fired when the duration attribute has been updated.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/durationchange_event}
     */
    onDurationChange: EventDeclaration<Event, E>;
    /**
     * ## onEnded
     * The ended event is fired when playback or streaming has stopped because the end of the media was reached or because no further data is available.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/ended_event}
     */
    onEnded: EventDeclaration<Event, E>;
    /**
     * ## onError
     * The error event is fired on a Window object when a resource failed to load or couldn't be used — for example if a script has an execution error.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/error_event}
     */
    onError: EventDeclaration<Event, E>;
    /**
     * ## onFocus
     * The focus event fires when an element has received focus. The main difference between this event and focusin is that focusin bubbles while focus does not.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event}
     */
    onFocus: EventDeclaration<FocusEvent, E>;
    /**
     * ## onFocusIn
     * The focusin event fires when an element is about to receive focus. The main difference between this event and focus is that focusin bubbles while focus does not.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/focusin_event}
     */
    onFocusIn: EventDeclaration<FocusEvent, E>;
    /**
     * ## onFocusOut
     * The focusout event fires when an element is about to lose focus. The main difference between this event and blur is that focusout bubbles while blur does not.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/focusout_event}
     */
    onFocusOut: EventDeclaration<FocusEvent, E>;
    /**
     * ## onFullScreenChange
     * The fullscreenchange event is fired immediately after the browser switches into or out of fullscreen mode.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/fullscreenchange_event}
     */
    onFullScreenChange: EventDeclaration<Event, E>;
    /**
     * ## onHashChange
     * The hashchange event is fired when the fragment identifier of the URL has changed (the part of the URL beginning with and following the # symbol).
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/hashchange_event}
     */
    onHashChange: EventDeclaration<HashChangeEvent, E>;
    /**
     * ## onInvalid
     * The invalid event fires when a submittable element has been checked for validity and doesn't satisfy its constraints.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/invalid_event}
     */
    onInvalid: EventDeclaration<Event, E>;
    /**
     * ## onLoad
     * The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images. This is in contrast to DOMContentLoaded, which is fired as soon as the page DOM has been loaded, without waiting for resources to finish loading.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event}
     */
    onLoad: EventDeclaration<Event, E>;
    /**
     * ## onLoadedData
     * The loadeddata event is fired when the frame at the current playback position of the media has finished loading; often the first frame.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/loadeddata_event}
     */
    onLoadedData: EventDeclaration<Event, E>;
    /**
     * ## onLoadedMetaData
     * The loadedmetadata event is fired when the metadata has been loaded.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/loadedmetadata_event}
     */
    onLoadedMetaData: EventDeclaration<Event, E>;
    /**
     * ## onLoadStart
     * The loadstart event is fired when the browser has started to load a resource.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/loadstart_event}
     */
    onLoadStart: EventDeclaration<Event, E>;
    /**
     * ## onMessage
     * The message event is fired on a Window object when the window receives a message, for example from a call to Window.postMessage() from another browsing context.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/message_event}
     */
    onMessage: EventDeclaration<Event, E>;
    /**
     * ## onOffline
     * The offline event of the Window interface is fired when the browser has lost access to the network and the value of Navigator.onLine switches to false.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/offline_event}
     */
    onOffline: EventDeclaration<Event, E>;
    /**
     * ## onOnline
     * The online event of the Window interface is fired when the browser has gained access to the network and the value of Navigator.onLine switches to true.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/online_event}
     */
    onOnline: EventDeclaration<Event, E>;
    /**
     * ## onPageHide
     * The pagehide event is sent to a Window when the browser hides the current page in the process of presenting a different page from the session's history.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/pagehide_event}
     */
    onPageHide: EventDeclaration<PageTransitionEvent, E>;
    /**
     * ## onPageShow
     * The pageshow event is sent to a Window when the browser displays the window's document due to navigation.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/pageshow_event}
     */
    onPageShow: EventDeclaration<PageTransitionEvent, E>;
    /**
     * ## onPaste
     * The paste event is fired when the user has initiated a "paste" action through the browser's user interface.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/paste_event}
     */
    onPaste: EventDeclaration<ClipboardEvent, E>;
    /**
     * ## onPause
     * The pause event is sent when a request to pause an activity is handled and the activity has entered its paused state, most commonly after the media has been paused through a call to the element's pause() method.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/pause_event}
     */
    onPause: EventDeclaration<Event, E>;
    /**
     * ## onPlay
     * The play event is fired when the paused property is changed from true to false, as a result of the play method, or the autoplay attribute.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play_event}
     */
    onPlay: EventDeclaration<Event, E>;
    /**
     * ## onPlaying
     * The playing event is fired after playback is first started, and whenever it is restarted. For example it is fired when playback resumes after having been paused or delayed due to lack of data.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/playing_event}
     */
    onPlaying: EventDeclaration<Event, E>;
    /**
     * ## onProgress
     * The progress event is fired periodically as the browser loads a resource.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/progress_event}
     */
    onProgress: EventDeclaration<Event, E>;
    /**
     * ## onRateChange
     * The ratechange event is fired when the playback rate has changed.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/ratechange_event}
     */
    onRateChange: EventDeclaration<Event, E>;
    /**
     * ## onResize
     * The resize event fires when the document view (window) has been resized.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event}
     */
    onResize: EventDeclaration<UIEvent, E>;
    /**
     * ## onReset
     * The reset event fires when a ``<form>`` is reset.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset_event}
     */
    onReset: EventDeclaration<Event, E>;
    /**
     * ## onScroll
     * The scroll event fires when the document view has been scrolled. For element scrolling, see Element: scroll event.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event}
     */
    onScroll: EventDeclaration<Event, E>;
    /**
     * ## onSearch
     */
    onSearch: EventDeclaration<Event, E>;
    /**
     * ## onSeeked
     * The search event is fired when a search is initiated using an ``<input>`` element of type="search".
     * @non-standard
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/search_event}
     */
    onSeeked: EventDeclaration<Event, E>;
    /**
     * ## onSeeking
     * The seeking event is fired when a seek operation starts, meaning the Boolean seeking attribute has changed to true and the media is seeking a new position.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/seeking_event}
     */
    onSeeking: EventDeclaration<Event, E>;
    /**
     * ## onSelect
     * The select event fires when some text has been selected.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select_event}
     */
    onSelect: EventDeclaration<Event, E>;
    /**
     * ## onSelectionChange
     * The selectionchange event of the Selection API is fired when the current Selection of a Document is changed.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/selectionchange_event}
     */
    onSelectionChange: EventDeclaration<Event, E>;
    /**
     * ## onShow
     * The show event is fired when a contextmenu event was fired on/bubbled to an element that has a contextmenu attribute.
     * @deprecated
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/show_event}
     */
    onShow: EventDeclaration<Event, E>;
    /**
     * ## onStalled
     * The stalled event is fired when the user agent is trying to fetch media data, but data is unexpectedly not forthcoming.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/stalled_event}
     */
    onStalled: EventDeclaration<Event, E>;
    /**
     * ## onStorage
     * The storage event of the Window interface fires when a storage area (localStorage) has been modified in the context of another document.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event}
     */
    onStorage: EventDeclaration<StorageEvent, E>;
    /**
     * ## onSubmit
     * The submit event fires when a ``<form>`` is submitted.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event}
     */
    onSubmit: EventDeclaration<SubmitEvent, E>;
    /**
     * ## onSuspend
     * The suspend event is fired when media data loading has been suspended.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/suspend_event}
     */
    onSuspend: EventDeclaration<Event, E>;
    /**
     * ## onTimeUpdate
     * The timeupdate event is fired when the time indicated by the currentTime attribute has been updated.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/timeupdate_event}
     */
    onTimeUpdate: EventDeclaration<Event, E>;
    /**
     * ## onToggle
     * The toggle event fires when the open/closed state of a ``<details>`` element is toggled.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLDetailsElement/toggle_event}
     */
    onToggle: EventDeclaration<Event, E>;
    /**
     * ## onTransitionEnd
     * The transitionend event is fired when a CSS transition has completed. In the case where a transition is removed before completion, such as if the transition-property is removed or display is set to none, then the event will not be generated.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/transitionend_event}
     */
    onTransitionEnd: EventDeclaration<TransitionEvent, E>;
    /**
     * ## onUnload
     * The unload event is fired when the document or a child resource is being unloaded.
     * @avoid
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/unload_event}
     */
    onUnload: EventDeclaration<Event, E>;
    /**
     * ## onVolumeChange
     * The volumechange event is fired when the volume has changed.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/volumechange_event}
     */
    onVolumeChange: EventDeclaration<Event, E>;
    /**
     * ## onWaiting
     * The waiting event is fired when playback has stopped because of a temporary lack of data.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/waiting_event}
     */
    onWaiting: EventDeclaration<Event, E>;
    /**
     * ## onWheel
     * The wheel event fires when the user rotates a wheel button on a pointing device (typically a mouse).
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event}
     */
    onWheel: EventDeclaration<WheelEvent, E>;
    /**
     * ## onInput
     * The input event fires when the value of an ``<input>``, ``<select>``, or ``<textarea>`` element has been changed.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event}
     */
    onInput: EventDeclaration<InputEvent, E>;
    /**
     * ## onDrag
     * The DragEvent interface is a DOM event that represents a drag and drop interaction. The user initiates a drag by placing a pointer device (such as a mouse) on the touch surface and then dragging the pointer to a new location (such as another DOM element). Applications are free to interpret a drag and drop interaction in an application-specific way.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DragEvent}
     */
    onDrag: EventDeclaration<DragEvent, E>;
    /**
     * ## onDragEnd
     * The dragend event is fired when a drag operation is being ended (by releasing a mouse button or hitting the escape key).
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragend_event}
     */
    onDragEnd: EventDeclaration<DragEvent, E>;
    /**
     * ## onDragEnter
     * The dragenter event is fired when a dragged element or text selection enters a valid drop target.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragenter_event}
     */
    onDragEnter: EventDeclaration<DragEvent, E>;
    /**
     * ## onDragLeave
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragleave_event
     * @see {@link The dragleave event is fired when a dragged element or text selection leaves a valid drop target.}
     */
    onDragLeave: EventDeclaration<DragEvent, E>;
    /**
     * ## onDragOver
     * The dragover event is fired when an element or text selection is being dragged over a valid drop target (every few hundred milliseconds).
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragover_event}
     */
    onDragOver: EventDeclaration<DragEvent, E>;
    /**
     * ## onDragStart
     * The dragstart event is fired when the user starts dragging an element or text selection.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragstart_event}
     */
    onDragStart: EventDeclaration<DragEvent, E>;
    /**
     * ## onDrop
     * The drop event is fired when an element or text selection is dropped on a valid drop target.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/drop_event}
     */
    onDrop: EventDeclaration<DragEvent, E>;
    /**
     * ## onKeyDown
     * The keydown event is fired when a key is pressed.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event}
     */
    onKeyDown: EventDeclaration<KeyboardEvent, E>;
    /**
     * ## onKeyPress
     * The keypress event is fired when a key that produces a character value is pressed down.
     * @deprecated
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/keypress_event}
     */
    onKeyPress: EventDeclaration<KeyboardEvent, E>;
    /**
     * ## onKeyUp
     * The keyup event is fired when a key is released.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/keyup_event}
     */
    onKeyUp: EventDeclaration<KeyboardEvent, E>;
    /**
     * ## onClick
     * An element receives a click event when a pointing device button (such as a mouse's primary mouse button) is both pressed and released while the pointer is located inside the element.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event}
     */
    onClick: EventDeclaration<MouseEvent, E>;
    /**
     * ## onDoubleClick
     * The dblclick event fires when a pointing device button (such as a mouse's primary button) is double-clicked; that is, when it's rapidly clicked twice on a single element within a very short span of time.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event}
     */
    onDoubleClick: EventDeclaration<MouseEvent, E>;
    /**
     * ## onMouseDown
     * The mousedown event is fired at an Element when a pointing device button is pressed while the pointer is inside the element.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/mousedown_event}
     */
    onMouseDown: EventDeclaration<MouseEvent, E>;
    /**
     * ## onMouseEnter
     * The mouseenter event is fired at an Element when a pointing device (usually a mouse) is initially moved so that its hotspot is within the element at which the event was fired.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event}
     */
    onMouseEnter: EventDeclaration<MouseEvent, E>;
    /**
     * ## onMouseLeave
     * The mouseleave event is fired at an Element when the cursor of a pointing device (usually a mouse) is moved out of it.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event}
     */
    onMouseLeave: EventDeclaration<MouseEvent, E>;
    /**
     * ## onMouseMove
     * The mousemove event is fired at an element when a pointing device (usually a mouse) is moved while the cursor's hotspot is inside it.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event}
     */
    onMouseMove: EventDeclaration<MouseEvent, E>;
    /**
     * ## onMouseOver
     * The mouseover event is fired at an Element when a pointing device (such as a mouse or trackpad) is used to move the cursor onto the element or one of its child elements.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event}
     */
    onMouseOver: EventDeclaration<MouseEvent, E>;
    /**
     * ## onMouseOut
     * The mouseout event is fired at an Element when a pointing device (usually a mouse) is used to move the cursor so that it is no longer contained within the element or one of its children.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseout_event}
     */
    onMouseOut: EventDeclaration<MouseEvent, E>;
    /**
     * ## onMouseUp
     * The mouseup event is fired at an Element when a button on a pointing device (such as a mouse or trackpad) is released while the pointer is located inside it.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseup_event}
     */
    onMouseUp: EventDeclaration<MouseEvent, E>;
    /**
     * ## onPointerOver
     * The pointerover event is fired when a pointing device is moved into an element's hit test boundaries.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerover_event}
     */
    onPointerOver: EventDeclaration<PointerEvent, E>;
    /**
     * ## onPointerEnter
     * The pointerenter event fires when a pointing device is moved into the hit test boundaries of an element or one of its descendants, including as a result of a pointerdown event from a device that does not support hover (see pointerdown).
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerenter_event}
     */
    onPointerEnter: EventDeclaration<PointerEvent, E>;
    /**
     * ## onPointerDown
     * The pointerdown event is fired when a pointer becomes active. For mouse, it is fired when the device transitions from no buttons pressed to at least one button pressed. For touch, it is fired when physical contact is made with the digitizer. For pen, it is fired when the stylus makes physical contact with the digitizer.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerdown_event}
     */
    onPointerDown: EventDeclaration<PointerEvent, E>;
    /**
     * ## onPointerMove
     * The pointermove event is fired when a pointer changes coordinates, and the pointer has not been canceled by a browser touch-action.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/pointermove_event}
     */
    onPointerMove: EventDeclaration<PointerEvent, E>;
    /**
     * ## onPointerUp
     * The pointerup event is fired when a pointer is no longer active.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerup_event}
     */
    onPointerUp: EventDeclaration<PointerEvent, E>;
    /**
     * ## onPointerCancel
     * The pointercancel event is fired when the browser determines that there are unlikely to be any more pointer events, or if after the pointerdown event is fired, the pointer is then used to manipulate the viewport by panning, zooming, or scrolling.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/pointercancel_event}
     */
    onPointerCancel: EventDeclaration<PointerEvent, E>;
    /**
     * ## onPointerOut
     * The pointerout event is fired for several reasons including: pointing device is moved out of the hit test boundaries of an element; firing the pointerup event for a device that does not support hover (see pointerup); after firing the pointercancel event (see pointercancel); when a pen stylus leaves the hover range detectable by the digitizer.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerout_event}
     */
    onPointerOut: EventDeclaration<PointerEvent, E>;
    /**
     * ## onPointerLeave
     * The pointerleave event is fired when a pointing device is moved out of the hit test boundaries of an element. For pen devices, this event is fired when the stylus leaves the hover range detectable by the digitizer.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerleave_event}
     */
    onPointerLeave: EventDeclaration<PointerEvent, E>;
    /**
     * ## onGotPointerCapture
     * The gotpointercapture event is fired when an element captures a pointer using setPointerCapture().
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/gotpointercapture_event}
     */
    onGotPointerCapture: EventDeclaration<PointerEvent, E>;
    /**
     * ## onLostPointerCapture
     * The lostpointercapture event is fired when a captured pointer is released.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/lostpointercapture_event}
     */
    onLostPointerCapture: EventDeclaration<PointerEvent, E>;
    /**
     * ## onTouchCancel
     * The touchcancel event is fired when one or more touch points have been disrupted in an implementation-specific manner (for example, too many touch points are created).
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/touchcancel_event}
     */
    onTouchCancel: EventDeclaration<TouchEvent, E>;
    /**
     * ## onTouchEnd
     * The touchend event fires when one or more touch points are removed from the touch surface.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/touchend_event}
     */
    onTouchEnd: EventDeclaration<TouchEvent, E>;
    /**
     * ## onTouchMove
     * The touchcancel event is fired when one or more touch points have been disrupted in an implementation-specific manner (for example, too many touch points are created).
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/touchcancel_event}
     */
    onTouchMove: EventDeclaration<TouchEvent, E>;
    /**
     * ## onTouchStart
     * The touchstart event is fired when one or more touch points are placed on the touch surface.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/touchstart_event}
     */
    onTouchStart: EventDeclaration<TouchEvent, E>;
    /**
     * ## onClickGlobal
     * The `onClickGlobal` event is fired when another element is clicked in the DOM.
     * @recursive-event
     */
    onClickGlobal: EventDeclaration<PointerEvent, E>;
    /**
     * ## onResizeGlobal
     * The `onResizeGlobal` event is fired when the window is being resized.
     * @recursive-event
     */
    onResizeGlobal: EventDeclaration<Event, E>;
    /**
     * ## onKeyUpGlobal
     * The `onKeyUpGlobal` event is fired when a key is released.
     * @recursive-event
     */
    onKeyUpGlobal: EventDeclaration<KeyboardEvent, E>;
    /**
     * ## onKeyDownGlobal
     * The `onKeyUpGlobal` event is fired when a key is being pressed.
     * @recursive-event
     */
    onKeyDownGlobal: EventDeclaration<KeyboardEvent, E>;
    /**
     * ## onContextMenuGlobal
     * The `onContextMenuGlobal` event is fired when another element is being right-clicked.
     * @recursive-event
     */
    onContextMenuGlobal: EventDeclaration<PointerEvent, E>;
    /**
     * ## onScrollGlobal
     * The `onScrollGlobal` event is fired when the window is being scrolled into.
     * @recursive-event
     */
    onScrollGlobal: EventDeclaration<Event, E>;
    /**
     * ## onBeforeUnloadGlobal
     * The `onBeforeUnloadGlobal` event is fired when the user attempt to leave the page.
     * @recursive-event
     */
    onBeforeUnloadGlobal: EventDeclaration<BeforeUnloadEvent, E>;
    /**
     * ## onMouseUpGlobal
     * The `onMouseUpGlobal` event is fired when the user release the pointing device.
     * @recursive-event
     */
    onMouseUpGlobal: EventDeclaration<MouseEvent, E>;
    /**
     * ## onMouseDownGlobal
     * The `onMouseDownGlobal` event is fired when the user press the pointing device's button.
     * @recursive-event
     */
    onMouseDownGlobal: EventDeclaration<MouseEvent, E>;
    /**
     * ## onMouseMoveGlobal
     * The `onMouseMoveGlobal` event is fired when the user moves the pointing device on the screen.
     * @recursive-event
     */
    onMouseMoveGlobal: EventDeclaration<MouseEvent, E>;
}
