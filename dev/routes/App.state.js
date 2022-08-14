import { App } from "../";
import { Button, Column, HtmlContainer, Input, P, Row } from "../../html";
import { rgb } from "../../style/methods";

export default () => {
    const [value, setValue] = App.setState("count", 0);
    const [text, setText] = App.setCache("text", "Cached text");

    return Column({
        hooks: {
            onCreated: () => {
                console.log("State Built");
            },
        },
        children: [
            Row({
                style: {
                    scoped: true,
                    normal: {
                        justifyContent: "space-between",
                        alignItems: "stretch",
                    },
                },
                children: [
                    P({ children: "setState()" }),
                    HtmlContainer({
                        children: [`<p>state = <strong>${value}</strong></p>`],
                        style: { inline: { padding: "10px" } },
                    }),
                    Button({ children: "+1", onClick: () => setValue(value + 1) }),
                ],
            }),
            Row({
                style: {
                    scoped: true,
                    normal: { justifyContent: "space-between", alignItems: "stretch" },
                },
                children: [
                    P({ children: "setCache()" }),
                    P({
                        children: text,
                        onDragStart: (e) => {
                            console.log(e);
                        },
                    }),
                    Input({
                        value: text,
                        onInput: (e) => {
                            setText(e.target.value);
                        },
                    }),
                ],
            }),
            Row({
                style: {
                    scoped: true,
                    normal: { justifyContent: "space-between", alignItems: "stretch" },
                },
                children: [
                    P({ children: "getRef()", id: "ref" }),
                    P({ children: "Colorful Text", hooks: { onRef: () => "get-ref" } }),
                    Button({
                        children: "change to random color",
                        onClick: () => {
                            const element = App.getRef("get-ref");

                            const randomNumber = () => Math.floor(Math.random() * 256);

                            element.style.color = rgb(
                                randomNumber(),
                                randomNumber(),
                                randomNumber()
                            );
                        },
                    }),
                ],
            }),
        ],
    });
};
