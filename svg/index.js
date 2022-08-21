import { createElement } from "..";

/**
 * ## _`A` Component_
 *
 * The ``<a>`` SVG element creates a hyperlink to other web pages, files, locations in the same page, email addresses, or any other URL. It is very similar to HTML's ``<a>`` element.
 * SVG's ``<a>`` element is a container, which means you can create a link around text (like in HTML) but also around any shape.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/a
 * @param {import("../lib.js").SVGAProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function A(props) {
    const el = createElement("a", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`Animate` Component_
 *
 * The SVG ``<animate>`` element provides a way to animate an attribute of an element over time.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animate
 * @param {import("../lib.js").SVGAnimateProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Animate(props) {
    const el = createElement("animate", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`AnimateMotion` Component_
 *
 * The SVG ``<animateMotion>`` element provides a way to define how an element moves along a motion path.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animatemotion
 * @param {import("../lib.js").SVGAnimateMotionProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function AnimateMotion(props) {
    const el = createElement("animatemotion", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`AnimateTransform` Component_
 *
 * The animateTransform element animates a transformation attribute on its target element, thereby allowing animations to control translation, scaling, rotation, and/or skewing.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animatetransform
 * @param {import("../lib.js").SVGAnimateTransformProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function AnimateTransform(props) {
    const el = createElement("animatetransform", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`Circle` Component_
 *
 * The ``<circle>`` SVG element is an SVG basic shape, used to draw circles based on a center point and a radius.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle
 * @param {import("../lib.js").SVGCircleProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Circle(props) {
    const el = createElement("circle", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`ClipPath` Component_
 *
 * The ``<clipPath>`` SVG element defines a clipping path, to be used by the clip-path property.
 * A clipping path restricts the region to which paint can be applied. Conceptually, parts of the drawing that lie outside of the region bounded by the clipping path are not drawn.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/clippath
 * @param {import("../lib.js").SVGClipPathProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function ClipPath(props) {
    const el = createElement("clippath", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`Defs` Component_
 *
 * The ``<defs>`` element is used to store graphical objects that will be used at a later time. Objects created inside a ``<defs>`` element are not rendered directly. To display them you have to reference them (with a ``<use>`` element for example).
 * Graphical objects can be referenced from anywhere, however, defining these objects inside of a ``<defs>`` element promotes understandability of the SVG content and is beneficial to the overall accessibility of the document.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/defs
 * @param {import("../lib.js").SVGDefsProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Defs(props) {
    const el = createElement("defs", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`Desc` Component_
 *
 * The ``<desc>`` element provides an accessible, long-text description of any SVG container element or graphics element.
 * Text in a ``<desc>`` element is not rendered as part of the graphic. If the element can be described by visible text, it is possible to reference that text with the aria-describedby attribute. If aria-describedby is used, it will take precedence over ``<desc>``.
 * The hidden text of a ``<desc>`` element can also be concatenated with the visible text of other elements using multiple IDs in an aria-describedby value. In that case, the <desc> element must provide an ID for reference.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/desc
 * @param {import("../lib.js").SVGDescProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Desc(props) {
    const el = createElement("desc", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`Discard` Component_
 *
 * The ``<discard>`` SVG element allows authors to specify the time at which particular elements are to be discarded, thereby reducing the resources required by an SVG user agent. This is particularly useful to help SVG viewers conserve memory while displaying long-running documents.
 * The ``<discard>`` element may occur wherever the <animate> element may.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/discard
 * @param {import("../lib.js").SVGDiscardProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Discard(props) {
    const el = createElement("discard", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`Ellipse` Component_
 *
 * The ``<ellipse>`` element is an SVG basic shape, used to create ellipses based on a center coordinate, and both their x and y radius.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/ellipse
 * @param {import("../lib.js").SVGEllipseProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Ellipse(props) {
    const el = createElement("ellipse", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`FeBlend` Component_
 *
 * The ``<feBlend>`` SVG filter primitive composes two objects together ruled by a certain blending mode. This is similar to what is known from image editing software when blending two layers. The mode is defined by the mode attribute.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feblend
 * @param {import("../lib.js").SVGFeBlendProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function FeBlend(props) {
    const el = createElement("feblend", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`FeColorMatrix` Component_
 *
 * The ``<feColorMatrix>`` SVG filter element changes colors based on a transformation matrix. Every pixel's color value [R,G,B,A] is matrix multiplied by a 5 by 5 color matrix to create new color [R',G',B',A'].
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/fecolormatrix
 * @param {import("../lib.js").SVGFeColorMatrixProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function FeColorMatrix(props) {
    const el = createElement("fecolormatrix", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`FeComponentTransfer` Component_
 *
 * The ``<feComponentTransfer>`` SVG filter primitive performs color-component-wise remapping of data for each pixel. It allows operations like brightness adjustment, contrast adjustment, color balance or thresholding.
 * The calculations are performed on non-premultiplied color values. The colors are modified by changing each channel (R, G, B, and A) to the result of what the children ``<feFuncR>``, ``<feFuncB>``, ``<feFuncG>``, and ``<feFuncA>`` return.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/fecomponenttransfer
 * @param {import("../lib.js").SVGFeComponentTransferProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function FeComponentTransfer(props) {
    const el = createElement("fecomponenttransfer", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`FeComposite` Component_
 *
 * The ``<feComposite>`` SVG filter primitive performs the combination of two input images pixel-wise in image space using one of the Porter-Duff compositing operations: over, in, atop, out, xor, lighter, or arithmetic.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/fecomposite
 * @param {import("../lib.js").SVGFeCompositeProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function FeComposite(props) {
    const el = createElement("fecomposite", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`FeConvolveMatrix` Component_
 *
 * The ``<feConvolveMatrix>`` SVG filter primitive applies a matrix convolution filter effect. A convolution combines pixels in the input image with neighboring pixels to produce a resulting image. A wide variety of imaging operations can be achieved through convolutions, including blurring, edge detection, sharpening, embossing and beveling.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feconvolvematrix
 * @param {import("../lib.js").SVGFeConvolveMatrixProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function FeConvolveMatrix(props) {
    const el = createElement("feconvolvematrix", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`FeDiffuseLighting` Component_
 *
 * The ``<feDiffuseLighting>`` SVG filter primitive lights an image using the alpha channel as a bump map. The resulting image, which is an RGBA opaque image, depends on the light color, light position and surface geometry of the input bump map.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/fediffuselighting
 * @param {import("../lib.js").SVGFeDiffuseLightingProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function FeDiffuseLighting(props) {
    const el = createElement("fediffuselighting", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`FeDisplacementMap` Component_
 *
 * The ``<feDisplacementMap>`` SVG filter primitive uses the pixel values from the image from in2 to spatially displace the image from in.
 * The formula for the transformation looks like this:
 *
 * ``P'(x,y) ← P(x + scale * (XC(x,y) - 0.5), y + scale * (YC(x,y) - 0.5))``
 * where P(x,y) is the input image, in, and P'(x,y) is the destination. XC(x,y) and YC(x,y) are the component values of the channel designated by xChannelSelector and yChannelSelector.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/fedisplacementmap
 * @param {import("../lib.js").SVGFeDisplacementMapProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function FeDisplacementMap(props) {
    const el = createElement("fedisplacementmap", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`FeDistantLight` Component_
 *
 * The ``<feDistantLight>`` filter primitive defines a distant light source that can be used within a lighting filter primitive: ``<feDiffuseLighting>`` or ``<feSpecularLighting>``.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/fedistantlight
 * @param {import("../lib.js").SVGFeDistantLightProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function FeDistantLight(props) {
    const el = createElement("fedistantlight", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`FeDropShadow` Component_
 *
 * The SVG ``<feDropShadow>`` filter primitive creates a drop shadow of the input image. It can only be used inside a ``<filter>`` element.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/fedropshadow
 * @param {import("../lib.js").SVGFeDropShadowProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function FeDropShadow(props) {
    const el = createElement("fedropshadow", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`FeFlood` Component_
 *
 * The ``<feFlood>`` SVG filter primitive fills the filter subregion with the color and opacity defined by flood-color and flood-opacity.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feflood
 * @param {import("../lib.js").SVGFeFloodProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function FeFlood(props) {
    const el = createElement("feflood", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`FeFuncA` Component_
 *
 * The ``<feFuncA>`` SVG filter primitive defines the transfer function for the alpha component of the input graphic of its parent ``<feComponentTransfer>`` element.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/fefunca
 * @param {import("../lib.js").SVGFeFuncAProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function FeFuncA(props) {
    const el = createElement("fefunca", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`FeFuncB` Component_
 *
 * The ``<feFuncB>`` SVG filter primitive defines the transfer function for the blue component of the input graphic of its parent ``<feComponentTransfer>`` element.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/fefuncb
 * @param {import("../lib.js").SVGFeFuncBProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function FeFuncB(props) {
    const el = createElement("fefuncb", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`FeFuncG` Component_
 *
 * The ``<feFuncG>`` SVG filter primitive defines the transfer function for the green component of the input graphic of its parent ``<feComponentTransfer>`` element.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/fefuncg
 * @param {import("../lib.js").SVGFeFuncGProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function FeFuncG(props) {
    const el = createElement("fefuncg", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`FeFuncR` Component_
 *
 * The ``<feFuncR>`` SVG filter primitive defines the transfer function for the red component of the input graphic of its parent ``<feComponentTransfer>`` element.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/fefuncr
 * @param {import("../lib.js").SVGFeFuncRProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function FeFuncR(props) {
    const el = createElement("fefuncr", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`FeGaussianBlur` Component_
 *
 * The ``<feGaussianBlur>`` SVG filter primitive blurs the input image by the amount specified in stdDeviation, which defines the bell-curve.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/fegaussianblur
 * @param {import("../lib.js").SVGFeGaussianBlurProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function FeGaussianBlur(props) {
    const el = createElement("fegaussianblur", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`FeImage` Component_
 *
 * The ``<feImage>`` SVG filter primitive fetches image data from an external source and provides the pixel data as output (meaning if the external source is an SVG image, it is rasterized.)
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feimage
 * @param {import("../lib.js").SVGFeImageProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function FeImage(props) {
    const el = createElement("feimage", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`FeMerge` Component_
 *
 * The ``<feMerge>`` SVG element allows filter effects to be applied concurrently instead of sequentially. This is achieved by other filters storing their output via the result attribute and then accessing it in a ``<feMergeNode>`` child.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/femerge
 * @param {import("../lib.js").SVGFeMergeProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function FeMerge(props) {
    const el = createElement("femerge", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`FeMergeNode` Component_
 *
 * The feMergeNode takes the result of another filter to be processed by its parent ``<feMerge>``.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/femergenode
 * @param {import("../lib.js").SVGFeMergeNodeProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function FeMergeNode(props) {
    const el = createElement("femergenode", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`FeMorphology` Component_
 *
 * The ``<feMorphology>`` SVG filter primitive is used to erode or dilate the input image. Its usefulness lies especially in fattening or thinning effects.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/femorphology
 * @param {import("../lib.js").SVGFeMorphologyProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function FeMorphology(props) {
    const el = createElement("femorphology", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`FeOffset` Component_
 *
 * The ``<feOffset>`` SVG filter primitive allows to offset the input image. The input image as a whole is offset by the values specified in the dx and dy attributes.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feoffset
 * @param {import("../lib.js").SVGFeOffsetProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function FeOffset(props) {
    const el = createElement("feoffset", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`FePointLight` Component_
 *
 * The ``<fePointLight>`` filter primitive defines a light source which allows to create a point light effect. It that can be used within a lighting filter primitive: ``<feDiffuseLighting>`` or ``<feSpecularLighting>``.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/fepointlight
 * @param {import("../lib.js").SVGFePointLightProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function FePointLight(props) {
    const el = createElement("fepointlight", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`FeSpecularLighting` Component_
 *
 * The ``<feSpecularLighting>`` SVG filter primitive lights a source graphic using the alpha channel as a bump map. The resulting image is an RGBA image based on the light color. The lighting calculation follows the standard specular component of the Phong lighting model. The resulting image depends on the light color, light position and surface geometry of the input bump map. The result of the lighting calculation is added. The filter primitive assumes that the viewer is at infinity in the z direction.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/fespecularlighting
 * @param {import("../lib.js").SVGFeSpecularLightingProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function FeSpecularLighting(props) {
    const el = createElement("fespecularlighting", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`FeSpotLight` Component_
 *
 * The ``<feSpotLight>`` SVG filter primitive defines a light source that can be used to create a spotlight effect. It is used within a lighting filter primitive: <feDiffuseLighting> or ``<feSpecularLighting>``.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/fespotlight
 * @param {import("../lib.js").SVGFeSpotLightProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function FeSpotLight(props) {
    const el = createElement("fespotlight", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`FeTile` Component_
 *
 * The ``<feTile>`` SVG filter primitive allows to fill a target rectangle with a repeated, tiled pattern of an input image. The effect is similar to the one of a ``<pattern>``.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/fetile
 * @param {import("../lib.js").SVGFeTileProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function FeTile(props) {
    const el = createElement("fetile", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`FeTurbulence` Component_
 *
 * The ``<feTurbulence>`` SVG filter primitive creates an image using the Perlin turbulence function. It allows the synthesis of artificial textures like clouds or marble. The resulting image will fill the entire filter primitive subregion.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feturbulence
 * @param {import("../lib.js").SVGFeTurbulenceProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function FeTurbulence(props) {
    const el = createElement("feturbulence", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`Filter` Component_
 *
 * The ``<filter>`` SVG element defines a custom filter effect by grouping atomic filter primitives. It is never rendered itself, but must be used by the filter attribute on SVG elements, or the filter CSS property for SVG/HTML elements.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter
 * @param {import("../lib.js").SVGFilterProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Filter(props) {
    const el = createElement("filter", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`ForeignObject` Component_
 *
 * The ``<foreignObject>`` SVG element includes elements from a different XML namespace. In the context of a browser, it is most likely (X)HTML.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignobject
 * @param {import("../lib.js").SVGForeignObjectProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function ForeignObject(props) {
    const el = createElement("foreignobject", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`G` Component_
 *
 * The ``<g>`` SVG element is a container used to group other SVG elements.
 * Transformations applied to the ``<g>`` element are performed on its child elements, and its attributes are inherited by its children. It can also group multiple elements to be referenced later with the ``<use>`` element.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/g
 * @param {import("../lib.js").SVGGProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function G(props) {
    const el = createElement("g", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`Hatch` Component_
 *
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/hatch
 * @param {import("../lib.js").SVGHatchProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Hatch(props) {
    const el = createElement("hatch", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`Hatchpath` Component_
 *
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/hatchpath
 * @param {import("../lib.js").SVGHatchpathProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Hatchpath(props) {
    const el = createElement("hatchpath", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`Image` Component_
 *
 * The ``<image>`` SVG element includes images inside SVG documents. It can display raster image files or other SVG files.
 * The only image formats SVG software must support are JPEG, PNG, and other SVG files. Animated GIF behavior is undefined.
 * SVG files displayed with ``<image>`` are treated as an image: external resources aren't loaded, :visited styles aren't applied, and they cannot be interactive. To include dynamic SVG elements, try ``<use>`` with an external URL. To include SVG files and run scripts inside them, try ``<object>`` inside of ``<foreignObject>``.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/image
 * @param {import("../lib.js").SVGImageProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Image(props) {
    const el = createElement("image", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`Line` Component_
 *
 * The ``<line>`` element is an SVG basic shape used to create a line connecting two points.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/line
 * @param {import("../lib.js").SVGLineProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Line(props) {
    const el = createElement("line", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`LinearGradient` Component_
 *
 * The ``<linearGradient>`` element lets authors define linear gradients to apply to other SVG elements.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/lineargradient
 * @param {import("../lib.js").SVGLinearGradientProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function LinearGradient(props) {
    const el = createElement("lineargradient", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`Marker` Component_
 *
 * The ``<marker>`` element defines the graphic that is to be used for drawing arrowheads or polymarkers on a given ``<path>``, ``<line>``, ``<polyline>`` or ``<polygon>`` element.
 * Markers are attached to shapes using the marker-start, marker-mid, and marker-end properties.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/marker
 * @param {import("../lib.js").SVGMarkerProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Marker(props) {
    const el = createElement("marker", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`Mask` Component_
 *
 * The ``<mask>`` element defines an alpha mask for compositing the current object into the background. A mask is used/referenced using the mask property.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/mask
 * @param {import("../lib.js").SVGMaskProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Mask(props) {
    const el = createElement("mask", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`Metadata` Component_
 *
 * The ``<metadata>`` SVG element adds metadata to SVG content. Metadata is structured information about data. The contents of ``<metadata>`` should be elements from other XML namespaces such as RDF, FOAF, etc.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/metadata
 * @param {import("../lib.js").SVGMetadataProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Metadata(props) {
    const el = createElement("metadata", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`Mpath` Component_
 *
 * The ``<mpath>`` sub-element for the <animateMotion> element provides the ability to reference an external ``<path>`` element as the definition of a motion path.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/mpath
 * @param {import("../lib.js").SVGMpathProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Mpath(props) {
    const el = createElement("mpath", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`Path` Component_
 *
 * The ``<path>`` SVG element is the generic element to define a shape. All the basic shapes can be created with a path element.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path
 * @param {import("../lib.js").SVGPathProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Path(props) {
    const el = createElement("path", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`Pattern` Component_
 *
 * The ``<pattern>`` element defines a graphics object which can be redrawn at repeated x- and y-coordinate intervals ("tiled") to cover an area.
 * The ``<pattern>`` is referenced by the fill and/or stroke attributes on other graphics elements to fill or stroke those elements with the referenced pattern.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/pattern
 * @param {import("../lib.js").SVGPatternProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Pattern(props) {
    const el = createElement("pattern", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`Polygon` Component_
 *
 * The ``<polygon>`` element defines a closed shape consisting of a set of connected straight line segments. The last point is connected to the first point.
 * For open shapes, see the ``<polyline>`` element.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polygon
 * @param {import("../lib.js").SVGPolygonProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Polygon(props) {
    const el = createElement("polygon", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`Polyline` Component_
 *
 * The ``<polyline>`` SVG element is an SVG basic shape that creates straight lines connecting several points. Typically a polyline is used to create open shapes as the last point doesn't have to be connected to the first point. For closed shapes see the ``<polygon>`` element.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polyline
 * @param {import("../lib.js").SVGPolylineProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Polyline(props) {
    const el = createElement("polyline", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`RadialGradient` Component_
 *
 * The ``<radialGradient>`` element lets authors define radial gradients that can be applied to fill or stroke of graphical elements.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/radialgradient
 * @param {import("../lib.js").SVGRadialGradientProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function RadialGradient(props) {
    const el = createElement("radialgradient", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`Rect` Component_
 *
 * The ``<rect>`` element is a basic SVG shape that draws rectangles, defined by their position, width, and height. The rectangles may have their corners rounded.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/rect
 * @param {import("../lib.js").SVGRectProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Rect(props) {
    const el = createElement("rect", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`Set` Component_
 *
 * The SVG ``<set>`` element provides a simple means of just setting the value of an attribute for a specified duration.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/set
 * @param {import("../lib.js").SVGSetProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Set(props) {
    const el = createElement("set", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`Stop` Component_
 *
 * The SVG ``<stop>`` element defines a color and its position to use on a gradient. This element is always a child of a ``<linearGradient>`` or ``<radialGradient>`` element.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/stop
 * @param {import("../lib.js").SVGStopProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Stop(props) {
    const el = createElement("stop", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`Svg` Component_
 *
 * The svg element is a container that defines a new coordinate system and viewport. It is used as the outermost element of SVG documents, but it can also be used to embed an SVG fragment inside an SVG or HTML document.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg
 * @param {import("../lib.js").SVGSvgProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Svg(props) {
    const el = createElement("svg", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`Switch` Component_
 *
 * The ``<switch>`` SVG element evaluates any requiredFeatures, requiredExtensions and systemLanguage attributes on its direct child elements in order, and then renders the first child where these attributes evaluate to true.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/switch
 * @param {import("../lib.js").SVGSwitchProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Switch(props) {
    const el = createElement("switch", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`Symbol` Component_
 *
 * The ``<symbol>`` element is used to define graphical template objects which can be instantiated by a ``<use>`` element.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/symbol
 * @param {import("../lib.js").SVGSymbolProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Symbol(props) {
    const el = createElement("symbol", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`Text` Component_
 *
 * The SVG ``<text>`` element draws a graphics element consisting of text. It's possible to apply a gradient, pattern, clipping path, mask, or filter to <text>, like any other SVG graphics element.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/text
 * @param {import("../lib.js").SVGTextProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Text(props) {
    const el = createElement("text", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`TextPath` Component_
 *
 * To render text along the shape of a ``<path>``, enclose the text in a <textPath> element that has an href attribute with a reference to the ``<path>`` element.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/textpath
 * @param {import("../lib.js").SVGTextPathProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function TextPath(props) {
    const el = createElement("textpath", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`Title` Component_
 *
 * The ``<title>`` element provides an accessible, short-text description of any SVG container element or graphics element.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/title
 * @param {import("../lib.js").SVGTitleProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Title(props) {
    const el = createElement("title", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`Tspan` Component_
 *
 * The SVG ``<tspan>`` element defines a subtext within a ``<text>`` element or another ``<tspan>`` element. It allows for adjustment of the style and/or position of that subtext as needed.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/tspan
 * @param {import("../lib.js").SVGTspanProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Tspan(props) {
    const el = createElement("tspan", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`Use` Component_
 *
 * The ``<use>`` element takes nodes from within the SVG document, and duplicates them somewhere else.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use
 * @param {import("../lib.js").SVGUseProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Use(props) {
    const el = createElement("use", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
/**
 * ## _`View` Component_
 *
 * A view is a defined way to view the image, like a zoom level or a detail view.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/view
 * @param {import("../lib.js").SVGViewProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function View(props) {
    const el = createElement("view", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return el;
}
