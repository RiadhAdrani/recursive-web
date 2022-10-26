/**
 *  ██████╗ ███████╗███╗   ██╗███████╗██████╗  █████╗ ████████╗███████╗██████╗
 * ██╔════╝ ██╔════╝████╗  ██║██╔════╝██╔══██╗██╔══██╗╚══██╔══╝██╔════╝██╔══██╗
 * ██║  ███╗█████╗  ██╔██╗ ██║█████╗  ██████╔╝███████║   ██║   █████╗  ██║  ██║
 * ██║   ██║██╔══╝  ██║╚██╗██║██╔══╝  ██╔══██╗██╔══██║   ██║   ██╔══╝  ██║  ██║
 * ╚██████╔╝███████╗██║ ╚████║███████╗██║  ██║██║  ██║   ██║   ███████╗██████╔╝
 *  ╚═════╝ ╚══════╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═════╝
 * ------------ Do not delete or modify the content of this file -------------
 */
import { BaseElement } from "@riadh-adrani/recursive/lib";
import { CommonAttributes, ElementChildren } from "../lib";
import { Events } from "../lib";
import { CssColor } from "../lib";
import { AttributeDeclarationOf } from "../lib";
import { SVGAttributes } from "../types/svgCommon";

/**
 * ## AParams
 * The ``<a>`` SVG element creates a hyperlink to other web pages, files, locations in the same page, email addresses, or any other URL. It is very similar to HTML's ``<a>`` element.
 * SVG's ``<a>`` element is a container, which means you can create a link around text (like in HTML) but also around any shape.
 */
export interface AParams
    extends CommonAttributes,
        Events<SVGAElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## href
     * The URL of a linked resource.
     */
    href: AttributeDeclarationOf<string>;
    /**
     * ## hrefLang
     * Specifies the language of the linked resource.
     */
    hrefLang: AttributeDeclarationOf<string>;
    /**
     * ## target
     * Specifies where to open the linked document (in the case of an ``<a>`` element) or where to display the response received (in the case of a ``<form>`` element)
     */
    target: AttributeDeclarationOf<"_self" | "_blank" | "_parent" | "_top">;
    /**
     * ## type
     * Defines the type of the element.
     */
    type: AttributeDeclarationOf<string>;
}
/**
 * ## A
 * The ``<a>`` SVG element creates a hyperlink to other web pages, files, locations in the same page, email addresses, or any other URL. It is very similar to HTML's ``<a>`` element.
 * SVG's ``<a>`` element is a container, which means you can create a link around text (like in HTML) but also around any shape.
 * @returns {BaseElement}
 */
export function A(params: AParams): BaseElement;
/**
 * ## AnimateParams
 * The SVG ``<animate>`` element provides a way to animate an attribute of an element over time.
 */
export interface AnimateParams
    extends CommonAttributes,
        Events<SVGAnimateElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## begin
     * The begin attribute defines when an animation should begin or when an element should be discarded.
     */
    begin: AttributeDeclarationOf<string>;
    /**
     * ## dur
     * The dur attribute indicates the simple duration of an animation.
     */
    dur: AttributeDeclarationOf<string>;
    /**
     * ## end
     * The end attribute defines an end value for the animation that can constrain the active duration.
     */
    end: AttributeDeclarationOf<string>;
    /**
     * ## min
     * Indicates the minimum value allowed.
     */
    min: AttributeDeclarationOf<string>;
    /**
     * ## max
     * Indicates the maximum value allowed.
     */
    max: AttributeDeclarationOf<string>;
    /**
     * ## restart
     */
    restart: AttributeDeclarationOf<string>;
    /**
     * ## repeatCount
     */
    repeatCount: AttributeDeclarationOf<string>;
    /**
     * ## fill
     * The fill attribute has two different meanings. For shapes and text it's a presentation attribute that defines the color (or any SVG paint servers like gradients or patterns) used to paint the element; for animation it defines the final state of the animation.
     */
    fill: AttributeDeclarationOf<string>;
    /**
     * ## calcMode
     * The calcMode attribute specifies the interpolation mode for the animation.
     */
    calcMode: AttributeDeclarationOf<string>;
    /**
     * ## values
     */
    values: AttributeDeclarationOf<string>;
    /**
     * ## keyTimes
     */
    keyTimes: AttributeDeclarationOf<string>;
    /**
     * ## keySplines
     */
    keySplines: AttributeDeclarationOf<string>;
    /**
     * ## from
     * The from attribute indicates the initial value of the attribute that will be modified during the animation.
     */
    from: AttributeDeclarationOf<string>;
    /**
     * ## to
     */
    to: AttributeDeclarationOf<string>;
    /**
     * ## by
     * The by attribute specifies a relative offset value for an attribute that will be modified during an animation.
     */
    by: AttributeDeclarationOf<string>;
    /**
     * ## attributeName
     * The attributeName attribute indicates the name of the CSS property or attribute of the target element that is going to be changed during an animation.
     */
    attributeName: AttributeDeclarationOf<string>;
    /**
     * ## additive
     * The additive attribute controls whether or not an animation is additive.
     */
    additive: AttributeDeclarationOf<"sum" | "replace">;
    /**
     * ## accumulate
     * The accumulate attribute controls whether or not an animation is cumulative.
     */
    accumulate: AttributeDeclarationOf<"sum" | "none">;
}
/**
 * ## Animate
 * The SVG ``<animate>`` element provides a way to animate an attribute of an element over time.
 * @returns {BaseElement}
 */
export function Animate(params: AnimateParams): BaseElement;
/**
 * ## AnimateMotionParams
 * The SVG ``<animateMotion>`` element provides a way to define how an element moves along a motion path.
 */
export interface AnimateMotionParams
    extends CommonAttributes,
        Events<SVGAnimateMotionElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## keyPoints
     */
    keyPoints: AttributeDeclarationOf<string>;
    /**
     * ## path
     */
    path: AttributeDeclarationOf<string>;
    /**
     * ## rotate
     */
    rotate: AttributeDeclarationOf<string>;
}
/**
 * ## AnimateMotion
 * The SVG ``<animateMotion>`` element provides a way to define how an element moves along a motion path.
 * @returns {BaseElement}
 */
export function AnimateMotion(params: AnimateMotionParams): BaseElement;
/**
 * ## AnimateTransformParams
 * The animateTransform element animates a transformation attribute on its target element, thereby allowing animations to control translation, scaling, rotation, and/or skewing.
 */
export interface AnimateTransformParams
    extends CommonAttributes,
        Events<SVGAnimateTransformElement>,
        SVGAttributes,
        ElementChildren {}
/**
 * ## AnimateTransform
 * The animateTransform element animates a transformation attribute on its target element, thereby allowing animations to control translation, scaling, rotation, and/or skewing.
 * @returns {BaseElement}
 */
export function AnimateTransform(params: AnimateTransformParams): BaseElement;
/**
 * ## CircleParams
 * The ``<circle>`` SVG element is an SVG basic shape, used to draw circles based on a center point and a radius.
 */
export interface CircleParams
    extends CommonAttributes,
        Events<SVGCircleElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## cx
     * The cx attribute define the x-axis coordinate of a center point.
     */
    cx: AttributeDeclarationOf<string>;
    /**
     * ## cy
     * The cy attribute define the y-axis coordinate of a center point.
     */
    cy: AttributeDeclarationOf<string>;
    /**
     * ## r
     */
    r: AttributeDeclarationOf<string>;
    /**
     * ## pathLength
     */
    pathLength: AttributeDeclarationOf<string>;
}
/**
 * ## Circle
 * The ``<circle>`` SVG element is an SVG basic shape, used to draw circles based on a center point and a radius.
 * @returns {BaseElement}
 */
export function Circle(params: CircleParams): BaseElement;
/**
 * ## ClipPathParams
 * The ``<clipPath>`` SVG element defines a clipping path, to be used by the clip-path property.
 * A clipping path restricts the region to which paint can be applied. Conceptually, parts of the drawing that lie outside of the region bounded by the clipping path are not drawn.
 */
