const {
    ELEMENT_TYPE_RAW,
    ELEMENT_TYPE_FRAGMENT,
} = require("@riadh-adrani/recursive/packages/constants");
const { COLUMN_VIEW, ROW_VIEW, SPACER_VIEW, LAZY_COLUMN, LAZY_ROW } = require("../constants");

const useObserver = (element, instance) => {
    var observer = new IntersectionObserver(
        (entries) => {
            if (entries[0].isIntersecting === true) {
                observer.unobserve(entries[0].target);

                if (entries[0].target === instance.lastChild) {
                    element.onObserved(instance);
                }
            }
        },
        { threshold: [0] }
    );

    if (instance.lastChild.nodeName != "#text") observer.observe(instance.lastChild);
    else
        console.warn(
            "UseObserver : Unable to observe text node. Try wrapping it in another Element"
        );
};

module.exports = {
    items: {
        HtmlContainer: { tag: ELEMENT_TYPE_RAW, props: {}, docs: [] },
        Fragment: { tag: ELEMENT_TYPE_FRAGMENT, props: {}, docs: [] },
        Column: { tag: COLUMN_VIEW, props: {}, docs: [] },
        Row: { tag: ROW_VIEW, props: {}, docs: [] },
        Spacer: {
            tag: SPACER_VIEW,
            props: { height: "number", width: "number" },
            childless: true,
            handler: (element) => {
                element.style = {
                    ...element.style,
                    scoped: true,
                    normal: {
                        minHeight: element.height,
                        height: element.height,
                        maxHeight: element.height,
                        display: "inline-block",
                        maxWidth: element.width,
                        width: element.width,
                        minWidth: element.width,
                    },
                };
            },
            docs: [],
        },
        LazyColumn: {
            tag: LAZY_COLUMN,
            props: { onObserved: "Function" },
            handler: (element) => {
                if (!element.hooks) element.hooks = {};

                const _onRef = element.hooks.onRef || (() => {});

                element.hooks.onRef = (instance) => {
                    if (instance.childNodes.length !== 0 && typeof element.onObserved == "function")
                        useObserver(element, instance);

                    return _onRef(instance);
                };
            },
            docs: [],
        },
        LazyRow: {
            tag: LAZY_ROW,
            props: { onObserved: "Function" },
            handler: (element) => {
                element.hooks = {};

                const _onRef = element.hooks.onRef || (() => {});

                element.hooks.onRef = (instance) => {
                    _onRef(instance);

                    if (instance.childNodes.length === 0 || typeof element.onObserved != "function")
                        return;

                    useObserver(element, instance);
                };
            },
            docs: [],
        },
    },
};
