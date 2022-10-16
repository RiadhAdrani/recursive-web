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
            element.type = "time";
        },
        docs: [
            "Element that let the user easily enter a time (hours and minutes, and optionally seconds).",
        ],
    });
