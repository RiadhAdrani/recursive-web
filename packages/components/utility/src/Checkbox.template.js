import { ListOfAttributes } from "../../../dom/index.js";
import { component } from "../../index.js";

export default () => {
    return component({
        nativeInterface: "HTMLInputElement",
        tag: "input",
        props: {
            value: ListOfAttributes.value,
            checked: ListOfAttributes.checked,
        },
        handler: (element) => {
            element.type = "checkbox";
        },
        docs: [
            "An element representing a boolean state of `true` or `false`.",
            "Implement `onInput` or `onChange` to trigger actions when the state changes",
        ],
    });
};
