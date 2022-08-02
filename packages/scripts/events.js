/**
 * @important
 * Do not run this file using node.
 * use `npm run generate` instead
 */

const fs = require("fs");
const path = require("path");
const { list } = require("../dom/DomEvents");

let eventsContent = "";

for (let event in list) {
    eventsContent += `${event}:(event : ${list[event].type}) => void;`;
}

const old = fs.readFileSync(path.join("./lib.d.ts"), { encoding: "utf-8" });
const newEvents = old.replace(
    "export interface Events {}",
    `export interface Events {${eventsContent}}`
);

fs.writeFileSync(path.join("./lib.d.ts"), newEvents);

console.log("Events written");
