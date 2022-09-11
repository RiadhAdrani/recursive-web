// This file is generated

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

export interface Selector {
    /**
     * ## `accentColor`
     *
     * _CSS property_
     */ accentColor: Color;
    /**
     * ## `alignContent`
     *
     * _CSS property_
     */ alignContent:
        | "center"
        | "start"
        | "end"
        | "flex-start"
        | "flex-end"
        | "normal"
        | "baseline"
        | "first baseline"
        | "last baseline"
        | "space-between"
        | "space-around"
        | "space-evenly"
        | "stretch"
        | "safe center"
        | "unsafe center";
    /**
     * ## `alignItems`
     *
     * _CSS property_
     */ alignItems:
        | "center"
        | "start"
        | "end"
        | "flex-start"
        | "flex-end"
        | "normal"
        | "baseline"
        | "first baseline"
        | "last baseline"
        | "stretch"
        | "safe center"
        | "unsafe center";
    /**
     * ## `alignSelf`
     *
     * _CSS property_
     */ alignSelf:
        | "center"
        | "start"
        | "end"
        | "flex-start"
        | "flex-end"
        | "normal"
        | "baseline"
        | "first baseline"
        | "last baseline"
        | "space-between"
        | "space-around"
        | "space-evenly"
        | "self-start"
        | "self-end"
        | "stretch"
        | "safe center"
        | "unsafe center";
    /**
     * ## `alignTracks`
     *
     * _CSS property_
     */ alignTracks: "start" | "space-between" | "center";
    /**
     * ## `all`
     *
     * _CSS property_
     */ all: string;
    /**
     * ## `animation`
     *
     * _CSS property_
     */ animation: string;
    /**
     * ## `animationDelay`
     *
     * _CSS property_
     */ animationDelay: string;
    /**
     * ## `animationDuration`
     *
     * _CSS property_
     */ animationDuration: string;
    /**
     * ## `animationFillMode`
     *
     * _CSS property_
     */ animationFillMode: "none" | "forwards" | "backwards" | "both";
    /**
     * ## `animationIterationCount`
     *
     * _CSS property_
     */ animationIterationCount: number;
    /**
     * ## `animationName`
     *
     * _CSS property_
     */ animationName: string;
    /**
     * ## `animationPlayState`
     *
     * _CSS property_
     */ animationPlayState: "running" | "paused";
    /**
     * ## `animationTimingFunction`
     *
     * _CSS property_
     */ animationTimingFunction:
        | "ease"
        | "ease-in"
        | "ease-out"
        | "ease-in-out"
        | "linear"
        | "step-start"
        | "step-end";
    /**
     * ## `appearance`
     *
     * _CSS property_
     */ appearance:
        | "none"
        | "auto"
        | "menulist-button"
        | "textfield"
        | "button"
        | "searchfield"
        | "textarea"
        | "push-button"
        | "slide-horizontal"
        | "checkbox"
        | "radio"
        | "square-button"
        | "menulist"
        | "meter"
        | "progress-bar";
    /**
     * ## `ascentOverride`
     *
     * _CSS property_
     */ ascentOverride: string;
    /**
     * ## `aspectRatio`
     *
     * _CSS property_
     */ aspectRatio: "auto";
    /**
     * ## `backdropFilter`
     *
     * _CSS property_
     */ backdropFilter: "none";
    /**
     * ## `backfaceVisibility`
     *
     * _CSS property_
     */ backfaceVisibility: "hidden" | "visible";
    /**
     * ## `background`
     *
     * _CSS property_
     */ background: string;
    /**
     * ## `backgroundAttachment`
     *
     * _CSS property_
     */ backgroundAttachment: "scroll" | "fixed" | "local";
    /**
     * ## `backgroundBlendMode`
     *
     * _CSS property_
     */ backgroundBlendMode: string;
    /**
     * ## `backgroundClip`
     *
     * _CSS property_
     */ backgroundClip: "border-box" | "padding-box" | "content-box" | "text";
    /**
     * ## `backgroundColor`
     *
     * _CSS property_
     */ backgroundColor: Color;
    /**
     * ## `backgroundImage`
     *
     * _CSS property_
     */ backgroundImage: string;
    /**
     * ## `backgroundOrigin`
     *
     * _CSS property_
     */ backgroundOrigin: "border-box" | "padding-box" | "content-box";
    /**
     * ## `backgroundPosition`
     *
     * _CSS property_
     */ backgroundPosition: "top" | "bottom" | "left" | "right" | "center";
    /**
     * ## `backgroundPositionX`
     *
     * _CSS property_
     */ backgroundPositionX: "left" | "right" | "center";
    /**
     * ## `backgroundPositionY`
     *
     * _CSS property_
     */ backgroundPositionY: "top" | "center" | "bottom";
    /**
     * ## `backgroundRepeat`
     *
     * _CSS property_
     */ backgroundRepeat:
        | "repeat-x"
        | "repeat-y"
        | "repeat"
        | "space"
        | "round"
        | "no-repeat";
    /**
     * ## `backgroundSize`
     *
     * _CSS property_
     */ backgroundSize: "cover" | "contain";
    /**
     * ## `blockSize`
     *
     * _CSS property_
     */ blockSize: "max-content" | "min-content";
    /**
     * ## `borderBlock`
     *
     * _CSS property_
     */ borderBlock: string;
    /**
     * ## `borderBlockColor`
     *
     * _CSS property_
     */ borderBlockColor: Color;
    /**
     * ## `borderBlockStyle`
     *
     * _CSS property_
     */ borderBlockStyle: "dashed" | "dotted" | "groove";
    /**
     * ## `borderBlockWidth`
     *
     * _CSS property_
     */ borderBlockWidth: "thick";
    /**
     * ## `borderBlockEnd`
     *
     * _CSS property_
     */ borderBlockEnd: string;
    /**
     * ## `borderBlockEndColor`
     *
     * _CSS property_
     */ borderBlockEndColor: Color;
    /**
     * ## `borderBlockEndStyle`
     *
     * _CSS property_
     */ borderBlockEndStyle: "dashed" | "dotted" | "groove";
    /**
     * ## `borderBlockEndWidth`
     *
     * _CSS property_
     */ borderBlockEndWidth: "thick";
    /**
     * ## `borderBlockStart`
     *
     * _CSS property_
     */ borderBlockStart: string;
    /**
     * ## `borderBlockStartColor`
     *
     * _CSS property_
     */ borderBlockStartColor: Color;
    /**
     * ## `borderBlockStartStyle`
     *
     * _CSS property_
     */ borderBlockStartStyle: "dashed" | "dotted" | "groove";
    /**
     * ## `borderBlockStartWidth`
     *
     * _CSS property_
     */ borderBlockStartWidth: "thick";
    /**
     * ## `border`
     *
     * _CSS property_
     */ border: string;
    /**
     * ## `borderBottom`
     *
     * _CSS property_
     */ borderBottom: string;
    /**
     * ## `borderBottomColor`
     *
     * _CSS property_
     */ borderBottomColor: Color;
    /**
     * ## `borderBottomLeftRadius`
     *
     * _CSS property_
     */ borderBottomLeftRadius: string;
    /**
     * ## `borderBottomRightRadius`
     *
     * _CSS property_
     */ borderBottomRightRadius: string;
    /**
     * ## `borderBottomStyle`
     *
     * _CSS property_
     */ borderBottomStyle:
        | "none"
        | "hidden"
        | "dotted"
        | "dashed"
        | "solid"
        | "double"
        | "groove"
        | "ridge"
        | "inset"
        | "outset";
    /**
     * ## `borderBottomWidth`
     *
     * _CSS property_
     */ borderBottomWidth: "thin" | "medium" | "thick";
    /**
     * ## `borderCollapse`
     *
     * _CSS property_
     */ borderCollapse: "collapse" | "seperate";
    /**
     * ## `borderColor`
     *
     * _CSS property_
     */ borderColor: Color;
    /**
     * ## `borderEndEndRadius`
     *
     * _CSS property_
     */ borderEndEndRadius: string;
    /**
     * ## `borderEndStartRadius`
     *
     * _CSS property_
     */ borderEndStartRadius: string;
    /**
     * ## `borderStartEndRadius`
     *
     * _CSS property_
     */ borderStartEndRadius: string;
    /**
     * ## `borderStartStartRadius`
     *
     * _CSS property_
     */ borderStartStartRadius: string;
    /**
     * ## `borderImage`
     *
     * _CSS property_
     */ borderImage: string;
    /**
     * ## `borderImageOutset`
     *
     * _CSS property_
     */ borderImageOutset: string;
    /**
     * ## `borderImageRepeat`
     *
     * _CSS property_
     */ borderImageRepeat: "stretch" | "repeat" | "round" | "space";
    /**
     * ## `borderImageSlice`
     *
     * _CSS property_
     */ borderImageSlice: "fill";
    /**
     * ## `borderImageSource`
     *
     * _CSS property_
     */ borderImageSource: string;
    /**
     * ## `borderImageWidth`
     *
     * _CSS property_
     */ borderImageWidth: string;
    /**
     * ## `borderInline`
     *
     * _CSS property_
     */ borderInline: Color;
    /**
     * ## `borderInlineColor`
     *
     * _CSS property_
     */ borderInlineColor: Color;
    /**
     * ## `borderInlineStyle`
     *
     * _CSS property_
     */ borderInlineStyle: "dashed" | "dotted" | "groove";
    /**
     * ## `borderInlineWidth`
     *
     * _CSS property_
     */ borderInlineWidth: string;
    /**
     * ## `borderInlineEnd`
     *
     * _CSS property_
     */ borderInlineEnd: string;
    /**
     * ## `borderInlineEndColor`
     *
     * _CSS property_
     */ borderInlineEndColor: Color;
    /**
     * ## `borderInlineEndStyle`
     *
     * _CSS property_
     */ borderInlineEndStyle: "dashed" | "dotted" | "groove";
    /**
     * ## `borderInlineEndWidth`
     *
     * _CSS property_
     */ borderInlineEndWidth: string;
    /**
     * ## `borderStartEnd`
     *
     * _CSS property_
     */ borderStartEnd: string;
    /**
     * ## `borderInlineStartColor`
     *
     * _CSS property_
     */ borderInlineStartColor: Color;
    /**
     * ## `borderInlineStartStyle`
     *
     * _CSS property_
     */ borderInlineStartStyle: "dashed" | "dotted" | "groove";
    /**
     * ## `borderInlineStartWidth`
     *
     * _CSS property_
     */ borderInlineStartWidth: string;
    /**
     * ## `borderLeft`
     *
     * _CSS property_
     */ borderLeft: string;
    /**
     * ## `borderLeftColor`
     *
     * _CSS property_
     */ borderLeftColor: Color;
    /**
     * ## `borderLeftStyle`
     *
     * _CSS property_
     */ borderLeftStyle:
        | "none"
        | "hidden"
        | "dotted"
        | "dashed"
        | "solid"
        | "double"
        | "groove"
        | "ridge"
        | "inset"
        | "outset";
    /**
     * ## `borderLeftWidth`
     *
     * _CSS property_
     */ borderLeftWidth: string;
    /**
     * ## `borderRadius`
     *
     * _CSS property_
     */ borderRadius: string;
    /**
     * ## `borderRight`
     *
     * _CSS property_
     */ borderRight: string;
    /**
     * ## `borderRightColor`
     *
     * _CSS property_
     */ borderRightColor: Color;
    /**
     * ## `borderRightStyle`
     *
     * _CSS property_
     */ borderRightStyle:
        | "none"
        | "hidden"
        | "dotted"
        | "dashed"
        | "solid"
        | "double"
        | "groove"
        | "ridge"
        | "inset"
        | "outset";
    /**
     * ## `borderRightWidth`
     *
     * _CSS property_
     */ borderRightWidth: string;
    /**
     * ## `borderSpacing`
     *
     * _CSS property_
     */ borderSpacing: string;
    /**
     * ## `borderStyle`
     *
     * _CSS property_
     */ borderStyle:
        | "none"
        | "hidden"
        | "dotted"
        | "dashed"
        | "solid"
        | "double"
        | "groove"
        | "ridge"
        | "inset"
        | "outset";
    /**
     * ## `borderTop`
     *
     * _CSS property_
     */ borderTop: string;
    /**
     * ## `borderTopColor`
     *
     * _CSS property_
     */ borderTopColor: Color;
    /**
     * ## `borderTopLeftRadius`
     *
     * _CSS property_
     */ borderTopLeftRadius: string;
    /**
     * ## `borderTopRightRadius`
     *
     * _CSS property_
     */ borderTopRightRadius: string;
    /**
     * ## `borderTopStyle`
     *
     * _CSS property_
     */ borderTopStyle:
        | "none"
        | "hidden"
        | "dotted"
        | "dashed"
        | "solid"
        | "double"
        | "groove"
        | "ridge"
        | "inset"
        | "outset";
    /**
     * ## `borderTopWidth`
     *
     * _CSS property_
     */ borderTopWidth: string;
    /**
     * ## `borderWidth`
     *
     * _CSS property_
     */ borderWidth: string;
    /**
     * ## `bottom`
     *
     * _CSS property_
     */ bottom: "auto";
    /**
     * ## `boxDecorationBreak`
     *
     * _CSS property_
     */ boxDecorationBreak: "slice" | "clone";
    /**
     * ## `boxShadow`
     *
     * _CSS property_
     */ boxShadow: "none";
    /**
     * ## `boxSizing`
     *
     * _CSS property_
     */ boxSizing: "border-box" | "box-sizing";
    /**
     * ## `breakAfter`
     *
     * _CSS property_
     */ breakAfter:
        | "auto"
        | "avoid"
        | "always"
        | "all"
        | "avoid-page"
        | "page"
        | "left"
        | "right"
        | "recto"
        | "verso"
        | "avoid-column"
        | "column"
        | "avoid-region"
        | "region";
    /**
     * ## `breakBefore`
     *
     * _CSS property_
     */ breakBefore:
        | "auto"
        | "avoid"
        | "always"
        | "all"
        | "avoid-page"
        | "page"
        | "left"
        | "right"
        | "recto"
        | "verso"
        | "avoid-column"
        | "column"
        | "avoid-region"
        | "region";
    /**
     * ## `breakInside`
     *
     * _CSS property_
     */ breakInside:
        | "auto"
        | "avoid"
        | "avoid-page"
        | "avoid-column"
        | "avoid-region";
    /**
     * ## `captionSide`
     *
     * _CSS property_
     */ captionSide:
        | "top"
        | "bottom"
        | "block-start"
        | "block-end"
        | "inline-start"
        | "inline-end";
    /**
     * ## `caretColor`
     *
     * _CSS property_
     */ caretColor: Color;
    /**
     * ## `clear`
     *
     * _CSS property_
     */ clear:
        | "none"
        | "left"
        | "right"
        | "both"
        | "inline-start"
        | "inline-end";
    /**
     * ## `clip`
     *
     * _CSS property_
     */ clip: "auto";
    /**
     * ## `clipPath`
     *
     * _CSS property_
     */ clipPath:
        | "none"
        | "margin-box"
        | "border-box"
        | "padding-box"
        | "content-box"
        | "fill-box"
        | "stroke"
        | "view-box";
    /**
     * ## `color`
     *
     * _CSS property_
     */ color: Color;
    /**
     * ## `colorAdjust`
     *
     * _CSS property_
     */ colorAdjust: string;
    /**
     * ## `colorScheme`
     *
     * _CSS property_
     */ colorScheme: "normal" | "light" | "dark";
    /**
     * ## `columnCount`
     *
     * _CSS property_
     */ columnCount: "auto";
    /**
     * ## `columnFill`
     *
     * _CSS property_
     */ columnFill: "auto" | "balance" | "balance-all";
    /**
     * ## `columnGap`
     *
     * _CSS property_
     */ columnGap: "normal";
    /**
     * ## `columnRule`
     *
     * _CSS property_
     */ columnRule: string;
    /**
     * ## `columnRuleColor`
     *
     * _CSS property_
     */ columnRuleColor: Color;
    /**
     * ## `columnRuleStyle`
     *
     * _CSS property_
     */ columnRuleStyle:
        | "none"
        | "hidden"
        | "dotted"
        | "dashed"
        | "solid"
        | "double"
        | "groove"
        | "ridge"
        | "inset"
        | "outset";
    /**
     * ## `columnRuleWidth`
     *
     * _CSS property_
     */ columnRuleWidth: "thin" | "medium" | "thick";
    /**
     * ## `columnSpan`
     *
     * _CSS property_
     */ columnSpan: "none" | "all";
    /**
     * ## `columnWidth`
     *
     * _CSS property_
     */ columnWidth: "auto";
    /**
     * ## `columns`
     *
     * _CSS property_
     */ columns: "auto";
    /**
     * ## `contain`
     *
     * _CSS property_
     */ contain:
        | "none"
        | "strict"
        | "content"
        | "size"
        | "layout"
        | "style"
        | "paint";
    /**
     * ## `content`
     *
     * _CSS property_
     */ content:
        | "normal"
        | "none"
        | "open-quote"
        | "close-quote"
        | "no-open-quote"
        | "no-close-quote";
    /**
     * ## `contentVisibility`
     *
     * _CSS property_
     */ contentVisibility: "visible" | "hidden" | "auto";
    /**
     * ## `counterIncrement`
     *
     * _CSS property_
     */ counterIncrement: string;
    /**
     * ## `counterReset`
     *
     * _CSS property_
     */ counterReset: string;
    /**
     * ## `counterSet`
     *
     * _CSS property_
     */ counterSet: string;
    /**
     * ## `cursor`
     *
     * _CSS property_
     */ cursor:
        | "auto"
        | "default"
        | "none"
        | "context-menu"
        | "help"
        | "pointer"
        | "progress"
        | "wait"
        | "cell"
        | "crosshair"
        | "text"
        | "vertical-text"
        | "alias"
        | "move"
        | "no-drop"
        | "not-allowed"
        | "grab"
        | "grabbing"
        | "n-resize"
        | "e-resize"
        | "w-resize"
        | "ne-resize"
        | "nw-resize"
        | "se-resize"
        | "sw-resize"
        | "ew-resize"
        | "ns-resize"
        | "ns-resize"
        | "nesw-resize"
        | "nwse-resize"
        | "zoom-in"
        | "zoom-out";
    /**
     * ## `direction`
     *
     * _CSS property_
     */ direction: "ltr" | "rtl";
    /**
     * ## `display`
     *
     * _CSS property_
     */ display:
        | "block"
        | "inline"
        | "inline-block"
        | "flex"
        | "inline-flex"
        | "grid"
        | "inline-grid"
        | "flow-root"
        | "none"
        | "contents"
        | "table"
        | "table-row";
    /**
     * ## `emptyCells`
     *
     * _CSS property_
     */ emptyCells: "show" | "hide";
    /**
     * ## `filter`
     *
     * _CSS property_
     */ filter: string;
    /**
     * ## `flex`
     *
     * _CSS property_
     */ flex: "auto" | "none";
    /**
     * ## `flexBasis`
     *
     * _CSS property_
     */ flexBasis: "max-content" | "min-content" | "fit-content" | "auto";
    /**
     * ## `flexDirection`
     *
     * _CSS property_
     */ flexDirection: "row" | "row-reverse" | "column" | "column-reverse";
    /**
     * ## `flexFlow`
     *
     * _CSS property_
     */ flexFlow: string;
    /**
     * ## `flexGrow`
     *
     * _CSS property_
     */ flexGrow: string;
    /**
     * ## `flexShrink`
     *
     * _CSS property_
     */ flexShrink: string;
    /**
     * ## `flexWrap`
     *
     * _CSS property_
     */ flexWrap: "nowrap" | "wrap" | "wrap-reverse";
    /**
     * ## `float`
     *
     * _CSS property_
     */ float: "left" | "right" | "none" | "inline-start" | "inline-end";
    /**
     * ## `font`
     *
     * _CSS property_
     */ font: string;
    /**
     * ## `fontFamily`
     *
     * _CSS property_
     */ fontFamily:
        | "serif"
        | "sans-serif"
        | "monospace"
        | "cursive"
        | "fantasy"
        | "system-ui"
        | "ui-serif"
        | "ui-sans-serif"
        | "ui-monospace"
        | "ui-rounded"
        | "emoji"
        | "math"
        | "fangsong";
    /**
     * ## `fontFeatureSettings`
     *
     * _CSS property_
     */ fontFeatureSettings: string;
    /**
     * ## `fontKerning`
     *
     * _CSS property_
     */ fontKerning: "auto" | "normal" | "none";
    /**
     * ## `fontSize`
     *
     * _CSS property_
     */ fontSize:
        | "xx-small"
        | "x-small"
        | "small"
        | "medium"
        | "large"
        | "x-large"
        | "xx-large"
        | "xxx-large";
    /**
     * ## `fontSizeAdjust`
     *
     * _CSS property_
     */ fontSizeAdjust: "none";
    /**
     * ## `fontStretch`
     *
     * _CSS property_
     */ fontStretch:
        | "ultra-condensed"
        | "extra-condensed"
        | "condensed"
        | "semi-condensed"
        | "normal"
        | "semi-expanded"
        | "expanded"
        | "extra-expanded"
        | "ultra-expanded";
    /**
     * ## `fontStyle`
     *
     * _CSS property_
     */ fontStyle: "normal" | "italic" | "oblique";
    /**
     * ## `fontSynthesis`
     *
     * _CSS property_
     */ fontSynthesis: "none" | "weight" | "style" | "small-caps";
    /**
     * ## `fontVariant`
     *
     * _CSS property_
     */ fontVariant: string;
    /**
     * ## `fontVariantAlternates`
     *
     * _CSS property_
     */ fontVariantAlternates: string;
    /**
     * ## `fontVariantCaps`
     *
     * _CSS property_
     */ fontVariantCaps: string;
    /**
     * ## `fontVariantEastAsian`
     *
     * _CSS property_
     */ fontVariantEastAsian: string;
    /**
     * ## `fontVariantLigatures`
     *
     * _CSS property_
     */ fontVariantLigatures: string;
    /**
     * ## `fontVariantNumeric`
     *
     * _CSS property_
     */ fontVariantNumeric: string;
    /**
     * ## `fontVariantPosition`
     *
     * _CSS property_
     */ fontVariantPosition: string;
    /**
     * ## `fontVariantSettings`
     *
     * _CSS property_
     */ fontVariantSettings: string;
    /**
     * ## `fontWeight`
     *
     * _CSS property_
     */ fontWeight:
        | "normal"
        | "bold"
        | "lighter"
        | "bolder"
        | "100"
        | "200"
        | "300"
        | "400"
        | "500"
        | "600"
        | "700"
        | "800"
        | "900";
    /**
     * ## `forcedColorAdjust`
     *
     * _CSS property_
     */ forcedColorAdjust: Color;
    /**
     * ## `gap`
     *
     * _CSS property_
     */ gap: string;
    /**
     * ## `grid`
     *
     * _CSS property_
     */ grid: "none";
    /**
     * ## `gridArea`
     *
     * _CSS property_
     */ gridArea: string;
    /**
     * ## `gridAutoColumns`
     *
     * _CSS property_
     */ gridAutoColumns: "in-content" | "max-content" | "auto";
    /**
     * ## `gridAutoFlow`
     *
     * _CSS property_
     */ gridAutoFlow: "row" | "column" | "dense";
    /**
     * ## `gridAutoRows`
     *
     * _CSS property_
     */ gridAutoRows: "min-content" | "max-content" | "auto";
    /**
     * ## `gridColumn`
     *
     * _CSS property_
     */ gridColumn: "auto";
    /**
     * ## `gridColumnEnd`
     *
     * _CSS property_
     */ gridColumnEnd: "auto";
    /**
     * ## `gridColumnGap`
     *
     * _CSS property_
     */ gridColumnGap: "auto";
    /**
     * ## `gridColumnStart`
     *
     * _CSS property_
     */ gridColumnStart: string;
    /**
     * ## `gridGap`
     *
     * _CSS property_
     */ gridGap: string;
    /**
     * ## `gridRow`
     *
     * _CSS property_
     */ gridRow: "auto";
    /**
     * ## `gridRowEnd`
     *
     * _CSS property_
     */ gridRowEnd: "auto";
    /**
     * ## `gridRowGap`
     *
     * _CSS property_
     */ gridRowGap: "auto";
    /**
     * ## `gridRowStart`
     *
     * _CSS property_
     */ gridRowStart: string;
    /**
     * ## `gridTemplate`
     *
     * _CSS property_
     */ gridTemplate: "none";
    /**
     * ## `gridTemplateAreas`
     *
     * _CSS property_
     */ gridTemplateAreas: "none";
    /**
     * ## `gridTemplateColumns`
     *
     * _CSS property_
     */ gridTemplateColumns: "none";
    /**
     * ## `gridTemplateRows`
     *
     * _CSS property_
     */ gridTemplateRows: "none";
    /**
     * ## `hangingPunctuation`
     *
     * _CSS property_
     */ hangingPunctuation:
        | "none"
        | "first"
        | "last"
        | "force-end"
        | "allow-end";
    /**
     * ## `height`
     *
     * _CSS property_
     */ height: "max-content" | "min-content" | "auto";
    /**
     * ## `hyphens`
     *
     * _CSS property_
     */ hyphens: "none" | "manual" | "auto";
    /**
     * ## `isolation`
     *
     * _CSS property_
     */ isolation: "auto" | "isolate";
    /**
     * ## `imageOrientation`
     *
     * _CSS property_
     */ imageOrientation: "none" | "from-image";
    /**
     * ## `imageRendering`
     *
     * _CSS property_
     */ imageRendering: "auto" | "crisp-edge" | "pixelated";
    /**
     * ## `imageResolution`
     *
     * _CSS property_
     */ imageResolution: "from-image";
    /**
     * ## `initialLetter`
     *
     * _CSS property_
     */ initialLetter: "normal";
    /**
     * ## `inlineSize`
     *
     * _CSS property_
     */ inlineSize: "auto" | "max-content" | "min-content";
    /**
     * ## `inset`
     *
     * _CSS property_
     */ inset: "auto";
    /**
     * ## `insetBlock`
     *
     * _CSS property_
     */ insetBlock: "auto";
    /**
     * ## `insetBlockStart`
     *
     * _CSS property_
     */ insetBlockStart: "auto";
    /**
     * ## `insetInlineStart`
     *
     * _CSS property_
     */ insetInlineStart: "auto";
    /**
     * ## `justifyContent`
     *
     * _CSS property_
     */ justifyContent:
        | "center"
        | "start"
        | "end"
        | "flex-start"
        | "flex-end"
        | "left"
        | "right"
        | "normal"
        | "space-between"
        | "space-around"
        | "stretch"
        | "safe center"
        | "unsafe center";
    /**
     * ## `justifyItems`
     *
     * _CSS property_
     */ justifyItems:
        | "center"
        | "start"
        | "end"
        | "flex-start"
        | "flex-end"
        | "left"
        | "right"
        | "normal"
        | "space-between"
        | "space-around"
        | "stretch"
        | "safe center"
        | "unsafe center"
        | "self-start"
        | "self-end"
        | "baseline"
        | "first baseline"
        | "last baseline"
        | "legacy right"
        | "legacy left"
        | "legacy center";
    /**
     * ## `justifySelf`
     *
     * _CSS property_
     */ justifySelf:
        | "auto"
        | "normal"
        | "stretch"
        | "center"
        | "start"
        | "end"
        | "flex-start"
        | "flex-end"
        | "self-start"
        | "self-end"
        | "left"
        | "right"
        | "baseline"
        | "first baseline"
        | "last baseline"
        | "safe center"
        | "unsafe center";
    /**
     * ## `left`
     *
     * _CSS property_
     */ left: "auto";
    /**
     * ## `letterSpacing`
     *
     * _CSS property_
     */ letterSpacing: "normal";
    /**
     * ## `lineHeight`
     *
     * _CSS property_
     */ lineHeight: "normal";
    /**
     * ## `lineBreak`
     *
     * _CSS property_
     */ lineBreak: "auto" | "loose" | "normal" | "strict" | "anywhere";
    /**
     * ## `listStyle`
     *
     * _CSS property_
     */ listStyle: string;
    /**
     * ## `listStyleImage`
     *
     * _CSS property_
     */ listStyleImage: "none";
    /**
     * ## `listStylePosition`
     *
     * _CSS property_
     */ listStylePosition: "inside" | "outside";
    /**
     * ## `listStyleType`
     *
     * _CSS property_
     */ listStyleType:
        | "none"
        | "disc"
        | "circle"
        | "square"
        | "decimal"
        | "georgian"
        | "trad-chinese-informal"
        | "kannada"
        | "decimal-leading-zero"
        | "lower-roman"
        | "upper-roman"
        | "lower-greek"
        | "lower-alpha"
        | "upper-alpha"
        | "armenian"
        | "bengali"
        | "cambodian"
        | "devanagari"
        | "gujarati"
        | "kannada"
        | "lao"
        | "malayalam"
        | "myanmar"
        | "oriya"
        | "telugu";
    /**
     * ## `margin`
     *
     * _CSS property_
     */ margin: "auto";
    /**
     * ## `marginBlock`
     *
     * _CSS property_
     */ marginBlock: string;
    /**
     * ## `marginBlockEnd`
     *
     * _CSS property_
     */ marginBlockEnd: "auto";
    /**
     * ## `marginBlockStart`
     *
     * _CSS property_
     */ marginBlockStart: "auto";
    /**
     * ## `marginBottom`
     *
     * _CSS property_
     */ marginBottom: "auto";
    /**
     * ## `marginInline`
     *
     * _CSS property_
     */ marginInline: "auto";
    /**
     * ## `marginInlineEnd`
     *
     * _CSS property_
     */ marginInlineEnd: "auto";
    /**
     * ## `marginInlineStart`
     *
     * _CSS property_
     */ marginInlineStart: "auto";
    /**
     * ## `marginLeft`
     *
     * _CSS property_
     */ marginLeft: "auto";
    /**
     * ## `marginRight`
     *
     * _CSS property_
     */ marginRight: "auto";
    /**
     * ## `marginTop`
     *
     * _CSS property_
     */ marginTop: "auto";
    /**
     * ## `mask`
     *
     * _CSS property_
     */ mask: "none";
    /**
     * ## `maskBorder`
     *
     * _CSS property_
     */ maskBorder: string;
    /**
     * ## `maskBorderMode`
     *
     * _CSS property_
     */ maskBorderMode: "luminance" | "alpha";
    /**
     * ## `maskBorderOutset`
     *
     * _CSS property_
     */ maskBorderOutset: string;
    /**
     * ## `maskBorderRepeat`
     *
     * _CSS property_
     */ maskBorderRepeat: "stretch" | "repeat" | "round" | "space";
    /**
     * ## `maskBorderSlice`
     *
     * _CSS property_
     */ maskBorderSlice: string;
    /**
     * ## `maskBorderSource`
     *
     * _CSS property_
     */ maskBorderSource: "none";
    /**
     * ## `maskBorderWidth`
     *
     * _CSS property_
     */ maskBorderWidth: "auto";
    /**
     * ## `maskClip`
     *
     * _CSS property_
     */ maskClip:
        | "content-box"
        | "padding-box"
        | "border-box"
        | "margin-box"
        | "fill-box"
        | "stroke-box"
        | "view-box"
        | "no-clip";
    /**
     * ## `maskComposite`
     *
     * _CSS property_
     */ maskComposite: "add" | "subtract" | "intersect" | "exclude";
    /**
     * ## `maskImage`
     *
     * _CSS property_
     */ maskImage: "none";
    /**
     * ## `maskMode`
     *
     * _CSS property_
     */ maskMode: "alpha" | "luminance" | "match-source";
    /**
     * ## `maskOrigin`
     *
     * _CSS property_
     */ maskOrigin:
        | "content-box"
        | "padding-box"
        | "border-box"
        | "margin-box"
        | "fill-box"
        | "stroke-box"
        | "view-box"
        | "content"
        | "padding"
        | "border";
    /**
     * ## `maskPosition`
     *
     * _CSS property_
     */ maskPosition: "top" | "bottom" | "left" | "right" | "center";
    /**
     * ## `maskRepeat`
     *
     * _CSS property_
     */ maskRepeat:
        | "repeat-x"
        | "repeat-y"
        | "repeat"
        | "space"
        | "round"
        | "no-repeat";
    /**
     * ## `maskSize`
     *
     * _CSS property_
     */ maskSize: "cover" | "contain";
    /**
     * ## `maskType`
     *
     * _CSS property_
     */ maskType: "alpha" | "luminance";
    /**
     * ## `mathStyle`
     *
     * _CSS property_
     */ mathStyle: "normal" | "compact";
    /**
     * ## `maxBlockSize`
     *
     * _CSS property_
     */ maxBlockSize: "none" | "max-content" | "min-content";
    /**
     * ## `maxInlineSize`
     *
     * _CSS property_
     */ maxInlineSize: "none" | "max-content" | "min-content";
    /**
     * ## `minBlockSize`
     *
     * _CSS property_
     */ minBlockSize: "none" | "max-content" | "min-content";
    /**
     * ## `minInlineSize`
     *
     * _CSS property_
     */ minInlineSize: "none" | "max-content" | "min-content";
    /**
     * ## `maxHeight`
     *
     * _CSS property_
     */ maxHeight: "none" | "max-content" | "min-content";
    /**
     * ## `maxWidth`
     *
     * _CSS property_
     */ maxWidth: "none" | "max-content" | "min-content";
    /**
     * ## `minHeight`
     *
     * _CSS property_
     */ minHeight: "none" | "max-content" | "min-content";
    /**
     * ## `minWidth`
     *
     * _CSS property_
     */ minWidth: "none" | "max-content" | "min-content";
    /**
     * ## `mixBlendMode`
     *
     * _CSS property_
     */ mixBlendMode:
        | "normal"
        | "multiply"
        | "screen"
        | "overlay"
        | "darken"
        | "lighten"
        | "color-dodge"
        | "color-burn"
        | "hard-light"
        | "soft-light"
        | "difference"
        | "exclusion"
        | "hue"
        | "saturation"
        | "color"
        | "luminosity";
    /**
     * ## `objectFit`
     *
     * _CSS property_
     */ objectFit: "contain" | "cover" | "fill" | "none" | "scale-down";
    /**
     * ## `objectPosition`
     *
     * _CSS property_
     */ objectPosition: "top" | "bottom" | "left" | "right" | "center";
    /**
     * ## `offset`
     *
     * _CSS property_
     */ offset: "none" | "auto";
    /**
     * ## `offsetAnchor`
     *
     * _CSS property_
     */ offsetAnchor: "top" | "bottom" | "left" | "right" | "center" | "auto";
    /**
     * ## `offsetDistance`
     *
     * _CSS property_
     */ offsetDistance: string;
    /**
     * ## `offsetPath`
     *
     * _CSS property_
     */ offsetPath: "none" | "margin-box" | "stroke-box";
    /**
     * ## `offsetPosition`
     *
     * _CSS property_
     */ offsetPosition: "top" | "bottom" | "left" | "right" | "center" | "auto";
    /**
     * ## `offsetRotate`
     *
     * _CSS property_
     */ offsetRotate: "auto";
    /**
     * ## `opacity`
     *
     * _CSS property_
     */ opacity: string;
    /**
     * ## `order`
     *
     * _CSS property_
     */ order: string;
    /**
     * ## `orphans`
     *
     * _CSS property_
     */ orphans: string;
    /**
     * ## `outline`
     *
     * _CSS property_
     */ outline: string;
    /**
     * ## `outlineColor`
     *
     * _CSS property_
     */ outlineColor: Color;
    /**
     * ## `outlineOffset`
     *
     * _CSS property_
     */ outlineOffset: string;
    /**
     * ## `outlineStyle`
     *
     * _CSS property_
     */ outlineStyle:
        | "auto"
        | "none"
        | "dotted"
        | "dashed"
        | "solid"
        | "double"
        | "groove"
        | "ridge"
        | "inset"
        | "outset";
    /**
     * ## `outlineWidth`
     *
     * _CSS property_
     */ outlineWidth: "thin" | "medium" | "thick";
    /**
     * ## `overflow`
     *
     * _CSS property_
     */ overflow: "visible" | "hidden" | "clip" | "scroll" | "auto";
    /**
     * ## `overflowAnchor`
     *
     * _CSS property_
     */ overflowAnchor: "auto" | "none";
    /**
     * ## `overflowBlock`
     *
     * _CSS property_
     */ overflowBlock: "visible" | "hidden" | "scroll" | "auto";
    /**
     * ## `overflowClipMargin`
     *
     * _CSS property_
     */ overflowClipMargin: string;
    /**
     * ## `overflowInline`
     *
     * _CSS property_
     */ overflowInline: "visible" | "hidden" | "scroll" | "auto";
    /**
     * ## `overflowWrap`
     *
     * _CSS property_
     */ overflowWrap: "normal" | "break-word" | "anywhere";
    /**
     * ## `overflowX`
     *
     * _CSS property_
     */ overflowX: "visible" | "hidden" | "clip" | "scroll" | "auto";
    /**
     * ## `overflowY`
     *
     * _CSS property_
     */ overflowY: "visible" | "hidden" | "clip" | "scroll" | "auto";
    /**
     * ## `overscrollBehavior`
     *
     * _CSS property_
     */ overscrollBehavior: "auto" | "contain" | "none";
    /**
     * ## `overscrollBehaviorBlock`
     *
     * _CSS property_
     */ overscrollBehaviorBlock: "auto" | "contain" | "none";
    /**
     * ## `overscrollBehaviorInline`
     *
     * _CSS property_
     */ overscrollBehaviorInline: "auto" | "contain" | "none";
    /**
     * ## `overscrollBehaviorX`
     *
     * _CSS property_
     */ overscrollBehaviorX: "auto" | "contain" | "none";
    /**
     * ## `overscrollBehaviorY`
     *
     * _CSS property_
     */ overscrollBehaviorY: "auto" | "contain" | "none";
    /**
     * ## `right`
     *
     * _CSS property_
     */ right: "auto";
    /**
     * ## `padding`
     *
     * _CSS property_
     */ padding: string;
    /**
     * ## `paddingBlock`
     *
     * _CSS property_
     */ paddingBlock: string;
    /**
     * ## `paddingBlockEnd`
     *
     * _CSS property_
     */ paddingBlockEnd: string;
    /**
     * ## `paddingBlockStart`
     *
     * _CSS property_
     */ paddingBlockStart: string;
    /**
     * ## `paddingBottom`
     *
     * _CSS property_
     */ paddingBottom: string;
    /**
     * ## `paddingInline`
     *
     * _CSS property_
     */ paddingInline: string;
    /**
     * ## `paddingInlineEnd`
     *
     * _CSS property_
     */ paddingInlineEnd: string;
    /**
     * ## `paddingInlineStart`
     *
     * _CSS property_
     */ paddingInlineStart: string;
    /**
     * ## `paddingLeft`
     *
     * _CSS property_
     */ paddingLeft: string;
    /**
     * ## `paddingRight`
     *
     * _CSS property_
     */ paddingRight: string;
    /**
     * ## `paddingTop`
     *
     * _CSS property_
     */ paddingTop: string;
    /**
     * ## `pageBreakAfter`
     *
     * _CSS property_
     */ pageBreakAfter: string;
    /**
     * ## `pageBreakBefore`
     *
     * _CSS property_
     */ pageBreakBefore: string;
    /**
     * ## `pageBreakInside`
     *
     * _CSS property_
     */ pageBreakInside: string;
    /**
     * ## `perspective`
     *
     * _CSS property_
     */ perspective: "none";
    /**
     * ## `perspectiveOrigin`
     *
     * _CSS property_
     */ perspectiveOrigin: "top" | "center" | "right";
    /**
     * ## `placeContent`
     *
     * _CSS property_
     */ placeContent:
        | "start"
        | "end"
        | "flex-start"
        | "flex-end"
        | "center"
        | "center"
        | "left"
        | "right"
        | "space-between"
        | "baseline"
        | "first baseline"
        | "last baseline"
        | "space-evenly"
        | "stretch"
        | "safe"
        | "unsafe";
    /**
     * ## `placeItems`
     *
     * _CSS property_
     */ placeItems:
        | "start"
        | "end"
        | "flex-start"
        | "flex-end"
        | "center"
        | "center"
        | "left"
        | "right"
        | "space-between"
        | "baseline"
        | "first baseline"
        | "last baseline"
        | "space-evenly"
        | "stretch"
        | "safe"
        | "unsafe"
        | "normal"
        | "legacy"
        | "self-start"
        | "self-end";
    /**
     * ## `pointerEvents`
     *
     * _CSS property_
     */ pointerEvents:
        | "auto"
        | "none"
        | "visiblePainted"
        | "visibleFill"
        | "visibleStroke"
        | "visible"
        | "painted"
        | "fill"
        | "stroke"
        | "all";
    /**
     * ## `position`
     *
     * _CSS property_
     */ position: "static" | "relative" | "absolute" | "fixed" | "sticky";
    /**
     * ## `quotes`
     *
     * _CSS property_
     */ quotes: "none" | "auto";
    /**
     * ## `resize`
     *
     * _CSS property_
     */ resize: string;
    /**
     * ## `rotate`
     *
     * _CSS property_
     */ rotate: "none";
    /**
     * ## `rowGap`
     *
     * _CSS property_
     */ rowGap: string;
    /**
     * ## `rubyAlign`
     *
     * _CSS property_
     */ rubyAlign: "start" | "center" | "space-between" | "space-around";
    /**
     * ## `rubyPosition`
     *
     * _CSS property_
     */ rubyPosition: "over" | "under" | "inter-character" | "alternate";
    /**
     * ## `scale`
     *
     * _CSS property_
     */ scale: string;
    /**
     * ## `scrollBehavior`
     *
     * _CSS property_
     */ scrollBehavior: "auto" | "smooth";
    /**
     * ## `scrollMargin`
     *
     * _CSS property_
     */ scrollMargin: string;
    /**
     * ## `scrollMarginBlock`
     *
     * _CSS property_
     */ scrollMarginBlock: string;
    /**
     * ## `scrollMarginBlockEnd`
     *
     * _CSS property_
     */ scrollMarginBlockEnd: string;
    /**
     * ## `scrollMarginBlockStart`
     *
     * _CSS property_
     */ scrollMarginBlockStart: string;
    /**
     * ## `scrollMarginBottom`
     *
     * _CSS property_
     */ scrollMarginBottom: string;
    /**
     * ## `scrollMarginInline`
     *
     * _CSS property_
     */ scrollMarginInline: string;
    /**
     * ## `scrollMarginInlineEnd`
     *
     * _CSS property_
     */ scrollMarginInlineEnd: string;
    /**
     * ## `scrollMarginInlineStart`
     *
     * _CSS property_
     */ scrollMarginInlineStart: string;
    /**
     * ## `scrollMarginLeft`
     *
     * _CSS property_
     */ scrollMarginLeft: string;
    /**
     * ## `scrollMarginRight`
     *
     * _CSS property_
     */ scrollMarginRight: string;
    /**
     * ## `scrollMarginTop`
     *
     * _CSS property_
     */ scrollMarginTop: string;
    /**
     * ## `scrollPadding`
     *
     * _CSS property_
     */ scrollPadding: string;
    /**
     * ## `scrollPaddingBlock`
     *
     * _CSS property_
     */ scrollPaddingBlock: string;
    /**
     * ## `scrollPaddingBlockEnd`
     *
     * _CSS property_
     */ scrollPaddingBlockEnd: string;
    /**
     * ## `scrollPaddingBlockStart`
     *
     * _CSS property_
     */ scrollPaddingBlockStart: string;
    /**
     * ## `scrollPaddingBottom`
     *
     * _CSS property_
     */ scrollPaddingBottom: string;
    /**
     * ## `scrollPaddingInline`
     *
     * _CSS property_
     */ scrollPaddingInline: string;
    /**
     * ## `scrollPaddingInlineStart`
     *
     * _CSS property_
     */ scrollPaddingInlineStart: string;
    /**
     * ## `scrollPaddingLeft`
     *
     * _CSS property_
     */ scrollPaddingLeft: string;
    /**
     * ## `scrollPaddingRight`
     *
     * _CSS property_
     */ scrollPaddingRight: string;
    /**
     * ## `scrollPaddingTop`
     *
     * _CSS property_
     */ scrollPaddingTop: string;
    /**
     * ## `scrollSnapAlign`
     *
     * _CSS property_
     */ scrollSnapAlign: "none" | "start" | "end" | "center";
    /**
     * ## `scrollSnapStop`
     *
     * _CSS property_
     */ scrollSnapStop: "normal" | "always";
    /**
     * ## `scrollSnapType`
     *
     * _CSS property_
     */ scrollSnapType:
        | "none"
        | "x"
        | "y"
        | "block"
        | "inline"
        | "both"
        | "mandatory"
        | "proximity";
    /**
     * ## `scrollbarColor`
     *
     * _CSS property_
     */ scrollbarColor: Color;
    /**
     * ## `scrollbarGutter`
     *
     * _CSS property_
     */ scrollbarGutter: "auto" | "stable" | "both-edges";
    /**
     * ## `scrollbarWidth`
     *
     * _CSS property_
     */ scrollbarWidth: "auto" | "thin" | "none";
    /**
     * ## `shapeImageThreshold`
     *
     * _CSS property_
     */ shapeImageThreshold: string;
    /**
     * ## `shapeMargin`
     *
     * _CSS property_
     */ shapeMargin: string;
    /**
     * ## `shapeOutside`
     *
     * _CSS property_
     */ shapeOutside:
        | "none"
        | "margin-box"
        | "content-box"
        | "border-box"
        | "padding-box";
    /**
     * ## `tabSize`
     *
     * _CSS property_
     */ tabSize: string;
    /**
     * ## `tableLayout`
     *
     * _CSS property_
     */ tableLayout: "auto" | "fixed";
    /**
     * ## `textAlign`
     *
     * _CSS property_
     */ textAlign:
        | "start"
        | "end"
        | "left"
        | "right"
        | "center"
        | "justify"
        | "justify-all"
        | "match-parent";
    /**
     * ## `textAlignLast`
     *
     * _CSS property_
     */ textAlignLast:
        | "start"
        | "end"
        | "left"
        | "right"
        | "center"
        | "justify";
    /**
     * ## `textCombineUpright`
     *
     * _CSS property_
     */ textCombineUpright: "none" | "all";
    /**
     * ## `textDecoration`
     *
     * _CSS property_
     */ textDecoration: "none";
    /**
     * ## `textDecorationColor`
     *
     * _CSS property_
     */ textDecorationColor: Color;
    /**
     * ## `textDecorationLine`
     *
     * _CSS property_
     */ textDecorationLine:
        | "none"
        | "underline"
        | "overline"
        | "line-through"
        | "blink";
    /**
     * ## `textDecorationSkip`
     *
     * _CSS property_
     */ textDecorationSkip:
        | "none"
        | "objects"
        | "spaces"
        | "edges"
        | "box-decoration"
        | "leading-spaces"
        | "trailing-spaces";
    /**
     * ## `textDecorationSkipInk`
     *
     * _CSS property_
     */ textDecorationSkipInk: "none" | "auto" | "all";
    /**
     * ## `textDecorationStyle`
     *
     * _CSS property_
     */ textDecorationStyle: "solid" | "double" | "dotted" | "dashed" | "wavy";
    /**
     * ## `textDecorationThickness`
     *
     * _CSS property_
     */ textDecorationThickness: "auto" | "from-font";
    /**
     * ## `textEmphasis`
     *
     * _CSS property_
     */ textEmphasis: "none";
    /**
     * ## `textEmphasisColor`
     *
     * _CSS property_
     */ textEmphasisColor: Color;
    /**
     * ## `textEmphasisPosition`
     *
     * _CSS property_
     */ textEmphasisPosition: "over" | "under" | "right" | "left";
    /**
     * ## `textEmphasisStyle`
     *
     * _CSS property_
     */ textEmphasisStyle:
        | "none"
        | "filled"
        | "open"
        | "dot"
        | "circle"
        | "double-circle"
        | "triangle"
        | "sesame";
    /**
     * ## `textIndent`
     *
     * _CSS property_
     */ textIndent: string;
    /**
     * ## `textJustify`
     *
     * _CSS property_
     */ textJustify:
        | "none"
        | "auto"
        | "inter-word"
        | "inter-character"
        | "distribute";
    /**
     * ## `textOrientation`
     *
     * _CSS property_
     */ textOrientation:
        | "mixed"
        | "upright"
        | "sideways-right"
        | "sideways"
        | "use-glyph-orientation";
    /**
     * ## `textOverflow`
     *
     * _CSS property_
     */ textOverflow: "clip" | "ellipsis";
    /**
     * ## `textRendering`
     *
     * _CSS property_
     */ textRendering:
        | "auto"
        | "optimizeSpeed"
        | "optimizeLegibility"
        | "geometricPrecision";
    /**
     * ## `textShadow`
     *
     * _CSS property_
     */ textShadow: string;
    /**
     * ## `textSizeAdjust`
     *
     * _CSS property_
     */ textSizeAdjust: string;
    /**
     * ## `textTransform`
     *
     * _CSS property_
     */ textTransform:
        | "none"
        | "capitalize"
        | "uppercase"
        | "lowercase"
        | "full-width"
        | "full-size-kana";
    /**
     * ## `textUnderlineOffset`
     *
     * _CSS property_
     */ textUnderlineOffset: "auto";
    /**
     * ## `textUnderlinePosition`
     *
     * _CSS property_
     */ textUnderlinePosition: "auto" | "under" | "left" | "right";
    /**
     * ## `top`
     *
     * _CSS property_
     */ top: "auto";
    /**
     * ## `touchAction`
     *
     * _CSS property_
     */ touchAction:
        | "auto"
        | "none"
        | "pan-x"
        | "pan-y"
        | "manipulation"
        | "pinch-zoom";
    /**
     * ## `transform`
     *
     * _CSS property_
     */ transform: string;
    /**
     * ## `transformBox`
     *
     * _CSS property_
     */ transformBox:
        | "content-box"
        | "border-box"
        | "fill-box"
        | "stroke-box"
        | "view-box";
    /**
     * ## `transformOrigin`
     *
     * _CSS property_
     */ transformOrigin: "left" | "center" | "right" | "top" | "bottom";
    /**
     * ## `transformStyle`
     *
     * _CSS property_
     */ transformStyle: "flat" | "preserve-3d";
    /**
     * ## `transition`
     *
     * _CSS property_
     */ transition: string;
    /**
     * ## `transitionDelay`
     *
     * _CSS property_
     */ transitionDelay: string;
    /**
     * ## `transitionDuration`
     *
     * _CSS property_
     */ transitionDuration: string;
    /**
     * ## `transitionProperty`
     *
     * _CSS property_
     */ transitionProperty: string;
    /**
     * ## `transitionTimingFunction`
     *
     * _CSS property_
     */ transitionTimingFunction:
        | "ease"
        | "ease-in"
        | "ease-out"
        | "ease-in-out"
        | "linear"
        | "step-start"
        | "step-end";
    /**
     * ## `translate`
     *
     * _CSS property_
     */ translate: "none";
    /**
     * ## `unicodeBidi`
     *
     * _CSS property_
     */ unicodeBidi: string;
    /**
     * ## `userSelect`
     *
     * _CSS property_
     */ userSelect: "none" | "auto" | "text" | "contain" | "all";
    /**
     * ## `verticalAlign`
     *
     * _CSS property_
     */ verticalAlign:
        | "baseline"
        | "sub"
        | "super"
        | "text-top"
        | "text-bottom"
        | "middle"
        | "top"
        | "bottom";
    /**
     * ## `visibility`
     *
     * _CSS property_
     */ visibility: "visible" | "hidden" | "collapse";
    /**
     * ## `whiteSpace`
     *
     * _CSS property_
     */ whiteSpace:
        | "normal"
        | "nowrap"
        | "pre"
        | "pre-wrap"
        | "pre-line"
        | "break-spaces";
    /**
     * ## `width`
     *
     * _CSS property_
     */ width: "max-content" | "min-content" | "auto";
    /**
     * ## `widows`
     *
     * _CSS property_
     */ widows: string;
    /**
     * ## `wordBreak`
     *
     * _CSS property_
     */ wordBreak: "normal" | "break-all" | "keep-all" | "break-word";
    /**
     * ## `wordSpacing`
     *
     * _CSS property_
     */ wordSpacing: "normal";
    /**
     * ## `wordWrap`
     *
     * _CSS property_
     */ wordWrap: "normal" | "break-word" | "anywhere";
    /**
     * ## `writingMode`
     *
     * _CSS property_
     */ writingMode: "horizontal-tb" | "vertical-rl" | "vertical-lr";
    /**
     * ## `zIndex`
     *
     * _CSS property_
     */ zIndex: "auto";
    /**
     * ## `zoom`
     *
     * _CSS property_
     */ zoom: string;
    /**
     * ## `webkitLineClamp`
     *
     * _CSS property_
     */ webkitLineClamp: string;
    /**
     * ## `webkitAppearance`
     *
     * _CSS property_
     */ webkitAppearance: string;
    /**
     * ## `webkitTextEmphasis`
     *
     * _CSS property_
     */ webkitTextEmphasis: string;
    /**
     * ## `webkitHyphens`
     *
     * _CSS property_
     */ webkitHyphens: string;
    /**
     * ## `mozAppearance`
     *
     * _CSS property_
     */ mozAppearance: string;
    /**
     * ## `mozTabSize`
     *
     * _CSS property_
     */ mozTabSize: string;
    /**
     * ## `mozHyphens`
     *
     * _CSS property_
     */ mozHyphens: string;
    /**
     * ## `oTabSize`
     *
     * _CSS property_
     */ oTabSize: string;
    /**
     * ## `msHyphens`
     *
     * _CSS property_
     */ msHyphens: string;
    /**
     * ## `alignmentBaseline`
     *
     * _CSS property_
     */ alignmentBaseline: string;
    /**
     * ## `baselineShift`
     *
     * _CSS property_
     */ baselineShift: string;
    /**
     * ## `clipRule`
     *
     * _CSS property_
     */ clipRule: string;
    /**
     * ## `colorInterpolation`
     *
     * _CSS property_
     */ colorInterpolation: string;
    /**
     * ## `colorInterpolationFilter`
     *
     * _CSS property_
     */ colorInterpolationFilter: string;
    /**
     * ## `colorProfile`
     *
     * _CSS property_
     */ colorProfile: string;
    /**
     * ## `colorRendering`
     *
     * _CSS property_
     */ colorRendering: string;
    /**
     * ## `dominantBaseline`
     *
     * _CSS property_
     */ dominantBaseline: string;
    /**
     * ## `enableBackground`
     *
     * _CSS property_
     */ enableBackground: string;
    /**
     * ## `fill`
     *
     * _CSS property_
     */ fill: string;
    /**
     * ## `fillOpacity`
     *
     * _CSS property_
     */ fillOpacity: string;
    /**
     * ## `fillRule`
     *
     * _CSS property_
     */ fillRule: string;
    /**
     * ## `floodColor`
     *
     * _CSS property_
     */ floodColor: string;
    /**
     * ## `floodOpacity`
     *
     * _CSS property_
     */ floodOpacity: string;
    /**
     * ## `glyphOrientationHorizontal`
     *
     * _CSS property_
     */ glyphOrientationHorizontal: string;
    /**
     * ## `glyphOrientationVertical`
     *
     * _CSS property_
     */ glyphOrientationVertical: string;
    /**
     * ## `lightingColor`
     *
     * _CSS property_
     */ lightingColor: string;
    /**
     * ## `markerEnd`
     *
     * _CSS property_
     */ markerEnd: string;
    /**
     * ## `markerMid`
     *
     * _CSS property_
     */ markerMid: string;
    /**
     * ## `markerStart`
     *
     * _CSS property_
     */ markerStart: string;
    /**
     * ## `shapeRendering`
     *
     * _CSS property_
     */ shapeRendering: string;
    /**
     * ## `stopColor`
     *
     * _CSS property_
     */ stopColor: string;
    /**
     * ## `stopOpacity`
     *
     * _CSS property_
     */ stopOpacity: string;
    /**
     * ## `stroke`
     *
     * _CSS property_
     */ stroke: string;
    /**
     * ## `strokeDasharray`
     *
     * _CSS property_
     */ strokeDasharray: string;
    /**
     * ## `strokeDashoffset`
     *
     * _CSS property_
     */ strokeDashoffset: string;
    /**
     * ## `strokeLinecap`
     *
     * _CSS property_
     */ strokeLinecap: string;
    /**
     * ## `strokeLinejoin`
     *
     * _CSS property_
     */ strokeLinejoin: string;
    /**
     * ## `strokeMiterlimit`
     *
     * _CSS property_
     */ strokeMiterlimit: string;
    /**
     * ## `strokeOpacity`
     *
     * _CSS property_
     */ strokeOpacity: string;
    /**
     * ## `strokeWidth`
     *
     * _CSS property_
     */ strokeWidth: string;
    /**
     * ## `textAnchor`
     *
     * _CSS property_
     */ textAnchor: string;
    /**
     * ## `vectorEffect`
     *
     * _CSS property_
     */ vectorEffect: string;
}

