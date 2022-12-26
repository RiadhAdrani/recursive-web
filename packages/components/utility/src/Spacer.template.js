import { component } from "../..";
import { SPACER_VIEW } from "../../../constants";
import { attribute } from "../../../templates";

export default () =>
    component({
        nativeInterface: "HTMLElement",
        tag: SPACER_VIEW,
        props: {
            height: attribute({ name: "height", values: "string" }),
            width: attribute({ name: "width", values: "string" }),
        },
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
                    display: "inline-flex",
                    maxWidth: element.width,
                    width: element.width,
                    minWidth: element.width,
                },
            };
        },
        docs: [
            "Element allowing the user to create space between components, vertically or horizontally. ",
            "The space occupied by this element is undisputed by other components.",
        ],
    });
