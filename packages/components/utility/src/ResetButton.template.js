const { component } = require("../..");

module.exports = () =>
    component({
        nativeInterface: "HTMLInputElement",
        tag: "input",
        props: {
            value: "string",
        },
        handler: (element) => {
            element.type = "reset";
        },
        docs: [
            "Button that, by default, reset all inputs in the form to their initial values.",
        ],
    });
