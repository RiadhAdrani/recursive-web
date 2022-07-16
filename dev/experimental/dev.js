import { goTo, Render, renderRoute, route, setStyle, setCache, setState, updateTitle } from "../..";
import { Button, Column, Div, LazyColumn, P } from "../../html";
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

const cringe = repeatingLinearGradient(
    hsl(360, "100%", "50%"),
    hsl(315, "100%", "50%"),
    hsl(270, "100%", "50%"),
    hsl(230, "100%", "50%"),
    hsl(180, "100%", "50%"),
    hsl(135, "100%", "50%"),
    hsl(90, "100%", "50%"),
    hsl(45, "100%", "50%"),
    hsl(0, "100%", "50%")
);

const Home = () => {
    const [count, setCount, getCount, resetCount, preCount] = setCache("count", 0, () => {
        return () => {
            console.log("yeet");
        };
    });

    return LazyColumn({
        style: {
            scoped: true,
            normal: {
                border: ["solid", "black", "10px"],
                padding: ["50px", "20px"],
                fontWeight: 700,
                fontSize: "xxx-large",
                alignItems: "center",
                backgroundImage: cringe,
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
            children: [
                P({ children: count, style: { scoped: true } }),
                Button({ children: "incerement", onClick: () => setCount(count + 1) }),
                Button({ children: "get", onClick: () => console.log(getCount()) }),
                Button({ children: "reset", onClick: () => resetCount() }),
                Button({ children: "previous value", onClick: () => console.log(preCount) }),
                Button({ children: "go to page2", onClick: () => goTo("/page") }),
                Button({ children: "change title", onClick: () => updateTitle(Date.now()) }),
            ],
        }),
    });
};

const Page2 = () => {
    const [yeet, setYeet] = setCache("yeet", 1);

    return P({
        children: yeet,
        style: { inline: { padding: ["10px", "20px"], backgroundColor: ["red"], color: "white" } },
        onClick: () => goTo("/"),
        onBeforeUnloadGlobal: (e) => {
            e.preventDefault();
            e.returnValue = "bro you leaving ?";
        },
    });
};

const Router = {
    route: route({
        path: "/",
        component: Home,
        title: "Hello World",
        routes: [
            route({
                path: "page",
                component: Page2,
                title: "Page 2",
            }),
        ],
    }),
};

Render({
    root: document.body,
    router: Router,
    cacheSize: 2000,
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
