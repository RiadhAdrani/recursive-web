const { component } = require("../..");

module.exports = () =>
    component({
        nativeInterface: "HTMLInputElement",
        tag: "input",
        props: {
            autoComplete: "string",
            list: "string",
            placeholder: "string",
            readOnly: "string",
            list: "string",
            value: "string",
            valueAsNumber: "string",
        },
        handler: (element) => {
            element.type = "number";
        },
        docs: [
            "Element providing a method for the user to pick a number in a given intervall.",
        ],
    });
