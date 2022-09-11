const { component } = require("../..");

module.exports = () =>
    component({
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
        docs: [
            "Element that treat the input of the user as a password and replace characters ",
            "depending on the browser's `user agent` and operating system.",
        ],
    });
