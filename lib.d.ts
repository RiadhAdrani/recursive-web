import { Route, StateArray } from "@riadh-adrani/recursive/lib";
import {
    WebEventTarget,
    WebEvent,
    EventCallback,
    EventDeclaration,
} from "./packages/dom/event";
import { Color } from "./packages/css/color";
import { Events } from "./types/events";
import { FontFace } from "./types/fontFace";
import { Selector, SelectorTypes } from "./types/selector";
import {
    MediaQuery,
    ComponentStyleSheet,
    FreeStyleSheet,
    Selectors,
} from "./types/style";
import { HTMLAttributes } from "./types/htmlCommon";
import { SVGAttributes } from "./types/svgCommon";
import {
    ElementChildren,
    CommonAttributes,
    ComputedStyleSheets,
    Corners,
    Edges,
} from "./types/util";

export { Route, StateArray };

export { CommonAttributes, ComputedStyleSheets, Corners, Edges };

export { HTMLAttributes, SVGAttributes, ElementChildren };

export {
    Color,
    FontFace,
    Selector,
    SelectorTypes,
    MediaQuery,
    ComponentStyleSheet,
    FreeStyleSheet,
    Selectors,
};

export { WebEventTarget, WebEvent, EventCallback, EventDeclaration, Events };
