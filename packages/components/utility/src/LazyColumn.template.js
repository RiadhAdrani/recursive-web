const { component } = require("../..");
const { LAZY_COLUMN } = require("../../../constants");
const { useIntersectionObserver } = require("../../common");

module.exports = () => {
    return component({
        tag: LAZY_COLUMN,
        props: { onObserved: "Function" },
        handler: (element) => {
            if (!element.hooks) element.hooks = {};

            const _onRef = element.hooks.onRef || (() => {});

            element.hooks.onRef = (instance) => {
                if (
                    instance.childNodes.length !== 0 &&
                    typeof element.onObserved == "function"
                )
                    useIntersectionObserver(instance, element.onObserved);

                return _onRef(instance);
            };
        },
        docs: [
            "Element displaying element vertically containing an `IntersectionObserver` ",
            "that can watch for when the last element enter the user screen ",
            "and execute the callback passed in `onObserved`.",
        ],
    });
};
