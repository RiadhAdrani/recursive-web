const { component } = require("../..");
const { ListOfAttributes } = require("../../../dom");

module.exports = () =>
    component({
        nativeInterface: "HTMLInputElement",
        tag: "input",
        props: {
            checked: ListOfAttributes.checked,
            value: ListOfAttributes.value,
            required: ListOfAttributes.required,
        },
        handler: (element) => {
            element.type = "radio";
        },
        docs: [
            "Element used generally in a group, describing a set of related options.",
        ],
    });
