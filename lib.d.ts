// This file is generated

/**
 * @important
 * Do not modify this file
 */

import {
    BaseElement,
    RecursiveElement,
    Hooks,
    Flags,
    Route,
    StateArray,
} from "@riadh-adrani/recursive/lib";

import { Color } from "./packages/css/color";

import {
    WebEventTarget,
    WebEvent,
    EventCallback,
    EventDeclaration,
} from "./packages/dom/event";

export {
    Route,
    StateArray,
    Color,
    WebEventTarget,
    WebEvent,
    EventCallback,
    EventDeclaration,
};

export interface FontFace {
    /**
     * ## `ascent-override`
     *
     * The ascent-override CSS descriptor defines the ascent metric for the font. The ascent metric is the height above the baseline that CSS uses to lay out line boxes in an inline formatting context.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/ascent-override}
     */ ascentOverride: "normal";
    /**
     * ## `descent-override`
     *
     * The descent-override CSS descriptor defines the descent metric for the font. The descent metric is the height below the baseline that CSS uses to lay out line boxes in an inline formatting context.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/descent-override}
     */ descentOverride: "normal";
    /**
     * ## `font-display`
     *
     * The font-display descriptor determines how a font face is displayed based on whether and when it is downloaded and ready to use.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display}
     */ fontDisplay: "auto" | "block" | "swap" | "fallback" | "optional";
    /**
     * ## `font-family`
     *
     * The font-family CSS descriptor sets the font family for a font specified in an @font-face rule.The value is used for name matching against a particular @font-face when styling elements using the font-family property. Any name may be used, and this overrides any name specified in the underlying font data.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-family}
     */ fontFamily: string;
    /**
     * ## `font-stretch`
     *
     * The font-stretch CSS descriptor allows authors to specify a normal, condensed, or expanded face for the fonts specified in the @font-face rule.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-stretch}
     */ fontStretch:
        | "normal"
        | "semi-condensed"
        | "condensed"
        | "extra-condensed"
        | "ultra-condensed"
        | "semi-expanded"
        | "expanded"
        | "extra-expanded"
        | "ultra-expanded";
    /**
     * ## `font-style`
     *
     * The font-style CSS descriptor allows authors to specify font styles for the fonts specified in the @font-face rule.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face}
     */ fontStyle: "normal" | "italic" | "oblique";
    /**
     * ## `font-weight`
     *
     * The font-weight CSS descriptor allows authors to specify font weights for the fonts specified in the @font-face rule. The font-weight property can separately be used to set how thick or thin characters in text should be displayed.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-weight}
     */ fontWeight: "bold" | "normal";
    /**
     * ## `font-feature-settings`
     *
     * The font-feature-settings CSS property controls advanced typographic features in OpenType fonts.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-feature-settings}
     */ fontFeatureSettings: string;
    /**
     * ## `font-variation-settings`
     *
     * The font-feature-settings CSS property controls advanced typographic features in OpenType fonts.qqq
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-feature-settings}
     */ fontVariationSettings: string;
    /**
     * ## `line-gap-override`
     *
     * The line-gap-override CSS descriptor defines the line-gap metric for the font. The line-gap metric is the font recommended line-gap or external leading.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/line-gap-override}
     */ lineGapOverride: string;
    /**
     * ## `src`
     *
     * The src CSS descriptor of the @font-face rule specifies the resource containing font data. It is required for the @font-face rule to be valid.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/src}
     */ src: string;
    /**
     * ## `unicode-range`
     *
     * The unicode-range CSS descriptor sets the specific range of characters to be used from a font defined by @font-face and made available for use on the current page. If the page doesn't use any character in this range, the font is not downloaded; if it uses at least one, the whole font is downloaded.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/unicode-range}
     */ unicodeRange: string;
    /**
     * ## `size-adjust`
     *
     * The size-adjust CSS descriptor defines a multiplier for glyph outlines and metrics associated with this font. This makes it easier to harmonize the designs of various fonts when rendered at the same font size.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/size-adjust}
     */ sizeAdjust: string;
}

