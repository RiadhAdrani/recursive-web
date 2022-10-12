const {
    isFontFaceProperty,
    getFontFaceProperty,
    renderFontFaceProperty,
    renderFontFace,
} = require("..");

it.each([
    ["fontFamily", true],
    ["font-family", false],
    ["ascentOverride", true],
    ["ascent-override", false],
    ["descentOverride", true],
    ["descent-override", false],
    ["fontDisplay", true],
    ["font-display", false],
    ["fontStretch", true],
    ["font-stretch", false],
    ["fontStyle", true],
    ["font-style", false],
    ["fontWeight", true],
    ["font-weight", false],
    ["fontFeatureSettings", true],
    ["font-feature-settings", false],
    ["fontVariationSettings", true],
    ["font-variant-settings", false],
    ["lineGapOverride", true],
    ["line-gap-override", false],
    ["src", true],
    ["unicodeRange", true],
    ["unicode-range", false],
    ["sizeAdjust", true],
    ["size-adjust", false],
])(
    "should determine if an attribute is for font-face : ''",
    (attribute, expected) => {
        expect(isFontFaceProperty(attribute)).toBe(expected);
    }
);

it.each([
    ["fontFamily", "font-family"],
    ["ascentOverride", "ascent-override"],
    ["descentOverride", "descent-override"],
    ["fontDisplay", "font-display"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontWeight", "font-weight"],
    ["fontFeatureSettings", "font-feature-settings"],
    ["fontVariationSettings", "font-variation-settings"],
    ["lineGapOverride", "line-gap-override"],
    ["src", "src"],
    ["unicodeRange", "unicode-range"],
    ["sizeAdjust", "size-adjust"],
])(
    "should get css naming of font-face property '%s'",
    (attribute, expected) => {
        expect(getFontFaceProperty(attribute)).toBe(expected);
    }
);

it.each([
    ["fontFamily", "'MyFontFace'", "font-family:'MyFontFace';"],
    ["font-family", "'MyFontFace'", "font-family:'MyFontFace';"],
    ["font-family", "'MyFontFace'", "font-family:'MyFontFace';"],
    ["", "a-value", ""],
])(
    "should render a font-face property and value correctly => '%s' : '%s'  ",
    (attribute, value, expected) => {
        expect(renderFontFaceProperty(attribute, value)).toBe(expected);
    }
);

it.each([
    ["string", ""],
    [null, ""],
    [undefined, ""],
    [{}, ""],
    [[], ""],
    [[{}], ""],
    [[{ fontFamily: "'Recursive'" }], "@font-face{font-family:'Recursive';}"],
    [
        [{ fontFamily: "'Recursive'", "font-family": "" }],
        "@font-face{font-family:'Recursive';}",
    ],
    [
        [{ fontFamily: "'Recursive'", "": "'Recursive'" }],
        "@font-face{font-family:'Recursive';}",
    ],
])("should render font-face array properly => '%s'", (array, expected) => {
    expect(renderFontFace(array)).toBe(expected);
});
