import { renderRoute, setState } from ".";
import { Div, Link, ColorPicker } from "../html";

export default () => {
    const [value, setValue] = setState("state", "#000000");

    return Div({
        style: { inline: { backgroundColor: value } },
        children: [
            Link({ href: "/route", children: "Hello World" }),
            ColorPicker({
                value,
                onInput: (e) => {
                    setValue(e.target.value);
                },
            }),
            renderRoute(),
        ],
    });
};
