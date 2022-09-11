/**
 * @important
 * Do not run this file using node.
 * use `npm run generate` instead
 */

const fs = require("fs");
const path = require("path");
const { makeJsDocBlock } = require(".");
const { ListOfEvents } = require("../dom");

module.exports = () => {
    let eventsContent = "";

    for (let event in ListOfEvents) {
        eventsContent += `${makeJsDocBlock(ListOfEvents[event].docs, [
            "## `" + event + "` Event",
        ])}${event}:(event : ${ListOfEvents[event].type}) => void;`;
    }

    const old = fs.readFileSync(path.join("./lib.d.ts"), { encoding: "utf-8" });
    const newEvents = old.replace(
        "export interface Events {}",
        `export interface Events {${eventsContent}}`
    );

    fs.writeFileSync(path.join("./lib.d.ts"), newEvents);

    console.log("Events written");
};
