const { component } = require("../..");
const { CENTERED_ROW } = require("../../../constants");

module.exports = () =>
    component({
        tag: CENTERED_ROW,
        props: {},
        docs: ["An element displaying its children horizontally and centered"],
    });
