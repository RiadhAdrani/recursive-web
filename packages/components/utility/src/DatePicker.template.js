const { component } = require("../..");

module.exports = () => {
    return component({
        tag: "input",
        props: {
            value: "string",
            max: "string",
            min: "string",
            step: "string",
        },
        handler: (element) => {
            element.type = "date";
        },
        docs: [
            "Element providing a method for the user to pick a specific date.",
        ],
    });
};
