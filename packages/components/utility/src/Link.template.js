const { RecursiveConsole } = require("../../../../use");
const { component, getApp } = require("../..");

module.exports = () => {
    return component({
        tag: "a",
        docs: [],
        props: { href: "string" },
        handler: (element) => {
            if (element.href) {
                const app = getApp();

                if (!app.router) {
                    RecursiveConsole.error(
                        "Recursive Web : Unable to initialize a Link component without the presense of a Router.",
                        [
                            "To initialize the Router, you need at least the root route '/'.",
                        ]
                    );
                }

                const _onClick = element.onClick || (() => {});

                const to = element.href;

                element.href = app.router.useRouterMakeURL(to);

                element.onClick = (e) => {
                    e.preventDefault();

                    app.router.goTo(to);

                    _onClick(e);
                };
            }

            return element;
        },
    });
};