export interface ClipPathParams
    extends CommonAttributes,
        Events<SVGClipPathElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## clipPathUnits
     * The clipPathUnits attribute indicates which coordinate system to use for the contents of the ``<clipPath>`` element.
     */
    clipPathUnits: AttributeDeclarationOf<
        "userSpaceOnUse" | "objectBoundingBox"
    >;
}
/**
 * ## ClipPath
 * The ``<clipPath>`` SVG element defines a clipping path, to be used by the clip-path property.
 * A clipping path restricts the region to which paint can be applied. Conceptually, parts of the drawing that lie outside of the region bounded by the clipping path are not drawn.
 * @returns {BaseElement}
 */
export function ClipPath(params: ClipPathParams): BaseElement;
/**
 * ## DefsParams
 * The ``<defs>`` element is used to store graphical objects that will be used at a later time. Objects created inside a ``<defs>`` element are not rendered directly. To display them you have to reference them (with a ``<use>`` element for example).
 * Graphical objects can be referenced from anywhere, however, defining these objects inside of a ``<defs>`` element promotes understandability of the SVG content and is beneficial to the overall accessibility of the document.
 */
export interface DefsParams
    extends CommonAttributes,
        Events<SVGDefsElement>,
        SVGAttributes,
        ElementChildren {}
/**
 * ## Defs
 * The ``<defs>`` element is used to store graphical objects that will be used at a later time. Objects created inside a ``<defs>`` element are not rendered directly. To display them you have to reference them (with a ``<use>`` element for example).
 * Graphical objects can be referenced from anywhere, however, defining these objects inside of a ``<defs>`` element promotes understandability of the SVG content and is beneficial to the overall accessibility of the document.
 * @returns {BaseElement}
 */
export function Defs(params: DefsParams): BaseElement;
/**
 * ## DescParams
 * The ``<desc>`` element provides an accessible, long-text description of any SVG container element or graphics element.
 * Text in a ``<desc>`` element is not rendered as part of the graphic. If the element can be described by visible text, it is possible to reference that text with the aria-describedby attribute. If aria-describedby is used, it will take precedence over ``<desc>``.
 * The hidden text of a ``<desc>`` element can also be concatenated with the visible text of other elements using multiple IDs in an aria-describedby value. In that case, the <desc> element must provide an ID for reference.
 */
export interface DescParams
    extends CommonAttributes,
        Events<SVGDescElement>,
        SVGAttributes,
        ElementChildren {}
/**
 * ## Desc
 * The ``<desc>`` element provides an accessible, long-text description of any SVG container element or graphics element.
 * Text in a ``<desc>`` element is not rendered as part of the graphic. If the element can be described by visible text, it is possible to reference that text with the aria-describedby attribute. If aria-describedby is used, it will take precedence over ``<desc>``.
 * The hidden text of a ``<desc>`` element can also be concatenated with the visible text of other elements using multiple IDs in an aria-describedby value. In that case, the <desc> element must provide an ID for reference.
 * @returns {BaseElement}
 */
export function Desc(params: DescParams): BaseElement;
/**
 * ## DiscardParams
 * The ``<discard>`` SVG element allows authors to specify the time at which particular elements are to be discarded, thereby reducing the resources required by an SVG user agent. This is particularly useful to help SVG viewers conserve memory while displaying long-running documents.
 * The ``<discard>`` element may occur wherever the <animate> element may.
 */
export interface DiscardParams
    extends CommonAttributes,
        Events<SVGElement>,
        SVGAttributes,
        ElementChildren {}
/**
 * ## Discard
 * The ``<discard>`` SVG element allows authors to specify the time at which particular elements are to be discarded, thereby reducing the resources required by an SVG user agent. This is particularly useful to help SVG viewers conserve memory while displaying long-running documents.
 * The ``<discard>`` element may occur wherever the <animate> element may.
 * @returns {BaseElement}
 */
export function Discard(params: DiscardParams): BaseElement;
/**
 * ## EllipseParams
 * The ``<ellipse>`` element is an SVG basic shape, used to create ellipses based on a center coordinate, and both their x and y radius.
 */
export interface EllipseParams
    extends CommonAttributes,
        Events<SVGEllipseElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## cx
     * The cx attribute define the x-axis coordinate of a center point.
     */
    cx: AttributeDeclarationOf<string>;
    /**
     * ## cy
     * The cy attribute define the y-axis coordinate of a center point.
     */
    cy: AttributeDeclarationOf<string>;
    /**
     * ## rx
     */
    rx: AttributeDeclarationOf<string>;
    /**
     * ## ry
     */
    ry: AttributeDeclarationOf<string>;
    /**
     * ## pathLength
     */
    pathLength: AttributeDeclarationOf<string>;
}
/**
 * ## Ellipse
 * The ``<ellipse>`` element is an SVG basic shape, used to create ellipses based on a center coordinate, and both their x and y radius.
 * @returns {BaseElement}
 */
export function Ellipse(params: EllipseParams): BaseElement;
/**
 * ## FeBlendParams
 * The ``<feBlend>`` SVG filter primitive composes two objects together ruled by a certain blending mode. This is similar to what is known from image editing software when blending two layers. The mode is defined by the mode attribute.
 */
export interface FeBlendParams
    extends CommonAttributes,
        Events<SVGFEBlendElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## in
     */
    in: AttributeDeclarationOf<string>;
    /**
     * ## in2
     */
    in2: AttributeDeclarationOf<string>;
    /**
     * ## mode
     */
    mode: AttributeDeclarationOf<string>;
}
/**
 * ## FeBlend
 * The ``<feBlend>`` SVG filter primitive composes two objects together ruled by a certain blending mode. This is similar to what is known from image editing software when blending two layers. The mode is defined by the mode attribute.
 * @returns {BaseElement}
 */
export function FeBlend(params: FeBlendParams): BaseElement;
/**
 * ## FeColorMatrixParams
 * The ``<feColorMatrix>`` SVG filter element changes colors based on a transformation matrix. Every pixel's color value [R,G,B,A] is matrix multiplied by a 5 by 5 color matrix to create new color [R',G',B',A'].
 */
export interface FeColorMatrixParams
    extends CommonAttributes,
        Events<SVGFEColorMatrixElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## in
     */
    in: AttributeDeclarationOf<string>;
    /**
     * ## type
     * Defines the type of the element.
     */
    type: AttributeDeclarationOf<string>;
    /**
     * ## values
     */
    values: AttributeDeclarationOf<string>;
}
/**
 * ## FeColorMatrix
 * The ``<feColorMatrix>`` SVG filter element changes colors based on a transformation matrix. Every pixel's color value [R,G,B,A] is matrix multiplied by a 5 by 5 color matrix to create new color [R',G',B',A'].
 * @returns {BaseElement}
 */
export function FeColorMatrix(params: FeColorMatrixParams): BaseElement;
/**
 * ## FeComponentTransferParams
 * The ``<feComponentTransfer>`` SVG filter primitive performs color-component-wise remapping of data for each pixel. It allows operations like brightness adjustment, contrast adjustment, color balance or thresholding.
 * The calculations are performed on non-premultiplied color values. The colors are modified by changing each channel (R, G, B, and A) to the result of what the children ``<feFuncR>``, ``<feFuncB>``, ``<feFuncG>``, and ``<feFuncA>`` return.
 */
export interface FeComponentTransferParams
    extends CommonAttributes,
        Events<SVGFEComponentTransferElement>,
        SVGAttributes,
        ElementChildren {}
/**
 * ## FeComponentTransfer
 * The ``<feComponentTransfer>`` SVG filter primitive performs color-component-wise remapping of data for each pixel. It allows operations like brightness adjustment, contrast adjustment, color balance or thresholding.
 * The calculations are performed on non-premultiplied color values. The colors are modified by changing each channel (R, G, B, and A) to the result of what the children ``<feFuncR>``, ``<feFuncB>``, ``<feFuncG>``, and ``<feFuncA>`` return.
 * @returns {BaseElement}
 */
export function FeComponentTransfer(
    params: FeComponentTransferParams
): BaseElement;
/**
 * ## FeCompositeParams
 * The ``<feComposite>`` SVG filter primitive performs the combination of two input images pixel-wise in image space using one of the Porter-Duff compositing operations: over, in, atop, out, xor, lighter, or arithmetic.
 */
export interface FeCompositeParams
    extends CommonAttributes,
        Events<SVGFECompositeElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## in
     */
    in: AttributeDeclarationOf<string>;
}
/**
 * ## FeComposite
 * The ``<feComposite>`` SVG filter primitive performs the combination of two input images pixel-wise in image space using one of the Porter-Duff compositing operations: over, in, atop, out, xor, lighter, or arithmetic.
 * @returns {BaseElement}
 */
