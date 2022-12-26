import { useIntersectionObserver } from "../../common/index.js";
import { component } from "../../index.js";
import { LAZY_COLUMN } from "../../../constants/index.js";

export default () => {
    return component({
        nativeInterface: "HTMLElement",
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
