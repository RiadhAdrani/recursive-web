import { component, createElement } from "../..";
import { ListOfAttributes } from "../../../dom";
import { TOGGLE_SWITCH } from "../../../constants";
import { attribute } from "../../../templates";
import { CssColor } from "../../../templates/types";

export default () => {
    return component({
        nativeInterface: "HTMLInputElement",
        tag: TOGGLE_SWITCH,
        docs: [
            "Custom element rendered as `<" + TOGGLE_SWITCH + ">`.",
            "",
            "Create a toggle switch button allowing the user to change settings between two states, `true` and `false`.",
            "",
            "The `checked` parameter could be assigned a boolean to set the initial value of the switch.",
            "",
            "Use `radiuxPx` to set the radius of the button knob in pixels, with which other dimensions will be calculated automatically.",
        ],
        props: {
            radiusPx: attribute({ name: "radiusPx", values: "string" }),
            color: attribute({ name: "color", values: CssColor }),
            backgroundColor: attribute({
                name: "backgroundColor",
                values: CssColor,
            }),
            onBackgroundColor: attribute({
                name: "onBackgroundColor",
                values: CssColor,
            }),
            checked: ListOfAttributes.checked,
        },
        childless: true,
        handler: (element) => {
            const radiusPx =
                typeof element.radiusPx == "number" ? element.radiusPx : 20;

            let width = radiusPx * 2;
            let padding = radiusPx * 0.13;
            let height = radiusPx + padding;
            let radius = radiusPx * 0.86;

            const color = element.color || "white";
            const backgroundColor = element.backgroundColor || "#ccc";
            const onBackgroundColor = element.onBackgroundColor || "#777";

            width += "px";
            padding += "px";
            height += "px";
            radius += "px";

            element.children = createElement("label", {
                children: [
                    createElement("input", {
                        type: "checkbox",
                        checked: element.checked,
                        placeholder: "toggle",
                    }),
                    createElement("span"),
                ],
                style: {
                    scoped: true,
                    normal: {
                        position: "relative",
                        display: "inline-block",
                        width: width,
                        height: height,
                    },
                    " input": {
                        opacity: 0,
                        width: 0,
                        height: 0,
                    },
                    " span": {
                        position: "absolute",
                        cursor: "pointer",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: backgroundColor,
                        transition: ".4s",
                        borderRadius: height,
                    },
                    " span:before": {
                        position: "absolute",
                        content: "''",
                        height: radius,
                        width: radius,
                        left: padding,
                        bottom: padding,
                        backgroundColor: color,
                        transition: "0.4s",
                        borderRadius: "50%",
                    },
                    " input:checked + span": {
                        backgroundColor: onBackgroundColor,
                    },
                    " input:focus + span": {
                        boxShadow: ["0", "0", "5px", onBackgroundColor],
                    },
                    " input:checked + span:before": {
                        transform: `translate(${radius})`,
                    },
                },
            });
        },
    });
};
