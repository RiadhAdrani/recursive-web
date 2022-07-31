/**
 * @jest-environment jsdom
 */

const { createElement } = require("../../../use");
const { RecursiveWebApp } = require("../../app");

describe("create instance tests", () => {
    let app = new RecursiveWebApp({ app: () => createElement("div"), root: document.body });

    const renderer = app.renderer;

    it("should create an HTML element", () => {
        const div = renderer.renderInstance(createElement("div"));

        expect(div instanceof HTMLDivElement == true).toBeTruthy();
    });

    it("should create a text node element", () => {
        const div = renderer.renderInstance(createElement("#text", { children: "text" }));

        expect(div instanceof Text == true).toBeTruthy();
    });

    it("should create an SVG element", () => {
        const div = renderer.renderInstance(
            createElement("svg", { rendererOptions: { ns: "http://www.w3.org/2000/svg" } })
        );

        expect(div instanceof SVGSVGElement == true).toBeTruthy();
    });
});
