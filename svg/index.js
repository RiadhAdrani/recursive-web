/**
 * Create `<a>` element.
 * @param {import("../lib.js").SVGAProps} props
 * @returns Recursive Web Element
 */
function A(props) {
    return { ...props, rendererOptions: { ns: "http://www.w3.org/2000/svg" }, elementType: "a" };
}
/**
 * Create `<animate>` element.
 * @param {import("../lib.js").SVGAnimateProps} props
 * @returns Recursive Web Element
 */
function Animate(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "animate",
    };
}
/**
 * Create `<animatemotion>` element.
 * @param {import("../lib.js").SVGAnimateMotionProps} props
 * @returns Recursive Web Element
 */
function AnimateMotion(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "animatemotion",
    };
}
/**
 * Create `<animatetransform>` element.
 * @param {import("../lib.js").SVGAnimateTransformProps} props
 * @returns Recursive Web Element
 */
function AnimateTransform(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "animatetransform",
    };
}
/**
 * Create `<circle>` element.
 * @param {import("../lib.js").SVGCircleProps} props
 * @returns Recursive Web Element
 */
function Circle(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "circle",
    };
}
/**
 * Create `<clippath>` element.
 * @param {import("../lib.js").SVGClipPathProps} props
 * @returns Recursive Web Element
 */
function ClipPath(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "clippath",
    };
}
/**
 * Create `<defs>` element.
 * @param {import("../lib.js").SVGDefsProps} props
 * @returns Recursive Web Element
 */
function Defs(props) {
    return { ...props, rendererOptions: { ns: "http://www.w3.org/2000/svg" }, elementType: "defs" };
}
/**
 * Create `<desc>` element.
 * @param {import("../lib.js").SVGDescProps} props
 * @returns Recursive Web Element
 */
function Desc(props) {
    return { ...props, rendererOptions: { ns: "http://www.w3.org/2000/svg" }, elementType: "desc" };
}
/**
 * Create `<discard>` element.
 * @param {import("../lib.js").SVGDiscardProps} props
 * @returns Recursive Web Element
 */
function Discard(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "discard",
    };
}
/**
 * Create `<ellipse>` element.
 * @param {import("../lib.js").SVGEllipseProps} props
 * @returns Recursive Web Element
 */
function Ellipse(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "ellipse",
    };
}
/**
 * Create `<feblend>` element.
 * @param {import("../lib.js").SVGFeBlendProps} props
 * @returns Recursive Web Element
 */
function FeBlend(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "feblend",
    };
}
/**
 * Create `<fecolormatrix>` element.
 * @param {import("../lib.js").SVGFeColorMatrixProps} props
 * @returns Recursive Web Element
 */
function FeColorMatrix(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "fecolormatrix",
    };
}
/**
 * Create `<fecomponenttransfer>` element.
 * @param {import("../lib.js").SVGFeComponentTransferProps} props
 * @returns Recursive Web Element
 */
function FeComponentTransfer(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "fecomponenttransfer",
    };
}
/**
 * Create `<fecomposite>` element.
 * @param {import("../lib.js").SVGFeCompositeProps} props
 * @returns Recursive Web Element
 */
function FeComposite(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "fecomposite",
    };
}
/**
 * Create `<feconvolvematrix>` element.
 * @param {import("../lib.js").SVGFeConvolveMatrixProps} props
 * @returns Recursive Web Element
 */
function FeConvolveMatrix(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "feconvolvematrix",
    };
}
/**
 * Create `<fediffuselighting>` element.
 * @param {import("../lib.js").SVGFeDiffuseLightingProps} props
 * @returns Recursive Web Element
 */
function FeDiffuseLighting(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "fediffuselighting",
    };
}
/**
 * Create `<fedisplacementmap>` element.
 * @param {import("../lib.js").SVGFeDisplacementMapProps} props
 * @returns Recursive Web Element
 */
