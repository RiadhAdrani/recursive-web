import { goTo, Render, renderRoute, route, setStyle, setState } from "../..";
import { Column, Div, LazyColumn, P } from "../../html";
import {
    corners,
    edges,
    grayScale,
    hsl,
    hueRotate,
    repeatingLinearGradient,
    rgba,
} from "../../style/methods";
import { AnimationTimingFunction } from "../../style";

const Home = () => {
    const [val, setVal, valLive] = setState("counter", { counter: 0 });

    return LazyColumn({
        onClick: () => goTo("/page"),
        style: {
            scoped: true,
            normal: {
                border: ["solid", "black", "10px"],
                padding: ["50px", "20px"],
                fontWeight: "700",
                fontSize: "xxx-large",
                alignItems: "center",
                backgroundImage: repeatingLinearGradient(
                    hsl(360, "100%", "50%"),
                    hsl(315, "100%", "50%"),
                    hsl(270, "100%", "50%"),
                    hsl(230, "100%", "50%"),
                    hsl(180, "100%", "50%"),
                    hsl(135, "100%", "50%"),
                    hsl(90, "100%", "50%"),
                    hsl(45, "100%", "50%"),
                    hsl(0, "100%", "50%")
                ),
                filter: hueRotate("0deg"),
                animationTimingFunction: AnimationTimingFunction.Linear,
                animationDuration: "1s",
                animationName: "epicAnime",
                animationIterationCount: "infinite",
                color: "black",
            },
        },
        children: Div({
            style: {
                scoped: true,
                normal: {
                    backdropFilter: grayScale("100%"),
                    padding: edges({ vertical: "30px", horizontal: "20px" }),
                    border: ["white", "5px", "solid"],
                    textTransform: "uppercase",
                    backgroundColor: "aqua",
                    borderRadius: corners({ left: "100px", right: "50px" }),
                    color: rgba(0, 0, 0, 0.99),
                },
            },
            children: [P({ children: "Welcome to Cringeolgy", style: { scoped: true } })],
        }),
    });
};

const Page2 = () => {
    return P({ children: "Hello", onClick: () => goTo("/") });
};

const Router = {
    route: route({
        path: "/",
        component: Home,
        onLoad: () => console.log("Home Loaded"),
        onExit: () => console.log("Home Exited"),
        routes: [
            route({
                path: "page",
                component: Page2,
                onLoad: () => console.log("Page Loaded"),
                onExit: () => console.log("Page Exited"),
            }),
        ],
    }),
};

Render({
    root: document.body,
    router: Router,
    app: () => {
        setStyle({
            selectors: { "*": { fontStyle: "italic" } },
            animations: {
                epicAnime: {
                    "0%": { filter: hueRotate("0deg") },
                    "100%": { filter: hueRotate("360deg") },
                },
            },
        });

        return Column({ children: renderRoute() });
    },
});
