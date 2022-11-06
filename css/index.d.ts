import { ObjectOf } from "@riadh-adrani/utility-js/types";
import { Selector } from "../types/selector";
import { MediaQuery, Selectors } from "../types/style";
import { Corners, Edges } from "../types/util";

/**
 * ## CSS's `attr()`
 *
 * Retrieve the value of the designed HTML ``attribute``.
 * @param attribute a string representing the name of the target attribute.
 */
export function attr(attribute: string): string;

/**
 * ## CSS's ``blur()``
 *
 * Apply gaussian blur to the element using `filter` property.
 * @param radius a value with ``<css-unit>``.
 */
export function blur(radius: string): string;

/**
 * ## CSS's `brightness()`
 *
 * Apply a linear multiplier to the element
 * which will make it appear brighter or darker
 * depending on the input.
 * @param amount brightness as a `number` or `percentage`.
 */
export function brightness(amount: string | number): string;

/**
 * ## CSS's `calc()`
 *
 * Perform calculation when specifying CSS property values.
 *
 * allowed operators:
 * * `+`
 * * `-`
 * * `*`
 * * `/`
 * @param  {...any} args a list of css values separated by `operators`.
 * @example
 * calc("1px","+","10%","-","2em");
 */
export function calc(...args: Array<string | number>): string;

/**
 * ## CSS's `inset()`
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
export function inset(...args: Array<string | number>): string;

/**
 * ## CSS's `circle()`
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
export function circle(...args: Array<string | number>): string;

/**
 * ## CSS's `ellipse()`
 *
 * Defines an ellipse using two radii and a position.
 * @param  {...any} args
 */
export function ellipse(...args: Array<string | number>): string;

/**
 * ## CSS's `polygon()`
 *
 * Defines a polygon using an SVG fill-rule and a set of vertices.
 * @param  {...any} args
 */
export function polygon(...args: Array<string | number>): string;

/**
 * ## CSS's `clamp()`
 *
 * The clamp() CSS function clamps a value between an upper and lower bound.
 * @param  min minimum value
 * @param val value to be clamped
 * @param max maximum value
 */
export function clamp(
    min: string | number,
    val: string | number,
    max: string | number
): string;

/**
 * ## CSS's `rgb()`
 *
 * The rgb() functional notation expresses a color
 * according to its red, green, and blue components.
 * An optional alpha component represents the color's transparency.
 * @param r red
 * @param g green
 * @param b blue
 */
export function rgb(r: number, g: number, b: number): string;

/**
 * ## CSS's `rgba()`
 *
 * The rgba() functional notation expresses a color according to its red, green, and blue components. An optional alpha component represents the color's transparency.
 *
 * @param r red
 * @param g green
 * @param b blue
 * @param a alpha
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgba
 */
export function rgba(r: number, g: number, b: number, a: number): string;

/**
 * ## CSS's `hsl()`
 *
 * The hsl() functional notation expresses an sRGB color according to its hue, saturation, and lightness components. An optional alpha component represents the color's transparency.
 *
 * @param h (hue) is an `<angle>` of the color circle given in degs, rads, grads, or turns in the CSS Color specification. When written as a unit-less `<number>`, it is interpreted as degrees, as specified in the CSS Color Level 3 specification. By definition, red=0deg=360deg, with the other colors spread around the circle, so green=120deg, blue=240deg, etc. As an <angle>, it implicitly wraps around such that -120deg=240deg, 480deg=120deg, -1turn=1turn, etc.
 * @param s A `<percentage>` where 100% is completely saturated, while 0% is completely unsaturated (gray).
 * @param l A `<percentage>` where 100% is white, 0% is black, and 50% is "normal".
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl
 */
export function hsl(h: number, s: number, l: number): string;

/**
 * ## CSS's `hsla()`
 *
 * The hsla() functional notation expresses a given color according to its hue, saturation, and lightness components. An optional alpha component represents the color's transparency.
 *
 * @param {*} h (hue) is an `<angle>` of the color circle given in degs, rads, grads, or turns in the CSS Color specification. When written as a unit-less `<number>`, it is interpreted as degrees, as specified in the CSS Color Level 3 specification. By definition, red=0deg=360deg, with the other colors spread around the circle, so green=120deg, blue=240deg, etc. As an `<angle>`, it implicitly wraps around such that -120deg=240deg, 480deg=120deg, -1turn=1turn, etc.
 * @param s 100% saturation is completely saturated, while 0% is completely unsaturated (gray).
 * @param l 100% lightness is white, 0% lightness is black, and 50% lightness is "normal."
 * @param a (alpha) can be a <number> between 0 and 1, or a <percentage>, where the number 1 corresponds to 100% (full opacity).
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsla
 */
