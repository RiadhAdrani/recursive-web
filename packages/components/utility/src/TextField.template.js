const { component } = require("../..");

module.exports = () =>
    component({
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
        docs: ["Element for basic single-line text input."],
    });
