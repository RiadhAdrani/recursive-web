import { component } from "../../index.js";
import { ListOfAttributes } from "../../../dom/index.js";

export default () =>
    component({
        nativeInterface: "HTMLInputElement",
        tag: "input",
        props: {
            alt: ListOfAttributes.alt,
            src: ListOfAttributes.src,
            height: ListOfAttributes.height,
            formAction: ListOfAttributes.formAction,
            formEncType: ListOfAttributes.formEncType,
            formMethod: ListOfAttributes.formMethod,
            formNoValidate: ListOfAttributes.formNoValidate,
            formTarget: ListOfAttributes.formTarget,
        },
        handler: (element) => {
            element.type = "image";
        },
        docs: [
            "Element allowing the user to choose and select an image from their device storage, ",
            "which can be later processed using JavaScript or uploaded directly using `form submission`.",
        ],
    });
