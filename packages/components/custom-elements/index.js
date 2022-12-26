import {
    COLUMN_VIEW,
    ROW_VIEW,
    LAZY_COLUMN,
    LAZY_ROW,
    HTML_CONTAINER,
    CENTERED_ROW,
    CENTERED_COLUMN,
    HORIZONTAL_LINE,
    VERTICAL_LINE,
    TOGGLE_SWITCH,
    CIRCULAR_SPINNER,
} from "../../constants/index.js";
import RecursiveCSSOM from "../../css/index.js";

/**
 * Class extending HTMLElement that define a custom element.
 */
class View extends HTMLElement {
    /**
     * Create an instance of the custom view element.
     * @param {string} tag Element tag, node-name.
     */
    constructor(tag) {
        customElements.define(tag, this);
    }
}

/**
 * Define the default style for the components.
 * @param {string} selector Element selector.
 * @param {import("../../../core").Selector} style Default style.
 */
function addDefaultStyle(selector, style) {
    RecursiveCSSOM.addStaticStyle({ selectors: { [selector]: style } });
}

/**
 * -----------------------------------------------------------------------------------------
 * Define custom elements
 * -----------------------------------------------------------------------------------------
 */

class Column extends View {
    constructor() {
        super(COLUMN_VIEW);
    }
}

class Row extends View {
    constructor() {
        super(ROW_VIEW);
    }
}

class LazyColumn extends View {
    constructor() {
        super(LAZY_COLUMN);
    }
}

class LazyRow extends View {
    constructor() {
        super(LAZY_ROW);
    }
}

class HtmlContainer extends View {
    constructor() {
        super(HTML_CONTAINER);
    }
}

class CenteredRow extends View {
    constructor() {
        super(CENTERED_ROW);
    }
}

class CenteredColumn extends View {
    constructor() {
        super(CENTERED_COLUMN);
    }
}

class HorizontalLine extends View {
    constructor() {
        super(HORIZONTAL_LINE);
    }
}

class VerticalLine extends View {
    constructor() {
        super(VERTICAL_LINE);
    }
}

class ToggleSwitch extends View {
    constructor() {
        super(TOGGLE_SWITCH);
    }
}

class CircularSpinner extends View {
    constructor() {
        super(CIRCULAR_SPINNER);
    }
}

/**
 * -----------------------------------------------------------------------------------------
 * Define default style
 * -----------------------------------------------------------------------------------------
 */

addDefaultStyle(COLUMN_VIEW, { display: "flex", flexDirection: "column" });
addDefaultStyle(ROW_VIEW, { display: "flex", flexDirection: "row" });
addDefaultStyle(LAZY_ROW, { display: "flex", flexDirection: "column" });
addDefaultStyle(LAZY_COLUMN, { display: "flex", flexDirection: "row" });
addDefaultStyle(HTML_CONTAINER, { display: "inline-block" });
addDefaultStyle(CENTERED_ROW, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
});
addDefaultStyle(CENTERED_COLUMN, {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
});
addDefaultStyle(TOGGLE_SWITCH, {
    display: "inline-block",
});
addDefaultStyle(CIRCULAR_SPINNER, {
    display: "inline-block",
    width: "min-content",
    height: "min-content",
});
