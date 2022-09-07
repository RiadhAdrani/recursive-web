const { RecursiveWebApp } = require("../../app");

function beforeEach() {
    document.body.innerHTML = "";
}

function emptyApp() {
    beforeEach();

    const _app = new RecursiveWebApp({
        app: () => _app.createElement("div"),
        root: document.body,
    });

    return _app;
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
