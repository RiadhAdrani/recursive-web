/**
 * @important
 * Do not modify this file
 */

import { RawElement, RecursiveElement } from "@riadh-adrani/recursive/lib";

/**
 * Standard CSS colors.
 */
export type Color =
    | "transparent"
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

export interface SelectorTypes {}

export interface Events {}

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
    [key: string]: Selector;
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
    [key: string]: Selector;
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
    | {
          topLeft: string;
          topRight: string;
          bottomRight: string;
          bottomLeft: string;
      };

export type Edges =
    | string
    | { vertical: string; horizontal: string }
    | { top: string; right: string; bottom: string; left: string };

export type ComponentHandler = (element: RecursiveElement) => RecursiveElement;
