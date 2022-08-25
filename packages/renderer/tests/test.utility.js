const { createElement } = require("../../../use");
const { RecursiveWebApp } = require("../../app");

function beforeEach() {
    document.body.innerHTML = "";
}

function emptyApp() {
    beforeEach();

    return new RecursiveWebApp({
        app: () => createElement("div"),
        root: document.body,
    });
}

function app(myApp) {
    beforeEach();

    const testApp = new RecursiveWebApp({
        app: () => myApp(testApp),
        root: document.body,
    });

    return testApp;
}

module.exports = { emptyApp, app };
