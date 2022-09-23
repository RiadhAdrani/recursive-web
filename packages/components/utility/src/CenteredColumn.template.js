const { component } = require("../..");
const { CENTERED_COLUMN } = require("../../../constants");

module.exports = () =>
    component({
        tag: CENTERED_COLUMN,
        props: {},
        docs: ["An element displaying its children vertically and centered"],
    });