const { makeJsDocs } = require("../utility");

it.each([
    [
        {
            title: "Title",
            decorators: ["deprecated"],
            docs: ["This is a title documentation.", "Do not use."],
            links: ["google.com"],
        },
        [
            "/**",
            "* ## Title",
            "* This is a title documentation.",
            "* Do not use.",
            "* @deprecated",
            "* @see {@link google.com}",
            "*/",
        ],
    ],
])("should render render docs correctly", (params, expected) => {
    expect(makeJsDocs(params)).toStrictEqual(expected);
});
