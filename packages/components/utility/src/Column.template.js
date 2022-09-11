const { component } = require("../..");
const { COLUMN_VIEW } = require("../../../constants");

module.exports = () =>
    component({
        tag: COLUMN_VIEW,
        props: {},
        docs: ["An element displaying its children vertically."],
    });