export function FeComposite(params: FeCompositeParams): BaseElement;
/**
 * ## FeConvolveMatrixParams
 * The ``<feConvolveMatrix>`` SVG filter primitive applies a matrix convolution filter effect. A convolution combines pixels in the input image with neighboring pixels to produce a resulting image. A wide variety of imaging operations can be achieved through convolutions, including blurring, edge detection, sharpening, embossing and beveling.
 */
export interface FeConvolveMatrixParams
    extends CommonAttributes,
        Events<SVGFEConvolveMatrixElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## in
     */
    in: AttributeDeclarationOf<string>;
    /**
     * ## order
     */
    order: AttributeDeclarationOf<string>;
    /**
     * ## kernelMatrix
     */
    kernelMatrix: AttributeDeclarationOf<string>;
    /**
     * ## bias
     * The bias attribute shifts the range of the filter. After applying the kernelMatrix of the ``<feConvolveMatrix>`` element to the input image to yield a number and applied the divisor attribute, the bias attribute is added to each component. This allows representation of values that would otherwise be clamped to 0 or 1.
     */
    bias: AttributeDeclarationOf<string>;
    /**
     * ## targetX
     */
    targetX: AttributeDeclarationOf<string>;
    /**
     * ## targetY
     */
    targetY: AttributeDeclarationOf<string>;
    /**
     * ## edgeMode
     * The edgeMode attribute determines how to extend the input image as necessary with color values so that the matrix operations can be applied when the kernel is positioned at or near the edge of the input image.
     */
    edgeMode: AttributeDeclarationOf<string>;
    /**
     * ## kernelUnitLength
     */
    kernelUnitLength: AttributeDeclarationOf<string>;
    /**
     * ## preserveAlpha
     */
    preserveAlpha: AttributeDeclarationOf<string>;
}
/**
 * ## FeConvolveMatrix
 * The ``<feConvolveMatrix>`` SVG filter primitive applies a matrix convolution filter effect. A convolution combines pixels in the input image with neighboring pixels to produce a resulting image. A wide variety of imaging operations can be achieved through convolutions, including blurring, edge detection, sharpening, embossing and beveling.
 * @returns {BaseElement}
 */
export function FeConvolveMatrix(params: FeConvolveMatrixParams): BaseElement;
/**
 * ## FeDiffuseLightingParams
 * The ``<feDiffuseLighting>`` SVG filter primitive lights an image using the alpha channel as a bump map. The resulting image, which is an RGBA opaque image, depends on the light color, light position and surface geometry of the input bump map.
 */
export interface FeDiffuseLightingParams
    extends CommonAttributes,
        Events<SVGFEDiffuseLightingElement>,
        SVGAttributes,
        ElementChildren {}
/**
 * ## FeDiffuseLighting
 * The ``<feDiffuseLighting>`` SVG filter primitive lights an image using the alpha channel as a bump map. The resulting image, which is an RGBA opaque image, depends on the light color, light position and surface geometry of the input bump map.
 * @returns {BaseElement}
 */
export function FeDiffuseLighting(params: FeDiffuseLightingParams): BaseElement;
/**
 * ## FeDisplacementMapParams
 * The ``<feDisplacementMap>`` SVG filter primitive uses the pixel values from the image from in2 to spatially displace the image from in.
 * The formula for the transformation looks like this:
 *
 * ``P'(x,y) ← P(x + scale * (XC(x,y) - 0.5), y + scale * (YC(x,y) - 0.5))``
 * where P(x,y) is the input image, in, and P'(x,y) is the destination. XC(x,y) and YC(x,y) are the component values of the channel designated by xChannelSelector and yChannelSelector.
 */
export interface FeDisplacementMapParams
    extends CommonAttributes,
        Events<SVGFEDisplacementMapElement>,
        SVGAttributes,
        ElementChildren {}
/**
 * ## FeDisplacementMap
 * The ``<feDisplacementMap>`` SVG filter primitive uses the pixel values from the image from in2 to spatially displace the image from in.
 * The formula for the transformation looks like this:
 *
 * ``P'(x,y) ← P(x + scale * (XC(x,y) - 0.5), y + scale * (YC(x,y) - 0.5))``
 * where P(x,y) is the input image, in, and P'(x,y) is the destination. XC(x,y) and YC(x,y) are the component values of the channel designated by xChannelSelector and yChannelSelector.
 * @returns {BaseElement}
 */
export function FeDisplacementMap(params: FeDisplacementMapParams): BaseElement;
/**
 * ## FeDistantLightParams
 * The ``<feDistantLight>`` filter primitive defines a distant light source that can be used within a lighting filter primitive: ``<feDiffuseLighting>`` or ``<feSpecularLighting>``.
 */
export interface FeDistantLightParams
    extends CommonAttributes,
        Events<SVGFEDistantLightElement>,
        SVGAttributes,
        ElementChildren {}
/**
 * ## FeDistantLight
 * The ``<feDistantLight>`` filter primitive defines a distant light source that can be used within a lighting filter primitive: ``<feDiffuseLighting>`` or ``<feSpecularLighting>``.
 * @returns {BaseElement}
 */
export function FeDistantLight(params: FeDistantLightParams): BaseElement;
/**
 * ## FeDropShadowParams
 * The SVG ``<feDropShadow>`` filter primitive creates a drop shadow of the input image. It can only be used inside a ``<filter>`` element.
 */
export interface FeDropShadowParams
    extends CommonAttributes,
        Events<SVGFEDropShadowElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## id
     * Often used with CSS to style a specific element. The value of this attribute must be unique.
     */
    id: AttributeDeclarationOf<string>;
    /**
     * ## surfaceScale
     */
    surfaceScale: AttributeDeclarationOf<string>;
    /**
     * ## diffuseConstant
     * The diffuseConstant attribute represents the kd value in the Phong lighting model. In SVG, this can be any non-negative number.
     */
    diffuseConstant: AttributeDeclarationOf<string>;
    /**
     * ## kernelUnitLength
     */
    kernelUnitLength: AttributeDeclarationOf<string>;
}
/**
 * ## FeDropShadow
 * The SVG ``<feDropShadow>`` filter primitive creates a drop shadow of the input image. It can only be used inside a ``<filter>`` element.
 * @returns {BaseElement}
 */
export function FeDropShadow(params: FeDropShadowParams): BaseElement;
/**
 * ## FeFloodParams
 * The ``<feFlood>`` SVG filter primitive fills the filter subregion with the color and opacity defined by flood-color and flood-opacity.
 */
export interface FeFloodParams
    extends CommonAttributes,
        Events<SVGFEFloodElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## floodColor
     * The flood-color attribute indicates what color to use to flood the current filter primitive subregion.
     */
    floodColor: AttributeDeclarationOf<string>;
    /**
     * ## floodOpacity
     * The flood-opacity attribute indicates the opacity value to use across the current filter primitive subregion.
     */
    floodOpacity: AttributeDeclarationOf<string>;
}
/**
 * ## FeFlood
 * The ``<feFlood>`` SVG filter primitive fills the filter subregion with the color and opacity defined by flood-color and flood-opacity.
 * @returns {BaseElement}
 */
export function FeFlood(params: FeFloodParams): BaseElement;
/**
 * ## FeFuncAParams
 * The ``<feFuncA>`` SVG filter primitive defines the transfer function for the alpha component of the input graphic of its parent ``<feComponentTransfer>`` element.
 */
export interface FeFuncAParams
    extends CommonAttributes,
        Events<SVGFEFuncAElement>,
        SVGAttributes,
        ElementChildren {}
/**
 * ## FeFuncA
 * The ``<feFuncA>`` SVG filter primitive defines the transfer function for the alpha component of the input graphic of its parent ``<feComponentTransfer>`` element.
 * @returns {BaseElement}
 */
export function FeFuncA(params: FeFuncAParams): BaseElement;
/**
 * ## FeFuncBParams
 * The ``<feFuncB>`` SVG filter primitive defines the transfer function for the blue component of the input graphic of its parent ``<feComponentTransfer>`` element.
 */
export interface FeFuncBParams
    extends CommonAttributes,
        Events<SVGFEFuncBElement>,
        SVGAttributes,
        ElementChildren {}
