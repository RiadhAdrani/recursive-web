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
    alignContent: string;
    alignItems: string;
    alignSelf: string;
    alignTracks: string;
    all: string;
    animation: string;
    animationDelay: string;
    animationDuration: string;
    animationFillMode: string;
    animationIterationCount: string;
    animationName: string;
    animationPlayState: string;
    animationTimingFunction: string;
    appearance: string;
    ascentOverride: string;
    aspectRatio: string;
    backdropFilter: string;
    backfaceVisibility: string;
    background: string;
    backgroundAttachment: string;
    backgroundBlendMode: string;
    backgroundClip: string;
    backgroundColor: Color;
    backgroundImage: string;
    backgroundOrigin: string;
    backgroundPosition: string;
    backgroundPositionX: string;
    backgroundPositionY: string;
    backgroundRepeat: string;
    backgroundSize: string;
    blockSize: string;
    borderBlock: string;
    borderBlockColor: Color;
    borderBlockStyle: string;
    borderBlockWidth: string;
    borderBlockEnd: string;
    borderBlockEndColor: Color;
    borderBlockEndStyle: string;
    borderBlockEndWidth: string;
    borderBlockStart: string;
    borderBlockStartColor: Color;
    borderBlockStartStyle: string;
    borderBlockStartWidth: string;
    border: string;
    borderBottom: string;
    borderBottomColor: Color;
    borderBottomLeftRadius: string;
    borderBottomRightRadius: string;
    borderBottomStyle: string;
    borderBottomWidth: string;
    borderCollapse: string;
    borderColor: Color;
    borderEndEndRadius: string;
    borderEndStartRadius: string;
    borderStartEndRadius: string;
    borderStartStartRadius: string;
    borderImage: string;
    borderImageOutset: string;
    borderImageRepeat: string;
    borderImageSlice: string;
    borderImageSource: string;
    borderImageWidth: string;
    borderInline: string;
    borderInlineColor: Color;
    borderInlineStyle: string;
    borderInlineWidth: string;
    borderInlineEnd: string;
    borderInlineEndColor: Color;
    borderInlineEndStyle: string;
    borderInlineEndWidth: string;
    borderStartEnd: string;
    borderInlineStartColor: Color;
    borderInlineStartStyle: string;
    borderInlineStartWidth: string;
    borderLeft: string;
    borderLeftColor: Color;
    borderLeftStyle: string;
    borderLeftWidth: string;
    borderRadius: string;
    borderRight: string;
    borderRightColor: Color;
    borderRightStyle: string;
    borderRightWidth: string;
    borderSpacing: string;
    borderStyle: string;
    borderTop: string;
    borderTopColor: Color;
    borderTopLeftRadius: string;
    borderTopRightRadius: string;
    borderTopStyle: string;
    borderTopWidth: string;
    borderWidth: string;
    bottom: string;
    boxDecorationBreak: string;
    boxShadow: string;
    boxSizing: string;
    breakAfter: string;
    breakBefore: string;
    breakInside: string;
    captionSide: string;
    caretColor: Color;
    clear: string;
    clip: string;
    clipPath: string;
    color: Color;
    colorAdjust: string;
    colorScheme: string;
    columnCount: string;
    columnFill: string;
    columnGap: string;
    columnRule: string;
    columnRuleColor: Color;
    columnRuleStyle: string;
    columnRuleWidth: string;
    columnSpan: string;
    columnWidth: string;
    columns: string;
    contain: string;
    content: string;
    contentVisibility: string;
    counterIncrement: string;
    counterReset: string;
    counterSet: string;
    cursor: string;
    direction: string;
    display: string;
    emptyCells: string;
    filter: string;
    flex: string;
    flexBasis: string;
    flexDirection: string;
    flexFlow: string;
    flexGrow: string;
    flexShrink: string;
    flexWrap: string;
    float: string;
    font: string;
    fontFamily: string;
    fontFeatureSettings: string;
    fontKerning: string;
    fontSize: string;
    fontSizeAdjust: string;
    fontStretch: string;
    fontStyle: string;
    fontSynthesis: string;
    fontVariant: string;
    fontVariantAlternates: string;
    fontVariantCaps: string;
    fontVariantEastAsian: string;
    fontVariantLigatures: string;
    fontVariantNumeric: string;
    fontVariantPosition: string;
    fontVariantSettings: string;
    fontWeight: string;
    forcedColorAdjust: string;
    gap: string;
    grid: string;
    gridArea: string;
    gridAutoColumns: string;
    gridAutoFlow: string;
    gridAutoRows: string;
    gridColumn: string;
    gridColumnEnd: string;
    gridColumnGap: string;
    gridColumnStart: string;
    gridGap: string;
    gridRow: string;
    gridRowEnd: string;
    gridRowGap: string;
    gridRowStart: string;
    gridTemplate: string;
    gridTemplateAreas: string;
    gridTemplateColumns: string;
    gridTemplateRows: string;
    hangingPunctuation: string;
    height: string;
    hyphens: string;
    isolation: string;
    imageOrientation: string;
    imageRendering: string;
    imageResolution: string;
    initialLetter: string;
    inlineSize: string;
    inset: string;
    insetBlock: string;
    insetBlockStart: string;
    insetInlineStart: string;
    justifyContent: string;
    justifyItems: string;
    justifySelf: string;
    left: string;
    letterSpacing: string;
    lineHeight: string;
    lineBreak: string;
    listStyle: string;
    listStyleImage: string;
    listStylePosition: string;
    listStyleType: string;
    margin: string;
    marginBlock: string;
    marginBlockEnd: string;
    marginBlockStart: string;
    marginBottom: string;
    marginInline: string;
    marginInlineEnd: string;
    marginInlineStart: string;
    marginLeft: string;
    marginRight: string;
    marginTop: string;
    mask: string;
    maskBorder: string;
    maskBorderMode: string;
    maskBorderOutset: string;
    maskBorderRepeat: string;
    maskBorderSlice: string;
    maskBorderSource: string;
    maskBorderWidth: string;
    maskClip: string;
    maskComposite: string;
    maskImage: string;
    maskMode: string;
    maskOrigin: string;
    maskPosition: string;
    maskRepeat: string;
    maskSize: string;
    maskType: string;
    mathStyle: string;
    maxBlockSize: string;
    maxInlineSize: string;
    minBlockSize: string;
    minInlineSize: string;
    maxHeight: string;
    maxWidth: string;
    minHeight: string;
    minWidth: string;
    mixBlendMode: string;
    objectFit: string;
    objectPosition: string;
    offset: string;
    offsetAnchor: string;
    offsetDistance: string;
    offsetPath: string;
    offsetPosition: string;
    offsetRotate: string;
    opacity: string;
    order: string;
    orphans: string;
    outline: string;
    outlineColor: Color;
    outlineOffset: string;
    outlineStyle: string;
    outlineWidth: string;
    overflow: string;
    overflowAnchor: string;
    overflowBlock: string;
    overflowClipMargin: string;
    overflowInline: string;
    overflowWrap: string;
    overflowX: string;
    overflowY: string;
    overscrollBehavior: string;
    overscrollBehaviorBlock: string;
    overscrollBehaviorInline: string;
    overscrollBehaviorX: string;
    overscrollBehaviorY: string;
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
    perspective: string;
    perspectiveOrigin: string;
    placeContent: string;
    placeItems: string;
    pointerEvents: string;
    position: string;
    quotes: string;
    resize: string;
    revert: string;
    right: string;
    rotate: string;
    rowGap: string;
    rubyAlign: string;
    rubyPosition: string;
    scale: string;
    scrollBehavior: string;
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
    scrollSnapAlign: string;
    scrollSnapStop: string;
    scrollSnapType: string;
    scrollbarColor: Color;
    scrollbarGutter: string;
    scrollbarWidth: string;
    shapeImageThreshold: string;
    shapeMargin: string;
    shapeOutside: string;
    tabSize: string;
    tableLayout: string;
    textAlign: string;
    textAlignLast: string;
    textCombineUpright: string;
    textDecoration: string;
    textDecorationColor: Color;
    textDecorationLine: string;
    textDecorationSkip: string;
    textDecorationSkipInk: string;
    textDecorationStyle: string;
    textDecorationThickness: string;
    textEmphasis: string;
    textEmphasisColor: Color;
    textEmphasisPosition: string;
    textEmphasisStyle: string;
    textIndent: string;
    textJustify: string;
    textOrientation: string;
    textOverflow: string;
    textRendering: string;
    textShadow: string;
    textSizeAdjust: string;
    textTransform: string;
    textUnderlineOffset: string;
    textUnderlinePosition: string;
    top: string;
    touchAction: string;
    transform: string;
    transformBox: string;
    transformOrigin: string;
    transformStyle: string;
    transition: string;
    transitionDelay: string;
    transitionDuration: string;
    transitionProperty: string;
    transitionTimingFunction: string;
    translate: string;
    unicodeBidi: string;
    userSelect: string;
    verticalAlign: string;
    visibility: string;
    whiteSpace: string;
    width: string;
    widows: string;
    wordBreak: string;
    wordSpacing: string;
    wordWrap: string;
    writingMode: string;
    zIndex: string;
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
    onRef: (el: HTMLElement) => {};
    beforeDestroyed: (el: HTMLElement) => {};
    onDestroyed: () => {};
}

