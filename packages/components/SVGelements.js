const Elements = {
    A: {
        tag: "a",
        props: { href: "string", hrefLang: "string", target: "string", type: "string" },
        docs: [
            "The ``<a>`` SVG element creates a hyperlink to other web pages, files, locations in the same page, email addresses, or any other URL. It is very similar to HTML's ``<a>`` element.",
            "SVG's ``<a>`` element is a container, which means you can create a link around text (like in HTML) but also around any shape.",
        ],
    },
    Animate: {
        tag: "animate",
        props: {
            begin: "string",
            dur: "string",
            end: "string",
            min: "min",
            max: "string",
            restart: "string",
            repeatCount: "string",
            fill: "string",
            calcMode: "string",
            values: "string",
            keyTimes: "string",
            keySplines: "string",
            from: "string",
            to: "string",
            by: "string",
            attributeName: "string",
            additive: "string",
            accumulate: "string",
        },
        docs: [
            "The SVG ``<animate>`` element provides a way to animate an attribute of an element over time.",
        ],
    },
    AnimateMotion: {
        tag: "animateMotion",
        props: { keyPoints: "string", path: "string", rotate: "string" },
        docs: [
            "The SVG ``<animateMotion>`` element provides a way to define how an element moves along a motion path.",
        ],
    },
    AnimateTransform: {
        tag: "animateTransform",
        props: {},
        docs: [
            "The animateTransform element animates a transformation attribute on its target element, thereby allowing animations to control translation, scaling, rotation, and/or skewing.",
        ],
    },
    Circle: {
        tag: "circle",
        props: { cx: "number", cy: "number", r: "number", pathLength: "string" },
        docs: [
            "The ``<circle>`` SVG element is an SVG basic shape, used to draw circles based on a center point and a radius.",
        ],
    },
    ClipPath: {
        tag: "clipPath",
        props: { clipPathUnits: "string" },
        docs: [
            "The ``<clipPath>`` SVG element defines a clipping path, to be used by the clip-path property.",
            "A clipping path restricts the region to which paint can be applied. Conceptually, parts of the drawing that lie outside of the region bounded by the clipping path are not drawn.",
        ],
    },
    Defs: {
        tag: "defs",
        props: {},
        docs: [
            "The ``<defs>`` element is used to store graphical objects that will be used at a later time. Objects created inside a ``<defs>`` element are not rendered directly. To display them you have to reference them (with a ``<use>`` element for example).",
            "Graphical objects can be referenced from anywhere, however, defining these objects inside of a ``<defs>`` element promotes understandability of the SVG content and is beneficial to the overall accessibility of the document.",
        ],
    },
    Desc: {
        tag: "desc",
        props: {},
        docs: [
            "The ``<desc>`` element provides an accessible, long-text description of any SVG container element or graphics element.",
            "Text in a ``<desc>`` element is not rendered as part of the graphic. If the element can be described by visible text, it is possible to reference that text with the aria-describedby attribute. If aria-describedby is used, it will take precedence over ``<desc>``.",
            "The hidden text of a ``<desc>`` element can also be concatenated with the visible text of other elements using multiple IDs in an aria-describedby value. In that case, the <desc> element must provide an ID for reference.",
        ],
    },
    Discard: {
        tag: "discard",
        props: {},
        docs: [
            "The ``<discard>`` SVG element allows authors to specify the time at which particular elements are to be discarded, thereby reducing the resources required by an SVG user agent. This is particularly useful to help SVG viewers conserve memory while displaying long-running documents.",
            "The ``<discard>`` element may occur wherever the <animate> element may.",
        ],
    },
    Ellipse: {
        tag: "ellipse",
        props: { cx: "number", cy: "number", rx: "number", ry: "number", pathLength: "string" },
        docs: [
            "The ``<ellipse>`` element is an SVG basic shape, used to create ellipses based on a center coordinate, and both their x and y radius.",
        ],
    },
    FeBlend: {
        tag: "feBlend",
        props: {
            in: "string",
            in2: "string",
            mode: "string",
        },
        docs: [
            "The ``<feBlend>`` SVG filter primitive composes two objects together ruled by a certain blending mode. This is similar to what is known from image editing software when blending two layers. The mode is defined by the mode attribute.",
        ],
    },
    FeColorMatrix: {
        tag: "feColorMatrix",
        props: { in: "string", type: "string", values: "string" },
        docs: [
            "The ``<feColorMatrix>`` SVG filter element changes colors based on a transformation matrix. Every pixel's color value [R,G,B,A] is matrix multiplied by a 5 by 5 color matrix to create new color [R',G',B',A'].",
        ],
    },
    FeComponentTransfer: {
        tag: "feComponentTransfer",
        props: {},
        docs: [
            "The ``<feComponentTransfer>`` SVG filter primitive performs color-component-wise remapping of data for each pixel. It allows operations like brightness adjustment, contrast adjustment, color balance or thresholding.",
            "The calculations are performed on non-premultiplied color values. The colors are modified by changing each channel (R, G, B, and A) to the result of what the children ``<feFuncR>``, ``<feFuncB>``, ``<feFuncG>``, and ``<feFuncA>`` return.",
        ],
    },
    FeComposite: {
        tag: "feComposite",
        props: { in: "string" },
        docs: [
            "The ``<feComposite>`` SVG filter primitive performs the combination of two input images pixel-wise in image space using one of the Porter-Duff compositing operations: over, in, atop, out, xor, lighter, or arithmetic.",
        ],
    },
    FeConvolveMatrix: {
        tag: "feConvolveMatrix",
        props: {
            in: "string",
            order: "string",
            kernelMatrix: "string",
            bias: "string",
            targetX: "string",
            targetY: "string",
            edgeMode: "string",
            kernelUnitLength: "string",
            preserveAlpha: "string",
        },
        docs: [
            "The ``<feConvolveMatrix>`` SVG filter primitive applies a matrix convolution filter effect. A convolution combines pixels in the input image with neighboring pixels to produce a resulting image. A wide variety of imaging operations can be achieved through convolutions, including blurring, edge detection, sharpening, embossing and beveling.",
        ],
    },
    FeDiffuseLighting: {
        tag: "feDiffuseLighting",
        props: {},
        docs: [
            "The ``<feDiffuseLighting>`` SVG filter primitive lights an image using the alpha channel as a bump map. The resulting image, which is an RGBA opaque image, depends on the light color, light position and surface geometry of the input bump map.",
        ],
    },
    FeDisplacementMap: {
        tag: "feDisplacementMap",
        props: {},
        docs: [
            "The ``<feDisplacementMap>`` SVG filter primitive uses the pixel values from the image from in2 to spatially displace the image from in.",
            "The formula for the transformation looks like this:",
            "",
            "``P'(x,y) ← P(x + scale * (XC(x,y) - 0.5), y + scale * (YC(x,y) - 0.5))``",
            "where P(x,y) is the input image, in, and P'(x,y) is the destination. XC(x,y) and YC(x,y) are the component values of the channel designated by xChannelSelector and yChannelSelector.",
        ],
    },
    FeDistantLight: {
        tag: "feDistantLight",
        props: {},
        docs: [
            "The ``<feDistantLight>`` filter primitive defines a distant light source that can be used within a lighting filter primitive: ``<feDiffuseLighting>`` or ``<feSpecularLighting>``.",
        ],
    },
    FeDropShadow: {
        tag: "feDropShadow",
        props: {
            id: "string",
            surfaceScale: "string",
            diffuseConstant: "string",
            kernelUnitLength: "string",
        },
        docs: [
            "The SVG ``<feDropShadow>`` filter primitive creates a drop shadow of the input image. It can only be used inside a ``<filter>`` element.",
        ],
    },
    FeFlood: {
        tag: "feFlood",
        props: { floodColor: "string", floodOpacity: "string" },
        docs: [
            "The ``<feFlood>`` SVG filter primitive fills the filter subregion with the color and opacity defined by flood-color and flood-opacity.",
        ],
    },
    FeFuncA: {
        tag: "feFuncA",
        props: {},
        docs: [
            "The ``<feFuncA>`` SVG filter primitive defines the transfer function for the alpha component of the input graphic of its parent ``<feComponentTransfer>`` element.",
        ],
    },
    FeFuncB: {
        tag: "feFuncB",
        props: {},
        docs: [
            "The ``<feFuncB>`` SVG filter primitive defines the transfer function for the blue component of the input graphic of its parent ``<feComponentTransfer>`` element.",
        ],
    },
    FeFuncG: {
        tag: "feFuncG",
        props: {},
        docs: [
            "The ``<feFuncG>`` SVG filter primitive defines the transfer function for the green component of the input graphic of its parent ``<feComponentTransfer>`` element.",
        ],
    },
    FeFuncR: {
        tag: "feFuncR",
        props: {},
        docs: [
            "The ``<feFuncR>`` SVG filter primitive defines the transfer function for the red component of the input graphic of its parent ``<feComponentTransfer>`` element.",
        ],
    },
    FeGaussianBlur: {
        tag: "feGaussianBlur",
        props: {
            in: "string",
            stdDeviation: "string",
            edgeMode: "string",
        },
        docs: [
            "The ``<feGaussianBlur>`` SVG filter primitive blurs the input image by the amount specified in stdDeviation, which defines the bell-curve.",
        ],
    },
    FeImage: {
        tag: "feImage",
        props: { preserveAspectRatio: "string", xLinkHref: "string" },
        docs: [
            "The ``<feImage>`` SVG filter primitive fetches image data from an external source and provides the pixel data as output (meaning if the external source is an SVG image, it is rasterized.)",
        ],
    },
    FeMerge: {
        tag: "feMerge",
        props: {},
        docs: [
            "The ``<feMerge>`` SVG element allows filter effects to be applied concurrently instead of sequentially. This is achieved by other filters storing their output via the result attribute and then accessing it in a ``<feMergeNode>`` child.",
        ],
    },
    FeMergeNode: {
        tag: "feMergeNode",
        props: { in: "string" },
        docs: [
            "The feMergeNode takes the result of another filter to be processed by its parent ``<feMerge>``.",
        ],
    },
    FeMorphology: {
        tag: "feMorphology",
        props: {
            in: "string",
            operator: "string",
            radius: "string",
        },
        docs: [
            "The ``<feMorphology>`` SVG filter primitive is used to erode or dilate the input image. Its usefulness lies especially in fattening or thinning effects.",
        ],
    },
    FeOffset: {
        tag: "feOffset",
        props: { in: "string", dx: "string", dy: "string" },
        docs: [
            "The ``<feOffset>`` SVG filter primitive allows to offset the input image. The input image as a whole is offset by the values specified in the dx and dy attributes.",
        ],
    },
    FePointLight: {
        tag: "fePointLight",
        props: { x: "string", y: "string", z: "string" },
        docs: [
            "The ``<fePointLight>`` filter primitive defines a light source which allows to create a point light effect. It that can be used within a lighting filter primitive: ``<feDiffuseLighting>`` or ``<feSpecularLighting>``.",
        ],
    },
    FeSpecularLighting: {
        tag: "feSpecularLighting",
        props: {
            in: "string",
            surfaceScale: "string",
            specularConstant: "string",
            specularExponent: "string",
            kernelUnitLength: "string",
        },
        docs: [
            "The ``<feSpecularLighting>`` SVG filter primitive lights a source graphic using the alpha channel as a bump map. The resulting image is an RGBA image based on the light color. The lighting calculation follows the standard specular component of the Phong lighting model. The resulting image depends on the light color, light position and surface geometry of the input bump map. The result of the lighting calculation is added. The filter primitive assumes that the viewer is at infinity in the z direction.",
        ],
    },
    FeSpotLight: {
        tag: "feSpotLight",
        props: {
            x: "string",
            y: "string",
            z: "string",
            pointAtX: "string",
            pointAtY: "string",
            pointAtZ: "string",
            specularExponent: "string",
            limitingConeAngle: "string",
        },
        docs: [
            "The ``<feSpotLight>`` SVG filter primitive defines a light source that can be used to create a spotlight effect. It is used within a lighting filter primitive: <feDiffuseLighting> or ``<feSpecularLighting>``.",
        ],
    },
    FeTile: {
        tag: "feTile",
        props: { in: "string" },
        docs: [
            "The ``<feTile>`` SVG filter primitive allows to fill a target rectangle with a repeated, tiled pattern of an input image. The effect is similar to the one of a ``<pattern>``.",
        ],
    },
    FeTurbulence: {
        tag: "feTurbulence",
        props: {
            baseFrequency: "string",
            numOctaves: "string",
            seed: "string",
            stitchTiles: "string",
            type: "string",
        },
        docs: [
            "The ``<feTurbulence>`` SVG filter primitive creates an image using the Perlin turbulence function. It allows the synthesis of artificial textures like clouds or marble. The resulting image will fill the entire filter primitive subregion.",
        ],
    },
    Filter: {
        tag: "filter",
        props: {
            x: "string",
            y: "string",
            width: "string",
            height: "string",
            filterRes: "string",
            filterUnits: "string",
            primitiveUnits: "string",
            xLinkHref: "string",
        },
        docs: [
            "The ``<filter>`` SVG element defines a custom filter effect by grouping atomic filter primitives. It is never rendered itself, but must be used by the filter attribute on SVG elements, or the filter CSS property for SVG/HTML elements.",
        ],
    },
    ForeignObject: {
        tag: "foreignObject",
        props: { height: "string", width: "string", x: "string", y: "string" },
        docs: [
            "The ``<foreignObject>`` SVG element includes elements from a different XML namespace. In the context of a browser, it is most likely (X)HTML.",
        ],
    },
    G: {
        tag: "g",
        props: {},
        docs: [
            "The ``<g>`` SVG element is a container used to group other SVG elements.",
            "Transformations applied to the ``<g>`` element are performed on its child elements, and its attributes are inherited by its children. It can also group multiple elements to be referenced later with the ``<use>`` element.",
        ],
    },
    Hatch: { tag: "hatch", props: {} },
    Hatchpath: { tag: "hatchpath", props: {} },
    Image: {
        tag: "image",
        props: {
            x: "string",
            y: "string",
            width: "string",
            height: "string",
            href: "string",
            xLinkHref: "string",
            preserveAspectRatio: "string",
            crossOrigin: "string",
        },
        docs: [
            "The ``<image>`` SVG element includes images inside SVG documents. It can display raster image files or other SVG files.",
            "The only image formats SVG software must support are JPEG, PNG, and other SVG files. Animated GIF behavior is undefined.",
            "SVG files displayed with ``<image>`` are treated as an image: external resources aren't loaded, :visited styles aren't applied, and they cannot be interactive. To include dynamic SVG elements, try ``<use>`` with an external URL. To include SVG files and run scripts inside them, try ``<object>`` inside of ``<foreignObject>``.",
        ],
    },
    Line: {
        tag: "line",
        props: { x1: "string", x2: "string", y1: "string", y2: "string", pathLength: "string" },
        docs: [
            "The ``<line>`` element is an SVG basic shape used to create a line connecting two points.",
        ],
    },
    LinearGradient: {
        tag: "linearGradient",
        props: {
            gradientUnits: "string",
            gradientTransform: "string",
            href: "string",
            spreadMethod: "string",
            x1: "string",
            x2: "string",
            y1: "string",
            y2: "string",
        },
        docs: [
            "The ``<linearGradient>`` element lets authors define linear gradients to apply to other SVG elements.",
        ],
    },
    Marker: {
        tag: "marker",
        props: {
            markerHeight: "string",
            markerUnits: "string",
            markerWidth: "string",
            orient: "string",
            preserveAspectRatio: "string",
            refX: "string",
            refY: "string",
            viewBox: "string",
        },
        docs: [
            "The ``<marker>`` element defines the graphic that is to be used for drawing arrowheads or polymarkers on a given ``<path>``, ``<line>``, ``<polyline>`` or ``<polygon>`` element.",
            "Markers are attached to shapes using the marker-start, marker-mid, and marker-end properties.",
        ],
    },
    Mask: {
        tag: "mask",
        props: {
            height: "string",
            maskContentUnits: "string",
            maskUnits: "string",
            x: "string",
            y: "string",
            width: "string",
        },
        docs: [
            "The ``<mask>`` element defines an alpha mask for compositing the current object into the background. A mask is used/referenced using the mask property.",
        ],
    },
    Metadata: {
        tag: "metadata",
        props: {},
        docs: [
            "The ``<metadata>`` SVG element adds metadata to SVG content. Metadata is structured information about data. The contents of ``<metadata>`` should be elements from other XML namespaces such as RDF, FOAF, etc.",
        ],
    },
    Mpath: {
        tag: "mpath",
        props: { xLinkHref: "string" },
        docs: [
            "The ``<mpath>`` sub-element for the <animateMotion> element provides the ability to reference an external ``<path>`` element as the definition of a motion path.",
        ],
    },
    Path: {
        tag: "path",
        props: { d: "string", pathLength: "string" },
        docs: [
            "The ``<path>`` SVG element is the generic element to define a shape. All the basic shapes can be created with a path element.",
        ],
    },
    Pattern: {
        tag: "pattern",
        props: {
            height: "string",
            href: "string",
            patternContentUnits: "string",
            patternTransform: "string",
            preserveAspectRatio: "string",
            viewBox: "string",
            x: "string",
        },
        docs: [
            'The ``<pattern>`` element defines a graphics object which can be redrawn at repeated x- and y-coordinate intervals ("tiled") to cover an area.',
            "The ``<pattern>`` is referenced by the fill and/or stroke attributes on other graphics elements to fill or stroke those elements with the referenced pattern.",
        ],
    },
    Polygon: {
        tag: "polygon",
        props: { points: "string", pathLength: "string" },
        docs: [
            "The ``<polygon>`` element defines a closed shape consisting of a set of connected straight line segments. The last point is connected to the first point.",
            "For open shapes, see the ``<polyline>`` element.",
        ],
    },
    Polyline: {
        tag: "polyline",
        props: { points: "string", pathLength: "string" },
        docs: [
            "The ``<polyline>`` SVG element is an SVG basic shape that creates straight lines connecting several points. Typically a polyline is used to create open shapes as the last point doesn't have to be connected to the first point. For closed shapes see the ``<polygon>`` element.",
        ],
    },
    RadialGradient: {
        tag: "radialGradient",
        props: {
            cx: "string",
            cy: "string",
            fr: "string",
            fx: "string",
            fy: "string",
            gradientUnits: "string",
            gradientTransform: "string",
            href: "string",
            r: "string",
            spreadMethod: "string",
        },
        docs: [
            "The ``<radialGradient>`` element lets authors define radial gradients that can be applied to fill or stroke of graphical elements.",
        ],
    },
    Rect: {
        tag: "rect",
        props: {
            x: "string",
            y: "string",
            width: "string",
            height: "string",
            rx: "string",
            ry: "string",
            pathLength: "string",
        },
        docs: [
            "The ``<rect>`` element is a basic SVG shape that draws rectangles, defined by their position, width, and height. The rectangles may have their corners rounded.",
        ],
    },
    Set: {
        tag: "set",
        props: { to: "string" },
        docs: [
            "The SVG ``<set>`` element provides a simple means of just setting the value of an attribute for a specified duration.",
        ],
    },
    Stop: {
        tag: "stop",
        props: { stopColor: "string", stopOpacity: "string" },
        docs: [
            "The SVG ``<stop>`` element defines a color and its position to use on a gradient. This element is always a child of a ``<linearGradient>`` or ``<radialGradient>`` element.",
        ],
    },
    Svg: {
        tag: "svg",
        props: {
            height: "string",
            preserveAspectRatio: "string",
            viewBox: "string",
            width: "string",
            x: "string",
            y: "string",
        },
        docs: [
            "The svg element is a container that defines a new coordinate system and viewport. It is used as the outermost element of SVG documents, but it can also be used to embed an SVG fragment inside an SVG or HTML document.",
        ],
    },
    Switch: {
        tag: "switch",
        props: {},
        docs: [
            "The ``<switch>`` SVG element evaluates any requiredFeatures, requiredExtensions and systemLanguage attributes on its direct child elements in order, and then renders the first child where these attributes evaluate to true.",
        ],
    },
    Symbol: {
        tag: "symbol",
        props: {
            height: "string",
            preserveAspectRatio: "string",
            refX: "string",
            refY: "string",
            viewBox: "string",
            width: "string",
            x: "string",
            y: "string",
        },
        docs: [
            "The ``<symbol>`` element is used to define graphical template objects which can be instantiated by a ``<use>`` element.",
        ],
    },
    Text: {
        tag: "text",
        props: {
            x: "string",
            y: "string",
            dx: "string",
            dy: "string",
            rotate: "string",
            lengthAdjust: "string",
            textLength: "string",
        },
        docs: [
            "The SVG ``<text>`` element draws a graphics element consisting of text. It's possible to apply a gradient, pattern, clipping path, mask, or filter to <text>, like any other SVG graphics element.",
        ],
    },
    TextPath: {
        tag: "textPath",
        props: {
            href: "string",
            lengthAdjust: "string",
            method: "string",
            path: "string",
            side: "string",
            spacing: "string",
            startOffset: "string",
            textLength: "string",
        },
        docs: [
            "To render text along the shape of a ``<path>``, enclose the text in a <textPath> element that has an href attribute with a reference to the ``<path>`` element.",
        ],
    },
    Title: {
        tag: "title",
        props: {},
        docs: [
            "The ``<title>`` element provides an accessible, short-text description of any SVG container element or graphics element.",
        ],
    },
    Tspan: {
        tag: "tspan",
        props: {
            x: "string",
            y: "string",
            dx: "string",
            dy: "string",
            rotate: "string",
            lengthAdjust: "string",
            textLength: "string",
        },
        docs: [
            "The SVG ``<tspan>`` element defines a subtext within a ``<text>`` element or another ``<tspan>`` element. It allows for adjustment of the style and/or position of that subtext as needed.",
        ],
    },
    Use: {
        tag: "use",
        props: {
            href: "string",
            xLinkHref: "string",
            x: "string",
            y: "string",
            width: "string",
            height: "string",
        },
        docs: [
            "The ``<use>`` element takes nodes from within the SVG document, and duplicates them somewhere else.",
        ],
    },
    View: {
        tag: "view",
        props: {},
        docs: ["A view is a defined way to view the image, like a zoom level or a detail view."],
    },
};

module.exports = { items: Elements };