function FeDisplacementMap(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "fedisplacementmap",
    };
}
/**
 * Create `<fedistantlight>` element.
 * @param {import("../lib.js").SVGFeDistantLightProps} props
 * @returns Recursive Web Element
 */
function FeDistantLight(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "fedistantlight",
    };
}
/**
 * Create `<fedropshadow>` element.
 * @param {import("../lib.js").SVGFeDropShadowProps} props
 * @returns Recursive Web Element
 */
function FeDropShadow(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "fedropshadow",
    };
}
/**
 * Create `<feflood>` element.
 * @param {import("../lib.js").SVGFeFloodProps} props
 * @returns Recursive Web Element
 */
function FeFlood(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "feflood",
    };
}
/**
 * Create `<fefunca>` element.
 * @param {import("../lib.js").SVGFeFuncAProps} props
 * @returns Recursive Web Element
 */
function FeFuncA(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "fefunca",
    };
}
/**
 * Create `<fefuncb>` element.
 * @param {import("../lib.js").SVGFeFuncBProps} props
 * @returns Recursive Web Element
 */
function FeFuncB(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "fefuncb",
    };
}
/**
 * Create `<fefuncg>` element.
 * @param {import("../lib.js").SVGFeFuncGProps} props
 * @returns Recursive Web Element
 */
function FeFuncG(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "fefuncg",
    };
}
/**
 * Create `<fefuncr>` element.
 * @param {import("../lib.js").SVGFeFuncRProps} props
 * @returns Recursive Web Element
 */
function FeFuncR(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "fefuncr",
    };
}
/**
 * Create `<fegaussianblur>` element.
 * @param {import("../lib.js").SVGFeGaussianBlurProps} props
 * @returns Recursive Web Element
 */
function FeGaussianBlur(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "fegaussianblur",
    };
}
/**
 * Create `<feimage>` element.
 * @param {import("../lib.js").SVGFeImageProps} props
 * @returns Recursive Web Element
 */
function FeImage(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "feimage",
    };
}
/**
 * Create `<femerge>` element.
 * @param {import("../lib.js").SVGFeMergeProps} props
 * @returns Recursive Web Element
 */
function FeMerge(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "femerge",
    };
}
/**
 * Create `<femergenode>` element.
 * @param {import("../lib.js").SVGFeMergeNodeProps} props
 * @returns Recursive Web Element
 */
function FeMergeNode(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "femergenode",
    };
}
/**
 * Create `<femorphology>` element.
 * @param {import("../lib.js").SVGFeMorphologyProps} props
 * @returns Recursive Web Element
 */
function FeMorphology(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "femorphology",
    };
}
/**
 * Create `<feoffset>` element.
 * @param {import("../lib.js").SVGFeOffsetProps} props
 * @returns Recursive Web Element
 */
function FeOffset(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "feoffset",
    };
}
/**
 * Create `<fepointlight>` element.
 * @param {import("../lib.js").SVGFePointLightProps} props
 * @returns Recursive Web Element
 */
function FePointLight(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "fepointlight",
    };
}
/**
 * Create `<fespecularlighting>` element.
 * @param {import("../lib.js").SVGFeSpecularLightingProps} props
 * @returns Recursive Web Element
 */
function FeSpecularLighting(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "fespecularlighting",
    };
}
/**
 * Create `<fespotlight>` element.
 * @param {import("../lib.js").SVGFeSpotLightProps} props
 * @returns Recursive Web Element
 */
function FeSpotLight(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "fespotlight",
    };
}
/**
 * Create `<fetile>` element.
 * @param {import("../lib.js").SVGFeTileProps} props
 * @returns Recursive Web Element
 */
function FeTile(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "fetile",
    };
}
/**
 * Create `<feturbulence>` element.
 * @param {import("../lib.js").SVGFeTurbulenceProps} props
 * @returns Recursive Web Element
 */
