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
            element.type = "tel";
        },
        docs: [
            "Element allowing easy entry of a year plus the ``ISO 8601`` week number during that year",
        ],
    });
