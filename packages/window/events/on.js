/**
 * Attach a new event listener to the global window object.
 * @param {string} winEvent Event name.
 * @param {(event:Event) => void} callback Event callback.
 */
function on(winEvent, callback) {
    window.addEventListener(winEvent, callback);
}

module.exports = on;
