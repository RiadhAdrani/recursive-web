import { createElement } from "../packages/components";
import CustomElements from "../packages/components/utility";

/**
 * ## A
 * The ``<a>`` SVG element creates a hyperlink to other web pages, files, locations in the same page, email addresses, or any other URL. It is very similar to HTML's ``<a>`` element.
 * SVG's ``<a>`` element is a container, which means you can create a link around text (like in HTML) but also around any shape.
 * @param {import('./index').AParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function A(props) {
    const element = createElement("a", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## Animate
 * The SVG ``<animate>`` element provides a way to animate an attribute of an element over time.
 * @param {import('./index').AnimateParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Animate(props) {
    const element = createElement("animate", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## AnimateMotion
 * The SVG ``<animateMotion>`` element provides a way to define how an element moves along a motion path.
 * @param {import('./index').AnimateMotionParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function AnimateMotion(props) {
    const element = createElement("animateMotion", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## AnimateTransform
 * The animateTransform element animates a transformation attribute on its target element, thereby allowing animations to control translation, scaling, rotation, and/or skewing.
 * @param {import('./index').AnimateTransformParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function AnimateTransform(props) {
    const element = createElement("animateTransform", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## Circle
 * The ``<circle>`` SVG element is an SVG basic shape, used to draw circles based on a center point and a radius.
 * @param {import('./index').CircleParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Circle(props) {
    const element = createElement("circle", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## ClipPath
 * The ``<clipPath>`` SVG element defines a clipping path, to be used by the clip-path property.
 * A clipping path restricts the region to which paint can be applied. Conceptually, parts of the drawing that lie outside of the region bounded by the clipping path are not drawn.
 * @param {import('./index').ClipPathParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function ClipPath(props) {
    const element = createElement("clipPath", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## Defs
 * The ``<defs>`` element is used to store graphical objects that will be used at a later time. Objects created inside a ``<defs>`` element are not rendered directly. To display them you have to reference them (with a ``<use>`` element for example).
 * Graphical objects can be referenced from anywhere, however, defining these objects inside of a ``<defs>`` element promotes understandability of the SVG content and is beneficial to the overall accessibility of the document.
 * @param {import('./index').DefsParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Defs(props) {
    const element = createElement("defs", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## Desc
 * The ``<desc>`` element provides an accessible, long-text description of any SVG container element or graphics element.
 * Text in a ``<desc>`` element is not rendered as part of the graphic. If the element can be described by visible text, it is possible to reference that text with the aria-describedby attribute. If aria-describedby is used, it will take precedence over ``<desc>``.
 * The hidden text of a ``<desc>`` element can also be concatenated with the visible text of other elements using multiple IDs in an aria-describedby value. In that case, the <desc> element must provide an ID for reference.
 * @param {import('./index').DescParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Desc(props) {
    const element = createElement("desc", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## Discard
 * The ``<discard>`` SVG element allows authors to specify the time at which particular elements are to be discarded, thereby reducing the resources required by an SVG user agent. This is particularly useful to help SVG viewers conserve memory while displaying long-running documents.
 * The ``<discard>`` element may occur wherever the <animate> element may.
 * @param {import('./index').DiscardParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Discard(props) {
    const element = createElement("discard", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## Ellipse
 * The ``<ellipse>`` element is an SVG basic shape, used to create ellipses based on a center coordinate, and both their x and y radius.
 * @param {import('./index').EllipseParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Ellipse(props) {
    const element = createElement("ellipse", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## FeBlend
 * The ``<feBlend>`` SVG filter primitive composes two objects together ruled by a certain blending mode. This is similar to what is known from image editing software when blending two layers. The mode is defined by the mode attribute.
 * @param {import('./index').FeBlendParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function FeBlend(props) {
    const element = createElement("feBlend", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## FeColorMatrix
 * The ``<feColorMatrix>`` SVG filter element changes colors based on a transformation matrix. Every pixel's color value [R,G,B,A] is matrix multiplied by a 5 by 5 color matrix to create new color [R',G',B',A'].
 * @param {import('./index').FeColorMatrixParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function FeColorMatrix(props) {
    const element = createElement("feColorMatrix", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## FeComponentTransfer
 * The ``<feComponentTransfer>`` SVG filter primitive performs color-component-wise remapping of data for each pixel. It allows operations like brightness adjustment, contrast adjustment, color balance or thresholding.
 * The calculations are performed on non-premultiplied color values. The colors are modified by changing each channel (R, G, B, and A) to the result of what the children ``<feFuncR>``, ``<feFuncB>``, ``<feFuncG>``, and ``<feFuncA>`` return.
 * @param {import('./index').FeComponentTransferParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function FeComponentTransfer(props) {
    const element = createElement("feComponentTransfer", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## FeComposite
 * The ``<feComposite>`` SVG filter primitive performs the combination of two input images pixel-wise in image space using one of the Porter-Duff compositing operations: over, in, atop, out, xor, lighter, or arithmetic.
 * @param {import('./index').FeCompositeParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function FeComposite(props) {
    const element = createElement("feComposite", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## FeConvolveMatrix
 * The ``<feConvolveMatrix>`` SVG filter primitive applies a matrix convolution filter effect. A convolution combines pixels in the input image with neighboring pixels to produce a resulting image. A wide variety of imaging operations can be achieved through convolutions, including blurring, edge detection, sharpening, embossing and beveling.
 * @param {import('./index').FeConvolveMatrixParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function FeConvolveMatrix(props) {
    const element = createElement("feConvolveMatrix", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## FeDiffuseLighting
 * The ``<feDiffuseLighting>`` SVG filter primitive lights an image using the alpha channel as a bump map. The resulting image, which is an RGBA opaque image, depends on the light color, light position and surface geometry of the input bump map.
 * @param {import('./index').FeDiffuseLightingParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function FeDiffuseLighting(props) {
    const element = createElement("feDiffuseLighting", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## FeDisplacementMap
 * The ``<feDisplacementMap>`` SVG filter primitive uses the pixel values from the image from in2 to spatially displace the image from in.
 * The formula for the transformation looks like this:
 *
 * ``P'(x,y) ← P(x + scale * (XC(x,y) - 0.5), y + scale * (YC(x,y) - 0.5))``
 * where P(x,y) is the input image, in, and P'(x,y) is the destination. XC(x,y) and YC(x,y) are the component values of the channel designated by xChannelSelector and yChannelSelector.
 * @param {import('./index').FeDisplacementMapParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function FeDisplacementMap(props) {
    const element = createElement("feDisplacementMap", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## FeDistantLight
 * The ``<feDistantLight>`` filter primitive defines a distant light source that can be used within a lighting filter primitive: ``<feDiffuseLighting>`` or ``<feSpecularLighting>``.
 * @param {import('./index').FeDistantLightParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function FeDistantLight(props) {
    const element = createElement("feDistantLight", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## FeDropShadow
 * The SVG ``<feDropShadow>`` filter primitive creates a drop shadow of the input image. It can only be used inside a ``<filter>`` element.
 * @param {import('./index').FeDropShadowParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function FeDropShadow(props) {
    const element = createElement("feDropShadow", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## FeFlood
 * The ``<feFlood>`` SVG filter primitive fills the filter subregion with the color and opacity defined by flood-color and flood-opacity.
 * @param {import('./index').FeFloodParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function FeFlood(props) {
    const element = createElement("feFlood", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## FeFuncA
 * The ``<feFuncA>`` SVG filter primitive defines the transfer function for the alpha component of the input graphic of its parent ``<feComponentTransfer>`` element.
 * @param {import('./index').FeFuncAParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function FeFuncA(props) {
    const element = createElement("feFuncA", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## FeFuncB
 * The ``<feFuncB>`` SVG filter primitive defines the transfer function for the blue component of the input graphic of its parent ``<feComponentTransfer>`` element.
 * @param {import('./index').FeFuncBParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function FeFuncB(props) {
    const element = createElement("feFuncB", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## FeFuncG
 * The ``<feFuncG>`` SVG filter primitive defines the transfer function for the green component of the input graphic of its parent ``<feComponentTransfer>`` element.
 * @param {import('./index').FeFuncGParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function FeFuncG(props) {
    const element = createElement("feFuncG", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## FeFuncR
 * The ``<feFuncR>`` SVG filter primitive defines the transfer function for the red component of the input graphic of its parent ``<feComponentTransfer>`` element.
 * @param {import('./index').FeFuncRParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function FeFuncR(props) {
    const element = createElement("feFuncR", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## FeGaussianBlur
 * The ``<feGaussianBlur>`` SVG filter primitive blurs the input image by the amount specified in stdDeviation, which defines the bell-curve.
 * @param {import('./index').FeGaussianBlurParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function FeGaussianBlur(props) {
    const element = createElement("feGaussianBlur", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## FeImage
 * The ``<feImage>`` SVG filter primitive fetches image data from an external source and provides the pixel data as output (meaning if the external source is an SVG image, it is rasterized.)
 * @param {import('./index').FeImageParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function FeImage(props) {
    const element = createElement("feImage", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## FeMerge
 * The ``<feMerge>`` SVG element allows filter effects to be applied concurrently instead of sequentially. This is achieved by other filters storing their output via the result attribute and then accessing it in a ``<feMergeNode>`` child.
 * @param {import('./index').FeMergeParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function FeMerge(props) {
    const element = createElement("feMerge", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## FeMergeNode
 * The feMergeNode takes the result of another filter to be processed by its parent ``<feMerge>``.
 * @param {import('./index').FeMergeNodeParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function FeMergeNode(props) {
    const element = createElement("feMergeNode", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## FeMorphology
 * The ``<feMorphology>`` SVG filter primitive is used to erode or dilate the input image. Its usefulness lies especially in fattening or thinning effects.
 * @param {import('./index').FeMorphologyParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function FeMorphology(props) {
    const element = createElement("feMorphology", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## FeOffset
 * The ``<feOffset>`` SVG filter primitive allows to offset the input image. The input image as a whole is offset by the values specified in the dx and dy attributes.
 * @param {import('./index').FeOffsetParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function FeOffset(props) {
    const element = createElement("feOffset", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## FePointLight
 * The ``<fePointLight>`` filter primitive defines a light source which allows to create a point light effect. It that can be used within a lighting filter primitive: ``<feDiffuseLighting>`` or ``<feSpecularLighting>``.
 * @param {import('./index').FePointLightParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function FePointLight(props) {
    const element = createElement("fePointLight", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## FeSpecularLighting
 * The ``<feSpecularLighting>`` SVG filter primitive lights a source graphic using the alpha channel as a bump map. The resulting image is an RGBA image based on the light color. The lighting calculation follows the standard specular component of the Phong lighting model. The resulting image depends on the light color, light position and surface geometry of the input bump map. The result of the lighting calculation is added. The filter primitive assumes that the viewer is at infinity in the z direction.
 * @param {import('./index').FeSpecularLightingParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function FeSpecularLighting(props) {
    const element = createElement("feSpecularLighting", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## FeSpotLight
 * The ``<feSpotLight>`` SVG filter primitive defines a light source that can be used to create a spotlight effect. It is used within a lighting filter primitive: <feDiffuseLighting> or ``<feSpecularLighting>``.
 * @param {import('./index').FeSpotLightParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function FeSpotLight(props) {
    const element = createElement("feSpotLight", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## FeTile
 * The ``<feTile>`` SVG filter primitive allows to fill a target rectangle with a repeated, tiled pattern of an input image. The effect is similar to the one of a ``<pattern>``.
 * @param {import('./index').FeTileParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function FeTile(props) {
    const element = createElement("feTile", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## FeTurbulence
 * The ``<feTurbulence>`` SVG filter primitive creates an image using the Perlin turbulence function. It allows the synthesis of artificial textures like clouds or marble. The resulting image will fill the entire filter primitive subregion.
 * @param {import('./index').FeTurbulenceParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function FeTurbulence(props) {
    const element = createElement("feTurbulence", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## Filter
 * The ``<filter>`` SVG element defines a custom filter effect by grouping atomic filter primitives. It is never rendered itself, but must be used by the filter attribute on SVG elements, or the filter CSS property for SVG/HTML elements.
 * @param {import('./index').FilterParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Filter(props) {
    const element = createElement("filter", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## ForeignObject
 * The ``<foreignObject>`` SVG element includes elements from a different XML namespace. In the context of a browser, it is most likely (X)HTML.
 * @param {import('./index').ForeignObjectParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function ForeignObject(props) {
    const element = createElement("foreignObject", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## G
 * The ``<g>`` SVG element is a container used to group other SVG elements.
 * Transformations applied to the ``<g>`` element are performed on its child elements, and its attributes are inherited by its children. It can also group multiple elements to be referenced later with the ``<use>`` element.
 * @param {import('./index').GParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function G(props) {
    const element = createElement("g", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## Hatch
 * @param {import('./index').HatchParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Hatch(props) {
    const element = createElement("hatch", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## Hatchpath
 * @param {import('./index').HatchpathParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Hatchpath(props) {
    const element = createElement("hatchpath", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## Image
 * The ``<image>`` SVG element includes images inside SVG documents. It can display raster image files or other SVG files.
 * The only image formats SVG software must support are JPEG, PNG, and other SVG files. Animated GIF behavior is undefined.
 * SVG files displayed with ``<image>`` are treated as an image: external resources aren't loaded, :visited styles aren't applied, and they cannot be interactive. To include dynamic SVG elements, try ``<use>`` with an external URL. To include SVG files and run scripts inside them, try ``<object>`` inside of ``<foreignObject>``.
 * @param {import('./index').ImageParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Image(props) {
    const element = createElement("image", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## Line
 * The ``<line>`` element is an SVG basic shape used to create a line connecting two points.
 * @param {import('./index').LineParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Line(props) {
    const element = createElement("line", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## LinearGradient
 * The ``<linearGradient>`` element lets authors define linear gradients to apply to other SVG elements.
 * @param {import('./index').LinearGradientParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function LinearGradient(props) {
    const element = createElement("linearGradient", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## Marker
 * The ``<marker>`` element defines the graphic that is to be used for drawing arrowheads or polymarkers on a given ``<path>``, ``<line>``, ``<polyline>`` or ``<polygon>`` element.
 * Markers are attached to shapes using the marker-start, marker-mid, and marker-end properties.
 * @param {import('./index').MarkerParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Marker(props) {
    const element = createElement("marker", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## Mask
 * The ``<mask>`` element defines an alpha mask for compositing the current object into the background. A mask is used/referenced using the mask property.
 * @param {import('./index').MaskParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Mask(props) {
    const element = createElement("mask", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## Metadata
 * The ``<metadata>`` SVG element adds metadata to SVG content. Metadata is structured information about data. The contents of ``<metadata>`` should be elements from other XML namespaces such as RDF, FOAF, etc.
 * @param {import('./index').MetadataParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Metadata(props) {
    const element = createElement("metadata", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## Mpath
 * The ``<mpath>`` sub-element for the <animateMotion> element provides the ability to reference an external ``<path>`` element as the definition of a motion path.
 * @param {import('./index').MpathParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Mpath(props) {
    const element = createElement("mpath", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## Path
 * The ``<path>`` SVG element is the generic element to define a shape. All the basic shapes can be created with a path element.
 * @param {import('./index').PathParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Path(props) {
    const element = createElement("path", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## Pattern
 * The ``<pattern>`` element defines a graphics object which can be redrawn at repeated x- and y-coordinate intervals ("tiled") to cover an area.
 * The ``<pattern>`` is referenced by the fill and/or stroke attributes on other graphics elements to fill or stroke those elements with the referenced pattern.
 * @param {import('./index').PatternParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Pattern(props) {
    const element = createElement("pattern", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## Polygon
 * The ``<polygon>`` element defines a closed shape consisting of a set of connected straight line segments. The last point is connected to the first point.
 * For open shapes, see the ``<polyline>`` element.
 * @param {import('./index').PolygonParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Polygon(props) {
    const element = createElement("polygon", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## Polyline
 * The ``<polyline>`` SVG element is an SVG basic shape that creates straight lines connecting several points. Typically a polyline is used to create open shapes as the last point doesn't have to be connected to the first point. For closed shapes see the ``<polygon>`` element.
 * @param {import('./index').PolylineParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Polyline(props) {
    const element = createElement("polyline", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## RadialGradient
 * The ``<radialGradient>`` element lets authors define radial gradients that can be applied to fill or stroke of graphical elements.
 * @param {import('./index').RadialGradientParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function RadialGradient(props) {
    const element = createElement("radialGradient", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## Rect
 * The ``<rect>`` element is a basic SVG shape that draws rectangles, defined by their position, width, and height. The rectangles may have their corners rounded.
 * @param {import('./index').RectParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Rect(props) {
    const element = createElement("rect", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## Set
 * The SVG ``<set>`` element provides a simple means of just setting the value of an attribute for a specified duration.
 * @param {import('./index').SetParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Set(props) {
    const element = createElement("set", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## Stop
 * The SVG ``<stop>`` element defines a color and its position to use on a gradient. This element is always a child of a ``<linearGradient>`` or ``<radialGradient>`` element.
 * @param {import('./index').StopParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Stop(props) {
    const element = createElement("stop", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## Svg
 * The svg element is a container that defines a new coordinate system and viewport. It is used as the outermost element of SVG documents, but it can also be used to embed an SVG fragment inside an SVG or HTML document.
 * @param {import('./index').SvgParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Svg(props) {
    const element = createElement("svg", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## Switch
 * The ``<switch>`` SVG element evaluates any requiredFeatures, requiredExtensions and systemLanguage attributes on its direct child elements in order, and then renders the first child where these attributes evaluate to true.
 * @param {import('./index').SwitchParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Switch(props) {
    const element = createElement("switch", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## Symbol
 * The ``<symbol>`` element is used to define graphical template objects which can be instantiated by a ``<use>`` element.
 * @param {import('./index').SymbolParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Symbol(props) {
    const element = createElement("symbol", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## Text
 * The SVG ``<text>`` element draws a graphics element consisting of text. It's possible to apply a gradient, pattern, clipping path, mask, or filter to <text>, like any other SVG graphics element.
 * @param {import('./index').TextParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Text(props) {
    const element = createElement("text", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## TextPath
 * To render text along the shape of a ``<path>``, enclose the text in a <textPath> element that has an href attribute with a reference to the ``<path>`` element.
 * @param {import('./index').TextPathParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function TextPath(props) {
    const element = createElement("textPath", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## Title
 * The ``<title>`` element provides an accessible, short-text description of any SVG container element or graphics element.
 * @param {import('./index').TitleParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Title(props) {
    const element = createElement("title", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## Tspan
 * The SVG ``<tspan>`` element defines a subtext within a ``<text>`` element or another ``<tspan>`` element. It allows for adjustment of the style and/or position of that subtext as needed.
 * @param {import('./index').TspanParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Tspan(props) {
    const element = createElement("tspan", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## Use
 * The ``<use>`` element takes nodes from within the SVG document, and duplicates them somewhere else.
 * @param {import('./index').UseParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Use(props) {
    const element = createElement("use", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
/**
 * ## View
 * A view is a defined way to view the image, like a zoom level or a detail view.
 * @param {import('./index').ViewParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function View(props) {
    const element = createElement("view", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/2000/svg" },
    });

    return element;
}