/**
 * ## FeFuncB
 * The ``<feFuncB>`` SVG filter primitive defines the transfer function for the blue component of the input graphic of its parent ``<feComponentTransfer>`` element.
 * @returns {BaseElement}
 */
export function FeFuncB(params: FeFuncBParams): BaseElement;
/**
 * ## FeFuncGParams
 * The ``<feFuncG>`` SVG filter primitive defines the transfer function for the green component of the input graphic of its parent ``<feComponentTransfer>`` element.
 */
export interface FeFuncGParams
    extends CommonAttributes,
        Events<SVGFEFuncGElement>,
        SVGAttributes,
        ElementChildren {}
/**
 * ## FeFuncG
 * The ``<feFuncG>`` SVG filter primitive defines the transfer function for the green component of the input graphic of its parent ``<feComponentTransfer>`` element.
 * @returns {BaseElement}
 */
export function FeFuncG(params: FeFuncGParams): BaseElement;
/**
 * ## FeFuncRParams
 * The ``<feFuncR>`` SVG filter primitive defines the transfer function for the red component of the input graphic of its parent ``<feComponentTransfer>`` element.
 */
export interface FeFuncRParams
    extends CommonAttributes,
        Events<SVGFEFuncRElement>,
        SVGAttributes,
        ElementChildren {}
/**
 * ## FeFuncR
 * The ``<feFuncR>`` SVG filter primitive defines the transfer function for the red component of the input graphic of its parent ``<feComponentTransfer>`` element.
 * @returns {BaseElement}
 */
export function FeFuncR(params: FeFuncRParams): BaseElement;
/**
 * ## FeGaussianBlurParams
 * The ``<feGaussianBlur>`` SVG filter primitive blurs the input image by the amount specified in stdDeviation, which defines the bell-curve.
 */
export interface FeGaussianBlurParams
    extends CommonAttributes,
        Events<SVGFEGaussianBlurElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## in
     */
    in: AttributeDeclarationOf<string>;
    /**
     * ## stdDeviation
     */
    stdDeviation: AttributeDeclarationOf<string>;
    /**
     * ## edgeMode
     * The edgeMode attribute determines how to extend the input image as necessary with color values so that the matrix operations can be applied when the kernel is positioned at or near the edge of the input image.
     */
    edgeMode: AttributeDeclarationOf<string>;
}
/**
 * ## FeGaussianBlur
 * The ``<feGaussianBlur>`` SVG filter primitive blurs the input image by the amount specified in stdDeviation, which defines the bell-curve.
 * @returns {BaseElement}
 */
export function FeGaussianBlur(params: FeGaussianBlurParams): BaseElement;
/**
 * ## FeImageParams
 * The ``<feImage>`` SVG filter primitive fetches image data from an external source and provides the pixel data as output (meaning if the external source is an SVG image, it is rasterized.)
 */
export interface FeImageParams
    extends CommonAttributes,
        Events<SVGFEImageElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## preserveAspectRatio
     */
    preserveAspectRatio: AttributeDeclarationOf<string>;
    /**
     * ## xLinkHref
     */
    xLinkHref: AttributeDeclarationOf<string>;
}
/**
 * ## FeImage
 * The ``<feImage>`` SVG filter primitive fetches image data from an external source and provides the pixel data as output (meaning if the external source is an SVG image, it is rasterized.)
 * @returns {BaseElement}
 */
export function FeImage(params: FeImageParams): BaseElement;
/**
 * ## FeMergeParams
 * The ``<feMerge>`` SVG element allows filter effects to be applied concurrently instead of sequentially. This is achieved by other filters storing their output via the result attribute and then accessing it in a ``<feMergeNode>`` child.
 */
export interface FeMergeParams
    extends CommonAttributes,
        Events<SVGFEMergeElement>,
        SVGAttributes,
        ElementChildren {}
/**
 * ## FeMerge
 * The ``<feMerge>`` SVG element allows filter effects to be applied concurrently instead of sequentially. This is achieved by other filters storing their output via the result attribute and then accessing it in a ``<feMergeNode>`` child.
 * @returns {BaseElement}
 */
export function FeMerge(params: FeMergeParams): BaseElement;
/**
 * ## FeMergeNodeParams
 * The feMergeNode takes the result of another filter to be processed by its parent ``<feMerge>``.
 */
export interface FeMergeNodeParams
    extends CommonAttributes,
        Events<SVGFEMergeNodeElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## in
     */
    in: AttributeDeclarationOf<string>;
}
/**
 * ## FeMergeNode
 * The feMergeNode takes the result of another filter to be processed by its parent ``<feMerge>``.
 * @returns {BaseElement}
 */
export function FeMergeNode(params: FeMergeNodeParams): BaseElement;
/**
 * ## FeMorphologyParams
 * The ``<feMorphology>`` SVG filter primitive is used to erode or dilate the input image. Its usefulness lies especially in fattening or thinning effects.
 */
export interface FeMorphologyParams
    extends CommonAttributes,
        Events<SVGFEMorphologyElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## in
     */
    in: AttributeDeclarationOf<string>;
    /**
     * ## operator
     */
    operator: AttributeDeclarationOf<string>;
    /**
     * ## radius
     */
    radius: AttributeDeclarationOf<string>;
}
/**
 * ## FeMorphology
 * The ``<feMorphology>`` SVG filter primitive is used to erode or dilate the input image. Its usefulness lies especially in fattening or thinning effects.
 * @returns {BaseElement}
 */
export function FeMorphology(params: FeMorphologyParams): BaseElement;
/**
 * ## FeOffsetParams
 * The ``<feOffset>`` SVG filter primitive allows to offset the input image. The input image as a whole is offset by the values specified in the dx and dy attributes.
 */
export interface FeOffsetParams
    extends CommonAttributes,
        Events<SVGFEOffsetElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## in
     */
    in: AttributeDeclarationOf<string>;
    /**
     * ## dx
     * The dx attribute indicates a shift along the x-axis on the position of an element or its content.
     */
    dx: AttributeDeclarationOf<string>;
    /**
     * ## dy
     * The dy attribute indicates a shift along the y-axis on the position of an element or its content.
     */
    dy: AttributeDeclarationOf<string>;
}
/**
 * ## FeOffset
 * The ``<feOffset>`` SVG filter primitive allows to offset the input image. The input image as a whole is offset by the values specified in the dx and dy attributes.
 * @returns {BaseElement}
 */
export function FeOffset(params: FeOffsetParams): BaseElement;
/**
 * ## FePointLightParams
 * The ``<fePointLight>`` filter primitive defines a light source which allows to create a point light effect. It that can be used within a lighting filter primitive: ``<feDiffuseLighting>`` or ``<feSpecularLighting>``.
 */
export interface FePointLightParams
    extends CommonAttributes,
        Events<SVGFEPointLightElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## x
     */
    x: AttributeDeclarationOf<string>;
    /**
     * ## y
     */
    y: AttributeDeclarationOf<string>;
    /**
     * ## z
     */
    z: AttributeDeclarationOf<string>;
}
/**
 * ## FePointLight
 * The ``<fePointLight>`` filter primitive defines a light source which allows to create a point light effect. It that can be used within a lighting filter primitive: ``<feDiffuseLighting>`` or ``<feSpecularLighting>``.
 * @returns {BaseElement}
 */
export function FePointLight(params: FePointLightParams): BaseElement;
/**
 * ## FeSpecularLightingParams
 * The ``<feSpecularLighting>`` SVG filter primitive lights a source graphic using the alpha channel as a bump map. The resulting image is an RGBA image based on the light color. The lighting calculation follows the standard specular component of the Phong lighting model. The resulting image depends on the light color, light position and surface geometry of the input bump map. The result of the lighting calculation is added. The filter primitive assumes that the viewer is at infinity in the z direction.
 */
