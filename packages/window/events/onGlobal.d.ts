import { RecursiveOrchestrator } from "../../../use";

/**
 * ceate a new global event listener.
 * @param orchestrator application orchestrator.
 * @param winEvent event type.
 * @param store store name.
 * @param listener listener within the element.
 * @param checkTarget if true, the global event will not fire for the elements which are contained within `event.target`.
 */
export default function onGlobal(
    orchestrator: RecursiveOrchestrator,
    winEvent: string,
    store: string,
    listener: (e: Event) => void,
    checkTarget: boolean
): void;