export function hsla(h: number, s: number, l: number, a: number): string;

/**
 * ## CSS's `hwb()`
 *
 * The hwb() functional notation expresses a given color according to its hue, whiteness, and blackness. An optional alpha component represents the color's transparency.
 *
 * @param h (hue) is an `<angle>` of the color circle given in degs, rads, grads, or turns in the CSS Color specification. When written as a unit-less `<number>`, it is interpreted as degrees, as specified in the CSS Color Level 3 specification. By definition, red=0deg=360deg, with the other colors spread around the circle, so green=120deg, blue=240deg, etc. As an <angle>, it implicitly wraps around such that -120deg=240deg, 480deg=120deg, -1turn=1turn, etc.
 * @param w (whiteness) specifies the amount of white to mix in, as a percentage from 0% (no whiteness) to 100% (full whiteness).
 * @param b (blackness) specifies the amount of black to mix in, also from 0% (no blackness) to 100% (full blackness).
 * @param a (alpha) can be a `<number> `between 0 and 1, or a `<percentage>`, where the number 1 corresponds to 100% (full opacity).
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hwb
 */
export function hwb(h: number, w: number, b: number, a: number): string;

/**
 * ## CSS's `conic-gradient()`
 *
 * The conic-gradient() CSS function creates an image consisting of a gradient with color transitions rotated around a center point (rather than radiating from the center). Example conic gradients include pie charts and color wheels. The result of the conic-gradient() function is an object of the `<gradient> `data type, which is a special kind of `<image>`.
 *
 * @param  {...any} args
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/conic-gradient
 */
export function conicGradient(...args: Array<number | string>): string;

/**
 * ## CSS's `contrast()`
 *
 * The contrast() CSS function adjusts the contrast of the input image. Its result is a `<filter-function>`.
 *
 * @param amount The contrast of the result, specified as a `<number>` or a `<percentage>`. A value under 100% decreases the contrast, while a value over 100% increases it. A value of 0% will create an image that is completely gray, while a value of 100% leaves the input unchanged. The initial value for interpolation is 1.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/contrast
 */
export function contrast(amount: number): string;

/**
 * ## CSS's `counter()`
 *
 * The counter() CSS function returns a string representing the current value of the named counter, if there is one. It is generally used in the content property of pseudo-elements, but can theoretically be used anywhere a `<string>` value is supported.
 *
 * @param ident A name identifying the counter, which is the same case-sensitive name used for the counter-reset and counter-increment. The name cannot start with two dashes and can't be none, unset, initial, or inherit.
 * @param style A `<list-style-type>` name, `<@counter-style>` name or symbols() function, where a counter style name is a numeric, alphabetic, or symbolic simple predefined counter style, a complex longhand east Asian or Ethiopic predefined counter style, or other predefined counter style. If omitted, the counter-style defaults to decimal.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/counter
 */
export function counter(ident: string, style: string): string;

/**
 * ## CSS's `counters`
 *
 * The counters() CSS function enables nested counters, returning a concatenated string representing the current values of the named counters, if there are any. The counters() function has two forms: counters(name, string) or counters(name, string, style). It is generally used with pseudo-elements, but can be used, theoretically, anywhere a `<string>` value is supported. The generated text is the value of all counters with the given name, from outermost to innermost, separated by the specified string. The counters are rendered in the style indicated, defaulting to decimal if no style is specified.
 *
 * @param name A name identifying the counters, which is the same case-sensitive name used for the counter-reset and counter-increment. The name cannot start with two dashes and can't be none, unset, initial, or inherit.
 * @param style A counter style name or symbols() function, where a counter style name is a numeric, alphabetic, or symbolic simple predefined counter style, a complex longhand east Asian or Ethiopic predefined counter style, or other predefined counter style. If omitted, the counter-style defaults to decimal
 * @param str Any number of text characters. Non-Latin characters must be encoded using their Unicode escape sequences: for example, `\000A9` represents the copyright symbol.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/counters
 */