export interface FeSpecularLightingParams
    extends CommonAttributes,
        Events<SVGFESpecularLightingElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## in
     */
    in: AttributeDeclarationOf<string>;
    /**
     * ## surfaceScale
     */
    surfaceScale: AttributeDeclarationOf<string>;
    /**
     * ## specularConstant
     */
    specularConstant: AttributeDeclarationOf<string>;
    /**
     * ## specularExponent
     */
    specularExponent: AttributeDeclarationOf<string>;
    /**
     * ## kernelUnitLength
     */
    kernelUnitLength: AttributeDeclarationOf<string>;
}
/**
 * ## FeSpecularLighting
 * The ``<feSpecularLighting>`` SVG filter primitive lights a source graphic using the alpha channel as a bump map. The resulting image is an RGBA image based on the light color. The lighting calculation follows the standard specular component of the Phong lighting model. The resulting image depends on the light color, light position and surface geometry of the input bump map. The result of the lighting calculation is added. The filter primitive assumes that the viewer is at infinity in the z direction.
 * @returns {BaseElement}
 */
export function FeSpecularLighting(
    params: FeSpecularLightingParams
): BaseElement;
/**
 * ## FeSpotLightParams
 * The ``<feSpotLight>`` SVG filter primitive defines a light source that can be used to create a spotlight effect. It is used within a lighting filter primitive: <feDiffuseLighting> or ``<feSpecularLighting>``.
 */
export interface FeSpotLightParams
    extends CommonAttributes,
        Events<SVGFESpotLightElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## x
     */
    x: AttributeDeclarationOf<string>;
    /**
     * ## y
     */
    y: AttributeDeclarationOf<string>;
    /**
     * ## z
     */
    z: AttributeDeclarationOf<string>;
    /**
     * ## specularExponent
     */
    specularExponent: AttributeDeclarationOf<string>;
    /**
     * ## limitingConeAngle
     */
    limitingConeAngle: AttributeDeclarationOf<string>;
}
/**
 * ## FeSpotLight
 * The ``<feSpotLight>`` SVG filter primitive defines a light source that can be used to create a spotlight effect. It is used within a lighting filter primitive: <feDiffuseLighting> or ``<feSpecularLighting>``.
 * @returns {BaseElement}
 */
export function FeSpotLight(params: FeSpotLightParams): BaseElement;
/**
 * ## FeTileParams
 * The ``<feTile>`` SVG filter primitive allows to fill a target rectangle with a repeated, tiled pattern of an input image. The effect is similar to the one of a ``<pattern>``.
 */
export interface FeTileParams
    extends CommonAttributes,
        Events<SVGFETileElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## in
     */
    in: AttributeDeclarationOf<string>;
}
/**
 * ## FeTile
 * The ``<feTile>`` SVG filter primitive allows to fill a target rectangle with a repeated, tiled pattern of an input image. The effect is similar to the one of a ``<pattern>``.
 * @returns {BaseElement}
 */
export function FeTile(params: FeTileParams): BaseElement;
/**
 * ## FeTurbulenceParams
 * The ``<feTurbulence>`` SVG filter primitive creates an image using the Perlin turbulence function. It allows the synthesis of artificial textures like clouds or marble. The resulting image will fill the entire filter primitive subregion.
 */
export interface FeTurbulenceParams
    extends CommonAttributes,
        Events<SVGFETurbulenceElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## baseFrequency
     * The baseFrequency attribute represents the base frequency parameter for the noise function of the ``<feTurbulence>`` filter primitive.
     */
    baseFrequency: AttributeDeclarationOf<string>;
    /**
     * ## numOctaves
     */
    numOctaves: AttributeDeclarationOf<string>;
    /**
     * ## seed
     */
    seed: AttributeDeclarationOf<string>;
    /**
     * ## stitchTiles
     */
    stitchTiles: AttributeDeclarationOf<string>;
    /**
     * ## type
     * Defines the type of the element.
     */
    type: AttributeDeclarationOf<string>;
}
/**
 * ## FeTurbulence
 * The ``<feTurbulence>`` SVG filter primitive creates an image using the Perlin turbulence function. It allows the synthesis of artificial textures like clouds or marble. The resulting image will fill the entire filter primitive subregion.
 * @returns {BaseElement}
 */
export function FeTurbulence(params: FeTurbulenceParams): BaseElement;
/**
 * ## FilterParams
 * The ``<filter>`` SVG element defines a custom filter effect by grouping atomic filter primitives. It is never rendered itself, but must be used by the filter attribute on SVG elements, or the filter CSS property for SVG/HTML elements.
 */
export interface FilterParams
    extends CommonAttributes,
        Events<SVGFilterElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## x
     */
    x: AttributeDeclarationOf<string>;
    /**
     * ## y
     */
    y: AttributeDeclarationOf<string>;
    /**
     * ## width
     * For the elements listed here, this establishes the element's width.
     */
    width: AttributeDeclarationOf<string>;
    /**
     * ## height
     * Specifies the height of elements listed here. For all other elements, use the CSS height property.
     */
    height: AttributeDeclarationOf<string>;
    /**
     * ## filterRes
     * The filterRes attribute indicates the width and height of the intermediate images in pixels of a filter primitive.
     * @deprecated
     */
    filterRes: AttributeDeclarationOf<string>;
    /**
     * ## filterUnits
     * The filterUnits attribute defines the coordinate system for the attributes x, y, width and height.
     */
    filterUnits: AttributeDeclarationOf<string>;
    /**
     * ## primitiveUnits
     */
    primitiveUnits: AttributeDeclarationOf<string>;
    /**
     * ## xLinkHref
     */
    xLinkHref: AttributeDeclarationOf<string>;
}
/**
 * ## Filter
 * The ``<filter>`` SVG element defines a custom filter effect by grouping atomic filter primitives. It is never rendered itself, but must be used by the filter attribute on SVG elements, or the filter CSS property for SVG/HTML elements.
 * @returns {BaseElement}
 */
export function Filter(params: FilterParams): BaseElement;
/**
 * ## ForeignObjectParams
 * The ``<foreignObject>`` SVG element includes elements from a different XML namespace. In the context of a browser, it is most likely (X)HTML.
 */
export interface ForeignObjectParams
    extends CommonAttributes,
        Events<SVGForeignObjectElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## height
     * Specifies the height of elements listed here. For all other elements, use the CSS height property.
     */
    height: AttributeDeclarationOf<string>;
    /**
     * ## width
     * For the elements listed here, this establishes the element's width.
     */
    width: AttributeDeclarationOf<string>;
    /**
     * ## x
     */
    x: AttributeDeclarationOf<string>;
    /**
     * ## y
     */
    y: AttributeDeclarationOf<string>;
}
/**
 * ## ForeignObject
 * The ``<foreignObject>`` SVG element includes elements from a different XML namespace. In the context of a browser, it is most likely (X)HTML.
 * @returns {BaseElement}
 */
export function ForeignObject(params: ForeignObjectParams): BaseElement;
/**
 * ## GParams
 * The ``<g>`` SVG element is a container used to group other SVG elements.
 * Transformations applied to the ``<g>`` element are performed on its child elements, and its attributes are inherited by its children. It can also group multiple elements to be referenced later with the ``<use>`` element.
 */
export interface GParams
    extends CommonAttributes,
        Events<SVGGElement>,
        SVGAttributes,
        ElementChildren {}
/**
 * ## G
 * The ``<g>`` SVG element is a container used to group other SVG elements.
 * Transformations applied to the ``<g>`` element are performed on its child elements, and its attributes are inherited by its children. It can also group multiple elements to be referenced later with the ``<use>`` element.
 * @returns {BaseElement}
 */
export function G(params: GParams): BaseElement;
/**
 * ## HatchParams
 */
export interface HatchParams
    extends CommonAttributes,
        Events<SVGElement>,
        SVGAttributes,
        ElementChildren {}
/**
 * ## Hatch
 * @returns {BaseElement}
 */
export function Hatch(params: HatchParams): BaseElement;
/**
 * ## HatchpathParams
 */
export interface HatchpathParams
    extends CommonAttributes,
        Events<SVGElement>,
        SVGAttributes,
        ElementChildren {}
/**
 * ## Hatchpath
 * @returns {BaseElement}
 */
export function Hatchpath(params: HatchpathParams): BaseElement;
/**
 * ## ImageParams
 * The ``<image>`` SVG element includes images inside SVG documents. It can display raster image files or other SVG files.
 * The only image formats SVG software must support are JPEG, PNG, and other SVG files. Animated GIF behavior is undefined.
 * SVG files displayed with ``<image>`` are treated as an image: external resources aren't loaded, :visited styles aren't applied, and they cannot be interactive. To include dynamic SVG elements, try ``<use>`` with an external URL. To include SVG files and run scripts inside them, try ``<object>`` inside of ``<foreignObject>``.
 */
