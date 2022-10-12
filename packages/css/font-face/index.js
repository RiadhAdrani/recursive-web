import { property } from "../../templates";
import { ListOfCssProperties } from "../properties/index.list";

const list = {
    ascentOverride: ListOfCssProperties.ascentOverride,
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
    fontFamily: ListOfCssProperties.fontFamily,
    fontStretch: ListOfCssProperties.fontStretch,
    fontStyle: ListOfCssProperties.fontStyle,
    fontWeight: ListOfCssProperties.fontWeight,
    fontVariant: ListOfCssProperties.fontVariant,
    fontFeatureSettings: ListOfCssProperties.fontFeatureSettings,
    fontVariationSettings: property({
        css: "font-feature-settings",
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

function is(key) {
    return list[key] !== undefined;
}

function get(key) {
    return list[key];
}

function renderFontFace(content) {
    if (!Array.isArray(content)) return "";

    let output = "@font-face{";

    content.forEach((item) => {
        for (let key in item) {
            if (!is(key) || item[key].toString().includes(";")) continue;

            output += `${get(key)}:${item[key]};`;
        }
    });

    output += "}";

    return output;
}

module.exports = { list, is, get, renderFontFace };