export interface Flags {
    renderIf: boolean;
    forceRerender: boolean;
}

export interface Events {
    onAbort: (event: Event) => {};
    onAutoComplete: (event: Event) => {};
    onAutoCompleteError: (event: Event) => {};
    onBlur: (event: Event) => {};
    onCancel: (event: Event) => {};
    onCanPlay: (event: Event) => {};
    onCanPlayThrough: (event: Event) => {};
    onChange: (event: Event) => {};
    onClick: (event: Event) => {};
    onClose: (event: Event) => {};
    onContextMenu: (event: Event) => {};
    onCueChange: (event: Event) => {};
    onDblClick: (event: Event) => {};
    onDrag: (event: Event) => {};
    onDragEnd: (event: Event) => {};
    onDragEnter: (event: Event) => {};
    onDragLeave: (event: Event) => {};
    onDragOver: (event: Event) => {};
    onDragStart: (event: Event) => {};
    onDrop: (event: Event) => {};
    onDurationChange: (event: Event) => {};
    onEmptied: (event: Event) => {};
    onEnded: (event: Event) => {};
    onError: (event: Event) => {};
    onFocus: (event: Event) => {};
    onInput: (event: Event) => {};
    onInvalid: (event: Event) => {};
    onKeyDown: (event: Event) => {};
    onKeyPress: (event: Event) => {};
    onKeyUp: (event: Event) => {};
    onLoad: (event: Event) => {};
    onLoadedData: (event: Event) => {};
    onLoadedMetadata: (event: Event) => {};
    onLoadStart: (event: Event) => {};
    onMouseDown: (event: Event) => {};
    onMouseEnter: (event: Event) => {};
    onMouseLeave: (event: Event) => {};
    onMouseMove: (event: Event) => {};
    onMouseOut: (event: Event) => {};
    onMouseOver: (event: Event) => {};
    onMouseUp: (event: Event) => {};
    onMouseWheel: (event: Event) => {};
    onPause: (event: Event) => {};
    onPlay: (event: Event) => {};
    onPlaying: (event: Event) => {};
    onProgress: (event: Event) => {};
    onRatechange: (event: Event) => {};
    onReset: (event: Event) => {};
    onResize: (event: Event) => {};
    onScroll: (event: Event) => {};
    onSeeked: (event: Event) => {};
    onSeeking: (event: Event) => {};
    onSelect: (event: Event) => {};
    onShow: (event: Event) => {};
    onSort: (event: Event) => {};
    onStalled: (event: Event) => {};
    onSubmit: (event: Event) => {};
    onSuspend: (event: Event) => {};
    onTimeUpdate: (event: Event) => {};
    onToggle: (event: Event) => {};
    onVolumeChange: (event: Event) => {};
    onWaiting: (event: Event) => {};

