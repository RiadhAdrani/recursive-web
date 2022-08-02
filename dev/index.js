import { RecursiveWebApp } from "../packages/app";
import { Column, Hr, Row } from "../html";
import { rgb } from "../style/methods";
import AppState from "./routes/App.state";

const NavButton = (text, to) =>
    App.Link({
        href: to,
        children: text,
        style: {
            inline: {
                padding: ["5px", "10px"],
                margin: ["5px"],
                backgroundColor: rgb(200, 200, 200),
                color: "black",
                borderRadius: "5px",
            },
        },
    });

const app = () => {
    App.setStyle({
        selectors: { "*": { fontFamily: "monospace", fontSize: "large" } },
    });

    return Column({
        style: {
            inline: {
                padding: ["10px", "20px"],
            },
        },
        children: [
            Row({
                children: [NavButton("home", "/"), NavButton("State", "/state")],
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
        component: () => "Home",
        routes: [
            {
                path: "state",
                component: AppState,
            },
        ],
    },
});

App.render();

const Link = App.Link;
const setState = App.setState;
const getState = App.getState;
const setCache = App.setCache;
const getCache = App.getCache;
const getRef = App.getRef;
const goTo = App.goTo;

export { App, Link, setState, getState, setCache, getCache, getRef, goTo };
