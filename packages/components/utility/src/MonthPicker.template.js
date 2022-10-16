const { component } = require("../..");
const { ListOfAttributes } = require("../../../dom");

module.exports = () =>
    component({
        nativeInterface: "HTMLInputElement",
        tag: "input",
        props: {
            autoComplete: ListOfAttributes.autoComplete,
            list: ListOfAttributes.list,
            readOnly: ListOfAttributes.readOnly,
            step: ListOfAttributes.step,
            value: ListOfAttributes.value,
        },
        handler: (element) => {
            element.type = "month";
        },
        docs: [
            "Element providing a method for the user to pick a specific month.",
        ],
    });
