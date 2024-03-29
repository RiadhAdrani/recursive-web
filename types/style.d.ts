import { StringWithAutoComplete, TypeOrArray } from "./util";
import { FontFace } from "./fontFace";
import { Selector, SelectorTypes } from "./selector";

export type BaseSelector = Record<string, CssPropertyDeclarationOf<string>>;

export type ComponentAnimation = { name: string } & Record<
    string,
    Selector | string
>;

export type MediaQuery = { condition: string } & Record<
    string,
    Selector | string
>;

export type Selectors = Record<string, Selector>;

export type CssPropertyDeclarationOf<T> = TypeOrArray<
    StringWithAutoComplete<T>
>;

export type ComponentStyleSheet = {
    /**
     * Define if the current stylesheet
     * should be scoped for the current element.
     */
    scoped?: boolean;
    /**
     * Class name that will serve for styling.
     * The name should not start with a `.`
     * as it will be automatically added
     */
    className?: string;
    /**
     * Array of animations.
     */
    animations?: Array<ComponentAnimation>;
    /**
     * Media queries of the current element.
     */
    mediaQueries?: Array<MediaQuery & SelectorTypes>;
} & SelectorTypes;

export type FreeStyleSheet = {
    /**
     * Object containing Css variables.
     * The renderer will add the `--` prefix
     * before each key.
     */
    var?: Record<string, string>;
    /**
     * Array of string, containing imports `url`s.
     */
    imports?: Array<string>;
    /**
     * Style selectors.
     */
    selectors?: Record<string, Selector>;
    /**
     * Media Queries.
     */
    mediaQueries?: Array<MediaQuery>;
    /**
     * Animations.
     */
    animations?: Record<string, Record<string, Selector>>;
    /**
     * Font Face
     */
    fontFace?: Array<FontFace>;
    /**
     * Style sheet options
     */
    options?: {
        /**
         * determine if this free style sheet
         * should be rendered after components style
         * or before as usual.
         *
         * ``Note that only selectors, media-queries and animations
         * are affected by this position option.``
         */
        after?: boolean;
    };
};

/**
 * Standard CSS colors.
 */
export type CssColor =
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