export interface SelectorTypes {
    /**
     * ## ``.element``
     * Define style for the normal state of the element. */
    normal: Selector;
    /**
     * ## ``:active ``
     * Define style for the element when clicked.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:active} */
    active: Selector;
    /**
     * ## ``:any-link ``
     * Define the style that represents an element
     * that acts as the source anchor of a hyperlink,
     * independent of whether it has been visited.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:any-link} */
    anyLink: Selector;
    /**
     * ## `:autofill `
     * The :autofill CSS pseudo-class matches when an ``<input>``
     * element has its value autofilled by the browser.
     * The class stops matching if the user edits the field.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:autofill} */
    autofill: Selector;
    /**
     * ## ``:checked ``
     * The ``:checked`` CSS pseudo-class selector represents any radio
     * (`<input type="radio">`), checkbox (``<input type="checkbox">``),
     * or option (``<option>`` in a ``<select>``)
     * element that is checked or toggled to an on state.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:checked} */
    checked: Selector;
    /**
     * ## ``:default ``
     * The :default CSS pseudo-class selects
     * form elements that are the default in a group of related elements.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:default} */
    default: Selector;
    /**
     * ## `:defined `
     * The :defined CSS pseudo-class
     * represents any element that has been defined.
     * This includes any standard element built in to the browser,
     * and custom elements that have been successfully defined
     * (i.e. with the CustomElementRegistry.define() method).
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:defined} */
    defined: Selector;
    /**
     * ## `:disabled `
     * The :disabled CSS pseudo-class represents any disabled element.
     * An element is disabled if it can't be activated
     * (selected, clicked on, typed into, etc.) or accept focus.
     * The element also has an enabled state,
     * in which it can be activated or accept focus.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled} */
    disabled: Selector;
    /**
     * ## `:empty `
     * The :empty CSS pseudo-class represents any element that has no children.
     * Children can be either element nodes or text (including whitespace).
     * Comments, processing instructions,
     * and CSS content do not affect whether an element is considered empty.
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:empty} */
    empty: Selector;
    /**
     * ## `:enabled `
     * The :enabled CSS pseudo-class represents any enabled element.
     * An element is enabled if it can be activated
     * (selected, clicked on, typed into, etc.) or accept focus.
     * The element also has a disabled state,
     * in which it can't be activated or accept focus.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:enabled} */
    enabled: Selector;
    /**
     * ## `:first `
     * The :first CSS pseudo-class, used with the ``@page`` at-rule,
     * represents the first page of a printed document.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:first} */
    first: Selector;
    /**
     * ## `:first-child `
     * The :first-child CSS pseudo-class
     * represents the first element among a group of sibling elements.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child} */
    firstChild: Selector;
    /**
     * ## `:first-of-type `
     * The :first-of-type CSS pseudo-class represents
     * the first element of its type among a group of sibling elements.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:first-of-type} */
    firstOfType: Selector;
    /**
     * ## `:fullscreen `
     * The :fullscreen CSS pseudo-class
     * matches every element which is currently in fullscreen mode.
     * If multiple elements have been put into fullscreen mode,
     * this selects them all.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:fullscreen} */
    fullscreen: Selector;
    /**
     * ## `:focus `
     * The :focus CSS pseudo-class represents an element
     * (such as a form input) that has received focus.
     * It is generally triggered when the user clicks
     * or taps on an element or selects it with the keyboard's Tab key.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:focus} */
    focus: Selector;
    /**
     * ## `focus-visible`
     * The :focus-visible pseudo-class applies
     * while an element matches the :focus pseudo-class and the UA (User Agent)
     * determines via heuristics that the focus should be made evident on the element.
     * (Many browsers show a "focus ring" by default in this case.)
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible} */
    focusVisible: Selector;
    /**
     * ## `:focus-within`
     * The :focus-within CSS pseudo-class
     * matches an element if the element or any of its descendants are focused.
     * In other words, it represents an element that is itself matched
     * by the :focus pseudo-class or has a descendant that is matched
     * by :focus. (This includes descendants in shadow trees.)
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within} */
    focusWithin: Selector;
    /**
     * ## `:host`
     * The :host CSS pseudo-class
     * selects the shadow host of the shadow DOM
     * containing the CSS it is used inside — in other words,
     * this allows you to select a custom element from inside its shadow DOM.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:host} */
    host: Selector;
    /**
     * ## `:hover`
     * The :hover CSS pseudo-class
     * matches when the user interacts with an element with a pointing device,
     * but does not necessarily activate it.
     * It is generally triggered
     * when the user hovers over an element with the cursor (mouse pointer). */
    hover: Selector;
    /**
     * ## `:indeterminate`
     * The :indeterminate CSS pseudo-class
     * represents any form element whose state is indeterminate,
     * such as checkboxes which have their HTML indeterminate attribute set to true,
     * radio buttons which are members of a group in which all radio buttons are unchecked,
     * and indeterminate ``<progress>`` elements. */
    indeterminate: Selector;
    /**
     * `:in-range`
     * The :in-range CSS pseudo-class represents an ``<input>`` element
     * whose current value is within the range limits specified by the min and max attributes. */
    inRange: Selector;
    /**
     * ## `:invalid`
     * The :invalid CSS pseudo-class represents
     * any ``<form>``, ``<fieldset>``, ``<input>``
     * or other ``<form>`` element whose contents fail to validate. */
    invalid: Selector;
    /**
     * ## `:last-child`
     * The :last-child CSS pseudo-class
     * represents the last element among a group of sibling elements. */
    lastChild: Selector;
    /**
     * ## `:last-of-type`
     * The :last-of-type CSS pseudo-class
     * represents the last element of its type among a group of sibling elements. */
    lastOfType: Selector;
    /**
     * ## `:left`
     * The :left CSS pseudo-class,
     * used with the ``@page`` at-rule,
     * represents all left-hand pages of a printed document. */
    left: Selector;
    /**
     * ## `:link`
     * The :link CSS pseudo-class
     * represents an element that has not yet been visited.
     * It matches every unvisited ``<a>`` or ``<area>`` element
     * that has an href attribute. */
    link: Selector;
    /**
     * ## `:modal`
     * The :modal CSS pseudo-class
     * matches an element that is in a state
     * in which it excludes all interaction
     * with elements outside it until
     * the interaction has been dismissed.
     * Multiple elements can be selected
     * by the :modal pseudo-class at the same time,
     * but only one of them will be active and able to receive input. */
    modal: Selector;
    /**
     * ## `:only-child`
     * The :only-child CSS pseudo-class
     * represents an element without any siblings.
     * This is the same as :first-child:last-child
     * or :nth-child(1):nth-last-child(1),
     * but with a lower specificity. */
    onlyChild: Selector;
    /**
     * ## `:only-of-type`
     * The :only-of-type CSS pseudo-class
     * represents an element that has no siblings of the same type. */
    onlyOfType: Selector;
    /**
     * ## `:optional`
     * The :optional CSS pseudo-class represents any ``<input>``
     * ``<select>``, or ``<textarea>`` element
     * that does not have the required attribute set on it. */
    optional: Selector;
    /**
     * ## `:out-of-range`
     * The :out-of-range CSS pseudo-class
     * represents an ``<input>`` element whose current value
     * is outside the range limits specified
     * by the min and max attributes. */
    outOfRange: Selector;
    /**
     * ## `:picture-in-picture`
     * The :picture-in-picture CSS pseudo-class
     * matches the element which is currently
     * in picture-in-picture mode. */
    pictureInPicutre: Selector;
    /**
     * ## `:placeholder-shown`
     * The :placeholder-shown CSS pseudo-class
     * represents any ``<input>`` or ``<textarea>`` element
     * that is currently displaying placeholder text. */
    placeholderShown: Selector;
    /**
     * ## `:read-only`
     * The :read-only CSS pseudo-class
     * represents an element (such as input or textarea)
     * that is not editable by the user. */
    readOnly: Selector;
    /**
     * ## `:read-write`
     * The :read-write CSS pseudo-class
     * represents an element (such as input or textarea)
     * that is editable by the user. */
    readWrite: Selector;
    /**
     * ## `:required`
     * The :required CSS pseudo-class
     * represents any ``<input>``, ``<select>``, or ``<textarea>`` element
     * that has the required attribute set on it. */
    required: Selector;
    /**
     * ## `:scope`
     * The :scope CSS pseudo-class
     * represents elements that are a reference point
     * for selectors to match against. */
    scope: Selector;
    /**
     * ## `:target`
     * The :target CSS pseudo-class
     * represents a unique element (the target element)
     * with an id matching the URL's fragment. */
    target: Selector;
    /**
     * ## `:valid`
     * The :valid CSS pseudo-class
     * represents any ``<input>`` or other ``<form>`` element
     * whose contents validate successfully.
     * This allows to easily make valid fields
     * adopt an appearance that helps the user confirm
     * that their data is formatted properly. */
    valid: Selector;
    /**
     * ## `:visited`
     * The :visited CSS pseudo-class
     * represents links that the user has already visited.
     * For privacy reasons,
     * the styles that can be modified
     * using this selector are very limited. */
    visited: Selector;
    /**
     * ## `::after`
     * In CSS, ::after creates a pseudo-element
     * that is the last child of the selected element.
     * It is often used to add cosmetic content
     * to an element with the content property.
     * It is inline by default. */
    after: Selector;
    /**
     * ## `::before`
     * In CSS, ::before creates a pseudo-element
     * that is the first child of the selected element.
     * It is often used to add cosmetic content
     * to an element with the content property.
     * It is inline by default. */
    before: Selector;
    /**
     * ## `::cue`
     * The ::cue CSS pseudo-element matches WebVTT cues
     * within a selected element.
     * This can be used to style captions
     * and other cues in media with VTT tracks. */
    cue: Selector;
    /**
     * ## `::first-letter`
     * The ::first-letter CSS pseudo-element
     * applies styles to the first letter
     * of the first line of a block-level element,
     * but only when not preceded by other content
     * (such as images or inline tables). */
    firstLetter: Selector;
    /**
     * ## `::first-line`
     * The ::first-line CSS pseudo-element
     * applies styles to the first line of a block-level element. */
    firstLine: Selector;
    /**
     * ## `::file-selector-button`
     * The ::file-selector-button CSS pseudo-element
     * represents the button of an ``<input>`` of type="file". */
    fileSelectorButton: Selector;
    /**
     * ## `::placeholder`
     * The ::placeholder CSS pseudo-element
     * represents the placeholder text in
     * an ``<input>`` or ``<textarea>`` element. */
    placeholder: Selector;
    /**
     * ## `::selection`
     * The ::selection CSS pseudo-element
     * applies styles to the part of a document
     * that has been highlighted by the user
     * (such as clicking and dragging the mouse across text). */
    selection: Selector;
    /**
     * ## `::marker`
     * The ::marker CSS pseudo-element selects the marker box
     * of a list item, which typically contains a bullet or number.
     * It works on any element or pseudo-element set
     * to display: list-item,
     * such as the ``<li> ``and ``<summary>`` elements. */
    marker: Selector;
    /**  */
    webkitScrollbar: Selector;
    /**  */
    webkitScrollbarTrack: Selector;
    /**  */
    webkitScrollbarThumb: Selector;
    /**  */
    webkitScrollbarThumbHover: Selector;
    /**  */
    webkitScrollbarThumbActive: Selector;
}

