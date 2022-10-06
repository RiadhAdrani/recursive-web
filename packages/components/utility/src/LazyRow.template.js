const { component } = require("../..");
const { LAZY_ROW } = require("../../../constants");
const { useIntersectionObserver } = require("../../common");

module.exports = () => {
    return component({
        nativeInterface: "HTMLElement",
        tag: LAZY_ROW,
        props: { onObserved: "Function" },
        handler: (element) => {
            element.hooks = {};

            const _onRef = element.hooks.onRef || (() => {});

            element.hooks.onRef = (instance) => {
                _onRef(instance);

                if (
                    instance.childNodes.length === 0 ||
                    typeof element.onObserved != "function"
                )
                    return;

                useIntersectionObserver(instance, element.onObserved);
            };
        },
        docs: [
            "Element displaying element horizontally containing an `IntersectionObserver` ",
            "that can watch for when the last element enter the user screen ",
            "and execute the callback passed in `onObserved`.",
        ],
    });
};
