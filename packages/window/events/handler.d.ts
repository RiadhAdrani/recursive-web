import { EventTemplate } from "../../templates";

export interface GlobalEventHandlerTemplate extends EventTemplate {
    /**
     * event store name.
     */
    store: string;
}

/**
 * creates a new global event handler within an element.
 * @param params parameters
 */
export default function handler(
    params: GlobalEventHandlerTemplate
): EventTemplate;