export interface Selector {
    /**
     * ## `accent-color`
     *
     * The accent-color CSS property sets the accent color for user-interface controls generated by some elements.
     *
     * Browsers that support accent-color currently apply it to the following HTML elements:
     * * `<input type="checkbox">`
     * * `<input type="radio">`
     * * `<input type="range">`
     * * `<progress>`
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/accent-color}
     */ accentColor: Color;
    /**
     * ## `align-content`
     *
     * The CSS align-content property sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.
     *
     * This property has no effect on single line flex containers (i.e. ones with ``flex-wrap: nowrap``).
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/align-content}
     */ alignContent:
        | "center"
        | "start"
        | "end"
        | "flex-start"
        | "flex-end"
        | "normal"
        | "baseline"
        | "first baseline"
        | "last baseline"
        | "space-between"
        | "space-around"
        | "space-evenly"
        | "stretch"
        | "safe center"
        | "unsafe center";
    /**
     * ## `align-items`
     *
     * The CSS align-items property sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/align-items}
     */ alignItems:
        | "center"
        | "start"
        | "end"
        | "flex-start"
        | "flex-end"
        | "normal"
        | "baseline"
        | "first baseline"
        | "last baseline"
        | "stretch"
        | "safe center"
        | "unsafe center";
    /**
     * ## `align-self`
     *
     * The align-self CSS property overrides a grid or flex item's align-items value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.
     *
     * The property doesn't apply to block-level boxes, or to table cells. If a flexbox item's cross-axis margin is auto, then align-self is ignored.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/align-self}
     */ alignSelf:
        | "center"
        | "start"
        | "end"
        | "flex-start"
        | "flex-end"
        | "normal"
        | "baseline"
        | "first baseline"
        | "last baseline"
        | "space-between"
        | "space-around"
        | "space-evenly"
        | "self-start"
        | "self-end"
        | "stretch"
        | "safe center"
        | "unsafe center";
    /**
     * ## `align-tracks`
     *
     * **Experimental: This is an experimental technology Check the browser compatibility table carefully before using this in production.**
     *
     * The align-tracks CSS property sets the alignment in the masonry axis for grid containers that have masonry in their block axis.
     *
     * The property can take a single value, in which case all tracks are aligned in the same way. If a list of values is used then the first value applies to the first track in the grid axis, the second to the next and so on.
     *
     * If there are fewer values than tracks, the last value is used for all remaining tracks. If there are more values than tracks, any additional values are ignored.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/align-tracks}
     */ alignTracks: "start" | "space-between" | "center";
    /**
     * ## `all`
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/all}
     */ all: string;
    /**
     * ## `animation`
     *
     * The animation shorthand CSS property applies an animation between styles. It is a shorthand for animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode, and animation-play-state.
     *
     * This property is a shorthand for the following CSS properties:
     * * animation-delay
     * * animation-direction
     * * animation-duration
     * * animation-fill-mode
     * * animation-iteration-count
     * * animation-name
     * * animation-play-state
     * * animation-timing-function
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/animation}
     */ animation: string;
    /**
     * ## `animation-delay`
     *
     * The animation-delay CSS property specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation. The animation can start later, immediately from its beginning, or immediately and partway through the animation.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay}
     */ animationDelay: string;
    /**
     * ## `animation-duration`
     *
     * The animation-duration CSS property sets the length of time that an animation takes to complete one cycle.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration}
     */ animationDuration: string;
    /**
     * ## `animation-fill-mode`
     *
     * The animation-fill-mode CSS property sets how a CSS animation applies styles to its target before and after its execution.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode}
     */ animationFillMode: "none" | "forwards" | "backwards" | "both";
    /**
     * ## `animation-iteration-count`
     *
     * The animation-iteration-count CSS property sets the number of times an animation sequence should be played before stopping.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count}
     */ animationIterationCount: number;
    /**
     * ## `animation-name`
     *
     * The animation-name CSS property specifies the names of one or more @keyframes at-rules describing the animation or animations to apply to the element.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name}
     */ animationName: string;
    /**
     * ## `animation-play-state`
     *
     * The animation-play-state CSS property sets whether an animation is running or paused.
     *
     * Resuming a paused animation will start the animation from where it left off at the time it was paused, rather than starting over from the beginning of the animation sequence.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state}
     */ animationPlayState: "running" | "paused";
    /**
     * ## `animation-timing-function`
     *
     * The animation-timing-function CSS property sets how an animation progresses through the duration of each cycle.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function}
     */ animationTimingFunction:
        | "ease"
        | "ease-in"
        | "ease-out"
        | "ease-in-out"
        | "linear"
        | "step-start"
        | "step-end";
    /**
     * ## `appearance`
     *
     * The appearance CSS property is used to control native appearance of UI controls, that are based on operating system's theme.
     *
     * Before standardization this property allowed simple elements to be shown as widgets, such as buttons or check boxes. It was considered a misfeature and authors are encouraged to use only standard keywords now.
     * _Note: If you wish to use this property on websites, you should test it very carefully. Although it is supported in most modern browsers, its implementation varies. In older browsers, even the keyword none does not have the same effect on all form elements across different browsers, and some do not support it at all. The differences are smaller in the newest browsers._
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/appearance}
     */ appearance:
        | "none"
        | "auto"
        | "menulist-button"
        | "textfield"
        | "button"
        | "searchfield"
        | "textarea"
        | "push-button"
        | "slide-horizontal"
        | "checkbox"
        | "radio"
        | "square-button"
        | "menulist"
        | "meter"
        | "progress-bar";
    /**
     * ## `ascent-override`
     *
     * The ascent-override CSS descriptor defines the ascent metric for the font. The ascent metric is the height above the baseline that CSS uses to lay out line boxes in an inline formatting context.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/ascent-override}
     */ ascentOverride: string;
    /**
     * ## `aspect-ratio`
     *
     * The aspect-ratio CSS property sets a preferred aspect ratio for the box, which will be used in the calculation of auto sizes and some other layout functions.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio}
     */ aspectRatio: "auto";
    /**
     * ## `backdrop-filter`
     *
     * The backdrop-filter CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything behind the element, to see the effect you must make the element or its background at least partially transparent.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter}
     */ backdropFilter: "none";
    /**
     * ## `backface-visibility`
     *
     * The backface-visibility CSS property sets whether the back face of an element is visible when turned towards the user.
     *
     * An element's back face is a mirror image of its front face. Though invisible in 2D, the back face can become visible when a transformation causes the element to be rotated in 3D space. (This property has no effect on 2D transforms, which have no perspective.)
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/backface-visibility}
     */ backfaceVisibility: "hidden" | "visible";
    /**
     * ## `background`
     *
     * The background shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method.
     *
     * This property is a shorthand for the following CSS properties:
     * * background-attachment
     * * background-clip
     * * background-color
     * * background-image
     * * background-origin
     * * background-position
     * * background-repeat
     * * background-size
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background}
     */ background: string;
    /**
     * ## `background-attachment`
     *
     * The background-attachment CSS property sets whether a background image's position is fixed within the viewport, or scrolls with its containing block.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment}
     */ backgroundAttachment: "scroll" | "fixed" | "local";
    /**
     * ## `background-blend-mode`
     *
     * The background-blend-mode CSS property sets how an element's background images should blend with each other and with the element's background color.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-blend-mode}
     */ backgroundBlendMode: string;
    /**
     * ## `background-clip`
     *
     * The background-clip CSS property sets whether an element's background extends underneath its border box, padding box, or content box.
     *
     * If the element has no background-image or background-color, this property will only have a visual effect when the border has transparent regions or partially opaque regions (due to border-style or border-image); otherwise, the border masks the difference.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip}
     */ backgroundClip: "border-box" | "padding-box" | "content-box" | "text";
    /**
     * ## `background-color`
     *
     * The background-color CSS property sets the background color of an element.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-color}
     */ backgroundColor: Color;
    /**
     * ## `background-image`
     *
     * The background-image CSS property sets one or more background images on an element.
     *
     * The background images are drawn on stacking context layers on top of each other. The first layer specified is drawn as if it is closest to the user.
     *
     * The borders of the element are then drawn on top of them, and the background-color is drawn beneath them. How the images are drawn relative to the box and its borders is defined by the background-clip and background-origin CSS properties.
     *
     * If a specified image cannot be drawn (for example, when the file denoted by the specified URI cannot be loaded), browsers handle it as they would a none value.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-image}
     */ backgroundImage: string;
    /**
     * ## `background-origin`
     *
     * The background-origin CSS property sets the background's origin: from the border start, inside the border, or inside the padding.
     *
     * Note that background-origin is ignored when background-attachment is fixed.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-origin}
     */ backgroundOrigin: "border-box" | "padding-box" | "content-box";
    /**
     * ## `background-position`
     *
     * The background-position CSS property sets the initial position for each background image. The position is relative to the position layer set by background-origin.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-position}
     */ backgroundPosition: "top" | "bottom" | "left" | "right" | "center";
    /**
     * ## `background-position-x`
     *
     * The background-position-x CSS property sets the initial horizontal position for each background image. The position is relative to the position layer set by background-origin.
     *
     * The value of this property is overridden by any declaration of the background or background-position shorthand properties applied to the element after it.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-position-x}
     */ backgroundPositionX: "left" | "right" | "center";
    /**
     * ## `background-position-y`
     *
     * The background-position-y CSS property sets the initial vertical position for each background image. The position is relative to the position layer set by background-origin.
     *
     * The value of this property is overridden by any declaration of the background or background-position shorthand properties applied to the element after it.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-position-y}
     */ backgroundPositionY: "top" | "center" | "bottom";
    /**
     * ## `background-repeat`
     *
     * The background-repeat CSS property sets how background images are repeated. A background image can be repeated along the horizontal and vertical axes, or not repeated at all.
     *
     * By default, the repeated images are clipped to the size of the element, but they can be scaled to fit (using round) or evenly distributed from end to end (using space).
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat}
     */ backgroundRepeat:
        | "repeat-x"
        | "repeat-y"
        | "repeat"
        | "space"
        | "round"
        | "no-repeat";
    /**
     * ## `background-size`
     *
     */ backgroundSize: "cover" | "contain";
    /**
     * ## `block-size`
     *
     * The background-size CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.
     *
     * Spaces not covered by a background image are filled with the background-color property, and the background color will be visible behind background images that have transparency/translucency.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-size}
     */ blockSize: "max-content" | "min-content";
    /**
     * ## `border-block`
     *
     * The border-block CSS property is a shorthand property for setting the individual logical block border property values in a single place in the style sheet.
     * border-block can be used to set the values for one or more of border-block-width, border-block-style, and border-block-color setting both the start and end in the block dimension at once. The physical borders to which it maps depends on the element's writing mode, directionality, and text orientation. It corresponds to the border-top and border-bottom or border-right, and border-left properties depending on the values defined for writing-mode, direction, and text-orientation.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-block}
     */ borderBlock: string;
    /**
     * ## `border-block-color`
     *
     * The border-block-color CSS property defines the color of the logical block borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-color and border-bottom-color, or border-right-color and border-left-color property depending on the values defined for writing-mode, direction, and text-orientation.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-color}
     */ borderBlockColor: Color;
    /**
     * ## `border-block-style`
     *
     * The border-block-style CSS property defines the style of the logical block borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-style and border-bottom-style, or border-left-style and border-right-style properties depending on the values defined for writing-mode, direction, and text-orientation.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-style}
     */ borderBlockStyle: "dashed" | "dotted" | "groove";
    /**
     * ## `border-block-width`
     *
     * The border-block-width CSS property defines the width of the logical block borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-width and border-bottom-width, or border-left-width, and border-right-width property depending on the values defined for writing-mode, direction, and text-orientation.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-width}
     */ borderBlockWidth: "thick";
    /**
     * ## `border-block-end`
     *
     * The border-block-end CSS property is a shorthand property for setting the individual logical block-end border property values in a single place in the style sheet.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-end}
     */ borderBlockEnd: string;
    /**
     * ## `border-block-end-color`
     *
     * The border-block-end-color CSS property defines the color of the logical block-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-color, border-right-color, border-bottom-color, or border-left-color property depending on the values defined for writing-mode, direction, and text-orientation.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-end-color}
     */ borderBlockEndColor: Color;
    /**
     * ## `border-block-end-style`
     *
     * The border-block-end-style CSS property defines the style of the logical block-end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-style, border-right-style, border-bottom-style, or border-left-style property depending on the values defined for writing-mode, direction, and text-orientation.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-end-style}
     */ borderBlockEndStyle: "dashed" | "dotted" | "groove";
    /**
     * ## `border-block-end-width`
     *
     * The border-block-end-width CSS property defines the width of the logical block-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-width, border-right-width, border-bottom-width, or border-left-width property depending on the values defined for writing-mode, direction, and text-orientation.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-end-width}
     */ borderBlockEndWidth: "thick";
    /**
     * ## `border-block-start`
     *
     * The border-block-start CSS property is a shorthand property for setting the individual logical block-start border property values in a single place in the style sheet.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-start}
     */ borderBlockStart: string;
    /**
     * ## `border-block-start-color`
     *
     * The border-block-start-color CSS property defines the color of the logical block-start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-color, border-right-color, border-bottom-color, or border-left-color property depending on the values defined for writing-mode, direction, and text-orientation.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-start-color}
     */ borderBlockStartColor: Color;
    /**
     * ## `border-block-start-style`
     *
     * The border-block-start-style CSS property defines the style of the logical block start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-style, border-right-style, border-bottom-style, or border-left-style property depending on the values defined for writing-mode, direction, and text-orientation.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-start-style}
     */ borderBlockStartStyle: "dashed" | "dotted" | "groove";
    /**
     * ## `border-block-start-width`
     *
     * The border-block-start-width CSS property defines the width of the logical block-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-width, border-right-width, border-bottom-width, or border-left-width property depending on the values defined for writing-mode, direction, and text-orientation.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-start-width}
     */ borderBlockStartWidth: "thick";
    /**
     * ## `border`
     *
     * The border shorthand CSS property sets an element's border. It sets the values of border-width, border-style, and border-color.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border}
     */ border: string;
    /**
     * ## `border-bottom`
     *
     * The border-bottom shorthand CSS property sets an element's bottom border. It sets the values of border-bottom-width, border-bottom-style and border-bottom-color.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom}
     */ borderBottom: string;
    /**
     * ## `border-bottom-color`
     *
     * The border-bottom-color CSS property sets the color of an element's bottom border. It can also be set with the shorthand CSS properties border-color or border-bottom.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-color}
     */ borderBottomColor: Color;
    /**
     * ## `border-bottom-left-radius`
     *
     * The border-bottom-left-radius CSS property rounds the bottom-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius}
     */ borderBottomLeftRadius: string;
    /**
     * ## `border-bottom-right-radius`
     *
     * The border-bottom-right-radius CSS property rounds the bottom-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius}
     */ borderBottomRightRadius: string;
    /**
     * ## `border-bottom-style`
     *
     * The border-bottom-style CSS property sets the line style of an element's bottom border.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-style}
     */ borderBottomStyle:
        | "none"
        | "hidden"
        | "dotted"
        | "dashed"
        | "solid"
        | "double"
        | "groove"
        | "ridge"
        | "inset"
        | "outset";
    /**
     * ## `border-bottom-width`
     *
     * The border-bottom-width CSS property sets the width of the bottom border of an element.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-width}
     */ borderBottomWidth: "thin" | "medium" | "thick";
    /**
     * ## `border-collapse`
     *
     * The border-collapse CSS property sets whether cells inside a <table> have shared or separate borders.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-collapse}
     */ borderCollapse: "collapse" | "seperate";
    /**
     * ## `border-color`
     *
     * The border-color shorthand CSS property sets the color of an element's border.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-color}
     */ borderColor: Color;
    /**
     * ## `border-end-end-radius`
     *
     * The border-end-end-radius CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on the element's writing-mode, direction, and text-orientation. This is useful when building styles to work regardless of the text orientation and writing mode.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-end-end-radius}
     */ borderEndEndRadius: string;
    /**
     * ## `border-end-start-radius`
     *
     * The border-end-start-radius CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's writing-mode, direction, and text-orientation. This is useful when building styles to work regardless of the text orientation and writing mode.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-end-start-radius}
     */ borderEndStartRadius: string;
    /**
     * ## `border-start-end-radius`
     *
     * The border-start-end-radius CSS property defines a logical border radius on an element, which maps to a physical border radius depending on the element's writing-mode, direction, and text-orientation. This is useful when building styles to work regardless of the text orientation and writing mode.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-start-end-radius}
     */ borderStartEndRadius: string;
    /**
     * ## `border-start-start-radius`
     *
     * The border-start-start-radius CSS property defines a logical border radius on an element, which maps to a physical border radius that depends on the element's writing-mode, direction, and text-orientation. This is useful when building styles to work regardless of the text orientation and writing mode.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-start-start-radius}
     */ borderStartStartRadius: string;
    /**
     * ## `border-image`
     *
     * The border-image CSS property draws an image around a given element. It replaces the element's regular border.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-image}
     */ borderImage: string;
    /**
     * ## `border-outset`
     *
     */ borderImageOutset: string;
    /**
     * ## `border-image-repeat`
     *
     * The border-image-repeat CSS property defines how the edge regions of a source image are adjusted to fit the dimensions of an element's border image.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-repeat}
     */ borderImageRepeat: "stretch" | "repeat" | "round" | "space";
    /**
     * ## `border-image-slice`
     *
     * The border-image-slice CSS property divides the image specified by border-image-source into regions. These regions form the components of an element's border image.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-slice}
     */ borderImageSlice: "fill";
    /**
     * ## `border-image-source`
     *
     * The border-image-source CSS property sets the source image used to create an element's border image.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-source}
     */ borderImageSource: string;
    /**
     * ## `border-image-width`
     *
     * The border-image-width CSS property sets the width of an element's border image.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-width}
     */ borderImageWidth: string;
    /**
     * ## `border-inline`
     *
     * The border-inline CSS property is a shorthand property for setting the individual logical inline border property values in a single place in the style sheet.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline}
     */ borderInline: Color;
    /**
     * ## `border-inline-color`
     *
     * The border-inline-color CSS property defines the color of the logical inline borders of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-color and border-bottom-color, or border-right-color and border-left-color property depending on the values defined for writing-mode, direction, and text-orientation.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-color}
     */ borderInlineColor: Color;
    /**
     * ## `border-inline-style`
     *
     * The border-inline-style CSS property defines the style of the logical inline borders of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-style and border-bottom-style, or border-left-style and border-right-style properties depending on the values defined for writing-mode, direction, and text-orientation.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-style}
     */ borderInlineStyle: "dashed" | "dotted" | "groove";
    /**
     * ## `border-inline-width`
     *
     * The border-inline-width CSS property defines the width of the logical inline borders of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-width and border-bottom-width, or border-left-width, and border-right-width property depending on the values defined for writing-mode, direction, and text-orientation.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-width}
     */ borderInlineWidth: string;
    /**
     * ## `border-inline-end`
     *
     * The border-inline-end CSS property is a shorthand property for setting the individual logical inline-end border property values in a single place in the style sheet.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end}
     */ borderInlineEnd: string;
    /**
     * ## `border-inline-end-color`
     *
     * The border-inline-end-color CSS property defines the color of the logical inline-end border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-color, border-right-color, border-bottom-color, or border-left-color property depending on the values defined for writing-mode, direction, and text-orientation.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end-color}
     */ borderInlineEndColor: Color;
    /**
     * ## `border-inline-end-style`
     *
     * The border-inline-end-style CSS property defines the style of the logical inline end border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-style, border-right-style, border-bottom-style, or border-left-style property depending on the values defined for writing-mode, direction, and text-orientation.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end-style}
     */ borderInlineEndStyle: "dashed" | "dotted" | "groove";
    /**
     * ## `border-inline-end-width`
     *
     * The border-inline-end-width CSS property defines the width of the logical inline-end border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-width, border-right-width, border-bottom-width, or border-left-width property depending on the values defined for writing-mode, direction, and text-orientation.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end-width}
     */ borderInlineEndWidth: string;
    /**
     * ## `border-inline-start`
     *
     * The border-inline-start CSS property is a shorthand property for setting the individual logical inline-start border property values in a single place in the style sheet.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start}
     */ borderInlineStart: string;
    /**
     * ## `border-inline-start-color`
     *
     * The border-inline-start-color CSS property defines the color of the logical inline start border of an element, which maps to a physical border color depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-color, border-right-color, border-bottom-color, or border-left-color property depending on the values defined for writing-mode, direction, and text-orientation.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start-color}
     */ borderInlineStartColor: Color;
    /**
     * ## `border-inline-start-style`
     *
     * The border-inline-start-style CSS property defines the style of the logical inline start border of an element, which maps to a physical border style depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-style, border-right-style, border-bottom-style, or border-left-style property depending on the values defined for writing-mode, direction, and text-orientation.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start-style}
     */ borderInlineStartStyle: "dashed" | "dotted" | "groove";
    /**
     * ## `border-inline-start-width`
     *
     * The border-inline-start-width CSS property defines the width of the logical inline-start border of an element, which maps to a physical border width depending on the element's writing mode, directionality, and text orientation. It corresponds to the border-top-width, border-right-width, border-bottom-width, or border-left-width property depending on the values defined for writing-mode, direction, and text-orientation.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start-width}
     */ borderInlineStartWidth: string;
    /**
     * ## `border-left`
     *
     * The border-left shorthand CSS property sets all the properties of an element's left border.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-left}
     */ borderLeft: string;
    /**
     * ## `border-left-color`
     *
     * The border-left-color CSS property sets the color of an element's left border. It can also be set with the shorthand CSS properties border-color or border-left.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-color}
     */ borderLeftColor: Color;
    /**
     * ## `border-left-style`
     *
     * The border-left-style CSS property sets the line style of an element's left border.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-style}
     */ borderLeftStyle:
        | "none"
        | "hidden"
        | "dotted"
        | "dashed"
        | "solid"
        | "double"
        | "groove"
        | "ridge"
        | "inset"
        | "outset";
    /**
     * ## `border-left-width`
     *
     * The border-left-width CSS property sets the width of the left border of an element.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-width}
     */ borderLeftWidth: string;
    /**
     * ## `border-radius`
     *
     * The border-radius CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius}
     */ borderRadius: string;
    /**
     * ## `border-right`
     *
     * The border-right shorthand CSS property sets all the properties of an element's right border.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-right}
     */ borderRight: string;
    /**
     * ## `border-right-color`
     *
     * The border-right-color CSS property sets the color of an element's right border. It can also be set with the shorthand CSS properties border-color or border-right.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-color}
     */ borderRightColor: Color;
    /**
     * ## `border-right-style`
     *
     * The border-right-style CSS property sets the line style of an element's right border.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-style}
     */ borderRightStyle:
        | "none"
        | "hidden"
        | "dotted"
        | "dashed"
        | "solid"
        | "double"
        | "groove"
        | "ridge"
        | "inset"
        | "outset";
    /**
     * ## `border-right-width`
     *
     * The border-right-width CSS property sets the width of the right border of an element.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-width}
     */ borderRightWidth: string;
    /**
     * ## `border-spacing`
     *
     * The border-spacing CSS property sets the distance between the borders of adjacent cells in a ``<table>``. This property applies only when border-collapse is separate.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-spacing}
     */ borderSpacing: string;
    /**
     * ## `border-style`
     *
     * The border-style shorthand CSS property sets the line style for all four sides of an element's border.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-style}
     */ borderStyle:
        | "none"
        | "hidden"
        | "dotted"
        | "dashed"
        | "solid"
        | "double"
        | "groove"
        | "ridge"
        | "inset"
        | "outset";
    /**
     * ## `border-top`
     *
     * The border-top shorthand CSS property sets all the properties of an element's top border.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-top}
     */ borderTop: string;
    /**
     * ## `border-top-color`
     *
     * The border-top-color CSS property sets the color of an element's top border. It can also be set with the shorthand CSS properties border-color or border-top.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-color}
     */ borderTopColor: Color;
    /**
     * ## `border-top-left-radius`
     *
     * The border-top-left-radius CSS property rounds the top-left corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius}
     */ borderTopLeftRadius: string;
    /**
     * ## `border-top-right-radius`
     *
     * The border-top-right-radius CSS property rounds the top-right corner of an element by specifying the radius (or the radius of the semi-major and semi-minor axes) of the ellipse defining the curvature of the corner.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius}
     */ borderTopRightRadius: string;
    /**
     * ## `border-top-style`
     *
     * The border-top-style CSS property sets the line style of an element's top border.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-style}
     */ borderTopStyle:
        | "none"
        | "hidden"
        | "dotted"
        | "dashed"
        | "solid"
        | "double"
        | "groove"
        | "ridge"
        | "inset"
        | "outset";
    /**
     * ## `border-top-width`
     *
     * The border-top-width CSS property sets the width of the top border of an element.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-width}
     */ borderTopWidth: string;
    /**
     * ## `border-width`
     *
     * The border-width shorthand CSS property sets the width of an element's border.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-width}
     */ borderWidth: string;
    /**
     * ## `bottom`
     *
     * The bottom CSS property participates in setting the vertical position of a positioned element. It has no effect on non-positioned elements.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/bottom}
     */ bottom: "auto";
    /**
     * ## `box-decoration-break`
     *
     * The box-decoration-break CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/box-decoration-break}
     */ boxDecorationBreak: "slice" | "clone";
    /**
     * ## `box-shadow`
     *
     * The box-shadow CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow}
     */ boxShadow: "none";
    /**
     * ## `box-sizing`
     *
     * The box-sizing CSS property sets how the total width and height of an element is calculated.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing}
     */ boxSizing: "border-box" | "box-sizing";
    /**
     * ## `break-after`
     *
     * The break-after CSS property sets how page, column, or region breaks should behave after a generated box. If there is no generated box, the property is ignored.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/break-after}
     */ breakAfter:
        | "auto"
        | "avoid"
        | "always"
        | "all"
        | "avoid-page"
        | "page"
        | "left"
        | "right"
        | "recto"
        | "verso"
        | "avoid-column"
        | "column"
        | "avoid-region"
        | "region";
    /**
     * ## `break-before`
     *
     * The break-before CSS property sets how page, column, or region breaks should behave before a generated box. If there is no generated box, the property is ignored.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/break-before}
     */ breakBefore:
        | "auto"
        | "avoid"
        | "always"
        | "all"
        | "avoid-page"
        | "page"
        | "left"
        | "right"
        | "recto"
        | "verso"
        | "avoid-column"
        | "column"
        | "avoid-region"
        | "region";
    /**
     * ## `break-inside`
     *
     * The break-inside CSS property sets how page, column, or region breaks should behave inside a generated box. If there is no generated box, the property is ignored.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/break-inside}
     */ breakInside:
        | "auto"
        | "avoid"
        | "avoid-page"
        | "avoid-column"
        | "avoid-region";
    /**
     * ## `caption-side`
     *
     * The caption-side CSS property puts the content of a table's <caption> on the specified side. The values are relative to the writing-mode of the table.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/caption-side}
     */ captionSide:
        | "top"
        | "bottom"
        | "block-start"
        | "block-end"
        | "inline-start"
        | "inline-end";
    /**
     * ## `caret-color`
     *
     * The caret-color CSS property sets the color of the insertion caret, the visible marker where the next character typed will be inserted. This is sometimes referred to as the text input cursor. The caret appears in elements such as <input> or those with the contenteditable attribute. The caret is typically a thin vertical line that flashes to help make it more noticeable. By default, it is black, but its color can be altered with this property.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/caret-color}
     */ caretColor: Color;
    /**
     * ## `clear`
     *
     * The clear CSS property sets whether an element must be moved below (cleared) floating elements that precede it. The clear property applies to floating and non-floating elements.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/clear}
     */ clear:
        | "none"
        | "left"
        | "right"
        | "both"
        | "inline-start"
        | "inline-end";
    /**
     * ## `clip`
     *
     * The clip CSS property defines a visible portion of an element. The clip property applies only to absolutely positioned elements — that is, elements with position:absolute or position:fixed.
     * @deprecated
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/clip}
     */ clip: "auto";
    /**
     * ## `clip-path`
     *
     * The clip-path CSS property creates a clipping region that sets what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path}
     */ clipPath:
        | "none"
        | "margin-box"
        | "border-box"
        | "padding-box"
        | "content-box"
        | "fill-box"
        | "stroke"
        | "view-box";
    /**
     * ## `color`
     *
     * The color CSS property sets the foreground color value of an element's text and text decorations, and sets the currentcolor value. currentcolor may be used as an indirect value on other properties and is the default for other color properties, such as border-color.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color}
     */ color: Color;
    /**
     * ## `print-color-adjust`
     *
     * The print-color-adjust CSS property sets what, if anything, the user agent may do to optimize the appearance of the element on the output device. By default, the browser is allowed to make any adjustments to the element's appearance it determines to be necessary and prudent given the type and capabilities of the output device.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/print-color-adjust}
     */ colorAdjust: string;
    /**
     * ## `color-scheme`
     *
     */ colorScheme: "normal" | "light" | "dark";
    /**
     * ## `column-count`
     *
     * The color-scheme CSS property allows an element to indicate which color schemes it can comfortably be rendered in.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme}
     */ columnCount: "auto";
    /**
     * ## `column-fill`
     *
     */ columnFill: "auto" | "balance" | "balance-all";
    /**
     * ## `column-gap`
     *
     * The column-fill CSS property controls how an element's contents are balanced when broken into columns.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/column-fill}
     */ columnGap: "normal";
    /**
     * ## `column-rule`
     *
     * The column-rule shorthand CSS property sets the width, style, and color of the line drawn between columns in a multi-column layout.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule}
     */ columnRule: string;
    /**
     * ## `column-rule-color`
     *
     * The column-rule-color CSS property sets the color of the line drawn between columns in a multi-column layout.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-color}
     */ columnRuleColor: Color;
    /**
     * ## `column-rule-style`
     *
     * The column-rule-style CSS property sets the style of the line drawn between columns in a multi-column layout.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-style}
     */ columnRuleStyle:
        | "none"
        | "hidden"
        | "dotted"
        | "dashed"
        | "solid"
        | "double"
        | "groove"
        | "ridge"
        | "inset"
        | "outset";
    /**
     * ## `column-rule-width`
     *
     * The column-rule-width CSS property sets the width of the line drawn between columns in a multi-column layout.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-width}
     */ columnRuleWidth: "thin" | "medium" | "thick";
    /**
     * ## `column-span`
     *
     * The column-span CSS property makes it possible for an element to span across all columns when its value is set to all.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/column-span}
     */ columnSpan: "none" | "all";
    /**
     * ## `column-width`
     *
     * The column-width CSS property sets the ideal column width in a multi-column layout. The container will have as many columns as can fit without any of them having a width less than the column-width value. If the width of the container is narrower than the specified value, the single column's width will be smaller than the declared column width.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/column-width}
     */ columnWidth: "auto";
    /**
     * ## `columns`
     *
     * The columns CSS shorthand property sets the number of columns to use when drawing an element's contents, as well as those columns' widths.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/columns}
     */ columns: "auto";
    /**
     * ## `contain`
     *
     * The contain CSS property allows an author to indicate that an element and its contents are, as much as possible, independent of the rest of the document tree. Containment allows the browser to calculate layout, style, paint, size, or any combination of them for a specific area of the DOM. Changes within an element with containment applied are not propagated outside of the contained element to the rest of the page, leading to performance benefits through fewer DOM re-renders.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/contain}
     */ contain:
        | "none"
        | "strict"
        | "content"
        | "size"
        | "layout"
        | "style"
        | "paint";
    /**
     * ## `content`
     *
     * The content CSS property replaces an element with a generated value. Objects inserted using the content property are anonymous replaced elements.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/content}
     */ content:
        | "normal"
        | "none"
        | "open-quote"
        | "close-quote"
        | "no-open-quote"
        | "no-close-quote";
    /**
     * ## `content-visibility`
     *
     * The content-visibility CSS property controls whether or not an element renders its contents at all, along with forcing a strong set of containments, allowing user agents to potentially omit large swathes of layout and rendering work until it becomes needed. Basically it enables the user agent to skip an element's rendering work (including layout and painting) until it is needed — which makes the initial page load much faster.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/content-visibility}
     */ contentVisibility: "visible" | "hidden" | "auto";
    /**
     * ## `counter-increment`
     *
     * The counter-increment CSS property increases or decreases the value of a CSS counter by a given value.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/counter-increment}
     */ counterIncrement: string;
    /**
     * ## `counter-reset`
     *
     * The counter-reset CSS property resets a CSS counter to a given value. This property will create a new counter or reversed counter with the given name on the specified element.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/counter-reset}
     */ counterReset: string;
    /**
     * ## `counter-set`
     *
     * The counter-set CSS property sets a CSS counter to a given value. It manipulates the value of existing counters, and will only create new counters if there isn't already a counter of the given name on the element.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/counter-set}
     */ counterSet: string;
    /**
     * ## `cursor`
     *
     * The cursor CSS property sets the mouse cursor, if any, to show when the mouse pointer is over an element.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/cursor}
     */ cursor:
        | "auto"
        | "default"
        | "none"
        | "context-menu"
        | "help"
        | "pointer"
        | "progress"
        | "wait"
        | "cell"
        | "crosshair"
        | "text"
        | "vertical-text"
        | "alias"
        | "move"
        | "no-drop"
        | "not-allowed"
        | "grab"
        | "grabbing"
        | "n-resize"
        | "e-resize"
        | "w-resize"
        | "ne-resize"
        | "nw-resize"
        | "se-resize"
        | "sw-resize"
        | "ew-resize"
        | "ns-resize"
        | "ns-resize"
        | "nesw-resize"
        | "nwse-resize"
        | "zoom-in"
        | "zoom-out";
    /**
     * ## `direction`
     *
     * The direction CSS property sets the direction of text, table columns, and horizontal overflow. Use rtl for languages written from right to left (like Hebrew or Arabic), and ltr for those written from left to right (like English and most other languages).
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/direction}
     */ direction: "ltr" | "rtl";
    /**
     * ## `display`
     *
     * The display CSS property sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/display}
     */ display:
        | "block"
        | "inline"
        | "inline-block"
        | "flex"
        | "inline-flex"
        | "grid"
        | "inline-grid"
        | "flow-root"
        | "none"
        | "contents"
        | "table"
        | "table-row";
    /**
     * ## `empty-cells`
     *
     * The empty-cells CSS property sets whether borders and backgrounds appear around <table> cells that have no visible content.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/empty-cells}
     */ emptyCells: "show" | "hide";
    /**
     * ## `filter`
     *
     * The filter attribute specifies the filter effects defined by the <filter> element that shall be applied to its element.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/filter}
     */ filter: string;
    /**
     * ## `flex`
     *
     * The flex CSS shorthand property sets how a flex item will grow or shrink to fit the space available in its flex container.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/flex}
     */ flex: "auto" | "none";
    /**
     * ## `flex-basis`
     *
     * The flex-basis CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with box-sizing.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis}
     */ flexBasis: "max-content" | "min-content" | "fit-content" | "auto";
    /**
     * ## `flex-direction`
     *
     * The flex-direction CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction}
     */ flexDirection: "row" | "row-reverse" | "column" | "column-reverse";
    /**
     * ## `flex-flow`
     *
     * The flex-flow CSS shorthand property specifies the direction of a flex container, as well as its wrapping behavior.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow}
     */ flexFlow: string;
    /**
     * ## `flex-grow`
     *
     * The flex-grow CSS property sets the flex grow factor of a flex item's main size.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow}
     */ flexGrow: string;
    /**
     * ## `flex-shrink`
     *
     * The flex-shrink CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to flex-shrink.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink}
     */ flexShrink: string;
    /**
     * ## `flex-wrap`
     *
     * The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap}
     */ flexWrap: "nowrap" | "wrap" | "wrap-reverse";
    /**
     * ## `float`
     *
     * The float CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the page, though still remaining a part of the flow (in contrast to absolute positioning).
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/float}
     */ float: "left" | "right" | "none" | "inline-start" | "inline-end";
    /**
     * ## `font`
     *
     * The font CSS shorthand property sets all the different properties of an element's font. Alternatively, it sets an element's font to a system font.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font}
     */ font: string;
    /**
     * ## `font-family`
     *
     * The font-family CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-family}
     */ fontFamily:
        | "serif"
        | "sans-serif"
        | "monospace"
        | "cursive"
        | "fantasy"
        | "system-ui"
        | "ui-serif"
        | "ui-sans-serif"
        | "ui-monospace"
        | "ui-rounded"
        | "emoji"
        | "math"
        | "fangsong";
    /**
     * ## `font-feature-settings`
     *
     * The font-feature-settings CSS property controls advanced typographic features in OpenType fonts.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-feature-settings}
     */ fontFeatureSettings: string;
    /**
     * ## `font-kerning`
     *
     * The font-kerning CSS property sets the use of the kerning information stored in a font.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-kerning}
     */ fontKerning: "auto" | "normal" | "none";
    /**
     * ## `font-size`
     *
     * The font-size CSS property sets the size of the font. Changing the font size also updates the sizes of the font size-relative <length> units, such as em, ex, and so forth.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-size}
     */ fontSize:
        | "xx-small"
        | "x-small"
        | "small"
        | "medium"
        | "large"
        | "x-large"
        | "xx-large"
        | "xxx-large";
    /**
     * ## `font-size-adjust`
     *
     * The font-size-adjust CSS property sets the size of lower-case letters relative to the current font size (which defines the size of upper-case letters).
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-size-adjust}
     */ fontSizeAdjust: "none";
    /**
     * ## `font-stretch`
     *
     * The font-stretch CSS property selects a normal, condensed, or expanded face from a font.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch}
     */ fontStretch:
        | "ultra-condensed"
        | "extra-condensed"
        | "condensed"
        | "semi-condensed"
        | "normal"
        | "semi-expanded"
        | "expanded"
        | "extra-expanded"
        | "ultra-expanded";
    /**
     * ## `font-style`
     *
     * The font-style CSS property sets whether a font should be styled with a normal, italic, or oblique face from its font-family.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-style}
     */ fontStyle: "normal" | "italic" | "oblique";
    /**
     * ## `font-synthesis`
     *
     * The font-synthesis CSS property controls which missing typefaces, bold, italic, or small-caps, may be synthesized by the browser.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-synthesis}
     */ fontSynthesis: "none" | "weight" | "style" | "small-caps";
    /**
     * ## `font-variant`
     *
     * The font-variant CSS shorthand property allows you to set all the font variants for a font.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant}
     */ fontVariant: string;
    /**
     * ## `font-variant-alternates`
     *
     * The font-variant-alternates CSS property controls the usage of alternate glyphs. These alternate glyphs may be referenced by alternative names defined in @font-feature-values.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-alternates}
     */ fontVariantAlternates: string;
    /**
     * ## `font-variant-caps`
     *
     * The font-variant-caps CSS property controls the use of alternate glyphs for capital letters.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-caps}
     */ fontVariantCaps: string;
    /**
     * ## `font-variant-east-asian`
     *
     * The font-variant-east-asian CSS property controls the use of alternate glyphs for East Asian scripts, like Japanese and Chinese.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-east-asian}
     */ fontVariantEastAsian: string;
    /**
     * ## `font-variant-ligatures`
     *
     * The font-variant-ligatures CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-ligatures}
     */ fontVariantLigatures: string;
    /**
     * ## `font-variant-numeric`
     *
     * The font-variant-numeric CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric}
     */ fontVariantNumeric: string;
    /**
     * ## `font-variant-position`
     *
     * The font-variant-position CSS property controls the use of alternate, smaller glyphs that are positioned as superscript or subscript.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-position}
     */ fontVariantPosition: string;
    /**
     * ## `font-variant-settings`
     *
     */ fontVariantSettings: string;
    /**
     * ## `font-weight`
     *
     * The font-weight CSS property sets the weight (or boldness) of the font. The weights available depend on the font-family that is currently set.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight}
     */ fontWeight:
        | "normal"
        | "bold"
        | "lighter"
        | "bolder"
        | "100"
        | "200"
        | "300"
        | "400"
        | "500"
        | "600"
        | "700"
        | "800"
        | "900";
    /**
     * ## `forced-color-adjust`
     *
     * The forced-color-adjust CSS property allows authors to opt certain elements out of forced colors mode. This then restores the control of those values to CSS.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/forced-color-adjust}
     */ forcedColorAdjust: Color;
    /**
     * ## `gap`
     *
     */ gap: string;
    /**
     * ## `grid`
     *
     * The gap CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for row-gap and column-gap.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/gap}
     */ grid: "none";
    /**
     * ## `grid-area`
     *
     * The grid-area CSS shorthand property specifies a grid item's size and location within a grid by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area}
     */ gridArea: string;
    /**
     * ## `grid-auto-columns`
     *
     * The grid-auto-columns CSS property specifies the size of an implicitly-created grid column track or pattern of tracks.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns}
     */ gridAutoColumns: "in-content" | "max-content" | "auto";
    /**
     * ## `grid-auto-flow`
     *
     * The grid-auto-flow CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow}
     */ gridAutoFlow: "row" | "column" | "dense";
    /**
     * ## `grid-auto-rows`
     *
     * The grid-auto-rows CSS property specifies the size of an implicitly-created grid row track or pattern of tracks.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows}
     */ gridAutoRows: "min-content" | "max-content" | "auto";
    /**
     * ## `grid-column`
     *
     * The grid-column CSS shorthand property specifies a grid item's size and location within a grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column}
     */ gridColumn: "auto";
    /**
     * ## `grid-column-end`
     *
     * The grid-column-end CSS property specifies a grid item's end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its grid area.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end}
     */ gridColumnEnd: "auto";
    /**
     * ## `grid-column-gap`
     *
     * The column-gap CSS property sets the size of the gap (gutter) between an element's columns.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap}
     */ gridColumnGap: "auto";
    /**
     * ## `grid-column-start`
     *
     * The grid-column-start CSS property specifies a grid item's start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the grid area.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start}
     */ gridColumnStart: string;
    /**
     * ## `grid-gap`
     *
     * The gap CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for row-gap and column-gap.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/gap}
     */ gridGap: string;
    /**
     * ## `grid-row`
     *
     * The grid-row CSS shorthand property specifies a grid item's size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row}
     */ gridRow: "auto";
    /**
     * ## `grid-row-end`
     *
     * The grid-row-end CSS property specifies a grid item's end position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-end edge of its grid area.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end}
     */ gridRowEnd: "auto";
    /**
     * ## `grid-row-gap`
     *
     * The row-gap CSS property sets the size of the gap (gutter) between an element's rows.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap}
     */ gridRowGap: "auto";
    /**
     * ## `grid-row-start`
     *
     * The grid-row-start CSS property specifies a grid item's start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start edge of its grid area.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start}
     */ gridRowStart: string;
    /**
     * ## `grid-template`
     *
     * The grid-template CSS property is a shorthand property for defining grid columns, rows, and areas.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template}
     */ gridTemplate: "none";
    /**
     * ## `grid-template-areas`
     *
     * The grid-template-areas CSS property specifies named grid areas, establishing the cells in the grid and assigning them names.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas}
     */ gridTemplateAreas: "none";
    /**
     * ## `grid-template-columns`
     *
     * The grid-template-columns CSS property defines the line names and track sizing functions of the grid columns.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns}
     */ gridTemplateColumns: "none";
    /**
     * ## `grid-template-rows`
     *
     * The grid-template-rows CSS property defines the line names and track sizing functions of the grid rows.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows}
     */ gridTemplateRows: "none";
    /**
     * ## `hanging-punctuation`
     *
     * The hanging-punctuation CSS property specifies whether a punctuation mark should hang at the start or end of a line of text. Hanging punctuation may be placed outside the line box.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/hanging-punctuation}
     */ hangingPunctuation:
        | "none"
        | "first"
        | "last"
        | "force-end"
        | "allow-end";
    /**
     * ## `height`
     *
     * The height CSS property specifies the height of an element. By default, the property defines the height of the content area. If box-sizing is set to border-box, however, it instead determines the height of the border area.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/height}
     */ height: "max-content" | "min-content" | "auto";
    /**
     * ## `hyphens`
     *
     * The hyphens CSS property specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens}
     */ hyphens: "none" | "manual" | "auto";
    /**
     * ## `isolation`
     *
     * The isolation CSS property determines whether an element must create a new stacking context.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/isolation}
     */ isolation: "auto" | "isolate";
    /**
     * ## `image-orientation`
     *
     * The image-orientation CSS property specifies a layout-independent correction to the orientation of an image.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/image-orientation}
     */ imageOrientation: "none" | "from-image";
    /**
     * ## `image-rendering`
     *
     * The image-rendering CSS property sets an image scaling algorithm. The property applies to an element itself, to any images set in its other properties, and to its descendants.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/image-rendering}
     */ imageRendering: "auto" | "crisp-edge" | "pixelated";
    /**
     * ## `image-resolution`
     *
     * The image-resolution CSS property specifies the intrinsic resolution of all raster images used in or on the element. It affects content images such as replaced elements and generated content, and decorative images such as background-image images.
     * @experimental
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/image-resolution}
     */ imageResolution: "from-image";
    /**
     * ## `initial-letter`
     *
     * The initial-letter CSS property sets styling for dropped, raised, and sunken initial letters.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/initial-letter}
     */ initialLetter: "normal";
    /**
     * ## `inline-size`
     *
     * The inline-size CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the width or the height property, depending on the value of writing-mode.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size}
     */ inlineSize: "auto" | "max-content" | "min-content";
    /**
     * ## `inset`
     *
     * The inset CSS property is a shorthand that corresponds to the top, right, bottom, and/or left properties. It has the same multi-value syntax of the margin shorthand.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/inset}
     */ inset: "auto";
    /**
     * ## `inset-inline`
     *
     * The inset-inline CSS property defines the logical start and end offsets of an element in the inline direction, which maps to physical offsets depending on the element's writing mode, directionality, and text orientation. It corresponds to the top and bottom, or right and left properties depending on the values defined for writing-mode, direction, and text-orientation.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline}
     */ insetBlock: "auto";
    /**
     * ## `inset-block-start`
     *
     * The inset-block-start CSS property defines the logical block start offset of an element, which maps to a physical inset depending on the element's writing mode, directionality, and text orientation. It corresponds to the top, right, bottom, or left property depending on the values defined for writing-mode, direction, and text-orientation.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/inset-block-start}
     */ insetBlockStart: "auto";
    /**
     * ## `inset-inline-start`
     *
     * The inset-inline-start CSS property defines the logical inline start inset of an element, which maps to a physical offset depending on the element's writing mode, directionality, and text orientation. It corresponds to the top, right, bottom, or left property depending on the values defined for writing-mode, direction, and text-orientation.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/inset-inline-start}
     */ insetInlineStart: "auto";
    /**
     * ## `justify-content`
     *
     * The CSS justify-content property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content}
     */ justifyContent:
        | "center"
        | "start"
        | "end"
        | "flex-start"
        | "flex-end"
        | "left"
        | "right"
        | "normal"
        | "space-between"
        | "space-around"
        | "stretch"
        | "safe center"
        | "unsafe center";
    /**
     * ## `justify-items`
     *
     * The CSS justify-items property defines the default justify-self for all items of the box, giving them all a default way of justifying each box along the appropriate axis.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items}
     */ justifyItems:
        | "center"
        | "start"
        | "end"
        | "flex-start"
        | "flex-end"
        | "left"
        | "right"
        | "normal"
        | "space-between"
        | "space-around"
        | "stretch"
        | "safe center"
        | "unsafe center"
        | "self-start"
        | "self-end"
        | "baseline"
        | "first baseline"
        | "last baseline"
        | "legacy right"
        | "legacy left"
        | "legacy center";
    /**
     * ## `justify-self`
     *
     * The CSS justify-self property sets the way a box is justified inside its alignment container along the appropriate axis.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self}
     */ justifySelf:
        | "auto"
        | "normal"
        | "stretch"
        | "center"
        | "start"
        | "end"
        | "flex-start"
        | "flex-end"
        | "self-start"
        | "self-end"
        | "left"
        | "right"
        | "baseline"
        | "first baseline"
        | "last baseline"
        | "safe center"
        | "unsafe center";
    /**
     * ## `left`
     *
     * The left CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/left}
     */ left: "auto";
    /**
     * ## `letter-spacing`
     *
     * The letter-spacing CSS property sets the horizontal spacing behavior between text characters. This value is added to the natural spacing between characters while rendering the text. Positive values of letter-spacing causes characters to spread farther apart, while negative values of letter-spacing bring characters closer together.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing}
     */ letterSpacing: "normal";
    /**
     * ## `line-height`
     *
     * The line-height CSS property sets the height of a line box. It's commonly used to set the distance between lines of text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/line-height}
     */ lineHeight: "normal";
    /**
     * ## `line-break`
     *
     * The line-break CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/line-break}
     */ lineBreak: "auto" | "loose" | "normal" | "strict" | "anywhere";
    /**
     * ## `list-style`
     *
     * The list-style CSS shorthand property allows you to set all the list style properties at once.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/list-style}
     */ listStyle: string;
    /**
     * ## `list-style-image`
     *
     * The list-style-image CSS property sets an image to be used as the list item marker.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-image}
     */ listStyleImage: "none";
    /**
     * ## `list-style-position`
     *
     * The list-style-position CSS property sets the position of the ::marker relative to a list item.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-position}
     */ listStylePosition: "inside" | "outside";
    /**
     * ## `list-style-type`
     *
     * The list-style-type CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type}
     */ listStyleType:
        | "none"
        | "disc"
        | "circle"
        | "square"
        | "decimal"
        | "georgian"
        | "trad-chinese-informal"
        | "kannada"
        | "decimal-leading-zero"
        | "lower-roman"
        | "upper-roman"
        | "lower-greek"
        | "lower-alpha"
        | "upper-alpha"
        | "armenian"
        | "bengali"
        | "cambodian"
        | "devanagari"
        | "gujarati"
        | "kannada"
        | "lao"
        | "malayalam"
        | "myanmar"
        | "oriya"
        | "telugu";
    /**
     * ## `margin`
     *
     * The margin CSS shorthand property sets the margin area on all four sides of an element.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/margin}
     */ margin: "auto";
    /**
     * ## `margin-block`
     *
     * The margin-block CSS shorthand property defines the logical block start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/margin-block}
     */ marginBlock: string;
    /**
     * ## `margin-block-end`
     *
     * The margin-block-end CSS property defines the logical block end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/margin-block-end}
     */ marginBlockEnd: "auto";
    /**
     * ## `margin-block-start`
     *
     * The margin-block-start CSS property defines the logical block start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/margin-block-start}
     */ marginBlockStart: "auto";
    /**
     * ## `margin-bottom`
     *
     * The margin-bottom CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom}
     */ marginBottom: "auto";
    /**
     * ## `margin-inline`
     *
     * The margin-inline CSS shorthand property is a shorthand property that defines both the logical inline start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline}
     */ marginInline: "auto";
    /**
     * ## `margin-inline-end`
     *
     * The margin-inline-end CSS property defines the logical inline end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. In other words, it corresponds to the margin-top, margin-right, margin-bottom or margin-left property depending on the values defined for writing-mode, direction, and text-orientation.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-end}
     */ marginInlineEnd: "auto";
    /**
     * ## `margin-inline-start`
     *
     * The margin-inline-start CSS property defines the logical inline start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation. It corresponds to the margin-top, margin-right, margin-bottom, or margin-left property depending on the values defined for writing-mode, direction, and text-orientation.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/margin-inline-start}
     */ marginInlineStart: "auto";
    /**
     * ## `margin-left`
     *
     * The margin-left CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left}
     */ marginLeft: "auto";
    /**
     * ## `margin-right`
     *
     * The margin-right CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right}
     */ marginRight: "auto";
    /**
     * ## `margin-top`
     *
     * The margin-top CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top}
     */ marginTop: "auto";
    /**
     * ## `mask`
     *
     * The mask CSS shorthand property hides an element (partially or fully) by masking or clipping the image at specific points.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/mask}
     */ mask: "none";
    /**
     * ## `mask-border`
     *
     * The mask-border CSS shorthand property lets you create a mask along the edge of an element's border.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/mask-border}
     */ maskBorder: string;
    /**
     * ## `mask-border-mode`
     *
     * The mask-border-mode CSS property specifies the blending mode used in a mask border.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/mask-border-mode}
     */ maskBorderMode: "luminance" | "alpha";
    /**
     * ## `mask-border-outset`
     *
     * The mask-border-outset CSS property specifies the distance by which an element's mask border is set out from its border box.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/mask-border-outset}
     */ maskBorderOutset: string;
    /**
     * ## `mask-border-repeat`
     *
     * The mask-border-repeat CSS property sets how the edge regions of a source image are adjusted to fit the dimensions of an element's mask border.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/mask-border-repeat}
     */ maskBorderRepeat: "stretch" | "repeat" | "round" | "space";
    /**
     * ## `mask-border-slice`
     *
     * The mask-border-slice CSS property divides the image set by mask-border-source into regions. These regions are used to form the components of an element's mask border.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/mask-border-slice}
     */ maskBorderSlice: string;
    /**
     * ## `mask-border-source`
     *
     * The mask-border-source CSS property sets the source image used to create an element's mask border.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/mask-border-source}
     */ maskBorderSource: "none";
    /**
     * ## `mask-border-width`
     *
     * The mask-border-width CSS property sets the width of an element's mask border.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/mask-border-width}
     */ maskBorderWidth: "auto";
    /**
     * ## `mask-clip`
     *
     * The mask-clip CSS property determines the area which is affected by a mask. The painted content of an element must be restricted to this area.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/mask-clip}
     */ maskClip:
        | "content-box"
        | "padding-box"
        | "border-box"
        | "margin-box"
        | "fill-box"
        | "stroke-box"
        | "view-box"
        | "no-clip";
    /**
     * ## `mask-composite`
     *
     * The mask-composite CSS property represents a compositing operation used on the current mask layer with the mask layers below it.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/mask-composite}
     */ maskComposite: "add" | "subtract" | "intersect" | "exclude";
    /**
     * ## `mask-image`
     *
     * The mask-image CSS property sets the image that is used as mask layer for an element. By default this means the alpha channel of the mask image will be multiplied with the alpha channel of the element. This can be controlled with the mask-mode property.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image}
     */ maskImage: "none";
    /**
     * ## `mask-mode`
     *
     * The mask-mode CSS property sets whether the mask reference defined by mask-image is treated as a luminance or alpha mask.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/mask-mode}
     */ maskMode: "alpha" | "luminance" | "match-source";
    /**
     * ## `mask-origin`
     *
     * The mask-origin CSS property sets the origin of a mask.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/mask-origin}
     */ maskOrigin:
        | "content-box"
        | "padding-box"
        | "border-box"
        | "margin-box"
        | "fill-box"
        | "stroke-box"
        | "view-box"
        | "content"
        | "padding"
        | "border";
    /**
     * ## `mask-position`
     *
     * The mask-position CSS property sets the initial position, relative to the mask position layer set by mask-origin, for each defined mask image.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/mask-position}
     */ maskPosition: "top" | "bottom" | "left" | "right" | "center";
    /**
     * ## `mask-repeat`
     *
     * The mask-repeat CSS property sets how mask images are repeated. A mask image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/mask-repeat}
     */ maskRepeat:
        | "repeat-x"
        | "repeat-y"
        | "repeat"
        | "space"
        | "round"
        | "no-repeat";
    /**
     * ## `mask-size`
     *
     * The mask-size CSS property specifies the sizes of the mask images. The size of the image can be fully or partially constrained in order to preserve its intrinsic ratio.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/mask-size}
     */ maskSize: "cover" | "contain";
    /**
     * ## `mask-type`
     *
     * The mask-type CSS property sets whether an SVG <mask> element is used as a luminance or an alpha mask. It applies to the <mask> element itself.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/mask-type}
     */ maskType: "alpha" | "luminance";
    /**
     * ## `math-style`
     *
     * The math-style property indicates whether MathML equations should render with normal or compact height.
     *
     * @experimental
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/math-style}
     */ mathStyle: "normal" | "compact";
    /**
     * ## `max-block-size`
     *
     * The max-block-size CSS property specifies the maximum size of an element in the direction opposite that of the writing direction as specified by writing-mode. That is, if the writing direction is horizontal, then max-block-size is equivalent to max-height; if the writing direction is vertical, max-block-size is the same as max-width.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/max-block-size}
     */ maxBlockSize: "none" | "max-content" | "min-content";
    /**
     * ## `max-inline-size`
     *
     * The max-inline-size CSS property defines the horizontal or vertical maximum size of an element's block, depending on its writing mode. It corresponds to either the max-width or the max-height property, depending on the value of writing-mode.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/max-inline-size}
     */ maxInlineSize: "none" | "max-content" | "min-content";
    /**
     * ## `min-block-size`
     *
     * The min-block-size CSS property defines the minimum horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the min-width or the min-height property, depending on the value of writing-mode.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/min-block-size}
     */ minBlockSize: "none" | "max-content" | "min-content";
    /**
     * ## `min-inline-size`
     *
     * The min-inline-size CSS property defines the horizontal or vertical minimal size of an element's block, depending on its writing mode. It corresponds to either the min-width or the min-height property, depending on the value of writing-mode.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/min-inline-size}
     */ minInlineSize: "none" | "max-content" | "min-content";
    /**
     * ## `max-height`
     *
     * The max-height CSS property sets the maximum height of an element. It prevents the used value of the height property from becoming larger than the value specified for max-height.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/max-height}
     */ maxHeight: "none" | "max-content" | "min-content";
    /**
     * ## `max-width`
     *
     * The max-width CSS property sets the maximum width of an element. It prevents the used value of the width property from becoming larger than the value specified by max-width.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/max-width}
     */ maxWidth: "none" | "max-content" | "min-content";
    /**
     * ## `min-height`
     *
     * The min-height CSS property sets the minimum height of an element. It prevents the used value of the height property from becoming smaller than the value specified for min-height.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/min-height}
     */ minHeight: "none" | "max-content" | "min-content";
    /**
     * ## `min-width`
     *
     * The min-width CSS property sets the minimum width of an element. It prevents the used value of the width property from becoming smaller than the value specified for min-width.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/min-width}
     */ minWidth: "none" | "max-content" | "min-content";
    /**
     * ## `mix-blend-mode`
     *
     * The mix-blend-mode CSS property sets how an element's content should blend with the content of the element's parent and the element's background.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode}
     */ mixBlendMode:
        | "normal"
        | "multiply"
        | "screen"
        | "overlay"
        | "darken"
        | "lighten"
        | "color-dodge"
        | "color-burn"
        | "hard-light"
        | "soft-light"
        | "difference"
        | "exclusion"
        | "hue"
        | "saturation"
        | "color"
        | "luminosity";
    /**
     * ## `object-fit`
     *
     * The object-fit CSS property sets how the content of a replaced element, such as an <img> or <video>, should be resized to fit its container.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit}
     */ objectFit: "contain" | "cover" | "fill" | "none" | "scale-down";
    /**
     * ## `object-position`
     *
     * The object-position CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/object-position}
     */ objectPosition: "top" | "bottom" | "left" | "right" | "center";
    /**
     * ## `offset`
     *
     * The offset CSS shorthand property sets all the properties required for animating an element along a defined path.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/offset}
     */ offset: "none" | "auto";
    /**
     * ## `offset-anchor`
     *
     * The offset-anchor CSS property specifies the point inside the box of an element traveling along an offset-path that is actually moving along the path.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/offset-anchor}
     */ offsetAnchor: "top" | "bottom" | "left" | "right" | "center" | "auto";
    /**
     * ## `offset-distance`
     *
     * The offset-distance CSS property specifies a position along an offset-path for an element to be placed.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/offset-distance}
     */ offsetDistance: string;
    /**
     * ## `offset-path`
     *
     * The offset-path CSS property specifies a motion path for an element to follow and defines the element's positioning within the parent container or SVG coordinate system.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/offset-path}
     */ offsetPath: "none" | "margin-box" | "stroke-box";
    /**
     * ## `offset-position`
     *
     * The offset-position CSS property defines the initial position of the offset-path.
     * @experimental
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/offset-position}
     */ offsetPosition: "top" | "bottom" | "left" | "right" | "center" | "auto";
    /**
     * ## `offset-rotate`
     *
     * The offset-rotate CSS property defines the orientation/direction of the element as it is positioned along the offset-path.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/offset-rotate}
     */ offsetRotate: "auto";
    /**
     * ## `opacity`
     *
     * The opacity CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/opacity}
     */ opacity: string;
    /**
     * ## `order`
     *
     * The order CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending order value and then by their source code order.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/order}
     */ order: string;
    /**
     * ## `orphans`
     *
     * The orphans CSS property sets the minimum number of lines in a block container that must be shown at the bottom of a page, region, or column.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/orphans}
     */ orphans: string;
    /**
     * ## `outline`
     *
     * The outline CSS shorthand property sets most of the outline properties in a single declaration.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/outline}
     */ outline: string;
    /**
     * ## `outline-color`
     *
     * The outline-color CSS property sets the color of an element's outline.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/outline-color}
     */ outlineColor: Color;
    /**
     * ## `outline-offset`
     *
     * The outline-offset CSS property sets the amount of space between an outline and the edge or border of an element.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/outline-offset}
     */ outlineOffset: string;
    /**
     * ## `outline-style`
     *
     * The outline-style CSS property sets the style of an element's outline. An outline is a line that is drawn around an element, outside the border.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/outline-style}
     */ outlineStyle:
        | "auto"
        | "none"
        | "dotted"
        | "dashed"
        | "solid"
        | "double"
        | "groove"
        | "ridge"
        | "inset"
        | "outset";
    /**
     * ## `outline-width`
     *
     * The CSS outline-width property sets the thickness of an element's outline. An outline is a line that is drawn around an element, outside the border.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/outline-width}
     */ outlineWidth: "thin" | "medium" | "thick";
    /**
     * ## `overflow`
     *
     * The overflow CSS shorthand property sets the desired behavior for an element's overflow — i.e. when an element's content is too big to fit in its block formatting context — in both directions.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/overflow}
     */ overflow: "visible" | "hidden" | "clip" | "scroll" | "auto";
    /**
     * ## `overflow-anchor`
     *
     * The overflow-anchor CSS property provides a way to opt out of the browser's scroll anchoring behavior, which adjusts scroll position to minimize content shifts.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-anchor}
     */ overflowAnchor: "auto" | "none";
    /**
     * ## `overflow-block`
     *
     * The overflow-block CSS property sets what shows when content overflows the block start and block end edges of a box. This may be nothing, a scroll bar, or the overflow content.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-block}
     */ overflowBlock: "visible" | "hidden" | "scroll" | "auto";
    /**
     * ## `overflow-clip-margin`
     *
     * The overflow-clip-margin CSS property determines how far outside its bounds an element with overflow: clip may be painted before being clipped.
     * @experimental
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-clip-margin}
     */ overflowClipMargin: string;
    /**
     * ## `overflow-inline`
     *
     * The overflow-inline CSS property sets what shows when content overflows the inline start and end edges of a box. This may be nothing, a scroll bar, or the overflow content.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-inline}
     */ overflowInline: "visible" | "hidden" | "scroll" | "auto";
    /**
     * ## `overflow-wrap`
     *
     * The overflow-wrap CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap}
     */ overflowWrap: "normal" | "break-word" | "anywhere";
    /**
     * ## `overflow-x`
     *
     * The overflow-x CSS property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x}
     */ overflowX: "visible" | "hidden" | "clip" | "scroll" | "auto";
    /**
     * ## `overflow-y`
     *
     * The overflow-y CSS property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y}
     */ overflowY: "visible" | "hidden" | "clip" | "scroll" | "auto";
    /**
     * ## `overscroll-behavior`
     *
     * The overscroll-behavior CSS property sets what a browser does when reaching the boundary of a scrolling area. It's a shorthand for overscroll-behavior-x and overscroll-behavior-y.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior}
     */ overscrollBehavior: "auto" | "contain" | "none";
    /**
     * ## `overscroll-behavior-block`
     *
     * The overscroll-behavior-block CSS property sets the browser's behavior when the block direction boundary of a scrolling area is reached.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior-block}
     */ overscrollBehaviorBlock: "auto" | "contain" | "none";
    /**
     * ## `overscroll-behavior-inline`
     *
     * The overscroll-behavior-inline CSS property sets the browser's behavior when the inline direction boundary of a scrolling area is reached.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior-inline}
     */ overscrollBehaviorInline: "auto" | "contain" | "none";
    /**
     * ## `overscroll-behavior-x`
     *
     * The overscroll-behavior-x CSS property sets the browser's behavior when the horizontal boundary of a scrolling area is reached.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior-x}
     */ overscrollBehaviorX: "auto" | "contain" | "none";
    /**
     * ## `overscroll-behavior-y`
     *
     * The overscroll-behavior-y CSS property sets the browser's behavior when the vertical boundary of a scrolling area is reached.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior-y}
     */ overscrollBehaviorY: "auto" | "contain" | "none";
    /**
     * ## `right`
     *
     * The right CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/right}
     */ right: "auto";
    /**
     * ## `padding`
     *
     * The padding CSS shorthand property sets the padding area on all four sides of an element at once.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/padding}
     */ padding: string;
    /**
     * ## `padding-block`
     *
     * The padding-block CSS shorthand property defines the logical block start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block}
     */ paddingBlock: string;
    /**
     * ## `padding-block-end`
     *
     * The padding-block-end CSS property defines the logical block end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block-end}
     */ paddingBlockEnd: string;
    /**
     * ## `padding-block-start`
     *
     * The padding-block-start CSS property defines the logical block start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/padding-block-start}
     */ paddingBlockStart: string;
    /**
     * ## `padding-bottom`
     *
     * The padding-bottom CSS property sets the height of the padding area on the bottom of an element.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom}
     */ paddingBottom: string;
    /**
     * ## `padding-inline`
     *
     * The padding-inline CSS shorthand property defines the logical inline start and end padding of an element, which maps to physical padding properties depending on the element's writing mode, directionality, and text orientation.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline}
     */ paddingInline: string;
    /**
     * ## `padding-inline-end`
     *
     * The padding-inline-end CSS property defines the logical inline end padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-end}
     */ paddingInlineEnd: string;
    /**
     * ## `padding-inline-start`
     *
     * The padding-inline-start CSS property defines the logical inline start padding of an element, which maps to a physical padding depending on the element's writing mode, directionality, and text orientation.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/padding-inline-start}
     */ paddingInlineStart: string;
    /**
     * ## `padding-left`
     *
     * The padding-left CSS property sets the width of the padding area to the left of an element.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left}
     */ paddingLeft: string;
    /**
     * ## `padding-right`
     *
     * The padding-right CSS property sets the width of the padding area on the right of an element.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right}
     */ paddingRight: string;
    /**
     * ## `padding-top`
     *
     * The padding-top CSS property sets the height of the padding area on the top of an element.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top}
     */ paddingTop: string;
    /**
     * ## `page-break-after`
     *
     * The page-break-after CSS property adjusts page breaks after the current element.
     *
     * `Warning: This property has been replaced by the break-after property.`
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-after}
     */ pageBreakAfter: string;
    /**
     * ## `page-break-before`
     *
     * The page-break-before CSS property adjusts page breaks before the current element.
     *
     * `Warning: This property has been replaced by the break-before property.`
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-before}
     */ pageBreakBefore: string;
    /**
     * ## `page-break-inside`
     *
     * The page-break-inside CSS property adjusts page breaks inside the current element.
     *
     * `Warning: This property has been replaced by the break-inside property.`
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/page-break-inside}
     */ pageBreakInside: string;
    /**
     * ## `perspective`
     *
     * The perspective CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/perspective}
     */ perspective: "none";
    /**
     * ## `perspective-origin`
     *
     * The perspective-origin CSS property determines the position at which the viewer is looking. It is used as the vanishing point by the perspective property.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/perspective-origin}
     */ perspectiveOrigin: "top" | "center" | "right";
    /**
     * ## `place-content`
     *
     * The place-content CSS shorthand property allows you to align content along both the block and inline directions at once (i.e. the align-content and justify-content properties) in a relevant layout system such as Grid or Flexbox.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/place-content}
     */ placeContent:
        | "start"
        | "end"
        | "flex-start"
        | "flex-end"
        | "center"
        | "center"
        | "left"
        | "right"
        | "space-between"
        | "baseline"
        | "first baseline"
        | "last baseline"
        | "space-evenly"
        | "stretch"
        | "safe"
        | "unsafe";
    /**
     * ## `place-items`
     *
     * The CSS place-items shorthand property allows you to align items along both the block and inline directions at once (i.e. the align-items and justify-items properties) in a relevant layout system such as Grid or Flexbox. If the second value is not set, the first value is also used for it.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/place-items}
     */ placeItems:
        | "start"
        | "end"
        | "flex-start"
        | "flex-end"
        | "center"
        | "center"
        | "left"
        | "right"
        | "space-between"
        | "baseline"
        | "first baseline"
        | "last baseline"
        | "space-evenly"
        | "stretch"
        | "safe"
        | "unsafe"
        | "normal"
        | "legacy"
        | "self-start"
        | "self-end";
    /**
     * ## `pointer-events`
     *
     * The pointer-events CSS property sets under what circumstances (if any) a particular graphic element can become the target of pointer events.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events}
     */ pointerEvents:
        | "auto"
        | "none"
        | "visiblePainted"
        | "visibleFill"
        | "visibleStroke"
        | "visible"
        | "painted"
        | "fill"
        | "stroke"
        | "all";
    /**
     * ## `position`
     *
     * The position CSS property sets how an element is positioned in a document. The top, right, bottom, and left properties determine the final location of positioned elements.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/position}
     */ position: "static" | "relative" | "absolute" | "fixed" | "sticky";
    /**
     * ## `quotes`
     *
     * The quotes CSS property sets how the browser should render quotation marks that are added using the open-quotes or close-quotes values of the CSS content property.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/quotes}
     */ quotes: "none" | "auto";
    /**
     * ## `resize`
     *
     * The resize CSS property sets whether an element is resizable, and if so, in which directions.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/resize}
     */ resize: string;
    /**
     * ## `rotate`
     *
     * The rotate CSS property allows you to specify rotation transforms individually and independently of the transform property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the transform property.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/rotate}
     */ rotate: "none";
    /**
     * ## `row-gap`
     *
     * The row-gap CSS property sets the size of the gap (gutter) between an element's rows.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap}
     */ rowGap: string;
    /**
     * ## `ruby-align`
     *
     */ rubyAlign: "start" | "center" | "space-between" | "space-around";
    /**
     * ## `ruby-position`
     *
     * The ruby-position CSS property defines the position of a ruby element relatives to its base element. It can be positioned over the element (over), under it (under), or between the characters on their right side (inter-character).
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/ruby-position}
     */ rubyPosition: "over" | "under" | "inter-character" | "alternate";
    /**
     * ## `scale`
     *
     * The scale CSS property allows you to specify scale transforms individually and independently of the transform property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the transform value.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/scale}
     */ scale: string;
    /**
     * ## `scroll-behavior`
     *
     * The scroll-behavior CSS property sets the behavior for a scrolling box when scrolling is triggered by the navigation or CSSOM scrolling APIs.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior}
     */ scrollBehavior: "auto" | "smooth";
    /**
     * ## `scroll-margin`
     *
     * The scroll-margin shorthand property sets all of the scroll margins of an element at once, assigning values much like the margin property does for margins of an element.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin}
     */ scrollMargin: string;
    /**
     * ## `scroll-margin-block`
     *
     * The scroll-margin-block shorthand property sets the scroll margins of an element in the block dimension.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-block}
     */ scrollMarginBlock: string;
    /**
     * ## `scroll-margin-block-end`
     *
     * The scroll-margin-block-end property defines the margin of the scroll snap area at the end of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-block-end}
     */ scrollMarginBlockEnd: string;
    /**
     * ## `scroll-margin-block-start`
     *
     * The scroll-margin-block-start property defines the margin of the scroll snap area at the start of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-block-start}
     */ scrollMarginBlockStart: string;
    /**
     * ## `scroll-margin-bottom`
     *
     * The scroll-margin-bottom property defines the bottom margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-bottom}
     */ scrollMarginBottom: string;
    /**
     * ## `scroll-margin-inline`
     *
     * The scroll-margin-inline shorthand property sets the scroll margins of an element in the inline dimension.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-inline}
     */ scrollMarginInline: string;
    /**
     * ## `scroll-margin-inline-end`
     *
     * The scroll-margin-inline-end property defines the margin of the scroll snap area at the end of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-inline-end}
     */ scrollMarginInlineEnd: string;
    /**
     * ## `scroll-margin-inline-start`
     *
     * The scroll-margin-inline-start property defines the margin of the scroll snap area at the start of the inline dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-inline-start}
     */ scrollMarginInlineStart: string;
    /**
     * ## `scroll-margin-left`
     *
     * The scroll-margin-left property defines the left margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-left}
     */ scrollMarginLeft: string;
    /**
     * ## `scroll-margin-right`
     *
     * The scroll-margin-right property defines the right margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-right}
     */ scrollMarginRight: string;
    /**
     * ## `scroll-margin-top`
     *
     * The scroll-margin-top property defines the top margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container's coordinate space), then adding the specified outsets.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-top}
     */ scrollMarginTop: string;
    /**
     * ## `scroll-padding`
     *
     * The scroll-padding shorthand property sets scroll padding on all sides of an element at once, much like the padding property does for padding on an element.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding}
     */ scrollPadding: string;
    /**
     * ## `scroll-padding-block`
     *
     * The scroll-padding-block shorthand property sets the scroll padding of an element in the block dimension.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-block}
     */ scrollPaddingBlock: string;
    /**
     * ## `scroll-padding-block-end`
     *
     * The scroll-padding-block-end property defines offsets for the end edge in the block dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-block-end}
     */ scrollPaddingBlockEnd: string;
    /**
     * ## `scroll-padding-block-start`
     *
     * The scroll-padding-block-start property defines offsets for the start edge in the block dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-block-start}
     */ scrollPaddingBlockStart: string;
    /**
     * ## `scroll-padding-bottom`
     *
     * The scroll-padding-bottom property defines offsets for the bottom of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-bottom}
     */ scrollPaddingBottom: string;
    /**
     * ## `scroll-padding-inline-end`
     *
     * The scroll-padding-inline-end property defines offsets for the end edge in the inline dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-inline-end}
     */ scrollPaddingInline: string;
    /**
     * ## `scroll-padding-inline-start`
     *
     * The scroll-padding-inline-start property defines offsets for the start edge in the inline dimension of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-inline-start}
     */ scrollPaddingInlineStart: string;
    /**
     * ## `scroll-padding-left`
     *
     * The scroll-padding-left property defines offsets for the left of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-left}
     */ scrollPaddingLeft: string;
    /**
     * ## `scroll-padding-right`
     *
     * The scroll-padding-right property defines offsets for the right of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-right}
     */ scrollPaddingRight: string;
    /**
     * ## `scroll-padding-top`
     *
     * The scroll-padding-top property defines offsets for the top of the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user. This allows the author to exclude regions of the scrollport that are obscured by other content (such as fixed-positioned toolbars or sidebars) or to put more breathing room between a targeted element and the edges of the scrollport.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding-top}
     */ scrollPaddingTop: string;
    /**
     * ## `scroll-snap-align`
     *
     * The scroll-snap-align property specifies the box's snap position as an alignment of its snap area (as the alignment subject) within its snap container's snapport (as the alignment container). The two values specify the snapping alignment in the block axis and inline axis, respectively. If only one value is specified, the second value defaults to the same value.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-align}
     */ scrollSnapAlign: "none" | "start" | "end" | "center";
    /**
     * ## `scroll-snap-stop`
     *
     * The scroll-snap-stop CSS property defines whether or not the scroll container is allowed to "pass over" possible snap positions.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-stop}
     */ scrollSnapStop: "normal" | "always";
    /**
     * ## `scroll-snap-type`
     *
     * The scroll-snap-type CSS property sets how strictly snap points are enforced on the scroll container in case there is one.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type}
     */ scrollSnapType:
        | "none"
        | "x"
        | "y"
        | "block"
        | "inline"
        | "both"
        | "mandatory"
        | "proximity";
    /**
     * ## `scrollbar-color`
     *
     * The scrollbar-color CSS property sets the color of the scrollbar track and thumb.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-color}
     */ scrollbarColor: Color;
    /**
     * ## `scrollbar-gutter`
     *
     * The scrollbar-gutter CSS property allows authors to reserve space for the scrollbar, preventing unwanted layout changes as the content grows while also avoiding unnecessary visuals when scrolling isn't needed.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-gutter}
     */ scrollbarGutter: "auto" | "stable" | "both-edges";
    /**
     * ## `scrollbar-width`
     *
     * The scrollbar-width property allows the author to set the maximum thickness of an element's scrollbars when they are shown.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-width}
     */ scrollbarWidth: "auto" | "thin" | "none";
    /**
     * ## `shape-image-threshold`
     *
     * The shape-image-threshold CSS property sets the alpha channel threshold used to extract the shape using an image as the value for shape-outside.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/shape-image-threshold}
     */ shapeImageThreshold: string;
    /**
     * ## `shape-margin`
     *
     * The shape-margin CSS property sets a margin for a CSS shape created using shape-outside.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/shape-margin}
     */ shapeMargin: string;
    /**
     * ## `shape-outside`
     *
     * The shape-outside CSS property defines a shape—which may be non-rectangular—around which adjacent inline content should wrap. By default, inline content wraps around its margin box; shape-outside provides a way to customize this wrapping, making it possible to wrap text around complex objects rather than simple boxes.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/shape-outside}
     */ shapeOutside:
        | "none"
        | "margin-box"
        | "content-box"
        | "border-box"
        | "padding-box";
    /**
     * ## `tab-size`
     *
     * The tab-size CSS property is used to customize the width of tab characters (U+0009).
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/tab-size}
     */ tabSize: string;
    /**
     * ## `table-layout`
     *
     * The table-layout CSS property sets the algorithm used to lay out <table> cells, rows, and columns.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout}
     */ tableLayout: "auto" | "fixed";
    /**
     * ## `text-align`
     *
     * The text-align CSS property sets the horizontal alignment of the inline-level content inside a block element or table-cell box. This means it works like vertical-align but in the horizontal direction.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-align}
     */ textAlign:
        | "start"
        | "end"
        | "left"
        | "right"
        | "center"
        | "justify"
        | "justify-all"
        | "match-parent";
    /**
     * ## `text-align-last`
     *
     * The text-align-last CSS property sets how the last line of a block or a line, right before a forced line break, is aligned.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-align-last}
     */ textAlignLast:
        | "start"
        | "end"
        | "left"
        | "right"
        | "center"
        | "justify";
    /**
     * ## `text-combine-upright`
     *
     * The text-combine-upright CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-combine-upright}
     */ textCombineUpright: "none" | "all";
    /**
     * ## `text-decoration`
     *
     * The text-decoration shorthand CSS property sets the appearance of decorative lines on text. It is a shorthand for text-decoration-line, text-decoration-color, text-decoration-style, and the newer text-decoration-thickness property.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration}
     */ textDecoration: "none";
    /**
     * ## `text-decoration-color`
     *
     * The text-decoration-color CSS property sets the color of decorations added to text by text-decoration-line.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-color}
     */ textDecorationColor: Color;
    /**
     * ## `text-decoration-line`
     *
     * The text-decoration-line CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line}
     */ textDecorationLine:
        | "none"
        | "underline"
        | "overline"
        | "line-through"
        | "blink";
    /**
     * ## `text-decoration-skip`
     *
     * The text-decoration-skip CSS property sets what parts of an element's content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors.
     * @experimental
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-skip}
     */ textDecorationSkip:
        | "none"
        | "objects"
        | "spaces"
        | "edges"
        | "box-decoration"
        | "leading-spaces"
        | "trailing-spaces";
    /**
     * ## `text-decoration-skip-ink`
     *
     * The text-decoration-skip-ink CSS property specifies how overlines and underlines are drawn when they pass over glyph ascenders and descenders.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-skip-ink}
     */ textDecorationSkipInk: "none" | "auto" | "all";
    /**
     * ## `text-decoration-style`
     *
     * The text-decoration-style CSS property sets the style of the lines specified by text-decoration-line. The style applies to all lines that are set with text-decoration-line.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-style}
     */ textDecorationStyle: "solid" | "double" | "dotted" | "dashed" | "wavy";
    /**
     * ## `text-decoration-thickness`
     *
     * The text-decoration-thickness CSS property sets the stroke thickness of the decoration line that is used on text in an element, such as a line-through, underline, or overline.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-thickness}
     */ textDecorationThickness: "auto" | "from-font";
    /**
     * ## `text-emphasis`
     *
     * The text-emphasis CSS property applies emphasis marks to text (except spaces and control characters). It is a shorthand for text-emphasis-style and text-emphasis-color.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-emphasis}
     */ textEmphasis: "none";
    /**
     * ## `text-emphasis-color`
     *
     * The text-emphasis-color CSS property sets the color of emphasis marks. This value can also be set using the text-emphasis shorthand.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-emphasis-color}
     */ textEmphasisColor: Color;
    /**
     * ## `text-emphasis-position`
     *
     */ textEmphasisPosition: "over" | "under" | "right" | "left";
    /**
     * ## `text-emphasis-style`
     *
     * The text-emphasis-position CSS property sets where emphasis marks are drawn. Like ruby text, if there isn't enough room for emphasis marks, the line height is increased.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-emphasis-position}
     */ textEmphasisStyle:
        | "none"
        | "filled"
        | "open"
        | "dot"
        | "circle"
        | "double-circle"
        | "triangle"
        | "sesame";
    /**
     * ## `text-indent`
     *
     * The text-indent CSS property sets the length of empty space (indentation) that is put before lines of text in a block.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent}
     */ textIndent: string;
    /**
     * ## `text-justify`
     *
     * The text-justify CSS property sets what type of justification should be applied to text when text-align: justify; is set on an element.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-justify}
     */ textJustify:
        | "none"
        | "auto"
        | "inter-word"
        | "inter-character"
        | "distribute";
    /**
     * ## `text-orientation`
     *
     * The text-orientation CSS property sets the orientation of the text characters in a line. It only affects text in vertical mode (when writing-mode is not horizontal-tb). It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-orientation}
     */ textOrientation:
        | "mixed"
        | "upright"
        | "sideways-right"
        | "sideways"
        | "use-glyph-orientation";
    /**
     * ## `text-overflow`
     *
     * The text-overflow CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('…'), or display a custom string.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow}
     */ textOverflow: "clip" | "ellipsis";
    /**
     * ## `text-rendering`
     *
     * The text-rendering CSS property provides information to the rendering engine about what to optimize for when rendering text.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-rendering}
     */ textRendering:
        | "auto"
        | "optimizeSpeed"
        | "optimizeLegibility"
        | "geometricPrecision";
    /**
     * ## `text-shadow`
     *
     * The text-shadow CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and any of its decorations. Each shadow is described by some combination of X and Y offsets from the element, blur radius, and color.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow}
     */ textShadow: string;
    /**
     * ## `text-size-adjust`
     *
     * The text-size-adjust CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.
     * @experimental
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-size-adjust}
     */ textSizeAdjust: string;
    /**
     * ## `text-transform`
     *
     * The text-transform CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform}
     */ textTransform:
        | "none"
        | "capitalize"
        | "uppercase"
        | "lowercase"
        | "full-width"
        | "full-size-kana";
    /**
     * ## `text-underline-offset`
     *
     * The text-underline-offset CSS property sets the offset distance of an underline text decoration line (applied using text-decoration) from its original position.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-underline-offset}
     */ textUnderlineOffset: "auto";
    /**
     * ## `text-underline-position`
     *
     * The text-underline-position CSS property specifies the position of the underline which is set using the text-decoration property's underline value.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-underline-position}
     */ textUnderlinePosition: "auto" | "under" | "left" | "right";
    /**
     * ## `top`
     *
     * The top CSS property participates in specifying the vertical position of a positioned element. It has no effect on non-positioned elements.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/top}
     */ top: "auto";
    /**
     * ## `touch-action`
     *
     * The touch-action CSS property sets how an element's region can be manipulated by a touchscreen user (for example, by zooming features built into the browser).
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action}
     */ touchAction:
        | "auto"
        | "none"
        | "pan-x"
        | "pan-y"
        | "manipulation"
        | "pinch-zoom";
    /**
     * ## `transform`
     *
     * The transform CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/transform}
     */ transform: string;
    /**
     * ## `transform-box`
     *
     * The transform-box CSS property defines the layout box to which the transform and transform-origin properties relate.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/transform-box}
     */ transformBox:
        | "content-box"
        | "border-box"
        | "fill-box"
        | "stroke-box"
        | "view-box";
    /**
     * ## `transform-origin`
     *
     * The transform-origin CSS property sets the origin for an element's transformations.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin}
     */ transformOrigin: "left" | "center" | "right" | "top" | "bottom";
    /**
     * ## `transform-style`
     *
     * The transform-style CSS property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style}
     */ transformStyle: "flat" | "preserve-3d";
    /**
     * ## `transition`
     *
     * The transition CSS property is a shorthand property for transition-property, transition-duration, transition-timing-function, and transition-delay.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/transition}
     */ transition: string;
    /**
     * ## `transition-delay`
     *
     * The transition-delay CSS property specifies the duration to wait before starting a property's transition effect when its value changes.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay}
     */ transitionDelay: string;
    /**
     * ## `transition-duration`
     *
     * The transition-duration CSS property sets the length of time a transition animation should take to complete. By default, the value is 0s, meaning that no animation will occur.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration}
     */ transitionDuration: string;
    /**
     * ## `transition-property`
     *
     * The transition-property CSS property sets the CSS properties to which a transition effect should be applied.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property}
     */ transitionProperty: string;
    /**
     * ## `transition-timing-function`
     *
     * The transition-timing-function CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function}
     */ transitionTimingFunction:
        | "ease"
        | "ease-in"
        | "ease-out"
        | "ease-in-out"
        | "linear"
        | "step-start"
        | "step-end";
    /**
     * ## `translate`
     *
     * The translate CSS property allows you to specify translation transforms individually and independently of the transform property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the transform value.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/translate}
     */ translate: "none";
    /**
     * ## `unicode-bidi`
     *
     * The unicode-bidi CSS property, together with the direction property, determines how bidirectional text in a document is handled. For example, if a block of content contains both left-to-right and right-to-left text, the user-agent uses a complex Unicode algorithm to decide how to display the text. The unicode-bidi property overrides this algorithm and allows the developer to control the text embedding.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/unicode-bidi}
     */ unicodeBidi: string;
    /**
     * ## `user-select`
     *
     * The user-select CSS property controls whether the user can select text. This doesn't have any effect on content loaded as part of a browser's user interface (its chrome), except in textboxes.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/user-select}
     */ userSelect: "none" | "auto" | "text" | "contain" | "all";
    /**
     * ## `vertical-align`
     *
     * The vertical-align CSS property sets vertical alignment of an inline, inline-block or table-cell box.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align}
     */ verticalAlign:
        | "baseline"
        | "sub"
        | "super"
        | "text-top"
        | "text-bottom"
        | "middle"
        | "top"
        | "bottom";
    /**
     * ## `visibility`
     *
     * The visibility CSS property shows or hides an element without changing the layout of a document. The property can also hide rows or columns in a ``<table>``.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/visibility}
     */ visibility: "visible" | "hidden" | "collapse";
    /**
     * ## `white-space`
     *
     * The white-space CSS property sets how white space inside an element is handled.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/white-space}
     */ whiteSpace:
        | "normal"
        | "nowrap"
        | "pre"
        | "pre-wrap"
        | "pre-line"
        | "break-spaces";
    /**
     * ## `width`
     *
     * The width CSS property sets an element's width. By default, it sets the width of the content area, but if box-sizing is set to border-box, it sets the width of the border area.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/width}
     */ width: "max-content" | "min-content" | "auto";
    /**
     * ## `widows`
     *
     * The widows CSS property sets the minimum number of lines in a block container that must be shown at the top of a page, region, or column.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/widows}
     */ widows: string;
    /**
     * ## `word-break`
     *
     * The word-break CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/word-break}
     */ wordBreak: "normal" | "break-all" | "keep-all" | "break-word";
    /**
     * ## `word-spacing`
     *
     * The word-spacing CSS property sets the length of space between words and between tags.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing}
     */ wordSpacing: "normal";
    /**
     * ## `word-wrap`
     *
     * The overflow-wrap CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap}
     */ wordWrap: "normal" | "break-word" | "anywhere";
    /**
     * ## `writing-mode`
     *
     * The writing-mode CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (html element for HTML documents).
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode}
     */ writingMode: "horizontal-tb" | "vertical-rl" | "vertical-lr";
    /**
     * ## `z-index`
     *
     * The z-index CSS property sets the z-order of a positioned element and its descendants or flex items. Overlapping elements with a larger z-index cover those with a smaller one.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/z-index}
     */ zIndex: "auto";
    /**
     * ## `zoom`
     *
     * The non-standard zoom CSS property can be used to control the magnification level of an element. transform: scale() should be used instead of this property, if possible. However, unlike CSS Transforms, zoom affects the layout size of the element.
     * @non-standard
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/zoom}
     */ zoom: string;
    /**
     * ## `-webkit-line-clamp`
     *
     * The -webkit-line-clamp CSS property allows limiting of the contents of a block container to the specified number of lines.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp}
     */ webkitLineClamp: string;
    /**
     * ## `alignment-baseline`
     *
     * The alignment-baseline attribute specifies how an object is aligned with respect to its parent. This property specifies which baseline of this element is to be aligned with the corresponding baseline of the parent. For example, this allows alphabetic baselines in Roman text to stay aligned across font size changes. It defaults to the baseline with the same name as the computed value of the alignment-baseline property.
     *
     * You can use this attribute with the following SVG elements:
     * * `<tspan>`
     * * `<tref>`
     * * `<altGlyph>`
     * * `<textPath>`
     */ alignmentBaseline: string;
    /**
     * ## `baseline-shift`
     *
     * The baseline-shift attribute allows repositioning of the dominant-baseline relative to the dominant-baseline of the parent text content element. The shifted object might be a sub- or superscript.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/baseline-shift}
     */ baselineShift: string;
    /**
     * ## `clip-rule`
     *
     * The clip-rule attribute only applies to graphics elements that are contained within a <clipPath> element. The clip-rule attribute basically works as the fill-rule attribute, except that it applies to <clipPath> definitions.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/clip-rule}
     */ clipRule: string;
    /**
     * ## `color-interpolation`
     *
     * The color-interpolation attribute specifies the color space for gradient interpolations, color animations, and alpha compositing.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/color-interpolation}
     */ colorInterpolation: string;
    /**
     * ## `color-interpolation-filters`
     *
     * The color-interpolation-filters attribute specifies the color space for imaging operations performed via filter effects.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/color-interpolation-filters}
     */ colorInterpolationFilter: string;
    /**
     * ## `color-profile`
     *
     * The color-profile attribute is used to define which color profile a raster image included through the ``<image>`` element should use.
     *
     * @deprecated
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/color-profile}
     */ colorProfile: string;
    /**
     * ## `color-rendering`
     *
     */ colorRendering: string;
    /**
     * ## `dominant-baseline`
     *
     * The dominant-baseline attribute specifies the dominant baseline, which is the baseline used to align the box's text and inline-level contents. It also indicates the default alignment baseline of any boxes participating in baseline alignment in the box's alignment context.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dominant-baseline}
     */ dominantBaseline: string;
    /**
     * ## `enable-background`
     *
     */ enableBackground: string;
    /**
     * ## `fill`
     *
     * The fill attribute has two different meanings. For shapes and text it's a presentation attribute that defines the color (or any SVG paint servers like gradients or patterns) used to paint the element; for animation it defines the final state of the animation.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill}
     */ fill: string;
    /**
     * ## `fill-opacity`
     *
     * The enable-background attribute specifies how the accumulation of the background image is managed.
     * @deprecated
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/enable-background}
     */ fillOpacity: string;
    /**
     * ## `fill-rule`
     *
     * The fill-rule attribute is a presentation attribute defining the algorithm to use to determine the inside part of a shape.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill-rule}
     */ fillRule: string;
    /**
     * ## `flood-color`
     *
     * The flood-color attribute indicates what color to use to flood the current filter primitive subregion.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/flood-color}
     */ floodColor: string;
    /**
     * ## `flood-opacity`
     *
     * The flood-opacity attribute indicates the opacity value to use across the current filter primitive subregion.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/flood-opacity}
     */ floodOpacity: string;
    /**
     * ## `glyph-orientation-horizontal`
     *
     * The glyph-orientation-horizontal attribute affects the amount that the current text position advances as each glyph is rendered.
     * @deprecated
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/glyph-orientation-horizontal}
     */ glyphOrientationHorizontal: string;
    /**
     * ## `glyph-orientation-vertical`
     *
     * The glyph-orientation-vertical attribute affects the amount that hte current text position advances as each glyph is rendered.
     * @deprecated
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/glyph-orientation-vertical}
     */ glyphOrientationVertical: string;
    /**
     * ## `lighting-color`
     *
     * The lighting-color attribute defines the color of the light source for lighting filter primitives.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/lighting-color}
     */ lightingColor: string;
    /**
     * ## `marker-end`
     *
     * The marker-end attribute defines the arrowhead or polymarker that will be drawn at the final vertex of the given shape.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/marker-end}
     */ markerEnd: string;
    /**
     * ## `marker-mid`
     *
     * The marker-mid attribute defines the arrowhead or polymarker that will be drawn at all interior vertices of the given shape.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/marker-mid}
     */ markerMid: string;
    /**
     * ## `marker-start`
     *
     * The marker-start attribute defines the arrowhead or polymarker that will be drawn at the first vertex of the given shape.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/marker-start}
     */ markerStart: string;
    /**
     * ## `shape-rendering`
     *
     * The shape-rendering attribute provides hints to the renderer about what tradeoffs to make when rendering shapes like paths, circles, or rectangles.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering}
     */ shapeRendering: string;
    /**
     * ## `stop-color`
     *
     * The stop-color attribute indicates what color to use at a gradient stop.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stop-color}
     */ stopColor: string;
    /**
     * ## `stop-opacity`
     *
     * The stop-opacity attribute defines the opacity of a given color gradient stop.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stop-opacity}
     */ stopOpacity: string;
    /**
     * ## `stroke`
     *
     * The stroke attribute is a presentation attribute defining the color (or any SVG paint servers like gradients or patterns) used to paint the outline of the shape;
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke}
     */ stroke: string;
    /**
     * ## `stroke-dasharray`
     *
     * The stroke-dasharray attribute is a presentation attribute defining the pattern of dashes and gaps used to paint the outline of the shape;
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray}
     */ strokeDasharray: string;
    /**
     * ## `stroke-dashoffset`
     *
     * The stroke-dashoffset attribute is a presentation attribute defining an offset on the rendering of the associated dash array.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dashoffset}
     */ strokeDashoffset: string;
    /**
     * ## `stroke-linecap`
     *
     * The stroke-linecap attribute is a presentation attribute defining the shape to be used at the end of open subpaths when they are stroked.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linecap}
     */ strokeLinecap: string;
    /**
     * ## `stroke-linejoin`
     *
     * The stroke-linejoin attribute is a presentation attribute defining the shape to be used at the corners of paths when they are stroked.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linejoin}
     */ strokeLinejoin: string;
    /**
     * ## `stroke-miterlimit`
     *
     * The stroke-miterlimit attribute is a presentation attribute defining a limit on the ratio of the miter length to the stroke-width used to draw a miter join. When the limit is exceeded, the join is converted from a miter to a bevel.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-miterlimit}
     */ strokeMiterlimit: string;
    /**
     * ## `stroke-opacity`
     *
     * The stroke-opacity attribute is a presentation attribute defining the opacity of the paint server (color, gradient, pattern, etc.) applied to the stroke of a shape.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-opacity}
     */ strokeOpacity: string;
    /**
     * ## `stroke-width`
     *
     * The stroke-width attribute is a presentation attribute defining the width of the stroke to be applied to the shape.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-width}
     */ strokeWidth: string;
    /**
     * ## `text-anchor`
     *
     * The text-anchor attribute is used to align (start-, middle- or end-alignment) a string of pre-formatted text or auto-wrapped text where the wrapping area is determined from the inline-size property relative to a given point.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/text-anchor}
     */ textAnchor: string;
    /**
     * ## `vector-effect`
     *
     * The vector-effect property specifies the vector effect to use when drawing an object. Vector effects are applied before any of the other compositing operations, i.e. filters, masks and clips.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/vector-effect}
     */ vectorEffect: string;
}

