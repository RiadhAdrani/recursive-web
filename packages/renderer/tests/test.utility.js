const { createElement } = require("../../../use");
const { RecursiveWebApp } = require("../../app");

function emptyApp() {
    return new RecursiveWebApp({ app: () => createElement("div"), root: document.body });
}

function app() {
    return new RecursiveWebApp({ app, root: document.body });
}

module.exports = { emptyApp, app };
