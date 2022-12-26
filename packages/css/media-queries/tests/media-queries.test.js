import { renderMediaQuery, isValidMediaQueryDeclaration } from "..";

it("should render a correct media queries with valid input.", () => {
    expect(
        renderMediaQuery("(max-width: 600px)", {
            ["div"]: {
                backgroundColor: "red",
                border: ["1px", "solid", "black"],
            },
        })
    ).toBe(
        "@media (max-width: 600px){div{background-color:red;border:1px solid black;}}"
    );
});

it.each([[""], ["string"], [0], [1], [null], [undefined], [[]], [{}]])(
    "should refuse all these falsy query objects | case : (%s)",
    (object) => {
        expect(isValidMediaQueryDeclaration(object)).toBeFalsy();
    }
);

it("should accept valid media query declaration", () => {
    expect(
        isValidMediaQueryDeclaration({
            condition: "(max-width:300px)",
            div: {},
        })
    );
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
    expect(renderMediaQuery(selector, content)).toBe("");
});
