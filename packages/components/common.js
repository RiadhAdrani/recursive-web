const { RecursiveConsole } = require("../../use");

/**
 * Use intersection observer.
 * @param {HTMLElement} instance
 * @param {Function} callback
 */
function useIntersectionObserver(instance, callback) {
    var observer = new IntersectionObserver(
        (entries) => {
            if (entries[0].isIntersecting === true) {
                observer.unobserve(entries[0].target);

                if (
                    entries[0].target === instance.lastChild &&
                    typeof callback === "function"
                ) {
                    callback(instance);
                }
            }
        },
        { threshold: [0] }
    );

    if (instance.lastChild.nodeName != "#text")
        observer.observe(instance.lastChild);
    else {
        RecursiveConsole.warn(
            "UseObserver : Unable to observe text node. Try wrapping it in another Element"
        );
        RecursiveConsole.log(instance);
    }
}

module.exports = { useIntersectionObserver };
