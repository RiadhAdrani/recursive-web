const RecursiveCSSOM = require("../css/");

class View extends HTMLElement {
    constructor(tag) {
        customElements.define(tag, this);
    }
}

function addDefaultStyle(selector, style) {
    RecursiveCSSOM.addStaticStyle({ selectors: { [selector]: style } });
}

module.exports = { View, addDefaultStyle };
