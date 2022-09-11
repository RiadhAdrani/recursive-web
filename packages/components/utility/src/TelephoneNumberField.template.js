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
        },
        handler: (element) => {
            element.type = "tel";
        },
        docs: [
            "Element used to let the user enter and edit a telephone number.",
        ],
    });
