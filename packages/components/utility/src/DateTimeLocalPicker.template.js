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
            element.type = "datetime-local";
        },
        docs: [
            "A more specific version of the `DatePicker` element, ",
            "allowing the user to easily pick both date and time.",
        ],
    });
};