function FeTurbulence(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "feturbulence",
    };
}
/**
 * Create `<filter>` element.
 * @param {import("../lib.js").SVGFilterProps} props
 * @returns Recursive Web Element
 */
function Filter(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "filter",
    };
}
/**
 * Create `<foreignobject>` element.
 * @param {import("../lib.js").SVGForeignObjectProps} props
 * @returns Recursive Web Element
 */
function ForeignObject(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "foreignobject",
    };
}
/**
 * Create `<g>` element.
 * @param {import("../lib.js").SVGGProps} props
 * @returns Recursive Web Element
 */
function G(props) {
    return { ...props, rendererOptions: { ns: "http://www.w3.org/2000/svg" }, elementType: "g" };
}
/**
 * Create `<hatch>` element.
 * @param {import("../lib.js").SVGHatchProps} props
 * @returns Recursive Web Element
 */
function Hatch(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "hatch",
    };
}
/**
 * Create `<hatchpath>` element.
 * @param {import("../lib.js").SVGHatchpathProps} props
 * @returns Recursive Web Element
 */
function Hatchpath(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "hatchpath",
    };
}
/**
 * Create `<image>` element.
 * @param {import("../lib.js").SVGImageProps} props
 * @returns Recursive Web Element
 */
function Image(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "image",
    };
}
/**
 * Create `<line>` element.
 * @param {import("../lib.js").SVGLineProps} props
 * @returns Recursive Web Element
 */
function Line(props) {
    return { ...props, rendererOptions: { ns: "http://www.w3.org/2000/svg" }, elementType: "line" };
}
/**
 * Create `<lineargradient>` element.
 * @param {import("../lib.js").SVGLinearGradientProps} props
 * @returns Recursive Web Element
 */
function LinearGradient(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "lineargradient",
    };
}
/**
 * Create `<marker>` element.
 * @param {import("../lib.js").SVGMarkerProps} props
 * @returns Recursive Web Element
 */
function Marker(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "marker",
    };
}
/**
 * Create `<mask>` element.
 * @param {import("../lib.js").SVGMaskProps} props
 * @returns Recursive Web Element
 */
function Mask(props) {
    return { ...props, rendererOptions: { ns: "http://www.w3.org/2000/svg" }, elementType: "mask" };
}
/**
 * Create `<metadata>` element.
 * @param {import("../lib.js").SVGMetadataProps} props
 * @returns Recursive Web Element
 */
function Metadata(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "metadata",
    };
}
/**
 * Create `<mpath>` element.
 * @param {import("../lib.js").SVGMpathProps} props
 * @returns Recursive Web Element
 */
function Mpath(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "mpath",
    };
}
/**
 * Create `<path>` element.
 * @param {import("../lib.js").SVGPathProps} props
 * @returns Recursive Web Element
 */
function Path(props) {
    return { ...props, rendererOptions: { ns: "http://www.w3.org/2000/svg" }, elementType: "path" };
}
/**
 * Create `<pattern>` element.
 * @param {import("../lib.js").SVGPatternProps} props
 * @returns Recursive Web Element
 */
function Pattern(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "pattern",
    };
}
/**
 * Create `<polygon>` element.
 * @param {import("../lib.js").SVGPolygonProps} props
 * @returns Recursive Web Element
 */
function Polygon(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "polygon",
    };
}
/**
 * Create `<polyline>` element.
 * @param {import("../lib.js").SVGPolylineProps} props
 * @returns Recursive Web Element
 */
function Polyline(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "polyline",
    };
}
/**
 * Create `<radialgradient>` element.
 * @param {import("../lib.js").SVGRadialGradientProps} props
 * @returns Recursive Web Element
 */
function RadialGradient(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "radialgradient",
    };
}
/**
 * Create `<rect>` element.
 * @param {import("../lib.js").SVGRectProps} props
 * @returns Recursive Web Element
 */
function Rect(props) {
    return { ...props, rendererOptions: { ns: "http://www.w3.org/2000/svg" }, elementType: "rect" };
}
/**
 * Create `<set>` element.
 * @param {import("../lib.js").SVGSetProps} props
 * @returns Recursive Web Element
 */
