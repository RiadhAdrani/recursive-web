import { component } from "../../index.js";
import { ListOfAttributes } from "../../../dom/index.js";

export default () => {
    return component({
        nativeInterface: "HTMLInputElement",
        tag: "input",
        props: {
            value: ListOfAttributes.value,
            max: ListOfAttributes.max,
            min: ListOfAttributes.min,
            step: ListOfAttributes.step,
        },
        handler: (element) => {
            element.type = "datetime-local";
        },
        docs: [
            "A more specific version of the `DatePicker` element, ",
            "allowing the user to easily pick both date and time.",
        ],
    });
};
