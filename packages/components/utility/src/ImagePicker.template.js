const { component } = require("../..");

module.exports = () =>
    component({
        tag: "input",
        props: {
            alt: "string",
            src: "string",
            height: "string",
            formAction: "string",
            formEncType: "string",
            formMethod: "string",
            formNoValidate: "string",
            formTarget: "string",
        },
        handler: (element) => {
            element.type = "image";
        },
        docs: [
            "Element allowing the user to choose and select an image from their device storage, ",
            "which can be later processed using JavaScript or uploaded directly using `form submission`.",
        ],
    });
