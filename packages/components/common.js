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

function createAnimationName(...args) {
    return "_Rec_Animation_" + transformString(args.join("_"));
}

function transformString(uid) {
    function convert(uid) {
        const pool = [..."abcdefghijklmnopqrstuvwxyz-_0123456789"];
        const length = pool.length;

        const sum = [...uid].reduce((res, val) => {
            return res + val.charCodeAt();
        }, 0);

        return [...uid]
            .map((char, index) => {
                return ((n) => {
                    const _char = pool[n % length];
                    return index % 3 == 0 && index != 0
                        ? _char.toUpperCase()
                        : _char;
                })(char.charCodeAt() + sum + index);
            })
            .join("");
    }

    const output = convert(uid);

    return output;
}

module.exports = {
    useIntersectionObserver,
    createAnimationName,
    transformString,
};
