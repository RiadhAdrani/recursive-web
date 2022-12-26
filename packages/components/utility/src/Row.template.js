import { component } from "../..";
import { ListOfAttributes } from "../../../dom";
import { ROW_VIEW } from "../../../constants";

export default () =>
    component({
        nativeInterface: "HTMLElement",
        tag: ROW_VIEW,
        props: {},
        docs: ["An element displaying its children horizontally."],
    });
