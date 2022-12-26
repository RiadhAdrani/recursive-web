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
            placeholder: ListOfAttributes.placeholder,
            readOnly: ListOfAttributes.readOnly,
            list: ListOfAttributes.list,
            value: ListOfAttributes.value,
            valueAsNumber: ListOfAttributes.valueAsNumber,
        },
        handler: (element) => {
            element.type = "number";
        },
        docs: [
            "Element providing a method for the user to pick a number in a given intervall.",
        ],
    });
