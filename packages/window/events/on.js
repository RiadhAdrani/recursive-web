const on = (winEvent, handler) => {
    function onHandler(e) {
        handler(e);
    }

    window.addEventListener(winEvent, onHandler);
};

module.exports = on;
