/**
 * @important
 * Do not modify this file
 */

import { RawElement, RecursiveElement } from "@riadh-adrani/recursive/lib";

/**
 * Standard CSS colors.
 */
export type Color =
    | "aliceblue"
    | "antiquewhite"
    | "aqua"
    | "aquamarine"
    | "azure"
    | "beige"
    | "bisque"
    | "black"
    | "blanchedalmond"
    | "blue"
    | "blueviolet"
    | "brown"
    | "burlywood"
    | "cadetblue"
    | "chartreuse"
    | "chocolate"
    | "coral"
    | "cornflowerblue"
    | "cornsilk"
    | "crimson"
    | "cyan"
    | "darkblue"
    | "darkcyan"
    | "darkgoldenrod"
    | "darkgray"
    | "darkgreen"
    | "darkgrey"
    | "darkkhaki"
    | "darkmagenta"
    | "darkolivegreen"
    | "darkorange"
    | "darkorchid"
    | "darkred"
    | "darksalmon"
    | "darkseagreen"
    | "darkslateblue"
    | "darkslategray"
    | "darkslategrey"
    | "darkturquoise"
    | "darkviolet"
    | "deeppink"
    | "deepskyblue"
    | "dimgray"
    | "dimgrey"
    | "dodgerblue"
    | "firebrick"
    | "floralwhite"
    | "forestgreen"
    | "fuchsia"
    | "gainsboro"
    | "ghostwhite"
    | "goldenrod"
    | "gold"
    | "gray"
    | "green"
    | "greenyellow"
    | "grey"
    | "honeydew"
    | "hotpink"
    | "indianred"
    | "indigo"
    | "ivory"
    | "khaki"
    | "lavenderblush"
    | "lavender"
    | "lawngreen"
    | "lemonchiffon"
    | "lightblue"
    | "lightcoral"
    | "lightcyan"
    | "lightgoldenrodyellow"
    | "lightgray"
    | "lightgreen"
    | "lightgrey"
    | "lightpink"
    | "lightsalmon"
    | "lightseagreen"
    | "lightskyblue"
    | "lightslategray"
    | "lightslategrey"
    | "lightsteelblue"
    | "lightyellow"
    | "lime"
    | "limegreen"
    | "linen"
    | "magenta"
    | "maroon"
    | "mediumaquamarine"
    | "mediumblue"
    | "mediumorchid"
    | "mediumpurple"
    | "mediumseagreen"
    | "mediumslateblue"
    | "mediumspringgreen"
    | "mediumturquoise"
    | "mediumvioletred"
    | "midnightblue"
    | "mintcream"
    | "mistyrose"
    | "moccasin"
    | "navajowhite"
    | "navy"
    | "oldlace"
    | "olive"
    | "olivedrab"
    | "orange"
    | "orangered"
    | "orchid"
    | "palegoldenrod"
    | "palegreen"
    | "paleturquoise"
    | "palevioletred"
    | "papayawhip"
    | "peachpuff"
    | "peru"
    | "pink"
    | "plum"
    | "powderblue"
    | "purple"
    | "rebeccapurple"
    | "red"
    | "rosybrown"
    | "royalblue"
    | "saddlebrown"
    | "salmon"
    | "sandybrown"
    | "seagreen"
    | "seashell"
    | "sienna"
    | "silver"
    | "skyblue"
    | "slateblue"
    | "slategray"
    | "slategrey"
    | "snow"
    | "springgreen"
    | "steelblue"
    | "tan"
    | "teal"
    | "thistle"
    | "tomato"
    | "turquoise"
    | "violet"
    | "wheat"
    | "white"
    | "whitesmoke"
    | "yellow"
    | "yellowgreen";

export interface Selector {}

