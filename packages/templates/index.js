/**
 * Event types
 */
const EventTypes = {
    Event: "Event",
    AnimationEvent: "AnimationEvent",
    BeforeUnloadEvent: "BeforeUnloadEvent",
    FocusEvent: "FocusEvent",
    MouseEvent: "MouseEvent",
    ClipboardEvent: "ClipboardEvent",
    HashChangeEvent: "HashChangeEvent",
    PageTransitionEvent: "PageTransitionEvent",
    UIEvent: "UIEvent",
    StorageEvent: "StorageEvent",
    SubmitEvent: "SubmitEvent",
    TransitionEvent: "TransitionEvent",
    WheelEvent: "WheelEvent",
    InputEvent: "InputEvent",
    DragEvent: "DragEvent",
    KeyboardEvent: "KeyboardEvent",
    MouseEvent: "MouseEvent",
    PointerEvent: "PointerEvent",
    TouchEvent: "TouchEvent",
};

/**
 * Create a template for a DOM attribute.
 * @param {import(".").AttributeTemplate} params parameters
 */
function attribute({
    name,
    toggleable = false,
    values = [],
    els = [],
    docs = [],
    links = [],
    decorators = [],
}) {
    return { name, toggleable, values, els, docs, links, decorators };
}

/**
 * Create a template for a DOM event.
 * @param {import(".").EventTemplate} params parameters
 */
function event({
    listener,
    on,
    type = EventTypes.Event,
    docs = [],
    handler,
    links = [],
    decorators = [],
}) {
    return { listener, on, type, docs, handler, links, decorators };
}

/**
 * @param {import(".").ComponentTemplate} params
 */
function component({
    tag,
    props = {},
    docs = [],
    handler,
    childless = false,
    links = [],
    decorators = [],
}) {
    return { tag, props, docs, handler, childless, links, decorators };
}

/**
 * @param {import(".").CssPropertyTemplate} params
 */
function property({
    css,
    values = [],
    type = "string",
    support = [],
    docs = [],
    links = [],
    decorators = [],
}) {
    return { css, values, type, support, docs, links, decorators };
}

/**
 * @param {import(".").CssSelectorTemplate} params
 */
function selector({
    css,
    docs = [],
    support = [],
    links = [],
    decorators = [],
}) {
    return { css, docs, support, links, decorators };
}

module.exports = {
    attribute,
    event,
    component,
    property,
    selector,
    EventTypes,
};