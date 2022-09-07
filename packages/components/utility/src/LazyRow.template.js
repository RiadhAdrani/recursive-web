const { component } = require("../..");
const { LAZY_ROW } = require("../../../constants");
const { useIntersectionObserver } = require("../../common");

module.exports = () => {
    return component({
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
        docs: [],
    });
};
