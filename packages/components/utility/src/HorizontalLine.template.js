const { component } = require("../..");
const { HORIZONTAL_LINE } = require("../../../constants");
const { attribute } = require("../../../templates");

module.exports = () => {
    return component({
        nativeInterface: "HTMLElement",
        tag: HORIZONTAL_LINE,
        props: {
            thickness: attribute({ name: "thickness", values: "string" }),
            width: attribute({ name: "width", values: "string" }),
            marginVertical: attribute({
                name: "marginVertical",
                values: "string",
            }),
            color: attribute({ name: "Color", values: "string" }),
        },
        childless: true,
        handler: (element) => {
            element.style = {
                ...element.style,
                scoped: true,
                normal: {
                    width: element.width || "auto",
                    height: element.thickness || "1px",
                    minHeight: element.thickness || "1px",
                    maxHeight: element.thickness || "1px",
                    backgroundColor: element.color || "black",
                    margin: [element.marginVertical || "5px", 0],
                    display: "block",
                },
            };
        },
        docs: [
            "Element representing a line break between two elements. ",
            "It works similarly to `<hr>`, but with better CSS support.`",
            "`element.style.normal` can only be overriden within `element.style.mediaQueries`.",
        ],
    });
};
