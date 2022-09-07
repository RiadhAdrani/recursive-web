const { RecursiveOrchestrator } = require("@riadh-adrani/recursive");
const on = require("./on.js");

/**
 * Create a new global event listener.
 * @param {RecursiveOrchestrator} orchestrator Application orchestrator.
 * @param {string} winEvent Event type.
 * @param {string} store Store name.
 * @param {string} listener Listener within the element.
 * @param {boolean} checkTarget If true, the global event will not fire for the elements which are contained within `event.target`.
 */
function onGlobal(orchestrator, winEvent, store, listener, checkTarget = true) {
    if (window[store]) {
        return;
    }

    /**
     * Clean The store after being notified.
     */
    function clean() {
        window[store].items = window[store].items.filter((ele) =>
            document.contains(ele)
        );
    }

    /**
     * Notify the global event listener.
     * @param {HTMLElement} target source of the notification.
     */
    function notify(target) {
        if (!target || !document.contains(target)) return;

        orchestrator.batchCallback(() => {
            window[store].items.forEach((element) => {
                if (!element.contains(target)) element[listener]();
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

                element[store](e, () => notify(target));
            });
        });

        clean();
    });
}

module.exports = onGlobal;
