const aria = require("./aria");
const html = require("./html");
const svg = require("./svg");

const list = { ...svg, ...html, ...aria };

function is(key) {
    return list[key] !== undefined;
}

function get(key) {
    if (is(key)) return list[key].name;
}

function isToggle(key) {
    return is(key) && list[key].type === "toggle";
}

module.exports = { list, is, get, isToggle };
