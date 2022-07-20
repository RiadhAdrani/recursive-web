import { getRef, setCache, setState } from "../..";
import { Button, Column, Input, P, Row } from "../../html";
import { rgb } from "../../style/methods";

export default () => {
    const [value, setValue] = setState("count", 0);
    const [text, setText] = setCache("text", "Cached text");

    return Column({
        children: [
            Row({
                style: { inline: { justifyContent: "space-between", alignItems: "stretch" } },
                children: [
                    P({ children: "setState()" }),
                    P({ children: value }),
                    Button({ children: "+1", onClick: () => setValue(value + 1) }),
                ],
            }),
            Row({
                style: { inline: { justifyContent: "space-between", alignItems: "stretch" } },
                children: [
                    P({ children: "setCache()" }),
                    P({ children: text }),
                    Input({ value: text, onInput: (e) => setText(e.target.value) }),
                ],
            }),
            Row({
                style: { inline: { justifyContent: "space-between", alignItems: "stretch" } },
                children: [
                    P({ children: "getRef()" }),
                    P({ children: "Colorful Text", hooks: { onRef: () => "get-ref" } }),
                    Button({
                        children: "change to random color",
                        onClick: () => {
                            const element = getRef("get-ref");

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
