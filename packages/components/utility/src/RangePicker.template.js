const { component } = require("../..");

module.exports = () =>
    component({
        nativeInterface: "HTMLInputElement",
        tag: "input",
        props: {
            autoComplete: "string",
            list: "string",
            max: "string",
            min: "string",
            step: "string",
            value: "string",
            valueAsNumber: "string",
        },
        handler: (element) => {
            element.type = "range";
        },
        docs: [
            "Element that let the user specify a numeric value which must be no less than a given value, ",
            "and no more than another given value.",
        ],
    });
