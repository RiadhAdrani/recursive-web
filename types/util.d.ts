import { BaseElement, Hooks, Flags } from "@riadh-adrani/recursive/lib";
import { MediaQuery, ComponentStyleSheet } from "./style";
import { Selector } from "./selector";

/**
 * A javascript object with string keys and `T` as their type.
 */
export type ObjectOf<T> = { [key: string]: T };

export type StringWithAutoComplete<T> = T | (string & Record<never, never>);

export type TypeOrArray<T> = T | Array<T>;

export interface ElementChildren {
    children: BaseElement | string | Array<BaseElement | string>;
}

export interface ImportScriptParams {
    async?: boolean;
    crossOrigin?: string;
    defer?: boolean;
    fetchPriority?: "high" | "low" | "auto";
    integrity?: string;
    nonce?: string;
    referrerPolicy?: string;
    src?: string;
    type?: string;
    rel?: string;
}

export interface CommonAttributes {
    /**
     * Element key among his siblings.
     */
    key?: string;
    /**
     * Element lifecycle hooks.
     */
    hooks?: Hooks<HTMLElement>;
    /**
     * Renderer flags.
     */
    flags?: Flags;
    /**
     * Element style sheet.
     */
    style?: ComponentStyleSheet;
    /**
     * Overrides current element type.
     */
    elementType?: string;
}

export interface ComputedStyleSheets {
    vars?: ObjectOf<string>;
    fontFace?: Array<ObjectOf<any>>;
    selectors?: Array<{ selector: string; content: Selector }>;
    mediaQueries?: Array<MediaQuery>;
    animations?: Array<Animation>;
    imports?: Array<string>;
}

export type Corners =
    | string
    | { top?: string; bottom?: string }
    | { left?: string; right?: string }
    | { topLeftBottomRight?: string; topRightBottomLeft?: string }
    | {
          topLeft?: string;
          topRight?: string;
          bottomRight?: string;
          bottomLeft?: string;
      };

export type Edges =
    | string
    | { vertical?: string; horizontal?: string }
    | { top?: string; right?: string; bottom?: string; left?: string };