export function counters(name: string, style: string, str: string): string;

/**
 * ## CSS's `cross-fade()`
 *
 * The cross-fade() CSS function can be used to blend two or more images at a defined transparency. It can be used for many simple image manipulations, such as tinting an image with a solid color or highlighting a particular area of the page by combining an image with a radial gradient.
 *
 * @param args
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/cross-fade
 */
export function crossFade(...args: Array<string>): string;

/**
 * ## CSS's `cubic-bezier()`
 * @param x1
 * @param y1
 * @param x2
 * @param y2
 */
export function cubicBezier(
    x1: number,
    y1: number,
    x2: number,
    y2: number
): string;

/**
 * ## CSS's `steps()`
 * @param {*} number
 * @param {*} direction
 * @see
 */
export function steps(number: number, direction: string): string;

/**
 * ## CSS's `env()`
 *
 * The env() CSS function can be used to insert the value of a user agent-defined environment variable into your CSS, in a similar fashion to the var() function and custom properties. The difference is that, as well as being user-agent defined rather than user-defined, environment variables are globally scoped to a document, whereas custom properties are scoped to the element(s) on which they are declared.
 *
 * @param id
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/env
 */
export function getEnv(id: string): string;

/**
 * ## CSS's `drop-shadow()`
 *
 * The drop-shadow() CSS function applies a drop shadow effect to the input image. Its result is a `<filter-function>`.
 *
 * @param offX specifies the horizontal distance, where negative values place the shadow to the left of the element.
 * @param offY offset-y specifies the vertical distance, where negative values place the shadow above the element.
 * @param blur The shadow's blur radius, specified as a `<length>`. The larger the value, the larger and more blurred the shadow becomes. If unspecified, it defaults to 0, resulting in a sharp, unblurred edge. Negative values are not allowed.
 * @param color The color of the shadow, specified as a `<color>`. If unspecified, the value of the color property is used.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow
 */
export function dropShadow(
    offX: number,
    offY: number,
    blur: number,
    color: string
): string;

/**
 * ## CSS's `fit-content()`
 *
 * The fit-content() CSS function clamps a given size to an available size according to the formula min(maximum size, max(minimum size, argument)).
 *
 * @param {string} value `<length>` or a `<percentage>`
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/fit-content_function
 */
export function fitContent(value: string): string;

/**
 * ## CSS's `format()`
 *
 * specify font type in `@font-face`.
 *
 * @param {string} value
 */
export function format(value: string): string;

/**
 * ## CSS's `grayscale()`
 *
 * The grayscale() CSS function converts the input image to grayscale. Its result is a <filter-function>.
 *
 * @param {string} amount The amount of the conversion, specified as a `<number>` or a `<percentage>`. A value of 100% is completely grayscale, while a value of 0% leaves the input unchanged. Values between 0% and 100% are linear multipliers on the effect. Default value when omitted is 1. The initial value for interpolation is 0.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/grayscale
 */
export function grayScale(amount: number): string;

/**
 * ## CSS's `hue-rotate()`
 *
 * The hue-rotate() CSS function rotates the hue of an element and its contents. Its result is a `<filter-function>.`
 *
 * @param {string} angle The relative change in hue of the input sample, specified as an `<angle>`. A value of 0deg leaves the input unchanged. A positive hue rotation increases the hue value, while a negative rotation decreases the hue value. The initial value for interpolation is 0. There is no minimum or maximum value; hue-rotate(deg) evaluates to N modulo 360.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/hue-rotate
 */
export function hueRotate(angle: number): string;

/**
 * ## CSS's `invert()`
 *
 * The invert() CSS function inverts the color samples in the input image. Its result is a <filter-function>.
 *
 * @param {number | string} amount The amount of the conversion, specified as a `<number>` or a `<percentage>`. A value of 100% is completely inverted, while a value of 0% leaves the input unchanged. Values between 0% and 100% are linear multipliers on the effect. The initial value for interpolation is 0.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/invert
 */
export function invert(amount: number | string): string;

/**
 * ## CSS's `linear-gradient()`
 *
 * The linear-gradient() CSS function creates an image consisting of a progressive transition between two or more colors along a straight line. Its result is an object of the `<gradient> `data type, which is a special kind of `<image>`.
 *
 * @param args
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient
 */
