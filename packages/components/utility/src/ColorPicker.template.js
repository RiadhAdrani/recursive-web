const { component } = require("../..");
const { ListOfAttributes } = require("../../../dom");

module.exports = () => {
    return component({
        nativeInterface: "HTMLInputElement",
        tag: "input",
        props: { value: ListOfAttributes.value },
        handler: (element) => {
            element.type = "color";
        },
        docs: [
            "Element allowing the user to pick a color from the displayed spectrum.",
        ],
    });
};
