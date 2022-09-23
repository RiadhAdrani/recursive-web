const { RecursiveOrchestrator } = require("@riadh-adrani/recursive");
const on = require("./on.js");

/**
 * @param {RecursiveOrchestrator} orchestrator
 * @param {string} winEvent
 * @param {string} store
 * @param {string} listener
 * @param {boolean} checkTarget
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
