const generateComponents = require("./generate.components");
const generateEvents = require("./generate.events");
const generateStyles = require("./generate.styles");
const generateTypes = require("./generate.types");

generateTypes();
generateStyles();
generateComponents();
generateEvents();
