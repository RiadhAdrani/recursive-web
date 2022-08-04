/**
 * @important
 * Do not modify this file
 */

import { RawElement, RecursiveElement } from "@riadh-adrani/recursive/lib";

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
    inline: Selector;
    normal: Selector;
    active: Selector;
    anyLink: Selector;
    checked: Selector;
    default: Selector;
    defined: Selector;
    disabled: Selector;
    empty: Selector;
    enabled: Selector;
    first: Selector;
    firstChild: Selector;
    firstOfType: Selector;
    fullscreen: Selector;
    focus: Selector;
    focusVisible: Selector;
    focusWithin: Selector;
    hover: Selector;
    indeterminate: Selector;
    inRange: Selector;
    invalid: Selector;
    lastChild: Selector;
    lastOfType: Selector;
    link: Selector;
    onlyChild: Selector;
    onlyOfType: Selector;
    optional: Selector;
    outOfRange: Selector;
    pictureInPicutre: Selector;
    placeholderShown: Selector;
    readOnly: Selector;
    readWrite: Selector;
    required: Selector;
    scope: Selector;
    target: Selector;
    valid: Selector;
    visited: Selector;
    after: Selector;
    before: Selector;
    cue: Selector;
    cueRegion: Selector;
    firstLetter: Selector;
    firstLine: Selector;
    fileSelectorButton: Selector;
    placeholder: Selector;
    selection: Selector;
    marker: Selector;
    webkitScrollbar: Selector;
    webkitScrollbarTrack: Selector;
    webkitScrollbarThumb: Selector;
    webkitScrollbarThumbHover: Selector;
    webkitScrollbarThumbActive: Selector;
    [key: string]: Selector;
}

export interface Animation {
    name: string;
    steps: { [key: string]: Selector };
}

export interface MediaQuery extends SelectorTypes {
    condition: string;
}

export interface StyleSheet extends SelectorTypes {
    scoped: boolean;
    className: string;
    animations: Array<Animation>;
    mediaQueries: Array<MediaQuery>;
}

export interface Hooks {
    onCreated: (el: HTMLElement) => {};
    onRef: (el: HTMLElement) => string;
    beforeDestroyed: (el: HTMLElement) => {};
    onDestroyed: () => {};
}

export interface Flags {
    renderIf: boolean;
    forceRerender: boolean;
}

export interface Events {}

export interface StandardAttributes {
    key: string;
    hooks: Hooks;
    flags: Flags;
    style: StyleSheet;
}

export interface HTMLAttributes extends StandardAttributes, Events {
    accessKey: string;
    autoCapitalize: string;
    autoFocus: string;
    className: string;
    contentEditable: boolean;
    contextMenu: string;
    dataSet: string;
    dir: string;
    draggable: string;
    enterKeyHint: string;
    exportParts: string;
    hidden: string;
    id: string;
    inputMode: string;
    is: string;
    itemId: string;
    itemProp: string;
    lang: string;
    nonce: string;
    part: string;
    slot: string;
    spellCheck: string;
    tabIndex: string;
    title: string;
    translate: string;
}

export interface SVGAttributes extends StandardAttributes, Events {
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
    var: { [key: string]: string };
    imports: Array<string>;
    selectors: { [key: string]: Selector };
    mediaQueries: { [key: string]: { [key: string]: Selector } };
    animations: { [key: string]: { [key: string]: Selector } };
    fontFace: { [key: string]: any };
}

export interface Route {
    path: string;
    component: RawElement;
    title: string;
    routes: Array<Route>;
    redirectTo: string;
    onLoad: Function;
    onExit: Function;
}

export type StateArray = [any, (newValue: any) => void, () => any, () => void, any];

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
