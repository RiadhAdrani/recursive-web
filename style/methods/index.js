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
 * CSS's `attr()`
 * @param {*} attribute
 * @returns
 */
export function attr(attribute) {
    return `attr(${attribute})`;
}

/**
 * CSS's ``blur()``
 * @param {*} radius
 * @returns
 */
export function blur(radius) {
    return `blur(${radius})`;
}

/**
 * CSS's `brightness()`
 * @param {*} amount
 * @returns
 */
export function brightness(amount) {
    return `brightness(${amount})`;
}

/**
 * CSS's `calc()`
 * @param  {...any} args
 * @returns
 */
export function calc(...args) {
    return `calc(${joinArgs(args)})`;
}

/**
 * CSS's `inset()`
 * @param  {...any} args
 * @returns
 */
export function inset(...args) {
    return `inset(${joinArgs(args)})`;
}

/**
 * CSS's `circle()`
 * @param  {...any} args
 * @returns
 */
export function circle(...args) {
    return `circle(${joinArgs(args)})`;
}

/**
 * CSS's `ellipse()`
 * @param  {...any} args
 * @returns
 */
export function ellipse(...args) {
    return `ellipse(${joinArgs(args)})`;
}

/**
 * CSS's `polygon()`
 * @param  {...any} args
 * @returns
 */
export function polygon(...args) {
    return `polygon(${joinArgs(args, ", ")})`;
}

/**
 * CSS's `clamp()`
 * @param {*} min
 * @param {*} val
 * @param {*} max
 * @returns
 */
export function clamp(min, val, max) {
    return `clamp(${joinArgs([min, val, max], ", ")})`;
}

/**
 * CSS's `rgb()`
 * @param {*} r
 * @param {*} g
 * @param {*} b
 * @returns
 */
export function rgb(r, g, b) {
    return `rgb(${joinArgs([r, g, b], ", ")})`;
}

/**
 * CSS's `rgba()`
 * @param {*} r
 * @param {*} g
 * @param {*} b
 * @param {*} a
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
export function matrix3D(a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4) {
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
    return `trnaslate(${x}, ${y})`;
}

/**
 * CSS's `translate3d()`
 * @param {*} tx
 * @param {*} ty
 * @param {*} tz
 * @returns
 */
export function translate3D(tx, ty, tz) {
    return `trnaslate3d(${joinArgs([tx, ty, tz], ", ")})`;
}

/**
 * CSS's `translateX()`
 * @param {*} x
 * @returns
 */
export function translateX(x) {
    return `trnaslateX(${x})`;
}

/**
 * CSS's `translateY()`
 * @param {*} y
 * @returns
 */
export function translateY(y) {
    return `trnaslateY(${y})`;
}

/**
 * CSS's `translateZ()`
 * @param {*} z
 * @returns
 */
export function translateZ(z) {
    return `trnaslateZ(${z})`;
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
    return `var('--${id}')`;
}

/**
 * Return a valid value for edge-related properties like `margin` or `padding`.
 * Possible values :
 * * `string` - '10px'
 * * `axes` - {vertical, horizontal}
 * * `sides` - {top, right, bottom, left}
 * @param {import("../../lib").Edges} input
 */
export function edges(input) {
    if (![input.top, input.right, input.bottom, input.left].includes(undefined)) {
        return [input.top, input.right, input.bottom, input.left];
    }

    if (![input.vertical, input.horizontal].includes(undefined)) {
        return [input.vertical, input.horizontal];
    }

    return input;
}

/**
 * Return a valid value for corner-related properties like `border-radius`.
 *
 * Possible values :
 *
 * _note that all keys/values are necessary for each case._
 *
 * * `string` - _string_ - `10px`
 * * `vertical sides` - _object_ - `top` `bottom`
 * * `horizontal sides` - _object_ - `left` `right`
 * * `diagonal` - _object_ - `topLeftBottomRight` `topRightBottomLeft`
 * * `corners` - _object_ - `topLeft` `topRight` `bottomRight` `bottomLeft`
 * @param {import("../../lib").Corners} input
 */
export function corners(input) {
    if (![input.topLeft, input.topRight, input.bottomLeft, input.Right].includes(undefined)) {
        return [input.topLeft, input.topRight, input.bottomRight, input.bottomLeft];
    }

    if (![input.top, input.bottom].includes(undefined)) {
        return [input.top, input.top, input.bottom, input.bottom];
    }

    if (![input.left, input.right].includes(undefined)) {
        return [input.left, input.right, input.right, input.left];
    }

    if (![input.topLeftBottomRight, input.topRightBottomLeft].includes(undefined)) {
        return [input.topLeftBottomRight, input.topRightBottomLeft];
    }

    return input;
}
