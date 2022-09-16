const { event } = require("../../templates");

/**
 * Creates a new global event handler within an element.
 * @param {object} params
 * @param {string} params.store Event store name.
 * @param {string} params.type Event type as string. set to ``"Event"`` by default.
 * @param {Array<string>} params.docs Used to generate documentation for the event.
 * @returns {object} event template
 */
function handler({ store, type = "Event", docs = [], ...arg }) {
    return event({
        listener: store,
        on: store,
        handler: (element) => {
            if (window[store] && window[store].items) {
                window[store].items.push(element);
            }
        },
        type,
        docs,
        ...arg,
    });
}

module.exports = handler;
