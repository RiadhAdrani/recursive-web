const { RecursiveWebApp } = require("../../app");

function beforeEach() {
    document.body.innerHTML = "";
}

/**
 *
 * @param {} scopedStyle
 * @returns {RecursiveWebApp}
 */
function emptyApp(scopedStyle = false) {
    beforeEach();

    const _app = new RecursiveWebApp({
        app: () => _app.createElement("div"),
        root: document.body,
        scopedStyle,
    });

    return _app;
}

function app(myApp, scopedStyle = false) {
    beforeEach();

    const testApp = new RecursiveWebApp({
        app: () => myApp(testApp),
        root: document.body,
        scopedStyle,
    });

    return testApp;
}

module.exports = { emptyApp, app };
