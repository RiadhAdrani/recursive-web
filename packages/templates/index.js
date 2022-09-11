/**
 * Create a template for a DOM attribute.
 * @param {object} params parameters
 * @param {string} params.name attribute identifier.
 * @param {boolean} params.toggleable set if an attribute is toggleable or not. A toggleable attribute accepts only ``boolean`` values.
 * @param {Array<string> | string} params.values possible values of the attribute. Set to a `string` if the value is a `type`.
 * @param {Array<string> | true} params.els elements in which this attribute is usable. Set to `true` if it is a global attribute.
 * @param {Array<string>} params.docs element documentation.
 * @returns {object}
 */
function attribute({
    name,
    toggleable = false,
    values = [],
    els = [],
    docs = [],
}) {
    return { name, toggleable, values, els, docs };
}

/**
 * Create a template for a DOM event.
 * @param {object} params parameters
 * @param {string} params.listener listener string identifier like `click` or `mouseover` ...
 * @param {string} params.on on event listener like `onclick`, `onmouseover` ...
 * @param {string} params.type event type like `Event`, `PointerEvent`, `TouchEvent`...
 * @param {Array<string>} params.docs event documentation.
 * @param {Function} params.handler event handler for custom events.
 * @returns {object}
 */
function event({ listener, on, type, docs = [], handler }) {
    return { listener, on, type, docs, handler };
}

/**
 * create a blue print of a component.
 * @param {object} params
 * @param {string} params.tag a string representing the HTML tag of the element.
 * @param {object} params.props an object containing the unique attributes of the element.
 * @param {Array<string>} params.docs an array of string defining the component documentation.
 * @param {boolean} params.childless indicates if the component is childless or not.
 * @param {import("../../core").ComponentHandler} params.handler
 * @returns {object}
 */
function component({ tag, props = {}, docs = [], handler, childless = false }) {
    return { tag, props, docs, handler, childless };
}

/**
 * create a Css property template.
 * @param {object} params
 * @param {string} params.css property original name used in the CSS file.
 * @param {Array<string>} params.values property possible values.
 * @param {string} params.type property type like `number`, `string` or `Color`.
 * @param {Array<>} params.support property support in different browsers.
 * @param {Array<string>} params.docs an array of string defining the property documentation.
 * @returns {object} property declaration.
 */
function property({
    css,
    values = [],
    type = "string",
    support = [],
    docs = [],
}) {
    return { css, values, type, support, docs };
}

function selector({ css, docs = [], support = [] }) {
    return { css, docs, support };
}

module.exports = {
    attribute,
    event,
    component,
    property,
    selector,
};
