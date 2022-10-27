/**
 * @jest-environment jsdom
 */

const { createElement } = require("@riadh-adrani/recursive");
const { createApp, getElement, executeEvent } = require("../../testing");

it("should create stores for global events", () => {
    let count = 0;

    const webApp = createApp({
        app: () => {
            return createElement("div", {
                onClickGlobal: () => {
                    count++;
                },
                onContextMenuGlobal: () => {
                    count++;
                },
                onResizeGlobal: () => {
                    count++;
                },
                onKeyUpGlobal: () => {
                    count++;
                },
                onKeyDownGlobal: () => {
                    count++;
                },
                onScrollGlobal: () => {
                    count++;
                },
                onMouseUpGlobal: () => {
                    count++;
                },
                onMouseDownGlobal: () => {
                    count++;
                },
                onMouseMoveGlobal: () => {
                    count++;
                },
                onBeforeUnload: () => {
                    count++;
                },
                children: createElement("button", { id: "btn" }),
            });
        },
    });

    webApp.render();

    expect(window.onclickglobal).toBeTruthy();
    expect(window.oncontextmenuglobal).toBeTruthy();
    expect(window.onresizeglobal).toBeTruthy();
    expect(window.onkeyupglobal).toBeTruthy();
    expect(window.onkeydownglobal).toBeTruthy();
    expect(window.onscrollglobal).toBeTruthy();
    expect(window.onbeforeunloadglobal).toBeTruthy();
    expect(window.onmouseupglobal).toBeTruthy();
    expect(window.onmousedownglobal).toBeTruthy();
    expect(window.onmousemoveglobal).toBeTruthy();

    const btn = getElement(" #btn");

    executeEvent(btn, new Event("click", { bubbles: true }));
    expect(count).toBe(1);

    executeEvent(btn, new Event("contextmenu", { bubbles: true }));
    expect(count).toBe(2);

    executeEvent(window, new Event("resize"));
    expect(count).toBe(3);

    executeEvent(window, new Event("keyup"));
    expect(count).toBe(4);

    executeEvent(window, new Event("keydown"));
    expect(count).toBe(5);

    executeEvent(window, new Event("scroll"));
    expect(count).toBe(6);

    executeEvent(window, new Event("mouseup", { bubbles: true }));
    expect(count).toBe(7);

    executeEvent(window, new Event("mousedown", { bubbles: true }));
    expect(count).toBe(8);

    executeEvent(window, new Event("mousemove", { bubbles: true }));
    expect(count).toBe(9);

    // window.dispatchEvent(new Event("beforeunload", { bubbles: true }));
    // expect(count).toBe(7);
});
