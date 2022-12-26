import { component } from "../../index.js";
import { CENTERED_COLUMN } from "../../../constants/index.js";

export default () =>
    component({
        nativeInterface: "HTMLElement",
        tag: CENTERED_COLUMN,
        props: {},
        docs: ["An element displaying its children vertically and centered"],
    });
