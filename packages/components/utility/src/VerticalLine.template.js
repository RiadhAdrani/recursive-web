const { component } = require("../..");
const { VERTICAL_LINE } = require("../../../constants");

module.exports = () => {
    return component({
        tag: VERTICAL_LINE,
        props: {
            thickness: "string",
            height: "string",
            marginHorizontal: "string",
            color: "Color",
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
        docs: [],
    });
};
