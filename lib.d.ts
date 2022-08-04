// This file is generated

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
    backgroundRepeat: "repeat-x" | "repeat-y" | "repeat" | "space" | "round" | "no-repeat";
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
    breakInside: "auto" | "avoid" | "avoid-page" | "avoid-column" | "avoid-region";
    captionSide: "top" | "bottom" | "block-start" | "block-end" | "inline-start" | "inline-end";
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
    contain: "none" | "strict" | "content" | "size" | "layout" | "style" | "paint";
    content: "normal" | "none" | "open-quote" | "close-quote" | "no-open-quote" | "no-close-quote";
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
    maskRepeat: "repeat-x" | "repeat-y" | "repeat" | "space" | "round" | "no-repeat";
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
    scrollSnapType: "none" | "x" | "y" | "block" | "inline" | "both" | "mandatory" | "proximity";
    scrollbarColor: Color;
    scrollbarGutter: "auto" | "stable" | "both-edges";
    scrollbarWidth: "auto" | "thin" | "none";
    shapeImageThreshold: string;
    shapeMargin: string;
    shapeOutside: "none" | "margin-box" | "content-box" | "border-box" | "padding-box";
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
    textDecorationLine: "none" | "underline" | "overline" | "line-through" | "blink";
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
    textJustify: "none" | "auto" | "inter-word" | "inter-character" | "distribute";
    textOrientation: "mixed" | "upright" | "sideways-right" | "sideways" | "use-glyph-orientation";
    textOverflow: "clip" | "ellipsis";
    textRendering: "auto" | "optimizeSpeed" | "optimizeLegibility" | "geometricPrecision";
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
    touchAction: "auto" | "none" | "pan-x" | "pan-y" | "manipulation" | "pinch-zoom";
    transform: string;
    transformBox: "content-box" | "border-box" | "fill-box" | "stroke-box" | "view-box";
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
    whiteSpace: "normal" | "nowrap" | "pre" | "pre-wrap" | "pre-line" | "break-spaces";
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
export interface AddressProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface ArticleProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface AsideProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface FooterProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface HeaderProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface H1Props extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface H2Props extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface H3Props extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface H4Props extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface H5Props extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface H6Props extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface MainProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface NavProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface SectionProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface BlockquoteProps extends HTMLAttributes {
    cite: string;
    children: Array<RecursiveElement>;
}

export interface DdProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface DivProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface DlProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface DtProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface FigcaptionProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface FigureProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface HrProps extends HTMLAttributes {
    align: string;
    color: Color;
    noShade: string;
    size: string;
    width: string;
}

export interface LiProps extends HTMLAttributes {
    value: string;
    type: string;
    children: Array<RecursiveElement>;
}

export interface MenuProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface OlProps extends HTMLAttributes {
    reversed: boolean;
    start: string;
    type: "a" | "A" | "i" | "I" | "1";
    children: Array<RecursiveElement>;
}

export interface PProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface PreProps extends HTMLAttributes {
    cols: string;
    width: string;
    wrap: string;
    children: Array<RecursiveElement>;
}

export interface UlProps extends HTMLAttributes {
    compact: boolean;
    type: string;
    children: Array<RecursiveElement>;
}

export interface AProps extends HTMLAttributes {
    download: string;
    href: string;
    hrefLang: string;
    ping: string;
    referrerPolicy:
        | "no-referrer"
        | "no-referrer-when-downgrade"
        | "origin"
        | "origin-when-cross-origin"
        | "same-origin"
        | "strict-origin"
        | "strict-origin-when-cross-origin"
        | "unsafe-url";
    rel: string;
    target: "_self" | "_blank" | "_parent" | "_top";
    type: string;
    children: Array<RecursiveElement>;
}

export interface AbbrProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface BProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface BdiProps extends HTMLAttributes {
    dir: string;
    children: Array<RecursiveElement>;
}

export interface BdoProps extends HTMLAttributes {
    dir: string;
    children: Array<RecursiveElement>;
}

export interface BrProps extends HTMLAttributes {}

export interface CiteProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface CodeProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface DataProps extends HTMLAttributes {
    valeu: string;
    children: Array<RecursiveElement>;
}

