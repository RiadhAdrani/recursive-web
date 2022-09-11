const {
    ELEMENT_TYPE_FRAGMENT,
} = require("@riadh-adrani/recursive/packages/constants");
const { component } = require("../..");

module.exports = () =>
    component({
        tag: ELEMENT_TYPE_FRAGMENT,
        props: {},
        docs: [
            "Utility element used to group elements without rendering the actual container, ",
            "instead children will be rendered within the parent component.",
        ],
    });
