const { component } = require("../..");

module.exports = () =>
    component({
        tag: "input",
        props: {
            checked: "string",
            value: "string",
            required: "string",
        },
        handler: (element) => {
            element.type = "radio";
        },
        docs: [
            "Element used generally in a group, describing a set of related options.",
        ],
    });
