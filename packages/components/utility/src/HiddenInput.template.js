const { component } = require("../..");
const { ListOfAttributes } = require("../../../dom");

module.exports = () => {
    return component({
        nativeInterface: "HTMLInputElement",
        tag: "input",
        props: {
            name: ListOfAttributes.name,
            value: ListOfAttributes.value,
            autoComplete: ListOfAttributes.autoComplete,
        },
        handler: (element) => {
            element.type = "hidden";
        },
        docs: [
            "Element that let web developers include data that cannot be seen or modified ",
            "by users when a form is submitted.",
        ],
    });
};
