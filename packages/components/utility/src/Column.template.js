import { component } from "../../index.js";
import { COLUMN_VIEW } from "../../../constants/index.js";

export default () =>
    component({
        nativeInterface: "HTMLElement",
        tag: COLUMN_VIEW,
        props: {},
        docs: ["An element displaying its children vertically."],
    });
