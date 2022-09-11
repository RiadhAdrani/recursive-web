const { renderAnimation, isValidName, isValidStepsObject } = require("..");

it.each([
    [undefined],
    [null],
    [{}],
    [0],
    [""],
    [[]],
    ["--keyframed"],
    ["key frame"],
    ["inherit"],
    ["initial"],
    ["none"],
    ["unset"],
])("should ignore bad names", (input) => {
    expect(isValidName(input)).toBe(false);
});

it.each([[undefined], [null], [{}], [0], [""], [[]]])(
    "should ignore steps objects | case %s",
    (input) => {
        expect(isValidStepsObject(input)).toBe(false);
    }
);

it.each([
    [
        "anim",
        {
            "0%": { color: "red" },
            "50%": { color: "blue" },
            "100%": { color: "yellow" },
        },
        "@keyframes anim{0%{color: red;}50%{color: blue;}100%{color: yellow;}}",
    ],
    [
        "anim",
        {
            "0%": { color: "red" },
            "100%": { color: "blue" },
        },
        "@keyframes anim{0%{color: red;}100%{color: blue;}}",
    ],
    [
        "anim",
        {
            "100%": { color: "blue" },
        },
        "@keyframes anim{100%{color: blue;}}",
    ],
    [
        "anim",
        {
            "100%": {},
        },
        "@keyframes anim{100%{}}",
    ],
    ["anim", {}, ""],
])("should render animation correctly", (name, steps, expected) => {
    expect(renderAnimation(name, steps)).toBe(expected);
});
