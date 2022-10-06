import { FreeStyleSheet, StyleSheet } from "../../lib";

/**
 * Manage CSS within a `RecursiveWebApp`.
 */
export default class RecursiveCSSOM {
    /**
     * Used to inject static and unchanged styles.
     * Once injected, it can't be removed.
     */
    static common: HTMLStyleElement;

    /**
     * Used for dynamic style injection.
     * Store `imports`, `fontFace` and `charSet` declarations.
     */
    static highPriority: HTMLStyleElement;

    /**
     * Used for low priority dynamic style injection.
     * Store `vars`, `selectors`, `animations` and `mediaQueries` declarations.
     */
    static lowPriority: HTMLStyleElement;

    /**
     * Add the given style sheet as static.
     * @param styleSheet style sheet declaration.
     */
    static addStaticStyle(styleSheet: FreeStyleSheet): void;

    /**
     * Create a new CSSOM controller instance.
     */
    constructor();

    /**
     * Update component's and dynamic styles of the application.
     * @param stack contains styles declarations
     */
    update(stack: Array<StyleSheet>): void;

    /**
     * Add the style sheet object to the dynamic stack.
     * @param styleSheet sheet declaration.
     */
    addDynamicDeclaration(styleSheet: Map<string, any>): void;

    /**
     * Add a new style sheet declaration.
     * @param freeStyleSheet style declaration.
     */
    setStyle(freeStyleSheet: FreeStyleSheet): void;
}
