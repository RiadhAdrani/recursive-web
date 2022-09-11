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
            placeholder: "string",
            required: "string",
            size: "string",
            value: "string",
        },
        handler: (element) => {
            element.type = "search";
        },
        docs: [
            "A Text field element designed for the user to enter search queries into.",
        ],
    });
