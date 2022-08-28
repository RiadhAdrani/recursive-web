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
    accentColor: Color;
    alignContent:
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
    alignItems:
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
    alignSelf:
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
    alignTracks: "start" | "space-between" | "center";
    all: string;
    animation: string;
    animationDelay: string;
    animationDuration: string;
    animationFillMode: "none" | "forwards" | "backwards" | "both";
    animationIterationCount: number;
    animationName: string;
    animationPlayState: "running" | "paused";
    animationTimingFunction:
        | "ease"
        | "ease-in"
        | "ease-out"
        | "ease-in-out"
        | "linear"
        | "step-start"
        | "step-end";
    appearance:
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
    ascentOverride: string;
    aspectRatio: "auto";
    backdropFilter: "none";
    backfaceVisibility: "hidden" | "visible";
    background: string;
    backgroundAttachment: "scroll" | "fixed" | "local";
    backgroundBlendMode: string;
    backgroundClip: "border-box" | "padding-box" | "content-box" | "text";
    backgroundColor: Color;
    backgroundImage: string;
    backgroundOrigin: "border-box" | "padding-box" | "content-box";
    backgroundPosition: "top" | "bottom" | "left" | "right" | "center";
    backgroundPositionX: "left" | "right" | "center";
    backgroundPositionY: "top" | "center" | "bottom";
    backgroundRepeat:
        | "repeat-x"
        | "repeat-y"
        | "repeat"
        | "space"
        | "round"
        | "no-repeat";
    backgroundSize: "cover" | "contain";
    blockSize: "max-content" | "min-content";
    borderBlock: string;
    borderBlockColor: Color;
    borderBlockStyle: "dashed" | "dotted" | "groove";
    borderBlockWidth: "thick";
    borderBlockEnd: string;
    borderBlockEndColor: Color;
    borderBlockEndStyle: "dashed" | "dotted" | "groove";
    borderBlockEndWidth: "thick";
    borderBlockStart: string;
    borderBlockStartColor: Color;
    borderBlockStartStyle: "dashed" | "dotted" | "groove";
    borderBlockStartWidth: "thick";
    border: string;
    borderBottom: string;
    borderBottomColor: Color;
    borderBottomLeftRadius: string;
    borderBottomRightRadius: string;
    borderBottomStyle:
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
    borderBottomWidth: "thin" | "medium" | "thick";
    borderCollapse: "collapse" | "seperate";
    borderColor: Color;
    borderEndEndRadius: string;
    borderEndStartRadius: string;
    borderStartEndRadius: string;
    borderStartStartRadius: string;
    borderImage: string;
    borderImageOutset: string;
    borderImageRepeat: "stretch" | "repeat" | "round" | "space";
    borderImageSlice: "fill";
    borderImageSource: string;
    borderImageWidth: string;
    borderInline: Color;
    borderInlineColor: Color;
    borderInlineStyle: "dashed" | "dotted" | "groove";
    borderInlineWidth: string;
    borderInlineEnd: string;
    borderInlineEndColor: Color;
    borderInlineEndStyle: "dashed" | "dotted" | "groove";
    borderInlineEndWidth: string;
    borderStartEnd: string;
    borderInlineStartColor: Color;
    borderInlineStartStyle: "dashed" | "dotted" | "groove";
    borderInlineStartWidth: string;
    borderLeft: string;
    borderLeftColor: Color;
    borderLeftStyle:
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
    borderLeftWidth: string;
    borderRadius: string;
    borderRight: string;
    borderRightColor: Color;
    borderRightStyle:
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
    borderRightWidth: string;
    borderSpacing: string;
    borderStyle:
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
    borderTop: string;
    borderTopColor: Color;
    borderTopLeftRadius: string;
    borderTopRightRadius: string;
    borderTopStyle:
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
    borderTopWidth: string;
    borderWidth: string;
    bottom: "auto";
    boxDecorationBreak: "slice" | "clone";
    boxShadow: "none";
    boxSizing: "border-box" | "box-sizing";
    breakAfter:
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
    breakBefore:
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
    breakInside:
        | "auto"
        | "avoid"
        | "avoid-page"
        | "avoid-column"
        | "avoid-region";
    captionSide:
        | "top"
        | "bottom"
        | "block-start"
        | "block-end"
        | "inline-start"
        | "inline-end";
    caretColor: Color;
    clear: "none" | "left" | "right" | "both" | "inline-start" | "inline-end";
    clip: "auto";
    clipPath:
        | "none"
        | "margin-box"
        | "border-box"
        | "padding-box"
        | "content-box"
        | "fill-box"
        | "stroke"
        | "view-box";
    color: Color;
    colorAdjust: string;
    colorScheme: "normal" | "light" | "dark";
    columnCount: "auto";
    columnFill: "auto" | "balance" | "balance-all";
    columnGap: "normal";
    columnRule: string;
    columnRuleColor: Color;
    columnRuleStyle:
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
    columnRuleWidth: "thin" | "medium" | "thick";
    columnSpan: "none" | "all";
    columnWidth: "auto";
    columns: "auto";
    contain:
        | "none"
        | "strict"
        | "content"
        | "size"
        | "layout"
        | "style"
        | "paint";
    content:
        | "normal"
        | "none"
        | "open-quote"
        | "close-quote"
        | "no-open-quote"
        | "no-close-quote";
    contentVisibility: "visible" | "hidden" | "auto";
    counterIncrement: string;
    counterReset: string;
    counterSet: string;
    cursor:
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
    direction: "ltr" | "rtl";
    display:
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
    emptyCells: "show" | "hide";
    filter: "none";
    flex: "auto" | "none";
    flexBasis: "max-content" | "min-content" | "fit-content" | "auto";
    flexDirection: "row" | "row-reverse" | "column" | "column-reverse";
    flexFlow: string;
    flexGrow: string;
    flexShrink: string;
    flexWrap: "nowrap" | "wrap" | "wrap-reverse";
    float: "left" | "right" | "none" | "inline-start" | "inline-end";
    font: string;
    fontFamily:
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
    fontFeatureSettings: string;
    fontKerning: "auto" | "normal" | "none";
    fontSize:
        | "xx-small"
        | "x-small"
        | "small"
        | "medium"
        | "large"
        | "x-large"
        | "xx-large"
        | "xxx-large";
    fontSizeAdjust: "none";
    fontStretch:
        | "ultra-condensed"
        | "extra-condensed"
        | "condensed"
        | "semi-condensed"
        | "normal"
        | "semi-expanded"
        | "expanded"
        | "extra-expanded"
        | "ultra-expanded";
    fontStyle: "normal" | "italic" | "oblique";
    fontSynthesis: "none" | "weight" | "style" | "small-caps";
    fontVariant: string;
    fontVariantAlternates: string;
    fontVariantCaps: string;
    fontVariantEastAsian: string;
    fontVariantLigatures: string;
    fontVariantNumeric: string;
    fontVariantPosition: string;
    fontVariantSettings: string;
    fontWeight:
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
    forcedColorAdjust: Color;
    gap: string;
    grid: "none";
    gridArea: string;
    gridAutoColumns: "min-content" | "max-content" | "auto";
    gridAutoFlow: "row" | "column" | "dense";
    gridAutoRows: "min-content" | "max-content" | "auto";
    gridColumn: "auto";
    gridColumnEnd: "auto";
    gridColumnGap: "auto";
    gridColumnStart: string;
    gridGap: string;
    gridRow: "auto";
    gridRowEnd: "auto";
    gridRowGap: "auto";
    gridRowStart: string;
    gridTemplate: "none";
    gridTemplateAreas: "none";
    gridTemplateColumns: "none";
    gridTemplateRows: "none";
    hangingPunctuation: "none" | "first" | "last" | "force-end" | "allow-end";
    height: "max-content" | "min-content" | "auto";
    hyphens: "none" | "manual" | "auto";
    isolation: "auto" | "isolate";
    imageOrientation: "none" | "from-image";
    imageRendering: "auto" | "crisp-edge" | "pixelated";
    imageResolution: "from-image";
    initialLetter: "normal";
    inlineSize: "auto" | "max-content" | "min-content";
    inset: "auto";
    insetBlock: "auto";
    insetBlockStart: "auto";
    insetInlineStart: "auto";
    justifyContent:
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
    justifyItems:
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
    justifySelf:
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
    left: "auto";
    letterSpacing: "normal";
    lineHeight: "normal";
    lineBreak: "auto" | "loose" | "normal" | "strict" | "anywhere";
    listStyle: string;
    listStyleImage: "none";
    listStylePosition: "inside" | "outside";
    listStyleType:
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
    margin: "auto";
    marginBlock: string;
    marginBlockEnd: "auto";
    marginBlockStart: "auto";
    marginBottom: "auto";
    marginInline: "auto";
    marginInlineEnd: "auto";
    marginInlineStart: "auto";
    marginLeft: "auto";
    marginRight: "auto";
    marginTop: "auto";
    mask: "none";
    maskBorder: string;
    maskBorderMode: "luminance" | "alpha";
    maskBorderOutset: string;
    maskBorderRepeat: "stretch" | "repeat" | "round" | "space";
    maskBorderSlice: string;
    maskBorderSource: "none";
    maskBorderWidth: "auto";
    maskClip:
        | "content-box"
        | "padding-box"
        | "border-box"
        | "margin-box"
        | "fill-box"
        | "stroke-box"
        | "view-box"
        | "no-clip";
    maskComposite: "add" | "subtract" | "intersect" | "exclude";
    maskImage: "none";
    maskMode: "alpha" | "luminance" | "match-source";
    maskOrigin:
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
    maskPosition: "top" | "bottom" | "left" | "right" | "center";
    maskRepeat:
        | "repeat-x"
        | "repeat-y"
        | "repeat"
        | "space"
        | "round"
        | "no-repeat";
    maskSize: "cover" | "contain";
    maskType: "alpha" | "luminance";
    mathStyle: "normal" | "compact";
    maxBlockSize: "none" | "max-content" | "min-content";
    maxInlineSize: "none" | "max-content" | "min-content";
    minBlockSize: "none" | "max-content" | "min-content";
    minInlineSize: "none" | "max-content" | "min-content";
    maxHeight: "none" | "max-content" | "min-content";
    maxWidth: "none" | "max-content" | "min-content";
    minHeight: "none" | "max-content" | "min-content";
    minWidth: "none" | "max-content" | "min-content";
    mixBlendMode:
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
    objectFit: "contain" | "cover" | "fill" | "none" | "scale-down";
    objectPosition: "top" | "bottom" | "left" | "right" | "center";
    offset: "none" | "auto";
    offsetAnchor: "top" | "bottom" | "left" | "right" | "center" | "auto";
    offsetDistance: string;
    offsetPath: "none" | "margin-box" | "stroke-box";
    offsetPosition: "top" | "bottom" | "left" | "right" | "center" | "auto";
    offsetRotate: "auto";
    opacity: string;
    order: string;
    orphans: string;
    outline: string;
    outlineColor: Color;
    outlineOffset: string;
    outlineStyle:
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
    outlineWidth: "thin" | "medium" | "thick";
    overflow: "visible" | "hidden" | "clip" | "scroll" | "auto";
    overflowAnchor: "auto" | "none";
    overflowBlock: "visible" | "hidden" | "scroll" | "auto";
    overflowClipMargin: string;
    overflowInline: "visible" | "hidden" | "scroll" | "auto";
    overflowWrap: "normal" | "break-word" | "anywhere";
    overflowX: "visible" | "hidden" | "clip" | "scroll" | "auto";
    overflowY: "visible" | "hidden" | "clip" | "scroll" | "auto";
    overscrollBehavior: "auto" | "contain" | "none";
    overscrollBehaviorBlock: "auto" | "contain" | "none";
    overscrollBehaviorInline: "auto" | "contain" | "none";
    overscrollBehaviorX: "auto" | "contain" | "none";
    overscrollBehaviorY: "auto" | "contain" | "none";
    right: "auto";
    padding: string;
    paddingBlock: string;
    paddingBlockEnd: string;
    paddingBlockStart: string;
    paddingBottom: string;
    paddingInline: string;
    paddingInlineEnd: string;
    paddingInlineStart: string;
    paddingLeft: string;
    paddingRight: string;
    paddingTop: string;
    pageBreakAfter: string;
    pageBreakBefore: string;
    pageBreakInside: string;
    perspective: "none";
    perspectiveOrigin: "top" | "center" | "right";
    placeContent:
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
    placeItems:
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
    pointerEvents:
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
    position: "static" | "relative" | "absolute" | "fixed" | "sticky";
    quotes: "none" | "auto";
    resize: string;
    rotate: "none";
    rowGap: string;
    rubyAlign: "start" | "center" | "space-between" | "space-around";
    rubyPosition: "over" | "under" | "inter-character" | "alternate";
    scale: string;
    scrollBehavior: "auto" | "smooth";
    scrollMargin: string;
    scrollMarginBlock: string;
    scrollMarginBlockEnd: string;
    scrollMarginBlockStart: string;
    scrollMarginBottom: string;
    scrollMarginInline: string;
    scrollMarginInlineEnd: string;
    scrollMarginInlineStart: string;
    scrollMarginLeft: string;
    scrollMarginRight: string;
    scrollMarginTop: string;
    scrollPadding: string;
    scrollPaddingBlock: string;
    scrollPaddingBlockEnd: string;
    scrollPaddingBlockStart: string;
    scrollPaddingBottom: string;
    scrollPaddingInline: string;
    scrollPaddingInlineStart: string;
    scrollPaddingLeft: string;
    scrollPaddingRight: string;
    scrollPaddingTop: string;
    scrollSnapAlign: "none" | "start" | "end" | "center";
    scrollSnapStop: "normal" | "always";
    scrollSnapType:
        | "none"
        | "x"
        | "y"
        | "block"
        | "inline"
        | "both"
        | "mandatory"
        | "proximity";
    scrollbarColor: Color;
    scrollbarGutter: "auto" | "stable" | "both-edges";
    scrollbarWidth: "auto" | "thin" | "none";
    shapeImageThreshold: string;
    shapeMargin: string;
    shapeOutside:
        | "none"
        | "margin-box"
        | "content-box"
        | "border-box"
        | "padding-box";
    tabSize: string;
    tableLayout: "auto" | "fixed";
    textAlign:
        | "start"
        | "end"
        | "left"
        | "right"
        | "center"
        | "justify"
        | "justify-all"
        | "match-parent";
    textAlignLast: "start" | "end" | "left" | "right" | "center" | "justify";
    textCombineUpright: "none" | "all";
    textDecoration: "none";
    textDecorationColor: Color;
    textDecorationLine:
        | "none"
        | "underline"
        | "overline"
        | "line-through"
        | "blink";
    textDecorationSkip:
        | "none"
        | "objects"
        | "spaces"
        | "edges"
        | "box-decoration"
        | "leading-spaces"
        | "trailing-spaces";
    textDecorationSkipInk: "none" | "auto" | "all";
    textDecorationStyle: "solid" | "double" | "dotted" | "dashed" | "wavy";
    textDecorationThickness: "auto" | "from-font";
    textEmphasis: "none";
    textEmphasisColor: Color;
    textEmphasisPosition: "over" | "under" | "right" | "left";
    textEmphasisStyle:
        | "none"
        | "filled"
        | "open"
        | "dot"
        | "circle"
        | "double-circle"
        | "triangle"
        | "sesame";
    textIndent: string;
    textJustify:
        | "none"
        | "auto"
        | "inter-word"
        | "inter-character"
        | "distribute";
    textOrientation:
        | "mixed"
        | "upright"
        | "sideways-right"
        | "sideways"
        | "use-glyph-orientation";
    textOverflow: "clip" | "ellipsis";
    textRendering:
        | "auto"
        | "optimizeSpeed"
        | "optimizeLegibility"
        | "geometricPrecision";
    textShadow: string;
    textSizeAdjust: string;
    textTransform:
        | "none"
        | "capitalize"
        | "uppercase"
        | "lowercase"
        | "full-width"
        | "full-size-kana";
    textUnderlineOffset: "auto";
    textUnderlinePosition: "auto" | "under" | "left" | "right";
    top: "auto";
    touchAction:
        | "auto"
        | "none"
        | "pan-x"
        | "pan-y"
        | "manipulation"
        | "pinch-zoom";
    transform: string;
    transformBox:
        | "content-box"
        | "border-box"
        | "fill-box"
        | "stroke-box"
        | "view-box";
    transformOrigin: "left" | "center" | "right" | "top" | "bottom";
    transformStyle: "flat" | "preserve-3d";
    transition: string;
    transitionDelay: string;
    transitionDuration: string;
    transitionProperty: string;
    transitionTimingFunction:
        | "ease"
        | "ease-in"
        | "ease-out"
        | "ease-in-out"
        | "linear"
        | "step-start"
        | "step-end";
    translate: "none";
    unicodeBidi: string;
    userSelect: "none" | "auto" | "text" | "contain" | "all";
    verticalAlign:
        | "baseline"
        | "sub"
        | "super"
        | "text-top"
        | "text-bottom"
        | "middle"
        | "top"
        | "bottom";
    visibility: "visible" | "hidden" | "collapse";
    whiteSpace:
        | "normal"
        | "nowrap"
        | "pre"
        | "pre-wrap"
        | "pre-line"
        | "break-spaces";
    width: "max-content" | "min-content" | "auto";
    widows: string;
    wordBreak: "normal" | "break-all" | "keep-all" | "break-word";
    wordSpacing: "normal";
    wordWrap: "normal" | "break-word" | "anywhere";
    writingMode: "horizontal-tb" | "vertical-rl" | "vertical-lr";
    zIndex: "auto";
    zoom: string;
    webkitLineClamp: string;
    webkitAppearance: string;
    webkitTextEmphasis: string;
    webkitHyphens: string;
    mozAppearance: string;
    mozTabSize: string;
    mozHyphens: string;
    oTabSize: string;
    msHyphens: string;
}

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