export function linearGradient(
    ...args: Array<string | Array<string | number>>
): string;

/**
 * ## CSS's `matrix()`
 *
 * The matrix() CSS function defines a homogeneous 2D transformation matrix. Its result is a `<transform-function>` data type.
 *
 * @param {number} a describe the linear transformation.
 * @param {number} b describe the linear transformation.
 * @param {number} c describe the linear transformation.
 * @param {number} d describe the linear transformation.
 * @param {number} tx describe the translation to apply.
 * @param {number} ty describe the translation to apply.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix
 */
export function matrix(
    a: string | number,
    b: string | number,
    c: string | number,
    d: string | number,
    tx: string | number,
    ty: string | number
): string;

/**
 * ## CSS's `matrix3d()`
 *
 * The matrix3d() CSS function defines a 3D transformation as a 4x4 homogeneous matrix. Its result is a `<transform-function>` data type.
 *
 * @param {number} a1 describe the linear transformation.
 * @param {number} b1 describe the linear transformation.
 * @param {number} c1 describe the linear transformation.
 * @param {number} d1 describe the linear transformation.
 * @param {number} a2 describe the linear transformation.
 * @param {number} b2 describe the linear transformation.
 * @param {number} c2 describe the linear transformation.
 * @param {number} d2 describe the linear transformation.
 * @param {number} a3 describe the linear transformation.
 * @param {number} b3 describe the linear transformation.
 * @param {number} c3 describe the linear transformation.
 * @param {number} d3 describe the linear transformation.
 * @param {number} a4 describe the translation to apply.
 * @param {number} b4 describe the translation to apply.
 * @param {number} c4 describe the translation to apply.
 * @param {number} d4 describe the translation to apply.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d
 */
export function matrix3D(
    a1: string | number,
    b1: string | number,
    c1: string | number,
    d1: string | number,
    a2: string | number,
    b2: string | number,
    c2: string | number,
    d2: string | number,
    a3: string | number,
    b3: string | number,
    c3: string | number,
    d3: string | number,
    a4: string | number,
    b4: string | number,
    c4: string | number,
    d4: string | number
): string;

/**
 * ## CSS's `max()`
 *
 * The max() CSS function lets you set the largest (most positive) value from a list of comma-separated expressions as the value of a CSS property value. The max() function can be used anywhere a `<length>`, `<frequency>`, `<angle>`, `<time>`, `<percentage>`, `<number>`, or `<integer>` is allowed.
 *
 * @param {string} v1 first value.
 * @param {string} v2 second value.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/max
 */
export function max(v1: string, v2: string): string;

/**
 * ## CSS's `min()`
 *
 * The min() CSS function lets you set the smallest (most negative) value from a list of comma-separated expressions as the value of a CSS property value. The min() function can be used anywhere a `<length>`, `<frequency>`, `<angle>`, `<time>`, `<percentage>`, `<number>`, or `<integer>` is allowed.
 *
 * @param {string} v1 first value.
 * @param {string} v2 second value.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/min
 */
export function min(v1: string, v2: string): string;

/**
 * ## CSS's `minmax()`
 *
 * The minmax() CSS function defines a size range greater than or equal to min and less than or equal to max. It is used with CSS Grids.
 *
 * @param {string} v1 can be a `<length>`, a `<percentage>`, a `<flex>` value, or one of the keyword values max-content, min-content, or auto.
 * @param {string} v2 can be a `<length>`, a `<percentage>`, a `<flex>` value, or one of the keyword values max-content, min-content, or auto.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/minmax
 */
export function minmax(v1: string, v2: string): string;

/**
 * ## CSS's `opacity()`
 *
 * The opacity CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.
 *
 * @param {number} amount A `<number>` in the range 0.0 to 1.0, inclusive, or a `<percentage>` in the range 0% to 100%, inclusive, representing the opacity of the channel (that is, the value of its alpha channel). Any value outside the interval, though valid, is clamped to the nearest limit in the range.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/opacity
 */
export function opacity(amount: number): string;

/**
 * ## CSS's `path()`
 *
 * The path() CSS function accepts an SVG path string, and is used in CSS Shapes and CSS Motion Path to enable a shape to be drawn.
 *
 * @param {string} fillRule The filling rule for the interior of the path. Possible values are nonzero or evenodd. The default value is nonzero. See fill-rule for more details.
 * @param {*} string The string is a data string for defining an SVG path.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/path
 */
