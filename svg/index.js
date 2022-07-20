import { createElement } from "..";

/**
 * Create `<a>` element.
 * @param {import("../lib.js").SVGAProps} props
 * @returns Recursive Web Element
 */
function A(props) {
    return createElement("a", { ...props, rendererOptions: { ns: "http://www.w3.org/2000/svg" } });
}
/**
 * Create `<animate>` element.
 * @param {import("../lib.js").SVGAnimateProps} props
 * @returns Recursive Web Element
 */
function Animate(props) {
    return createElement("animate", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<animatemotion>` element.
 * @param {import("../lib.js").SVGAnimateMotionProps} props
 * @returns Recursive Web Element
 */
function AnimateMotion(props) {
    return createElement("animatemotion", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<animatetransform>` element.
 * @param {import("../lib.js").SVGAnimateTransformProps} props
 * @returns Recursive Web Element
 */
function AnimateTransform(props) {
    return createElement("animatetransform", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<circle>` element.
 * @param {import("../lib.js").SVGCircleProps} props
 * @returns Recursive Web Element
 */
function Circle(props) {
    return createElement("circle", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<clippath>` element.
 * @param {import("../lib.js").SVGClipPathProps} props
 * @returns Recursive Web Element
 */
function ClipPath(props) {
    return createElement("clippath", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<defs>` element.
 * @param {import("../lib.js").SVGDefsProps} props
 * @returns Recursive Web Element
 */
function Defs(props) {
    return createElement("defs", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<desc>` element.
 * @param {import("../lib.js").SVGDescProps} props
 * @returns Recursive Web Element
 */
function Desc(props) {
    return createElement("desc", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<discard>` element.
 * @param {import("../lib.js").SVGDiscardProps} props
 * @returns Recursive Web Element
 */
function Discard(props) {
    return createElement("discard", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<ellipse>` element.
 * @param {import("../lib.js").SVGEllipseProps} props
 * @returns Recursive Web Element
 */
function Ellipse(props) {
    return createElement("ellipse", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<feblend>` element.
 * @param {import("../lib.js").SVGFeBlendProps} props
 * @returns Recursive Web Element
 */
function FeBlend(props) {
    return createElement("feblend", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<fecolormatrix>` element.
 * @param {import("../lib.js").SVGFeColorMatrixProps} props
 * @returns Recursive Web Element
 */
function FeColorMatrix(props) {
    return createElement("fecolormatrix", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<fecomponenttransfer>` element.
 * @param {import("../lib.js").SVGFeComponentTransferProps} props
 * @returns Recursive Web Element
 */
function FeComponentTransfer(props) {
    return createElement("fecomponenttransfer", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<fecomposite>` element.
 * @param {import("../lib.js").SVGFeCompositeProps} props
 * @returns Recursive Web Element
 */
function FeComposite(props) {
    return createElement("fecomposite", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<feconvolvematrix>` element.
 * @param {import("../lib.js").SVGFeConvolveMatrixProps} props
 * @returns Recursive Web Element
 */
function FeConvolveMatrix(props) {
    return createElement("feconvolvematrix", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<fediffuselighting>` element.
 * @param {import("../lib.js").SVGFeDiffuseLightingProps} props
 * @returns Recursive Web Element
 */
function FeDiffuseLighting(props) {
    return createElement("fediffuselighting", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<fedisplacementmap>` element.
 * @param {import("../lib.js").SVGFeDisplacementMapProps} props
 * @returns Recursive Web Element
 */
function FeDisplacementMap(props) {
    return createElement("fedisplacementmap", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<fedistantlight>` element.
 * @param {import("../lib.js").SVGFeDistantLightProps} props
 * @returns Recursive Web Element
 */
function FeDistantLight(props) {
    return createElement("fedistantlight", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<fedropshadow>` element.
 * @param {import("../lib.js").SVGFeDropShadowProps} props
 * @returns Recursive Web Element
 */
function FeDropShadow(props) {
    return createElement("fedropshadow", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<feflood>` element.
 * @param {import("../lib.js").SVGFeFloodProps} props
 * @returns Recursive Web Element
 */
function FeFlood(props) {
    return createElement("feflood", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<fefunca>` element.
 * @param {import("../lib.js").SVGFeFuncAProps} props
 * @returns Recursive Web Element
 */
function FeFuncA(props) {
    return createElement("fefunca", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<fefuncb>` element.
 * @param {import("../lib.js").SVGFeFuncBProps} props
 * @returns Recursive Web Element
 */
function FeFuncB(props) {
    return createElement("fefuncb", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<fefuncg>` element.
 * @param {import("../lib.js").SVGFeFuncGProps} props
 * @returns Recursive Web Element
 */
function FeFuncG(props) {
    return createElement("fefuncg", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<fefuncr>` element.
 * @param {import("../lib.js").SVGFeFuncRProps} props
 * @returns Recursive Web Element
 */
function FeFuncR(props) {
    return createElement("fefuncr", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<fegaussianblur>` element.
 * @param {import("../lib.js").SVGFeGaussianBlurProps} props
 * @returns Recursive Web Element
 */
function FeGaussianBlur(props) {
    return createElement("fegaussianblur", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<feimage>` element.
 * @param {import("../lib.js").SVGFeImageProps} props
 * @returns Recursive Web Element
 */
function FeImage(props) {
    return createElement("feimage", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<femerge>` element.
 * @param {import("../lib.js").SVGFeMergeProps} props
 * @returns Recursive Web Element
 */
function FeMerge(props) {
    return createElement("femerge", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<femergenode>` element.
 * @param {import("../lib.js").SVGFeMergeNodeProps} props
 * @returns Recursive Web Element
 */
function FeMergeNode(props) {
    return createElement("femergenode", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<femorphology>` element.
 * @param {import("../lib.js").SVGFeMorphologyProps} props
 * @returns Recursive Web Element
 */
function FeMorphology(props) {
    return createElement("femorphology", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<feoffset>` element.
 * @param {import("../lib.js").SVGFeOffsetProps} props
 * @returns Recursive Web Element
 */
function FeOffset(props) {
    return createElement("feoffset", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<fepointlight>` element.
 * @param {import("../lib.js").SVGFePointLightProps} props
 * @returns Recursive Web Element
 */
function FePointLight(props) {
    return createElement("fepointlight", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<fespecularlighting>` element.
 * @param {import("../lib.js").SVGFeSpecularLightingProps} props
 * @returns Recursive Web Element
 */
function FeSpecularLighting(props) {
    return createElement("fespecularlighting", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<fespotlight>` element.
 * @param {import("../lib.js").SVGFeSpotLightProps} props
 * @returns Recursive Web Element
 */
function FeSpotLight(props) {
    return createElement("fespotlight", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<fetile>` element.
 * @param {import("../lib.js").SVGFeTileProps} props
 * @returns Recursive Web Element
 */
function FeTile(props) {
    return createElement("fetile", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<feturbulence>` element.
 * @param {import("../lib.js").SVGFeTurbulenceProps} props
 * @returns Recursive Web Element
 */
function FeTurbulence(props) {
    return createElement("feturbulence", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<filter>` element.
 * @param {import("../lib.js").SVGFilterProps} props
 * @returns Recursive Web Element
 */
function Filter(props) {
    return createElement("filter", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<foreignobject>` element.
 * @param {import("../lib.js").SVGForeignObjectProps} props
 * @returns Recursive Web Element
 */
function ForeignObject(props) {
    return createElement("foreignobject", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<g>` element.
 * @param {import("../lib.js").SVGGProps} props
 * @returns Recursive Web Element
 */
function G(props) {
    return createElement("g", { ...props, rendererOptions: { ns: "http://www.w3.org/2000/svg" } });
}
/**
 * Create `<hatch>` element.
 * @param {import("../lib.js").SVGHatchProps} props
 * @returns Recursive Web Element
 */
function Hatch(props) {
    return createElement("hatch", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<hatchpath>` element.
 * @param {import("../lib.js").SVGHatchpathProps} props
 * @returns Recursive Web Element
 */
function Hatchpath(props) {
    return createElement("hatchpath", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<image>` element.
 * @param {import("../lib.js").SVGImageProps} props
 * @returns Recursive Web Element
 */
function Image(props) {
    return createElement("image", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<line>` element.
 * @param {import("../lib.js").SVGLineProps} props
 * @returns Recursive Web Element
 */
function Line(props) {
    return createElement("line", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<lineargradient>` element.
 * @param {import("../lib.js").SVGLinearGradientProps} props
 * @returns Recursive Web Element
 */
function LinearGradient(props) {
    return createElement("lineargradient", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<marker>` element.
 * @param {import("../lib.js").SVGMarkerProps} props
 * @returns Recursive Web Element
 */
function Marker(props) {
    return createElement("marker", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<mask>` element.
 * @param {import("../lib.js").SVGMaskProps} props
 * @returns Recursive Web Element
 */
function Mask(props) {
    return createElement("mask", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<metadata>` element.
 * @param {import("../lib.js").SVGMetadataProps} props
 * @returns Recursive Web Element
 */
function Metadata(props) {
    return createElement("metadata", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<mpath>` element.
 * @param {import("../lib.js").SVGMpathProps} props
 * @returns Recursive Web Element
 */
function Mpath(props) {
    return createElement("mpath", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<path>` element.
 * @param {import("../lib.js").SVGPathProps} props
 * @returns Recursive Web Element
 */
function Path(props) {
    return createElement("path", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<pattern>` element.
 * @param {import("../lib.js").SVGPatternProps} props
 * @returns Recursive Web Element
 */
function Pattern(props) {
    return createElement("pattern", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<polygon>` element.
 * @param {import("../lib.js").SVGPolygonProps} props
 * @returns Recursive Web Element
 */
function Polygon(props) {
    return createElement("polygon", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<polyline>` element.
 * @param {import("../lib.js").SVGPolylineProps} props
 * @returns Recursive Web Element
 */
function Polyline(props) {
    return createElement("polyline", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<radialgradient>` element.
 * @param {import("../lib.js").SVGRadialGradientProps} props
 * @returns Recursive Web Element
 */
function RadialGradient(props) {
    return createElement("radialgradient", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<rect>` element.
 * @param {import("../lib.js").SVGRectProps} props
 * @returns Recursive Web Element
 */
function Rect(props) {
    return createElement("rect", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<set>` element.
 * @param {import("../lib.js").SVGSetProps} props
 * @returns Recursive Web Element
 */
function Set(props) {
    return createElement("set", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<stop>` element.
 * @param {import("../lib.js").SVGStopProps} props
 * @returns Recursive Web Element
 */
function Stop(props) {
    return createElement("stop", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<svg>` element.
 * @param {import("../lib.js").SVGSvgProps} props
 * @returns Recursive Web Element
 */
function Svg(props) {
    return createElement("svg", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<switch>` element.
 * @param {import("../lib.js").SVGSwitchProps} props
 * @returns Recursive Web Element
 */
function Switch(props) {
    return createElement("switch", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<symbol>` element.
 * @param {import("../lib.js").SVGSymbolProps} props
 * @returns Recursive Web Element
 */
function Symbol(props) {
    return createElement("symbol", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<text>` element.
 * @param {import("../lib.js").SVGTextProps} props
 * @returns Recursive Web Element
 */
function Text(props) {
    return createElement("text", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<textpath>` element.
 * @param {import("../lib.js").SVGTextPathProps} props
 * @returns Recursive Web Element
 */
function TextPath(props) {
    return createElement("textpath", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<title>` element.
 * @param {import("../lib.js").SVGTitleProps} props
 * @returns Recursive Web Element
 */
function Title(props) {
    return createElement("title", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<tspan>` element.
 * @param {import("../lib.js").SVGTspanProps} props
 * @returns Recursive Web Element
 */
function Tspan(props) {
    return createElement("tspan", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<use>` element.
 * @param {import("../lib.js").SVGUseProps} props
 * @returns Recursive Web Element
 */
function Use(props) {
    return createElement("use", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
}
/**
 * Create `<view>` element.
 * @param {import("../lib.js").SVGViewProps} props
 * @returns Recursive Web Element
 */
function View(props) {
    return createElement("view", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });
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
