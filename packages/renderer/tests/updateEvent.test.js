/**
 * @jest-environment jsdom
 */

const { app: Application } = require("./test.utility");

it("should update events", () => {
    let value;

    const app = Application((app) => {
        const [val, setVal] = app.setState("val", 1);

        return app.createElement("button", {
            onClick: () => {
                const newVal = val + 1;

                setVal(newVal);

                value = newVal;
            },
        });
    });

    app.render();

    document.body.children.item(0).onclick();
    document.body.children.item(0).onclick();

    expect(value).toBe(3);
});
