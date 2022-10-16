import { ObjectOf } from "./util";
import { FontFace } from "./fontFace";
import { Selector, SelectorTypes } from "./selector";

export type ComponentAnimation = { name: string } & ObjectOf<Selector>;

export type MediaQuery = { condition: string } & ObjectOf<Selector>;

export type Selectors = ObjectOf<Selector>;

export type ComponentStyleSheet = {
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
    animations: Array<ComponentAnimation>;
    /**
     * Media queries of the current element.
     */
    mediaQueries: Array<MediaQuery> & SelectorTypes;
} & Selectors &
    SelectorTypes;

export type FreeStyleSheet = {
    /**
     * Object containing Css variables.
     * The renderer will add the `--` prefix
     * before each key.
     */
    var: ObjectOf<string>;
    /**
     * Array of string, containing imports `url`s.
     */
    imports: Array<string>;
    /**
     * Style selectors.
     */
    selectors: ObjectOf<Selector>;
    /**
     * Media Queries.
     */
    mediaQueries: ObjectOf<ObjectOf<Selector>>;
    /**
     * Animations.
     */
    animations: ObjectOf<ObjectOf<Selector>>;
    /**
     * Font Face
     */
    fontFace: Array<FontFace>;
};
