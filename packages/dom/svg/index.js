const { attribute } = require("../../templates");

module.exports = {
    accentHeight: attribute({
        name: "accent-height",
        values: "string",
        docs: [
            "The accent-height attribute defines the distance from the origin to the top of accent characters, measured by a distance within the font coordinate system.",
            "@deprecated",
        ],
    }),
    accumulate: attribute({
        name: "accumulate",
        values: ["sum", "none"],
        els: ["animate", "animateColor", "animateMotion", "animateTransform"],
        docs: [
            "The accumulate attribute controls whether or not an animation is cumulative.",
        ],
    }),
    additive: attribute({
        name: "additive",
        values: ["sum", "replace"],
        els: ["animate", "animateColor", "animateMotion", "animateTransform"],
        docs: [
            "The additive attribute controls whether or not an animation is additive.",
        ],
    }),
    alignmentBaseline: attribute({
        name: "alignment-baseline",

        values: [
            "auto",
            "baseline",
            "before-edge",
            "text-before-edge",
            "middle",
            "central",
            "after-edge",
            "text-after-edge",
            "ideographic",
            "alphabetic",
            "hanging",
            "mathematical",
            "top",
            "center",
            "bottom",
        ],
        els: ["tspan", "tref", "altGlyph", "textPath"],
        docs: [
            ,
            "The alignment-baseline attribute specifies how an object is aligned with respect to its parent. This property specifies which baseline of this element is to be aligned with the corresponding baseline of the parent. For example, this allows alphabetic baselines in Roman text to stay aligned across font size changes. It defaults to the baseline with the same name as the computed value of the alignment-baseline property.",
        ],
    }),
    alphabetic: attribute({
        name: "alphabetic",

        values: "string",
        els: ["font-face"],
        docs: [
            "The alphabetic attribute defines the lower baseline of a font. It has the same syntax and semantics as the baseline descriptor within an @font-face.",
            "@deprecated",
        ],
    }),
    amplitude: attribute({
        name: "amplitude",
        type: "number",
        values: [1],
        els: ["feFuncA", "feFuncB", "feFuncG", "feFuncR"],
        docs: [
            "The amplitude attribute controls the amplitude of the gamma function of a component transfer element when its type attribute is gamma.",
        ],
    }),
    arabicForm: attribute({
        name: "arabic-form",

        values: "string",
        els: ["glyph"],
        docs: [
            "The arabic-form attribute indicates which of the four possible forms an Arabic glyph represents.",
            "@deprecated",
        ],
    }),
    ascent: attribute({
        name: "ascent",

        values: "string",
        els: ["font-face"],
        docs: [
            "The ascent attribute defines the maximum unaccented height of the font within the font coordinate system.",
            "@deprecated",
        ],
    }),
    attributeName: attribute({
        name: "attributeName",

        values: "string",
        els: ["animate", "animateColor", "animateTransform", "set"],
        docs: [
            "The attributeName attribute indicates the name of the CSS property or attribute of the target element that is going to be changed during an animation.",
        ],
    }),
    attributeType: attribute({
        name: "attributeType",

        values: "string",
        els: ["animate", "animateColor", "animateTransform", "set"],
        docs: [
            "The attributeType attribute specifies the namespace in which the target attribute and its associated values are defined.",
            "@deprecated",
        ],
    }),
    azimuth: attribute({
        name: "azimuth",

        values: "number",
        els: ["feDistantLight"],
        docs: [
            "The azimuth attribute specifies the direction angle for the light source on the XY plane (clockwise), in degrees from the x axis.",
        ],
    }),
    baseFrequency: attribute({
        name: "baseFrequency",

        values: "string",
        els: ["feTurbulence"],
        docs: [
            "The baseFrequency attribute represents the base frequency parameter for the noise function of the ``<feTurbulence>`` filter primitive.",
        ],
    }),
    baselineShift: attribute({
        name: "baseline-shift",

        values: ["sub", "super"],
        els: ["altGlyph", "textPath", "tref", "tspan"],
        docs: [
            "The baseline-shift attribute allows repositioning of the dominant-baseline relative to the dominant-baseline of the parent text content element. The shifted object might be a sub- or superscript.",
        ],
    }),
    baseProfile: attribute({
        name: "baseProfile",

        values: "string",
        els: ["svg"],
        docs: [
            "The baseProfile attribute describes the minimum SVG language profile that the author believes is necessary to correctly render the content. The attribute does not specify any processing restrictions; It can be considered metadata.",
            "@deprecated",
        ],
    }),
    bbox: attribute({
        name: "bbox",

        values: "string",
        els: ["font-face"],
        docs: [
            "The bbox attribute defines the maximal bounding box of a font.",
            "@deprecated",
        ],
    }),
    begin: attribute({
        name: "begin",

        values: "string",
        els: [
            "animate",
            "animateColor",
            "animateMotion",
            "animateTransform",
            "discard",
            "set",
        ],
        docs: [
            "The begin attribute defines when an animation should begin or when an element should be discarded.",
        ],
    }),
    bias: attribute({
        name: "bias",

        values: "string",
        els: ["feConvolveMatrix"],
        docs: [
            "The bias attribute shifts the range of the filter. After applying the kernelMatrix of the ``<feConvolveMatrix>`` element to the input image to yield a number and applied the divisor attribute, the bias attribute is added to each component. This allows representation of values that would otherwise be clamped to 0 or 1.",
        ],
    }),
    by: attribute({
        name: "by",

        values: "string",
        els: ["animate", "animateColor", "animateMotion", "animateTransform"],
        docs: [
            "The by attribute specifies a relative offset value for an attribute that will be modified during an animation.",
        ],
    }),
    calcMode: attribute({
        name: "calcMode",

        values: "string",
        docs: [
            "The calcMode attribute specifies the interpolation mode for the animation.",
        ],
    }),
    capHeight: attribute({
        name: "cap-height",

        values: ["discrete", "linear", "paced", "spline"],
        els: ["animate", "animateColor", "animateMotion", "animateTransform"],
        docs: [
            "The cap-height attribute defines the height of uppercase glyphs of the font within the font coordinate system.",
            "@deprecated",
        ],
    }),
    className: attribute({
        name: "class",
        values: "string",
        els: true,
        docs: ["Often used with CSS to style elements with common properties."],
    }),
    clip: attribute({
        name: "clip",

        values: "string",
        els: ["font-face"],
        docs: [
            "The clip attribute is a presentation attribute defining the visible region of an element.",
            "@deprecated",
        ],
    }),
    clipPathUnits: attribute({
        name: "clipPathUnits",

        values: ["userSpaceOnUse", "objectBoundingBox"],
        els: ["clipPath"],
        docs: [
            "The clipPathUnits attribute indicates which coordinate system to use for the contents of the ``<clipPath>`` element.",
        ],
    }),
    clipPath: attribute({
        name: "clip-path",

        values: "string",
        els: [
            "a",
            "circle",
            "clipPath",
            "ellipse",
            "g",
            "glyph",
            "image",
            "line",
            "marker",
            "mask",
            "path",
            "pattern",
            "polygon",
            "polyline",
            "rect",
            "svg",
            "symbol",
            "text",
            "use",
        ],
        docs: [
            "The clip-path presentation attribute defines or associates a clipping path with the element it is related to.",
        ],
    }),
    clipRule: attribute({
        name: "clip-rule",

        values: ["nonzero", "evenodd"],
        els: [],
        docs: [
            "The clip-rule attribute only applies to graphics elements that are contained within a ``<clipPath>`` element. The clip-rule attribute basically works as the fill-rule attribute, except that it applies to ``<clipPath>`` definitions.",
        ],
    }),
    color: attribute({
        name: "color",

        values: "Color",
        els: [],
        docs: [
            "The color attribute is used to provide a potential indirect value, currentcolor, for the fill, stroke, stop-color, flood-color, and lighting-color attributes.",
        ],
    }),
    colorInterpolation: attribute({
        name: "color-interpolation",

        values: "string",
        docs: [
            "The color-interpolation attribute specifies the color space for gradient interpolations, color animations, and alpha compositing.",
        ],
    }),
    colorInterpolationFilters: attribute({
        name: "color-interpolation-filters",

        values: "string",
        docs: [
            "The color-interpolation-filters attribute specifies the color space for imaging operations performed via filter effects.",
        ],
    }),
    colorProfile: attribute({
        name: "color-profile",

        values: "string",
        docs: [
            "The color-profile attribute is used to define which color profile a raster image included through the ``<image>`` element should use.",
        ],
    }),
    colorRendering: attribute({
        name: "color-rendering",

        values: "string",
        els: [],
        docs: [],
    }),
    contentScriptType: attribute({
        name: "contentScriptType",

        values: "string",
        docs: [
            "The contentScriptType attribute specifies the default scripting language for the given document fragment on the ``<svg>`` element.",
        ],
    }),
    contentStyleType: attribute({
        name: "contentStyleType",

        values: "string",
        docs: [
            "The contentStyleType attribute specifies the style sheet language for the given document fragment on the ``<svg>`` element.",
            "@deprecated",
        ],
    }),
    crossorigin: attribute({
        name: "crossorigin",

        values: "string",
        docs: [
            "The crossorigin attribute, valid on the ``<image>`` element, provides support for CORS, defining how the element handles crossorigin requests, thereby enabling the configuration of the CORS requests for the element's fetched data. It is a CORS settings attribute.",
        ],
    }),
    cursor: attribute({
        name: "cursor",

        values: "string",
        docs: [
            "The cursor attribute specifies the mouse cursor displayed when the mouse pointer is over an element.",
        ],
    }),
    cx: attribute({
        name: "cx",

        values: "string",
        docs: [
            "The cx attribute define the x-axis coordinate of a center point.",
        ],
    }),
    cy: attribute({
        name: "cy",

        values: "string",
        docs: [
            "The cy attribute define the y-axis coordinate of a center point.",
        ],
    }),
    d: attribute({
        name: "d",

        values: "string",
        els: [],
        docs: ["The d attribute defines a path to be drawn."],
    }),
    decelerate: attribute({
        name: "decelerate",

        values: "string",
        els: [],
        docs: [],
    }),
    descent: attribute({
        name: "descent",

        values: "string",
        els: [],
        docs: [
            "The descent attribute defines the maximum unaccented depth of the font.",
            "@deprecated",
        ],
    }),
    diffuseConstant: attribute({
        name: "diffuseConstant",

        values: "string",
        els: [],
        docs: [
            "The diffuseConstant attribute represents the kd value in the Phong lighting model. In SVG, this can be any non-negative number.",
        ],
    }),
    direction: attribute({
        name: "direction",

        values: "string",
        els: [],
        docs: [
            "The direction attribute specifies the inline-base direction of a ``<text>`` or ``<tspan>`` element. It defines the start and end points of a line of text as used by the text-anchor and inline-size properties. It also may affect the direction in which characters are positioned if the unicode-bidi property's value is either embed or bidi-override.",
        ],
    }),
    display: attribute({
        name: "display",

        values: "string",
        els: [],
        docs: [
            "The display attribute lets you control the rendering of graphical or container elements.",
        ],
    }),
    divisor: attribute({
        name: "divisor",

        values: "string",
        els: [],
        docs: [
            "The divisor attribute specifies the value by which the resulting number of applying the kernelMatrix of a ``<feConvolveMatrix>`` element to the input image color value is divided to yield the destination color value.",
        ],
    }),
    dominantBaseline: attribute({
        name: "dominant-baseline",

        values: "string",
        els: [],
        docs: [
            "The dominant-baseline attribute specifies the dominant baseline, which is the baseline used to align the box's text and inline-level contents. It also indicates the default alignment baseline of any boxes participating in baseline alignment in the box's alignment context.",
        ],
    }),
    dur: attribute({
        name: "dur",

        values: "string",
        els: [],
        docs: [
            "The dur attribute indicates the simple duration of an animation.",
        ],
    }),
    dx: attribute({
        name: "dx",

        values: "string",
        els: [],
        docs: [
            "The dx attribute indicates a shift along the x-axis on the position of an element or its content.",
        ],
    }),
    dy: attribute({
        name: "dy",

        values: "string",
        els: [],
        docs: [
            "The dy attribute indicates a shift along the y-axis on the position of an element or its content.",
        ],
    }),
    edgeMode: attribute({
        name: "edgeMode",

        values: "string",
        els: [],
        docs: [
            "The edgeMode attribute determines how to extend the input image as necessary with color values so that the matrix operations can be applied when the kernel is positioned at or near the edge of the input image.",
        ],
    }),
    elevation: attribute({
        name: "elevation",

        values: "string",
        els: [],
        docs: [
            "The elevation attribute specifies the direction angle for the light source from the XY plane towards the Z-axis, in degrees. Note that the positive Z-axis points towards the viewer of the content.",
        ],
    }),
    enableBackground: attribute({
        name: "enable-background",

        values: "string",
        els: [],
        docs: [
            "The enable-background attribute specifies how the accumulation of the background image is managed.",
            "@deprecated",
        ],
    }),
    end: attribute({
        name: "end",

        values: "string",
        els: [],
        docs: [
            "The end attribute defines an end value for the animation that can constrain the active duration.",
        ],
    }),
    exponent: attribute({
        name: "exponent",

        values: "string",
        els: [],
        docs: [
            "The exponent attribute defines the exponent of the gamma function.",
        ],
    }),
    fill: attribute({
        name: "fill",

        values: "string",
        els: [],
        docs: [
            "The fill attribute has two different meanings. For shapes and text it's a presentation attribute that defines the color (or any SVG paint servers like gradients or patterns) used to paint the element; for animation it defines the final state of the animation.",
        ],
    }),
    fillOpacity: attribute({
        name: "fill-opacity",

        values: "string",
        els: [],
        docs: [
            "The fill-opacity attribute is a presentation attribute defining the opacity of the paint server (color, gradient, pattern, etc.) applied to a shape.",
        ],
    }),
    fillRule: attribute({
        name: "fill-rule",

        values: "string",
        els: [],
        docs: [
            "The fill-rule attribute is a presentation attribute defining the algorithm to use to determine the inside part of a shape.",
        ],
    }),
    filter: attribute({
        name: "filter",

        values: "string",
        els: [],
        docs: [
            "The filter attribute specifies the filter effects defined by the ``<filter>`` element that shall be applied to its element.",
        ],
    }),
    filterRes: attribute({
        name: "filterRes",

        values: "string",
        els: [],
        docs: [
            "The filterRes attribute indicates the width and height of the intermediate images in pixels of a filter primitive.",
            "@deprecated",
        ],
    }),
    filterUnits: attribute({
        name: "filterUnits",

        values: "string",
        els: [],
        docs: [
            "The filterUnits attribute defines the coordinate system for the attributes x, y, width and height.",
        ],
    }),
    floodColor: attribute({
        name: "flood-color",

        values: "string",
        els: [],
        docs: [
            "The flood-color attribute indicates what color to use to flood the current filter primitive subregion.",
        ],
    }),
    floodOpacity: attribute({
        name: "flood-opacity",

        values: "string",
        els: [],
        docs: [
            "The flood-opacity attribute indicates the opacity value to use across the current filter primitive subregion.",
        ],
    }),
    fontFamily: attribute({
        name: "font-family",

        values: "string",
        els: [],
        docs: [
            "The font-family attribute indicates which font family will be used to render the text, specified as a prioritized list of font family names and/or generic family names.",
        ],
    }),
    fontSize: attribute({
        name: "font-size",

        values: "string",
        els: [],
        docs: [
            "The font-size attribute refers to the size of the font from baseline to baseline when multiple lines of text are set solid in a multiline layout environment.",
        ],
    }),
    fontSizeAdjust: attribute({
        name: "font-size-adjust",

        values: "string",
        els: [],
        docs: [
            "The font-size-adjust attribute allows authors to specify an aspect value for an element that will preserve the x-height of the first choice font in a substitute font.",
        ],
    }),
    fontStretch: attribute({
        name: "font-stretch",

        values: "string",
        els: [],
        docs: [
            "The font-stretch attribute indicates the desired amount of condensing or expansion in the glyphs used to render the text.",
        ],
    }),
    fontStyle: attribute({
        name: "font-style",

        values: "string",
        els: [],
        docs: [
            "The font-style attribute specifies whether the text is to be rendered using a normal, italic, or oblique face.",
        ],
    }),
    fontVariant: attribute({
        name: "font-variant",

        values: "string",
        els: [],
        docs: [
            "The font-variant attribute indicates whether the text is to be rendered using variations of the font's glyphs.",
        ],
    }),
    fontWeight: attribute({
        name: "font-weight",

        values: "string",
        els: [],
        docs: [
            "The font-weight attribute refers to the boldness or lightness of the glyphs used to render the text, relative to other fonts in the same font family.",
        ],
    }),
    format: attribute({
        name: "format",

        values: "string",
        els: [],
        docs: [
            "The format attribute indicates the format of the given font.",
            "@deprecated",
        ],
    }),
    from: attribute({
        name: "from",

        values: "string",
        els: [],
        docs: [
            "The from attribute indicates the initial value of the attribute that will be modified during the animation.",
        ],
    }),
    fr: attribute({
        name: "fr",

        values: "string",
        els: [],
        docs: [
            "The fr attribute defines the radius of the focal point for the radial gradient.",
        ],
    }),
    fx: attribute({
        name: "fx",

        values: "string",
        els: [],
        docs: [
            "The fx attribute defines the x-axis coordinate of the focal point for a radial gradient.",
        ],
    }),
    fy: attribute({
        name: "fy",

        values: "string",
        els: [],
        docs: [
            "The fy attribute defines the y-axis coordinate of the focal point for a radial gradient.",
        ],
    }),
    g1: attribute({ name: "g1", values: "string", els: [], docs: [] }),
    g2: attribute({ name: "g2", values: "string", els: [], docs: [] }),
    glyphName: attribute({
        name: "glyph-name",

        values: "string",
        els: [],
        docs: [],
    }),
    glyphOrientationHorizontal: attribute({
        name: "glyph-orientation-horizontal",

        values: "string",
        els: [],
        docs: [],
    }),
    glyphOrientationVertical: attribute({
        name: "glyph-orientation-vertical",

        values: "string",
        els: [],
        docs: [],
    }),
    glyphRef: attribute({
        name: "glyphRef",

        values: "string",
        els: [],
        docs: [],
    }),
    gradientTransform: attribute({
        name: "gradientTransform",

        values: "string",
        els: [],
        docs: [],
    }),
    gradientUnits: attribute({
        name: "gradientUnits",

        values: "string",
        els: [],
        docs: [],
    }),
    hanging: attribute({
        name: "hanging",

        values: "string",
        els: [],
        docs: [],
    }),
    height: attribute({
        name: "height",

        values: "string",
        els: [],
        docs: [],
    }),
    href: attribute({ name: "href", values: "string", els: [], docs: [] }),
    hreflang: attribute({
        name: "hreflang",

        values: "string",
        els: [],
        docs: [],
    }),
    horizAdvX: attribute({
        name: "horiz-adv-x",

        values: "string",
        els: [],
        docs: [],
    }),
    horizOriginX: attribute({
        name: "horiz-origin-x",

        values: "string",
        els: [],
        docs: [],
    }),
    id: attribute({ name: "id", values: "string", els: [], docs: [] }),
    ideographic: attribute({
        name: "ideographic",

        values: "string",
        els: [],
        docs: [],
    }),
    imageRendering: attribute({
        name: "image-rendering",

        values: "string",
        els: [],
        docs: [],
    }),
    in: attribute({ name: "in", values: "string", els: [], docs: [] }),
    in2: attribute({ name: "in2", values: "string", els: [], docs: [] }),
    intercept: attribute({
        name: "intercept",

        values: "string",
        els: [],
        docs: [],
    }),
    k: attribute({ name: "k", values: "string", els: [], docs: [] }),
    k1: attribute({ name: "k1", values: "string", els: [], docs: [] }),
    k2: attribute({ name: "k2", values: "string", els: [], docs: [] }),
    k3: attribute({ name: "k3", values: "string", els: [], docs: [] }),
    k4: attribute({ name: "k4", values: "string", els: [], docs: [] }),
    kernelMatrix: attribute({
        name: "kernelMatrix",

        values: "string",
        els: [],
        docs: [],
    }),
    kernelUnitLength: attribute({
        name: "kernelUnitLength",

        values: "string",
        els: [],
        docs: [],
    }),
    kerning: attribute({
        name: "kerning",

        values: "string",
        els: [],
        docs: [],
    }),
    keyPoints: attribute({
        name: "keyPoints",

        values: "string",
        els: [],
        docs: [],
    }),
    keySplines: attribute({
        name: "keySplines",

        values: "string",
        els: [],
        docs: [],
    }),
    keyTimes: attribute({
        name: "keyTimes",

        values: "string",
        els: [],
        docs: [],
    }),
    lang: attribute({ name: "lang", values: "string", els: [], docs: [] }),
    lengthAdjust: attribute({
        name: "lengthAdjust",

        values: "string",
        els: [],
        docs: [],
    }),
    letterSpacing: attribute({
        name: "letter-spacing",

        values: "string",
        els: [],
        docs: [],
    }),
    lightingColor: attribute({
        name: "lighting-color",

        values: "string",
        els: [],
        docs: [],
    }),
    limitingConeAngle: attribute({
        name: "limitingConeAngle",

        values: "string",
        els: [],
        docs: [],
    }),
    local: attribute({
        name: "local",

        values: "string",
        els: [],
        docs: [],
    }),
    markerEnd: attribute({
        name: "marker-end",

        values: "string",
        els: [],
        docs: [],
    }),
    markerMid: attribute({
        name: "marker-mid",

        values: "string",
        els: [],
        docs: [],
    }),
    markerStart: attribute({
        name: "marker-start",

        values: "string",
        els: [],
        docs: [],
    }),
    markerHeight: attribute({
        name: "markerHeight",

        values: "string",
        els: [],
        docs: [],
    }),
    markerUnits: attribute({
        name: "markerUnits",

        values: "string",
        els: [],
        docs: [],
    }),
    markerWidth: attribute({
        name: "markerWidth",

        values: "string",
        els: [],
        docs: [],
    }),
    mask: attribute({ name: "mask", values: "string", els: [], docs: [] }),
    maskContentUnits: attribute({
        name: "maskContentUnits",

        values: "string",
        els: [],
        docs: [],
    }),
    maskUnits: attribute({
        name: "maskUnits",

        values: "string",
        els: [],
        docs: [],
    }),
    mathematical: attribute({
        name: "mathematical",

        values: "string",
        els: [],
        docs: [],
    }),
    max: attribute({ name: "max", values: "string", els: [], docs: [] }),
    media: attribute({
        name: "media",

        values: "string",
        els: [],
        docs: [],
    }),
    method: attribute({
        name: "method",

        values: "string",
        els: [],
        docs: [],
    }),
    min: attribute({ name: "min", values: "string", els: [], docs: [] }),
    mode: attribute({ name: "mode", values: "string", els: [], docs: [] }),
    name: attribute({ name: "name", values: "string", els: [], docs: [] }),
    numOctaves: attribute({
        name: "numOctaves",

        values: "string",
        els: [],
        docs: [],
    }),
    offset: attribute({
        name: "offset",

        values: "string",
        els: [],
        docs: [],
    }),
    opacity: attribute({
        name: "opacity",

        values: "string",
        els: [],
        docs: [],
    }),
    operator: attribute({
        name: "operator",

        values: "string",
        els: [],
        docs: [],
    }),
    order: attribute({
        name: "order",

        values: "string",
        els: [],
        docs: [],
    }),
    orient: attribute({
        name: "orient",

        values: "string",
        els: [],
        docs: [],
    }),
    orientation: attribute({
        name: "orientation",

        values: "string",
        els: [],
        docs: [],
    }),
    origin: attribute({
        name: "origin",

        values: "string",
        els: [],
        docs: [],
    }),
    overflow: attribute({
        name: "overflow",

        values: "string",
        els: [],
        docs: [],
    }),
    overlinePosition: attribute({
        name: "overline-position",

        values: "string",
        els: [],
        docs: [],
    }),
    overlineThickness: attribute({
        name: "overline-thickness",

        values: "string",
        els: [],
        docs: [],
    }),
    panose1: attribute({
        name: "panose-1",

        values: "string",
        els: [],
        docs: [],
    }),
    paintOrder: attribute({
        name: "paint-order",

        values: "string",
        els: [],
        docs: [],
    }),
    path: attribute({ name: "path", values: "string", els: [], docs: [] }),
    pathLength: attribute({
        name: "pathLength",

        values: "string",
        els: [],
        docs: [],
    }),
    patternContentUnits: attribute({
        name: "patternContentUnits",

        values: "string",
        els: [],
        docs: [],
    }),
    patternTransform: attribute({
        name: "patternTransform",

        values: "string",
        els: [],
        docs: [],
    }),
    patternUnits: attribute({
        name: "patternUnits",

        values: "string",
        els: [],
        docs: [],
    }),
    ping: attribute({ name: "ping", values: "string", els: [], docs: [] }),
    pointerEvents: attribute({
        name: "pointer-events",

        values: "string",
        els: [],
        docs: [],
    }),
    points: attribute({
        name: "points",

        values: "string",
        els: [],
        docs: [],
    }),
    pointsAtX: attribute({
        name: "pointsAtX",

        values: "string",
        els: [],
        docs: [],
    }),
    pointsAtY: attribute({
        name: "pointsAtY",

        values: "string",
        els: [],
        docs: [],
    }),
    pointsAtZ: attribute({
        name: "pointsAtZ",

        values: "string",
        els: [],
        docs: [],
    }),
    preserveAlpha: attribute({
        name: "preserveAlpha",

        values: "string",
        els: [],
        docs: [],
    }),
    preserveAspectRatio: attribute({
        name: "preserveAspectRatio",

        values: "string",
        els: [],
        docs: [],
    }),
    primitiveUnits: attribute({
        name: "primitiveUnits",

        values: "string",
        els: [],
        docs: [],
    }),
    r: attribute({ name: "r", values: "string", els: [], docs: [] }),
    radius: attribute({
        name: "radius",

        values: "string",
        els: [],
        docs: [],
    }),
    referrerPolicy: attribute({
        name: "referrerPolicy",

        values: "string",
        els: [],
        docs: [],
    }),
    refX: attribute({ name: "refX", values: "string", els: [], docs: [] }),
    refY: attribute({ name: "refY", values: "string", els: [], docs: [] }),
    rel: attribute({ name: "rel", values: "string", els: [], docs: [] }),
    renderingIntent: attribute({
        name: "rendering-intent",

        values: "string",
        els: [],
        docs: [],
    }),
    repeatCount: attribute({
        name: "repeatCount",

        values: "string",
        els: [],
        docs: [],
    }),
    repeatDur: attribute({
        name: "repeatDur",

        values: "string",
        els: [],
        docs: [],
    }),
    requiredExtensions: attribute({
        name: "requiredExtensions",

        values: "string",
        els: [],
        docs: [],
    }),
    requiredFeatures: attribute({
        name: "requiredFeatures",

        values: "string",
        els: [],
        docs: [],
    }),
    restart: attribute({
        name: "restart",

        values: "string",
        els: [],
        docs: [],
    }),
    result: attribute({
        name: "result",

        values: "string",
        els: [],
        docs: [],
    }),
    rotate: attribute({
        name: "rotate",

        values: "string",
        els: [],
        docs: [],
    }),
    rx: attribute({ name: "rx", values: "string", els: [], docs: [] }),
    ry: attribute({ name: "ry", values: "string", els: [], docs: [] }),
    scale: attribute({
        name: "scale",

        values: "string",
        els: [],
        docs: [],
    }),
    seed: attribute({ name: "seed", values: "string", els: [], docs: [] }),
    shapeRendering: attribute({
        name: "shape-rendering",

        values: "string",
        els: [],
        docs: [],
    }),
    slope: attribute({
        name: "slope",

        values: "string",
        els: [],
        docs: [],
    }),
    spacing: attribute({
        name: "spacing",

        values: "string",
        els: [],
        docs: [],
    }),
    specularConstant: attribute({
        name: "specularConstant",

        values: "string",
        els: [],
        docs: [],
    }),
    specularExponent: attribute({
        name: "specularExponent",

        values: "string",
        els: [],
        docs: [],
    }),
    speed: attribute({
        name: "speed",

        values: "string",
        els: [],
        docs: [],
    }),
    spreadMethod: attribute({
        name: "spreadMethod",

        values: "string",
        els: [],
        docs: [],
    }),
    startOffset: attribute({
        name: "startOffset",

        values: "string",
        els: [],
        docs: [],
    }),
    stdDeviation: attribute({
        name: "stdDeviation",

        values: "string",
        els: [],
        docs: [],
    }),
    stemh: attribute({
        name: "stemh",

        values: "string",
        els: [],
        docs: [],
    }),
    stemv: attribute({
        name: "stemv",

        values: "string",
        els: [],
        docs: [],
    }),
    stitchTiles: attribute({
        name: "stitchTiles",

        values: "string",
        els: [],
        docs: [],
    }),
    stopColor: attribute({
        name: "stop-color",

        values: "string",
        els: [],
        docs: [],
    }),
    stopOpacity: attribute({
        name: "stop-opacity",

        values: "string",
        els: [],
        docs: [],
    }),
    strikethroughPosition: attribute({
        name: "strikethrough-position",

        values: "string",
        els: [],
        docs: [],
    }),
    strikethroughThickness: attribute({
        name: "strikethrough-thickness",

        values: "string",
        els: [],
        docs: [],
    }),
    string: attribute({
        name: "string",

        values: "string",
        els: [],
        docs: [],
    }),
    stroke: attribute({
        name: "stroke",

        values: "string",
        els: [],
        docs: [],
    }),
    strokeDasharray: attribute({
        name: "stroke-dasharray",

        values: "string",
        els: [],
        docs: [],
    }),
    strokeDashoffset: attribute({
        name: "stroke-dashoffset",

        values: "string",
        els: [],
        docs: [],
    }),
    strokeLinecap: attribute({
        name: "stroke-linecap",

        values: "string",
        els: [],
        docs: [],
    }),
    strokeLinejoin: attribute({
        name: "stroke-linejoin",

        values: "string",
        els: [],
        docs: [],
    }),
    strokeMiterlimit: attribute({
        name: "stroke-miterlimit",

        values: "string",
        els: [],
        docs: [],
    }),
    strokeOpacity: attribute({
        name: "stroke-opacity",

        values: "string",
        els: [],
        docs: [],
    }),
    strokeWidth: attribute({
        name: "stroke-width",

        values: "string",
        els: [],
        docs: [],
    }),
    surfaceScale: attribute({
        name: "surfaceScale",

        values: "string",
        els: [],
        docs: [],
    }),
    systemLanguage: attribute({
        name: "systemLanguage",

        values: "string",
        els: [],
        docs: [],
    }),
    tabindex: attribute({
        name: "tabindex",

        values: "string",
        els: [],
        docs: [],
    }),
    tableValues: attribute({
        name: "tableValues",

        values: "string",
        els: [],
        docs: [],
    }),
    target: attribute({
        name: "target",

        values: "string",
        els: [],
        docs: [],
    }),
    targetX: attribute({
        name: "targetX",

        values: "string",
        els: [],
        docs: [],
    }),
    targetY: attribute({
        name: "targetY",

        values: "string",
        els: [],
        docs: [],
    }),
    textAnchor: attribute({
        name: "text-anchor",

        values: "string",
        els: [],
        docs: [],
    }),
    textDecoration: attribute({
        name: "text-decoration",

        values: "string",
        els: [],
        docs: [],
    }),
    textRendering: attribute({
        name: "text-rendering",

        values: "string",
        els: [],
        docs: [],
    }),
    textLength: attribute({
        name: "textLength",

        values: "string",
        els: [],
        docs: [],
    }),
    to: attribute({ name: "to", values: "string", els: [], docs: [] }),
    transform: attribute({
        name: "transform",

        values: "string",
        els: [],
        docs: [],
    }),
    transformOrigin: attribute({
        name: "transform-origin",

        values: "string",
        els: [],
        docs: [],
    }),
    type: attribute({ name: "type", values: "string", els: [], docs: [] }),
    u1: attribute({ name: "u1", values: "string", els: [], docs: [] }),
    u2: attribute({ name: "u2", values: "string", els: [], docs: [] }),
    underlinePosition: attribute({
        name: "underline-position",

        values: "string",
        els: [],
        docs: [],
    }),
    underlineThickness: attribute({
        name: "underline-thickness",

        values: "string",
        els: [],
        docs: [],
    }),
    unicode: attribute({
        name: "unicode",

        values: "string",
        els: [],
        docs: [],
    }),
    unicodeBidi: attribute({
        name: "unicode-bidi",

        values: "string",
        els: [],
        docs: [],
    }),
    unicodeRange: attribute({
        name: "unicode-range",

        values: "string",
        els: [],
        docs: [],
    }),
    unitsPerEm: attribute({
        name: "units-per-em",

        values: "string",
        els: [],
        docs: [],
    }),
    vAlphabetic: attribute({
        name: "v-alphabetic",

        values: "string",
        els: [],
        docs: [],
    }),
    vHanging: attribute({
        name: "v-hanging",

        values: "string",
        els: [],
        docs: [],
    }),
    vIdeographic: attribute({
        name: "v-ideographic",

        values: "string",
        els: [],
        docs: [],
    }),
    vMathematical: attribute({
        name: "v-mathematical",

        values: "string",
        els: [],
        docs: [],
    }),
    values: attribute({
        name: "values",

        values: "string",
        els: [],
        docs: [],
    }),
    vectorEffect: attribute({
        name: "vector-effect",

        values: "string",
        els: [],
        docs: [],
    }),
    version: attribute({
        name: "version",

        values: "string",
        els: [],
        docs: [],
    }),
    vertAdvY: attribute({
        name: "vert-adv-y",

        values: "string",
        els: [],
        docs: [],
    }),
    vertOriginX: attribute({
        name: "vert-origin-x",

        values: "string",
        els: [],
        docs: [],
    }),
    vertOriginY: attribute({
        name: "vert-origin-y",

        values: "string",
        els: [],
        docs: [],
    }),
    viewBox: attribute({
        name: "viewBox",

        values: "string",
        els: [],
        docs: [],
    }),
    viewTarget: attribute({
        name: "viewTarget",

        values: "string",
        els: [],
        docs: [],
    }),
    visibility: attribute({
        name: "visibility",

        values: "string",
        els: [],
        docs: [],
    }),
    width: attribute({
        name: "width",

        values: "string",
        els: [],
        docs: [],
    }),
    widths: attribute({
        name: "widths",

        values: "string",
        els: [],
        docs: [],
    }),
    wordSpacing: attribute({
        name: "word-spacing",

        values: "string",
        els: [],
        docs: [],
    }),
    writingMode: attribute({
        name: "writing-mode",

        values: "string",
        els: [],
        docs: [],
    }),
    x: attribute({ name: "x", values: "string", els: [], docs: [] }),
    xHeight: attribute({
        name: "x-height",

        values: "string",
        els: [],
        docs: [],
    }),
    x1: attribute({ name: "x1", values: "string", els: [], docs: [] }),
    x2: attribute({ name: "x2", values: "string", els: [], docs: [] }),
    xChannelSelector: attribute({
        name: "xChannelSelector",

        values: "string",
        els: [],
        docs: [],
    }),
    xlinkActuate: attribute({
        name: "xlink:actuate",

        values: "string",
        els: [],
        docs: [],
    }),
    xlinkArcrole: attribute({
        name: "xlink:arcrole",

        values: "string",
        els: [],
        docs: [],
    }),
    xLinkHref: attribute({
        name: "xlink:href",

        values: "string",
        els: [],
        docs: [],
    }),
    xlinkRole: attribute({
        name: "xlink:role",

        values: "string",
        els: [],
        docs: [],
    }),
    xlinkShow: attribute({
        name: "xlink:show",

        values: "string",
        els: [],
        docs: [],
    }),
    xlinkTitle: attribute({
        name: "xlink:title",

        values: "string",
        els: [],
        docs: [],
    }),
    xlinkType: attribute({
        name: "xlink:type",

        values: "string",
        els: [],
        docs: [],
    }),
    xmlBase: attribute({
        name: "xml:base",

        values: "string",
        els: [],
        docs: [],
    }),
    xmlLang: attribute({
        name: "xml:lang",

        values: "string",
        els: [],
        docs: [],
    }),
    xmlSpace: attribute({
        name: "xml:space",

        values: "string",
        els: [],
        docs: [],
    }),
    y: attribute({ name: "y", values: "string", els: [], docs: [] }),
    y1: attribute({ name: "y1", values: "string", els: [], docs: [] }),
    y2: attribute({ name: "y2", values: "string", els: [], docs: [] }),
    yChannelSelector: attribute({
        name: "yChannelSelector",

        values: "string",
        els: [],
        docs: [],
    }),
    z: attribute({ name: "z", values: "string", els: [], docs: [] }),
    zoomAndPan: attribute({
        name: "zoomAndPan",

        values: "string",
        els: [],
        docs: [],
    }),
    autoReverse: attribute({
        name: "autoReverse",

        values: "string",
        els: [],
        docs: [],
    }),
    accelerate: attribute({
        name: "accelerate",

        values: "string",
        els: [],
        docs: [],
    }),
};
