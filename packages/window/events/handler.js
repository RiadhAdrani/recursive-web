/**
 * Creates a new global event handler within an element.
 * @param {string} store Event store name.
 * @param {string} type Event type as string. set to ``"Event"`` by default.
 * @param {Array<string>} docs Used to generate documentation for the event.
 * @returns {Function} Function that will execute when the event fires.
 */
function handler(store, type = "Event", docs = []) {
    return {
        listener: store,
        on: store,
        handler: (element) => {
            if (window[store] && window[store].items) {
                window[store].items.push(element);
            }
        },
        type,
        docs,
    };
}

module.exports = handler;
