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
            element.type = "reset";
        },
        docs: [
            "Button that, by default, reset all inputs in the form to their initial values.",
        ],
    });
