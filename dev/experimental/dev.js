import { Render, setState } from "../..";
import { Column, P } from "../../html";
import { blur, url } from "../../style/methods";

const Count = (count) => {
    return P({
        children: count,
        style: { inline: { backdropFilter: blur("10px"), color: "white" } },
    });
};

Render({
    root: document.getElementById("root"),
    router: {},
    cacheSize: 2000,
    app: () => {
        const [count, setCount] = setState("count", 0);

        return Column({
            children: Count(count),
            style: {
                scoped: true,
                normal: {
                    padding: ["10px", "20px"],
                    backgroundImage: url("https://avatars.githubusercontent.com/u/54232641?v=4"),
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                },
            },
            onClick: () => setCount(count + 1),
        });
    },
});