export interface DfnProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface EmProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface IProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface KbdProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface MarkProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface QProps extends HTMLAttributes {
    cite: string;
    children: Array<RecursiveElement>;
}

export interface RpProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface RtProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface RubyProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface SProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface SampProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface SmallProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface SpanProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface StrongProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface SubProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface SupProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface TimeProps extends HTMLAttributes {
    dateTime: string;
    children: Array<RecursiveElement>;
}

export interface UProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface VarProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface WbrProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface AreaProps extends HTMLAttributes {
    alt: string;
    coords: string;
    download: string;
    href: string;
    hrefLang: string;
    ping: string;
    referrerPolicy:
        | "no-referrer"
        | "no-referrer-when-downgrade"
        | "origin"
        | "origin-when-cross-origin"
        | "same-origin"
        | "strict-origin"
        | "strict-origin-when-cross-origin"
        | "unsafe-url";
    rel: string;
    shape: string;
    target: "_self" | "_blank" | "_parent" | "_top";
}

export interface AudioProps extends HTMLAttributes {
    autoPlay: boolean;
    controls: boolean;
    crossOrigin: string;
    loop: boolean;
    muted: boolean;
    preload: string;
    src: string;
    children: Array<RecursiveElement>;
}

export interface ImgProps extends HTMLAttributes {
    alt: string;
    crossOrigin: string;
    decoding: string;
    height: number;
    isMap: boolean;
    loading: string;
    referrerPolicy:
        | "no-referrer"
        | "no-referrer-when-downgrade"
        | "origin"
        | "origin-when-cross-origin"
        | "same-origin"
        | "strict-origin"
        | "strict-origin-when-cross-origin"
        | "unsafe-url";
    sizes: string;
    src: string;
    srcSet: string;
    width: number;
    useMap: string;
}

export interface MapProps extends HTMLAttributes {
    name: string;
    children: Array<RecursiveElement>;
}

export interface TrackProps extends HTMLAttributes {
    def: string;
    kind: string;
    label: string;
    src: string;
    srcLang: string;
}

export interface VideoProps extends HTMLAttributes {
    autoPlay: boolean;
    crossOrigin: string;
    height: number;
    loop: boolean;
    muted: boolean;
    playsInline: boolean;
    poster: string;
    preload: string;
    src: string;
    width: number;
    children: Array<RecursiveElement>;
}

export interface EmbedProps extends HTMLAttributes {
    height: number;
    src: string;
    type: string;
    width: number;
    children: Array<RecursiveElement>;
}

export interface IframeProps extends HTMLAttributes {
    allow: string;
    allowFullScreen: boolean;
    allowPaymentRequest: boolean;
    fetchPriority: string;
    height: number;
    loading: string;
    name: string;
    referrerPolicy:
        | "no-referrer"
        | "no-referrer-when-downgrade"
        | "origin"
        | "origin-when-cross-origin"
        | "same-origin"
        | "strict-origin"
        | "strict-origin-when-cross-origin"
        | "unsafe-url";
    sandbox: string;
    src: string;
    srcDoc: string;
    width: number;
    children: Array<RecursiveElement>;
}

export interface ObjectProps extends HTMLAttributes {
    data: string;
    form: string;
    height: number;
    name: string;
    type: string;
    useMap: string;
    width: number;
    children: Array<RecursiveElement>;
}

export interface PictureProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface PortalProps extends HTMLAttributes {
    src: string;
    children: Array<RecursiveElement>;
}

export interface SourceProps extends HTMLAttributes {
    type: string;
    children: Array<RecursiveElement>;
}

export interface CanvasProps extends HTMLAttributes {
    height: number;
    width: number;
    children: Array<RecursiveElement>;
}

export interface NoscriptProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface DelProps extends HTMLAttributes {
    cite: string;
    dateTime: string;
    children: Array<RecursiveElement>;
}

export interface InsProps extends HTMLAttributes {
    cite: string;
    dateTime: string;
    children: Array<RecursiveElement>;
}

export interface CaptionProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface ColProps extends HTMLAttributes {
    span: number;
    children: Array<RecursiveElement>;
}

export interface ColgroupProps extends HTMLAttributes {
    span: number;
    children: Array<RecursiveElement>;
}

