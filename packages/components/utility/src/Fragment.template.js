import { ELEMENT_TYPE_FRAGMENT } from "@riadh-adrani/recursive/packages/constants/index.js";
import { component } from "../../index.js";

export default () =>
    component({
        nativeInterface: "HTMLElement",
        tag: ELEMENT_TYPE_FRAGMENT,
        props: {},
        docs: [
            "Utility element used to group elements without rendering the actual container, ",
            "instead children will be rendered within the parent component.",
        ],
    });
