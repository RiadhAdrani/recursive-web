const { component } = require("../..");
const { ROW_VIEW } = require("../../../constants");

module.exports = () =>
    component({
        nativeInterface: "HTMLElement",
        tag: ROW_VIEW,
        props: {},
        docs: ["An element displaying its children horizontally."],
    });
