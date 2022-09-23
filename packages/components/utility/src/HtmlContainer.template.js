const {
    ELEMENT_TYPE_RAW,
} = require("@riadh-adrani/recursive/packages/constants");
const { component } = require("../..");

module.exports = () =>
    component({
        tag: ELEMENT_TYPE_RAW,
        props: {},
        docs: ["Element rendering string as HTML."],
    });