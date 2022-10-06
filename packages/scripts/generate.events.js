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
        const eventCallbackType = `EventCallback<${ListOfEvents[event].type},E>`;

        eventsContent += `${makeJsDocBlock(
            ListOfEvents[event].docs,
            ["## `" + event + "`"],
            [
                ...ListOfEvents[event].decorators.map((item) => `@${item}`),
                ...ListOfEvents[event].links.map(
                    (item) => `@see {@link ${item}}`
                ),
            ]
        )}${event}:${eventCallbackType} | Array<${eventCallbackType}>`;
    }

    const old = fs.readFileSync(path.join("./lib.d.ts"), { encoding: "utf-8" });
    const newEvents = old.replace(
        "interface Events<E = HTMLElement> {}",
        `interface Events<E = HTMLElement> {${eventsContent}}`
    );

    fs.writeFileSync(path.join("./lib.d.ts"), newEvents);

    console.log("Events written");
};