export interface ImageParams
    extends CommonAttributes,
        Events<SVGImageElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## x
     */
    x: AttributeDeclarationOf<string>;
    /**
     * ## y
     */
    y: AttributeDeclarationOf<string>;
    /**
     * ## width
     * For the elements listed here, this establishes the element's width.
     */
    width: AttributeDeclarationOf<string>;
    /**
     * ## height
     * Specifies the height of elements listed here. For all other elements, use the CSS height property.
     */
    height: AttributeDeclarationOf<string>;
    /**
     * ## href
     * The URL of a linked resource.
     */
    href: AttributeDeclarationOf<string>;
    /**
     * ## xLinkHref
     */
    xLinkHref: AttributeDeclarationOf<string>;
    /**
     * ## preserveAspectRatio
     */
    preserveAspectRatio: AttributeDeclarationOf<string>;
    /**
     * ## crossOrigin
     * How the element handles cross-origin requests
     */
    crossOrigin: AttributeDeclarationOf<"use-credentials" | "anonymous">;
}
/**
 * ## Image
 * The ``<image>`` SVG element includes images inside SVG documents. It can display raster image files or other SVG files.
 * The only image formats SVG software must support are JPEG, PNG, and other SVG files. Animated GIF behavior is undefined.
 * SVG files displayed with ``<image>`` are treated as an image: external resources aren't loaded, :visited styles aren't applied, and they cannot be interactive. To include dynamic SVG elements, try ``<use>`` with an external URL. To include SVG files and run scripts inside them, try ``<object>`` inside of ``<foreignObject>``.
 * @returns {BaseElement}
 */
export function Image(params: ImageParams): BaseElement;
/**
 * ## LineParams
 * The ``<line>`` element is an SVG basic shape used to create a line connecting two points.
 */
export interface LineParams
    extends CommonAttributes,
        Events<SVGLineElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## x1
     */
    x1: AttributeDeclarationOf<string>;
    /**
     * ## x2
     */
    x2: AttributeDeclarationOf<string>;
    /**
     * ## y1
     */
    y1: AttributeDeclarationOf<string>;
    /**
     * ## y2
     */
    y2: AttributeDeclarationOf<string>;
    /**
     * ## pathLength
     */
    pathLength: AttributeDeclarationOf<string>;
}
/**
 * ## Line
 * The ``<line>`` element is an SVG basic shape used to create a line connecting two points.
 * @returns {BaseElement}
 */
export function Line(params: LineParams): BaseElement;
/**
 * ## LinearGradientParams
 * The ``<linearGradient>`` element lets authors define linear gradients to apply to other SVG elements.
 */
export interface LinearGradientParams
    extends CommonAttributes,
        Events<SVGLinearGradientElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## gradientUnits
     */
    gradientUnits: AttributeDeclarationOf<string>;
    /**
     * ## gradientTransform
     */
    gradientTransform: AttributeDeclarationOf<string>;
    /**
     * ## href
     * The URL of a linked resource.
     */
    href: AttributeDeclarationOf<string>;
    /**
     * ## spreadMethod
     */
    spreadMethod: AttributeDeclarationOf<string>;
    /**
     * ## x1
     */
    x1: AttributeDeclarationOf<string>;
    /**
     * ## x2
     */
    x2: AttributeDeclarationOf<string>;
    /**
     * ## y1
     */
    y1: AttributeDeclarationOf<string>;
    /**
     * ## y2
     */
    y2: AttributeDeclarationOf<string>;
}
/**
 * ## LinearGradient
 * The ``<linearGradient>`` element lets authors define linear gradients to apply to other SVG elements.
 * @returns {BaseElement}
 */
export function LinearGradient(params: LinearGradientParams): BaseElement;
/**
 * ## MarkerParams
 * The ``<marker>`` element defines the graphic that is to be used for drawing arrowheads or polymarkers on a given ``<path>``, ``<line>``, ``<polyline>`` or ``<polygon>`` element.
 * Markers are attached to shapes using the marker-start, marker-mid, and marker-end properties.
 */
export interface MarkerParams
    extends CommonAttributes,
        Events<SVGMarkerElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## markerHeight
     */
    markerHeight: AttributeDeclarationOf<string>;
    /**
     * ## markerUnits
     */
    markerUnits: AttributeDeclarationOf<string>;
    /**
     * ## markerWidth
     */
    markerWidth: AttributeDeclarationOf<string>;
    /**
     * ## orient
     */
    orient: AttributeDeclarationOf<string>;
    /**
     * ## preserveAspectRatio
     */
    preserveAspectRatio: AttributeDeclarationOf<string>;
    /**
     * ## refX
     */
    refX: AttributeDeclarationOf<string>;
    /**
     * ## refY
     */
    refY: AttributeDeclarationOf<string>;
    /**
     * ## viewBox
     */
    viewBox: AttributeDeclarationOf<string>;
}
/**
 * ## Marker
 * The ``<marker>`` element defines the graphic that is to be used for drawing arrowheads or polymarkers on a given ``<path>``, ``<line>``, ``<polyline>`` or ``<polygon>`` element.
 * Markers are attached to shapes using the marker-start, marker-mid, and marker-end properties.
 * @returns {BaseElement}
 */
export function Marker(params: MarkerParams): BaseElement;
/**
 * ## MaskParams
 * The ``<mask>`` element defines an alpha mask for compositing the current object into the background. A mask is used/referenced using the mask property.
 */
export interface MaskParams
    extends CommonAttributes,
        Events<SVGMaskElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## height
     * Specifies the height of elements listed here. For all other elements, use the CSS height property.
     */
    height: AttributeDeclarationOf<string>;
    /**
     * ## maskContentUnits
     */
    maskContentUnits: AttributeDeclarationOf<string>;
    /**
     * ## maskUnits
     */
    maskUnits: AttributeDeclarationOf<string>;
    /**
     * ## x
     */
    x: AttributeDeclarationOf<string>;
    /**
     * ## y
     */
    y: AttributeDeclarationOf<string>;
    /**
     * ## width
     * For the elements listed here, this establishes the element's width.
     */
    width: AttributeDeclarationOf<string>;
}
/**
 * ## Mask
 * The ``<mask>`` element defines an alpha mask for compositing the current object into the background. A mask is used/referenced using the mask property.
 * @returns {BaseElement}
 */
export function Mask(params: MaskParams): BaseElement;
/**
 * ## MetadataParams
 * The ``<metadata>`` SVG element adds metadata to SVG content. Metadata is structured information about data. The contents of ``<metadata>`` should be elements from other XML namespaces such as RDF, FOAF, etc.
 */
export interface MetadataParams
    extends CommonAttributes,
        Events<SVGMetadataElement>,
        SVGAttributes,
        ElementChildren {}
/**
 * ## Metadata
 * The ``<metadata>`` SVG element adds metadata to SVG content. Metadata is structured information about data. The contents of ``<metadata>`` should be elements from other XML namespaces such as RDF, FOAF, etc.
 * @returns {BaseElement}
 */
export function Metadata(params: MetadataParams): BaseElement;
/**
 * ## MpathParams
 * The ``<mpath>`` sub-element for the <animateMotion> element provides the ability to reference an external ``<path>`` element as the definition of a motion path.
 */
export interface MpathParams
    extends CommonAttributes,
        Events<SVGMPathElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## xLinkHref
     */
    xLinkHref: AttributeDeclarationOf<string>;
}
/**
 * ## Mpath
 * The ``<mpath>`` sub-element for the <animateMotion> element provides the ability to reference an external ``<path>`` element as the definition of a motion path.
 * @returns {BaseElement}
 */
export function Mpath(params: MpathParams): BaseElement;
/**
 * ## PathParams
 * The ``<path>`` SVG element is the generic element to define a shape. All the basic shapes can be created with a path element.
 */
export interface PathParams
    extends CommonAttributes,
        Events<SVGPathElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## d
     * The d attribute defines a path to be drawn.
     */
    d: AttributeDeclarationOf<string>;
    /**
     * ## pathLength
     */
    pathLength: AttributeDeclarationOf<string>;
}
/**
 * ## Path
 * The ``<path>`` SVG element is the generic element to define a shape. All the basic shapes can be created with a path element.
 * @returns {BaseElement}
 */
