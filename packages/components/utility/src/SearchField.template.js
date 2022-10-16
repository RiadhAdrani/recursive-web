const { component } = require("../..");
const { ListOfAttributes } = require("../../../dom");

module.exports = () =>
    component({
        nativeInterface: "HTMLInputElement",
        tag: "input",
        props: {
            autoComplete: ListOfAttributes.list,
            list: ListOfAttributes.list,
            maxLength: ListOfAttributes.maxLength,
            minLength: ListOfAttributes.minLength,
            pattern: ListOfAttributes.pattern,
            placeholder: ListOfAttributes.placeholder,
            required: ListOfAttributes.required,
            size: ListOfAttributes.size,
            value: ListOfAttributes.value,
        },
        handler: (element) => {
            element.type = "search";
        },
        docs: [
            "A Text field element designed for the user to enter search queries into.",
        ],
    });
