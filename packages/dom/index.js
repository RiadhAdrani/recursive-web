const HtmlAttributes = require("./html");
const SvgAttributes = require("./svg");
const AriaAttributes = require("./aria");
const { RecursiveConsole } = require("../../use");

/**
 * Contains `DOM` events.
 */
const ListOfEvents = require("./events");

/**
 * Contains `html`, `svg` and `aria` attributes.
 */
const ListOfAttributes = {
    ...SvgAttributes,
    ...HtmlAttributes,
    ...AriaAttributes,
};

/**
 * Return if the given key correspond to an attribute within the current list of attributes.
 * @param {string} key attribute key.
 * @returns {boolean}
 */
function isAttribute(key) {
    return ListOfAttributes.hasOwnProperty(key);
}

/**
 * Retrieve the attribute name if it exists.
 * @param {string} key attribute identifier
 * @returns {string} attribute name.
 */
function getAttributeName(key) {
    if (!isAttribute(key)) {
        RecursiveConsole.error(
            `Recursive Web Internal : Attribute with the name ${key} does not exists at the moment within the list of attributes.`
        );
        return;
    }

    return ListOfAttributes[key].name;
}

/**
 * Return if an attribute is toggleable or not.
 *
 * A toggleable attribute accepts only boolean values.
 *
 * @param {string} key attribute identifier
 * @returns {boolean}
 */
function isToggleableAttribute(key) {
    return isAttribute(key) && ListOfAttributes[key]["toggleable"] === true;
}

/**
 * Return if the given key correspond to an event within the current list of events.
 * @param {string} key
 * @returns {boolean}
 */
function isEvent(key) {
    return ListOfEvents.hasOwnProperty(key);
}

/**
 * Return the event data template with the given key if it exists.
 * @param {string} key event name.
 * @returns {object}
 */
function getEvent(key) {
    if (!isEvent(key)) {
        RecursiveConsole.error(
            `Recursive Web Internal : Event with the name ${key} does not exists at the moment within the list of events.`
        );
        return;
    }

    return ListOfEvents[key];
}

/**
 * Return if the event has a custom handler.
 * @param {string} key event name.
 * @returns {boolean}
 */
function eventHasHandler(key) {
    return isEvent(key) && typeof ListOfEvents[key]["handler"] === "function";
}

/**
 * Return the event listener with the given key if it exists.
 * @param {string} key event name.
 * @returns {string}
 */
function getEventListener(key) {
    if (!isEvent(key)) {
        RecursiveConsole.error(
            `Recursive Web Internal : Event with the name ${key} does not exists at the moment within the list of events.`
        );
        return;
    }

    return ListOfEvents[key].listener;
}

module.exports = {
    isAttribute,
    getAttributeName,
    isToggleableAttribute,
    isEvent,
    getEvent,
    eventHasHandler,
    getEventListener,
    ListOfAttributes,
    ListOfEvents,
};
