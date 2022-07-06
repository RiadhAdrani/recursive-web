import { Render } from "../..";
import { Column, Row } from "../../html";

const Item = () =>
    Column({
        style: { scoped: true },
        children: Row({
            style: {
                scoped: true,
                normal: { height: "10px", backgroundColor: "blueviolet", marginBottom: ["5px"] },
            },
        }),
    });

Render({
    root: document.body,
    app: () =>
        Column({
            style: {
                scoped: true,
                normal: {
                    border: ["solid", "black", "10px"],
                    padding: ["10px", "20px"],
                    backgroundColor: "yellowgreen",
                },
            },
            children: [Item(), Item(), Item(), Item(), Item()],
        }),
});
