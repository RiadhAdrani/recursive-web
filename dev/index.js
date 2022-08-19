import { RecursiveWebApp } from "../packages/app";
import { Column, Hr, Row } from "../html";
import { rgb } from "../style/methods";
import AppState from "./routes/App.state";

const NavButton = (text, to) =>
    App.Link({
        href: to,
        children: text,
        style: {
            className: "nav-button",
            normal: {
                padding: ["5px", "10px"],
                margin: ["5px"],
                backgroundColor: rgb(200, 200, 200),
                color: "black",
                borderRadius: "5px",
            },
            mediaQueries: [{ condition: "(max-width:700px)", normal: { color: "blue" } }],
        },
    });

const app = () => {
    App.setStyle({
        imports: [
            "https://fonts.googleapis.com/css2?family=Cousine:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap",
        ],
    });

    App.setStyle({
        selectors: { "*": { fontFamily: "Cousine", fontSize: "large" } },
    });

    return Column({
        style: {
            inline: {
                padding: ["10px", "20px"],
            },
        },
        children: [
            Row({
                onClick: () => {},
                children: [
                    NavButton("home", "/"),
                    NavButton("State", "/state#ref"),
                    NavButton("dynamic", "/id=:1;"),
                ],
            }),
            Hr({ size: "1px", width: "100%" }),
            App.renderRoute(),
        ],
    });
};

/**
 * @type {RecursiveWebApp}
 */
const App = new RecursiveWebApp({
    root: document.body,
    app: app,
    route: {
        path: "/",
        component: () => "Hello World",
        title: "Home",
        routes: [
            {
                path: "id=:id;",
                component: () => App.getParams().id,
                title: "Id",
            },
            {
                path: "state",
                component: AppState,
                title: "State",
            },
        ],
    },
});

const Link = App.Link;
const setState = App.setState;
const getState = App.getState;
const setCache = App.setCache;
const getCache = App.getCache;
const getRef = App.getRef;
const goTo = App.goTo;
const setStyle = App.setStyle;

App.render();

export { App, Link, setState, getState, setCache, getCache, getRef, goTo, setStyle };
