const { event } = require("../../templates");

/**
 * @param {import("./handler").GlobalEventHandlerTemplate} params
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
