const Elements = {
    A: {
        tag: "a",
        props: { href: "string", hrefLang: "string", target: "string", type: "string" },
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
    },
    AnimateMotion: {
        tag: "animateMotion",
        props: { keyPoints: "string", path: "string", rotate: "string" },
    },
    AnimateTransform: { tag: "animateTransform", props: {} },
    Circle: {
        tag: "circle",
        props: { cx: "number", cy: "number", r: "number", pathLength: "string" },
    },
    ClipPath: { tag: "clipPath", props: { clipPathUnits: "string" } },
    Defs: { tag: "defs", props: {} },
    Desc: { tag: "desc", props: {} },
    Discard: { tag: "discard", props: {} },
    Ellipse: {
        tag: "ellipse",
        props: { cx: "number", cy: "number", rx: "number", ry: "number", pathLength: "string" },
    },
    FeBlend: { tag: "feBlend", props: { in: "string", in2: "string", mode: "string" } },
    FeColorMatrix: {
        tag: "feColorMatrix",
        props: { in: "string", type: "string", values: "string" },
    },
    FeComponentTransfer: { tag: "feComponentTransfer", props: {} },
    FeComposite: { tag: "feComposite", props: { in: "string" } },
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
    },
    FeDiffuseLighting: { tag: "feDiffuseLighting", props: {} },
    FeDisplacementMap: { tag: "feDisplacementMap", props: {} },
    FeDistantLight: { tag: "feDistantLight", props: {} },
    FeDropShadow: {
        tag: "feDropShadow",
        props: {
            id: "string",
            surfaceScale: "string",
            diffuseConstant: "string",
            kernelUnitLength: "string",
        },
    },
    FeFlood: {
        tag: "feFlood",
        props: { floodColor: "string", floodOpacity: "string" },
    },
    FeFuncA: { tag: "feFuncA", props: {} },
    FeFuncB: { tag: "feFuncB", props: {} },
    FeFuncG: { tag: "feFuncG", props: {} },
    FeFuncR: { tag: "feFuncR", props: {} },
    FeGaussianBlur: {
        tag: "feGaussianBlur",
        props: { in: "string", stdDeviation: "string", edgeMode: "string" },
    },
    FeImage: { tag: "feImage", props: { preserveAspectRatio: "string", xLinkHref: "string" } },
    FeMerge: { tag: "feMerge", props: {} },
    FeMergeNode: { tag: "feMergeNode", props: { in: "string" } },
    FeMorphology: {
        tag: "feMorphology",
        props: { in: "string", operator: "string", radius: "string" },
    },
    FeOffset: { tag: "feOffset", props: { in: "string", dx: "string", dy: "string" } },
    FePointLight: { tag: "fePointLight", props: { x: "string", y: "string", z: "string" } },
    FeSpecularLighting: {
        tag: "feSpecularLighting",
        props: {
            in: "string",
            surfaceScale: "string",
            specularConstant: "string",
            specularExponent: "string",
            kernelUnitLength: "string",
        },
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
    },
    FeTile: { tag: "feTile", props: { in: "string" } },
    FeTurbulence: {
        tag: "feTurbulence",
        props: {
            baseFrequency: "string",
            numOctaves: "string",
            seed: "string",
            stitchTiles: "string",
            type: "string",
        },
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
    },
    ForeignObject: {
        tag: "foreignObject",
        props: { height: "string", width: "string", x: "string", y: "string" },
    },
    G: { tag: "g", props: {} },
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
    },
    Line: {
        tag: "line",
        props: { x1: "string", x2: "string", y1: "string", y2: "string", pathLength: "string" },
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
    },
    Metadata: { tag: "metadata", props: {} },
    Mpath: { tag: "mpath", props: { xLinkHref: "string" } },
    Path: { tag: "path", props: { d: "string", pathLength: "string" } },
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
    },
    Polygon: { tag: "polygon", props: { points: "string", pathLength: "string" } },
    Polyline: { tag: "polyline", props: { points: "string", pathLength: "string" } },
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
    },
    Set: { tag: "set", props: { to: "string" } },
    Stop: { tag: "stop", props: { stopColor: "string", stopOpacity: "string" } },
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
    },
    Switch: { tag: "switch", props: {} },
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
    },
    Title: { tag: "title", props: {} },
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
    },
    View: { tag: "view", props: {} },
};

module.exports = Elements;
