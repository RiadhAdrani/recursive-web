import { RecursiveApp } from "../../use";
import handler from "./events/handler";

/**
 * Initialize the global window object with the global events.
 * @param app application instance.
 */
function useRecursiveWindow(app: RecursiveApp): void;

export { handler, useRecursiveWindow };