export function Path(params: PathParams): BaseElement;
/**
 * ## PatternParams
 * The ``<pattern>`` element defines a graphics object which can be redrawn at repeated x- and y-coordinate intervals ("tiled") to cover an area.
 * The ``<pattern>`` is referenced by the fill and/or stroke attributes on other graphics elements to fill or stroke those elements with the referenced pattern.
 */
export interface PatternParams
    extends CommonAttributes,
        Events<SVGPatternElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## height
     * Specifies the height of elements listed here. For all other elements, use the CSS height property.
     */
    height: AttributeDeclarationOf<string>;
    /**
     * ## href
     * The URL of a linked resource.
     */
    href: AttributeDeclarationOf<string>;
    /**
     * ## patternContentUnits
     */
    patternContentUnits: AttributeDeclarationOf<string>;
    /**
     * ## patternTransform
     */
    patternTransform: AttributeDeclarationOf<string>;
    /**
     * ## preserveAspectRatio
     */
    preserveAspectRatio: AttributeDeclarationOf<string>;
    /**
     * ## viewBox
     */
    viewBox: AttributeDeclarationOf<string>;
    /**
     * ## x
     */
    x: AttributeDeclarationOf<string>;
}
/**
 * ## Pattern
 * The ``<pattern>`` element defines a graphics object which can be redrawn at repeated x- and y-coordinate intervals ("tiled") to cover an area.
 * The ``<pattern>`` is referenced by the fill and/or stroke attributes on other graphics elements to fill or stroke those elements with the referenced pattern.
 * @returns {BaseElement}
 */
export function Pattern(params: PatternParams): BaseElement;
/**
 * ## PolygonParams
 * The ``<polygon>`` element defines a closed shape consisting of a set of connected straight line segments. The last point is connected to the first point.
 * For open shapes, see the ``<polyline>`` element.
 */
export interface PolygonParams
    extends CommonAttributes,
        Events<SVGPolygonElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## points
     */
    points: AttributeDeclarationOf<string>;
    /**
     * ## pathLength
     */
    pathLength: AttributeDeclarationOf<string>;
}
/**
 * ## Polygon
 * The ``<polygon>`` element defines a closed shape consisting of a set of connected straight line segments. The last point is connected to the first point.
 * For open shapes, see the ``<polyline>`` element.
 * @returns {BaseElement}
 */
export function Polygon(params: PolygonParams): BaseElement;
/**
 * ## PolylineParams
 * The ``<polyline>`` SVG element is an SVG basic shape that creates straight lines connecting several points. Typically a polyline is used to create open shapes as the last point doesn't have to be connected to the first point. For closed shapes see the ``<polygon>`` element.
 */
export interface PolylineParams
    extends CommonAttributes,
        Events<SVGPolylineElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## points
     */
    points: AttributeDeclarationOf<string>;
    /**
     * ## pathLength
     */
    pathLength: AttributeDeclarationOf<string>;
}
/**
 * ## Polyline
 * The ``<polyline>`` SVG element is an SVG basic shape that creates straight lines connecting several points. Typically a polyline is used to create open shapes as the last point doesn't have to be connected to the first point. For closed shapes see the ``<polygon>`` element.
 * @returns {BaseElement}
 */
export function Polyline(params: PolylineParams): BaseElement;
/**
 * ## RadialGradientParams
 * The ``<radialGradient>`` element lets authors define radial gradients that can be applied to fill or stroke of graphical elements.
 */
export interface RadialGradientParams
    extends CommonAttributes,
        Events<SVGRadialGradientElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## cx
     * The cx attribute define the x-axis coordinate of a center point.
     */
    cx: AttributeDeclarationOf<string>;
    /**
     * ## cy
     * The cy attribute define the y-axis coordinate of a center point.
     */
    cy: AttributeDeclarationOf<string>;
    /**
     * ## fr
     * The fr attribute defines the radius of the focal point for the radial gradient.
     */
    fr: AttributeDeclarationOf<string>;
    /**
     * ## fx
     * The fx attribute defines the x-axis coordinate of the focal point for a radial gradient.
     */
    fx: AttributeDeclarationOf<string>;
    /**
     * ## fy
     * The fy attribute defines the y-axis coordinate of the focal point for a radial gradient.
     */
    fy: AttributeDeclarationOf<string>;
    /**
     * ## gradientUnits
     */
    gradientUnits: AttributeDeclarationOf<string>;
    /**
     * ## gradientTransform
     */
    gradientTransform: AttributeDeclarationOf<string>;
    /**
     * ## href
     * The URL of a linked resource.
     */
    href: AttributeDeclarationOf<string>;
    /**
     * ## r
     */
    r: AttributeDeclarationOf<string>;
    /**
     * ## spreadMethod
     */
    spreadMethod: AttributeDeclarationOf<string>;
}
/**
 * ## RadialGradient
 * The ``<radialGradient>`` element lets authors define radial gradients that can be applied to fill or stroke of graphical elements.
 * @returns {BaseElement}
 */
export function RadialGradient(params: RadialGradientParams): BaseElement;
/**
 * ## RectParams
 * The ``<rect>`` element is a basic SVG shape that draws rectangles, defined by their position, width, and height. The rectangles may have their corners rounded.
 */
export interface RectParams
    extends CommonAttributes,
        Events<SVGRectElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## x
     */
    x: AttributeDeclarationOf<string>;
    /**
     * ## y
     */
    y: AttributeDeclarationOf<string>;
    /**
     * ## width
     * For the elements listed here, this establishes the element's width.
     */
    width: AttributeDeclarationOf<string>;
    /**
     * ## height
     * Specifies the height of elements listed here. For all other elements, use the CSS height property.
     */
    height: AttributeDeclarationOf<string>;
    /**
     * ## rx
     */
    rx: AttributeDeclarationOf<string>;
    /**
     * ## ry
     */
    ry: AttributeDeclarationOf<string>;
    /**
     * ## pathLength
     */
    pathLength: AttributeDeclarationOf<string>;
}
/**
 * ## Rect
 * The ``<rect>`` element is a basic SVG shape that draws rectangles, defined by their position, width, and height. The rectangles may have their corners rounded.
 * @returns {BaseElement}
 */
export function Rect(params: RectParams): BaseElement;
/**
 * ## SetParams
 * The SVG ``<set>`` element provides a simple means of just setting the value of an attribute for a specified duration.
 */
export interface SetParams
    extends CommonAttributes,
        Events<SVGSetElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## to
     */
    to: AttributeDeclarationOf<string>;
}
/**
 * ## Set
 * The SVG ``<set>`` element provides a simple means of just setting the value of an attribute for a specified duration.
 * @returns {BaseElement}
 */
export function Set(params: SetParams): BaseElement;
/**
 * ## StopParams
 * The SVG ``<stop>`` element defines a color and its position to use on a gradient. This element is always a child of a ``<linearGradient>`` or ``<radialGradient>`` element.
 */
export interface StopParams
    extends CommonAttributes,
        Events<SVGStopElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## stopColor
     */
    stopColor: AttributeDeclarationOf<string>;
    /**
     * ## stopOpacity
     */
    stopOpacity: AttributeDeclarationOf<string>;
}
/**
 * ## Stop
 * The SVG ``<stop>`` element defines a color and its position to use on a gradient. This element is always a child of a ``<linearGradient>`` or ``<radialGradient>`` element.
 * @returns {BaseElement}
 */
export function Stop(params: StopParams): BaseElement;
/**
 * ## SvgParams
 * The svg element is a container that defines a new coordinate system and viewport. It is used as the outermost element of SVG documents, but it can also be used to embed an SVG fragment inside an SVG or HTML document.
 */
export interface SvgParams
    extends CommonAttributes,
        Events<SVGSVGElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## height
     * Specifies the height of elements listed here. For all other elements, use the CSS height property.
     */
    height: AttributeDeclarationOf<string>;
    /**
     * ## preserveAspectRatio
     */
    preserveAspectRatio: AttributeDeclarationOf<string>;
    /**
     * ## viewBox
     */
    viewBox: AttributeDeclarationOf<string>;
    /**
     * ## width
     * For the elements listed here, this establishes the element's width.
     */
    width: AttributeDeclarationOf<string>;
    /**
     * ## x
     */
    x: AttributeDeclarationOf<string>;
    /**
     * ## y
     */
    y: AttributeDeclarationOf<string>;
}
/**
 * ## Svg
 * The svg element is a container that defines a new coordinate system and viewport. It is used as the outermost element of SVG documents, but it can also be used to embed an SVG fragment inside an SVG or HTML document.
 * @returns {BaseElement}
 */
