import { RecursiveElement, Route } from "@riadh-adrani/recursive/lib";
import { FreeStyleSheet, StyleSheet } from "../../lib";
import { RecursiveApp } from "../../use";

export interface RecursiveWebAppConstructorParams {
    /**
     * root element in which the app will be injected.
     */
    root: HTMLElement;
    /**
     * Callback returning the tree of elements.
     */
    app: () => RecursiveElement;
    /**
     * routing tree object.
     */
    route: Route;
    /**
     * base url of the web app.
     */
    base: string;
    /**
     * a boolean indicating if the page should scroll to the top when a new route is mounted.
     */
    scrollCorrection: boolean;
    /**
     * defines the maximum number of cached stateful objects.
     */
    cacheSize: number;
    /**
     * callback that will be executed when the app is initialized.
     */
    onAppInit: (app: RecursiveWebApp) => void;
}

/**
 * Web implementation of the `RecursiveApp` class.
 */
export class RecursiveWebApp extends RecursiveApp {
    /**
     * Create a new instance of Recursive App for the web.
     *
     * Despite the fact that you can create multiple instance,
     * that does not mean that it is a good idea,
     * while most of the modules like the `Renderer` or `State` may work
     * flawlessly, the `Router` module will not work as expected.
     * @param params parameter
     */
    constructor(params: RecursiveWebAppConstructorParams);

    setStyle(styleSheet: FreeStyleSheet): void;

    createComponentStyle(styleSheet: StyleSheet): void;
}
