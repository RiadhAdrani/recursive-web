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
            max: ListOfAttributes.max,
            min: ListOfAttributes.min,
            step: ListOfAttributes.step,
            value: ListOfAttributes.value,
            valueAsNumber: ListOfAttributes.valueAsNumber,
        },
        handler: (element) => {
            element.type = "range";
        },
        docs: [
            "Element that let the user specify a numeric value which must be no less than a given value, ",
            "and no more than another given value.",
        ],
    });