export interface Events {
    /**
     * ## `onAbort` Event
     */ onAbort: (event: Event) => void;
    /**
     * ## `onAnimationEnd` Event
     */ onAnimationEnd: (event: Event) => void;
    /**
     * ## `onAnimationIteration` Event
     */ onAnimationIteration: (event: Event) => void;
    /**
     * ## `onAnimationStart` Event
     */ onAnimationStart: (event: Event) => void;
    /**
     * ## `onBeforePrint` Event
     */ onBeforePrint: (event: Event) => void;
    /**
     * ## `onBeforeUnload` Event
     */ onBeforeUnload: (event: Event) => void;
    /**
     * ## `onBlur` Event
     */ onBlur: (event: Event) => void;
    /**
     * ## `onCanPlay` Event
     */ onCanPlay: (event: Event) => void;
    /**
     * ## `onCanPlayThrough` Event
     */ onCanPlayThrough: (event: Event) => void;
    /**
     * ## `onChange` Event
     */ onChange: (event: Event) => void;
    /**
     * ## `onContextMenu` Event
     */ onContextMenu: (event: Event) => void;
    /**
     * ## `onCopy` Event
     */ onCopy: (event: Event) => void;
    /**
     * ## `onCut` Event
     */ onCut: (event: Event) => void;
    /**
     * ## `onDurationChange` Event
     */ onDurationChange: (event: Event) => void;
    /**
     * ## `onEnded` Event
     */ onEnded: (event: Event) => void;
    /**
     * ## `onError` Event
     */ onError: (event: Event) => void;
    /**
     * ## `onFocus` Event
     */ onFocus: (event: Event) => void;
    /**
     * ## `onFocusIn` Event
     */ onFocusIn: (event: Event) => void;
    /**
     * ## `onFocusOut` Event
     */ onFocusOut: (event: Event) => void;
    /**
     * ## `onFullScreenChange` Event
     */ onFullScreenChange: (event: Event) => void;
    /**
     * ## `onHashChange` Event
     */ onHashChange: (event: Event) => void;
    /**
     * ## `onInvalid` Event
     */ onInvalid: (event: Event) => void;
    /**
     * ## `onLoad` Event
     */ onLoad: (event: Event) => void;
    /**
     * ## `onLoadedData` Event
     */ onLoadedData: (event: Event) => void;
    /**
     * ## `onLoadedMetaData` Event
     */ onLoadedMetaData: (event: Event) => void;
    /**
     * ## `onLoadStart` Event
     */ onLoadStart: (event: Event) => void;
    /**
     * ## `onMessage` Event
     */ onMessage: (event: Event) => void;
    /**
     * ## `onOffline` Event
     */ onOffline: (event: Event) => void;
    /**
     * ## `onOnline` Event
     */ onOnline: (event: Event) => void;
    /**
     * ## `onOpen` Event
     */ onOpen: (event: Event) => void;
    /**
     * ## `onPageHide` Event
     */ onPageHide: (event: Event) => void;
    /**
     * ## `onPageShow` Event
     */ onPageShow: (event: Event) => void;
    /**
     * ## `onPaste` Event
     */ onPaste: (event: Event) => void;
    /**
     * ## `onPause` Event
     */ onPause: (event: Event) => void;
    /**
     * ## `onPlay` Event
     */ onPlay: (event: Event) => void;
    /**
     * ## `onPlaying` Event
     */ onPlaying: (event: Event) => void;
    /**
     * ## `onProgress` Event
     */ onProgress: (event: Event) => void;
    /**
     * ## `onRateChange` Event
     */ onRateChange: (event: Event) => void;
    /**
     * ## `onResize` Event
     */ onResize: (event: Event) => void;
    /**
     * ## `onReset` Event
     */ onReset: (event: Event) => void;
    /**
     * ## `onScroll` Event
     */ onScroll: (event: Event) => void;
    /**
     * ## `onSearch` Event
     */ onSearch: (event: Event) => void;
    /**
     * ## `onSeeked` Event
     */ onSeeked: (event: Event) => void;
    /**
     * ## `onSeeking` Event
     */ onSeeking: (event: Event) => void;
    /**
     * ## `onSelect` Event
     */ onSelect: (event: Event) => void;
    /**
     * ## `onSelectionChange` Event
     */ onSelectionChange: (event: Event) => void;
    /**
     * ## `onShow` Event
     */ onShow: (event: Event) => void;
    /**
     * ## `onStalled` Event
     */ onStalled: (event: Event) => void;
    /**
     * ## `onStorage` Event
     */ onStorage: (event: Event) => void;
    /**
     * ## `onSubmit` Event
     */ onSubmit: (event: Event) => void;
    /**
     * ## `onSuspend` Event
     */ onSuspend: (event: Event) => void;
    /**
     * ## `onTimeUpdate` Event
     */ onTimeUpdate: (event: Event) => void;
    /**
     * ## `onToggle` Event
     */ onToggle: (event: Event) => void;
    /**
     * ## `onTransitionEnd` Event
     */ onTransitionEnd: (event: Event) => void;
    /**
     * ## `onUnload` Event
     */ onUnload: (event: Event) => void;
    /**
     * ## `onVolumeChange` Event
     */ onVolumeChange: (event: Event) => void;
    /**
     * ## `onWaiting` Event
     */ onWaiting: (event: Event) => void;
    /**
     * ## `onWheel` Event
     */ onWheel: (event: WheelEvent) => void;
    /**
     * ## `onInput` Event
     */ onInput: (event: InputEvent) => void;
    /**
     * ## `onDrag` Event
     */ onDrag: (event: DragEvent) => void;
    /**
     * ## `onDragEnd` Event
     */ onDragEnd: (event: DragEvent) => void;
    /**
     * ## `onDragEnter` Event
     */ onDragEnter: (event: DragEvent) => void;
    /**
     * ## `onDragLeave` Event
     */ onDragLeave: (event: DragEvent) => void;
    /**
     * ## `onDragOver` Event
     */ onDragOver: (event: DragEvent) => void;
    /**
     * ## `onDragStart` Event
     */ onDragStart: (event: DragEvent) => void;
    /**
     * ## `onDrop` Event
     */ onDrop: (event: DragEvent) => void;
    /**
     * ## `onKeyDown` Event
     */ onKeyDown: (event: KeyboardEvent) => void;
    /**
     * ## `onKeyPress` Event
     */ onKeyPress: (event: KeyboardEvent) => void;
    /**
     * ## `onKeyUp` Event
     */ onKeyUp: (event: KeyboardEvent) => void;
    /**
     * ## `onClick` Event
     */ onClick: (event: MouseEvent) => void;
    /**
     * ## `onDoubleClick` Event
     */ onDoubleClick: (event: MouseEvent) => void;
    /**
     * ## `onMouseDown` Event
     */ onMouseDown: (event: MouseEvent) => void;
    /**
     * ## `onMouseEnter` Event
     */ onMouseEnter: (event: MouseEvent) => void;
    /**
     * ## `onMouseLeave` Event
     */ onMouseLeave: (event: MouseEvent) => void;
    /**
     * ## `onMouseMove` Event
     */ onMouseMove: (event: MouseEvent) => void;
    /**
     * ## `onMouseOver` Event
     */ onMouseOver: (event: MouseEvent) => void;
    /**
     * ## `onMouseOut` Event
     */ onMouseOut: (event: MouseEvent) => void;
    /**
     * ## `onMouseUp` Event
     */ onMouseUp: (event: MouseEvent) => void;
    /**
     * ## `onPointerOver` Event
     */ onPointerOver: (event: PointerEvent) => void;
    /**
     * ## `onPointerEnter` Event
     */ onPointerEnter: (event: PointerEvent) => void;
    /**
     * ## `onPointerDown` Event
     */ onPointerDown: (event: PointerEvent) => void;
    /**
     * ## `onPointerMove` Event
     */ onPointerMove: (event: PointerEvent) => void;
    /**
     * ## `onPointerUp` Event
     */ onPointerUp: (event: PointerEvent) => void;
    /**
     * ## `onPointerCancel` Event
     */ onPointerCancel: (event: PointerEvent) => void;
    /**
     * ## `onPointerOut` Event
     */ onPointerOut: (event: PointerEvent) => void;
    /**
     * ## `onPointerLeave` Event
     */ onPointerLeave: (event: PointerEvent) => void;
    /**
     * ## `onGotPointerCapture` Event
     */ onGotPointerCapture: (event: PointerEvent) => void;
    /**
     * ## `onLostPointerCapture` Event
     */ onLostPointerCapture: (event: PointerEvent) => void;
    /**
     * ## `onTouchCancel` Event
     */ onTouchCancel: (event: TouchEvent) => void;
    /**
     * ## `onTouchEnd` Event
     */ onTouchEnd: (event: TouchEvent) => void;
    /**
     * ## `onTouchMove` Event
     */ onTouchMove: (event: TouchEvent) => void;
    /**
     * ## `onTouchStart` Event
     */ onTouchStart: (event: TouchEvent) => void;
    /**
     * ## `onClickGlobal` Event
     */ onClickGlobal: (event: PointerEvent) => void;
    /**
     * ## `onResizeGlobal` Event
     */ onResizeGlobal: (event: Event) => void;
    /**
     * ## `onKeyUpGlobal` Event
     */ onKeyUpGlobal: (event: KeyboardEvent) => void;
    /**
     * ## `onKeyDownGlobal` Event
     */ onKeyDownGlobal: (event: KeyboardEvent) => void;
    /**
     * ## `onContextMenuGlobal` Event
     */ onContextMenuGlobal: (event: PointerEvent) => void;
    /**
     * ## `onScrollGlobal` Event
     */ onScrollGlobal: (event: Event) => void;
    /**
     * ## `onBeforeUnloadGlobal` Event
     */ onBeforeUnloadGlobal: (event: BeforeUnloadEvent) => void;
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
export interface AddressProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface ArticleProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface AsideProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface FooterProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface HeaderProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface H1Props extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface H2Props extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface H3Props extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface H4Props extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface H5Props extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface H6Props extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface MainProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface NavProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface SectionProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface BlockquoteProps
    extends CommonAttributes,
        Events,
        HTMLAttributes {
    /**
     * ### _`cite` Attribute_
     *
     * Contains a URI which points to the source of the quote or change.
     * @used  `blockquote` `del` `ins` `q`
     */
    cite: string;
    children: Array<RecursiveElement>;
}

export interface DdProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface DivProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface DlProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface DtProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface FigcaptionProps
    extends CommonAttributes,
        Events,
        HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface FigureProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface HrProps extends CommonAttributes, Events, HTMLAttributes {
    /**
     * ### _`align` Attribute_
     *
     * Specifies the horizontal alignment of the element.
     * @used  `applet` `caption` `col` `colgroup` `hr` `iframe` `img` `table` `tbody` `td` `tfoot` `th` `thead` `tr`
     */
    align: string;
    /**
     * ### _`color` Attribute_
     *
     * This attribute sets the text color using either a named color or a color specified in the hexadecimal #RRGGBB format.
     * @used  `font` `hr`
     */
    color: string;
    /**
     * ### _`noshade` Attribute_
     *
     * The HTML ``<hr>`` noshade Attribute is the boolean value and used to specify the solid horizontal line instead of shaded lines.
     * @used  `hr`
     */
    noShade: boolean;
    /**
     * ### _`size` Attribute_
     *
     * Defines the width of the element (in pixels). If the element's type attribute is text or password then it's the number of characters.
     * @used  `input` `select`
     */
    size: string;
    /**
     * ### _`width` Attribute_
     *
     * For the elements listed here, this establishes the element's width.
     * @used  `canvas` `embed` `iframe` `img` `input` `object` `video`
     */
    width: string;
}

export interface LiProps extends CommonAttributes, Events, HTMLAttributes {
    /**
     * ### _`value` Attribute_
     *
     * @used  `button` `data` `input` `li` `meter` `option` `progress` `param`
     */
    value: string;
    /**
     * ### _`type` Attribute_
     *
     * Defines the type of the element.
     * @used  `button` `input` `command` `embed` `object` `script` `source` `styles` `menu` `link`
     */
    type: string;
    children: Array<RecursiveElement>;
}

export interface MenuProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface OlProps extends CommonAttributes, Events, HTMLAttributes {
    /**
     * ### _`reversed` Attribute_
     *
     * Indicates whether the list should be displayed in a descending order instead of a ascending.
     * @used  `ol`
     */
    reversed: boolean;
    /**
     * ### _`start` Attribute_
     *
     * Defines the first number if other than 1.
     * @used  `ol`
     */
    start: string;
    /**
     * ### _`type` Attribute_
     *
     * Defines the type of the element.
     * @used  `button` `input` `command` `embed` `object` `script` `source` `styles` `menu` `link`
     */
    type: string;
    children: Array<RecursiveElement>;
}

export interface PProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface PreProps extends CommonAttributes, Events, HTMLAttributes {
    /**
     * ### _`cols` Attribute_
     *
     * Defines the number of columns in a textarea.
     * @used  `textarea`
     */
    cols: number;
    /**
     * ### _`width` Attribute_
     *
     * For the elements listed here, this establishes the element's width.
     * @used  `canvas` `embed` `iframe` `img` `input` `object` `video`
     */
    width: string;
    /**
     * ### _`wrap` Attribute_
     *
     * Indicates whether the text should be wrapped.
     * @used  `textarea`
     */
    wrap: "hard" | "soft" | "off";
    children: Array<RecursiveElement>;
}

export interface UlProps extends CommonAttributes, Events, HTMLAttributes {
    /**
     * ### _`compact` Attribute_
     *
     * @used Global attribute
     */
    compact: string;
    /**
     * ### _`type` Attribute_
     *
     * Defines the type of the element.
     * @used  `button` `input` `command` `embed` `object` `script` `source` `styles` `menu` `link`
     */
    type: string;
    children: Array<RecursiveElement>;
}

export interface AProps extends CommonAttributes, Events, HTMLAttributes {
    /**
     * ### _`download` Attribute_
     *
     * Indicates that the hyperlink is to be used for downloading a resource.
     * @used  `a` `area`
     */
    download: string;
    /**
     * ### _`href` Attribute_
     *
     * The URL of a linked resource.
     * @used  `a` `area` `base` `link`
     */
    href: string;
    /**
     * ### _`hreflang` Attribute_
     *
     * Specifies the language of the linked resource.
     * @used  `a` `area` `link`
     */
    hrefLang: string;
    /**
     * ### _`ping` Attribute_
     *
     * The ping attribute specifies a space-separated list of URLs to be notified if a user follows the hyperlink.
     * @used  `a` `area`
     */
    ping: string;
    /**
     * ### _`referrerpolicy` Attribute_
     *
     * Specifies which referrer is sent when fetching the resource.
     * @used  `a` `area` `iframe` `img` `link` `script`
     */
    referrerPolicy:
        | "no-referrer"
        | "no-referrer-when-downgrade"
        | "origin"
        | "origin-when-cross-origin"
        | "same-origin"
        | "strict-origin"
        | "strict-origin-when-cross-origin"
        | "unsafe-url";
    /**
     * ### _`rel` Attribute_
     *
     * Specifies the relationship of the target object to the link object.
     * @used  `a` `area` `link`
     */
    rel:
        | "alternate"
        | "author"
        | "bookmark"
        | "canonical"
        | "dns-prefetch"
        | "external"
        | "help"
        | "icon"
        | "license"
        | "manifest"
        | "me"
        | "modulepreload"
        | "next"
        | "nofollow"
        | "noopener"
        | "noreferrer"
        | "opener"
        | "pingback"
        | "preconnect"
        | "prefetch"
        | "preload"
        | "prerender"
        | "prev"
        | "search"
        | "stylesheet"
        | "tag";
    /**
     * ### _`target` Attribute_
     *
     * Specifies where to open the linked document (in the case of an ``<a>`` element) or where to display the response received (in the case of a ``<form>`` element)
     * @used  `a` `area` `base` `form`
     */
    target: "_self" | "_blank" | "_parent" | "_top";
    /**
     * ### _`type` Attribute_
     *
     * Defines the type of the element.
     * @used  `button` `input` `command` `embed` `object` `script` `source` `styles` `menu` `link`
     */
    type: string;
    children: Array<RecursiveElement>;
}

export interface AbbrProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface BProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface BdiProps extends CommonAttributes, Events, HTMLAttributes {
    /**
     * ### _`dir` Attribute_
     *
     * Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)
     * @used Global attribute
     */
    dir: "ltr" | "rtl" | "auto";
    children: Array<RecursiveElement>;
}

export interface BdoProps extends CommonAttributes, Events, HTMLAttributes {
    /**
     * ### _`dir` Attribute_
     *
     * Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)
     * @used Global attribute
     */
    dir: "ltr" | "rtl" | "auto";
    children: Array<RecursiveElement>;
}

export interface BrProps extends CommonAttributes, Events, HTMLAttributes {}

export interface CiteProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface CodeProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface DataProps extends CommonAttributes, Events, HTMLAttributes {
    /**
     * ### _`value` Attribute_
     *
     * @used  `button` `data` `input` `li` `meter` `option` `progress` `param`
     */
    value: string;
    children: Array<RecursiveElement>;
}

export interface DfnProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface EmProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface IProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface KbdProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface MarkProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface QProps extends CommonAttributes, Events, HTMLAttributes {
    /**
     * ### _`cite` Attribute_
     *
     * Contains a URI which points to the source of the quote or change.
     * @used  `blockquote` `del` `ins` `q`
     */
    cite: string;
    children: Array<RecursiveElement>;
}

export interface RpProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface RtProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface RubyProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface SProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface SampProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface SmallProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface SpanProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface StrongProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface SubProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface SupProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface TimeProps extends CommonAttributes, Events, HTMLAttributes {
    /**
     * ### _`datetime` Attribute_
     *
     * Indicates the date and time associated with the element.
     * @used  `del` `ins` `time`
     */
    dateTime: string;
    children: Array<RecursiveElement>;
}

export interface UProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface VarProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface WbrProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface AreaProps extends CommonAttributes, Events, HTMLAttributes {
    /**
     * ### _`alt` Attribute_
     *
     * Alternative text in case an image can't be displayed.
     * @used  `applet` `area` `img` `input`
     */
    alt: string;
    /**
     * ### _`coords` Attribute_
     *
     * A set of values specifying the coordinates of the hot-spot region.
     * @used  `area`
     */
    coords: string;
    /**
     * ### _`download` Attribute_
     *
     * Indicates that the hyperlink is to be used for downloading a resource.
     * @used  `a` `area`
     */
    download: string;
    /**
     * ### _`href` Attribute_
     *
     * The URL of a linked resource.
     * @used  `a` `area` `base` `link`
     */
    href: string;
    /**
     * ### _`hreflang` Attribute_
     *
     * Specifies the language of the linked resource.
     * @used  `a` `area` `link`
     */
    hrefLang: string;
    /**
     * ### _`ping` Attribute_
     *
     * The ping attribute specifies a space-separated list of URLs to be notified if a user follows the hyperlink.
     * @used  `a` `area`
     */
    ping: string;
    /**
     * ### _`referrerpolicy` Attribute_
     *
     * Specifies which referrer is sent when fetching the resource.
     * @used  `a` `area` `iframe` `img` `link` `script`
     */
    referrerPolicy:
        | "no-referrer"
        | "no-referrer-when-downgrade"
        | "origin"
        | "origin-when-cross-origin"
        | "same-origin"
        | "strict-origin"
        | "strict-origin-when-cross-origin"
        | "unsafe-url";
    /**
     * ### _`rel` Attribute_
     *
     * Specifies the relationship of the target object to the link object.
     * @used  `a` `area` `link`
     */
    rel:
        | "alternate"
        | "author"
        | "bookmark"
        | "canonical"
        | "dns-prefetch"
        | "external"
        | "help"
        | "icon"
        | "license"
        | "manifest"
        | "me"
        | "modulepreload"
        | "next"
        | "nofollow"
        | "noopener"
        | "noreferrer"
        | "opener"
        | "pingback"
        | "preconnect"
        | "prefetch"
        | "preload"
        | "prerender"
        | "prev"
        | "search"
        | "stylesheet"
        | "tag";
    /**
     * ### _`shape` Attribute_
     *
     * @used  `a` `area`
     */
    shape: string;
    /**
     * ### _`target` Attribute_
     *
     * Specifies where to open the linked document (in the case of an ``<a>`` element) or where to display the response received (in the case of a ``<form>`` element)
     * @used  `a` `area` `base` `form`
     */
    target: "_self" | "_blank" | "_parent" | "_top";
}

export interface AudioProps extends CommonAttributes, Events, HTMLAttributes {
    /**
     * ### _`autoplay` Attribute_
     *
     * The audio or video should play as soon as possible.
     * @used
     */
    autoplay: boolean;
    /**
     * ### _`controls` Attribute_
     *
     * Indicates whether the browser should show playback controls to the user.
     * @used  `audio` `video`
     */
    controls: string;
    /**
     * ### _`crossorigin` Attribute_
     *
     * How the element handles cross-origin requests
     * @used  `audio` `img` `link` `script` `video`
     */
    crossOrigin: "use-credentials" | "anonymous";
    /**
     * ### _`loop` Attribute_
     *
     * Indicates whether the media should start playing from the start when it's finished.
     * @used  `audio` `bgsound` `marquee` `video`
     */
    loop: boolean;
    /**
     * ### _`muted` Attribute_
     *
     * Indicates whether the audio will be initially silenced on page load.
     * @used  `audio` `video`
     */
    muted: boolean;
    /**
     * ### _`preload` Attribute_
     *
     * Indicates whether the whole resource, parts of it or nothing should be preloaded.
     * @used  `audio` `video`
     */
    preload: string;
    /**
     * ### _`src` Attribute_
     *
     * The URL of the embeddable content.
     * @used  `audio` `embed` `iframe` `img` `input` `script` `source` `track` `video`
     */
    src: string;
    children: Array<RecursiveElement>;
}

export interface ImgProps extends CommonAttributes, Events, HTMLAttributes {
    /**
     * ### _`alt` Attribute_
     *
     * Alternative text in case an image can't be displayed.
     * @used  `applet` `area` `img` `input`
     */
    alt: string;
    /**
     * ### _`crossorigin` Attribute_
     *
     * How the element handles cross-origin requests
     * @used  `audio` `img` `link` `script` `video`
     */
    crossOrigin: "use-credentials" | "anonymous";
    /**
     * ### _`decoding` Attribute_
     *
     * Indicates the preferred method to decode the image.
     * @used  `img`
     */
    decoding: "sync" | "async" | "auto";
    /**
     * ### _`height` Attribute_
     *
     * Specifies the height of elements listed here. For all other elements, use the CSS height property.
     * @used  `canvas` `embed` `iframe` `img` `input` `object` `video`
     */
    height: string;
    /**
     * ### _`ismap` Attribute_
     *
     * Indicates that the image is part of a server-side image map.
     * @used  `img`
     */
    isMap: boolean;
    /**
     * ### _`loading` Attribute_
     *
     * Indicates if the element should be loaded lazily (loading="lazy") or loaded immediately (loading="eager").
     * @used  `img` `iframe`
     */
    loading: "lazy" | "eager";
    /**
     * ### _`referrerpolicy` Attribute_
     *
     * Specifies which referrer is sent when fetching the resource.
     * @used  `a` `area` `iframe` `img` `link` `script`
     */
    referrerPolicy:
        | "no-referrer"
        | "no-referrer-when-downgrade"
        | "origin"
        | "origin-when-cross-origin"
        | "same-origin"
        | "strict-origin"
        | "strict-origin-when-cross-origin"
        | "unsafe-url";
    /**
     * ### _`sizes` Attribute_
     *
     * @used  `link` `img` `source`
     */
    sizes: string;
    /**
     * ### _`src` Attribute_
     *
     * The URL of the embeddable content.
     * @used  `audio` `embed` `iframe` `img` `input` `script` `source` `track` `video`
     */
    src: string;
    /**
     * ### _`srcset` Attribute_
     *
     * One or more responsive image candidates.
     * @used  `img` `source`
     */
    srcSet: string;
    /**
     * ### _`width` Attribute_
     *
     * For the elements listed here, this establishes the element's width.
     * @used  `canvas` `embed` `iframe` `img` `input` `object` `video`
     */
    width: string;
    /**
     * ### _`usemap` Attribute_
     *
     * Defines a default value which will be displayed in the element on page load.
     * @used  `img` `input` `object`
     */
    useMap: string;
}

export interface MapProps extends CommonAttributes, Events, HTMLAttributes {
    /**
     * ### _`name` Attribute_
     *
     * Name of the element. For example used by the server to identify the fields in form submits.
     * @used  `button` `form` `fieldset` `iframe` `input` `keygen` `object` `output` `select` `textarea` `map` `meta` `param`
     */
    name: string;
    children: Array<RecursiveElement>;
}

export interface TrackProps extends CommonAttributes, Events, HTMLAttributes {
    /**
     * ### _`default` Attribute_
     *
     * Indicates that the track should be enabled unless the user's preferences indicate something different.
     * @used  `track`
     */
    def: string;
    /**
     * ### _`kind` Attribute_
     *
     * Specifies the kind of text track.
     * @used  `track`
     */
    kind: "subtitles" | "captions" | "descriptions" | "chapters" | "metadata";
    /**
     * ### _`label` Attribute_
     *
     * Specifies a user-readable title of the element.
     * @used  `optgroup` `option` `track`
     */
    label: string;
    /**
     * ### _`src` Attribute_
     *
     * The URL of the embeddable content.
     * @used  `audio` `embed` `iframe` `img` `input` `script` `source` `track` `video`
     */
    src: string;
    /**
     * ### _`srclang` Attribute_
     *
     * @used  `track`
     */
    srcLang: string;
}

export interface VideoProps extends CommonAttributes, Events, HTMLAttributes {
    /**
     * ### _`autoplay` Attribute_
     *
     * The audio or video should play as soon as possible.
     * @used
     */
    autoplay: boolean;
    /**
     * ### _`crossorigin` Attribute_
     *
     * How the element handles cross-origin requests
     * @used  `audio` `img` `link` `script` `video`
     */
    crossOrigin: "use-credentials" | "anonymous";
    /**
     * ### _`height` Attribute_
     *
     * Specifies the height of elements listed here. For all other elements, use the CSS height property.
     * @used  `canvas` `embed` `iframe` `img` `input` `object` `video`
     */
    height: string;
    /**
     * ### _`loop` Attribute_
     *
     * Indicates whether the media should start playing from the start when it's finished.
     * @used  `audio` `bgsound` `marquee` `video`
     */
    loop: boolean;
    /**
     * ### _`muted` Attribute_
     *
     * Indicates whether the audio will be initially silenced on page load.
     * @used  `audio` `video`
     */
    muted: boolean;
    /**
     * ### _`playsinline` Attribute_
     *
     * @used Global attribute
     */
    playsInline: string;
    /**
     * ### _`poster` Attribute_
     *
     * A URL indicating a poster frame to show until the user plays or seeks.
     * @used  `video`
     */
    poster: string;
    /**
     * ### _`preload` Attribute_
     *
     * Indicates whether the whole resource, parts of it or nothing should be preloaded.
     * @used  `audio` `video`
     */
    preload: string;
    /**
     * ### _`src` Attribute_
     *
     * The URL of the embeddable content.
     * @used  `audio` `embed` `iframe` `img` `input` `script` `source` `track` `video`
     */
    src: string;
    /**
     * ### _`width` Attribute_
     *
     * For the elements listed here, this establishes the element's width.
     * @used  `canvas` `embed` `iframe` `img` `input` `object` `video`
     */
    width: string;
    children: Array<RecursiveElement>;
}

export interface EmbedProps extends CommonAttributes, Events, HTMLAttributes {
    /**
     * ### _`height` Attribute_
     *
     * Specifies the height of elements listed here. For all other elements, use the CSS height property.
     * @used  `canvas` `embed` `iframe` `img` `input` `object` `video`
     */
    height: string;
    /**
     * ### _`src` Attribute_
     *
     * The URL of the embeddable content.
     * @used  `audio` `embed` `iframe` `img` `input` `script` `source` `track` `video`
     */
    src: string;
    /**
     * ### _`type` Attribute_
     *
     * Defines the type of the element.
     * @used  `button` `input` `command` `embed` `object` `script` `source` `styles` `menu` `link`
     */
    type: string;
    /**
     * ### _`width` Attribute_
     *
     * For the elements listed here, this establishes the element's width.
     * @used  `canvas` `embed` `iframe` `img` `input` `object` `video`
     */
    width: string;
    children: Array<RecursiveElement>;
}

export interface IframeProps extends CommonAttributes, Events, HTMLAttributes {
    /**
     * ### _`allow` Attribute_
     *
     * Specifies a feature-policy for the iframe.
     * @used  `iframe`
     */
    allow: string;
    /**
     * ### _`allowfullscreen` Attribute_
     *
     * @used
     */
    allowFullScreen: boolean;
    /**
     * ### _`allowpaymentrequest` Attribute_
     *
     * @used
     */
    allowPaymentRequest: string;
    /**
     * ### _`height` Attribute_
     *
     * Specifies the height of elements listed here. For all other elements, use the CSS height property.
     * @used  `canvas` `embed` `iframe` `img` `input` `object` `video`
     */
    height: string;
    /**
     * ### _`loading` Attribute_
     *
     * Indicates if the element should be loaded lazily (loading="lazy") or loaded immediately (loading="eager").
     * @used  `img` `iframe`
     */
    loading: "lazy" | "eager";
    /**
     * ### _`name` Attribute_
     *
     * Name of the element. For example used by the server to identify the fields in form submits.
     * @used  `button` `form` `fieldset` `iframe` `input` `keygen` `object` `output` `select` `textarea` `map` `meta` `param`
     */
    name: string;
    /**
     * ### _`referrerpolicy` Attribute_
     *
     * Specifies which referrer is sent when fetching the resource.
     * @used  `a` `area` `iframe` `img` `link` `script`
     */
    referrerPolicy:
        | "no-referrer"
        | "no-referrer-when-downgrade"
        | "origin"
        | "origin-when-cross-origin"
        | "same-origin"
        | "strict-origin"
        | "strict-origin-when-cross-origin"
        | "unsafe-url";
    /**
     * ### _`sandbox` Attribute_
     *
     * Stops a document loaded in an iframe from using certain features (such as submitting forms or opening new windows).
     * @used  `iframe`
     */
    sandbox:
        | "allow-downloads-without-user-activation"
        | "allow-downloads"
        | "allow-forms"
        | "allow-modals"
        | "allow-orientation-lock"
        | "allow-pointer-lock"
        | "allow-popups"
        | "allow-popups-to-escape-sandbox"
        | "allow-presentation"
        | "allow-same-origin"
        | "allow-scripts"
        | "allow-storage-access-by-user-activation"
        | "allow-top-navigation"
        | "allow-top-navigation-by-user-activation";
    /**
     * ### _`src` Attribute_
     *
     * The URL of the embeddable content.
     * @used  `audio` `embed` `iframe` `img` `input` `script` `source` `track` `video`
     */
    src: string;
    /**
     * ### _`srcdoc` Attribute_
     *
     * @used  `iframe`
     */
    srcDoc: string;
    /**
     * ### _`width` Attribute_
     *
     * For the elements listed here, this establishes the element's width.
     * @used  `canvas` `embed` `iframe` `img` `input` `object` `video`
     */
    width: string;
    children: Array<RecursiveElement>;
}

export interface ObjectProps extends CommonAttributes, Events, HTMLAttributes {
    /**
     * ### _`data` Attribute_
     *
     * Specifies the URL of the resource.
     * @used  `object`
     */
    data: string;
    /**
     * ### _`form` Attribute_
     *
     * Indicates the form that is the owner of the element.
     * @used  `button` `fieldset` `input` `keygen` `label` `meter` `object` `output` `progress` `select` `textarea`
     */
    form: string;
    /**
     * ### _`height` Attribute_
     *
     * Specifies the height of elements listed here. For all other elements, use the CSS height property.
     * @used  `canvas` `embed` `iframe` `img` `input` `object` `video`
     */
    height: string;
    /**
     * ### _`name` Attribute_
     *
     * Name of the element. For example used by the server to identify the fields in form submits.
     * @used  `button` `form` `fieldset` `iframe` `input` `keygen` `object` `output` `select` `textarea` `map` `meta` `param`
     */
    name: string;
    /**
     * ### _`type` Attribute_
     *
     * Defines the type of the element.
     * @used  `button` `input` `command` `embed` `object` `script` `source` `styles` `menu` `link`
     */
    type: string;
    /**
     * ### _`usemap` Attribute_
     *
     * Defines a default value which will be displayed in the element on page load.
     * @used  `img` `input` `object`
     */
    useMap: string;
    /**
     * ### _`width` Attribute_
     *
     * For the elements listed here, this establishes the element's width.
     * @used  `canvas` `embed` `iframe` `img` `input` `object` `video`
     */
    width: string;
    children: Array<RecursiveElement>;
}

export interface PictureProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface PortalProps extends CommonAttributes, Events, HTMLAttributes {
    /**
     * ### _`src` Attribute_
     *
     * The URL of the embeddable content.
     * @used  `audio` `embed` `iframe` `img` `input` `script` `source` `track` `video`
     */
    src: string;
    children: Array<RecursiveElement>;
}

export interface SourceProps extends CommonAttributes, Events, HTMLAttributes {
    /**
     * ### _`type` Attribute_
     *
     * Defines the type of the element.
     * @used  `button` `input` `command` `embed` `object` `script` `source` `styles` `menu` `link`
     */
    type: string;
    children: Array<RecursiveElement>;
}

export interface CanvasProps extends CommonAttributes, Events, HTMLAttributes {
    /**
     * ### _`height` Attribute_
     *
     * Specifies the height of elements listed here. For all other elements, use the CSS height property.
     * @used  `canvas` `embed` `iframe` `img` `input` `object` `video`
     */
    height: string;
    /**
     * ### _`width` Attribute_
     *
     * For the elements listed here, this establishes the element's width.
     * @used  `canvas` `embed` `iframe` `img` `input` `object` `video`
     */
    width: string;
    children: Array<RecursiveElement>;
}

export interface NoscriptProps
    extends CommonAttributes,
        Events,
        HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface DelProps extends CommonAttributes, Events, HTMLAttributes {
    /**
     * ### _`cite` Attribute_
     *
     * Contains a URI which points to the source of the quote or change.
     * @used  `blockquote` `del` `ins` `q`
     */
    cite: string;
    /**
     * ### _`datetime` Attribute_
     *
     * Indicates the date and time associated with the element.
     * @used  `del` `ins` `time`
     */
    dateTime: string;
    children: Array<RecursiveElement>;
}

export interface InsProps extends CommonAttributes, Events, HTMLAttributes {
    /**
     * ### _`cite` Attribute_
     *
     * Contains a URI which points to the source of the quote or change.
     * @used  `blockquote` `del` `ins` `q`
     */
    cite: string;
    /**
     * ### _`datetime` Attribute_
     *
     * Indicates the date and time associated with the element.
     * @used  `del` `ins` `time`
     */
    dateTime: string;
    children: Array<RecursiveElement>;
}

export interface CaptionProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface ColProps extends CommonAttributes, Events, HTMLAttributes {
    /**
     * ### _`span` Attribute_
     *
     * @used  `col` `colgroup`
     */
    span: string;
    children: Array<RecursiveElement>;
}

export interface ColgroupProps
    extends CommonAttributes,
        Events,
        HTMLAttributes {
    /**
     * ### _`span` Attribute_
     *
     * @used  `col` `colgroup`
     */
    span: string;
    children: Array<RecursiveElement>;
}

export interface TableProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface TbodyProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface TdProps extends CommonAttributes, Events, HTMLAttributes {
    /**
     * ### _`colSpan` Attribute_
     *
     * The colspan attribute defines the number of columns a cell should span.
     * @used  `td` `th`
     */
    colSpan: string;
    /**
     * ### _`headers` Attribute_
     *
     * IDs of the ``<th>`` elements which applies to this element.
     * @used  `td` `th`
     */
    headers: string;
    /**
     * ### _`rowspan` Attribute_
     *
     * Defines the number of rows a table cell should span over.
     * @used  `td` `th`
     */
    rowSpan: string;
    children: Array<RecursiveElement>;
}

export interface TfootProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface ThProps extends CommonAttributes, Events, HTMLAttributes {
    /**
     * ### _`colSpan` Attribute_
     *
     * The colspan attribute defines the number of columns a cell should span.
     * @used  `td` `th`
     */
    colSpan: string;
    /**
     * ### _`headers` Attribute_
     *
     * IDs of the ``<th>`` elements which applies to this element.
     * @used  `td` `th`
     */
    headers: string;
    /**
     * ### _`rowspan` Attribute_
     *
     * Defines the number of rows a table cell should span over.
     * @used  `td` `th`
     */
    rowSpan: string;
    /**
     * ### _`scope` Attribute_
     *
     * Defines the cells that the header test (defined in the th element) relates to.
     * @used  `th`
     */
    scope: "row" | "col" | "rowgroup" | "colgroup";
    children: Array<RecursiveElement>;
}

export interface TheadProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface TrProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface ButtonProps extends CommonAttributes, Events, HTMLAttributes {
    /**
     * ### _`autofocus` Attribute_
     *
     * The element should be automatically focused after the page loaded.
     * @used  `button` `input` `keygen` `select` `textarea`
     */
    autoFocus: string;
    /**
     * ### _`disabled` Attribute_
     *
     * Indicates whether the user can interact with the element.
     * @used  `button` `command` `fieldset` `input` `keygen` `optgroup` `option` `select` `textarea`
     */
    disabled: boolean;
    /**
     * ### _`form` Attribute_
     *
     * Indicates the form that is the owner of the element.
     * @used  `button` `fieldset` `input` `keygen` `label` `meter` `object` `output` `progress` `select` `textarea`
     */
    form: string;
    /**
     * ### _`formaction` Attribute_
     *
     * Indicates the action of the element, overriding the action defined in the <form>.
     * @used  `button` `input`
     */
    formAction: string;
    /**
     * ### _`formenctype` Attribute_
     *
     * If the button/input is a submit button (type="submit"), this attribute sets the encoding type to use during form submission. If this attribute is specified, it overrides the enctype attribute of the button's form owner.
     * @used  `button` `input`
     */
    formEncType: string;
    /**
     * ### _`formmethod` Attribute_
     *
     * If the button/input is a submit button (type="submit"), this attribute sets the submission method to use during form submission (GET, POST, etc.). If this attribute is specified, it overrides the method attribute of the button's form owner.
     * @used  `button` `input`
     */
    formMethod: string;
    /**
     * ### _`formnovalidate` Attribute_
     *
     * If the button/input is a submit button (type="submit"), this boolean attribute specifies that the form is not to be validated when it is submitted. If this attribute is specified, it overrides the novalidate attribute of the button's form owner.
     * @used  `button` `input`
     */
    formNoValidate: string;
    /**
     * ### _`formtarget` Attribute_
     *
     * The formtarget attribute specifies a name or a keyword that indicates where to display the response that is received after submitting the form.
     * @used  `_self` `_blank` `_parent` `_top`
     */
    formTarget: string;
    /**
     * ### _`name` Attribute_
     *
     * Name of the element. For example used by the server to identify the fields in form submits.
     * @used  `button` `form` `fieldset` `iframe` `input` `keygen` `object` `output` `select` `textarea` `map` `meta` `param`
     */
    name: string;
    /**
     * ### _`type` Attribute_
     *
     * Defines the type of the element.
     * @used  `button` `input` `command` `embed` `object` `script` `source` `styles` `menu` `link`
     */
    type: string;
    /**
     * ### _`value` Attribute_
     *
     * @used  `button` `data` `input` `li` `meter` `option` `progress` `param`
     */
    value: string;
    children: Array<RecursiveElement>;
}

export interface DatalistProps
    extends CommonAttributes,
        Events,
        HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface FieldsetProps
    extends CommonAttributes,
        Events,
        HTMLAttributes {
    /**
     * ### _`disabled` Attribute_
     *
     * Indicates whether the user can interact with the element.
     * @used  `button` `command` `fieldset` `input` `keygen` `optgroup` `option` `select` `textarea`
     */
    disabled: boolean;
    /**
     * ### _`form` Attribute_
     *
     * Indicates the form that is the owner of the element.
     * @used  `button` `fieldset` `input` `keygen` `label` `meter` `object` `output` `progress` `select` `textarea`
     */
    form: string;
    /**
     * ### _`name` Attribute_
     *
     * Name of the element. For example used by the server to identify the fields in form submits.
     * @used  `button` `form` `fieldset` `iframe` `input` `keygen` `object` `output` `select` `textarea` `map` `meta` `param`
     */
    name: string;
    children: Array<RecursiveElement>;
}

export interface FormProps extends CommonAttributes, Events, HTMLAttributes {
    /**
     * ### _`acceptcharset` Attribute_
     *
     * List of supported charsets.
     * @used  `form`
     */
    acceptCharSet: string;
    /**
     * ### _`autocomplete` Attribute_
     *
     * Indicates whether controls in this form can by default have their values automatically completed by the browser.
     * @used  `form` `input` `select` `textarea`
     */
    autoComplete:
        | "off"
        | "on"
        | "name"
        | "honorific-prefix"
        | "given-name"
        | "additional-name"
        | "family-name"
        | "honorific-suffix"
        | "nickname"
        | "email"
        | "username"
        | "new-password"
        | "current-password"
        | "one-time-code"
        | "organization-title"
        | "organization"
        | "street-address"
        | "country"
        | "country-name"
        | "postal-code"
        | "cc-name"
        | "cc-given-name"
        | "cc-additional-name"
        | "cc-family-name"
        | "cc-number"
        | "cc-exp"
        | "cc-exp-month"
        | "cc-exp-year"
        | "cc-csc"
        | "cc-type"
        | "transaction-currency"
        | "transaction-amount"
        | "language"
        | "bday"
        | "bday-day"
        | "bday-month"
        | "bday-year"
        | "sex"
        | "tel"
        | "tel-country-code"
        | "tel-national"
        | "tel-area-code"
        | "tel-local"
        | "tel-extension"
        | "impp"
        | "url"
        | "photo";
    /**
     * ### _`name` Attribute_
     *
     * Name of the element. For example used by the server to identify the fields in form submits.
     * @used  `button` `form` `fieldset` `iframe` `input` `keygen` `object` `output` `select` `textarea` `map` `meta` `param`
     */
    name: string;
    /**
     * ### _`rel` Attribute_
     *
     * Specifies the relationship of the target object to the link object.
     * @used  `a` `area` `link`
     */
    rel:
        | "alternate"
        | "author"
        | "bookmark"
        | "canonical"
        | "dns-prefetch"
        | "external"
        | "help"
        | "icon"
        | "license"
        | "manifest"
        | "me"
        | "modulepreload"
        | "next"
        | "nofollow"
        | "noopener"
        | "noreferrer"
        | "opener"
        | "pingback"
        | "preconnect"
        | "prefetch"
        | "preload"
        | "prerender"
        | "prev"
        | "search"
        | "stylesheet"
        | "tag";
    /**
     * ### _`action` Attribute_
     *
     * @used  `audio` `video`
     */
    action: string;
    /**
     * ### _`enctype` Attribute_
     *
     * Defines the content type of the form data when the method is POST.
     * @used  `form`
     */
    encType:
        | "application/x-www-form-urlencoded"
        | "multipart/form-data"
        | "text/plain";
    /**
     * ### _`method` Attribute_
     *
     * Defines which HTTP method to use when submitting the form. Can be GET (default) or POST.
     * @used  `form`
     */
    method: "post" | "get" | "dialog";
    /**
     * ### _`novalidate` Attribute_
     *
     * This attribute indicates that the form shouldn't be validated when submitted.
     * @used  `form`
     */
    noValidate: string;
    /**
     * ### _`target` Attribute_
     *
     * Specifies where to open the linked document (in the case of an ``<a>`` element) or where to display the response received (in the case of a ``<form>`` element)
     * @used  `a` `area` `base` `form`
     */
    target: "_self" | "_blank" | "_parent" | "_top";
    children: Array<RecursiveElement>;
}

export interface InputProps extends CommonAttributes, Events, HTMLAttributes {
    /**
     * ### _`accept` Attribute_
     *
     * List of types the server accepts, typically a file type.
     * @used  `form` `input`
     */
    accept: "audio/*" | "video/*" | "image/*";
    /**
     * ### _`alt` Attribute_
     *
     * Alternative text in case an image can't be displayed.
     * @used  `applet` `area` `img` `input`
     */
    alt: string;
    /**
     * ### _`autocomplete` Attribute_
     *
     * Indicates whether controls in this form can by default have their values automatically completed by the browser.
     * @used  `form` `input` `select` `textarea`
     */
    autoComplete:
        | "off"
        | "on"
        | "name"
        | "honorific-prefix"
        | "given-name"
        | "additional-name"
        | "family-name"
        | "honorific-suffix"
        | "nickname"
        | "email"
        | "username"
        | "new-password"
        | "current-password"
        | "one-time-code"
        | "organization-title"
        | "organization"
        | "street-address"
        | "country"
        | "country-name"
        | "postal-code"
        | "cc-name"
        | "cc-given-name"
        | "cc-additional-name"
        | "cc-family-name"
        | "cc-number"
        | "cc-exp"
        | "cc-exp-month"
        | "cc-exp-year"
        | "cc-csc"
        | "cc-type"
        | "transaction-currency"
        | "transaction-amount"
        | "language"
        | "bday"
        | "bday-day"
        | "bday-month"
        | "bday-year"
        | "sex"
        | "tel"
        | "tel-country-code"
        | "tel-national"
        | "tel-area-code"
        | "tel-local"
        | "tel-extension"
        | "impp"
        | "url"
        | "photo";
    /**
     * ### _`capture` Attribute_
     *
     * From the Media Capture specification, specifies a new file can be captured.
     * @used  `input`
     */
    capture: "user" | "environment";
    /**
     * ### _`checked` Attribute_
     *
     * Indicates whether the element should be checked on page load.
     * @used  `command` `input`
     */
    checked: string;
    /**
     * ### _`dirname` Attribute_
     *
     * @used  `input` `textarea`
     */
    dirName: string;
    /**
     * ### _`disabled` Attribute_
     *
     * Indicates whether the user can interact with the element.
     * @used  `button` `command` `fieldset` `input` `keygen` `optgroup` `option` `select` `textarea`
     */
    disabled: boolean;
    /**
     * ### _`form` Attribute_
     *
     * Indicates the form that is the owner of the element.
     * @used  `button` `fieldset` `input` `keygen` `label` `meter` `object` `output` `progress` `select` `textarea`
     */
    form: string;
    /**
     * ### _`formaction` Attribute_
     *
     * Indicates the action of the element, overriding the action defined in the <form>.
     * @used  `button` `input`
     */
    formAction: string;
    /**
     * ### _`formenctype` Attribute_
     *
     * If the button/input is a submit button (type="submit"), this attribute sets the encoding type to use during form submission. If this attribute is specified, it overrides the enctype attribute of the button's form owner.
     * @used  `button` `input`
     */
    formEncType: string;
    /**
     * ### _`formmethod` Attribute_
     *
     * If the button/input is a submit button (type="submit"), this attribute sets the submission method to use during form submission (GET, POST, etc.). If this attribute is specified, it overrides the method attribute of the button's form owner.
     * @used  `button` `input`
     */
    formMethod: string;
    /**
     * ### _`formnovalidate` Attribute_
     *
     * If the button/input is a submit button (type="submit"), this boolean attribute specifies that the form is not to be validated when it is submitted. If this attribute is specified, it overrides the novalidate attribute of the button's form owner.
     * @used  `button` `input`
     */
    formNoValidate: string;
    /**
     * ### _`formtarget` Attribute_
     *
     * The formtarget attribute specifies a name or a keyword that indicates where to display the response that is received after submitting the form.
     * @used  `_self` `_blank` `_parent` `_top`
     */
    formTarget: string;
    /**
     * ### _`height` Attribute_
     *
     * Specifies the height of elements listed here. For all other elements, use the CSS height property.
     * @used  `canvas` `embed` `iframe` `img` `input` `object` `video`
     */
    height: string;
    /**
     * ### _`list` Attribute_
     *
     * Identifies a list of pre-defined options to suggest to the user.
     * @used  `input`
     */
    list: string;
    /**
     * ### _`max` Attribute_
     *
     * Indicates the maximum value allowed.
     * @used  `input` `meter` `progress`
     */
    max: string;
    /**
     * ### _`maxLength` Attribute_
     *
     * Defines the maximum number of characters allowed in the element.
     * @used  `input` `textarea`
     */
    maxLength: string;
    /**
     * ### _`min` Attribute_
     *
     * Indicates the minimum value allowed.
     * @used  `input` `meter`
     */
    min: string;
    /**
     * ### _`minLength` Attribute_
     *
     * Defines the minimum number of characters allowed in the element.
     * @used  `input` `textarea`
     */
    minLength: string;
    /**
     * ### _`multiple` Attribute_
     *
     * Indicates whether multiple values can be entered in an input of the type email or file.
     * @used  `input` `select`
     */
    multiple: boolean;
    /**
     * ### _`name` Attribute_
     *
     * Name of the element. For example used by the server to identify the fields in form submits.
     * @used  `button` `form` `fieldset` `iframe` `input` `keygen` `object` `output` `select` `textarea` `map` `meta` `param`
     */
    name: string;
    /**
     * ### _`pattern` Attribute_
     *
     * Defines a regular expression which the element's value will be validated against.
     * @used  `input`
     */
    pattern: string;
    /**
     * ### _`placeholder` Attribute_
     *
     * Provides a hint to the user of what can be entered in the field.
     * @used  `input` `textarea`
     */
    placeholder: string;
    /**
     * ### _`readonly` Attribute_
     *
     * Indicates whether the element can be edited.
     * @used  `input` `textarea`
     */
    readOnly: boolean;
    /**
     * ### _`required` Attribute_
     *
     * Indicates whether this element is required to fill out or not.
     * @used  `input` `select` `textarea`
     */
    required: boolean;
    /**
     * ### _`size` Attribute_
     *
     * Defines the width of the element (in pixels). If the element's type attribute is text or password then it's the number of characters.
     * @used  `input` `select`
     */
    size: string;
    /**
     * ### _`src` Attribute_
     *
     * The URL of the embeddable content.
     * @used  `audio` `embed` `iframe` `img` `input` `script` `source` `track` `video`
     */
    src: string;
    /**
     * ### _`step` Attribute_
     *
     * @used  `input`
     */
    step: string;
    /**
     * ### _`type` Attribute_
     *
     * Defines the type of the element.
     * @used  `button` `input` `command` `embed` `object` `script` `source` `styles` `menu` `link`
     */
    type: string;
    /**
     * ### _`value` Attribute_
     *
     * @used  `button` `data` `input` `li` `meter` `option` `progress` `param`
     */
    value: string;
    /**
     * ### _`width` Attribute_
     *
     * For the elements listed here, this establishes the element's width.
     * @used  `canvas` `embed` `iframe` `img` `input` `object` `video`
     */
    width: string;
}

export interface LabelProps extends CommonAttributes, Events, HTMLAttributes {
    /**
     * ### _`for` Attribute_
     *
     * Describes elements which belongs to this one.
     * @used  `label` `output`
     */
    isFor: string;
    children: Array<RecursiveElement>;
}

export interface LegendProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface MeterProps extends CommonAttributes, Events, HTMLAttributes {
    /**
     * ### _`value` Attribute_
     *
     * @used  `button` `data` `input` `li` `meter` `option` `progress` `param`
     */
    value: string;
    /**
     * ### _`min` Attribute_
     *
     * Indicates the minimum value allowed.
     * @used  `input` `meter`
     */
    min: string;
    /**
     * ### _`max` Attribute_
     *
     * Indicates the maximum value allowed.
     * @used  `input` `meter` `progress`
     */
    max: string;
    /**
     * ### _`low` Attribute_
     *
     * Indicates the upper bound of the lower range.
     * @used  `meter`
     */
    low: string;
    /**
     * ### _`high` Attribute_
     *
     * Indicates the lower bound of the upper range.
     * @used  `meter`
     */
    high: string;
    /**
     * ### _`optimum` Attribute_
     *
     * Indicates the optimal numeric value.
     * @used  `meter`
     */
    optimum: string;
    children: Array<RecursiveElement>;
}

export interface OptgroupProps
    extends CommonAttributes,
        Events,
        HTMLAttributes {
    /**
     * ### _`disabled` Attribute_
     *
     * Indicates whether the user can interact with the element.
     * @used  `button` `command` `fieldset` `input` `keygen` `optgroup` `option` `select` `textarea`
     */
    disabled: boolean;
    /**
     * ### _`label` Attribute_
     *
     * Specifies a user-readable title of the element.
     * @used  `optgroup` `option` `track`
     */
    label: string;
    children: Array<RecursiveElement>;
}

export interface OptionProps extends CommonAttributes, Events, HTMLAttributes {
    /**
     * ### _`disabled` Attribute_
     *
     * Indicates whether the user can interact with the element.
     * @used  `button` `command` `fieldset` `input` `keygen` `optgroup` `option` `select` `textarea`
     */
    disabled: boolean;
    /**
     * ### _`label` Attribute_
     *
     * Specifies a user-readable title of the element.
     * @used  `optgroup` `option` `track`
     */
    label: string;
    /**
     * ### _`selected` Attribute_
     *
     * Defines a value which will be selected on page load.
     * @used  `option`
     */
    selected: boolean;
    /**
     * ### _`value` Attribute_
     *
     * @used  `button` `data` `input` `li` `meter` `option` `progress` `param`
     */
    value: string;
    children: Array<RecursiveElement>;
}

export interface OutputProps extends CommonAttributes, Events, HTMLAttributes {
    /**
     * ### _`for` Attribute_
     *
     * Describes elements which belongs to this one.
     * @used  `label` `output`
     */
    isFor: string;
    /**
     * ### _`form` Attribute_
     *
     * Indicates the form that is the owner of the element.
     * @used  `button` `fieldset` `input` `keygen` `label` `meter` `object` `output` `progress` `select` `textarea`
     */
    form: string;
    /**
     * ### _`name` Attribute_
     *
     * Name of the element. For example used by the server to identify the fields in form submits.
     * @used  `button` `form` `fieldset` `iframe` `input` `keygen` `object` `output` `select` `textarea` `map` `meta` `param`
     */
    name: string;
    children: Array<RecursiveElement>;
}

export interface ProgressProps
    extends CommonAttributes,
        Events,
        HTMLAttributes {
    /**
     * ### _`max` Attribute_
     *
     * Indicates the maximum value allowed.
     * @used  `input` `meter` `progress`
     */
    max: string;
    /**
     * ### _`value` Attribute_
     *
     * @used  `button` `data` `input` `li` `meter` `option` `progress` `param`
     */
    value: string;
    children: Array<RecursiveElement>;
}

export interface SelectProps extends CommonAttributes, Events, HTMLAttributes {
    /**
     * ### _`autocomplete` Attribute_
     *
     * Indicates whether controls in this form can by default have their values automatically completed by the browser.
     * @used  `form` `input` `select` `textarea`
     */
    autoComplete:
        | "off"
        | "on"
        | "name"
        | "honorific-prefix"
        | "given-name"
        | "additional-name"
        | "family-name"
        | "honorific-suffix"
        | "nickname"
        | "email"
        | "username"
        | "new-password"
        | "current-password"
        | "one-time-code"
        | "organization-title"
        | "organization"
        | "street-address"
        | "country"
        | "country-name"
        | "postal-code"
        | "cc-name"
        | "cc-given-name"
        | "cc-additional-name"
        | "cc-family-name"
        | "cc-number"
        | "cc-exp"
        | "cc-exp-month"
        | "cc-exp-year"
        | "cc-csc"
        | "cc-type"
        | "transaction-currency"
        | "transaction-amount"
        | "language"
        | "bday"
        | "bday-day"
        | "bday-month"
        | "bday-year"
        | "sex"
        | "tel"
        | "tel-country-code"
        | "tel-national"
        | "tel-area-code"
        | "tel-local"
        | "tel-extension"
        | "impp"
        | "url"
        | "photo";
    /**
     * ### _`autofocus` Attribute_
     *
     * The element should be automatically focused after the page loaded.
     * @used  `button` `input` `keygen` `select` `textarea`
     */
    autoFocus: string;
    /**
     * ### _`disabled` Attribute_
     *
     * Indicates whether the user can interact with the element.
     * @used  `button` `command` `fieldset` `input` `keygen` `optgroup` `option` `select` `textarea`
     */
    disabled: boolean;
    /**
     * ### _`form` Attribute_
     *
     * Indicates the form that is the owner of the element.
     * @used  `button` `fieldset` `input` `keygen` `label` `meter` `object` `output` `progress` `select` `textarea`
     */
    form: string;
    /**
     * ### _`multiple` Attribute_
     *
     * Indicates whether multiple values can be entered in an input of the type email or file.
     * @used  `input` `select`
     */
    multiple: boolean;
    /**
     * ### _`name` Attribute_
     *
     * Name of the element. For example used by the server to identify the fields in form submits.
     * @used  `button` `form` `fieldset` `iframe` `input` `keygen` `object` `output` `select` `textarea` `map` `meta` `param`
     */
    name: string;
    /**
     * ### _`required` Attribute_
     *
     * Indicates whether this element is required to fill out or not.
     * @used  `input` `select` `textarea`
     */
    required: boolean;
    /**
     * ### _`size` Attribute_
     *
     * Defines the width of the element (in pixels). If the element's type attribute is text or password then it's the number of characters.
     * @used  `input` `select`
     */
    size: string;
    children: Array<RecursiveElement>;
}

export interface TextAreaProps
    extends CommonAttributes,
        Events,
        HTMLAttributes {
    /**
     * ### _`autocomplete` Attribute_
     *
     * Indicates whether controls in this form can by default have their values automatically completed by the browser.
     * @used  `form` `input` `select` `textarea`
     */
    autoComplete:
        | "off"
        | "on"
        | "name"
        | "honorific-prefix"
        | "given-name"
        | "additional-name"
        | "family-name"
        | "honorific-suffix"
        | "nickname"
        | "email"
        | "username"
        | "new-password"
        | "current-password"
        | "one-time-code"
        | "organization-title"
        | "organization"
        | "street-address"
        | "country"
        | "country-name"
        | "postal-code"
        | "cc-name"
        | "cc-given-name"
        | "cc-additional-name"
        | "cc-family-name"
        | "cc-number"
        | "cc-exp"
        | "cc-exp-month"
        | "cc-exp-year"
        | "cc-csc"
        | "cc-type"
        | "transaction-currency"
        | "transaction-amount"
        | "language"
        | "bday"
        | "bday-day"
        | "bday-month"
        | "bday-year"
        | "sex"
        | "tel"
        | "tel-country-code"
        | "tel-national"
        | "tel-area-code"
        | "tel-local"
        | "tel-extension"
        | "impp"
        | "url"
        | "photo";
    /**
     * ### _`autofocus` Attribute_
     *
     * The element should be automatically focused after the page loaded.
     * @used  `button` `input` `keygen` `select` `textarea`
     */
    autoFocus: string;
    /**
     * ### _`cols` Attribute_
     *
     * Defines the number of columns in a textarea.
     * @used  `textarea`
     */
    cols: number;
    /**
     * ### _`disabled` Attribute_
     *
     * Indicates whether the user can interact with the element.
     * @used  `button` `command` `fieldset` `input` `keygen` `optgroup` `option` `select` `textarea`
     */
    disabled: boolean;
    /**
     * ### _`form` Attribute_
     *
     * Indicates the form that is the owner of the element.
     * @used  `button` `fieldset` `input` `keygen` `label` `meter` `object` `output` `progress` `select` `textarea`
     */
    form: string;
    /**
     * ### _`maxLength` Attribute_
     *
     * Defines the maximum number of characters allowed in the element.
     * @used  `input` `textarea`
     */
    maxLength: string;
    /**
     * ### _`name` Attribute_
     *
     * Name of the element. For example used by the server to identify the fields in form submits.
     * @used  `button` `form` `fieldset` `iframe` `input` `keygen` `object` `output` `select` `textarea` `map` `meta` `param`
     */
    name: string;
    /**
     * ### _`placeholder` Attribute_
     *
     * Provides a hint to the user of what can be entered in the field.
     * @used  `input` `textarea`
     */
    placeholder: string;
    /**
     * ### _`readonly` Attribute_
     *
     * Indicates whether the element can be edited.
     * @used  `input` `textarea`
     */
    readOnly: boolean;
    /**
     * ### _`required` Attribute_
     *
     * Indicates whether this element is required to fill out or not.
     * @used  `input` `select` `textarea`
     */
    required: boolean;
    /**
     * ### _`spellcheck` Attribute_
     *
     * Indicates whether spell checking is allowed for the element.
     * @used Global attribute
     */
    spellCheck: "true" | "false";
    /**
     * ### _`wrap` Attribute_
     *
     * Indicates whether the text should be wrapped.
     * @used  `textarea`
     */
    wrap: "hard" | "soft" | "off";
    children: Array<RecursiveElement>;
}

export interface DetailsProps extends CommonAttributes, Events, HTMLAttributes {
    /**
     * ### _`open` Attribute_
     *
     * Indicates whether the contents are currently visible (in the case of a ``<details>`` element) or whether the dialog is active and can be interacted with (in the case of a ``<dialog>`` element).
     * @used  `details` `dialog`
     */
    open: boolean;
    children: Array<RecursiveElement>;
}

export interface DialogProps extends CommonAttributes, Events, HTMLAttributes {
    /**
     * ### _`open` Attribute_
     *
     * Indicates whether the contents are currently visible (in the case of a ``<details>`` element) or whether the dialog is active and can be interacted with (in the case of a ``<dialog>`` element).
     * @used  `details` `dialog`
     */
    open: boolean;
    children: Array<RecursiveElement>;
}

export interface SummaryProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface SlotProps extends CommonAttributes, Events, HTMLAttributes {
    /**
     * ### _`name` Attribute_
     *
     * Name of the element. For example used by the server to identify the fields in form submits.
     * @used  `button` `form` `fieldset` `iframe` `input` `keygen` `object` `output` `select` `textarea` `map` `meta` `param`
     */
    name: string;
    children: Array<RecursiveElement>;
}

export interface TemplateProps
    extends CommonAttributes,
        Events,
        HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface HtmlContainerProps
    extends CommonAttributes,
        Events,
        HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface FragmentProps
    extends CommonAttributes,
        Events,
        HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface ColumnProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface RowProps extends CommonAttributes, Events, HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface CenteredColumnProps
    extends CommonAttributes,
        Events,
        HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface CenteredRowProps
    extends CommonAttributes,
        Events,
        HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface CheckBoxProps
    extends CommonAttributes,
        Events,
        HTMLAttributes {
    value: string;
    checked: string;
    children: Array<RecursiveElement>;
}

export interface ColorPickerProps
    extends CommonAttributes,
        Events,
        HTMLAttributes {
    value: string;
    children: Array<RecursiveElement>;
}

export interface DatePickerProps
    extends CommonAttributes,
        Events,
        HTMLAttributes {
    value: string;
    max: string;
    min: string;
    step: string;
    children: Array<RecursiveElement>;
}

export interface DateTimeLocalPickerProps
    extends CommonAttributes,
        Events,
        HTMLAttributes {
    value: string;
    max: string;
    min: string;
    step: string;
    children: Array<RecursiveElement>;
}

export interface EmailFieldProps
    extends CommonAttributes,
        Events,
        HTMLAttributes {
    value: string;
    autoComplete: string;
    list: string;
    maxLength: string;
    minLength: string;
    multiple: string;
    pattern: string;
    placeholder: string;
    readOnly: string;
    required: boolean;
    size: string;
    children: Array<RecursiveElement>;
}

export interface FilePickerProps
    extends CommonAttributes,
        Events,
        HTMLAttributes {
    required: boolean;
    accept: string;
    capture: string;
    multiple: string;
    children: Array<RecursiveElement>;
}

export interface HiddenInputProps
    extends CommonAttributes,
        Events,
        HTMLAttributes {
    name: string;
    value: string;
    autoComplete: string;
    children: Array<RecursiveElement>;
}

export interface ImagePickerProps
    extends CommonAttributes,
        Events,
        HTMLAttributes {
    alt: string;
    src: string;
    height: string;
    formAction: string;
    formEncType: string;
    formMethod: string;
    formNoValidate: string;
    formTarget: string;
    children: Array<RecursiveElement>;
}

export interface MonthPickerProps
    extends CommonAttributes,
        Events,
        HTMLAttributes {
    autoComplete: string;
    list: string;
    readOnly: string;
    step: string;
    value: string;
    children: Array<RecursiveElement>;
}

export interface NumberPickerProps
    extends CommonAttributes,
        Events,
        HTMLAttributes {
    autoComplete: string;
    list: string;
    placeholder: string;
    readOnly: string;
    value: string;
    valueAsNumber: string;
    children: Array<RecursiveElement>;
}

export interface PasswordFieldProps
    extends CommonAttributes,
        Events,
        HTMLAttributes {
    autoComplete: string;
    inputMode: string;
    maxLength: string;
    minLength: string;
    pattern: string;
    placeholder: string;
    readOnly: string;
    required: string;
    size: string;
    value: string;
    children: Array<RecursiveElement>;
}

export interface RadioButtonProps
    extends CommonAttributes,
        Events,
        HTMLAttributes {
    checked: string;
    value: string;
    required: string;
    children: Array<RecursiveElement>;
}

export interface RangePickerProps
    extends CommonAttributes,
        Events,
        HTMLAttributes {
    autoComplete: string;
    list: string;
    max: string;
    min: string;
    step: string;
    value: string;
    valueAsNumber: string;
    children: Array<RecursiveElement>;
}

export interface ResetButtonProps
    extends CommonAttributes,
        Events,
        HTMLAttributes {
    value: string;
    children: Array<RecursiveElement>;
}

export interface SearchFieldProps
    extends CommonAttributes,
        Events,
        HTMLAttributes {
    autoComplete: string;
    list: string;
    maxLength: string;
    minLength: string;
    pattern: string;
    placeholder: string;
    required: string;
    size: string;
    value: string;
    children: Array<RecursiveElement>;
}

export interface SubmitButtonProps
    extends CommonAttributes,
        Events,
        HTMLAttributes {
    value: string;
    children: Array<RecursiveElement>;
}

export interface TelephoneNumberFieldProps
    extends CommonAttributes,
        Events,
        HTMLAttributes {
    autoComplete: string;
    list: string;
    maxLength: string;
    minLength: string;
    pattern: string;
    readOnly: string;
    placeholder: string;
    size: string;
    value: string;
    children: Array<RecursiveElement>;
}

export interface TextFieldProps
    extends CommonAttributes,
        Events,
        HTMLAttributes {
    autoComplete: string;
    list: string;
    maxLength: string;
    minLength: string;
    pattern: string;
    readOnly: string;
    placeholder: string;
    size: string;
    value: string;
    required: string;
    children: Array<RecursiveElement>;
}

export interface TimePickerProps
    extends CommonAttributes,
        Events,
        HTMLAttributes {
    autoComplete: string;
    list: string;
    readOnly: string;
    step: string;
    value: string;
    children: Array<RecursiveElement>;
}

export interface UrlFieldProps
    extends CommonAttributes,
        Events,
        HTMLAttributes {
    autoComplete: string;
    list: string;
    maxLength: string;
    minLength: string;
    pattern: string;
    readOnly: string;
    placeholder: string;
    size: string;
    value: string;
    required: string;
    children: Array<RecursiveElement>;
}

export interface WeekPickerProps
    extends CommonAttributes,
        Events,
        HTMLAttributes {
    autoComplete: string;
    list: string;
    readOnly: string;
    step: string;
    value: string;
    children: Array<RecursiveElement>;
}

export interface SpacerProps extends CommonAttributes, Events, HTMLAttributes {
    height: number;
    width: number;
}

export interface LazyColumnProps
    extends CommonAttributes,
        Events,
        HTMLAttributes {
    onObserved: Function;
    children: Array<RecursiveElement>;
}

export interface LazyRowProps extends CommonAttributes, Events, HTMLAttributes {
    onObserved: Function;
    children: Array<RecursiveElement>;
}

export interface HorizontalLineProps
    extends CommonAttributes,
        Events,
        HTMLAttributes {
    thickness: string;
    width: string;
    marginVertical: string;
    color: Color;
}

export interface VerticalLineProps
    extends CommonAttributes,
        Events,
        HTMLAttributes {
    thickness: string;
    height: string;
    marginHorizontal: string;
    color: Color;
}

export interface LinkProps extends CommonAttributes, Events, HTMLAttributes {
    href: string;
    children: Array<RecursiveElement>;
}

export interface ToggleSwitchProps
    extends CommonAttributes,
        Events,
        HTMLAttributes {
    radiusPx: number;
    color: Color;
    backgroundColor: Color;
    onBackgroundColor: Color;
    checked: boolean;
    onCheckChange: (e: Event) => void;
}

export interface CircularSpinnerProps
    extends CommonAttributes,
        Events,
        HTMLAttributes {
    color: Color;
    thickness: number;
    size: number;
}

export interface SVGAProps extends SVGAttributes {
    /**
     * ### _`href` Attribute_
     *
     * The URL of a linked resource.
     * @used  `a` `area` `base` `link`
     */
    href: string;
    /**
     * ### _`hreflang` Attribute_
     *
     * Specifies the language of the linked resource.
     * @used  `a` `area` `link`
     */
    hrefLang: string;
    /**
     * ### _`target` Attribute_
     *
     * Specifies where to open the linked document (in the case of an ``<a>`` element) or where to display the response received (in the case of a ``<form>`` element)
     * @used  `a` `area` `base` `form`
     */
    target: "_self" | "_blank" | "_parent" | "_top";
    /**
     * ### _`type` Attribute_
     *
     * Defines the type of the element.
     * @used  `button` `input` `command` `embed` `object` `script` `source` `styles` `menu` `link`
     */
    type: string;
}

export interface SVGAnimateProps extends SVGAttributes {
    /**
     * ### _`begin` Attribute_
     *
     * The begin attribute defines when an animation should begin or when an element should be discarded.
     * @used  `animate` `animateColor` `animateMotion` `animateTransform` `discard` `set`
     */
    begin: string;
    /**
     * ### _`dur` Attribute_
     *
     * The dur attribute indicates the simple duration of an animation.
     * @used
     */
    dur: string;
    /**
     * ### _`end` Attribute_
     *
     * The end attribute defines an end value for the animation that can constrain the active duration.
     * @used
     */
    end: string;
    /**
     * ### _`min` Attribute_
     *
     * Indicates the minimum value allowed.
     * @used  `input` `meter`
     */
    min: string;
    /**
     * ### _`max` Attribute_
     *
     * Indicates the maximum value allowed.
     * @used  `input` `meter` `progress`
     */
    max: string;
    /**
     * ### _`restart` Attribute_
     *
     * @used
     */
    restart: string;
    /**
     * ### _`repeatCount` Attribute_
     *
     * @used
     */
    repeatCount: string;
    /**
     * ### _`fill` Attribute_
     *
     * The fill attribute has two different meanings. For shapes and text it's a presentation attribute that defines the color (or any SVG paint servers like gradients or patterns) used to paint the element; for animation it defines the final state of the animation.
     * @used
     */
    fill: string;
    /**
     * ### _`calcMode` Attribute_
     *
     * The calcMode attribute specifies the interpolation mode for the animation.
     * @used
     */
    calcMode: string;
    /**
     * ### _`values` Attribute_
     *
     * @used
     */
    values: string;
    /**
     * ### _`keyTimes` Attribute_
     *
     * @used
     */
    keyTimes: string;
    /**
     * ### _`keySplines` Attribute_
     *
     * @used
     */
    keySplines: string;
    /**
     * ### _`from` Attribute_
     *
     * The from attribute indicates the initial value of the attribute that will be modified during the animation.
     * @used
     */
    from: string;
    /**
     * ### _`to` Attribute_
     *
     * @used
     */
    to: string;
    /**
     * ### _`by` Attribute_
     *
     * The by attribute specifies a relative offset value for an attribute that will be modified during an animation.
     * @used  `animate` `animateColor` `animateMotion` `animateTransform`
     */
    by: string;
    /**
     * ### _`attributeName` Attribute_
     *
     * The attributeName attribute indicates the name of the CSS property or attribute of the target element that is going to be changed during an animation.
     * @used  `animate` `animateColor` `animateTransform` `set`
     */
    attributeName: string;
    /**
     * ### _`additive` Attribute_
     *
     * The additive attribute controls whether or not an animation is additive.
     * @used  `animate` `animateColor` `animateMotion` `animateTransform`
     */
    additive: "sum" | "replace";
    /**
     * ### _`accumulate` Attribute_
     *
     * The accumulate attribute controls whether or not an animation is cumulative.
     * @used  `animate` `animateColor` `animateMotion` `animateTransform`
     */
    accumulate: "sum" | "none";
}

export interface SVGAnimateMotionProps extends SVGAttributes {
    /**
     * ### _`keyPoints` Attribute_
     *
     * @used
     */
    keyPoints: string;
    /**
     * ### _`path` Attribute_
     *
     * @used
     */
    path: string;
    /**
     * ### _`rotate` Attribute_
     *
     * @used
     */
    rotate: string;
}

export interface SVGAnimateTransformProps extends SVGAttributes {}

export interface SVGCircleProps extends SVGAttributes {
    /**
     * ### _`cx` Attribute_
     *
     * The cx attribute define the x-axis coordinate of a center point.
     * @used
     */
    cx: string;
    /**
     * ### _`cy` Attribute_
     *
     * The cy attribute define the y-axis coordinate of a center point.
     * @used
     */
    cy: string;
    /**
     * ### _`r` Attribute_
     *
     * @used
     */
    r: string;
    /**
     * ### _`pathLength` Attribute_
     *
     * @used
     */
    pathLength: string;
}

export interface SVGClipPathProps extends SVGAttributes {
    /**
     * ### _`clipPathUnits` Attribute_
     *
     * The clipPathUnits attribute indicates which coordinate system to use for the contents of the ``<clipPath>`` element.
     * @used  `clipPath`
     */
    clipPathUnits: "userSpaceOnUse" | "objectBoundingBox";
}

export interface SVGDefsProps extends SVGAttributes {}

export interface SVGDescProps extends SVGAttributes {}

export interface SVGDiscardProps extends SVGAttributes {}

export interface SVGEllipseProps extends SVGAttributes {
    /**
     * ### _`cx` Attribute_
     *
     * The cx attribute define the x-axis coordinate of a center point.
     * @used
     */
    cx: string;
    /**
     * ### _`cy` Attribute_
     *
     * The cy attribute define the y-axis coordinate of a center point.
     * @used
     */
    cy: string;
    /**
     * ### _`rx` Attribute_
     *
     * @used
     */
    rx: string;
    /**
     * ### _`ry` Attribute_
     *
     * @used
     */
    ry: string;
    /**
     * ### _`pathLength` Attribute_
     *
     * @used
     */
    pathLength: string;
}

export interface SVGFeBlendProps extends SVGAttributes {
    /**
     * ### _`in` Attribute_
     *
     * @used
     */
    in: string;
    /**
     * ### _`in2` Attribute_
     *
     * @used
     */
    in2: string;
    /**
     * ### _`mode` Attribute_
     *
     * @used
     */
    mode: string;
}

export interface SVGFeColorMatrixProps extends SVGAttributes {
    /**
     * ### _`in` Attribute_
     *
     * @used
     */
    in: string;
    /**
     * ### _`type` Attribute_
     *
     * Defines the type of the element.
     * @used  `button` `input` `command` `embed` `object` `script` `source` `styles` `menu` `link`
     */
    type: string;
    /**
     * ### _`values` Attribute_
     *
     * @used
     */
    values: string;
}

export interface SVGFeComponentTransferProps extends SVGAttributes {}

export interface SVGFeCompositeProps extends SVGAttributes {
    /**
     * ### _`in` Attribute_
     *
     * @used
     */
    in: string;
}

export interface SVGFeConvolveMatrixProps extends SVGAttributes {
    /**
     * ### _`in` Attribute_
     *
     * @used
     */
    in: string;
    /**
     * ### _`order` Attribute_
     *
     * @used
     */
    order: string;
    /**
     * ### _`kernelMatrix` Attribute_
     *
     * @used
     */
    kernelMatrix: string;
    /**
     * ### _`bias` Attribute_
     *
     * The bias attribute shifts the range of the filter. After applying the kernelMatrix of the ``<feConvolveMatrix>`` element to the input image to yield a number and applied the divisor attribute, the bias attribute is added to each component. This allows representation of values that would otherwise be clamped to 0 or 1.
     * @used  `feConvolveMatrix`
     */
    bias: string;
    /**
     * ### _`targetX` Attribute_
     *
     * @used
     */
    targetX: string;
    /**
     * ### _`targetY` Attribute_
     *
     * @used
     */
    targetY: string;
    /**
     * ### _`edgeMode` Attribute_
     *
     * The edgeMode attribute determines how to extend the input image as necessary with color values so that the matrix operations can be applied when the kernel is positioned at or near the edge of the input image.
     * @used
     */
    edgeMode: string;
    /**
     * ### _`kernelUnitLength` Attribute_
     *
     * @used
     */
    kernelUnitLength: string;
    /**
     * ### _`preserveAlpha` Attribute_
     *
     * @used
     */
    preserveAlpha: string;
}

export interface SVGFeDiffuseLightingProps extends SVGAttributes {}

export interface SVGFeDisplacementMapProps extends SVGAttributes {}

export interface SVGFeDistantLightProps extends SVGAttributes {}

export interface SVGFeDropShadowProps extends SVGAttributes {
    /**
     * ### _`id` Attribute_
     *
     * Often used with CSS to style a specific element. The value of this attribute must be unique.
     * @used Global attribute
     */
    id: string;
    /**
     * ### _`surfaceScale` Attribute_
     *
     * @used
     */
    surfaceScale: string;
    /**
     * ### _`diffuseConstant` Attribute_
     *
     * The diffuseConstant attribute represents the kd value in the Phong lighting model. In SVG, this can be any non-negative number.
     * @used
     */
    diffuseConstant: string;
    /**
     * ### _`kernelUnitLength` Attribute_
     *
     * @used
     */
    kernelUnitLength: string;
}

export interface SVGFeFloodProps extends SVGAttributes {
    /**
     * ### _`flood-color` Attribute_
     *
     * The flood-color attribute indicates what color to use to flood the current filter primitive subregion.
     * @used
     */
    floodColor: string;
    /**
     * ### _`flood-opacity` Attribute_
     *
     * The flood-opacity attribute indicates the opacity value to use across the current filter primitive subregion.
     * @used
     */
    floodOpacity: string;
}

export interface SVGFeFuncAProps extends SVGAttributes {}

export interface SVGFeFuncBProps extends SVGAttributes {}

export interface SVGFeFuncGProps extends SVGAttributes {}

export interface SVGFeFuncRProps extends SVGAttributes {}

export interface SVGFeGaussianBlurProps extends SVGAttributes {
    /**
     * ### _`in` Attribute_
     *
     * @used
     */
    in: string;
    /**
     * ### _`stdDeviation` Attribute_
     *
     * @used
     */
    stdDeviation: string;
    /**
     * ### _`edgeMode` Attribute_
     *
     * The edgeMode attribute determines how to extend the input image as necessary with color values so that the matrix operations can be applied when the kernel is positioned at or near the edge of the input image.
     * @used
     */
    edgeMode: string;
}

export interface SVGFeImageProps extends SVGAttributes {
    /**
     * ### _`preserveAspectRatio` Attribute_
     *
     * @used
     */
    preserveAspectRatio: string;
    /**
     * ### _`xlink:href` Attribute_
     *
     * @used
     */
    xLinkHref: string;
}

export interface SVGFeMergeProps extends SVGAttributes {}

export interface SVGFeMergeNodeProps extends SVGAttributes {
    /**
     * ### _`in` Attribute_
     *
     * @used
     */
    in: string;
}

export interface SVGFeMorphologyProps extends SVGAttributes {
    /**
     * ### _`in` Attribute_
     *
     * @used
     */
    in: string;
    /**
     * ### _`operator` Attribute_
     *
     * @used
     */
    operator: string;
    /**
     * ### _`radius` Attribute_
     *
     * @used
     */
    radius: string;
}

export interface SVGFeOffsetProps extends SVGAttributes {
    /**
     * ### _`in` Attribute_
     *
     * @used
     */
    in: string;
    /**
     * ### _`dx` Attribute_
     *
     * The dx attribute indicates a shift along the x-axis on the position of an element or its content.
     * @used
     */
    dx: string;
    /**
     * ### _`dy` Attribute_
     *
     * The dy attribute indicates a shift along the y-axis on the position of an element or its content.
     * @used
     */
    dy: string;
}

export interface SVGFePointLightProps extends SVGAttributes {
    /**
     * ### _`x` Attribute_
     *
     * @used
     */
    x: string;
    /**
     * ### _`y` Attribute_
     *
     * @used
     */
    y: string;
    /**
     * ### _`z` Attribute_
     *
     * @used
     */
    z: string;
}

export interface SVGFeSpecularLightingProps extends SVGAttributes {
    /**
     * ### _`in` Attribute_
     *
     * @used
     */
    in: string;
    /**
     * ### _`surfaceScale` Attribute_
     *
     * @used
     */
    surfaceScale: string;
    /**
     * ### _`specularConstant` Attribute_
     *
     * @used
     */
    specularConstant: string;
    /**
     * ### _`specularExponent` Attribute_
     *
     * @used
     */
    specularExponent: string;
    /**
     * ### _`kernelUnitLength` Attribute_
     *
     * @used
     */
    kernelUnitLength: string;
}

export interface SVGFeSpotLightProps extends SVGAttributes {
    /**
     * ### _`x` Attribute_
     *
     * @used
     */
    x: string;
    /**
     * ### _`y` Attribute_
     *
     * @used
     */
    y: string;
    /**
     * ### _`z` Attribute_
     *
     * @used
     */
    z: string;
    /**
     * ### _`specularExponent` Attribute_
     *
     * @used
     */
    specularExponent: string;
    /**
     * ### _`limitingConeAngle` Attribute_
     *
     * @used
     */
    limitingConeAngle: string;
}

export interface SVGFeTileProps extends SVGAttributes {
    /**
     * ### _`in` Attribute_
     *
     * @used
     */
    in: string;
}

export interface SVGFeTurbulenceProps extends SVGAttributes {
    /**
     * ### _`baseFrequency` Attribute_
     *
     * The baseFrequency attribute represents the base frequency parameter for the noise function of the ``<feTurbulence>`` filter primitive.
     * @used  `feTurbulence`
     */
    baseFrequency: string;
    /**
     * ### _`numOctaves` Attribute_
     *
     * @used
     */
    numOctaves: string;
    /**
     * ### _`seed` Attribute_
     *
     * @used
     */
    seed: string;
    /**
     * ### _`stitchTiles` Attribute_
     *
     * @used
     */
    stitchTiles: string;
    /**
     * ### _`type` Attribute_
     *
     * Defines the type of the element.
     * @used  `button` `input` `command` `embed` `object` `script` `source` `styles` `menu` `link`
     */
    type: string;
}

export interface SVGFilterProps extends SVGAttributes {
    /**
     * ### _`x` Attribute_
     *
     * @used
     */
    x: string;
    /**
     * ### _`y` Attribute_
     *
     * @used
     */
    y: string;
    /**
     * ### _`width` Attribute_
     *
     * For the elements listed here, this establishes the element's width.
     * @used  `canvas` `embed` `iframe` `img` `input` `object` `video`
     */
    width: string;
    /**
     * ### _`height` Attribute_
     *
     * Specifies the height of elements listed here. For all other elements, use the CSS height property.
     * @used  `canvas` `embed` `iframe` `img` `input` `object` `video`
     */
    height: string;
    /**
     * ### _`filterRes` Attribute_
     *
     * The filterRes attribute indicates the width and height of the intermediate images in pixels of a filter primitive.
     * @deprecated
     * @used
     */
    filterRes: string;
    /**
     * ### _`filterUnits` Attribute_
     *
     * The filterUnits attribute defines the coordinate system for the attributes x, y, width and height.
     * @used
     */
    filterUnits: string;
    /**
     * ### _`primitiveUnits` Attribute_
     *
     * @used
     */
    primitiveUnits: string;
    /**
     * ### _`xlink:href` Attribute_
     *
     * @used
     */
    xLinkHref: string;
}

export interface SVGForeignObjectProps extends SVGAttributes {
    /**
     * ### _`height` Attribute_
     *
     * Specifies the height of elements listed here. For all other elements, use the CSS height property.
     * @used  `canvas` `embed` `iframe` `img` `input` `object` `video`
     */
    height: string;
    /**
     * ### _`width` Attribute_
     *
     * For the elements listed here, this establishes the element's width.
     * @used  `canvas` `embed` `iframe` `img` `input` `object` `video`
     */
    width: string;
    /**
     * ### _`x` Attribute_
     *
     * @used
     */
    x: string;
    /**
     * ### _`y` Attribute_
     *
     * @used
     */
    y: string;
}

export interface SVGGProps extends SVGAttributes {}

export interface SVGHatchProps extends SVGAttributes {}

export interface SVGHatchpathProps extends SVGAttributes {}

export interface SVGImageProps extends SVGAttributes {
    /**
     * ### _`x` Attribute_
     *
     * @used
     */
    x: string;
    /**
     * ### _`y` Attribute_
     *
     * @used
     */
    y: string;
    /**
     * ### _`width` Attribute_
     *
     * For the elements listed here, this establishes the element's width.
     * @used  `canvas` `embed` `iframe` `img` `input` `object` `video`
     */
    width: string;
    /**
     * ### _`height` Attribute_
     *
     * Specifies the height of elements listed here. For all other elements, use the CSS height property.
     * @used  `canvas` `embed` `iframe` `img` `input` `object` `video`
     */
    height: string;
    /**
     * ### _`href` Attribute_
     *
     * The URL of a linked resource.
     * @used  `a` `area` `base` `link`
     */
    href: string;
    /**
     * ### _`xlink:href` Attribute_
     *
     * @used
     */
    xLinkHref: string;
    /**
     * ### _`preserveAspectRatio` Attribute_
     *
     * @used
     */
    preserveAspectRatio: string;
    /**
     * ### _`crossorigin` Attribute_
     *
     * How the element handles cross-origin requests
     * @used  `audio` `img` `link` `script` `video`
     */
    crossOrigin: "use-credentials" | "anonymous";
}

export interface SVGLineProps extends SVGAttributes {
    /**
     * ### _`x1` Attribute_
     *
     * @used
     */
    x1: string;
    /**
     * ### _`x2` Attribute_
     *
     * @used
     */
    x2: string;
    /**
     * ### _`y1` Attribute_
     *
     * @used
     */
    y1: string;
    /**
     * ### _`y2` Attribute_
     *
     * @used
     */
    y2: string;
    /**
     * ### _`pathLength` Attribute_
     *
     * @used
     */
    pathLength: string;
}

export interface SVGLinearGradientProps extends SVGAttributes {
    /**
     * ### _`gradientUnits` Attribute_
     *
     * @used
     */
    gradientUnits: string;
    /**
     * ### _`gradientTransform` Attribute_
     *
     * @used
     */
    gradientTransform: string;
    /**
     * ### _`href` Attribute_
     *
     * The URL of a linked resource.
     * @used  `a` `area` `base` `link`
     */
    href: string;
    /**
     * ### _`spreadMethod` Attribute_
     *
     * @used
     */
    spreadMethod: string;
    /**
     * ### _`x1` Attribute_
     *
     * @used
     */
    x1: string;
    /**
     * ### _`x2` Attribute_
     *
     * @used
     */
    x2: string;
    /**
     * ### _`y1` Attribute_
     *
     * @used
     */
    y1: string;
    /**
     * ### _`y2` Attribute_
     *
     * @used
     */
    y2: string;
}

export interface SVGMarkerProps extends SVGAttributes {
    /**
     * ### _`markerHeight` Attribute_
     *
     * @used
     */
    markerHeight: string;
    /**
     * ### _`markerUnits` Attribute_
     *
     * @used
     */
    markerUnits: string;
    /**
     * ### _`markerWidth` Attribute_
     *
     * @used
     */
    markerWidth: string;
    /**
     * ### _`orient` Attribute_
     *
     * @used
     */
    orient: string;
    /**
     * ### _`preserveAspectRatio` Attribute_
     *
     * @used
     */
    preserveAspectRatio: string;
    /**
     * ### _`refX` Attribute_
     *
     * @used
     */
    refX: string;
    /**
     * ### _`refY` Attribute_
     *
     * @used
     */
    refY: string;
    /**
     * ### _`viewBox` Attribute_
     *
     * @used
     */
    viewBox: string;
}

export interface SVGMaskProps extends SVGAttributes {
    /**
     * ### _`height` Attribute_
     *
     * Specifies the height of elements listed here. For all other elements, use the CSS height property.
     * @used  `canvas` `embed` `iframe` `img` `input` `object` `video`
     */
    height: string;
    /**
     * ### _`maskContentUnits` Attribute_
     *
     * @used
     */
    maskContentUnits: string;
    /**
     * ### _`maskUnits` Attribute_
     *
     * @used
     */
    maskUnits: string;
    /**
     * ### _`x` Attribute_
     *
     * @used
     */
    x: string;
    /**
     * ### _`y` Attribute_
     *
     * @used
     */
    y: string;
    /**
     * ### _`width` Attribute_
     *
     * For the elements listed here, this establishes the element's width.
     * @used  `canvas` `embed` `iframe` `img` `input` `object` `video`
     */
    width: string;
}

export interface SVGMetadataProps extends SVGAttributes {}

export interface SVGMpathProps extends SVGAttributes {
    /**
     * ### _`xlink:href` Attribute_
     *
     * @used
     */
    xLinkHref: string;
}

export interface SVGPathProps extends SVGAttributes {
    /**
     * ### _`d` Attribute_
     *
     * The d attribute defines a path to be drawn.
     * @used
     */
    d: string;
    /**
     * ### _`pathLength` Attribute_
     *
     * @used
     */
    pathLength: string;
}

export interface SVGPatternProps extends SVGAttributes {
    /**
     * ### _`height` Attribute_
     *
     * Specifies the height of elements listed here. For all other elements, use the CSS height property.
     * @used  `canvas` `embed` `iframe` `img` `input` `object` `video`
     */
    height: string;
    /**
     * ### _`href` Attribute_
     *
     * The URL of a linked resource.
     * @used  `a` `area` `base` `link`
     */
    href: string;
    /**
     * ### _`patternContentUnits` Attribute_
     *
     * @used
     */
    patternContentUnits: string;
    /**
     * ### _`patternTransform` Attribute_
     *
     * @used
     */
    patternTransform: string;
    /**
     * ### _`preserveAspectRatio` Attribute_
     *
     * @used
     */
    preserveAspectRatio: string;
    /**
     * ### _`viewBox` Attribute_
     *
     * @used
     */
    viewBox: string;
    /**
     * ### _`x` Attribute_
     *
     * @used
     */
    x: string;
}

export interface SVGPolygonProps extends SVGAttributes {
    /**
     * ### _`points` Attribute_
     *
     * @used
     */
    points: string;
    /**
     * ### _`pathLength` Attribute_
     *
     * @used
     */
    pathLength: string;
}

export interface SVGPolylineProps extends SVGAttributes {
    /**
     * ### _`points` Attribute_
     *
     * @used
     */
    points: string;
    /**
     * ### _`pathLength` Attribute_
     *
     * @used
     */
    pathLength: string;
}

export interface SVGRadialGradientProps extends SVGAttributes {
    /**
     * ### _`cx` Attribute_
     *
     * The cx attribute define the x-axis coordinate of a center point.
     * @used
     */
    cx: string;
    /**
     * ### _`cy` Attribute_
     *
     * The cy attribute define the y-axis coordinate of a center point.
     * @used
     */
    cy: string;
    /**
     * ### _`fr` Attribute_
     *
     * The fr attribute defines the radius of the focal point for the radial gradient.
     * @used
     */
    fr: string;
    /**
     * ### _`fx` Attribute_
     *
     * The fx attribute defines the x-axis coordinate of the focal point for a radial gradient.
     * @used
     */
    fx: string;
    /**
     * ### _`fy` Attribute_
     *
     * The fy attribute defines the y-axis coordinate of the focal point for a radial gradient.
     * @used
     */
    fy: string;
    /**
     * ### _`gradientUnits` Attribute_
     *
     * @used
     */
    gradientUnits: string;
    /**
     * ### _`gradientTransform` Attribute_
     *
     * @used
     */
    gradientTransform: string;
    /**
     * ### _`href` Attribute_
     *
     * The URL of a linked resource.
     * @used  `a` `area` `base` `link`
     */
    href: string;
    /**
     * ### _`r` Attribute_
     *
     * @used
     */
    r: string;
    /**
     * ### _`spreadMethod` Attribute_
     *
     * @used
     */
    spreadMethod: string;
}

export interface SVGRectProps extends SVGAttributes {
    /**
     * ### _`x` Attribute_
     *
     * @used
     */
    x: string;
    /**
     * ### _`y` Attribute_
     *
     * @used
     */
    y: string;
    /**
     * ### _`width` Attribute_
     *
     * For the elements listed here, this establishes the element's width.
     * @used  `canvas` `embed` `iframe` `img` `input` `object` `video`
     */
    width: string;
    /**
     * ### _`height` Attribute_
     *
     * Specifies the height of elements listed here. For all other elements, use the CSS height property.
     * @used  `canvas` `embed` `iframe` `img` `input` `object` `video`
     */
    height: string;
    /**
     * ### _`rx` Attribute_
     *
     * @used
     */
    rx: string;
    /**
     * ### _`ry` Attribute_
     *
     * @used
     */
    ry: string;
    /**
     * ### _`pathLength` Attribute_
     *
     * @used
     */
    pathLength: string;
}

export interface SVGSetProps extends SVGAttributes {
    /**
     * ### _`to` Attribute_
     *
     * @used
     */
    to: string;
}

export interface SVGStopProps extends SVGAttributes {
    /**
     * ### _`stop-color` Attribute_
     *
     * @used
     */
    stopColor: string;
    /**
     * ### _`stop-opacity` Attribute_
     *
     * @used
     */
    stopOpacity: string;
}

export interface SVGSvgProps extends SVGAttributes {
    /**
     * ### _`height` Attribute_
     *
     * Specifies the height of elements listed here. For all other elements, use the CSS height property.
     * @used  `canvas` `embed` `iframe` `img` `input` `object` `video`
     */
    height: string;
    /**
     * ### _`preserveAspectRatio` Attribute_
     *
     * @used
     */
    preserveAspectRatio: string;
    /**
     * ### _`viewBox` Attribute_
     *
     * @used
     */
    viewBox: string;
    /**
     * ### _`width` Attribute_
     *
     * For the elements listed here, this establishes the element's width.
     * @used  `canvas` `embed` `iframe` `img` `input` `object` `video`
     */
    width: string;
    /**
     * ### _`x` Attribute_
     *
     * @used
     */
    x: string;
    /**
     * ### _`y` Attribute_
     *
     * @used
     */
    y: string;
}

export interface SVGSwitchProps extends SVGAttributes {}

export interface SVGSymbolProps extends SVGAttributes {
    /**
     * ### _`height` Attribute_
     *
     * Specifies the height of elements listed here. For all other elements, use the CSS height property.
     * @used  `canvas` `embed` `iframe` `img` `input` `object` `video`
     */
    height: string;
    /**
     * ### _`preserveAspectRatio` Attribute_
     *
     * @used
     */
    preserveAspectRatio: string;
    /**
     * ### _`refX` Attribute_
     *
     * @used
     */
    refX: string;
    /**
     * ### _`refY` Attribute_
     *
     * @used
     */
    refY: string;
    /**
     * ### _`viewBox` Attribute_
     *
     * @used
     */
    viewBox: string;
    /**
     * ### _`width` Attribute_
     *
     * For the elements listed here, this establishes the element's width.
     * @used  `canvas` `embed` `iframe` `img` `input` `object` `video`
     */
    width: string;
    /**
     * ### _`x` Attribute_
     *
     * @used
     */
    x: string;
    /**
     * ### _`y` Attribute_
     *
     * @used
     */
    y: string;
}

export interface SVGTextProps extends SVGAttributes {
    /**
     * ### _`x` Attribute_
     *
     * @used
     */
    x: string;
    /**
     * ### _`y` Attribute_
     *
     * @used
     */
    y: string;
    /**
     * ### _`dx` Attribute_
     *
     * The dx attribute indicates a shift along the x-axis on the position of an element or its content.
     * @used
     */
    dx: string;
    /**
     * ### _`dy` Attribute_
     *
     * The dy attribute indicates a shift along the y-axis on the position of an element or its content.
     * @used
     */
    dy: string;
    /**
     * ### _`rotate` Attribute_
     *
     * @used
     */
    rotate: string;
    /**
     * ### _`lengthAdjust` Attribute_
     *
     * @used
     */
    lengthAdjust: string;
    /**
     * ### _`textLength` Attribute_
     *
     * @used
     */
    textLength: string;
}

export interface SVGTextPathProps extends SVGAttributes {
    /**
     * ### _`href` Attribute_
     *
     * The URL of a linked resource.
     * @used  `a` `area` `base` `link`
     */
    href: string;
    /**
     * ### _`lengthAdjust` Attribute_
     *
     * @used
     */
    lengthAdjust: string;
    /**
     * ### _`method` Attribute_
     *
     * Defines which HTTP method to use when submitting the form. Can be GET (default) or POST.
     * @used  `form`
     */
    method: "post" | "get" | "dialog";
    /**
     * ### _`path` Attribute_
     *
     * @used
     */
    path: string;
    /**
     * ### _`spacing` Attribute_
     *
     * @used
     */
    spacing: string;
    /**
     * ### _`startOffset` Attribute_
     *
     * @used
     */
    startOffset: string;
    /**
     * ### _`textLength` Attribute_
     *
     * @used
     */
    textLength: string;
}

export interface SVGTitleProps extends SVGAttributes {}

export interface SVGTspanProps extends SVGAttributes {
    /**
     * ### _`x` Attribute_
     *
     * @used
     */
    x: string;
    /**
     * ### _`y` Attribute_
     *
     * @used
     */
    y: string;
    /**
     * ### _`dx` Attribute_
     *
     * The dx attribute indicates a shift along the x-axis on the position of an element or its content.
     * @used
     */
    dx: string;
    /**
     * ### _`dy` Attribute_
     *
     * The dy attribute indicates a shift along the y-axis on the position of an element or its content.
     * @used
     */
    dy: string;
    /**
     * ### _`rotate` Attribute_
     *
     * @used
     */
    rotate: string;
    /**
     * ### _`lengthAdjust` Attribute_
     *
     * @used
     */
    lengthAdjust: string;
    /**
     * ### _`textLength` Attribute_
     *
     * @used
     */
    textLength: string;
}

export interface SVGUseProps extends SVGAttributes {
    /**
     * ### _`href` Attribute_
     *
     * The URL of a linked resource.
     * @used  `a` `area` `base` `link`
     */
    href: string;
    /**
     * ### _`xlink:href` Attribute_
     *
     * @used
     */
    xLinkHref: string;
    /**
     * ### _`x` Attribute_
     *
     * @used
     */
    x: string;
    /**
     * ### _`y` Attribute_
     *
     * @used
     */
    y: string;
    /**
     * ### _`width` Attribute_
     *
     * For the elements listed here, this establishes the element's width.
     * @used  `canvas` `embed` `iframe` `img` `input` `object` `video`
     */
    width: string;
    /**
     * ### _`height` Attribute_
     *
     * Specifies the height of elements listed here. For all other elements, use the CSS height property.
     * @used  `canvas` `embed` `iframe` `img` `input` `object` `video`
     */
    height: string;
}

export interface SVGViewProps extends SVGAttributes {}

export interface HTMLAttributes extends CommonAttributes, Events {
    /**
     * ### _`class` Attribute_
     *
     * Often used with CSS to style elements with common properties.
     * @used Global attribute
     */
    className: string;
    /**
     * ### _`id` Attribute_
     *
     * Often used with CSS to style a specific element. The value of this attribute must be unique.
     * @used Global attribute
     */
    id: string;
    /**
     * ### _`lang` Attribute_
     *
     * Defines the language used in the element.
     * @used Global attribute
     */
    lang: string;
    /**
     * ### _`accesskey` Attribute_
     *
     * Keyboard shortcut to activate or add focus to the element.
     * @used Global attribute
     */
    accessKey: string;
    /**
     * ### _`autocapitalize` Attribute_
     *
     * Sets whether input is automatically capitalized when entered by user
     * @used Global attribute
     */
    autoCapitalize:
        | "off"
        | "none"
        | "on"
        | "sentences"
        | "words"
        | "characters";
    /**
     * ### _`contenteditable` Attribute_
     *
     * Indicates whether the element's content is editable.
     * @used Global attribute
     */
    contentEditable: "true" | "false";
    /**
     * ### _`contextmenu` Attribute_
     *
     * Defines the ID of a ``<menu>`` element which will serve as the element's context menu.
     * @used Global attribute
     */
    contextMenu: string;
    /**
     * ### _`compact` Attribute_
     *
     * @used Global attribute
     */
    compact: string;
    /**
     * ### _`dir` Attribute_
     *
     * Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)
     * @used Global attribute
     */
    dir: "ltr" | "rtl" | "auto";
    /**
     * ### _`draggable` Attribute_
     *
     * Defines whether the element can be dragged.
     * @used Global attribute
     */
    draggable: "true" | "false";
    /**
     * ### _`hidden` Attribute_
     *
     * Prevents rendering of given element, while keeping child elements, e.g. script elements, active.
     * @used Global attribute
     */
    hidden: boolean;
    /**
     * ### _`itemprop` Attribute_
     *
     * @used Global attribute
     */
    itemProp: string;
    /**
     * ### _`playsinline` Attribute_
     *
     * @used Global attribute
     */
    playsInline: string;
    /**
     * ### _`role` Attribute_
     *
     * Defines an explicit role for an element for use by assistive technologies.
     * @used Global attribute
     */
    role: string;
    /**
     * ### _`slot` Attribute_
     *
     * Assigns a slot in a shadow DOM shadow tree to an element.
     * @used Global attribute
     */
    slot: string;
    /**
     * ### _`spellcheck` Attribute_
     *
     * Indicates whether spell checking is allowed for the element.
     * @used Global attribute
     */
    spellCheck: "true" | "false";
    /**
     * ### _`tabindex` Attribute_
     *
     * Overrides the browser's default tab order and follows the one specified instead.
     * @used Global attribute
     */
    tabIndex: string;
    /**
     * ### _`title` Attribute_
     *
     * Text to be displayed in a tooltip when hovering over the element.
     * @used Global attribute
     */
    title: string;
    /**
     * ### _`translate` Attribute_
     *
     * Specify whether an element's attribute values and the values of its Text node children are to be translated when the page is localized, or whether to leave them unchanged.
     * @used Global attribute
     */
    translate: "yes" | "no";
    /**
     * ### _`aria-autocomplete` Attribute_
     *
     * @used Global attribute
     */
    ariaAutocomplete: string;
    /**
     * ### _`aria-checked` Attribute_
     *
     * @used Global attribute
     */
    ariaChecked: string;
    /**
     * ### _`aria-disabled` Attribute_
     *
     * @used Global attribute
     */
    ariaDisabled: string;
    /**
     * ### _`aria-errormessage` Attribute_
     *
     * @used Global attribute
     */
    ariaErrormessage: string;
    /**
     * ### _`aria-expanded` Attribute_
     *
     * @used Global attribute
     */
    ariaExpanded: string;
    /**
     * ### _`aria-haspopup` Attribute_
     *
     * @used Global attribute
     */
    ariaHaspopup: string;
    /**
     * ### _`aria-hidden` Attribute_
     *
     * @used Global attribute
     */
    ariaHidden: string;
    /**
     * ### _`aria-invalid` Attribute_
     *
     * @used Global attribute
     */
    ariaInvalid: string;
    /**
     * ### _`aria-label` Attribute_
     *
     * @used Global attribute
     */
    ariaLabel: string;
    /**
     * ### _`aria-level` Attribute_
     *
     * @used Global attribute
     */
    ariaLevel: string;
    /**
     * ### _`aria-modal` Attribute_
     *
     * @used Global attribute
     */
    ariaModal: string;
    /**
     * ### _`aria-multiline` Attribute_
     *
     * @used Global attribute
     */
    ariaMultiline: string;
    /**
     * ### _`aria-multiselectable` Attribute_
     *
     * @used Global attribute
     */
    ariaMultiselectable: string;
    /**
     * ### _`aria-orientation` Attribute_
     *
     * @used Global attribute
     */
    ariaOrientation: string;
    /**
     * ### _`aria-placeholder` Attribute_
     *
     * @used Global attribute
     */
    ariaPlaceholder: string;
    /**
     * ### _`aria-pressed` Attribute_
     *
     * @used Global attribute
     */
    ariaPressed: string;
    /**
     * ### _`aria-readonly` Attribute_
     *
     * @used Global attribute
     */
    ariaReadonly: string;
    /**
     * ### _`aria-required` Attribute_
     *
     * @used Global attribute
     */
    ariaRequired: string;
    /**
     * ### _`aria-selected` Attribute_
     *
     * @used Global attribute
     */
    ariaSelected: string;
    /**
     * ### _`aria-sort` Attribute_
     *
     * @used Global attribute
     */
    ariaSort: string;
    /**
     * ### _`aria-valuemax` Attribute_
     *
     * @used Global attribute
     */
    ariaValuemax: string;
    /**
     * ### _`aria-valuemin` Attribute_
     *
     * @used Global attribute
     */
    ariaValuemin: string;
    /**
     * ### _`aria-valuenow` Attribute_
     *
     * @used Global attribute
     */
    ariaValuenow: string;
    /**
     * ### _`aria-valuetext` Attribute_
     *
     * @used Global attribute
     */
    ariaValuetext: string;
    /**
     * ### _`aria-busy` Attribute_
     *
     * @used Global attribute
     */
    ariaBusy: string;
    /**
     * ### _`aria-live` Attribute_
     *
     * @used Global attribute
     */
    ariaLive: string;
    /**
     * ### _`aria-relevant` Attribute_
     *
     * @used Global attribute
     */
    ariaRelevant: string;
    /**
     * ### _`aria-atomic` Attribute_
     *
     * @used Global attribute
     */
    ariaAtomic: string;
    /**
     * ### _`aria-dropeffect` Attribute_
     *
     * @used Global attribute
     */
    ariaDropeffect: string;
    /**
     * ### _`aria-grabbed` Attribute_
     *
     * @used Global attribute
     */
    ariaGrabbed: string;
    /**
     * ### _`aria-activedescendant` Attribute_
     *
     * @used Global attribute
     */
    ariaActivedescendant: string;
    /**
     * ### _`aria-colcount` Attribute_
     *
     * @used Global attribute
     */
    ariaColcount: string;
    /**
     * ### _`aria-colindex` Attribute_
     *
     * @used Global attribute
     */
    ariaColindex: string;
    /**
     * ### _`aria-colspan` Attribute_
     *
     * @used Global attribute
     */
    ariaColspan: string;
    /**
     * ### _`aria-controls` Attribute_
     *
     * @used Global attribute
     */
    ariaControls: string;
    /**
     * ### _`aria-describedby` Attribute_
     *
     * @used Global attribute
     */
    ariaDescribedby: string;
    /**
     * ### _`aria-description` Attribute_
     *
     * @used Global attribute
     */
    ariaDescription: string;
    /**
     * ### _`aria-details` Attribute_
     *
     * @used Global attribute
     */
    ariaDetails: string;
    /**
     * ### _`aria-flowto` Attribute_
     *
     * @used Global attribute
     */
    ariaFlowto: string;
    /**
     * ### _`aria-labelledby` Attribute_
     *
     * @used Global attribute
     */
    ariaLabelledby: string;
    /**
     * ### _`aria-owns` Attribute_
     *
     * @used Global attribute
     */
    ariaOwns: string;
    /**
     * ### _`aria-posinset` Attribute_
     *
     * @used Global attribute
     */
    ariaPosinset: string;
    /**
     * ### _`aria-rowcount` Attribute_
     *
     * @used Global attribute
     */
    ariaRowcount: string;
    /**
     * ### _`aria-rowindex` Attribute_
     *
     * @used Global attribute
     */
    ariaRowindex: string;
    /**
     * ### _`aria-rowspan` Attribute_
     *
     * @used Global attribute
     */
    ariaRowspan: string;
    /**
     * ### _`aria-setsize` Attribute_
     *
     * @used Global attribute
     */
    ariaSetsize: string;
    /**
     * ### _`aria-current` Attribute_
     *
     * @used Global attribute
     */
    ariaCurrent: string;
    /**
     * ### _`aria-keyshortcuts` Attribute_
     *
     * @used Global attribute
     */
    ariaKeyshortcuts: string;
    /**
     * ### _`aria-roledescription` Attribute_
     *
     * @used Global attribute
     */
    ariaRoledescription: string;
}
