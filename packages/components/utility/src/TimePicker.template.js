import { component } from "../..";
import { ListOfAttributes } from "../../../dom";
import {} from "../../../constants";

export default () =>
    component({
        nativeInterface: "HTMLInputElement",
        tag: "input",
        props: {
            autoComplete: ListOfAttributes.autoComplete,
            list: ListOfAttributes.list,
            readOnly: ListOfAttributes.readOnly,
            step: ListOfAttributes.step,
            value: ListOfAttributes.value,
        },
        handler: (element) => {
            element.type = "time";
        },
        docs: [
            "Element that let the user easily enter a time (hours and minutes, and optionally seconds).",
        ],
    });
