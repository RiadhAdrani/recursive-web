/**
 * Join arguments using the seperator.
 * @param {Array<any>} args array of arguments to be joined.
 * @param {string} seperator "space" by default.
 * @returns
 */
function joinArgs(args = [], seperator = " ") {
    return args.reduce((sum, val, index) => {
        let toAdd = "";

        if (Array.isArray(val)) {
            toAdd = joinArgs(val);
        } else {
            toAdd = val;
        }

        toAdd += index == args.length - 1 ? "" : seperator;

        return sum + toAdd;
    }, "");
}

/**
 * Return the first defined value, else returns undefined.
 * @param {Array} arrayOfValues array of values
 * @returns {any | undefined}
 */
function getFirstDefinedValue(arrayOfValues) {
    for (let val of arrayOfValues) {
        if (val != undefined) return val;
    }

    return undefined;
}

/**
 * CSS's `attr()`
 *
 * Retrieve the value of the designed HTML ``attribute``.
 * @param {string} attribute a string representing the name of the target attribute.
 */
export function attr(attribute) {
    return `attr(${attribute})`;
}

/**
 * CSS's ``blur()``
 *
 * Apply gaussian blur to the element using `filter` property.
 * @param {string} radius a value with ``<css-unit>``.
 */
export function blur(radius) {
    return `blur(${radius})`;
}

/**
 * CSS's `brightness()`
 *
 * Apply a linear multiplier to the element
 * which will make it appear brighter or darker
 * depending on the input.
 * @param {string} amount brightness as a `number` or `percentage`.
 */
export function brightness(amount) {
    return `brightness(${amount})`;
}

/**
 * CSS's `calc()`
 *
 * Perform calculation when specifiying CSS property values.
 *
 * allowed operators:
 * * `+`
 * * `-`
 * * `*`
 * * `/`
 * @param  {...any} args a list of css values seperated by `operators`.
 * @example
 * calc("1px","+","10%","-","2em");
 */
export function calc(...args) {
    return `calc(${joinArgs(args)})`;
}

/**
 * CSS's `inset()`
 *
 * Define an inset rectangle.
 * @param  {...any} args values should be as following:
 * * `<length-percentage>{1,4}` :
 * When all of the four arguments are supplied
 * they represent the top, right, bottom and left offsets
 * from the reference box inward that define the positions
 * of the edges of the inset rectangle.
 * These arguments follow the syntax of the margin shorthand,
 * that let you set all four insets with one, two or four values.
 * * `<border-radius>` :
 * The optional ``<border-radius>`` argument(s)
 * define rounded corners for the inset rectangle
 * using the border-radius shorthand syntax.
 *
 * @example
 * inset("20px", "50px", "10px", 0, "round", "50px");
 *
 * @more https://developer.mozilla.org/en-US/docs/Web/CSS/basic-shape/inset
 */
export function inset(...args) {
    return `inset(${joinArgs(args)})`;
}

/**
 * CSS's `circle()`
 *
 * Defines a circle using a radius and a position.
 * @param  {...any} args arguments:
 * * `<shape-radius>` :
 * This may be a length,
 * or a percentage or values closest-side and farthest-side.
 * * `<position>` :
 * Moves the center of the circle.
 * May be a length, or a percentage, or a values such as left.
 *
 * @example circle("50px");
 * @example circle("6rem", "at", "right", "center");
 * @example circle("10%" "at", "2rem", "90%");
 * @example circle("closest-side", "at", "5rem", "6rem");
 * @example circle("farthest-side");
 */
export function circle(...args) {
    return `circle(${joinArgs(args)})`;
}

/**
 * CSS's `ellipse()`
 *
 * Defines an ellipse using two radii and a position.
 * @param  {...any} args
 */
export function ellipse(...args) {
    return `ellipse(${joinArgs(args)})`;
}

/**
 * CSS's `polygon()`
 *
 * Defines a polygon using an SVG fill-rule and a set of vertices.
 * @param  {...any} args
 */
export function polygon(...args) {
    return `polygon(${joinArgs(args, ", ")})`;
}

/**
 * CSS's `clamp()`
 *
 * The clamp() CSS function clamps a value between an upper and lower bound.
 * @param {string | number} min
 * @param {string | number} val
 * @param {string | number} max
 */
