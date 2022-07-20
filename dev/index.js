import { Link, Render, renderRoute, route, setStyle } from "..";
import { Column, Hr, Row } from "../html";
import { rgb, url } from "../style/methods";
import AppState from "./routes/App.state";

const Router = {
    route: route({
        path: "/",
        component: () => {},
        routes: [route({ path: "state", component: AppState })],
    }),
};

const NavButton = (text, to) =>
    Link({
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

Render({
    root: document.getElementById("root"),
    router: Router,
    cacheSize: 2000,
    app: () => {
        setStyle({ selectors: { "*": { fontFamily: "monospace", fontSize: "large" } } });

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
                renderRoute(),
            ],
        });
    },
});