export function path(string: string, fillRule: string): string;

/**
 * ## CSS's `perspective()`
 *
 * The perspective() CSS function defines a transformation that sets the distance between the user and the z=0 plane, the perspective from which the viewer would be if the 2-dimensional interface were 3-dimensional. Its result is a `<transform-function>` data type.
 *
 * @param {*} d Is a `<length>` representing the distance from the user to the z=0 plane. If it is 0 or a negative value, no perspective transform is applied.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/perspective
 */
export function perspective(d: number): string;

/**
 * ## CSS's `radial-gradient()`
 *
 * The radial-gradient() CSS function creates an image consisting of a progressive transition between two or more colors that radiate from an origin. Its shape may be a circle or an ellipse. The function's result is an object of the `<gradient>` data type, which is a special kind of `<image>`.
 *
 * @param  {...any} args
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient
 */
export function radialGradient(
    ...args: Array<string | Array<string | number>>
): string;

/**
 * ## CSS's `repeat()`
 *
 * The repeat() CSS function represents a repeated fragment of the track list, allowing a large number of columns or rows that exhibit a recurring pattern to be written in a more compact form.
 *
 * @param {number} count number of repetition.
 * @param {string} value value to be repeated
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/repeat
 */
export function repeat(count: number, value: string): string;

/**
 * ## CSS's `repeating-linear-gradient()`
 *
 * The repeating-linear-gradient() CSS function creates an image consisting of repeating linear gradients. It is similar to linear-gradient() and takes the same arguments, but it repeats the color stops infinitely in all directions so as to cover its entire container. The function's result is an object of the `<gradient>` data type, which is a special kind of `<image>`.
 *
 * @param  {...any} args
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/repeating-linear-gradient
 */
export function repeatingLinearGradient(
    ...args: Array<string | number | Array<string | number>>
): string;

/**
 * ## CSS's `repeating-radial-gradient`
 *
 * The repeating-radial-gradient() CSS function creates an image consisting of repeating gradients that radiate from an origin. It is similar to radial-gradient() and takes the same arguments, but it repeats the color stops infinitely in all directions so as to cover its entire container, similar to repeating-linear-gradient(). The function's result is an object of the `<gradient>` data type, which is a special kind of `<image>`.
 *
 * @param  {...any} args
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/repeating-radial-gradient
 */
export function repeatingRadialGradient(
    ...args: Array<string | number | Array<string | number>>
): string;

/**
 * ## CSS's `rotate()`
 *
 * The rotate() CSS function defines a transformation that rotates an element around a fixed point on the 2D plane, without deforming it. Its result is a `<transform-function>` data type.
 *
 * @param {string} angle Is an `<angle>` representing the angle of the rotation. The direction of rotation depends on the writing direction. In a left-to-right context, a positive angle denotes a clockwise rotation, a negative angle a counter-clockwise one. In a right-to-left context, a positive angle denotes a counter-clockwise rotation, a negative angle a clockwise one.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate
 */
export function rotate(angle: string | number): string;

/**
 * ## CSS's `rotate3d()`
 *
 * The rotate3d() CSS function defines a transformation that rotates an element around a fixed axis in 3D space, without deforming it. Its result is a `<transform-function>` data type.
 *
 * @param {number} x Is a `<number>` describing the x-coordinate of the vector denoting the axis of rotation which could be between 0 and 1.
 * @param {number} y Is a `<number>` describing the y-coordinate of the vector denoting the axis of rotation which could be between 0 and 1.
 * @param {number} z Is a `<number>` describing the z-coordinate of the vector denoting the axis of rotation which could be between 0 and 1.
 * @param {string} a Is an `<angle>` representing the angle of the rotation. A positive angle denotes a clockwise rotation, a negative angle a counter-clockwise one.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate3d
 */
export function rotate3D(
    x: number,
    y: number,
    z: number,
    a: string | number
): string;

/**
 * ## CSS's `rotateX()`
 *
 * The rotateX() CSS function defines a transformation that rotates an element around the abscissa (horizontal axis) without deforming it. Its result is a `<transform-function>` data type.
 *
 * @param {string} angle Is an `<angle>` representing the angle of the rotation. A positive angle denotes a clockwise rotation, a negative angle a counter-clockwise one.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotateX
 */
