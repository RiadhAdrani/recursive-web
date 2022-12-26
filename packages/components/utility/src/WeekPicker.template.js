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
            element.type = "tel";
        },
        docs: [
            "Element allowing easy entry of a year plus the ``ISO 8601`` week number during that year",
        ],
    });