export interface TableProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface TbodyProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface TdProps extends HTMLAttributes {
    colSpan: number;
    headers: string;
    rowSpan: number;
    children: Array<RecursiveElement>;
}

export interface TfootProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface ThProps extends HTMLAttributes {
    abbr: string;
    colSpan: number;
    headers: string;
    rowSpan: number;
    scope: string;
    children: Array<RecursiveElement>;
}

export interface TheadProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface TrProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface ButtonProps extends HTMLAttributes {
    autoFocus: boolean;
    disabled: boolean;
    form: string;
    formAction: string;
    formEncType: string;
    formMethod: string;
    formNoValidate: string;
    formtarget: "_self" | "_blank" | "_parent" | "_top";
    name: string;
    type: string;
    value: string;
    children: Array<RecursiveElement>;
}

export interface DatalistProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface FieldsetProps extends HTMLAttributes {
    disabled: boolean;
    form: string;
    name: string;
    children: Array<RecursiveElement>;
}

export interface FormProps extends HTMLAttributes {
    acceptCharSet: string;
    autoComplete: string;
    name: string;
    rel: string;
    action: string;
    encType: string;
    method: string;
    noValidate: string;
    target: "_self" | "_blank" | "_parent" | "_top";
    children: Array<RecursiveElement>;
}

export interface InputProps extends HTMLAttributes {
    accept: string;
    alt: string;
    autoComplete: string;
    capture: string;
    checked: boolean;
    dirName: string;
    disabled: boolean;
    form: string;
    formAction: string;
    formEncType: string;
    formMethod: string;
    formNoValidate: string;
    formtarget: "_self" | "_blank" | "_parent" | "_top";
    height: number;
    list: string;
    max: number;
    maxLength: number;
    min: number;
    minLength: number;
    multiple: boolean;
    name: string;
    pattern: string;
    placeholder: string;
    readOnly: boolean;
    required: boolean;
    size: number;
    src: string;
    step: number;
    type: string;
    value: string;
    width: number;
}

export interface LabelProps extends HTMLAttributes {
    isFor: string;
    children: Array<RecursiveElement>;
}

export interface LegendProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface MeterProps extends HTMLAttributes {
    value: number;
    min: number;
    max: number;
    low: number;
    high: number;
    optimum: number;
    children: Array<RecursiveElement>;
}

export interface OptgroupProps extends HTMLAttributes {
    disabled: boolean;
    label: string;
    children: Array<RecursiveElement>;
}

export interface OptionProps extends HTMLAttributes {
    disabled: boolean;
    label: string;
    selected: boolean;
    value: string;
    children: Array<RecursiveElement>;
}

export interface OutputProps extends HTMLAttributes {
    for: string;
    form: string;
    name: string;
    children: Array<RecursiveElement>;
}

export interface ProgressProps extends HTMLAttributes {
    max: number;
    value: number;
    children: Array<RecursiveElement>;
}

export interface SelectProps extends HTMLAttributes {
    autoComplete: string;
    autoFocus: boolean;
    disabled: boolean;
    form: string;
    multiple: boolean;
    name: string;
    required: boolean;
    size: number;
    children: Array<RecursiveElement>;
}

export interface TextAreaProps extends HTMLAttributes {
    autoComplete: string;
    autoFocus: boolean;
    cols: string;
    disabled: boolean;
    form: string;
    maxLength: number;
    name: string;
    placeholder: string;
    readOnly: boolean;
    required: rows;
    spellCheck: string;
    wrap: string;
    children: Array<RecursiveElement>;
}

export interface DetailsProps extends HTMLAttributes {
    open: boolean;
    children: Array<RecursiveElement>;
}

export interface DialogProps extends HTMLAttributes {
    open: boolean;
    children: Array<RecursiveElement>;
}

export interface SummaryProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface SlotProps extends HTMLAttributes {
    name: string;
    children: Array<RecursiveElement>;
}

export interface TemplateProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface FragmentProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface ColumnProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface RowProps extends HTMLAttributes {
    children: Array<RecursiveElement>;
}

export interface SpacerProps extends HTMLAttributes {
    height: number;
    width: number;
}

export interface LazyColumnProps extends HTMLAttributes {
    onObserved: Function;
    children: Array<RecursiveElement>;
}

