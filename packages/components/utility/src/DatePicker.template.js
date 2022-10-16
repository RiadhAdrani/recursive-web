const { component } = require("../..");
const { ListOfAttributes } = require("../../../dom");

module.exports = () => {
    return component({
        nativeInterface: "HTMLInputElement",
        tag: "input",
        props: {
            value: ListOfAttributes.value,
            max: ListOfAttributes.max,
            min: ListOfAttributes.min,
            step: ListOfAttributes.step,
        },
        handler: (element) => {
            element.type = "date";
        },
        docs: [
            "Element providing a method for the user to pick a specific date.",
        ],
    });
};
