const { render } = require("../CssMediaQueries.js");

it("should render a correct media queries with valid input.", () => {
    expect(
        render("(max-width: 600px)", {
            ["div"]: {
                backgroundColor: "red",
                border: ["1px", "solid", "black"],
            },
        })
    ).toBe("@media (max-width: 600px){div{background-color: red;border: 1px solid black;}}");
});

it.each([
    [[], {}],
    [{}, {}],
    [0, {}],
    [null, {}],
    [undefined, {}],
    ["", {}],
    ["div", undefined],
    ["div", null],
    ["div", 0],
    ["div", []],
    ["div", {}],
])("should render empty content | case '%s' -> '%s'", (selector, content) => {
    expect(render(selector, content)).toBe("");
});