export interface SelectorTypes {
    /**
     * ## `.element`
     *
     * Define inline element style having the top priority.
     */ inline: Selector;
    /**
     * ## `.element`
     *
     * Define style for the normal state of the element.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors}
     */ normal: Selector;
    /**
     * ## `.element:active`
     *
     * Define style for the element when clicked.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/:active}
     */ active: Selector;
    /**
     * ## `.element:any-link`
     *
     * Define the style that represents an element
     * that acts as the source anchor of a hyperlink,
     * independent of whether it has been visited.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/:any-link}
     */ anyLink: Selector;
    /**
     * ## `.element:autofill`
     *
     * The :autofill CSS pseudo-class matches when an ``<input>``
     * element has its value autofilled by the browser.
     * The class stops matching if the user edits the field.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/:autofill}
     */ autofill: Selector;
    /**
     * ## `.element:checked`
     *
     * The ``:checked`` CSS pseudo-class selector represents any radio
     * (`<input type="radio">`), checkbox (``<input type="checkbox">``),
     * or option (``<option>`` in a ``<select>``)
     * element that is checked or toggled to an on state.
     */ checked: Selector;
    /**
     * ## `.element:default`
     *
     * The :default CSS pseudo-class selects
     * form elements that are the default in a group of related elements.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/:default}
     */ default: Selector;
    /**
     * ## `.element:defined`
     *
     * The :defined CSS pseudo-class
     * represents any element that has been defined.
     * This includes any standard element built in to the browser,
     * and custom elements that have been successfully defined
     * (i.e. with the CustomElementRegistry.define() method).
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/:defined}
     */ defined: Selector;
    /**
     * ## `.element:disabled`
     *
     * The :disabled CSS pseudo-class represents any disabled element.
     * An element is disabled if it can't be activated
     * (selected, clicked on, typed into, etc.) or accept focus.
     * The element also has an enabled state,
     * in which it can be activated or accept focus.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled}
     */ disabled: Selector;
    /**
     * ## `.element:empty`
     *
     * The :empty CSS pseudo-class represents any element that has no children.
     * Children can be either element nodes or text (including whitespace).
     * Comments, processing instructions,
     * and CSS content do not affect whether an element is considered empty.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/:empty}
     */ empty: Selector;
    /**
     * ## `.element:enabled`
     *
     * The :enabled CSS pseudo-class represents any enabled element.
     * An element is enabled if it can be activated
     * (selected, clicked on, typed into, etc.) or accept focus.
     * The element also has a disabled state,
     * in which it can't be activated or accept focus.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/:enabled}
     */ enabled: Selector;
    /**
     * ## `.element:first`
     *
     * The :first CSS pseudo-class, used with the ``@page`` at-rule,
     * represents the first page of a printed document.
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:first}
     */ first: Selector;
    /**
     * ## `.element:first-child`
     *
     * The :first-child CSS pseudo-class
     * represents the first element among a group of sibling elements.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child}
     */ firstChild: Selector;
    /**
     * ## `.element:first-of-type`
     *
     * The :first-of-type CSS pseudo-class represents
     * the first element of its type among a group of sibling elements.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/:first-of-type}
     */ firstOfType: Selector;
    /**
     * ## `.elementfullscreen`
     *
     * The :fullscreen CSS pseudo-class
     * matches every element which is currently in fullscreen mode.
     * If multiple elements have been put into fullscreen mode,
     * this selects them all.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/:fullscreen}
     */ fullscreen: Selector;
    /**
     * ## `.element:focus`
     *
     * The :focus CSS pseudo-class represents an element
     * (such as a form input) that has received focus.
     * It is generally triggered when the user clicks
     * or taps on an element or selects it with the keyboard's Tab key.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/:focus}
     */ focus: Selector;
    /**
     * ## `.element:focus-visible`
     *
     * The :focus-visible pseudo-class applies
     * while an element matches the :focus pseudo-class and the UA (User Agent)
     * determines via heuristics that the focus should be made evident on the element.
     * (Many browsers show a "focus ring" by default in this case.)
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible}
     */ focusVisible: Selector;
    /**
     * ## `.element:focus-within`
     *
     * The :focus-within CSS pseudo-class
     * matches an element if the element or any of its descendants are focused.
     * In other words, it represents an element that is itself matched
     * by the :focus pseudo-class or has a descendant that is matched
     * by :focus. (This includes descendants in shadow trees.)
     *
     * @link {https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within}
     */ focusWithin: Selector;
    /**
     * ## `.element:host`
     *
     * The :host CSS pseudo-class
     * selects the shadow host of the shadow DOM
     * containing the CSS it is used inside — in other words,
     * this allows you to select a custom element from inside its shadow DOM.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/:host}
     */ host: Selector;
    /**
     * ## `.element:hover`
     *
     * ## `:hover`
     * The :hover CSS pseudo-class
     * matches when the user interacts with an element with a pointing device,
     * but does not necessarily activate it.
     * It is generally triggered
     * when the user hovers over an element with the cursor (mouse pointer).
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/:hover}
     */ hover: Selector;
    /**
     * ## `.element:indeterminate`
     *
     * The :indeterminate CSS pseudo-class
     * represents any form element whose state is indeterminate,
     * such as checkboxes which have their HTML indeterminate attribute set to true,
     * radio buttons which are members of a group in which all radio buttons are unchecked,
     * and indeterminate ``<progress>`` elements.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/:indeterminate}
     */ indeterminate: Selector;
    /**
     * ## `.element:in-range`
     *
     * The :in-range CSS pseudo-class represents an ``<input>`` element
     * whose current value is within the range limits specified by the min and max attributes.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/:in-range}
     */ inRange: Selector;
    /**
     * ## `.element:invalid`
     *
     * The :invalid CSS pseudo-class represents
     * any ``<form>``, ``<fieldset>``, ``<input>``
     * or other ``<form>`` element whose contents fail to validate.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid}
     */ invalid: Selector;
    /**
     * ## `.element:last-child`
     *
     * The :last-child CSS pseudo-class
     * represents the last element among a group of sibling elements.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/:last-child}
     */ lastChild: Selector;
    /**
     * ## `.element:last-of-type`
     *
     * The :last-of-type CSS pseudo-class
     * represents the last element of its type among a group of sibling elements.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/:last-of-type}
     */ lastOfType: Selector;
    /**
     * ## `.element:left`
     *
     * The :left CSS pseudo-class,
     * used with the ``@page`` at-rule,
     * represents all left-hand pages of a printed document.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/:left}
     */ left: Selector;
    /**
     * ## `.element:link`
     *
     * The :link CSS pseudo-class
     * represents an element that has not yet been visited.
     * It matches every unvisited ``<a>`` or ``<area>`` element
     * that has an href attribute.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/:link}
     */ link: Selector;
    /**
     * ## `.element:modal`
     *
     * The :modal CSS pseudo-class
     * matches an element that is in a state
     * in which it excludes all interaction
     * with elements outside it until
     * the interaction has been dismissed.
     * Multiple elements can be selected
     * by the :modal pseudo-class at the same time,
     * but only one of them will be active and able to receive input.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/:modal}
     */ modal: Selector;
    /**
     * ## `.element:only-child`
     *
     * The :only-child CSS pseudo-class
     * represents an element without any siblings.
     * This is the same as :first-child:last-child
     * or :nth-child(1):nth-last-child(1),
     * but with a lower specificity.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/:only-child}
     */ onlyChild: Selector;
    /**
     * ## `.element:only-of-type`
     *
     * The :only-of-type CSS pseudo-class
     * represents an element that has no siblings of the same type.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/:only-of-type}
     */ onlyOfType: Selector;
    /**
     * ## `.element:optional`
     *
     * The :optional CSS pseudo-class represents any ``<input>``
     * ``<select>``, or ``<textarea>`` element
     * that does not have the required attribute set on it.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/:optional}
     */ optional: Selector;
    /**
     * ## `.element:out-of-range`
     *
     * The :out-of-range CSS pseudo-class
     * represents an ``<input>`` element whose current value
     * is outside the range limits specified
     * by the min and max attributes.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/:out-of-range}
     */ outOfRange: Selector;
    /**
     * ## `.element:picture-in-picture`
     *
     * The :picture-in-picture CSS pseudo-class
     * matches the element which is currently
     * in picture-in-picture mode.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/:picture-in-picture}
     */ pictureInPicutre: Selector;
    /**
     * ## `.element:placeholder-shown`
     *
     * The :placeholder-shown CSS pseudo-class
     * represents any ``<input>`` or ``<textarea>`` element
     * that is currently displaying placeholder text.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/:placeholder-shown}
     */ placeholderShown: Selector;
    /**
     * ## `.element:read-only`
     *
     * The :read-only CSS pseudo-class
     * represents an element (such as input or textarea)
     * that is not editable by the user.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/:read-only}
     */ readOnly: Selector;
    /**
     * ## `.element:read-write`
     *
     * The :read-write CSS pseudo-class
     * represents an element (such as input or textarea)
     * that is editable by the user.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/:read-write}
     */ readWrite: Selector;
    /**
     * ## `.element:required`
     *
     * The :required CSS pseudo-class
     * represents any ``<input>``, ``<select>``, or ``<textarea>`` element
     * that has the required attribute set on it.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/:required}
     */ required: Selector;
    /**
     * ## `.element:scope`
     *
     * The :scope CSS pseudo-class
     * represents elements that are a reference point
     * for selectors to match against.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/:scope}
     */ scope: Selector;
    /**
     * ## `.element:target`
     *
     * The :target CSS pseudo-class
     * represents a unique element (the target element)
     * with an id matching the URL's fragment.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/:target}
     */ target: Selector;
    /**
     * ## `.element:valid`
     *
     * The :valid CSS pseudo-class
     * represents any ``<input>`` or other ``<form>`` element
     * whose contents validate successfully.
     * This allows to easily make valid fields
     * adopt an appearance that helps the user confirm
     * that their data is formatted properly.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/:valid}
     */ valid: Selector;
    /**
     * ## `.element:visited`
     *
     * The :visited CSS pseudo-class
     * represents links that the user has already visited.
     * For privacy reasons,
     * the styles that can be modified
     * using this selector are very limited.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/:visited}
     */ visited: Selector;
    /**
     * ## `.element::after`
     *
     * In CSS, ::after creates a pseudo-element
     * that is the last child of the selected element.
     * It is often used to add cosmetic content
     * to an element with the content property.
     * It is inline by default.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/::after}
     */ after: Selector;
    /**
     * ## `.element::before`
     *
     * In CSS, ::before creates a pseudo-element
     * that is the first child of the selected element.
     * It is often used to add cosmetic content
     * to an element with the content property.
     * It is inline by default.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/::before}
     */ before: Selector;
    /**
     * ## `.element::cue`
     *
     * The ::cue CSS pseudo-element matches WebVTT cues
     * within a selected element.
     * This can be used to style captions
     * and other cues in media with VTT tracks.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/::cue}
     */ cue: Selector;
    /**
     * ## `.element::first-letter`
     *
     * The ::first-letter CSS pseudo-element
     * applies styles to the first letter
     * of the first line of a block-level element,
     * but only when not preceded by other content
     * (such as images or inline tables).
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/::first-letter}
     */ firstLetter: Selector;
    /**
     * ## `.element::first-line`
     *
     * The ::first-line CSS pseudo-element
     * applies styles to the first line of a block-level element.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/::first-line}
     */ firstLine: Selector;
    /**
     * ## `.element::file-selector-button`
     *
     * The ::file-selector-button CSS pseudo-element
     * represents the button of an ``<input>`` of type="file".
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/::file-selector-button}
     */ fileSelectorButton: Selector;
    /**
     * ## `.element::placeholder`
     *
     * The ::placeholder CSS pseudo-element
     * represents the placeholder text in
     * an ``<input>`` or ``<textarea>`` element.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder}
     */ placeholder: Selector;
    /**
     * ## `.element::selection`
     *
     * The ::selection CSS pseudo-element
     * applies styles to the part of a document
     * that has been highlighted by the user
     * (such as clicking and dragging the mouse across text).
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/::selection}
     */ selection: Selector;
    /**
     * ## `.element::marker`
     *
     * The ::marker CSS pseudo-element selects the marker box
     * of a list item, which typically contains a bullet or number.
     * It works on any element or pseudo-element set
     * to display: list-item,
     * such as the ``<li> ``and ``<summary>`` elements.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/:marker}
     */ marker: Selector;
    /**
     * ## `.element:user-invalid`
     *
     * The :user-invalid CSS pseudo-class represents any validated form
     * element whose value isn't valid based on their validation constraints,
     * after the user has interacted with it.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/:user-invalid}
     */ userInvalid: Selector;
    /**
     * ## `.element::-webkit-scrollbar`
     *
     */ webkitScrollbar: Selector;
    /**
     * ## `.element::-webkit-scrollbar-track`
     *
     */ webkitScrollbarTrack: Selector;
    /**
     * ## `.element::-webkit-scrollbar-thumb`
     *
     */ webkitScrollbarThumb: Selector;
    /**
     * ## `.element::-webkit-scrollbar-thumb:hover`
     *
     */ webkitScrollbarThumbHover: Selector;
    /**
     * ## `.element::-webkit-scrollbar-thumb:active`
     *
     */ webkitScrollbarThumbActive: Selector;
}

