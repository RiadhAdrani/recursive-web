const { component } = require("../..");

module.exports = () =>
    component({
        nativeInterface: "HTMLInputElement",
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
        docs: [
            "Element providing a method for the user to pick a specific month.",
        ],
    });
