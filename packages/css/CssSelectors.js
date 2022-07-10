import { render as renderProp } from "./CssProperties";

const list = {
    normal: { css: "", support: {} },
    active: { css: ":active", support: {} },
    anyLink: { css: ":any-link", support: {} },
    checked: { css: ":checked", support: {} },
    default: { css: ":default", support: {} },
    defined: { css: ":defined", support: {} },
    disabled: { css: ":disabled", support: {} },
    empty: { css: ":empty", support: {} },
    enabled: { css: ":enabled", support: {} },
    first: { css: ":first", support: {} },
    firstChild: { css: ":first-child", support: {} },
    firstOfType: { css: ":first-of-type", support: {} },
    fullscreen: { css: "fullscreen", support: {} },
    focus: { css: ":focus", support: {} },
    focusVisible: { css: ":focus-visible", support: {} },
    focusWithin: { css: ":focus-within", support: {} },
    hover: { css: ":hover", support: {} },
    indeterminate: { css: ":indeterminate", support: {} },
    inRange: { css: ":in-range", support: {} },
    invalid: { css: ":invalid", support: {} },
    lastChild: { css: ":last-child", support: {} },
    lastOfType: { css: ":last-of-type", support: {} },
    link: { css: ":link", support: {} },
    onlyChild: { css: ":only-child", support: {} },
    onlyOfType: { css: ":only-of-type", support: {} },
    optional: { css: ":optional", support: {} },
    outOfRange: { css: ":out-of-range", support: {} },
    pictureInPicutre: { css: ":picture-in-picture", support: {} },
    placeholderShown: { css: ":placeholder-shown", support: {} },
    readOnly: { css: ":read-only", support: {} },
    readWrite: { css: ":read-write", support: {} },
    required: { css: ":required", support: {} },
    scope: { css: ":scope", support: {} },
    target: { css: ":target", support: {} },
    valid: { css: ":valid", support: {} },
    visited: { css: ":visited", support: {} },
    after: { css: "::after", support: {} },
    before: { css: "::before", support: {} },
    cue: { css: "::cue", support: {} },
    cueRegion: { css: "::cue-region", support: {} },
    firstLetter: { css: "::first-letter", support: {} },
    firstLine: { css: "::first-line", support: {} },
    fileSelectorButton: { css: "::file-selector-button", support: {} },
    placeholder: { css: "::placeholder", support: {} },
    selection: { css: "::selection", support: {} },
    marker: { css: "::marker", support: {} },

    webkitScrollbar: { css: "::-webkit-scrollbar", support: {} },
    webkitScrollbarTrack: { css: "::-webkit-scrollbar-track", support: {} },
    webkitScrollbarThumb: { css: "::-webkit-scrollbar-thumb", support: {} },
    webkitScrollbarThumbHover: { css: "::-webkit-scrollbar-thumb:hover", support: {} },
    webkitScrollbarThumbActive: { css: "::-webkit-scrollbar-thumb:active", support: {} },
};

/**
 * Check if the given exist in the list of predefined selectors.
 * @param {string} key
 * @returns
 */
function is(key) {
    return list[key] !== undefined && list[key].css !== undefined;
}

/**
 * Get the corresponding CSS selector.
 * @param {string} key
 * @returns
 */
function get(key) {
    return is(key) ? list[key].css : key;
}

/**
 * Check if the selector already exist in the list of selectors
 * @param {string} selector
 * @returns
 */
function customSelectorAlreadyExist(selector) {
    for (let key in list) {
        if (list[key].css == selector) {
            return key;
        }
    }

    return false;
}

/**
 * Render a selector declaration
 * @param {String} selector
 * @param {import("../../lib").Selector} content
 */
function render(selector, content) {
    if (!selector || !content) return "";

    let output = `${selector}{`;

    for (let prop in content) {
        output += renderProp(prop, content[prop]);
    }

    output += "}";

    return output;
}

export { list, is, get, render, customSelectorAlreadyExist };
