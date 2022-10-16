import { RecursiveApp } from "@riadh-adrani/recursive";
import { RecursiveElement } from "@riadh-adrani/recursive/lib";
import { RecursiveRenderer } from "../../use";
import RecursiveCSSOM from "../css";

interface RecursiveWebRendererOptions {
    /**
     * decides if all component styles should be scoped by default.
     */
    scopedStyle: boolean;
}

/**
 * Perform rendering and updates to the DOM.
 */
export default class RecursiveWebRenderer extends RecursiveRenderer {
    public styler: RecursiveCSSOM;

    /**
     * create an instance of the Recursive Renderer for the web.
     * @param app callback returning tha elements tree.
     * @param root html container element.
     * @param bootstrapper the current instance of the recursive app.
     * @param options web options.
     */
    constructor(
        app: () => RecursiveElement,
        root: HTMLElement,
        bootstrapper: RecursiveApp,
        options: WebRendererOptions
    );

    /**
     * add an event listener to the element.
     * @param onEventName event name with `on` at the start.
     * @param callback callback function.
     * @param instance target html element.
     */
    setElementEvent(
        onEventName: string,
        callback: () => void,
        instance: HTMLElement
    ): void;

    /**
     * set an attribute.
     * @param attribute attribute name.
     * @param value attribute value.
     * @param instance target html element.
     */
    setElementAttribute(
        attribute: string,
        value: string | Array<string>,
        instance: HTMLElement
    ): void;

    /**
     * transform a given uid.
     * @param uid unique identifier.
     */
    transformUId(uid: string): string;

    /**
     * check and update the `className` for scoping.
     * @param element target element.
     */
    resolveCLassName(element: RecursiveElement): void;

    /**
     * ceck if the `styleSheet` contains external selectors.
     * @param styleSheet style sheet object.
     */
    isExternalStyleSheet(styleSheet: object): boolean;

    /**
     * flatten and return the `StyleSheets` of the elements' tree.
     * @param element target element.
     */
    flattenStyle(element: RecursiveElement): Array<StyleSheet>;

    /**
     * convert children to a string.
     * @param element element to be reduced.
     */
    reduceChildrenToInnerHTML(element: RecursiveElement): string;
}
