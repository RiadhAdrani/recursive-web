/**
 * @jest-environment jsdom
 */

import { app } from "./test.utility";

it("should update the tree correctly", () => {
    const testApp = app((_app) => {
        const [count, setCount] = _app.setState("count", 0);

        return testApp.createElement("div", {
            children: [
                _app.createElement("button", {
                    children: count,
                    onClick: () => setCount(count + 1),
                }),
            ],
        });
    });

    const renderer = testApp.renderer;

    renderer.render();

    document.body.childNodes.item(0).childNodes.item(0).click();

    expect(document.body.childNodes.item(0).outerHTML).toBe(
        "<div><button>1</button></div>"
    );
});

it("should update append new element to the tree", () => {
    const testApp = app((_app) => {
        const [count, setCount] = _app.setState("count", 1);

        const items = (() => {
            const a = [];

            for (let i = 0; i < count; i++) {
                a.push(i);
            }

            return a;
        })();

        return testApp.createElement("div", {
            onClick: () => setCount(count + 1),
            children: items.map((item) => {
                return testApp.createElement("button", {
                    children: item,
                });
            }),
        });
    });

    const renderer = testApp.renderer;

    renderer.render();

    document.body.childNodes.item(0).click();

    expect(document.body.childNodes.item(0).outerHTML).toBe(
        "<div><button>0</button><button>1</button></div>"
    );
});

it("should update remove element from the tree", () => {
    const testApp = app((_app) => {
        const [count, setCount] = _app.setState("count", 2);

        const items = (() => {
            const a = [];

            for (let i = 0; i < count; i++) {
                a.push(i);
            }

            return a;
        })();

        return testApp.createElement("div", {
            onClick: () => setCount(count - 1),
            children: items.map((item) => {
                return testApp.createElement("button", {
                    children: item,
                });
            }),
        });
    });

    const renderer = testApp.renderer;

    renderer.render();

    document.body.childNodes.item(0).click();

    expect(document.body.childNodes.item(0).outerHTML).toBe(
        "<div><button>0</button></div>"
    );
});

it("should update remove keyed elements from the tree", () => {
    const testApp = app((_app) => {
        const [text, setText] = _app.setState("count", "");

        const list = [5, 10, 15, 20, 25, 30];

        const items = list.filter((item) => item.toString().includes(text));

        return testApp.createElement("div", {
            onClick: () => setText("0"),
            children: items.map((item) => {
                return testApp.createElement("button", {
                    key: item,
                    children: item,
                });
            }),
        });
    });

    const renderer = testApp.renderer;

    renderer.render();

    document.body.childNodes.item(0).click();

    expect(document.body.childNodes.item(0).outerHTML).toBe(
        "<div><button>10</button><button>20</button><button>30</button></div>"
    );
});

it("should update add keyed elements to the tree", () => {
    const testApp = app((_app) => {
        const [items, setItems] = _app.setState("count", [1, 2, 3]);

        return testApp.createElement("div", {
            onClick: () => setItems([1, 10, 2, 20, 3, 30]),
            children: items.map((item) => {
                return testApp.createElement("p", {
                    key: item,
                    children: item,
                });
            }),
        });
    });

    const renderer = testApp.renderer;

    renderer.render();

    document.body.childNodes.item(0).click();

    expect(document.body.childNodes.item(0).outerHTML).toBe(
        "<div><p>1</p><p>10</p><p>2</p><p>20</p><p>3</p><p>30</p></div>"
    );
});
