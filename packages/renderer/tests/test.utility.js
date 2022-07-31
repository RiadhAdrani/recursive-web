const { createElement } = require("../../../use");
const { RecursiveWebApp } = require("../../app");

function beforeEach() {
    document.body.innerHTML = "";
}

function emptyApp() {
    beforeEach();

    return new RecursiveWebApp({ app: () => createElement("div"), root: document.body });
}

function app(myApp) {
    beforeEach();

    return new RecursiveWebApp({ app: myApp, root: document.body });
}

module.exports = { emptyApp, app };