export interface SelectorTypes {
    /**
     * ## ``element.style``
     *
     * Inline style is used to apply the unique style rules to an element,
     * by putting the CSS rules directly into the start tag.
     */
    inline: Selector;
    /**
     * ## ``.element``
     *
     * Define style for the normal state of the element.
     */
    normal: Selector;
    /**
     * ## ``:active ``
     *
     * Define style for the element when clicked.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:active}
     */
    active: Selector;
    /**
     * ## ``:any-link ``
     *
     * Define the style that represents an element
     * that acts as the source anchor of a hyperlink,
     * independent of whether it has been visited.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:any-link}
     */
    anyLink: Selector;
    /**
     * ## `:autofill `
     * The :autofill CSS pseudo-class matches when an <input>
     * element has its value autofilled by the browser.
     * The class stops matching if the user edits the field.
     *
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:autofill}
     */
    autofill: Selector;
    /**
     * ## ``:checked ``
     *
     * The ``:checked`` CSS pseudo-class selector represents any radio
     * (<input type="radio">), checkbox (<input type="checkbox">),
     * or option (<option> in a <select>)
     * element that is checked or toggled to an on state.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:checked}
     */
    checked: Selector;
    /**
     * ## ``:default ``
     *
     * The :default CSS pseudo-class selects
     * form elements that are the default in a group of related elements.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:default}
     */
    default: Selector;
    /**
     * ## `:defined `
     *
     * The :defined CSS pseudo-class
     * represents any element that has been defined.
     * This includes any standard element built in to the browser,
     * and custom elements that have been successfully defined
     * (i.e. with the CustomElementRegistry.define() method).
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:defined}
     */
    defined: Selector;
    /**
     * ## `:disabled `
     *
     * The :disabled CSS pseudo-class represents any disabled element.
     * An element is disabled if it can't be activated
     * (selected, clicked on, typed into, etc.) or accept focus.
     * The element also has an enabled state,
     * in which it can be activated or accept focus.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled}
     */
    disabled: Selector;
    /**
     * ## `:empty `
     *
     * The :empty CSS pseudo-class represents any element that has no children.
     * Children can be either element nodes or text (including whitespace).
     * Comments, processing instructions,
     * and CSS content do not affect whether an element is considered empty.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:empty}
     */
    empty: Selector;
    /**
     * ## `:enabled `
     *
     * The :enabled CSS pseudo-class represents any enabled element.
     * An element is enabled if it can be activated
     * (selected, clicked on, typed into, etc.) or accept focus.
     * The element also has a disabled state,
     * in which it can't be activated or accept focus.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:enabled}
     */
    enabled: Selector;
    /**
     * ## `:first `
     *
     * The :first CSS pseudo-class, used with the ``@page`` at-rule,
     * represents the first page of a printed document.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:first}
     */
    first: Selector;
    /**
     * ## `:first-child `
     *
     * The :first-child CSS pseudo-class
     * represents the first element among a group of sibling elements.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child}
     */
    firstChild: Selector;
    /**
     * ## `:first-of-type `
     *
     * The :first-of-type CSS pseudo-class represents
     * the first element of its type among a group of sibling elements.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:first-of-type}
     */
    firstOfType: Selector;
    /**
     * ## `:fullscreen `
     *
     * The :fullscreen CSS pseudo-class
     * matches every element which is currently in fullscreen mode.
     * If multiple elements have been put into fullscreen mode,
     * this selects them all.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:fullscreen}
     */
    fullscreen: Selector;
    /**
     * ## `:focus `
     *
     * The :focus CSS pseudo-class represents an element
     * (such as a form input) that has received focus.
     * It is generally triggered when the user clicks
     * or taps on an element or selects it with the keyboard's Tab key.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:focus}
     */
    focus: Selector;
    /**
     * ## `focus-visible`
     *
     * The :focus-visible pseudo-class applies
     * while an element matches the :focus pseudo-class and the UA (User Agent)
     * determines via heuristics that the focus should be made evident on the element.
     * (Many browsers show a "focus ring" by default in this case.)
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible}
     */
    focusVisible: Selector;
    /**
     * ## `:focus-within`
     *
     * The :focus-within CSS pseudo-class
     * matches an element if the element or any of its descendants are focused.
     * In other words, it represents an element that is itself matched
     * by the :focus pseudo-class or has a descendant that is matched
     * by :focus. (This includes descendants in shadow trees.)
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within}
     */
    focusWithin: Selector;
    /**
     * ## `:host`
     *
     * The :host CSS pseudo-class
     * selects the shadow host of the shadow DOM
     * containing the CSS it is used inside
     * — in other words,
     * this allows you to select a custom element from inside its shadow DOM.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:host}
     */
    host: Selector;
    /**
     * ## `:hover`
     *
     * The :hover CSS pseudo-class
     * matches when the user interacts with an element with a pointing device,
     * but does not necessarily activate it.
     * It is generally triggered
     * when the user hovers over an element with the cursor (mouse pointer).
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:hover}
     */
    hover: Selector;
    /**
     * ## `:indeterminate`
     *
     * The :indeterminate CSS pseudo-class
     * represents any form element whose state is indeterminate,
     * such as checkboxes which have their HTML indeterminate attribute set to true,
     * radio buttons which are members of a group in which all radio buttons are unchecked,
     * and indeterminate ``<progress>`` elements.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:indeterminate}
     */
    indeterminate: Selector;
    /**
     * ## `:in-range`
     *
     * The :in-range CSS pseudo-class represents an ``<input>`` element
     * whose current value is within the range limits specified by the min and max attributes.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:in-range}
     */
    inRange: Selector;
    /**
     * ## `:invalid`
     *
     * The :invalid CSS pseudo-class represents
     * any ``<form>``, ``<fieldset>``, ``<input>``
     * or other ``<form>`` element whose contents fail to validate.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid}
     */
    invalid: Selector;
    /**
     * ## `:last-child`
     *
     * The :last-child CSS pseudo-class
     * represents the last element among a group of sibling elements.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:last-child}
     */
    lastChild: Selector;
    /**
     * ## `:last-of-type`
     *
     * The :last-of-type CSS pseudo-class
     * represents the last element of its type among a group of sibling elements.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:last-of-type}
     */
    lastOfType: Selector;
    /**
     * ## `:left`
     *
     * The :left CSS pseudo-class,
     * used with the ``@page`` at-rule,
     * represents all left-hand pages of a printed document.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:left}
     */
    left: Selector;
    /**
     * ## `:link`
     *
     * The :link CSS pseudo-class
     * represents an element that has not yet been visited.
     * It matches every unvisited ``<a>`` or ``<area>`` element
     * that has an href attribute.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:link}
     */
    link: Selector;
    /**
     * ## `:modal`
     *
     * The :modal CSS pseudo-class
     * matches an element that is in a state
     * in which it excludes all interaction
     * with elements outside it until
     * the interaction has been dismissed.
     * Multiple elements can be selected
     * by the :modal pseudo-class at the same time,
     * but only one of them will be active and able to receive input.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:modal}
     */
    modal: Selector;
    /**
     * ## `:only-child`
     *
     * The :only-child CSS pseudo-class
     * represents an element without any siblings.
     * This is the same as :first-child:last-child
     * or :nth-child(1):nth-last-child(1),
     * but with a lower specificity.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:only-child}
     */
    onlyChild: Selector;
    /**
     * ## `:only-of-type`
     *
     * The :only-of-type CSS pseudo-class
     * represents an element that has no siblings of the same type.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:only-of-type}
     */
    onlyOfType: Selector;
    /**
     * ## `:optional`
     *
     * The :optional CSS pseudo-class represents any ``<input>``,
     * ``<select>``, or ``<textarea>`` element
     * that does not have the required attribute set on it.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:optional}
     */
    optional: Selector;
    /**
     * ## `out-of-range`
     *
     * The :out-of-range CSS pseudo-class
     * represents an ``<input>`` element whose current value
     * is outside the range limits specified
     * by the min and max attributes.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:out-of-range}
     */
    outOfRange: Selector;
    /**
     * ## `:picture-in-picture`
     *
     * The :picture-in-picture CSS pseudo-class
     * matches the element which is currently
     * in picture-in-picture mode.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:picture-in-picture}
     */
    pictureInPicutre: Selector;
    /**
     * ## `:placeholder-shown`
     *
     * The :placeholder-shown CSS pseudo-class
     * represents any ``<input>`` or ``<textarea>`` element
     * that is currently displaying placeholder text.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:placeholder-shown}
     */
    placeholderShown: Selector;
    /**
     * ## `:read-only`
     *
     * The :read-only CSS pseudo-class
     * represents an element (such as input or textarea)
     * that is not editable by the user.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:read-only}
     */
    readOnly: Selector;
    /**
     * ## `:read-write`
     *
     * The :read-write CSS pseudo-class
     * represents an element (such as input or textarea)
     * that is editable by the user.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:read-write}
     */
    readWrite: Selector;
    /**
     * ## `:required`
     *
     * The :required CSS pseudo-class
     * epresents any ``<input>``, ``<select>``, or ``<textarea>`` element
     * that has the required attribute set on it.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:required}
     */
    required: Selector;
    /**
     * ## `:scope`
     *
     * The :scope CSS pseudo-class
     * represents elements that are a reference point
     * for selectors to match against.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:scope}
     */
    scope: Selector;
    /**
     * ## `:target`
     *
     * The :target CSS pseudo-class
     * represents a unique element (the target element)
     * with an id matching the URL's fragment.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:target}
     */
    target: Selector;
    /**
     * ## `:valid`
     *
     * The :valid CSS pseudo-class
     * represents any ``<input>`` or other ``<form>`` element
     * whose contents validate successfully.
     * This allows to easily make valid fields
     * adopt an appearance that helps the user confirm
     * that their data is formatted properly.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:valid}
     */
    valid: Selector;
    /**
     * ## `:visited`
     *
     * The :visited CSS pseudo-class
     * represents links that the user has already visited.
     * For privacy reasons,
     * the styles that can be modified
     * using this selector are very limited.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:visited}
     */
    visited: Selector;
    /**
     * ## `::after`
     *
     * In CSS, ::after creates a pseudo-element
     * that is the last child of the selected element.
     * It is often used to add cosmetic content
     * to an element with the content property.
     * It is inline by default.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/::after}
     */
    after: Selector;
    /**
     * ## `::before`
     *
     * In CSS, ::before creates a pseudo-element
     * that is the first child of the selected element.
     * It is often used to add cosmetic content
     * to an element with the content property.
     * It is inline by default.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/::before}
     */
    before: Selector;
    /**
     * ## `::cue`
     *
     * The ::cue CSS pseudo-element matches WebVTT cues
     * within a selected element.
     * This can be used to style captions
     * and other cues in media with VTT tracks.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/::cue}
     */
    cue: Selector;
    /**
     * ## `::first-letter`
     *
     * The ::first-letter CSS pseudo-element
     * applies styles to the first letter
     * of the first line of a block-level element,
     * but only when not preceded by other content
     * (such as images or inline tables).
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/::first-letter}
     */
    firstLetter: Selector;
    /**
     * ## `::first-line`
     *
     * The ::first-line CSS pseudo-element
     * applies styles to the first line of a block-level element.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/::first-line}
     */
    firstLine: Selector;
    /**
     * ## `::file-selector-button`
     *
     * The ::file-selector-button CSS pseudo-element
     * represents the button of an ``<input>`` of type="file".
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/::file-selector-button}
     */
    fileSelectorButton: Selector;
    /**
     * ## `::placeholder`
     *
     * The ::placeholder CSS pseudo-element
     * represents the placeholder text in
     * an ``<input>`` or ``<textarea>`` element.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder}
     */
    placeholder: Selector;
    /**
     * ## `::selection`
     *
     * The ::selection CSS pseudo-element
     * applies styles to the part of a document
     * that has been highlighted by the user
     * (such as clicking and dragging the mouse across text).
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/::selection}
     */
    selection: Selector;
    /**
     * ## `::marker`
     *
     * The ::marker CSS pseudo-element selects the marker box
     * of a list item, which typically contains a bullet or number.
     * It works on any element or pseudo-element set
     * to display: list-item,
     * such as the ``<li> ``and ``<summary>`` elements.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/::marker}
     */
    marker: Selector;
    webkitScrollbar: Selector;
    webkitScrollbarTrack: Selector;
    webkitScrollbarThumb: Selector;
    webkitScrollbarThumbHover: Selector;
    webkitScrollbarThumbActive: Selector;
    [key: string]: Selector;
}

