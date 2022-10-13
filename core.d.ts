/**
 * @important
 * Do not modify this file
 */

import {
    BaseElement,
    RecursiveElement,
    Hooks,
    Flags,
    Route,
    StateArray,
} from "@riadh-adrani/recursive/lib";

import { Color } from "./packages/css/color";

import {
    WebEventTarget,
    WebEvent,
    EventCallback,
    EventDeclaration,
} from "./packages/dom/event";

export {
    Route,
    StateArray,
    Color,
    WebEventTarget,
    WebEvent,
    EventCallback,
    EventDeclaration,
};

export interface FontFace {}

export interface Selector {}

export interface SelectorTypes {}

export interface Events<E = HTMLElement> {}

export interface ElementChildren {
    children: Array<RecursiveElement>;
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

export type MediaQuery = SelectorTypes & { condition: string };

export interface Selectors extends SelectorTypes {
    [key: string]: Selector;
}

export type ElementMediaQuery = MediaQuery & Selectors;

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
    mediaQueries: Array<ElementMediaQuery>;
}

export interface ComputedStyleSheets {
    vars: { [key: string]: string };
    fontFace: { [key: string]: any };
    selectors: Array<{ selector: string; content: Selector }>;
    mediaQueries: Array<MediaQuery>;
    animations: Array<Animation>;
    imports: Array<string>;
}

export interface CommonAttributes {
    /**
     * Element key among his siblings.
     */
    key: string;
    /**
     * Element lifecycle hooks.
     */
    hooks: Hooks<HTMLElement>;
    /**
     * Renderer flags.
     */
    flags: Flags;
    /**
     * Element style sheet.
     */
    style: StyleSheet;
}

export interface SVGAttributes extends CommonAttributes {
    id: string;
    lang: string;
    tabIndex: string;
    xmlBase: string;
    xmlLang: string;
    xmlSpace: string;
    className: string;
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
    mediaQueries: {
        [key: string]: MediaQuery;
    };
    /**
     * Animations.
     */
    animations: { [key: string]: { [key: string]: Selector } };
    /**
     * Font Face
     */
    fontFace: Array<FontFace>;
}

export type RenderOptions = {
    app: BaseElement;
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