export interface Events<E = HTMLElement> {
    /**
     * ## `onAbort`
     * The abort event is fired when the resource was not fully loaded, but not as the result of an error.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/abort_event}
     */ onAbort: EventDeclaration<Event, E>;
    /**
     * ## `onAnimationEnd`
     * The animationend event is fired when a CSS Animation has completed. If the animation aborts before reaching completion, such as if the element is removed from the DOM or the animation is removed from the element, the animationend event is not fired.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/animationend_event}
     */ onAnimationEnd: EventDeclaration<AnimationEvent, E>;
    /**
     * ## `onAnimationIteration`
     * The animationiteration event is fired when an iteration of a CSS Animation ends, and another one begins. This event does not occur at the same time as the animationend event, and therefore does not occur for animations with an animation-iteration-count of one.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/animationiteration_event}
     */ onAnimationIteration: EventDeclaration<AnimationEvent, E>;
    /**
     * ## `onAnimationStart`
     * The animationstart event is fired when a CSS Animation has started. If there is an animation-delay, this event will fire once the delay period has expired. A negative delay will cause the event to fire with an elapsedTime equal to the absolute value of the delay (and, correspondingly, the animation will begin playing at that time index into the sequence).
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/animationstart_event}
     */ onAnimationStart: EventDeclaration<AnimationEvent, E>;
    /**
     * ## `onBeforePrint`
     * The beforeprint event is fired when the associated document is about to be printed or previewed for printing.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeprint_event}
     */ onBeforePrint: EventDeclaration<Event, E>;
    /**
     * ## `onBeforeUnload`
     * The beforeunload event is fired when the window, the document and its resources are about to be unloaded. The document is still visible and the event is still cancelable at this point.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event}
     */ onBeforeUnload: EventDeclaration<BeforeUnloadEvent, E>;
    /**
     * ## `onBlur`
     * The blur event fires when an element has lost focus.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/blur_event}
     */ onBlur: EventDeclaration<FocusEvent, E>;
    /**
     * ## `onCanPlay`
     * The canplay event is fired when the user agent can play the media, but estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/canplay_event}
     */ onCanPlay: EventDeclaration<Event, E>;
    /**
     * ## `onCanPlayThrough`
     * The canplaythrough event is fired when the user agent can play the media, and estimates that enough data has been loaded to play the media up to its end without having to stop for further buffering of content.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/canplaythrough_event}
     */ onCanPlayThrough: EventDeclaration<Event, E>;
    /**
     * ## `onChange`
     * The change event is fired for ``<input>``, ``<select>``, and ``<textarea>`` elements when the user modifies the element's value. Unlike the input event, the change event is not necessarily fired for each alteration to an element's value.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event}
     */ onChange: EventDeclaration<Event, E>;
    /**
     * ## `onContextMenu`
     * The contextmenu event fires when the user attempts to open a context menu. This event is typically triggered by clicking the right mouse button, or by pressing the context menu key.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/contextmenu_event}
     */ onContextMenu: EventDeclaration<MouseEvent, E>;
    /**
     * ## `onCopy`
     * The copy event fires when the user initiates a copy action through the browser's user interface.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/copy_event}
     */ onCopy: EventDeclaration<ClipboardEvent, E>;
    /**
     * ## `onCut`
     * The cut event is fired when the user has initiated a "cut" action through the browser's user interface.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/cut_event}
     */ onCut: EventDeclaration<ClipboardEvent, E>;
    /**
     * ## `onDurationChange`
     * The durationchange event is fired when the duration attribute has been updated.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/durationchange_event}
     */ onDurationChange: EventDeclaration<Event, E>;
    /**
     * ## `onEnded`
     * The ended event is fired when playback or streaming has stopped because the end of the media was reached or because no further data is available.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/ended_event}
     */ onEnded: EventDeclaration<Event, E>;
    /**
     * ## `onError`
     * The error event is fired on a Window object when a resource failed to load or couldn't be used — for example if a script has an execution error.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/error_event}
     */ onError: EventDeclaration<Event, E>;
    /**
     * ## `onFocus`
     * The focus event fires when an element has received focus. The main difference between this event and focusin is that focusin bubbles while focus does not.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event}
     */ onFocus: EventDeclaration<FocusEvent, E>;
    /**
     * ## `onFocusIn`
     * The focusin event fires when an element is about to receive focus. The main difference between this event and focus is that focusin bubbles while focus does not.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/focusin_event}
     */ onFocusIn: EventDeclaration<FocusEvent, E>;
    /**
     * ## `onFocusOut`
     * The focusout event fires when an element is about to lose focus. The main difference between this event and blur is that focusout bubbles while blur does not.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/focusout_event}
     */ onFocusOut: EventDeclaration<FocusEvent, E>;
    /**
     * ## `onFullScreenChange`
     * The fullscreenchange event is fired immediately after the browser switches into or out of fullscreen mode.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/fullscreenchange_event}
     */ onFullScreenChange: EventDeclaration<Event, E>;
    /**
     * ## `onHashChange`
     * The hashchange event is fired when the fragment identifier of the URL has changed (the part of the URL beginning with and following the # symbol).
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/hashchange_event}
     */ onHashChange: EventDeclaration<HashChangeEvent, E>;
    /**
     * ## `onInvalid`
     * The invalid event fires when a submittable element has been checked for validity and doesn't satisfy its constraints.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/invalid_event}
     */ onInvalid: EventDeclaration<Event, E>;
    /**
     * ## `onLoad`
     * The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images. This is in contrast to DOMContentLoaded, which is fired as soon as the page DOM has been loaded, without waiting for resources to finish loading.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event}
     */ onLoad: EventDeclaration<Event, E>;
    /**
     * ## `onLoadedData`
     * The loadeddata event is fired when the frame at the current playback position of the media has finished loading; often the first frame.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/loadeddata_event}
     */ onLoadedData: EventDeclaration<Event, E>;
    /**
     * ## `onLoadedMetaData`
     * The loadedmetadata event is fired when the metadata has been loaded.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/loadedmetadata_event}
     */ onLoadedMetaData: EventDeclaration<Event, E>;
    /**
     * ## `onLoadStart`
     * The loadstart event is fired when the browser has started to load a resource.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/loadstart_event}
     */ onLoadStart: EventDeclaration<Event, E>;
    /**
     * ## `onMessage`
     * The message event is fired on a Window object when the window receives a message, for example from a call to Window.postMessage() from another browsing context.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/message_event}
     */ onMessage: EventDeclaration<Event, E>;
    /**
     * ## `onOffline`
     * The offline event of the Window interface is fired when the browser has lost access to the network and the value of Navigator.onLine switches to false.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/offline_event}
     */ onOffline: EventDeclaration<Event, E>;
    /**
     * ## `onOnline`
     * The online event of the Window interface is fired when the browser has gained access to the network and the value of Navigator.onLine switches to true.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/online_event}
     */ onOnline: EventDeclaration<Event, E>;
    /**
     * ## `onPageHide`
     * The pagehide event is sent to a Window when the browser hides the current page in the process of presenting a different page from the session's history.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/pagehide_event}
     */ onPageHide: EventDeclaration<PageTransitionEvent, E>;
    /**
     * ## `onPageShow`
     * The pageshow event is sent to a Window when the browser displays the window's document due to navigation.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/pageshow_event}
     */ onPageShow: EventDeclaration<PageTransitionEvent, E>;
    /**
     * ## `onPaste`
     * The paste event is fired when the user has initiated a "paste" action through the browser's user interface.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/paste_event}
     */ onPaste: EventDeclaration<ClipboardEvent, E>;
    /**
     * ## `onPause`
     * The pause event is sent when a request to pause an activity is handled and the activity has entered its paused state, most commonly after the media has been paused through a call to the element's pause() method.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/pause_event}
     */ onPause: EventDeclaration<Event, E>;
    /**
     * ## `onPlay`
     * The play event is fired when the paused property is changed from true to false, as a result of the play method, or the autoplay attribute.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play_event}
     */ onPlay: EventDeclaration<Event, E>;
    /**
     * ## `onPlaying`
     * The playing event is fired after playback is first started, and whenever it is restarted. For example it is fired when playback resumes after having been paused or delayed due to lack of data.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/playing_event}
     */ onPlaying: EventDeclaration<Event, E>;
    /**
     * ## `onProgress`
     * The progress event is fired periodically as the browser loads a resource.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/progress_event}
     */ onProgress: EventDeclaration<Event, E>;
    /**
     * ## `onRateChange`
     * The ratechange event is fired when the playback rate has changed.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/ratechange_event}
     */ onRateChange: EventDeclaration<Event, E>;
    /**
     * ## `onResize`
     * The resize event fires when the document view (window) has been resized.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event}
     */ onResize: EventDeclaration<UIEvent, E>;
    /**
     * ## `onReset`
     * The reset event fires when a ``<form>`` is reset.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset_event}
     */ onReset: EventDeclaration<Event, E>;
    /**
     * ## `onScroll`
     * The scroll event fires when the document view has been scrolled. For element scrolling, see Element: scroll event.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event}
     */ onScroll: EventDeclaration<Event, E>;
    /**
     * ## `onSearch`
     */ onSearch: EventDeclaration<Event, E>;
    /**
     * ## `onSeeked`
     * The search event is fired when a search is initiated using an ``<input>`` element of type="search".
     * @non-standard
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/search_event}
     */ onSeeked: EventDeclaration<Event, E>;
    /**
     * ## `onSeeking`
     * The seeking event is fired when a seek operation starts, meaning the Boolean seeking attribute has changed to true and the media is seeking a new position.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/seeking_event}
     */ onSeeking: EventDeclaration<Event, E>;
    /**
     * ## `onSelect`
     * The select event fires when some text has been selected.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select_event}
     */ onSelect: EventDeclaration<Event, E>;
    /**
     * ## `onSelectionChange`
     * The selectionchange event of the Selection API is fired when the current Selection of a Document is changed.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/selectionchange_event}
     */ onSelectionChange: EventDeclaration<Event, E>;
    /**
     * ## `onShow`
     * The show event is fired when a contextmenu event was fired on/bubbled to an element that has a contextmenu attribute.
     * @deprecated
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/show_event}
     */ onShow: EventDeclaration<Event, E>;
    /**
     * ## `onStalled`
     * The stalled event is fired when the user agent is trying to fetch media data, but data is unexpectedly not forthcoming.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/stalled_event}
     */ onStalled: EventDeclaration<Event, E>;
    /**
     * ## `onStorage`
     * The storage event of the Window interface fires when a storage area (localStorage) has been modified in the context of another document.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event}
     */ onStorage: EventDeclaration<StorageEvent, E>;
    /**
     * ## `onSubmit`
     * The submit event fires when a ``<form>`` is submitted.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event}
     */ onSubmit: EventDeclaration<SubmitEvent, E>;
    /**
     * ## `onSuspend`
     * The suspend event is fired when media data loading has been suspended.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/suspend_event}
     */ onSuspend: EventDeclaration<Event, E>;
    /**
     * ## `onTimeUpdate`
     * The timeupdate event is fired when the time indicated by the currentTime attribute has been updated.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/timeupdate_event}
     */ onTimeUpdate: EventDeclaration<Event, E>;
    /**
     * ## `onToggle`
     * The toggle event fires when the open/closed state of a ``<details>`` element is toggled.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLDetailsElement/toggle_event}
     */ onToggle: EventDeclaration<Event, E>;
    /**
     * ## `onTransitionEnd`
     * The transitionend event is fired when a CSS transition has completed. In the case where a transition is removed before completion, such as if the transition-property is removed or display is set to none, then the event will not be generated.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/transitionend_event}
     */ onTransitionEnd: EventDeclaration<TransitionEvent, E>;
    /**
     * ## `onUnload`
     * The unload event is fired when the document or a child resource is being unloaded.
     * @avoid
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/unload_event}
     */ onUnload: EventDeclaration<Event, E>;
    /**
     * ## `onVolumeChange`
     * The volumechange event is fired when the volume has changed.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/volumechange_event}
     */ onVolumeChange: EventDeclaration<Event, E>;
    /**
     * ## `onWaiting`
     * The waiting event is fired when playback has stopped because of a temporary lack of data.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/waiting_event}
     */ onWaiting: EventDeclaration<Event, E>;
    /**
     * ## `onWheel`
     * The wheel event fires when the user rotates a wheel button on a pointing device (typically a mouse).
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event}
     */ onWheel: EventDeclaration<WheelEvent, E>;
    /**
     * ## `onInput`
     * The input event fires when the value of an ``<input>``, ``<select>``, or ``<textarea>`` element has been changed.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event}
     */ onInput: EventDeclaration<InputEvent, E>;
    /**
     * ## `onDrag`
     * The DragEvent interface is a DOM event that represents a drag and drop interaction. The user initiates a drag by placing a pointer device (such as a mouse) on the touch surface and then dragging the pointer to a new location (such as another DOM element). Applications are free to interpret a drag and drop interaction in an application-specific way.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DragEvent}
     */ onDrag: EventDeclaration<DragEvent, E>;
    /**
     * ## `onDragEnd`
     * The dragend event is fired when a drag operation is being ended (by releasing a mouse button or hitting the escape key).
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragend_event}
     */ onDragEnd: EventDeclaration<DragEvent, E>;
    /**
     * ## `onDragEnter`
     * The dragenter event is fired when a dragged element or text selection enters a valid drop target.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragenter_event}
     */ onDragEnter: EventDeclaration<DragEvent, E>;
    /**
     * ## `onDragLeave`
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragleave_event
     * @see {@link The dragleave event is fired when a dragged element or text selection leaves a valid drop target.}
     */ onDragLeave: EventDeclaration<DragEvent, E>;
    /**
     * ## `onDragOver`
     * The dragover event is fired when an element or text selection is being dragged over a valid drop target (every few hundred milliseconds).
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragover_event}
     */ onDragOver: EventDeclaration<DragEvent, E>;
    /**
     * ## `onDragStart`
     * The dragstart event is fired when the user starts dragging an element or text selection.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragstart_event}
     */ onDragStart: EventDeclaration<DragEvent, E>;
    /**
     * ## `onDrop`
     * The drop event is fired when an element or text selection is dropped on a valid drop target.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/drop_event}
     */ onDrop: EventDeclaration<DragEvent, E>;
    /**
     * ## `onKeyDown`
     * The keydown event is fired when a key is pressed.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event}
     */ onKeyDown: EventDeclaration<KeyboardEvent, E>;
    /**
     * ## `onKeyPress`
     * The keypress event is fired when a key that produces a character value is pressed down.
     * @deprecated
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/keypress_event}
     */ onKeyPress: EventDeclaration<KeyboardEvent, E>;
    /**
     * ## `onKeyUp`
     * The keyup event is fired when a key is released.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/keyup_event}
     */ onKeyUp: EventDeclaration<KeyboardEvent, E>;
    /**
     * ## `onClick`
     * An element receives a click event when a pointing device button (such as a mouse's primary mouse button) is both pressed and released while the pointer is located inside the element.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event}
     */ onClick: EventDeclaration<MouseEvent, E>;
    /**
     * ## `onDoubleClick`
     * The dblclick event fires when a pointing device button (such as a mouse's primary button) is double-clicked; that is, when it's rapidly clicked twice on a single element within a very short span of time.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event}
     */ onDoubleClick: EventDeclaration<MouseEvent, E>;
    /**
     * ## `onMouseDown`
     * The mousedown event is fired at an Element when a pointing device button is pressed while the pointer is inside the element.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/mousedown_event}
     */ onMouseDown: EventDeclaration<MouseEvent, E>;
    /**
     * ## `onMouseEnter`
     * The mouseenter event is fired at an Element when a pointing device (usually a mouse) is initially moved so that its hotspot is within the element at which the event was fired.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event}
     */ onMouseEnter: EventDeclaration<MouseEvent, E>;
    /**
     * ## `onMouseLeave`
     * The mouseleave event is fired at an Element when the cursor of a pointing device (usually a mouse) is moved out of it.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event}
     */ onMouseLeave: EventDeclaration<MouseEvent, E>;
    /**
     * ## `onMouseMove`
     * The mousemove event is fired at an element when a pointing device (usually a mouse) is moved while the cursor's hotspot is inside it.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event}
     */ onMouseMove: EventDeclaration<MouseEvent, E>;
    /**
     * ## `onMouseOver`
     * The mouseover event is fired at an Element when a pointing device (such as a mouse or trackpad) is used to move the cursor onto the element or one of its child elements.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event}
     */ onMouseOver: EventDeclaration<MouseEvent, E>;
    /**
     * ## `onMouseOut`
     * The mouseout event is fired at an Element when a pointing device (usually a mouse) is used to move the cursor so that it is no longer contained within the element or one of its children.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseout_event}
     */ onMouseOut: EventDeclaration<MouseEvent, E>;
    /**
     * ## `onMouseUp`
     * The mouseup event is fired at an Element when a button on a pointing device (such as a mouse or trackpad) is released while the pointer is located inside it.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseup_event}
     */ onMouseUp: EventDeclaration<MouseEvent, E>;
    /**
     * ## `onPointerOver`
     * The pointerover event is fired when a pointing device is moved into an element's hit test boundaries.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerover_event}
     */ onPointerOver: EventDeclaration<PointerEvent, E>;
    /**
     * ## `onPointerEnter`
     * The pointerenter event fires when a pointing device is moved into the hit test boundaries of an element or one of its descendants, including as a result of a pointerdown event from a device that does not support hover (see pointerdown).
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerenter_event}
     */ onPointerEnter: EventDeclaration<PointerEvent, E>;
    /**
     * ## `onPointerDown`
     * The pointerdown event is fired when a pointer becomes active. For mouse, it is fired when the device transitions from no buttons pressed to at least one button pressed. For touch, it is fired when physical contact is made with the digitizer. For pen, it is fired when the stylus makes physical contact with the digitizer.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerdown_event}
     */ onPointerDown: EventDeclaration<PointerEvent, E>;
    /**
     * ## `onPointerMove`
     * The pointermove event is fired when a pointer changes coordinates, and the pointer has not been canceled by a browser touch-action.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/pointermove_event}
     */ onPointerMove: EventDeclaration<PointerEvent, E>;
    /**
     * ## `onPointerUp`
     * The pointerup event is fired when a pointer is no longer active.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerup_event}
     */ onPointerUp: EventDeclaration<PointerEvent, E>;
    /**
     * ## `onPointerCancel`
     * The pointercancel event is fired when the browser determines that there are unlikely to be any more pointer events, or if after the pointerdown event is fired, the pointer is then used to manipulate the viewport by panning, zooming, or scrolling.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/pointercancel_event}
     */ onPointerCancel: EventDeclaration<PointerEvent, E>;
    /**
     * ## `onPointerOut`
     * The pointerout event is fired for several reasons including: pointing device is moved out of the hit test boundaries of an element; firing the pointerup event for a device that does not support hover (see pointerup); after firing the pointercancel event (see pointercancel); when a pen stylus leaves the hover range detectable by the digitizer.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerout_event}
     */ onPointerOut: EventDeclaration<PointerEvent, E>;
    /**
     * ## `onPointerLeave`
     * The pointerleave event is fired when a pointing device is moved out of the hit test boundaries of an element. For pen devices, this event is fired when the stylus leaves the hover range detectable by the digitizer.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/pointerleave_event}
     */ onPointerLeave: EventDeclaration<PointerEvent, E>;
    /**
     * ## `onGotPointerCapture`
     * The gotpointercapture event is fired when an element captures a pointer using setPointerCapture().
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/gotpointercapture_event}
     */ onGotPointerCapture: EventDeclaration<PointerEvent, E>;
    /**
     * ## `onLostPointerCapture`
     * The lostpointercapture event is fired when a captured pointer is released.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/lostpointercapture_event}
     */ onLostPointerCapture: EventDeclaration<PointerEvent, E>;
    /**
     * ## `onTouchCancel`
     * The touchcancel event is fired when one or more touch points have been disrupted in an implementation-specific manner (for example, too many touch points are created).
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/touchcancel_event}
     */ onTouchCancel: EventDeclaration<TouchEvent, E>;
    /**
     * ## `onTouchEnd`
     * The touchend event fires when one or more touch points are removed from the touch surface.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/touchend_event}
     */ onTouchEnd: EventDeclaration<TouchEvent, E>;
    /**
     * ## `onTouchMove`
     * The touchcancel event is fired when one or more touch points have been disrupted in an implementation-specific manner (for example, too many touch points are created).
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/touchcancel_event}
     */ onTouchMove: EventDeclaration<TouchEvent, E>;
    /**
     * ## `onTouchStart`
     * The touchstart event is fired when one or more touch points are placed on the touch surface.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/touchstart_event}
     */ onTouchStart: EventDeclaration<TouchEvent, E>;
    /**
     * ## `onClickGlobal`
     * The `onClickGlobal` event is fired when another element is clicked in the DOM.
     * @recursive-event
     */ onClickGlobal: EventDeclaration<PointerEvent, E>;
    /**
     * ## `onResizeGlobal`
     * The `onResizeGlobal` event is fired when the window is being resized.
     * @recursive-event
     */ onResizeGlobal: EventDeclaration<Event, E>;
    /**
     * ## `onKeyUpGlobal`
     * The `onKeyUpGlobal` event is fired when a key is released.
     * @recursive-event
     */ onKeyUpGlobal: EventDeclaration<KeyboardEvent, E>;
    /**
     * ## `onKeyDownGlobal`
     * The `onKeyUpGlobal` event is fired when a key is being pressed.
     * @recursive-event
     */ onKeyDownGlobal: EventDeclaration<KeyboardEvent, E>;
    /**
     * ## `onContextMenuGlobal`
     * The `onContextMenuGlobal` event is fired when another element is being right-clicked.
     * @recursive-event
     */ onContextMenuGlobal: EventDeclaration<PointerEvent, E>;
    /**
     * ## `onScrollGlobal`
     * The `onScrollGlobal` event is fired when the window is being scrolled into.
     * @recursive-event
     */ onScrollGlobal: EventDeclaration<Event, E>;
    /**
     * ## `onBeforeUnloadGlobal`
     * The `onBeforeUnloadGlobal` event is fired when the user attempt to leave the page.
     * @recursive-event
     */ onBeforeUnloadGlobal: EventDeclaration<BeforeUnloadEvent, E>;
}