export function clamp(min, val, max) {
    return `clamp(${joinArgs([min, val, max], ", ")})`;
}

/**
 * CSS's `rgb()`
 *
 * The rgb() functional notation expresses a color
 * according to its red, green, and blue components.
 * An optional alpha component represents the color's transparency.
 * @param {number} r
 * @param {number} g
 * @param {number} b
 */
export function rgb(r, g, b) {
    return `rgb(${joinArgs([r, g, b], ", ")})`;
}

/**
 * CSS's `rgba()`
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} a
 * @returns
 */
export function rgba(r, g, b, a) {
    return `rgba(${joinArgs([r, g, b, a], ", ")})`;
}

/**
 * CSS's `hsl()`
 * @param {*} h
 * @param {*} s
 * @param {*} l
 * @returns
 */
export function hsl(h, s, l) {
    return `hsl(${joinArgs([h, s, l], ", ")})`;
}

/**
 * CSS's `hsla()`
 * @param {*} h
 * @param {*} s
 * @param {*} l
 * @param {*} a
 * @returns
 */
export function hsla(h, s, l, a) {
    return `hsla(${joinArgs([h, s, l, a], ", ")})`;
}

/**
 * CSS's `hwb()`
 * @param {*} h
 * @param {*} w
 * @param {*} b
 * @param {*} a
 * @returns
 */
export function hwb(h, w, b, a) {
    return `hwb(${joinArgs([h, w, b, a], " ")})`;
}

/**
 * CSS's `conic-gradient()`
 * @param  {...any} args
 * @returns
 */
export function conicGradient(...args) {
    return `conic-gradient(${joinArgs(args, ", ")})`;
}

/**
 * CSS's `contrast()`
 * @param {*} amount
 * @returns
 */
export function contrast(amount) {
    return `contrast(${amount})`;
}

/**
 * CSS's `counter()`
 * @param {*} ident
 * @param {*} style
 * @returns
 */
export function counter(ident, style = "") {
    return `counter(${ident}${style ? "," + style : ""})`;
}

/**
 * CSS's `counters`
 * @param {*} name
 * @param {*} style
 * @param {*} string
 * @returns
 */
export function counters(name, style, string) {
    return `counters(${joinArgs([name, style, string], ", ")})`;
}

/**
 * CSS's `cross-fade()`
 * @param  {...any} args
 * @returns
 */
export function crossFade(...args) {
    return `cross-fade(${joinArgs(args, ", ")})`;
}

/**
 * CSS's `cubic-bezier()`
 * @param {*} x1
 * @param {*} y1
 * @param {*} x2
 * @param {*} y2
 * @returns
 */
export function cubicBezier(x1, y1, x2, y2) {
    return `cubic-bezier(${joinArgs([x1, y1, x2, y2], ", ")})`;
}

/**
 * CSS's `steps()`
 * @param {*} number
 * @param {*} direction
 * @returns
 */
export function steps(number, direction) {
    return `steps(${joinArgs([number, direction], ", ")})`;
}

/**
 * CSS's `env()`
 * @param {*} id
 * @returns
 */
export function getEnv(id) {
    return `env(${id})`;
}

/**
 * CSS's `drop-shadow()`
 * @param {*} offX
 * @param {*} offY
 * @param {*} blur
 * @param {*} color
 * @returns
 */
export function dropShadow(offX, offY, blur, color) {
    return `drop-shadow(${joinArgs([offX, offY, blur, color])})`;
}

/**
 * CSS's `fit-content()`
 * @param {*} value
 * @returns
 */
export function fitContent(value) {
    return `fit-content(${value})`;
}

/**
 * CSS's `format()`
 * @param {*} type
 * @returns
 */
export function format(type) {
    return `format(${type})`;
}

/**
 * CSS's `grayscale()`
 * @param {*} amount
 * @returns
 */
export function grayScale(amount) {
    return `grayscale(${amount})`;
}

/**
 * CSS's `hue-rotate()`
 * @param {*} angle
 * @returns
 */
export function hueRotate(angle) {
    return `hue-rotate(${angle})`;
}

/**
 * CSS's `invert()`
 * @param {*} amount
 * @returns
 */
export function invert(amount) {
    return `invert(${amount})`;
}