export interface Animation {
    /**
     * Name of the animation
     */
    name: string;
    /**
     * Steps of the animations
     */
    steps: { [key: string]: Selector };
}

export interface MediaQuery extends SelectorTypes {
    /**
     * Media query condition.
     */
    condition: string;
}

export interface StyleSheet extends SelectorTypes {
    /**
     * Define if the current stylesheet
     * should be scoped for the current element.
     */
    scoped: boolean;
    /**
     * Class name that will serve for styling.
     * The name should not start with a `.`
     * as it will be automatically added
     */
    className: string;
    /**
     * Array of animations.
     */
    animations: Array<Animation>;
    /**
     * Media queries of the current element.
     */
    mediaQueries: Array<MediaQuery>;
}

export interface Hooks {
    /**
     * ### `onCreated`
     *
     * Hook executed when the element
     * is rendered for the first time.
     * When an element
     * gets updated with another one having the same type,
     * the `onCreated` hook of the new one won't be executed,
     * the operation is not considered as a creation of a new element.
     */
    onCreated: (el: HTMLElement) => {};
    /**
     * ### `onRef`
     *
     * Executed everytime the app is updated.
     * Return a string that will serve as the reference key.
     */
    onRef: (el: HTMLElement) => string;
    /**
     * ### `beforeDestroyed`
     *
     * Executed before the element get removed from the DOM.
     */
    beforeDestroyed: (el: HTMLElement) => {};
    /**
     * ### `onDestroyed`
     *
     * Executed after the element get removed from the DOM.
     */
    onDestroyed: () => {};
}

