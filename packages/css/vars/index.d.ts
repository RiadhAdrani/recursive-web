/**
 * render a single CSS variable.
 * @param key variable name.
 * @param value variable value.
 */
export function renderVar(key: string, value: string): string;

/**
 * render and return statements of `--var`.
 * @param list list containing key-value pairs of CSS variables.
 */
export function renderVars(list: { [key: string]: string }): string;
