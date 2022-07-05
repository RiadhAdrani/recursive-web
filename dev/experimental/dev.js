const {
    Render,
    setState,
    setCache,
    route,
    renderRoute,
    getParams,
    goTo,
} = require("../../index.js");
const { LazyColumn, Fragment, P, Address, Article, Column } = require("../../html");
const { Svg, Circle } = require("../../svg");

Render({
    router: {
        route: {
            path: "/",
            component: () => "Home",
            routes: [route({ path: ":yeet;", component: () => getParams().yeet })],
        },
        scroll: true,
    },
    app: () => {
        const [value, setValue] = setState("value", [1]);
        const [count, setCount] = setCache("count", 10);

        return LazyColumn({
            children: [
                Address({ children: "Hello" }),
                renderRoute(),
                Fragment({
                    children: value.slice(0, count).map((item) =>
                        P({
                            children: item,
                            dataSet: {
                                key: item,
                            },
                            onClick: () => {
                                goTo(`/:${item};`);
                                setValue([...value.filter((i) => i !== item), item]);
                            },
                            style: {
                                scoped: true,
                                normal: {
                                    color: "white",
                                    padding: "10px",
                                    margin: "5px",
                                    border: "1px solid white",
                                },
                            },
                        })
                    ),
                }),
            ],
            hooks: { onRef: () => "Hello" },
            onObserved: () => {
                if (count < value.length) {
                    setCount(count + 10);
                }
            },
            style: {
                scoped: true,
                normal: {
                    color: "white",
                    background: "black",
                    cursor: "pointer",
                    padding: "10px",
                    borderRadius: "5px",
                },
                focusWithin: {
                    outlineColor: "red",
                    outlineOffset: "3px",
                    outlineWidth: "5px",
                },
                hover: { background: "#3e3e3e" },
            },
        });
    },
    root: document.body,
});