export interface ElementChildren {
    children: Array<RecursiveElement>;
}
export interface Animation {
    /**
     * Name of the animation
     */
    name: string;
    /**
     * Steps of the animations
     */
    steps: { [key: string]: Selector };
}

export type MediaQuery = SelectorTypes & { condition: string };

export interface Selectors extends SelectorTypes {
    [key: string]: Selector;
}

export type ElementMediaQuery = MediaQuery & Selectors;

export interface StyleSheet extends SelectorTypes {
    /**
     * Define if the current stylesheet
     * should be scoped for the current element.
     */
    scoped: boolean;
    /**
     * Class name that will serve for styling.
     * The name should not start with a `.`
     * as it will be automatically added
     */
    className: string;
    /**
     * Array of animations.
     */
    animations: Array<Animation>;
    /**
     * Media queries of the current element.
     */
    mediaQueries: Array<ElementMediaQuery>;
}

export interface ComputedStyleSheets {
    vars: { [key: string]: string };
    fontFace: { [key: string]: any };
    selectors: Array<{ selector: string; content: Selector }>;
    mediaQueries: Array<MediaQuery>;
    animations: Array<Animation>;
    imports: Array<string>;
}

export interface CommonAttributes {
    /**
     * Element key among his siblings.
     */
    key: string;
    /**
     * Element lifecycle hooks.
     */
    hooks: Hooks<HTMLElement>;
    /**
     * Renderer flags.
     */
    flags: Flags;
    /**
     * Element style sheet.
     */
    style: StyleSheet;
}

