const { component } = require("../..");

module.exports = () => {
    return component({
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
        docs: [
            "Element used to let the user input one e-mail address, ",
            "or multiple in case `multiple` attribute is specified.",
        ],
    });
};