export interface LazyRowProps extends HTMLAttributes {
    onObserved: Function;
    children: Array<RecursiveElement>;
}

export interface SVGAProps extends SVGAttributes {
    href: string;
    hrefLang: string;
    target: string;
    type: string;
}

export interface SVGAnimateProps extends SVGAttributes {
    begin: string;
    dur: string;
    end: string;
    min: min;
    max: string;
    restart: string;
    repeatCount: string;
    fill: string;
    calcMode: string;
    values: string;
    keyTimes: string;
    keySplines: string;
    from: string;
    to: string;
    by: string;
    attributeName: string;
    additive: string;
    accumulate: string;
}

export interface SVGAnimateMotionProps extends SVGAttributes {
    keyPoints: string;
    path: string;
    rotate: string;
}

export interface SVGAnimateTransformProps extends SVGAttributes {}

export interface SVGCircleProps extends SVGAttributes {
    cx: number;
    cy: number;
    r: number;
    pathLength: string;
}

export interface SVGClipPathProps extends SVGAttributes {
    clipPathUnits: string;
}

export interface SVGDefsProps extends SVGAttributes {}

export interface SVGDescProps extends SVGAttributes {}

export interface SVGDiscardProps extends SVGAttributes {}

export interface SVGEllipseProps extends SVGAttributes {
    cx: number;
    cy: number;
    rx: number;
    ry: number;
    pathLength: string;
}

export interface SVGFeBlendProps extends SVGAttributes {
    in: string;
    in2: string;
    mode: string;
}

export interface SVGFeColorMatrixProps extends SVGAttributes {
    in: string;
    type: string;
    values: string;
}

export interface SVGFeComponentTransferProps extends SVGAttributes {}

export interface SVGFeCompositeProps extends SVGAttributes {
    in: string;
}

export interface SVGFeConvolveMatrixProps extends SVGAttributes {
    in: string;
    order: string;
    kernelMatrix: string;
    bias: string;
    targetX: string;
    targetY: string;
    edgeMode: string;
    kernelUnitLength: string;
    preserveAlpha: string;
}

export interface SVGFeDiffuseLightingProps extends SVGAttributes {}

export interface SVGFeDisplacementMapProps extends SVGAttributes {}

export interface SVGFeDistantLightProps extends SVGAttributes {}

export interface SVGFeDropShadowProps extends SVGAttributes {
    id: string;
    surfaceScale: string;
    diffuseConstant: string;
    kernelUnitLength: string;
}

export interface SVGFeFloodProps extends SVGAttributes {
    floodColor: string;
    floodOpacity: string;
}

export interface SVGFeFuncAProps extends SVGAttributes {}

export interface SVGFeFuncBProps extends SVGAttributes {}

export interface SVGFeFuncGProps extends SVGAttributes {}

export interface SVGFeFuncRProps extends SVGAttributes {}

export interface SVGFeGaussianBlurProps extends SVGAttributes {
    in: string;
    stdDeviation: string;
    edgeMode: string;
}

export interface SVGFeImageProps extends SVGAttributes {
    preserveAspectRatio: string;
    xLinkHref: string;
}

export interface SVGFeMergeProps extends SVGAttributes {}

export interface SVGFeMergeNodeProps extends SVGAttributes {
    in: string;
}

export interface SVGFeMorphologyProps extends SVGAttributes {
    in: string;
    operator: string;
    radius: string;
}

export interface SVGFeOffsetProps extends SVGAttributes {
    in: string;
    dx: string;
    dy: string;
}

export interface SVGFePointLightProps extends SVGAttributes {
    x: string;
    y: string;
    z: string;
}

export interface SVGFeSpecularLightingProps extends SVGAttributes {
    in: string;
    surfaceScale: string;
    specularConstant: string;
    specularExponent: string;
    kernelUnitLength: string;
}

export interface SVGFeSpotLightProps extends SVGAttributes {
    x: string;
    y: string;
    z: string;
    pointAtX: string;
    pointAtY: string;
    pointAtZ: string;
    specularExponent: string;
    limitingConeAngle: string;
}

export interface SVGFeTileProps extends SVGAttributes {
    in: string;
}

export interface SVGFeTurbulenceProps extends SVGAttributes {
    baseFrequency: string;
    numOctaves: string;
    seed: string;
    stitchTiles: string;
    type: string;
}

