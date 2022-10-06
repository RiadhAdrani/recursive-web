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
 * @param {string} key
 */
function isAttribute(key) {
    return ListOfAttributes.hasOwnProperty(key);
}

function getAttributeJoiner(key) {
    return ListOfAttributes.hasOwnProperty(key)
        ? ListOfAttributes[key].joiner
        : " ";
}

function renderAttributeValue(key, value) {
    if (typeof value !== "string" && !Array.isArray(value)) {
        return value;
    }

    const array = [];

    if (Array.isArray(value)) {
        array.push(...value);
    } else {
        array.push(value);
    }

    return array.join(getAttributeJoiner(key));
}

/**
 * @param {string} key
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
 * @param {string} key
 */
function isToggleableAttribute(key) {
    return isAttribute(key) && ListOfAttributes[key]["toggleable"] === true;
}

/**
 * @param {string} key
 */
function isEvent(key) {
    return ListOfEvents.hasOwnProperty(key);
}

/**
 * @param {string} key
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
 * @param {string} key
 */
function eventHasHandler(key) {
    return isEvent(key) && typeof ListOfEvents[key]["handler"] === "function";
}

/**
 * @param {string} key
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
    renderAttributeValue,
    isToggleableAttribute,
    isEvent,
    getEvent,
    eventHasHandler,
    getEventListener,
    ListOfAttributes,
    ListOfEvents,
};
