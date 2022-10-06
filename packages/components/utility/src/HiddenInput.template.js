const { component } = require("../..");

module.exports = () => {
    return component({
        nativeInterface: "HTMLInputElement",
        tag: "input",
        props: {
            name: "string",
            value: "string",
            autoComplete: "string",
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
