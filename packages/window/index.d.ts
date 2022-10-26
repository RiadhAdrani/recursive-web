import { RecursiveApp } from "../../use";
import { ImportScriptParams } from "../../types/util";

import handler from "./events/handler";

/**
 * Import a single script dynamically.
 * @param type imported file type.
 * @param params script parameters
 */
export function importFile(
    type: "script" | "link",
    params: ImportScriptParams
): void;

/**
 * Initialize the global window object with the global events.
 * @param app application instance.
 */
function useRecursiveWindow(app: RecursiveApp): void;

export { handler, useRecursiveWindow, importFile };
