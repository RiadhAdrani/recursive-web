import { property } from "../../templates";

export default {
    ascentOverride: property({
        css: "ascent-override",
        values: ["normal"],
        docs: [
            "The ascent-override CSS descriptor defines the ascent metric for the font. The ascent metric is the height above the baseline that CSS uses to lay out line boxes in an inline formatting context.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/ascent-override",
        ],
    }),
    descentOverride: property({
        css: "descent-override",
        values: ["normal"],
        docs: [
            "The descent-override CSS descriptor defines the descent metric for the font. The descent metric is the height below the baseline that CSS uses to lay out line boxes in an inline formatting context.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/descent-override",
        ],
    }),
    fontDisplay: property({
        css: "font-display",
        values: ["auto", "block", "swap", "fallback", "optional"],
        docs: [
            "The font-display descriptor determines how a font face is displayed based on whether and when it is downloaded and ready to use.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display",
        ],
    }),
    fontFamily: property({
        css: "font-family",
        docs: [
            "The font-family CSS descriptor sets the font family for a font specified in an @font-face rule.The value is used for name matching against a particular @font-face when styling elements using the font-family property. Any name may be used, and this overrides any name specified in the underlying font data.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-family",
        ],
    }),
    fontStretch: property({
        css: "font-stretch",
        values: [
            "normal",
            "semi-condensed",
            "condensed",
            "extra-condensed",
            "ultra-condensed",
            "semi-expanded",
            "expanded",
            "extra-expanded",
            "ultra-expanded",
        ],
        docs: [
            "The font-stretch CSS descriptor allows authors to specify a normal, condensed, or expanded face for the fonts specified in the @font-face rule.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-stretch",
        ],
    }),
    fontStyle: property({
        css: "font-style",
        values: ["normal", "italic", "oblique"],
        docs: [
            "The font-style CSS descriptor allows authors to specify font styles for the fonts specified in the @font-face rule.",
        ],
        links: ["https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face"],
    }),
    fontWeight: property({
        css: "font-weight",
        values: ["bold", "normal"],
        docs: [
            "The font-weight CSS descriptor allows authors to specify font weights for the fonts specified in the @font-face rule. The font-weight property can separately be used to set how thick or thin characters in text should be displayed.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-weight",
        ],
    }),
    fontFeatureSettings: property({
        css: "font-feature-settings",
        docs: [
            "The font-feature-settings CSS property controls advanced typographic features in OpenType fonts.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/CSS/font-feature-settings",
        ],
    }),
    fontVariationSettings: property({
        css: "font-variation-settings",
        value: ["normal"],
        docs: [
            "The font-feature-settings CSS property controls advanced typographic features in OpenType fonts.qqq",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/CSS/font-feature-settings",
        ],
    }),
    lineGapOverride: property({
        css: "line-gap-override",
        value: ["normal"],
        docs: [
            "The line-gap-override CSS descriptor defines the line-gap metric for the font. The line-gap metric is the font recommended line-gap or external leading.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/line-gap-override",
        ],
    }),
    src: property({
        css: "src",
        docs: [
            "The src CSS descriptor of the @font-face rule specifies the resource containing font data. It is required for the @font-face rule to be valid.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/src",
        ],
    }),
    unicodeRange: property({
        css: "unicode-range",
        docs: [
            "The unicode-range CSS descriptor sets the specific range of characters to be used from a font defined by @font-face and made available for use on the current page. If the page doesn't use any character in this range, the font is not downloaded; if it uses at least one, the whole font is downloaded.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/unicode-range",
        ],
    }),
    sizeAdjust: property({
        css: "size-adjust",
        docs: [
            "The size-adjust CSS descriptor defines a multiplier for glyph outlines and metrics associated with this font. This makes it easier to harmonize the designs of various fonts when rendered at the same font size.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/size-adjust",
        ],
    }),
};
