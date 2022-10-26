/**
 *  ██████╗ ███████╗███╗   ██╗███████╗██████╗  █████╗ ████████╗███████╗██████╗
 * ██╔════╝ ██╔════╝████╗  ██║██╔════╝██╔══██╗██╔══██╗╚══██╔══╝██╔════╝██╔══██╗
 * ██║  ███╗█████╗  ██╔██╗ ██║█████╗  ██████╔╝███████║   ██║   █████╗  ██║  ██║
 * ██║   ██║██╔══╝  ██║╚██╗██║██╔══╝  ██╔══██╗██╔══██║   ██║   ██╔══╝  ██║  ██║
 * ╚██████╔╝███████╗██║ ╚████║███████╗██║  ██║██║  ██║   ██║   ███████╗██████╔╝
 *  ╚═════╝ ╚══════╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═════╝
 * ------------ Do not delete or modify the content of this file -------------
 */
import { CssPropertyDeclarationOf } from "./style";

/**
 * ## FontFace
 */
export interface FontFace {
    /**
     * ## ascentOverride
     * The ascent-override CSS descriptor defines the ascent metric for the font. The ascent metric is the height above the baseline that CSS uses to lay out line boxes in an inline formatting context.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/ascent-override}
     */
    ascentOverride: CssPropertyDeclarationOf<"normal">;
    /**
     * ## descentOverride
     * The descent-override CSS descriptor defines the descent metric for the font. The descent metric is the height below the baseline that CSS uses to lay out line boxes in an inline formatting context.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/descent-override}
     */
    descentOverride: CssPropertyDeclarationOf<"normal">;
    /**
     * ## fontDisplay
     * The font-display descriptor determines how a font face is displayed based on whether and when it is downloaded and ready to use.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display}
     */
    fontDisplay: CssPropertyDeclarationOf<
        "auto" | "block" | "swap" | "fallback" | "optional"
    >;
    /**
     * ## fontFamily
     * The font-family CSS descriptor sets the font family for a font specified in an @font-face rule.The value is used for name matching against a particular @font-face when styling elements using the font-family property. Any name may be used, and this overrides any name specified in the underlying font data.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-family}
     */
    fontFamily: CssPropertyDeclarationOf<string>;
    /**
     * ## fontStretch
     * The font-stretch CSS descriptor allows authors to specify a normal, condensed, or expanded face for the fonts specified in the @font-face rule.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-stretch}
     */
    fontStretch: CssPropertyDeclarationOf<
        | "normal"
        | "semi-condensed"
        | "condensed"
        | "extra-condensed"
        | "ultra-condensed"
        | "semi-expanded"
        | "expanded"
        | "extra-expanded"
        | "ultra-expanded"
    >;
    /**
     * ## fontStyle
     * The font-style CSS descriptor allows authors to specify font styles for the fonts specified in the @font-face rule.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face}
     */
    fontStyle: CssPropertyDeclarationOf<"normal" | "italic" | "oblique">;
    /**
     * ## fontWeight
     * The font-weight CSS descriptor allows authors to specify font weights for the fonts specified in the @font-face rule. The font-weight property can separately be used to set how thick or thin characters in text should be displayed.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-weight}
     */
    fontWeight: CssPropertyDeclarationOf<"bold" | "normal">;
    /**
     * ## fontFeatureSettings
     * The font-feature-settings CSS property controls advanced typographic features in OpenType fonts.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-feature-settings}
     */
    fontFeatureSettings: CssPropertyDeclarationOf<string>;
    /**
     * ## fontVariationSettings
     * The font-feature-settings CSS property controls advanced typographic features in OpenType fonts.qqq
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-feature-settings}
     */
    fontVariationSettings: CssPropertyDeclarationOf<string>;
    /**
     * ## lineGapOverride
     * The line-gap-override CSS descriptor defines the line-gap metric for the font. The line-gap metric is the font recommended line-gap or external leading.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/line-gap-override}
     */
    lineGapOverride: CssPropertyDeclarationOf<string>;
    /**
     * ## src
     * The src CSS descriptor of the @font-face rule specifies the resource containing font data. It is required for the @font-face rule to be valid.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/src}
     */
    src: CssPropertyDeclarationOf<string>;
    /**
     * ## unicodeRange
     * The unicode-range CSS descriptor sets the specific range of characters to be used from a font defined by @font-face and made available for use on the current page. If the page doesn't use any character in this range, the font is not downloaded; if it uses at least one, the whole font is downloaded.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/unicode-range}
     */
    unicodeRange: CssPropertyDeclarationOf<string>;
    /**
     * ## sizeAdjust
     * The size-adjust CSS descriptor defines a multiplier for glyph outlines and metrics associated with this font. This makes it easier to harmonize the designs of various fonts when rendered at the same font size.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/size-adjust}
     */
    sizeAdjust: CssPropertyDeclarationOf<string>;
}
