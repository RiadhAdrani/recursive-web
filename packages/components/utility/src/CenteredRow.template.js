const { component } = require("../..");
const { CENTERED_ROW } = require("../../../constants");

module.exports = () =>
    component({
        nativeInterface: "HTMLElement",
        tag: CENTERED_ROW,
        props: {},
        docs: ["An element displaying its children horizontally and centered"],
    });
