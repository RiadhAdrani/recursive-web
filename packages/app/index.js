import RecursiveWebRenderer from "../renderer/index.js";
import RecursiveWebRouter from "../router/index.js";
import { RecursiveApp } from "../../use.js";
import { useRecursiveWindow } from "../window/index.js";
import { useRecursiveComponents } from "../components/index.js";
import { merge, isFalsy } from "@riadh-adrani/utility-js";

export class RecursiveWebApp extends RecursiveApp {
    /**
     * @param {import(".").RecursiveWebAppConstructorParams} params
     */
    constructor({
        root,
        app,
        route,
        base = "",
        scrollCorrection = false,
        cacheSize = 1000,
        onAppInit,
        scopedStyle,
    }) {
        super({
            cacheSize,
            buildRenderer: (_app) => {
                return new RecursiveWebRenderer(app, root, _app, {
                    scopedStyle,
                });
            },
            buildRouter: (_app) => {
                if (typeof route == "object") {
                    return new RecursiveWebRouter(
                        route,
                        base,
                        scrollCorrection,
                        _app
                    );
                }
            },
            onAppInit: (_app) => {
                import("../components/custom-elements");

                useRecursiveComponents(_app);
                useRecursiveWindow(_app);

                if (typeof onAppInit == "function") onAppInit(_app);
            },
        });
    }

    /**
     * @param {import("../../lib").FreeStyleSheet} styleSheet style sheet declaration.
     */
    setStyle(styleSheet) {
        this.renderer.styler.setStyle(styleSheet);
    }
}

/**
 * @param {import("../../lib").StyleSheet} params
 */
export function createComponentStyle(params) {
    return { ...params };
}

export function mergeComponentStyles(...styleSheets) {
    return merge(
        ...styleSheets.filter(
            (style) => typeof style === "object" && !isFalsy(style)
        )
    );
}