    onActivate: (event: Event) => {};
    onFocusIn: (event: Event) => {};
    onFocusOut: (event: Event) => {};

    onBegin: (event: Event) => {};
    onEnd: (event: Event) => {};
    onRepeat: (event: Event) => {};

    onCopy: (event: Event) => {};
    onCut: (event: Event) => {};
    onPaste: (event: Event) => {};

    onClickGlobal: (event: Event, notify: Function) => void;
    onContextMenuGlobal: (event: Event, notify: Function) => void;
    onResizeGlobal: (event: Event, notify: Function) => void;
    onKeyUpGlobal: (event: Event, notify: Function) => void;
    onKeyDownGlobal: (event: Event, notify: Function) => void;
    onScrollGlobal: (event: Event, notify: Function) => void;
}

export interface StandardAttributes {
    key: string;
    hooks: Hooks;
    flags: Flags;
    children: Array<any>;
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
}

export interface FreeStyleSheet {
    var: { [key: string]: string };
    import: Array<string>;
    selectors: { [key: string]: Selector };
    mediaQueries: { [key: string]: Selector };
    animations: { [key: string]: Selector };
}

export function setState<T>(
    key: string,
    value: T,
    onInit: Function,
    onRemoved: Function
): [T, (value: any) => void, () => T, T];
