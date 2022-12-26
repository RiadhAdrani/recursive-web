import { ELEMENT_TYPE_RAW } from "@riadh-adrani/recursive/packages/constants/index.js";
import { component } from "../../index.js";

export default () =>
    component({
        nativeInterface: "HTMLElement",
        tag: ELEMENT_TYPE_RAW,
        props: {},
        docs: ["Element rendering string as HTML."],
    });
