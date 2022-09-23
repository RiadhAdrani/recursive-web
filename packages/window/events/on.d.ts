/**
 * attach a new event listener to the global window object.
 * @param winEvent event name.
 * @param callback event callback.
 */
export default function on(
    winEvent: string,
    callback: (e: Event) => void
): void;
