/**
 * @jest-environment jsdom
 */

import { createElement } from "@riadh-adrani/recursive";
import { createApp } from "../../testing";
import { importFile } from "..";

it("should add imported scripts", () => {
    const webApp = createApp({
        app: () => {
            return createElement("div");
        },
    });

    importFile("script", {
        src: "http://www.google.com/",
        async: true,
        crossOrigin: "true",
        defer: true,
        fetchPriority: "high",
        integrity: "yes",
        nonce: "maybe",
        referrerPolicy: "policy",
        type: "module",
    });

    const maybeEl = document.querySelector(".__import__file__");

    expect(maybeEl).toBeTruthy();
    expect(maybeEl.src).toBe("http://www.google.com/");
    expect(maybeEl.async).toBe(true);
    expect(maybeEl.defer).toBe(true);
    expect(maybeEl.integrity).toBe("yes");
    expect(maybeEl.nonce).toBe("maybe");
    expect(maybeEl.referrerPolicy).toBe("policy");
    expect(maybeEl.type).toBe("module");

    // TODO : expect(maybeEl.crossorigin).toBe("true");
});