export interface SVGAttributes extends CommonAttributes {
    id: string;
    lang: string;
    tabIndex: string;
    xmlBase: string;
    xmlLang: string;
    xmlSpace: string;
    className: string;
}

export interface FreeStyleSheet {
    /**
     * Object containing Css variables.
     * The renderer will add the `--` prefix
     * before each key.
     */
    var: { [key: string]: string };
    /**
     * Array of string, containing imports `url`s.
     */
    imports: Array<string>;
    /**
     * Style selectors.
     */
    selectors: { [key: string]: Selector };
    /**
     * Media Queries.
     */
    mediaQueries: {
        [key: string]: MediaQuery;
    };
    /**
     * Animations.
     */
    animations: { [key: string]: { [key: string]: Selector } };
    /**
     * Font Face
     */
    fontFace: Array<FontFace>;
}

export type RenderOptions = {
    app: BaseElement;
    root: HTMLElement;
    router: { route: Route; base: string; scroll: boolean };
    cacheSize: number;
};

export type Corners =
    | string
    | { top: string; bottom: string }
    | { left: string; right: string }
    | { topLeftBottomRight: string; topRightBottomLeft: string }
    | {
          topLeft: string;
          topRight: string;
          bottomRight: string;
          bottomLeft: string;
      };

export type Edges =
    | string
    | { vertical: string; horizontal: string }
    | { top: string; right: string; bottom: string; left: string };

