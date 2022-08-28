const {
    ELEMENT_TYPE_RAW,
    ELEMENT_TYPE_FRAGMENT,
} = require("@riadh-adrani/recursive/packages/constants");
const { getApp } = require("..");
const { Console } = require("../../../use");
const {
    COLUMN_VIEW,
    ROW_VIEW,
    SPACER_VIEW,
    LAZY_COLUMN,
    LAZY_ROW,
    HORIZONTAL_LINE,
    VERTICAL_LINE,
    CENTERED_COLUMN,
    CENTERED_ROW,
} = require("../../constants");

/**
 * create a blue print of a component.
 * @param {object} params
 * @param {string} params.tag a string representing the HTML tag of the element.
 * @param {object} params.props an object containing the unique attributes of the element.
 * @param {Array<string>} params.docs an array of string defining the component documentation.
 * @param {import("../../core").ComponentHandler} params.handler
 */
function component({ tag, props = {}, docs = [], handler }) {
    return { tag, props, docs, handler };
}

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

    if (instance.lastChild.nodeName != "#text")
        observer.observe(instance.lastChild);
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
        CheckBox: {
            tag: "input",
            props: { value: "string", checked: "string" },
            handler: (element) => {
                element.type = "checkbox";
            },
            docs: [],
        },
        ColorPicker: {
            tag: "input",
            props: { value: "string" },
            handler: (element) => {
                element.type = "color";
            },
            docs: [],
        },
        DatePicker: {
            tag: "input",
            props: {
                value: "string",
                max: "string",
                min: "string",
                step: "string",
            },
            handler: (element) => {
                element.type = "date";
            },
            docs: [],
        },
        DateTimeLocalPicker: {
            tag: "input",
            props: {
                value: "string",
                max: "string",
                min: "string",
                step: "string",
            },
            handler: (element) => {
                element.type = "datetime-local";
            },
            docs: [],
        },
        EmailField: {
            tag: "input",
            props: {
                value: "string",
                autoComplete: "string",
                list: "string",
                maxLength: "string",
                minLength: "string",
                multiple: "string",
                pattern: "string",
                placeholder: "string",
                readOnly: "string",
                required: "boolean",
                size: "string",
            },
            handler: (element) => {
                element.type = "email";
            },
            docs: [],
        },
        FilePicker: {
            tag: "input",
            props: {
                required: "boolean",
                accept: "string",
                capture: "string",
                multiple: "string",
            },
            handler: (element) => {
                element.type = "file";
            },
            docs: [],
        },
        HiddenInput: {
            tag: "input",
            props: {
                name: "string",
                value: "string",
                autoComplete: "string",
            },
            handler: (element) => {
                element.type = "hidden";
            },
            docs: [],
        },
        ImagePicker: {
            tag: "input",
            props: {
                alt: "string",
                src: "string",
                height: "string",
                formAction: "string",
                formEncType: "string",
                formMethod: "string",
                formNoValidate: "string",
                formTarget: "string",
            },
            handler: (element) => {
                element.type = "image";
            },
            docs: [],
        },
        MonthPicker: {
            tag: "input",
            props: {
                autoComplete: "string",
                list: "string",
                readOnly: "string",
                step: "string",
                value: "string",
            },
            handler: (element) => {
                element.type = "month";
            },
            docs: [],
        },
        NumberPicker: {
            tag: "input",
            props: {
                autoComplete: "string",
                list: "string",
                placeholder: "string",
                readOnly: "string",
                list: "string",
                value: "string",
                valueAsNumber: "string",
            },
            handler: (element) => {
                element.type = "number";
            },
            docs: [],
        },
        PasswordField: {
            tag: "input",
            props: {
                autoComplete: "string",
                inputMode: "string",
                maxLength: "string",
                minLength: "string",
                pattern: "string",
                placeholder: "string",
                readOnly: "string",
                required: "string",
                size: "string",
                value: "string",
            },
            handler: (element) => {
                element.type = "password";
            },
            docs: [],
        },
        RadioButton: {
            tag: "input",
            props: {
                checked: "string",
                value: "string",
                required: "string",
            },
            handler: (element) => {
                element.type = "radio";
            },
            docs: [],
        },
        RangePicker: {
            tag: "input",
            props: {
                autoComplete: "string",
                list: "string",
                max: "string",
                min: "string",
                step: "string",
                value: "string",
                valueAsNumber: "string",
            },
            handler: (element) => {
                element.type = "range";
            },
            docs: [],
        },
        ResetButton: {
            tag: "input",
            props: {
                value: "string",
            },
            handler: (element) => {
                element.type = "reset";
            },
            docs: [],
        },
        SearchField: {
            tag: "input",
            props: {
                autoComplete: "string",
                list: "string",
                maxLength: "string",
                minLength: "string",
                pattern: "string",
                placeholder: "string",
                required: "string",
                size: "string",
                value: "string",
            },
            handler: (element) => {
                element.type = "search";
            },
            docs: [],
        },
        SubmitButton: {
            tag: "input",
            props: {
                value: "string",
            },
            handler: (element) => {
                element.type = "submit";
            },
            docs: [],
        },
        TelephoneNumberField: {
            tag: "input",
            props: {
                autoComplete: "string",
                list: "string",
                maxLength: "string",
                minLength: "string",
                pattern: "string",
                readOnly: "string",
                placeholder: "string",
                size: "string",
                value: "string",
            },
            handler: (element) => {
                element.type = "tel";
            },
            docs: [],
        },
        TextField: {
            tag: "input",
            props: {
                autoComplete: "string",
                list: "string",
                maxLength: "string",
                minLength: "string",
                pattern: "string",
                readOnly: "string",
                placeholder: "string",
                size: "string",
                value: "string",
                required: "string",
            },
            handler: (element) => {
                element.type = "text";
            },
            docs: [],
        },
        TimePicker: {
            tag: "input",
            props: {
                autoComplete: "string",
                list: "string",
                readOnly: "string",
                step: "string",
                value: "string",
            },
            handler: (element) => {
                element.type = "time";
            },
            docs: [],
        },
        UrlField: {
            tag: "input",
            props: {
                autoComplete: "string",
                list: "string",
                maxLength: "string",
                minLength: "string",
                pattern: "string",
                readOnly: "string",
                placeholder: "string",
                size: "string",
                value: "string",
                required: "string",
            },
            handler: (element) => {
                element.type = "url";
            },
            docs: [],
        },
        WeekPicker: {
            tag: "input",
            props: {
                autoComplete: "string",
                list: "string",
                readOnly: "string",
                step: "string",
                value: "string",
            },
            handler: (element) => {
                element.type = "tel";
            },
            docs: [],
        },
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
                    if (
                        instance.childNodes.length !== 0 &&
                        typeof element.onObserved == "function"
                    )
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

                    if (
                        instance.childNodes.length === 0 ||
                        typeof element.onObserved != "function"
                    )
                        return;

                    useObserver(element, instance);
                };
            },
            docs: [],
        },
        HorizontalLine: {
            tag: HORIZONTAL_LINE,
            props: {
                thickness: "string",
                width: "string",
                marginVertical: "string",
                color: "Color",
            },
            childless: true,
            handler: (element) => {
                element.style = {
                    ...element.style,
                    scoped: true,
                    normal: {
                        width: element.width || "auto",
                        height: element.thickness || "1px",
                        minHeight: element.thickness || "1px",
                        maxHeight: element.thickness || "1px",
                        backgroundColor: element.color || "black",
                        margin: [element.marginVertical || "5px", 0],
                        display: "block",
                    },
                };
            },
            docs: [],
        },
        VerticalLine: {
            tag: VERTICAL_LINE,
            props: {
                thickness: "string",
                height: "string",
                marginHorizontal: "string",
                color: "Color",
            },
            childless: true,
            handler: (element) => {
                element.style = {
                    ...element.style,
                    scoped: true,
                    normal: {
                        height: element.height || "5px",
                        width: element.thickness || "1px",
                        minWidth: element.thickness || "1px",
                        maxWidth: element.thickness || "1px",
                        backgroundColor: element.color || "black",
                        margin: [0, element.marginHorizontal || "5px"],
                        display: "inline-block",
                    },
                };
            },
            docs: [],
        },
        CenteredColumn: { tag: CENTERED_COLUMN, props: {}, docs: [] },
        CenteredRow: { tag: CENTERED_ROW, props: {}, docs: [] },
        Link: component({
            tag: "a",
            docs: [],
            props: { href: "" },
            handler: (element) => {
                if (element.href) {
                    const app = getApp();

                    if (!app.router) {
                        Console.error(
                            "Recursive Web : Unable to initialize a Link component without the presense of a Router.",
                            [
                                "To initialize the Router, you need at least the root route '/'.",
                            ]
                        );
                    }

                    const _onClick = element.onClick || (() => {});

                    const to = element.href;

                    element.href = app.router.useRouterMakeURL(to);

                    element.onClick = (e) => {
                        e.preventDefault();

                        app.router.goTo(to);

                        _onClick(e);
                    };
                }

                return element;
            },
        }),
    },
};
