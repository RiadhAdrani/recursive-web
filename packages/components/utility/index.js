const {
    ELEMENT_TYPE_RAW,
    ELEMENT_TYPE_FRAGMENT,
} = require("@riadh-adrani/recursive/packages/constants");
const {
    COLUMN_VIEW,
    ROW_VIEW,
    SPACER_VIEW,
    CENTERED_COLUMN,
    CENTERED_ROW,
} = require("../../constants");
const HorizontalLineTemplate = require("./src/HorizontalLine.template");
const LazyColumnTemplate = require("./src/LazyColumn.template");
const LazyRowTemplate = require("./src/LazyRow.template");
const LinkTemplate = require("./src/Link.template");
const ToggleSwitchTemplate = require("./src/ToggleSwitch.template");
const VerticalLineTemplate = require("./src/VerticalLine.template");

module.exports = {
    items: {
        HtmlContainer: { tag: ELEMENT_TYPE_RAW, props: {}, docs: [] },
        Fragment: { tag: ELEMENT_TYPE_FRAGMENT, props: {}, docs: [] },
        Column: { tag: COLUMN_VIEW, props: {}, docs: [] },
        Row: { tag: ROW_VIEW, props: {}, docs: [] },
        CenteredColumn: { tag: CENTERED_COLUMN, props: {}, docs: [] },
        CenteredRow: { tag: CENTERED_ROW, props: {}, docs: [] },
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
        LazyColumn: LazyColumnTemplate(),
        LazyRow: LazyRowTemplate(),
        HorizontalLine: HorizontalLineTemplate(),
        VerticalLine: VerticalLineTemplate(),
        Link: LinkTemplate(),
        ToggleSwitch: ToggleSwitchTemplate(),
    },
};
