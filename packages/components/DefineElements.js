const { COLUMN_VIEW, ROW_VIEW, LAZY_COLUMN, LAZY_ROW, HTML_CONTAINER } = require("../constants");
const { View, addDefaultStyle } = require("./View");

class Column extends View {
    constructor() {
        super(COLUMN_VIEW);
    }
}

addDefaultStyle("column-view", { display: "flex", flexDirection: "column" });

class Row extends View {
    constructor() {
        super(ROW_VIEW);
    }
}

addDefaultStyle("row-view", { display: "flex", flexDirection: "row" });

class LazyColumn extends View {
    constructor() {
        super(LAZY_COLUMN);
    }
}

addDefaultStyle("lazy-column", { display: "flex", flexDirection: "column" });

class LazyRow extends View {
    constructor() {
        super(LAZY_ROW);
    }
}

addDefaultStyle("lazy-row", { display: "flex", flexDirection: "row" });

class HtmlContainer extends View {
    constructor() {
        super(HTML_CONTAINER);
    }
}

addDefaultStyle("html-container", { display: "inline-block" });
