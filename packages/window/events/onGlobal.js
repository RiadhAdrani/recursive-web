const on = require("./on.js");

const onGlobal = (
    orchestrator,
    winEvent,
    store,
    listener,
    checkTarget = true
) => {
    if (window[store]) {
        return;
    }

    function clean() {
        window[store].items = window[store].items.filter((ele) =>
            document.contains(ele)
        );
    }

    function notify(target) {
        if (!target || !document.contains(target)) return;

        orchestrator.batchCallback(() => {
            window[store].items.forEach((element) => {
                if (!element.contains(target)) element.events[listener]();
            });
        });

        clean();
    }

    window[store] = { items: [], notify: () => notify(document.body) };

    on(winEvent, (e) => {
        if (!Array.isArray(window[store].items)) return;

        const target = e.target;

        orchestrator.batchCallback(() => {
            window[store].items.forEach((element) => {
                if (checkTarget && element.contains(target)) return;

                element.events[listener](e, () => notify(e.target));
            });
        });

        clean();
    });
};

module.exports = onGlobal;
