/**
 * @jest-environment jsdom
 */

import {
    ELEMENT_TYPE_TEXT_NODE,
    RECURSIVE_ELEMENT_SYMBOL,
    ELEMENT_TYPE_RAW,
} from "@riadh-adrani/recursive/packages/constants";
import { RecursiveWebApp } from "../../app";
import { HTML_CONTAINER } from "../../constants";

describe("create instance tests", () => {
    const app = new RecursiveWebApp({
        app: () => app.createElement("div"),
        root: document.body,
    });

    const renderer = app.renderer;

    it("should create an HTML element", () => {
        const div = renderer.renderInstance(app.createElement("div"));

        expect(div instanceof HTMLDivElement == true).toBeTruthy();
    });

    it("should create a text node element", () => {
        const div = renderer.renderInstance(
            app.createElement("#text", { children: "text" })
        );

        expect(div instanceof Text == true).toBeTruthy();
    });

    it("should create a raw container", () => {
        const div = renderer.useRendererCreateRawContainer(
            app.createElement(ELEMENT_TYPE_RAW, {
                children: [
                    {
                        elementType: ELEMENT_TYPE_TEXT_NODE,
                        $$_RecursiveSymbol: RECURSIVE_ELEMENT_SYMBOL,
                        children: "<p></p>",
                        instance: undefined,
                    },
                ],
            })
        );

        expect(div.outerHTML).toBe(
            `<${HTML_CONTAINER}><p></p></${HTML_CONTAINER}>`
        );
    });

    it("should create an SVG element", () => {
        const div = renderer.renderInstance(
            app.createElement("svg", {
                rendererOptions: { ns: "http://www.w3.org/2000/svg" },
            })
        );

        expect(div instanceof SVGSVGElement == true).toBeTruthy();
    });
});
