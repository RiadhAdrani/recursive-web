const { component } = require("../..");
const { ListOfAttributes } = require("../../../dom");

module.exports = () =>
    component({
        nativeInterface: "HTMLInputElement",
        tag: "input",
        props: {
            value: ListOfAttributes.value,
        },
        handler: (element) => {
            element.type = "submit";
        },
        docs: [
            "Element rendered as a button, when it is clicked, ",
            "the `user agent` (by default) attempts to submit the form to the server.",
        ],
    });
