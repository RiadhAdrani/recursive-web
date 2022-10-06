const { component } = require("../..");

module.exports = () => {
    return component({
        nativeInterface: "HTMLInputElement",
        tag: "input",
        props: {
            required: "boolean",
            accept: "string",
            capture: "string",
            multiple: "string",
        },
        handler: (element) => {
            element.type = "file";
        },
        docs: [
            "Element allowing the user to choose and select one or more files from their device storage, ",
            "which can be later processed using JavaScript or uploaded directly using `form submission`.",
        ],
    });
};
