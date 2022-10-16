const { component } = require("../..");
const { ListOfAttributes } = require("../../../dom");

module.exports = () => {
    return component({
        nativeInterface: "HTMLInputElement",
        tag: "input",
        props: {
            value: ListOfAttributes.value,
            autoComplete: ListOfAttributes.autoComplete,
            list: ListOfAttributes.list,
            maxLength: ListOfAttributes.maxLength,
            minLength: ListOfAttributes.minLength,
            multiple: ListOfAttributes.multiple,
            pattern: ListOfAttributes.pattern,
            placeholder: ListOfAttributes.placeholder,
            readOnly: ListOfAttributes.readOnly,
            required: ListOfAttributes.required,
            size: ListOfAttributes.size,
        },
        handler: (element) => {
            element.type = "email";
        },
        docs: [
            "Element used to let the user input one e-mail address, ",
            "or multiple in case `multiple` attribute is specified.",
        ],
    });
};
