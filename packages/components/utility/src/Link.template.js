const { RecursiveConsole } = require("../../../../use");
const { component, getApp } = require("../..");
const { ListOfAttributes } = require("../../../dom");

module.exports = () => {
    return component({
        nativeInterface: "HTMLAnchorElement",
        tag: "a",
        docs: [
            "An anchor element that allow the user to navigate between the different routes of the application. ",
            "Use `href` to pass the destination route.",
        ],
        props: { href: ListOfAttributes.href, target: ListOfAttributes.target },
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
