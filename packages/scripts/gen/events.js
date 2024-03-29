/**
 * @important
 * Do not run this file using node.
 * use `npm run generate` instead
 */
import { ListOfEvents } from "../../dom/index.js";
import {
    transformEventTemplate,
    transformInterface,
    useImport,
    createFileContent,
    writeIntoFile,
    write,
} from "../utility/index.js";

export default () => {
    const EventsInterface = transformInterface({
        name: "Events",
        typeParams: ["E = HTMLElement"],
        keys: Object.keys(ListOfEvents),
        callback: (key) =>
            transformEventTemplate({ key, template: ListOfEvents[key] }),
    });

    const imports = [useImport(["EventDeclaration"], "../packages/dom/event")];

    const _EVENTS_D_TS = createFileContent(EventsInterface, imports);

    writeIntoFile(write(_EVENTS_D_TS), "../../../types/events.d.ts");
};