export function rotateX(angle: number | string): string;

/**
 * ## CSS's `rotateY()`
 *
 * The rotateY() CSS function defines a transformation that rotates an element around the ordinate (vertical axis) without deforming it. Its result is a `<transform-function>` data type.
 *
 * @param {string} angle Is an `<angle>` representing the angle of the rotation. A positive angle denotes a clockwise rotation, a negative angle a counter-clockwise one.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotateY
 */
export function rotateY(angle: number | string): string;

/**
 * ## CSS's `rotateZ()`
 *
 * The rotateZ() CSS function defines a transformation that rotates an element around the z-axis without deforming it. Its result is a `<transform-function>` data type.
 *
 * @param {string} angle Is an `<angle>` representing the angle of the rotation. A positive angle denotes a clockwise rotation, a negative angle a counter-clockwise one.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotateZ
 */
export function rotateZ(angle: number | string): string;

/**
 * ## CSS's `saturate()`
 *
 * The saturate() CSS function super-saturates or desaturates the input image. Its result is a `<filter-function>`.
 *
 * @param {string | number} amount The amount of the conversion, specified as a `<number>` or a `<percentage>`. A value under 100% desaturates the image, while a value over 100% super-saturates it. A value of 0% is completely unsaturated, while a value of 100% leaves the input unchanged. The initial value for interpolation is 1.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/saturate
 */
export function saturate(amount: number): string;

/**
 * ## CSS's `sepia()`
 *
 * The sepia() CSS function converts the input image to sepia, giving it a warmer, more yellow/brown appearance. Its result is a `<filter-function>`.
 *
 * @param {number | string} amount The amount of the conversion, specified as a `<number>` or a `<percentage>.` A value of 100% is completely sepia, while a value of 0% leaves the input unchanged. Values between 0% and 100% are linear multipliers on the effect. The initial value for interpolation is 0.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/sepia
 */
export function sepia(amount: number): string;

/**
 * ## CSS's `skew()`
 *
 * The skew() CSS function defines a transformation that skews an element on the 2D plane. Its result is a `<transform-function>` data type.
 *
 * @param {string} x Is an `<angle>` representing the angle to use to distort the element along the x-axis (or abscissa).
 * @param {string} y Is an `<angle>` representing the angle to use to distort the element along the y-axis (or ordinate). If not defined, its default value is 0, resulting in a purely horizontal skewing.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skew
 */
export function skew(x: number | string, y?: number | string): string;

/**
 * ## CSS's `skewX()`
 *
 * The skewX() CSS function defines a transformation that skews an element in the horizontal direction on the 2D plane. Its result is a `<transform-function>` data type.
 *
 * @param {string} x Is an `<angle>` representing the angle to use to distort the element along the abscissa.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skewX
 */
export function skewX(x: number | string): string;

/**
 * ## CSS's `skewY()`
 *
 * The skewY() CSS function defines a transformation that skews an element in the vertical direction on the 2D plane. Its result is a `<transform-function> `data type.
 *
 * @param {string} y Is an `<angle>` representing the angle to use to distort the element along the ordinate.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skewY
 */
export function skewY(y: number | string): string;

/**
 * ## CSS's `translate()`
 *
 * The translate() CSS function repositions an element in the horizontal and/or vertical directions. Its result is a `<transform-function> `data type.
 *
 * * Single value : This value is a `<length>` or `<percentage> `representing the abscissa (horizontal, x-coordinate) of the translating vector. The ordinate (vertical, y-coordinate) of the translating vector will be set to 0. For example, translate(2px) is equivalent to translate(2px, 0). A percentage value refers to the width of the reference box defined by the transform-box property.
 *
 * * Two values: This value describes two `<length>` or `<percentage>` values representing both the abscissa (x-coordinate) and the ordinate (y-coordinate) of the translating vector. A percentage as first value refers to the width, as second part to the height of the reference box defined by the transform-box property.
 *
 * @param {string} x first value.
 * @param {string} y second value.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate
 */
export function translate(x: number | string, y?: number | string): string;

