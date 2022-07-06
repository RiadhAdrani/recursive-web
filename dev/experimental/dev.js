import { Render } from "../..";
import { Column, LazyColumn, Row, Spacer } from "../../html";

const Item = () =>
    Column({
        style: { scoped: true },
        children: [
            Row({
                style: {
                    scoped: true,
                    normal: {
                        height: "10px",
                        backgroundColor: "blueviolet",
                    },
                },
            }),
            Spacer({ height: "10px" }),
            LazyColumn(),
        ],
    });

Render({
    root: document.body,
    app: () =>
        LazyColumn({
            onObserved: () => {},
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
