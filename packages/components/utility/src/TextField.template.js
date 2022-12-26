import { component } from "../..";
import { ListOfAttributes } from "../../../dom";
import {} from "../../../constants";

export default () =>
    component({
        nativeInterface: "HTMLInputElement",
        tag: "input",
        props: {
            required: ListOfAttributes.required,
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
            element.type = "text";
        },
        docs: ["Element for basic single-line text input."],
    });
