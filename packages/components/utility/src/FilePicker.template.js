import { component } from "../../index.js";
import { ListOfAttributes } from "../../../dom/index.js";

export default () => {
    return component({
        nativeInterface: "HTMLInputElement",
        tag: "input",
        props: {
            required: ListOfAttributes.required,
            accept: ListOfAttributes.accept,
            capture: ListOfAttributes.capture,
            multiple: ListOfAttributes.multiple,
        },
        handler: (element) => {
            element.type = "file";
        },
        docs: [
            "Element allowing the user to choose and select one or more files from their device storage, ",
            "which can be later processed using JavaScript or uploaded directly using `form submission`.",
        ],
    });
};
