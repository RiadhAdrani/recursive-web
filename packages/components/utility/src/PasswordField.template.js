const { component } = require("../..");
const { ListOfAttributes } = require("../../../dom");

module.exports = () =>
    component({
        nativeInterface: "HTMLInputElement",
        tag: "input",
        props: {
            autoComplete: ListOfAttributes.autoComplete,
            inputMode: ListOfAttributes.inputMode,
            maxLength: ListOfAttributes.maxLength,
            minLength: ListOfAttributes.minLength,
            pattern: ListOfAttributes.pattern,
            placeholder: ListOfAttributes.placeholder,
            readOnly: ListOfAttributes.readOnly,
            required: ListOfAttributes.required,
            size: ListOfAttributes.size,
            value: ListOfAttributes.value,
        },
        handler: (element) => {
            element.type = "password";
        },
        docs: [
            "Element that treat the input of the user as a password and replace characters ",
            "depending on the browser's `user agent` and operating system.",
        ],
    });
