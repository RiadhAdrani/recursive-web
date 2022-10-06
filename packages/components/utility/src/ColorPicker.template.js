const { component } = require("../..");

module.exports = () => {
    return component({
        nativeInterface: "HTMLInputElement",
        tag: "input",
        props: { value: "string" },
        handler: (element) => {
            element.type = "color";
        },
        docs: [
            "Element allowing the user to pick a color from the displayed spectrum.",
        ],
    });
};
