const { component } = require("../..");
const { SPACER_VIEW } = require("../../../constants");

module.exports = () =>
    component({
        tag: SPACER_VIEW,
        props: { height: "number", width: "number" },
        childless: true,
        handler: (element) => {
            element.children = [];
            element.style = {
                ...element.style,
                scoped: true,
                normal: {
                    minHeight: element.height,
                    height: element.height,
                    maxHeight: element.height,
                    display: "inline-block",
                    maxWidth: element.width,
                    width: element.width,
                    minWidth: element.width,
                },
            };
        },
        docs: [
            "Element allowing the user to create space between components, vertically or horizontally. ",
            "The space occupied by this element is indisputed by other components.",
        ],
    });