export interface Events {
    onAbort: (event: Event) => void;
    onAnimationEnd: (event: Event) => void;
    onAnimationIteration: (event: Event) => void;
    onAnimationStart: (event: Event) => void;
    onBeforePrint: (event: Event) => void;
    onBeforeUnload: (event: Event) => void;
    onBlur: (event: Event) => void;
    onCanPlay: (event: Event) => void;
    onCanPlayThrough: (event: Event) => void;
    onChange: (event: Event) => void;
    onContextMenu: (event: Event) => void;
    onCopy: (event: Event) => void;
    onCut: (event: Event) => void;
    onDurationChange: (event: Event) => void;
    onEnded: (event: Event) => void;
    onError: (event: Event) => void;
    onFocus: (event: Event) => void;
    onFocusIn: (event: Event) => void;
    onFocusOut: (event: Event) => void;
    onFullScreenChange: (event: Event) => void;
    onHashChange: (event: Event) => void;
    onInvalid: (event: Event) => void;
    onLoad: (event: Event) => void;
    onLoadedData: (event: Event) => void;
    onLoadedMetaData: (event: Event) => void;
    onLoadStart: (event: Event) => void;
    onMessage: (event: Event) => void;
    onOffline: (event: Event) => void;
    onOnline: (event: Event) => void;
    onOpen: (event: Event) => void;
    onPageHide: (event: Event) => void;
    onPageShow: (event: Event) => void;
    onPaste: (event: Event) => void;
    onPause: (event: Event) => void;
    onPlay: (event: Event) => void;
    onPlaying: (event: Event) => void;
    onProgress: (event: Event) => void;
    onRateChange: (event: Event) => void;
    onResize: (event: Event) => void;
    onReset: (event: Event) => void;
    onScroll: (event: Event) => void;
    onSearch: (event: Event) => void;
    onSeeked: (event: Event) => void;
    onSeeking: (event: Event) => void;
    onSelect: (event: Event) => void;
    onSelectionChange: (event: Event) => void;
    onShow: (event: Event) => void;
    onStalled: (event: Event) => void;
    onStorage: (event: Event) => void;
    onSubmit: (event: Event) => void;
    onSuspend: (event: Event) => void;
    onTimeUpdate: (event: Event) => void;
    onToggle: (event: Event) => void;
    onTransitionEnd: (event: Event) => void;
    onUnload: (event: Event) => void;
    onVolumeChange: (event: Event) => void;
    onWaiting: (event: Event) => void;
    onWheel: (event: WheelEvent) => void;
    onInput: (event: InputEvent) => void;
    onDrag: (event: DragEvent) => void;
    onDragEnd: (event: DragEvent) => void;
    onDragEnter: (event: DragEvent) => void;
    onDragLeave: (event: DragEvent) => void;
    onDragOver: (event: DragEvent) => void;
    onDragStart: (event: DragEvent) => void;
    onDrop: (event: DragEvent) => void;
    onKeyDown: (event: KeyboardEvent) => void;
    onKeyPress: (event: KeyboardEvent) => void;
    onKeyUp: (event: KeyboardEvent) => void;
    onClick: (event: MouseEvent) => void;
    onDoubleClick: (event: MouseEvent) => void;
    onMouseDown: (event: MouseEvent) => void;
    onMouseEnter: (event: MouseEvent) => void;
    onMouseLeave: (event: MouseEvent) => void;
    onMouseMove: (event: MouseEvent) => void;
    onMouseOver: (event: MouseEvent) => void;
    onMouseOut: (event: MouseEvent) => void;
    onMouseUp: (event: MouseEvent) => void;
    onPointerOver: (event: PointerEvent) => void;
    onPointerEnter: (event: PointerEvent) => void;
    onPointerDown: (event: PointerEvent) => void;
    onPointerMove: (event: PointerEvent) => void;
    onPointerUp: (event: PointerEvent) => void;
    onPointerCancel: (event: PointerEvent) => void;
    onPointerOut: (event: PointerEvent) => void;
    onPointerLeave: (event: PointerEvent) => void;
    onGotPointerCapture: (event: PointerEvent) => void;
    onLostPointerCapture: (event: PointerEvent) => void;
    onTouchCancel: (event: TouchEvent) => void;
    onTouchEnd: (event: TouchEvent) => void;
    onTouchMove: (event: TouchEvent) => void;
    onTouchStart: (event: TouchEvent) => void;
    onClickGlobal: (event: PointerEvent) => void;
    onResizeGlobal: (event: Event) => void;
    onKeyUpGlobal: (event: KeyboardEvent) => void;
    onKeyDownGlobal: (event: KeyboardEvent) => void;
    onContextMenuGlobal: (event: PointerEvent) => void;
    onScrollGlobal: (event: Event) => void;
    onBeforeUnloadGlobal: (event: BeforeUnloadEvent) => void;
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
    alt: boolean;
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
    alt: boolean;
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
    alt: boolean;
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

export interface RowProps extends CommonAttributes, Events, HTMLAttributes {
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

export interface LinkProps extends CommonAttributes, Events, HTMLAttributes {
    href: string;
    children: Array<RecursiveElement>;
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