export function Svg(params: SvgParams): BaseElement;
/**
 * ## SwitchParams
 * The ``<switch>`` SVG element evaluates any requiredFeatures, requiredExtensions and systemLanguage attributes on its direct child elements in order, and then renders the first child where these attributes evaluate to true.
 */
export interface SwitchParams
    extends CommonAttributes,
        Events<SVGSwitchElement>,
        SVGAttributes,
        ElementChildren {}
/**
 * ## Switch
 * The ``<switch>`` SVG element evaluates any requiredFeatures, requiredExtensions and systemLanguage attributes on its direct child elements in order, and then renders the first child where these attributes evaluate to true.
 * @returns {BaseElement}
 */
export function Switch(params: SwitchParams): BaseElement;
/**
 * ## SymbolParams
 * The ``<symbol>`` element is used to define graphical template objects which can be instantiated by a ``<use>`` element.
 */
export interface SymbolParams
    extends CommonAttributes,
        Events<SVGSymbolElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## height
     * Specifies the height of elements listed here. For all other elements, use the CSS height property.
     */
    height: AttributeDeclarationOf<string>;
    /**
     * ## preserveAspectRatio
     */
    preserveAspectRatio: AttributeDeclarationOf<string>;
    /**
     * ## refX
     */
    refX: AttributeDeclarationOf<string>;
    /**
     * ## refY
     */
    refY: AttributeDeclarationOf<string>;
    /**
     * ## viewBox
     */
    viewBox: AttributeDeclarationOf<string>;
    /**
     * ## width
     * For the elements listed here, this establishes the element's width.
     */
    width: AttributeDeclarationOf<string>;
    /**
     * ## x
     */
    x: AttributeDeclarationOf<string>;
    /**
     * ## y
     */
    y: AttributeDeclarationOf<string>;
}
/**
 * ## Symbol
 * The ``<symbol>`` element is used to define graphical template objects which can be instantiated by a ``<use>`` element.
 * @returns {BaseElement}
 */
export function Symbol(params: SymbolParams): BaseElement;
/**
 * ## TextParams
 * The SVG ``<text>`` element draws a graphics element consisting of text. It's possible to apply a gradient, pattern, clipping path, mask, or filter to <text>, like any other SVG graphics element.
 */
export interface TextParams
    extends CommonAttributes,
        Events<SVGTextElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## x
     */
    x: AttributeDeclarationOf<string>;
    /**
     * ## y
     */
    y: AttributeDeclarationOf<string>;
    /**
     * ## dx
     * The dx attribute indicates a shift along the x-axis on the position of an element or its content.
     */
    dx: AttributeDeclarationOf<string>;
    /**
     * ## dy
     * The dy attribute indicates a shift along the y-axis on the position of an element or its content.
     */
    dy: AttributeDeclarationOf<string>;
    /**
     * ## rotate
     */
    rotate: AttributeDeclarationOf<string>;
    /**
     * ## lengthAdjust
     */
    lengthAdjust: AttributeDeclarationOf<string>;
    /**
     * ## textLength
     */
    textLength: AttributeDeclarationOf<string>;
}
/**
 * ## Text
 * The SVG ``<text>`` element draws a graphics element consisting of text. It's possible to apply a gradient, pattern, clipping path, mask, or filter to <text>, like any other SVG graphics element.
 * @returns {BaseElement}
 */
export function Text(params: TextParams): BaseElement;
/**
 * ## TextPathParams
 * To render text along the shape of a ``<path>``, enclose the text in a <textPath> element that has an href attribute with a reference to the ``<path>`` element.
 */
export interface TextPathParams
    extends CommonAttributes,
        Events<SVGTextPathElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## href
     * The URL of a linked resource.
     */
    href: AttributeDeclarationOf<string>;
    /**
     * ## lengthAdjust
     */
    lengthAdjust: AttributeDeclarationOf<string>;
    /**
     * ## method
     * Defines which HTTP method to use when submitting the form. Can be GET (default) or POST.
     */
    method: AttributeDeclarationOf<"post" | "get" | "dialog">;
    /**
     * ## path
     */
    path: AttributeDeclarationOf<string>;
    /**
     * ## spacing
     */
    spacing: AttributeDeclarationOf<string>;
    /**
     * ## startOffset
     */
    startOffset: AttributeDeclarationOf<string>;
    /**
     * ## textLength
     */
    textLength: AttributeDeclarationOf<string>;
}
/**
 * ## TextPath
 * To render text along the shape of a ``<path>``, enclose the text in a <textPath> element that has an href attribute with a reference to the ``<path>`` element.
 * @returns {BaseElement}
 */
export function TextPath(params: TextPathParams): BaseElement;
/**
 * ## TitleParams
 * The ``<title>`` element provides an accessible, short-text description of any SVG container element or graphics element.
 */
export interface TitleParams
    extends CommonAttributes,
        Events<SVGTitleElement>,
        SVGAttributes,
        ElementChildren {}
/**
 * ## Title
 * The ``<title>`` element provides an accessible, short-text description of any SVG container element or graphics element.
 * @returns {BaseElement}
 */
export function Title(params: TitleParams): BaseElement;
/**
 * ## TspanParams
 * The SVG ``<tspan>`` element defines a subtext within a ``<text>`` element or another ``<tspan>`` element. It allows for adjustment of the style and/or position of that subtext as needed.
 */
export interface TspanParams
    extends CommonAttributes,
        Events<SVGTSpanElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## x
     */
    x: AttributeDeclarationOf<string>;
    /**
     * ## y
     */
    y: AttributeDeclarationOf<string>;
    /**
     * ## dx
     * The dx attribute indicates a shift along the x-axis on the position of an element or its content.
     */
    dx: AttributeDeclarationOf<string>;
    /**
     * ## dy
     * The dy attribute indicates a shift along the y-axis on the position of an element or its content.
     */
    dy: AttributeDeclarationOf<string>;
    /**
     * ## rotate
     */
    rotate: AttributeDeclarationOf<string>;
    /**
     * ## lengthAdjust
     */
    lengthAdjust: AttributeDeclarationOf<string>;
    /**
     * ## textLength
     */
    textLength: AttributeDeclarationOf<string>;
}
/**
 * ## Tspan
 * The SVG ``<tspan>`` element defines a subtext within a ``<text>`` element or another ``<tspan>`` element. It allows for adjustment of the style and/or position of that subtext as needed.
 * @returns {BaseElement}
 */
export function Tspan(params: TspanParams): BaseElement;
/**
 * ## UseParams
 * The ``<use>`` element takes nodes from within the SVG document, and duplicates them somewhere else.
 */
export interface UseParams
    extends CommonAttributes,
        Events<SVGUseElement>,
        SVGAttributes,
        ElementChildren {
    /**
     * ## href
     * The URL of a linked resource.
     */
    href: AttributeDeclarationOf<string>;
    /**
     * ## xLinkHref
     */
    xLinkHref: AttributeDeclarationOf<string>;
    /**
     * ## x
     */
    x: AttributeDeclarationOf<string>;
    /**
     * ## y
     */
    y: AttributeDeclarationOf<string>;
    /**
     * ## width
     * For the elements listed here, this establishes the element's width.
     */
    width: AttributeDeclarationOf<string>;
    /**
     * ## height
     * Specifies the height of elements listed here. For all other elements, use the CSS height property.
     */
    height: AttributeDeclarationOf<string>;
}
/**
 * ## Use
 * The ``<use>`` element takes nodes from within the SVG document, and duplicates them somewhere else.
 * @returns {BaseElement}
 */
export function Use(params: UseParams): BaseElement;
/**
 * ## ViewParams
 * A view is a defined way to view the image, like a zoom level or a detail view.
 */
export interface ViewParams
    extends CommonAttributes,
        Events<SVGViewElement>,
        SVGAttributes,
        ElementChildren {}
/**
 * ## View
 * A view is a defined way to view the image, like a zoom level or a detail view.
 * @returns {BaseElement}
 */
export function View(params: ViewParams): BaseElement;
