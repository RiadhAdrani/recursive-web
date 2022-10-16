const { component } = require("../..");
const { VERTICAL_LINE } = require("../../../constants");
const { attribute } = require("../../../templates");

module.exports = () => {
    return component({
        nativeInterface: "HTMLElement",
        tag: VERTICAL_LINE,
        props: {
            thickness: attribute({ name: "thickness", values: "string" }),
            height: attribute({ name: "height", values: "string" }),
            marginHorizontal: attribute({
                name: "marginHorizontal",
                values: "string",
            }),
            color: attribute({ name: "color", values: "Color" }),
        },
        childless: true,
        handler: (element) => {
            element.style = {
                ...element.style,
                scoped: true,
                normal: {
                    height: element.height || "5px",
                    width: element.thickness || "1px",
                    minWidth: element.thickness || "1px",
                    maxWidth: element.thickness || "1px",
                    backgroundColor: element.color || "black",
                    margin: [0, element.marginHorizontal || "5px"],
                    display: "inline-block",
                },
            };
        },
        docs: [
            "Element representing a line break between two elements. ",
            "It works similarly to `<hr>`, but vertically and with better CSS support.`",
            "`element.style.normal` can only be overriden within `element.style.mediaQueries`.",
        ],
    });
};
