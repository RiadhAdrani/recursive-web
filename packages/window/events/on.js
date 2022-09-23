/**
 * @param {string} winEvent
 * @param {(event:Event) => void} callback
 */
function on(winEvent, callback) {
    window.addEventListener(winEvent, callback);
}

module.exports = on;
