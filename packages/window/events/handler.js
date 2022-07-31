const handler = (store, type = "Event") => {
    return {
        listener: store,
        on: "on" + store,
        handler: (element) => {
            if (window[store] && window[store].items) window[store].items.push(element);
        },
        type,
    };
};

module.exports = handler;
