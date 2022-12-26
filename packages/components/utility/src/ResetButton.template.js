import { component } from "../..";
import { ListOfAttributes } from "../../../dom";
import {} from "../../../constants";

export default () =>
    component({
        nativeInterface: "HTMLInputElement",
        tag: "input",
        props: {
            value: ListOfAttributes.value,
        },
        handler: (element) => {
            element.type = "reset";
        },
        docs: [
            "Button that, by default, reset all inputs in the form to their initial values.",
        ],
    });
