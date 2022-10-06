const { component } = require("../..");

module.exports = () =>
    component({
        nativeInterface: "HTMLInputElement",
        tag: "input",
        props: {
            value: "string",
        },
        handler: (element) => {
            element.type = "submit";
        },
        docs: [
            "Element rendered as a button, when it is clicked, ",
            "the `user agent` (by default) attempts to submit the form to the server.",
        ],
    });
