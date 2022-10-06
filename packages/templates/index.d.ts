/**
 * Event Types
 */
export interface EventTypes {
    Event: string;
    AnimationEvent: string;
    BeforeUnloadEvent: string;
    FocusEvent: string;
    MouseEvent: string;
    ClipboardEvent: string;
    HashChangeEvent: string;
    PageTransitionEvent: string;
    UIEvent: string;
    StorageEvent: string;
    SubmitEvent: string;
    TransitionEvent: string;
    WheelEvent: string;
    InputEvent: string;
    DragEvent: string;
    KeyboardEvent: string;
    PointerEvent: string;
    TouchEvent: string;
}

export interface Template {
    /**
     * define jsDocs description.
     */
    docs: Array<string>;
    /**
     * define jsDocs links with `@see`.
     */
    links: Array<string>;
    /**
     * define jsDocs decorators.
     */
    decorators: Array<string>;
}

export interface AttributeTemplate extends Template {
    /**
     * attribute identifier.
     */
    name: string;
    /**
     * set if an attribute is toggleable or not. A toggleable attribute accepts only ``boolean`` values.
     */
    toggleable: boolean;
    /**
     * possible values of the attribute. Set to a `string` if the value is a `type`.
     */
    values: Array<any> | string;
    /**
     * elements in which this attribute is usable. Set to `true` if it is a global attribute.
     */
    els: Array<string> | true;
    /**
     * Used to join inputs of type array.
     */
    joiner: string;
}

export type EventTemplateHandler = (element: HTMLElement) => void;

export interface EventTemplate extends Template {
    /**
     * listener string identifier like `click` or `mouseover` ...
     */
    listener: string;
    /**
     * on event listener like `onclick`, `onmouseover` ...
     */
    on: string;
    /**
     * event type like `Event`, `PointerEvent`, `TouchEvent`...
     */
    type: string;
    /**
     * event handler for custom events.
     */
    handler: EventTemplateHandler;
}

export interface ComponentTemplate extends Template {
    /**
     * a string representing the HTML tag of the element.
     */
    tag: string;
    /**
     * an object containing the unique attributes of the element.
     */
    props: Map<string, any>;
    /**
     * indicates if the component is childless or not.
     */
    childless: boolean;
    /**
     * web interface of the native element
     */
    nativeInterface: string;
}

export interface CssPropertyTemplate extends Template {
    /**
     * property original name used in the CSS file.
     */
    css: string;
    /**
     * property possible values.
     */
    values: Array<string>;
    /**
     * property type like `number`, `string` or `Color`.
     */
    type: string;
    /**
     * property support in different browsers.
     */
    support: Array<string>;
    /**
     * Used to join inputs of type array.
     */
    joiner: string;
}

export interface CssSelectorTemplate extends Template {
    /**
     * selector original name used in the CSS file.
     */
    css: string;
    /**
     * selector support in different browsers.
     */
    support: Array<string>;
}

/**
 * Create a template for a DOM attribute.
 * @param params parameters
 */
export function attribute(params: AttributeTemplate): AttributeTemplate;

/**
 * Create a template for a DOM event.
 * @param params parameters
 */
export function event(params: EventTemplate): EventTemplate;

/**
 * Create a blue print of a component.
 * @param params parameters
 */
export function component(params: ComponentTemplate): ComponentTemplate;

/**
 * Create a Css property template.
 * @param params parameters
 */
export function property(params: CssPropertyTemplate): CssPropertyTemplate;

/**
 * Create a CSS selector template.
 * @param params parameters
 */
export function selector(params: CssSelectorTemplate): CssSelectorTemplate;
