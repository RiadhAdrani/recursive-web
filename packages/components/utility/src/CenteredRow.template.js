import { component } from "../../index.js";
import { CENTERED_ROW } from "../../../constants/index.js";

export default () =>
    component({
        nativeInterface: "HTMLElement",
        tag: CENTERED_ROW,
        props: {},
        docs: ["An element displaying its children horizontally and centered"],
    });
