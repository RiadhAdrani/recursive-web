const onGlobal = require("./events/onGlobal.js");
const handler = require("./events/handler.js");

function useRecursiveWindow(orchestrator) {
    onGlobal(orchestrator, "click", "onclickglobal", "onClickGlobal");
    onGlobal(
        orchestrator,
        "contextmenu",
        "oncontextmenuglobal",
        "onContextMenuGlobal"
    );
    onGlobal(orchestrator, "resize", "onresizeglobal", "onResizeGlobal", false);
    onGlobal(orchestrator, "keyup", "onkeyupglobal", "onKeyUpGlobal", false);
    onGlobal(
        orchestrator,
        "keydown",
        "onkeydownglobal",
        "onKeyDownGlobal",
        false
    );
    onGlobal(orchestrator, "scroll", "onscrollglobal", "onScrollGlobal", false);
    onGlobal(
        orchestrator,
        "beforeunload",
        "onbeforeunloadglobal",
        "onBeforeUnloadGlobal",
        false
    );
}

module.exports = { handler, useRecursiveWindow };
