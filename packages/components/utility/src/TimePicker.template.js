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
            element.type = "time";
        },
        docs: [
            "Element that let the user easily enter a time (hours and minutes, and optionally seconds).",
        ],
    });