/**
 * CSS's `linear-gradient()`
 * @param  {...any} args
 * @returns
 */
export function linearGradient(...args) {
    return `linear-gradient(${joinArgs(args, ", ")})`;
}

/**
 * CSS's `matrix()`
 * @param {*} a
 * @param {*} b
 * @param {*} c
 * @param {*} d
 * @param {*} tx
 * @param {*} ty
 * @returns
 */
export function matrix(a, b, c, d, tx, ty) {
    return `matrix(${joinArgs([a, b, c, d, tx, ty], ", ")})`;
}

/**
 * CSS's `matrix3d()`
 * @param {*} a1
 * @param {*} b1
 * @param {*} c1
 * @param {*} d1
 * @param {*} a2
 * @param {*} b2
 * @param {*} c2
 * @param {*} d2
 * @param {*} a3
 * @param {*} b3
 * @param {*} c3
 * @param {*} d3
 * @param {*} a4
 * @param {*} b4
 * @param {*} c4
 * @param {*} d4
 * @returns
 */
export function matrix3D(
    a1,
    b1,
    c1,
    d1,
    a2,
    b2,
    c2,
    d2,
    a3,
    b3,
    c3,
    d3,
    a4,
    b4,
    c4,
    d4
) {
    return `matrix3d(${joinArgs(
        [a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4],
        ", "
    )})`;
}

/**
 * CSS's `max()`
 * @param {*} v1
 * @param {*} v2
 * @returns
 */
export function max(v1, v2) {
    return `max(${v1}, ${v2})`;
}

/**
 * CSS's `min()`
 * @param {*} v1
 * @param {*} v2
 * @returns
 */
export function min(v1, v2) {
    return `min(${v1}, ${v2})`;
}

/**
 * CSS's `minmax()`
 * @param {*} v1
 * @param {*} v2
 * @returns
 */
export function minmax(v1, v2) {
    return `minmax(${v1}, ${v2})`;
}

/**
 * CSS's `opacity()`
 * @param {*} amount
 * @returns
 */
export function opacity(amount) {
    return `opacity(${amount})`;
}

/**
 * CSS's `path()`
 * @param {*} string
 * @param {*} fillRule
 * @returns
 */
export function path(string, fillRule) {
    return `counter(${fillRule ? fillRule + ", " : ""}${string})`;
}

/**
 * CSS's `perspective()`
 * @param {*} d
 * @returns
 */
export function perspective(d) {
    return `perspective(${d})`;
}

/**
 * CSS's `radial-gradient()`
 * @param  {...any} args
 * @returns
 */
export function radialGradient(...args) {
    return `radial-gradient(${joinArgs(args, ", ")})`;
}

/**
 * CSS's `repeat()`
 * @param {*} count
 * @param {*} value
 * @returns
 */
export function repeat(count, value) {
    return `repeat(${joinArgs([count, value], ", ")})`;
}

/**
 * CSS's `repeating-linear-gradient()`
 * @param  {...any} args
 * @returns
 */
export function repeatingLinearGradient(...args) {
    return `repeating-linear-gradient(${joinArgs(args, ", ")})`;
}

/**
 * CSS's `repeating-radial-gradiant`
 * @param  {...any} args
 * @returns
 */
export function repeatingRadialGradient(...args) {
    return `repeating-radial-gradient(${joinArgs(args, ", ")})`;
}

/**
 * CSS's `rotate()`
 * @param {*} angle
 * @returns
 */
export function rotate(angle) {
    return `rotate(${angle})`;
}

/**
 * CSS's `rotate3d()`
 * @param {*} x
 * @param {*} y
 * @param {*} z
 * @param {*} a
 * @returns
 */
export function rotate3D(x, y, z, a) {
    return `rotate(${joinArgs([x, y, z, a], ", ")})`;
}

/**
 * CSS's `rotateX()`
 * @param {*} angle
 * @returns
 */
export function rotateX(angle) {
    return `rotateX(${angle})`;
}

/**
 * CSS's `rotateY()`
 * @param {*} angle
 * @returns
 */
export function rotateY(angle) {
    return `rotateY(${angle})`;
}

/**
 * CSS's `rotateZ()`
 * @param {*} angle
 * @returns
 */
export function rotateZ(angle) {
    return `rotateZ(${angle})`;
}