export type ComponentHandler = (element: RecursiveElement) => RecursiveElement;
export interface AddressProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}

export interface ArticleProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}

export interface AsideProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}

export interface FooterProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}

export interface HeaderProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}

export interface H1Props
    extends CommonAttributes,
        Events<HTMLHeadingElement>,
        HTMLAttributes,
        ElementChildren {}

export interface H2Props
    extends CommonAttributes,
        Events<HTMLHeadingElement>,
        HTMLAttributes,
        ElementChildren {}

export interface H3Props
    extends CommonAttributes,
        Events<HTMLHeadingElement>,
        HTMLAttributes,
        ElementChildren {}

export interface H4Props
    extends CommonAttributes,
        Events<HTMLHeadingElement>,
        HTMLAttributes,
        ElementChildren {}

export interface H5Props
    extends CommonAttributes,
        Events<HTMLHeadingElement>,
        HTMLAttributes,
        ElementChildren {}

export interface H6Props
    extends CommonAttributes,
        Events<HTMLHeadingElement>,
        HTMLAttributes,
        ElementChildren {}

export interface MainProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}

export interface NavProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}

export interface SectionProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}

export interface BlockquoteProps
    extends CommonAttributes,
        Events<HTMLQuoteElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    cite: string;
}

export interface DdProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}

export interface DivProps
    extends CommonAttributes,
        Events<HTMLDivElement>,
        HTMLAttributes,
        ElementChildren {}

export interface DlProps
    extends CommonAttributes,
        Events<HTMLDListElement>,
        HTMLAttributes,
        ElementChildren {}

export interface DtProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}

export interface FigcaptionProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}

export interface FigureProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}

export interface HrProps
    extends CommonAttributes,
        Events<HTMLHRElement>,
        HTMLAttributes {
    /**
     * ## `undefined`
     *
     * @used
     */
    align: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    color: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    noShade: boolean;
    /**
     * ## `undefined`
     *
     * @used
     */
    size: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    width: string;
}

export interface LiProps
    extends CommonAttributes,
        Events<HTMLLIElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    value: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    type: string;
}

export interface MenuProps
    extends CommonAttributes,
        Events<HTMLMenuElement>,
        HTMLAttributes,
        ElementChildren {}

export interface OlProps
    extends CommonAttributes,
        Events<HTMLOListElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    reversed: boolean;
    /**
     * ## `undefined`
     *
     * @used
     */
    start: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    type: string;
}

export interface PProps
    extends CommonAttributes,
        Events<HTMLParagraphElement>,
        HTMLAttributes,
        ElementChildren {}

export interface PreProps
    extends CommonAttributes,
        Events<HTMLPreElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    cols: number;
    /**
     * ## `undefined`
     *
     * @used
     */
    width: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    wrap: "hard" | "soft" | "off";
}

export interface UlProps
    extends CommonAttributes,
        Events<HTMLUListElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    compact: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    type: string;
}

export interface AProps
    extends CommonAttributes,
        Events<HTMLAnchorElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    download: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    href: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    hrefLang: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ping: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    referrerPolicy:
        | "no-referrer"
        | "no-referrer-when-downgrade"
        | "origin"
        | "origin-when-cross-origin"
        | "same-origin"
        | "strict-origin"
        | "strict-origin-when-cross-origin"
        | "unsafe-url";
    /**
     * ## `undefined`
     *
     * @used
     */
    rel:
        | "alternate"
        | "author"
        | "bookmark"
        | "canonical"
        | "dns-prefetch"
        | "external"
        | "help"
        | "icon"
        | "license"
        | "manifest"
        | "me"
        | "modulepreload"
        | "next"
        | "nofollow"
        | "noopener"
        | "noreferrer"
        | "opener"
        | "pingback"
        | "preconnect"
        | "prefetch"
        | "preload"
        | "prerender"
        | "prev"
        | "search"
        | "stylesheet"
        | "tag";
    /**
     * ## `undefined`
     *
     * @used
     */
    target: "_self" | "_blank" | "_parent" | "_top";
    /**
     * ## `undefined`
     *
     * @used
     */
    type: string;
}

export interface AbbrProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}

export interface BProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}

export interface BdiProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    dir: "ltr" | "rtl" | "auto";
}

export interface BdoProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    dir: "ltr" | "rtl" | "auto";
}

export interface BrProps
    extends CommonAttributes,
        Events<HTMLBRElement>,
        HTMLAttributes {}

export interface CiteProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}

export interface CodeProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}

export interface DataProps
    extends CommonAttributes,
        Events<HTMLDataElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    value: string;
}

export interface DfnProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}

export interface EmProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}

export interface IProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}

export interface KbdProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}

export interface MarkProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}

export interface QProps
    extends CommonAttributes,
        Events<HTMLQuoteElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    cite: string;
}

export interface RpProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}

export interface RtProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}

export interface RubyProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}

export interface SProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}

export interface SampProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}

export interface SmallProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}

export interface SpanProps
    extends CommonAttributes,
        Events<HTMLSpanElement>,
        HTMLAttributes,
        ElementChildren {}

export interface StrongProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}

export interface SubProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}

export interface SupProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}

export interface TimeProps
    extends CommonAttributes,
        Events<HTMLTimeElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    dateTime: string;
}

export interface UProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}

export interface VarProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}

export interface WbrProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}

export interface AreaProps
    extends CommonAttributes,
        Events<HTMLAreaElement>,
        HTMLAttributes {
    /**
     * ## `undefined`
     *
     * @used
     */
    alt: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    coords: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    download: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    href: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    hrefLang: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ping: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    referrerPolicy:
        | "no-referrer"
        | "no-referrer-when-downgrade"
        | "origin"
        | "origin-when-cross-origin"
        | "same-origin"
        | "strict-origin"
        | "strict-origin-when-cross-origin"
        | "unsafe-url";
    /**
     * ## `undefined`
     *
     * @used
     */
    rel:
        | "alternate"
        | "author"
        | "bookmark"
        | "canonical"
        | "dns-prefetch"
        | "external"
        | "help"
        | "icon"
        | "license"
        | "manifest"
        | "me"
        | "modulepreload"
        | "next"
        | "nofollow"
        | "noopener"
        | "noreferrer"
        | "opener"
        | "pingback"
        | "preconnect"
        | "prefetch"
        | "preload"
        | "prerender"
        | "prev"
        | "search"
        | "stylesheet"
        | "tag";
    /**
     * ## `undefined`
     *
     * @used
     */
    shape: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    target: "_self" | "_blank" | "_parent" | "_top";
}

export interface AudioProps
    extends CommonAttributes,
        Events<HTMLAudioElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    autoplay: boolean;
    /**
     * ## `undefined`
     *
     * @used
     */
    controls: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    crossOrigin: "use-credentials" | "anonymous";
    /**
     * ## `undefined`
     *
     * @used
     */
    loop: boolean;
    /**
     * ## `undefined`
     *
     * @used
     */
    muted: boolean;
    /**
     * ## `undefined`
     *
     * @used
     */
    preload: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    src: string;
}

export interface ImgProps
    extends CommonAttributes,
        Events<HTMLImageElement>,
        HTMLAttributes {
    /**
     * ## `undefined`
     *
     * @used
     */
    alt: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    crossOrigin: "use-credentials" | "anonymous";
    /**
     * ## `undefined`
     *
     * @used
     */
    decoding: "sync" | "async" | "auto";
    /**
     * ## `undefined`
     *
     * @used
     */
    height: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    isMap: boolean;
    /**
     * ## `undefined`
     *
     * @used
     */
    loading: "lazy" | "eager";
    /**
     * ## `undefined`
     *
     * @used
     */
    referrerPolicy:
        | "no-referrer"
        | "no-referrer-when-downgrade"
        | "origin"
        | "origin-when-cross-origin"
        | "same-origin"
        | "strict-origin"
        | "strict-origin-when-cross-origin"
        | "unsafe-url";
    /**
     * ## `undefined`
     *
     * @used
     */
    sizes: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    src: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    srcSet: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    width: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    useMap: string;
}

export interface MapProps
    extends CommonAttributes,
        Events<HTMLMapElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    name: string;
}

export interface TrackProps
    extends CommonAttributes,
        Events<HTMLTrackElement>,
        HTMLAttributes {
    /**
     * ## `undefined`
     *
     * @used
     */
    def: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    kind: "subtitles" | "captions" | "descriptions" | "chapters" | "metadata";
    /**
     * ## `undefined`
     *
     * @used
     */
    label: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    src: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    srcLang: string;
}

export interface VideoProps
    extends CommonAttributes,
        Events<HTMLVideoElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    autoplay: boolean;
    /**
     * ## `undefined`
     *
     * @used
     */
    crossOrigin: "use-credentials" | "anonymous";
    /**
     * ## `undefined`
     *
     * @used
     */
    height: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    loop: boolean;
    /**
     * ## `undefined`
     *
     * @used
     */
    muted: boolean;
    /**
     * ## `undefined`
     *
     * @used
     */
    playsInline: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    poster: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    preload: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    src: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    width: string;
}

export interface EmbedProps
    extends CommonAttributes,
        Events<HTMLEmbedElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    height: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    src: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    type: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    width: string;
}

export interface IframeProps
    extends CommonAttributes,
        Events<HTMLIFrameElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    allow: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    allowFullScreen: boolean;
    /**
     * ## `undefined`
     *
     * @used
     */
    allowPaymentRequest: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    height: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    loading: "lazy" | "eager";
    /**
     * ## `undefined`
     *
     * @used
     */
    name: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    referrerPolicy:
        | "no-referrer"
        | "no-referrer-when-downgrade"
        | "origin"
        | "origin-when-cross-origin"
        | "same-origin"
        | "strict-origin"
        | "strict-origin-when-cross-origin"
        | "unsafe-url";
    /**
     * ## `undefined`
     *
     * @used
     */
    sandbox:
        | "allow-downloads-without-user-activation"
        | "allow-downloads"
        | "allow-forms"
        | "allow-modals"
        | "allow-orientation-lock"
        | "allow-pointer-lock"
        | "allow-popups"
        | "allow-popups-to-escape-sandbox"
        | "allow-presentation"
        | "allow-same-origin"
        | "allow-scripts"
        | "allow-storage-access-by-user-activation"
        | "allow-top-navigation"
        | "allow-top-navigation-by-user-activation";
    /**
     * ## `undefined`
     *
     * @used
     */
    src: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    srcDoc: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    width: string;
}

export interface ObjectProps
    extends CommonAttributes,
        Events<HTMLObjectElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    data: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    form: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    height: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    name: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    type: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    useMap: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    width: string;
}

export interface PictureProps
    extends CommonAttributes,
        Events<HTMLPictureElement>,
        HTMLAttributes,
        ElementChildren {}

export interface PortalProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    src: string;
}

export interface SourceProps
    extends CommonAttributes,
        Events<HTMLSourceElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    type: string;
}

export interface CanvasProps
    extends CommonAttributes,
        Events<HTMLCanvasElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    height: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    width: string;
}

export interface NoscriptProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}

export interface DelProps
    extends CommonAttributes,
        Events<HTMLModElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    cite: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    dateTime: string;
}

export interface InsProps
    extends CommonAttributes,
        Events<HTMLModElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    cite: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    dateTime: string;
}

export interface CaptionProps
    extends CommonAttributes,
        Events<HTMLTableCaptionElement>,
        HTMLAttributes,
        ElementChildren {}

export interface ColProps
    extends CommonAttributes,
        Events<HTMLTableColElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    span: string;
}

export interface ColgroupProps
    extends CommonAttributes,
        Events<HTMLTableColElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    span: string;
}

export interface TableProps
    extends CommonAttributes,
        Events<HTMLTableElement>,
        HTMLAttributes,
        ElementChildren {}

export interface TbodyProps
    extends CommonAttributes,
        Events<HTMLTableSectionElement>,
        HTMLAttributes,
        ElementChildren {}

export interface TdProps
    extends CommonAttributes,
        Events<HTMLTableCellElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    colSpan: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    headers: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    rowSpan: string;
}

export interface TfootProps
    extends CommonAttributes,
        Events<HTMLTableSectionElement>,
        HTMLAttributes,
        ElementChildren {}

export interface ThProps
    extends CommonAttributes,
        Events<HTMLTableCellElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    colSpan: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    headers: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    rowSpan: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    scope: "row" | "col" | "rowgroup" | "colgroup";
}

export interface TheadProps
    extends CommonAttributes,
        Events<HTMLTableSectionElement>,
        HTMLAttributes,
        ElementChildren {}

export interface TrProps
    extends CommonAttributes,
        Events<HTMLTableRowElement>,
        HTMLAttributes,
        ElementChildren {}

export interface ButtonProps
    extends CommonAttributes,
        Events<HTMLButtonElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    autoFocus: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    disabled: boolean;
    /**
     * ## `undefined`
     *
     * @used
     */
    form: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    formAction: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    formEncType: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    formMethod: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    formNoValidate: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    formTarget: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    name: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    type: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    value: string;
}

export interface DatalistProps
    extends CommonAttributes,
        Events<HTMLDataListElement>,
        HTMLAttributes,
        ElementChildren {}

export interface FieldsetProps
    extends CommonAttributes,
        Events<HTMLFieldSetElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    disabled: boolean;
    /**
     * ## `undefined`
     *
     * @used
     */
    form: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    name: string;
}

export interface FormProps
    extends CommonAttributes,
        Events<HTMLFormElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    acceptCharSet: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    autoComplete:
        | "off"
        | "on"
        | "name"
        | "honorific-prefix"
        | "given-name"
        | "additional-name"
        | "family-name"
        | "honorific-suffix"
        | "nickname"
        | "email"
        | "username"
        | "new-password"
        | "current-password"
        | "one-time-code"
        | "organization-title"
        | "organization"
        | "street-address"
        | "country"
        | "country-name"
        | "postal-code"
        | "cc-name"
        | "cc-given-name"
        | "cc-additional-name"
        | "cc-family-name"
        | "cc-number"
        | "cc-exp"
        | "cc-exp-month"
        | "cc-exp-year"
        | "cc-csc"
        | "cc-type"
        | "transaction-currency"
        | "transaction-amount"
        | "language"
        | "bday"
        | "bday-day"
        | "bday-month"
        | "bday-year"
        | "sex"
        | "tel"
        | "tel-country-code"
        | "tel-national"
        | "tel-area-code"
        | "tel-local"
        | "tel-extension"
        | "impp"
        | "url"
        | "photo";
    /**
     * ## `undefined`
     *
     * @used
     */
    name: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    rel:
        | "alternate"
        | "author"
        | "bookmark"
        | "canonical"
        | "dns-prefetch"
        | "external"
        | "help"
        | "icon"
        | "license"
        | "manifest"
        | "me"
        | "modulepreload"
        | "next"
        | "nofollow"
        | "noopener"
        | "noreferrer"
        | "opener"
        | "pingback"
        | "preconnect"
        | "prefetch"
        | "preload"
        | "prerender"
        | "prev"
        | "search"
        | "stylesheet"
        | "tag";
    /**
     * ## `undefined`
     *
     * @used
     */
    action: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    encType:
        | "application/x-www-form-urlencoded"
        | "multipart/form-data"
        | "text/plain";
    /**
     * ## `undefined`
     *
     * @used
     */
    method: "post" | "get" | "dialog";
    /**
     * ## `undefined`
     *
     * @used
     */
    noValidate: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    target: "_self" | "_blank" | "_parent" | "_top";
}

export interface InputProps
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes {
    /**
     * ## `undefined`
     *
     * @used
     */
    accept: "audio/*" | "video/*" | "image/*";
    /**
     * ## `undefined`
     *
     * @used
     */
    alt: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    autoComplete:
        | "off"
        | "on"
        | "name"
        | "honorific-prefix"
        | "given-name"
        | "additional-name"
        | "family-name"
        | "honorific-suffix"
        | "nickname"
        | "email"
        | "username"
        | "new-password"
        | "current-password"
        | "one-time-code"
        | "organization-title"
        | "organization"
        | "street-address"
        | "country"
        | "country-name"
        | "postal-code"
        | "cc-name"
        | "cc-given-name"
        | "cc-additional-name"
        | "cc-family-name"
        | "cc-number"
        | "cc-exp"
        | "cc-exp-month"
        | "cc-exp-year"
        | "cc-csc"
        | "cc-type"
        | "transaction-currency"
        | "transaction-amount"
        | "language"
        | "bday"
        | "bday-day"
        | "bday-month"
        | "bday-year"
        | "sex"
        | "tel"
        | "tel-country-code"
        | "tel-national"
        | "tel-area-code"
        | "tel-local"
        | "tel-extension"
        | "impp"
        | "url"
        | "photo";
    /**
     * ## `undefined`
     *
     * @used
     */
    capture: "user" | "environment";
    /**
     * ## `undefined`
     *
     * @used
     */
    checked: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    dirName: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    disabled: boolean;
    /**
     * ## `undefined`
     *
     * @used
     */
    form: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    formAction: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    formEncType: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    formMethod: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    formNoValidate: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    formTarget: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    height: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    list: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    max: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    maxLength: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    min: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    minLength: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    multiple: boolean;
    /**
     * ## `undefined`
     *
     * @used
     */
    name: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    pattern: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    placeholder: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    readOnly: boolean;
    /**
     * ## `undefined`
     *
     * @used
     */
    required: boolean;
    /**
     * ## `undefined`
     *
     * @used
     */
    size: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    src: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    step: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    type: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    value: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    width: string;
}

export interface LabelProps
    extends CommonAttributes,
        Events<HTMLLabelElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    isFor: string;
}

export interface LegendProps
    extends CommonAttributes,
        Events<HTMLLegendElement>,
        HTMLAttributes,
        ElementChildren {}

export interface MeterProps
    extends CommonAttributes,
        Events<HTMLMeterElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    value: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    min: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    max: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    low: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    high: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    optimum: string;
}

