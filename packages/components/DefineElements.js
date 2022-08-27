const {
    COLUMN_VIEW,
    ROW_VIEW,
    LAZY_COLUMN,
    LAZY_ROW,
    HTML_CONTAINER,
    CENTERED_ROW,
    CENTERED_COLUMN,
    HORIZONTAL_LINE,
    VERTICAL_LINE,
} = require("../constants");
const { View, addDefaultStyle } = require("./View");

class Column extends View {
    constructor() {
        super(COLUMN_VIEW);
    }
}

addDefaultStyle(COLUMN_VIEW, { display: "flex", flexDirection: "column" });

class Row extends View {
    constructor() {
        super(ROW_VIEW);
    }
}

addDefaultStyle(ROW_VIEW, { display: "flex", flexDirection: "row" });

class LazyColumn extends View {
    constructor() {
        super(LAZY_COLUMN);
    }
}

addDefaultStyle(LAZY_ROW, { display: "flex", flexDirection: "column" });

class LazyRow extends View {
    constructor() {
        super(LAZY_ROW);
    }
}

addDefaultStyle(LAZY_COLUMN, { display: "flex", flexDirection: "row" });

class HtmlContainer extends View {
    constructor() {
        super(HTML_CONTAINER);
    }
}

addDefaultStyle(HTML_CONTAINER, { display: "inline-block" });

class CenteredRow extends View {
    constructor() {
        super(CENTERED_ROW);
    }
}

addDefaultStyle(CENTERED_ROW, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
});

class CenteredColumn extends View {
    constructor() {
        super(CENTERED_COLUMN);
    }
}

addDefaultStyle(CENTERED_COLUMN, {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
});

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
