import { component } from "../..";
import { ListOfAttributes } from "../../../dom";
import {} from "../../../constants";

export default () =>
    component({
        nativeInterface: "HTMLInputElement",
        tag: "input",
        props: {
            readOnly: ListOfAttributes.readOnly,
            autoComplete: ListOfAttributes.list,
            list: ListOfAttributes.list,
            maxLength: ListOfAttributes.maxLength,
            minLength: ListOfAttributes.minLength,
            pattern: ListOfAttributes.pattern,
            placeholder: ListOfAttributes.placeholder,
            size: ListOfAttributes.size,
            value: ListOfAttributes.value,
        },
        handler: (element) => {
            element.type = "tel";
        },
        docs: [
            "Element used to let the user enter and edit a telephone number.",
        ],
    });
