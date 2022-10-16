const components = require("./gen/components");
const events = require("./gen/events");
const selector = require("./gen/selector");
const htmlCommon = require("./gen/htmlCommon");
const fontFace = require("./gen/fontFace");

htmlCommon();
selector();
components();
events();
fontFace();