export interface Flags {
    /**
     * ### ``renderIf``
     *
     * If set to `false`, the element won't be rendered.
     */
    renderIf: boolean;
    /**
     * ### `forceRerender`
     *
     * if set to `true`, this element will replace the old
     * element event if they have the same type.
     */
    forceRerender: boolean;
}

export interface Events {}

export interface CommonAttributes {
    /**
     * Element key among his siblings.
     */
    key: string;
    /**
     * Element lifecycle hooks.
     */
    hooks: Hooks;
    /**
     * Renderer flags.
     */
    flags: Flags;
    /**
     * Element style sheet.
     */
    style: StyleSheet;
}

export interface SVGAttributes extends CommonAttributes, Events {
    id: string;
    lang: string;
    tabIndex: string;
    xmlBase: string;
    xmlLang: string;
    xmlSpace: string;
    className: string;
    children: Array<any>;
}

export interface FreeStyleSheet {
    /**
     * Object containing Css variables.
     * The renderer will add the `--` prefix
     * before each key.
     */
    var: { [key: string]: string };
    /**
     * Array of string, containing imports `url`s.
     */
    imports: Array<string>;
    /**
     * Style selectors.
     */
    selectors: { [key: string]: Selector };
    /**
     * Media Queries.
     */
    mediaQueries: { [key: string]: { [key: string]: Selector } };
    /**
     * Animations.
     */
    animations: { [key: string]: { [key: string]: Selector } };
    /**
     * Font Face
     */
    fontFace: { [key: string]: any };
}

