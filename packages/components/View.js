const { default: RecursiveCSSOM } = require("../css/");

class View extends HTMLElement {
    constructor(tag) {
        customElements.define(tag, this);
    }
}

const CSSOM = new RecursiveCSSOM();

function addDefaultStyle(selector, style) {
    CSSOM.addStaticStyle({ selectors: { [selector]: style } });
}

module.exports = { View, addDefaultStyle };