export interface SVGFilterProps extends SVGAttributes {
    x: string;
    y: string;
    width: string;
    height: string;
    filterRes: string;
    filterUnits: string;
    primitiveUnits: string;
    xLinkHref: string;
}

export interface SVGForeignObjectProps extends SVGAttributes {
    height: string;
    width: string;
    x: string;
    y: string;
}

export interface SVGGProps extends SVGAttributes {}

export interface SVGHatchProps extends SVGAttributes {}

export interface SVGHatchpathProps extends SVGAttributes {}

export interface SVGImageProps extends SVGAttributes {
    x: string;
    y: string;
    width: string;
    height: string;
    href: string;
    xLinkHref: string;
    preserveAspectRatio: string;
    crossOrigin: string;
}

export interface SVGLineProps extends SVGAttributes {
    x1: string;
    x2: string;
    y1: string;
    y2: string;
    pathLength: string;
}

export interface SVGLinearGradientProps extends SVGAttributes {
    gradientUnits: string;
    gradientTransform: string;
    href: string;
    spreadMethod: string;
    x1: string;
    x2: string;
    y1: string;
    y2: string;
}

export interface SVGMarkerProps extends SVGAttributes {
    markerHeight: string;
    markerUnits: string;
    markerWidth: string;
    orient: string;
    preserveAspectRatio: string;
    refX: string;
    refY: string;
    viewBox: string;
}

export interface SVGMaskProps extends SVGAttributes {
    height: string;
    maskContentUnits: string;
    maskUnits: string;
    x: string;
    y: string;
    width: string;
}

export interface SVGMetadataProps extends SVGAttributes {}

export interface SVGMpathProps extends SVGAttributes {
    xLinkHref: string;
}

export interface SVGPathProps extends SVGAttributes {
    d: string;
    pathLength: string;
}

export interface SVGPatternProps extends SVGAttributes {
    height: string;
    href: string;
    patternContentUnits: string;
    patternTransform: string;
    preserveAspectRatio: string;
    viewBox: string;
    x: string;
}

export interface SVGPolygonProps extends SVGAttributes {
    points: string;
    pathLength: string;
}

export interface SVGPolylineProps extends SVGAttributes {
    points: string;
    pathLength: string;
}

export interface SVGRadialGradientProps extends SVGAttributes {
    cx: string;
    cy: string;
    fr: string;
    fx: string;
    fy: string;
    gradientUnits: string;
    gradientTransform: string;
    href: string;
    r: string;
    spreadMethod: string;
}

export interface SVGRectProps extends SVGAttributes {
    x: string;
    y: string;
    width: string;
    height: string;
    rx: string;
    ry: string;
    pathLength: string;
}

export interface SVGSetProps extends SVGAttributes {
    to: string;
}

export interface SVGStopProps extends SVGAttributes {
    stopColor: string;
    stopOpacity: string;
}

export interface SVGSvgProps extends SVGAttributes {
    height: string;
    preserveAspectRatio: string;
    viewBox: string;
    width: string;
    x: string;
    y: string;
}

export interface SVGSwitchProps extends SVGAttributes {}

export interface SVGSymbolProps extends SVGAttributes {
    height: string;
    preserveAspectRatio: string;
    refX: string;
    refY: string;
    viewBox: string;
    width: string;
    x: string;
    y: string;
}

export interface SVGTextProps extends SVGAttributes {
    x: string;
    y: string;
    dx: string;
    dy: string;
    rotate: string;
    lengthAdjust: string;
    textLength: string;
}

export interface SVGTextPathProps extends SVGAttributes {
    href: string;
    lengthAdjust: string;
    method: string;
    path: string;
    side: string;
    spacing: string;
    startOffset: string;
    textLength: string;
}

export interface SVGTitleProps extends SVGAttributes {}

export interface SVGTspanProps extends SVGAttributes {
    x: string;
    y: string;
    dx: string;
    dy: string;
    rotate: string;
    lengthAdjust: string;
    textLength: string;
}

export interface SVGUseProps extends SVGAttributes {
    href: string;
    xLinkHref: string;
    x: string;
    y: string;
    width: string;
    height: string;
}

export interface SVGViewProps extends SVGAttributes {}