/**
 * ## CSS's `translate3d()`
 *
 * The translate3d() CSS function repositions an element in 3D space. Its result is a `<transform-function>` data type.
 *
 * @param {string} tx Is a `<length> `or `<percentage>` representing the abscissa of the translating vector.
 * @param {string} ty Is a `<length> `or `<percentage>` representing the ordinate of the translating vector.
 * @param {string} tz Is a `<length>` representing the z component of the translating vector. It can't be a `<percentage>` value; in that case the property containing the transform is considered invalid.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate3d
 */
export function translate3D(
    tx: string | number,
    ty: string | number,
    tz: string | number
): string;

/**
 * ## CSS's `translateX()`
 *
 * The translateX() CSS function repositions an element horizontally on the 2D plane. Its result is a `<transform-function>` data type.
 *
 * @param {number} x
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateX
 */
export function translateX(x: number | string): string;

/**
 * ## CSS's `translateY()`
 *
 * The translateY() CSS function repositions an element vertically on the 2D plane. Its result is a `<transform-function>` data type.
 *
 * @param {number} y
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateY
 */
export function translateY(y: number | string): string;

/**
 * ## CSS's `translateZ()`
 *
 * The translateZ() CSS function repositions an element along the z-axis in 3D space, i.e., closer to or farther away from the viewer. Its result is a `<transform-function>` data type.
 *
 * @param {string | number} z
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateZ
 */
export function translateZ(z: number | string): string;

/**
 * ## CSS's `url()`
 *
 * The URL() constructor returns a newly created URL object representing the URL defined by the parameters.
 *
 * @param {string} url
 * @see https://developer.mozilla.org/en-US/docs/Web/API/URL/URL
 */
export function url(url: string): string;

/**
 * ## CSS's `var()`
 *
 * The var() CSS function can be used to insert the value of a custom property (sometimes called a "CSS variable") instead of any part of a value of another property.
 *
 * @param {string} id
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/var
 */
export function getVar(id: string): string;

/**
 * ## CSS's `scale()`
 *
 * The scale() CSS function defines a transformation that resizes an element on the 2D plane. Because the amount of scaling is defined by a vector, it can resize the horizontal and vertical dimensions at different scales. Its result is a `<transform-function>` data type.
 *
 * @param {number | Array<number>} amount
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale
 */
export function scale(...amount: Array<string | number>): string;

/**
 * ## CSS's `scaleX()`
 *
 * The scaleX() CSS function defines a transformation that resizes an element along the x-axis (horizontally). Its result is a `<transform-function>` data type.
 *
 * It modifies the abscissa of each element point by a constant factor, except when the scale factor is 1, in which case the function is the identity transform. The scaling is not isotropic, and the angles of the element are not conserved. scaleX(-1) defines an axial symmetry, with a vertical axis passing through the origin (as specified by the transform-origin property).
 *
 * @param {number} amount
 * @more https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scaleX
 */
export function scaleX(amount: number): string;

/**
 * Return a valid value for edge-related properties like `margin` or `padding`.
 *
 * Possible values :
 *
 * * `sides` : top, right, bottom, left
 * * `axes` : vertical, horizontal
 * * `string` : 10px
 *
 * @param input
 */
export function edges(input: Edges): string;

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
 * @param input
 */
export function corners(input: Corners): string;

/**
 * creates a media query for when size is less than the given value.
 * @param  size value in `px`, `em` ...
 * @param  content media query content
 */
export function whenLessThan(
    size: string,
    content: ObjectOf<Selector>
): MediaQuery;

/**
 * creates a media query for when size is greater than the given value.
 * @param {string} size value in `px`, `em` ...
 * @param {import("../../lib").Selectors} content media query content
 */
export function whenGreaterThan(
    size: string,
    content: ObjectOf<Selector>
): MediaQuery;

/**
 * creates a media query for when the size of screen is between the `min` and `max` values.
 * @param {string} min value in `px`, `em` ...
 * @param {string} max value in `px`, `em` ...
 * @param content media query content
 */
export function whenBetween(
    min: string,
    max: string,
    content: ObjectOf<Selector>
): MediaQuery;

/**
 * Helper function to create a selector.
 * @param  content
 */
export function createSelector(content: Selector): Selector;

/**
 * Helper function to create a media query.
 * @param condition
 * @param selectors
 */
export function createMediaQuery(
    condition: string,
    selectors: ObjectOf<Selector>
): MediaQuery;
