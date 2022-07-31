const { createElement } = require("../../../use");
const { RecursiveWebApp } = require("../../app");

function beforeEach() {
    location.pathname = "/";
    document.body.innerHTML = "";
}

function app() {
    beforeEach();

    const _app = new RecursiveWebApp({ app: () => createElement("div"), root: document.body });

    _app.render();

    return _app;
}

module.exports = { app };
