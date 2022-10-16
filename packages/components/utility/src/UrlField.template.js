const { component } = require("../..");
const { ListOfAttributes } = require("../../../dom");

module.exports = () =>
    component({
        nativeInterface: "HTMLInputElement",
        tag: "input",
        props: {
            pattern: ListOfAttributes.pattern,
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
            element.type = "url";
        },
        docs: ["Element used to let the user enter and edit an URL."],
    });