export interface Route {
    /**
     * Route path, without `/`,
     * apart from the root route.
     */
    path: string;
    /**
     * Function returning the element
     * representing the given route.
     */
    component: () => RecursiveElement;
    /**
     * Title that will be displayed
     * in the tab.
     */
    title: string;
    /**
     * An array of the nested routes.
     */
    routes: Array<Route>;
    /**
     * The path that the app will try to redirect to
     * when the current route is mounted.
     */
    redirectTo: string;
    /**
     * Callback executing when the route has loaded.
     */
    onLoad: () => void;
    /**
     * Callback executing when the route is unloaded.
     */
    onExit: () => void;
}

export type StateArray = [
    /**
     * The value of the state at the current rendering iteration.
     */
    any,
    /**
     * Used to update the state.
     */
    (newValue: any) => void,
    /**
     * Used to retrieve the currently stored value of the state
     */
    () => any,
    /**
     * Used to reset the state to its initial value
     */
    () => void,
    /**
     * The previous value of the state.
     */
    any
];

export type RenderOptions = {
    app: RawElement;
    root: HTMLElement;
    router: { route: Route; base: string; scroll: boolean };
    cacheSize: number;
};

export type Corners =
    | string
    | { top: string; bottom: string }
    | { left: string; right: string }
    | { topLeftBottomRight: string; topRightBottomLeft: string }
    | { topLeft: string; topRight: string; bottomRight: string; bottomLeft: string };

export type Edges =
    | string
    | { vertical: string; horizontal: string }
    | { top: string; right: string; bottom: string; left: string };