/**
 * CSS's `saturate()`
 * @param {*} amount
 * @returns
 */
export function saturate(amount) {
    return `saturate(${amount})`;
}

/**
 * CSS's `sepia()`
 * @param {*} amount
 * @returns
 */
export function sepia(amount) {
    return `sepia(${amount})`;
}

/**
 * CSS's `skew()`
 * @param {*} x
 * @param {*} y
 * @returns
 */
export function skew(x, y = x) {
    return `skew(${x}, ${y})`;
}

/**
 * CSS's `skewX()`
 * @param {*} x
 * @returns
 */
export function skewX(x) {
    return `skewX(${x})`;
}

/**
 * CSS's `skewY()`
 * @param {*} y
 * @returns
 */
export function skewY(y) {
    return `skewY(${y})`;
}

/**
 * CSS's `translate()`
 * @param {*} x
 * @param {*} y
 * @returns
 */
export function translate(x, y = x) {
    return `translate(${x}, ${y})`;
}

/**
 * CSS's `translate3d()`
 * @param {*} tx
 * @param {*} ty
 * @param {*} tz
 * @returns
 */
export function translate3D(tx, ty, tz) {
    return `translate3d(${joinArgs([tx, ty, tz], ", ")})`;
}

/**
 * CSS's `translateX()`
 * @param {*} x
 * @returns
 */
export function translateX(x) {
    return `translateX(${x})`;
}

/**
 * CSS's `translateY()`
 * @param {*} y
 * @returns
 */
export function translateY(y) {
    return `translateY(${y})`;
}

/**
 * CSS's `translateZ()`
 * @param {*} z
 * @returns
 */
export function translateZ(z) {
    return `translateZ(${z})`;
}

/**
 * CSS's `url()`
 * @param {*} url
 * @returns
 */
export function url(url) {
    return `url('${url}')`;
}

/**
 * CSS's `var()`
 * @param {*} id
 * @returns
 */
export function getVar(id) {
    return `var(--${id})`;
}

/**
 * CSS's `scale()`
 * @param {*} amount
 * @returns
 */
export function scale(amount) {
    return `scale(${amount})`;
}

/**
 * CSS's `scaleX()`
 * @param {*} amount
 * @returns
 */
export function scaleX(amount) {
    return `scaleX(${amount})`;
}

/**
 * Return a valid value for edge-related properties like `margin` or `padding`.
 *
 * Possible values :
 *
 * * `sides` : top, right, bottom, left
 * * `axes` : vertical, horizontal
 * * `string` : 10px
 *
 * @param {import("../../lib").Edges} input
 */
export function edges(input) {
    const str = typeof input === "string" ? input : "";

    let top = getFirstDefinedValue([input.top, input.vertical, str]);
    let right = getFirstDefinedValue([input.right, input.horizontal, str]);
    let bottom = getFirstDefinedValue([input.bottom, input.vertical, str]);
    let left = getFirstDefinedValue([input.left, input.horizontal, str]);

    return [top, right, bottom, left];
}

/**
 * Return a valid value for corner-related properties like `border-radius`.
 *
 * Possible values:
 *
 * * `corners` : topLeft, topRight, bottomRight, bottomLeft
 * * `horizontal sides` : left, right
 * * `vertical sides` :  top, bottom
 * * `diagonal` : topLeftBottomRight, topRightBottomLeft
 * * `string` : `10px`
 *
 * @param {import("../../lib").Corners} input
 */
export function corners(input) {
    const str = typeof input === "string" ? input : "";

    let topLeft = getFirstDefinedValue([
        input.topLeft,
        input.left,
        input.top,
        input.topLeftBottomRight,
        str,
    ]);

    let topRight = getFirstDefinedValue([
        input.topRight,
        input.right,
        input.top,
        input.topRightBottomLeft,
        str,
    ]);

    let bottomLeft = getFirstDefinedValue([
        input.bottomLeft,
        input.left,
        input.bottom,
        input.topRightBottomLeft,
        str,
    ]);

    let bottomRight = getFirstDefinedValue([
        input.bottomRight,
        input.right,
        input.bottom,
        input.topLeftBottomRight,
        str,
    ]);

    return [topRight, bottomRight, bottomLeft, topLeft];
}
