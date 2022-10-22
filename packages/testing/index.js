const { RecursiveWebApp } = require("../app");

/**
 *
 * @param {import("../app").RecursiveWebAppConstructorParams} params
 * @returns
 */
const createApp = (params) => {
    return new RecursiveWebApp({
        ...params,
        root: document.body,
    });
};

const cleanDOM = () => {
    document.body.innerHTML = "";
};

const getElement = (selector) => {
    return document.querySelector(`body ${selector || ""}`);
};

/**
 *
 * @param {Element} element
 * @param {Event} event
 */
const executeEvent = (element, event) => {
    element.dispatchEvent(event);
};

module.exports = { createApp, cleanDOM, getElement, executeEvent };