export interface OptgroupProps
    extends CommonAttributes,
        Events<HTMLOptGroupElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    disabled: boolean;
    /**
     * ## `undefined`
     *
     * @used
     */
    label: string;
}

export interface OptionProps
    extends CommonAttributes,
        Events<HTMLOptionElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    disabled: boolean;
    /**
     * ## `undefined`
     *
     * @used
     */
    label: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    selected: boolean;
    /**
     * ## `undefined`
     *
     * @used
     */
    value: string;
}

export interface OutputProps
    extends CommonAttributes,
        Events<HTMLOutputElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    isFor: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    form: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    name: string;
}

export interface ProgressProps
    extends CommonAttributes,
        Events<HTMLProgressElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    max: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    value: string;
}

export interface SelectProps
    extends CommonAttributes,
        Events<HTMLSelectElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    autoComplete:
        | "off"
        | "on"
        | "name"
        | "honorific-prefix"
        | "given-name"
        | "additional-name"
        | "family-name"
        | "honorific-suffix"
        | "nickname"
        | "email"
        | "username"
        | "new-password"
        | "current-password"
        | "one-time-code"
        | "organization-title"
        | "organization"
        | "street-address"
        | "country"
        | "country-name"
        | "postal-code"
        | "cc-name"
        | "cc-given-name"
        | "cc-additional-name"
        | "cc-family-name"
        | "cc-number"
        | "cc-exp"
        | "cc-exp-month"
        | "cc-exp-year"
        | "cc-csc"
        | "cc-type"
        | "transaction-currency"
        | "transaction-amount"
        | "language"
        | "bday"
        | "bday-day"
        | "bday-month"
        | "bday-year"
        | "sex"
        | "tel"
        | "tel-country-code"
        | "tel-national"
        | "tel-area-code"
        | "tel-local"
        | "tel-extension"
        | "impp"
        | "url"
        | "photo";
    /**
     * ## `undefined`
     *
     * @used
     */
    autoFocus: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    disabled: boolean;
    /**
     * ## `undefined`
     *
     * @used
     */
    form: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    multiple: boolean;
    /**
     * ## `undefined`
     *
     * @used
     */
    name: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    required: boolean;
    /**
     * ## `undefined`
     *
     * @used
     */
    size: string;
}

export interface TextAreaProps
    extends CommonAttributes,
        Events<HTMLTextAreaElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    autoComplete:
        | "off"
        | "on"
        | "name"
        | "honorific-prefix"
        | "given-name"
        | "additional-name"
        | "family-name"
        | "honorific-suffix"
        | "nickname"
        | "email"
        | "username"
        | "new-password"
        | "current-password"
        | "one-time-code"
        | "organization-title"
        | "organization"
        | "street-address"
        | "country"
        | "country-name"
        | "postal-code"
        | "cc-name"
        | "cc-given-name"
        | "cc-additional-name"
        | "cc-family-name"
        | "cc-number"
        | "cc-exp"
        | "cc-exp-month"
        | "cc-exp-year"
        | "cc-csc"
        | "cc-type"
        | "transaction-currency"
        | "transaction-amount"
        | "language"
        | "bday"
        | "bday-day"
        | "bday-month"
        | "bday-year"
        | "sex"
        | "tel"
        | "tel-country-code"
        | "tel-national"
        | "tel-area-code"
        | "tel-local"
        | "tel-extension"
        | "impp"
        | "url"
        | "photo";
    /**
     * ## `undefined`
     *
     * @used
     */
    autoFocus: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    cols: number;
    /**
     * ## `undefined`
     *
     * @used
     */
    disabled: boolean;
    /**
     * ## `undefined`
     *
     * @used
     */
    form: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    maxLength: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    name: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    placeholder: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    readOnly: boolean;
    /**
     * ## `undefined`
     *
     * @used
     */
    required: boolean;
    /**
     * ## `undefined`
     *
     * @used
     */
    spellCheck: "true" | "false";
    /**
     * ## `undefined`
     *
     * @used
     */
    wrap: "hard" | "soft" | "off";
}

export interface DetailsProps
    extends CommonAttributes,
        Events<HTMLDetailsElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    open: boolean;
}

export interface DialogProps
    extends CommonAttributes,
        Events<HTMLDialogElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    open: boolean;
}

export interface SummaryProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}

export interface SlotProps
    extends CommonAttributes,
        Events<HTMLSlotElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    name: string;
}

export interface TemplateProps
    extends CommonAttributes,
        Events<HTMLTemplateElement>,
        HTMLAttributes,
        ElementChildren {}

export interface HtmlContainerProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}

export interface FragmentProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}

export interface ColumnProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}

export interface RowProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}

export interface CenteredColumnProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}

export interface CenteredRowProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}

export interface CheckBoxProps
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes,
        ElementChildren {
    value: string;
    checked: string;
}

export interface ColorPickerProps
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes,
        ElementChildren {
    value: string;
}

export interface DatePickerProps
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes,
        ElementChildren {
    value: string;
    max: string;
    min: string;
    step: string;
}

export interface DateTimeLocalPickerProps
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes,
        ElementChildren {
    value: string;
    max: string;
    min: string;
    step: string;
}

export interface EmailFieldProps
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes,
        ElementChildren {
    value: string;
    autoComplete: string;
    list: string;
    maxLength: string;
    minLength: string;
    multiple: string;
    pattern: string;
    placeholder: string;
    readOnly: string;
    required: boolean;
    size: string;
}

export interface FilePickerProps
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes,
        ElementChildren {
    required: boolean;
    accept: string;
    capture: string;
    multiple: string;
}

export interface HiddenInputProps
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes,
        ElementChildren {
    name: string;
    value: string;
    autoComplete: string;
}

export interface ImagePickerProps
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes,
        ElementChildren {
    alt: string;
    src: string;
    height: string;
    formAction: string;
    formEncType: string;
    formMethod: string;
    formNoValidate: string;
    formTarget: string;
}

export interface MonthPickerProps
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes,
        ElementChildren {
    autoComplete: string;
    list: string;
    readOnly: string;
    step: string;
    value: string;
}

export interface NumberPickerProps
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes,
        ElementChildren {
    autoComplete: string;
    list: string;
    placeholder: string;
    readOnly: string;
    value: string;
    valueAsNumber: string;
}

export interface PasswordFieldProps
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes,
        ElementChildren {
    autoComplete: string;
    inputMode: string;
    maxLength: string;
    minLength: string;
    pattern: string;
    placeholder: string;
    readOnly: string;
    required: string;
    size: string;
    value: string;
}

export interface RadioButtonProps
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes,
        ElementChildren {
    checked: string;
    value: string;
    required: string;
}

export interface RangePickerProps
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes,
        ElementChildren {
    autoComplete: string;
    list: string;
    max: string;
    min: string;
    step: string;
    value: string;
    valueAsNumber: string;
}

export interface ResetButtonProps
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes,
        ElementChildren {
    value: string;
}

export interface SearchFieldProps
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes,
        ElementChildren {
    autoComplete: string;
    list: string;
    maxLength: string;
    minLength: string;
    pattern: string;
    placeholder: string;
    required: string;
    size: string;
    value: string;
}

export interface SubmitButtonProps
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes,
        ElementChildren {
    value: string;
}

export interface TelephoneNumberFieldProps
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes,
        ElementChildren {
    autoComplete: string;
    list: string;
    maxLength: string;
    minLength: string;
    pattern: string;
    readOnly: string;
    placeholder: string;
    size: string;
    value: string;
}

export interface TextFieldProps
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes,
        ElementChildren {
    autoComplete: string;
    list: string;
    maxLength: string;
    minLength: string;
    pattern: string;
    readOnly: string;
    placeholder: string;
    size: string;
    value: string;
    required: string;
}

export interface TimePickerProps
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes,
        ElementChildren {
    autoComplete: string;
    list: string;
    readOnly: string;
    step: string;
    value: string;
}

export interface UrlFieldProps
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes,
        ElementChildren {
    autoComplete: string;
    list: string;
    maxLength: string;
    minLength: string;
    pattern: string;
    readOnly: string;
    placeholder: string;
    size: string;
    value: string;
    required: string;
}

export interface WeekPickerProps
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes,
        ElementChildren {
    autoComplete: string;
    list: string;
    readOnly: string;
    step: string;
    value: string;
}

export interface SpacerProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes {
    height: number;
    width: number;
}

export interface LazyColumnProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {
    onObserved: Function;
}

export interface LazyRowProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {
    onObserved: Function;
}

export interface HorizontalLineProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes {
    thickness: string;
    width: string;
    marginVertical: string;
    color: Color;
}

export interface VerticalLineProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes {
    thickness: string;
    height: string;
    marginHorizontal: string;
    color: Color;
}

export interface LinkProps
    extends CommonAttributes,
        Events<HTMLAnchorElement>,
        HTMLAttributes,
        ElementChildren {
    href: string;
}

export interface ToggleSwitchProps
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes {
    radiusPx: number;
    color: Color;
    backgroundColor: Color;
    onBackgroundColor: Color;
    checked: boolean;
    onCheckChange: (e: Event) => void;
}

export interface CircularSpinnerProps
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes {
    color: Color;
    thickness: number;
    size: number;
}

export interface SVGAProps
    extends CommonAttributes,
        Events<SVGAElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    href: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    hrefLang: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    target: "_self" | "_blank" | "_parent" | "_top";
    /**
     * ## `undefined`
     *
     * @used
     */
    type: string;
}

export interface SVGAnimateProps
    extends CommonAttributes,
        Events<SVGAnimateElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    begin: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    dur: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    end: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    min: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    max: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    restart: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    repeatCount: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    fill: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    calcMode: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    values: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    keyTimes: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    keySplines: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    from: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    to: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    by: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    attributeName: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    additive: "sum" | "replace";
    /**
     * ## `undefined`
     *
     * @used
     */
    accumulate: "sum" | "none";
}

export interface SVGAnimateMotionProps
    extends CommonAttributes,
        Events<SVGAnimateMotionElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    keyPoints: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    path: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    rotate: string;
}

export interface SVGAnimateTransformProps
    extends CommonAttributes,
        Events<SVGAnimateTransformElement>,
        HTMLAttributes,
        ElementChildren {}

export interface SVGCircleProps
    extends CommonAttributes,
        Events<SVGCircleElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    cx: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    cy: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    r: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    pathLength: string;
}

export interface SVGClipPathProps
    extends CommonAttributes,
        Events<SVGClipPathElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    clipPathUnits: "userSpaceOnUse" | "objectBoundingBox";
}

export interface SVGDefsProps
    extends CommonAttributes,
        Events<SVGDefsElement>,
        HTMLAttributes,
        ElementChildren {}

export interface SVGDescProps
    extends CommonAttributes,
        Events<SVGDescElement>,
        HTMLAttributes,
        ElementChildren {}

export interface SVGDiscardProps
    extends CommonAttributes,
        Events<SVGElement>,
        HTMLAttributes,
        ElementChildren {}

export interface SVGEllipseProps
    extends CommonAttributes,
        Events<SVGEllipseElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    cx: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    cy: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    rx: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ry: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    pathLength: string;
}

export interface SVGFeBlendProps
    extends CommonAttributes,
        Events<SVGFEBlendElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    in: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    in2: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    mode: string;
}

export interface SVGFeColorMatrixProps
    extends CommonAttributes,
        Events<SVGFEColorMatrixElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    in: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    type: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    values: string;
}

export interface SVGFeComponentTransferProps
    extends CommonAttributes,
        Events<SVGFEComponentTransferElement>,
        HTMLAttributes,
        ElementChildren {}

export interface SVGFeCompositeProps
    extends CommonAttributes,
        Events<SVGFECompositeElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    in: string;
}

export interface SVGFeConvolveMatrixProps
    extends CommonAttributes,
        Events<SVGFEConvolveMatrixElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    in: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    order: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    kernelMatrix: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    bias: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    targetX: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    targetY: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    edgeMode: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    kernelUnitLength: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    preserveAlpha: string;
}

export interface SVGFeDiffuseLightingProps
    extends CommonAttributes,
        Events<SVGFEDiffuseLightingElement>,
        HTMLAttributes,
        ElementChildren {}

export interface SVGFeDisplacementMapProps
    extends CommonAttributes,
        Events<SVGFEDisplacementMapElement>,
        HTMLAttributes,
        ElementChildren {}

export interface SVGFeDistantLightProps
    extends CommonAttributes,
        Events<SVGFEDistantLightElement>,
        HTMLAttributes,
        ElementChildren {}

export interface SVGFeDropShadowProps
    extends CommonAttributes,
        Events<SVGFEDropShadowElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    id: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    surfaceScale: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    diffuseConstant: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    kernelUnitLength: string;
}

export interface SVGFeFloodProps
    extends CommonAttributes,
        Events<SVGFEFloodElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    floodColor: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    floodOpacity: string;
}

export interface SVGFeFuncAProps
    extends CommonAttributes,
        Events<SVGFEFuncAElement>,
        HTMLAttributes,
        ElementChildren {}

export interface SVGFeFuncBProps
    extends CommonAttributes,
        Events<SVGFEFuncBElement>,
        HTMLAttributes,
        ElementChildren {}

export interface SVGFeFuncGProps
    extends CommonAttributes,
        Events<SVGFEFuncGElement>,
        HTMLAttributes,
        ElementChildren {}

export interface SVGFeFuncRProps
    extends CommonAttributes,
        Events<SVGFEFuncRElement>,
        HTMLAttributes,
        ElementChildren {}

export interface SVGFeGaussianBlurProps
    extends CommonAttributes,
        Events<SVGFEGaussianBlurElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    in: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    stdDeviation: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    edgeMode: string;
}

export interface SVGFeImageProps
    extends CommonAttributes,
        Events<SVGFEImageElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    preserveAspectRatio: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    xLinkHref: string;
}

export interface SVGFeMergeProps
    extends CommonAttributes,
        Events<SVGFEMergeElement>,
        HTMLAttributes,
        ElementChildren {}

export interface SVGFeMergeNodeProps
    extends CommonAttributes,
        Events<SVGFEMergeNodeElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    in: string;
}

export interface SVGFeMorphologyProps
    extends CommonAttributes,
        Events<SVGFEMorphologyElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    in: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    operator: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    radius: string;
}

export interface SVGFeOffsetProps
    extends CommonAttributes,
        Events<SVGFEOffsetElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    in: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    dx: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    dy: string;
}

export interface SVGFePointLightProps
    extends CommonAttributes,
        Events<SVGFEPointLightElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    x: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    y: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    z: string;
}

export interface SVGFeSpecularLightingProps
    extends CommonAttributes,
        Events<SVGFESpecularLightingElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    in: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    surfaceScale: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    specularConstant: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    specularExponent: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    kernelUnitLength: string;
}

export interface SVGFeSpotLightProps
    extends CommonAttributes,
        Events<SVGFESpotLightElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    x: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    y: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    z: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    pointAtX: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    pointAtY: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    pointAtZ: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    specularExponent: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    limitingConeAngle: string;
}

export interface SVGFeTileProps
    extends CommonAttributes,
        Events<SVGFETileElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    in: string;
}

export interface SVGFeTurbulenceProps
    extends CommonAttributes,
        Events<SVGFETurbulenceElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    baseFrequency: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    numOctaves: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    seed: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    stitchTiles: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    type: string;
}

export interface SVGFilterProps
    extends CommonAttributes,
        Events<SVGFilterElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    x: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    y: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    width: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    height: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    filterRes: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    filterUnits: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    primitiveUnits: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    xLinkHref: string;
}

export interface SVGForeignObjectProps
    extends CommonAttributes,
        Events<SVGForeignObjectElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    height: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    width: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    x: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    y: string;
}

export interface SVGGProps
    extends CommonAttributes,
        Events<SVGGElement>,
        HTMLAttributes,
        ElementChildren {}

export interface SVGHatchProps
    extends CommonAttributes,
        Events<SVGElement>,
        HTMLAttributes,
        ElementChildren {}

export interface SVGHatchpathProps
    extends CommonAttributes,
        Events<SVGElement>,
        HTMLAttributes,
        ElementChildren {}

export interface SVGImageProps
    extends CommonAttributes,
        Events<SVGImageElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    x: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    y: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    width: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    height: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    href: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    xLinkHref: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    preserveAspectRatio: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    crossOrigin: "use-credentials" | "anonymous";
}

export interface SVGLineProps
    extends CommonAttributes,
        Events<SVGLineElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    x1: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    x2: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    y1: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    y2: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    pathLength: string;
}

export interface SVGLinearGradientProps
    extends CommonAttributes,
        Events<SVGLinearGradientElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    gradientUnits: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    gradientTransform: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    href: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    spreadMethod: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    x1: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    x2: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    y1: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    y2: string;
}

export interface SVGMarkerProps
    extends CommonAttributes,
        Events<SVGMarkerElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    markerHeight: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    markerUnits: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    markerWidth: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    orient: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    preserveAspectRatio: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    refX: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    refY: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    viewBox: string;
}

export interface SVGMaskProps
    extends CommonAttributes,
        Events<SVGMaskElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    height: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    maskContentUnits: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    maskUnits: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    x: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    y: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    width: string;
}

export interface SVGMetadataProps
    extends CommonAttributes,
        Events<SVGMetadataElement>,
        HTMLAttributes,
        ElementChildren {}

export interface SVGMpathProps
    extends CommonAttributes,
        Events<SVGMPathElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    xLinkHref: string;
}

export interface SVGPathProps
    extends CommonAttributes,
        Events<SVGPathElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    d: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    pathLength: string;
}

export interface SVGPatternProps
    extends CommonAttributes,
        Events<SVGPatternElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    height: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    href: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    patternContentUnits: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    patternTransform: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    preserveAspectRatio: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    viewBox: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    x: string;
}

export interface SVGPolygonProps
    extends CommonAttributes,
        Events<SVGPolygonElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    points: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    pathLength: string;
}

export interface SVGPolylineProps
    extends CommonAttributes,
        Events<SVGPolylineElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    points: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    pathLength: string;
}

export interface SVGRadialGradientProps
    extends CommonAttributes,
        Events<SVGRadialGradientElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    cx: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    cy: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    fr: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    fx: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    fy: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    gradientUnits: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    gradientTransform: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    href: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    r: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    spreadMethod: string;
}

export interface SVGRectProps
    extends CommonAttributes,
        Events<SVGRectElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    x: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    y: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    width: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    height: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    rx: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ry: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    pathLength: string;
}

export interface SVGSetProps
    extends CommonAttributes,
        Events<SVGSetElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    to: string;
}

export interface SVGStopProps
    extends CommonAttributes,
        Events<SVGStopElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    stopColor: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    stopOpacity: string;
}

export interface SVGSvgProps
    extends CommonAttributes,
        Events<SVGSVGElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    height: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    preserveAspectRatio: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    viewBox: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    width: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    x: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    y: string;
}

export interface SVGSwitchProps
    extends CommonAttributes,
        Events<SVGSwitchElement>,
        HTMLAttributes,
        ElementChildren {}

export interface SVGSymbolProps
    extends CommonAttributes,
        Events<SVGSymbolElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    height: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    preserveAspectRatio: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    refX: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    refY: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    viewBox: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    width: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    x: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    y: string;
}

export interface SVGTextProps
    extends CommonAttributes,
        Events<SVGTextElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    x: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    y: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    dx: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    dy: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    rotate: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    lengthAdjust: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    textLength: string;
}

export interface SVGTextPathProps
    extends CommonAttributes,
        Events<SVGTextPathElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    href: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    lengthAdjust: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    method: "post" | "get" | "dialog";
    /**
     * ## `undefined`
     *
     * @used
     */
    path: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    side: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    spacing: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    startOffset: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    textLength: string;
}

export interface SVGTitleProps
    extends CommonAttributes,
        Events<SVGTitleElement>,
        HTMLAttributes,
        ElementChildren {}

export interface SVGTspanProps
    extends CommonAttributes,
        Events<SVGTSpanElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    x: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    y: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    dx: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    dy: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    rotate: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    lengthAdjust: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    textLength: string;
}

export interface SVGUseProps
    extends CommonAttributes,
        Events<SVGUseElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## `undefined`
     *
     * @used
     */
    href: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    xLinkHref: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    x: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    y: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    width: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    height: string;
}

export interface SVGViewProps
    extends CommonAttributes,
        Events<SVGViewElement>,
        HTMLAttributes,
        ElementChildren {}

export interface HTMLAttributes extends CommonAttributes {
    /**
     * ## `undefined`
     *
     * @used
     */
    className: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    id: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    lang: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    accessKey: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    autoCapitalize:
        | "off"
        | "none"
        | "on"
        | "sentences"
        | "words"
        | "characters";
    /**
     * ## `undefined`
     *
     * @used
     */
    contentEditable: "true" | "false";
    /**
     * ## `undefined`
     *
     * @used
     */
    contextMenu: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    compact: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    dir: "ltr" | "rtl" | "auto";
    /**
     * ## `undefined`
     *
     * @used
     */
    draggable: "true" | "false";
    /**
     * ## `undefined`
     *
     * @used
     */
    hidden: boolean;
    /**
     * ## `undefined`
     *
     * @used
     */
    itemProp: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    playsInline: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    role: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    slot: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    spellCheck: "true" | "false";
    /**
     * ## `undefined`
     *
     * @used
     */
    tabIndex: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    title: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    translate: "yes" | "no";
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaAutocomplete: "none" | "inline" | "list" | "both";
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaChecked: "false" | "true" | "mixed" | "undefined";
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaDisabled: "true" | "false";
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaErrormessage: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaExpanded: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaHaspopup: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaHidden: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaInvalid: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaLabel: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaLevel: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaModal: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaMultiline: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaMultiselectable: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaOrientation: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaPlaceholder: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaPressed: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaReadonly: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaRequired: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaSelected: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaSort: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaValuemax: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaValuemin: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaValuenow: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaValuetext: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaBusy: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaLive: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaRelevant: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaAtomic: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaDropeffect: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaGrabbed: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaActivedescendant: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaColcount: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaColindex: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaColspan: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaControls: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaDescribedby: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaDescription: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaDetails: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaFlowto: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaLabelledby: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaOwns: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaPosinset: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaRowcount: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaRowindex: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaRowspan: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaSetsize: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaCurrent: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaKeyshortcuts: string;
    /**
     * ## `undefined`
     *
     * @used
     */
    ariaRoledescription: string;
}
