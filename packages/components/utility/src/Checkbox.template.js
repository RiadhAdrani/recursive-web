const { component } = require("../..");

module.exports = () => {
    return component({
        nativeInterface: "HTMLInputElement",
        tag: "input",
        props: { value: "string", checked: "string" },
        handler: (element) => {
            element.type = "checkbox";
        },
        docs: [
            "An element representing a boolean state of `true` or `false`.",
            "Implement `onInput` or `onChange` to trigger actions when the state changes",
        ],
    });
};