function Set(props) {
    return { ...props, rendererOptions: { ns: "http://www.w3.org/2000/svg" }, elementType: "set" };
}
/**
 * Create `<stop>` element.
 * @param {import("../lib.js").SVGStopProps} props
 * @returns Recursive Web Element
 */
function Stop(props) {
    return { ...props, rendererOptions: { ns: "http://www.w3.org/2000/svg" }, elementType: "stop" };
}
/**
 * Create `<svg>` element.
 * @param {import("../lib.js").SVGSvgProps} props
 * @returns Recursive Web Element
 */
function Svg(props) {
    return { ...props, rendererOptions: { ns: "http://www.w3.org/2000/svg" }, elementType: "svg" };
}
/**
 * Create `<switch>` element.
 * @param {import("../lib.js").SVGSwitchProps} props
 * @returns Recursive Web Element
 */
function Switch(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "switch",
    };
}
/**
 * Create `<symbol>` element.
 * @param {import("../lib.js").SVGSymbolProps} props
 * @returns Recursive Web Element
 */
function Symbol(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "symbol",
    };
}
/**
 * Create `<text>` element.
 * @param {import("../lib.js").SVGTextProps} props
 * @returns Recursive Web Element
 */
function Text(props) {
    return { ...props, rendererOptions: { ns: "http://www.w3.org/2000/svg" }, elementType: "text" };
}
/**
 * Create `<textpath>` element.
 * @param {import("../lib.js").SVGTextPathProps} props
 * @returns Recursive Web Element
 */
function TextPath(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "textpath",
    };
}
/**
 * Create `<title>` element.
 * @param {import("../lib.js").SVGTitleProps} props
 * @returns Recursive Web Element
 */
function Title(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "title",
    };
}
/**
 * Create `<tspan>` element.
 * @param {import("../lib.js").SVGTspanProps} props
 * @returns Recursive Web Element
 */
function Tspan(props) {
    return {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
        elementType: "tspan",
    };
}
/**
 * Create `<use>` element.
 * @param {import("../lib.js").SVGUseProps} props
 * @returns Recursive Web Element
 */
function Use(props) {
    return { ...props, rendererOptions: { ns: "http://www.w3.org/2000/svg" }, elementType: "use" };
}
/**
 * Create `<view>` element.
 * @param {import("../lib.js").SVGViewProps} props
 * @returns Recursive Web Element
 */
function View(props) {
    return { ...props, rendererOptions: { ns: "http://www.w3.org/2000/svg" }, elementType: "view" };
}
export {
    A,
    Animate,
    AnimateMotion,
    AnimateTransform,
    Circle,
    ClipPath,
    Defs,
    Desc,
    Discard,
    Ellipse,
    FeBlend,
    FeColorMatrix,
    FeComponentTransfer,
    FeComposite,
    FeConvolveMatrix,
    FeDiffuseLighting,
    FeDisplacementMap,
    FeDistantLight,
    FeDropShadow,
    FeFlood,
    FeFuncA,
    FeFuncB,
    FeFuncG,
    FeFuncR,
    FeGaussianBlur,
    FeImage,
    FeMerge,
    FeMergeNode,
    FeMorphology,
    FeOffset,
    FePointLight,
    FeSpecularLighting,
    FeSpotLight,
    FeTile,
    FeTurbulence,
    Filter,
    ForeignObject,
    G,
    Hatch,
    Hatchpath,
    Image,
    Line,
    LinearGradient,
    Marker,
    Mask,
    Metadata,
    Mpath,
    Path,
    Pattern,
    Polygon,
    Polyline,
    RadialGradient,
    Rect,
    Set,
    Stop,
    Svg,
    Switch,
    Symbol,
    Text,
    TextPath,
    Title,
    Tspan,
    Use,
    View,
};
