import { get as getAtt, is as isAttt, isToggle } from "../dom/DomAttributes.js";
import { get as getEv, is as isEv, getListener, hasHandler } from "../dom/DomEvents.js";
import { RecursiveRenderer } from "@riadh-adrani/recursive/index";
import RecursiveCSSOM from "../css/";
import { Renderer } from "../../use.js";
import { renderValue } from "../css/CssProperties.js";

/**
 * ### `RecursiveWeb`
 * Web implementation of the `RecursiveRenderer`
 */
class RecursiveWebRenderer extends Renderer {
    /**
     * Create an instance of `RecursiveWeb`
     * @param {import("@riadh-adrani/recursive/lib.js").App} app
     * @param {HTMLElement} root
     */
    constructor(app, root) {
        super(app, root);
        this.styler = new RecursiveCSSOM();
    }

    /**
     * Create HTML element.
     *
     * Use `RendererOptions.ns` property to precise the namespace of the element.
     * By default it is set to render html element, but you can use other namespaces.
     * * `html` : http://www.w3.org/1999/xhtm
     * * `svg` : http://www.w3.org/2000/svg
     * * `math` : http://www.w3.org/1998/Math/MathML
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} element
     * @returns {HTMLElement}
     */
    useRendererCreateInstance(element) {
        if (element.elementType === "#text") return document.createTextNode(element.children);

        let ns = "http://www.w3.org/1999/xhtml";

        if (element.rendererOptions && element.rendererOptions.ns) {
            ns = element.rendererOptions.ns;
        }

        return document.createElementNS(ns, element.elementType);
    }

    /**
     * Update text node inner value.
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} element
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} newElement
     */
    useRendererUpdateText(element, newElement) {
        element.instance.data = newElement.children;
    }

    /**
     * Check if the given attribute is a DOM compatible
     * @param {string} attribute
     * @returns {boolean}
     */
    useRendererIsAttribute(attribute) {
        return isAttt(attribute);
    }

    /**
     * Check if the given event is a DOM compatible
     * @param {string} event
     * @returns {boolean}
     */
    useRendererIsEvent(event) {
        return isEv(event);
    }

    /**
     * Add event to the provided HTML instance.
     * @param {string} eventName
     * @param {Function} callback
     * @param {HTMLElement} instance
     */
    useRendererAddEvent(eventName, callback, element) {
        const exists = element.events[eventName] !== undefined;

        element.instance.events[eventName] = callback;

        if (!exists) {
            if (hasHandler(eventName)) {
                getEv(eventName).handler(element.instance);
            } else {
                element.instance.addEventListener(getListener(eventName), (e) => {
                    this.orchestrator.batchCallback(
                        () => element.instance.events[eventName](e),
                        eventName
                    );
                });
            }
        }
    }

    /**
     * Check if the provided element exists in the DOM.
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} element
     * @returns {boolean}
     */
    useRendererItemInTree(element) {
        return document.contains(element.instance);
    }

    /**
     * Inject attributes into the HTML instance.
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} element
     * @param {HTMLElement} instance
     */
    useRendererInjectAttributes(element, instance) {
        for (let key in element.attributes) {
            if (key == "dataSet") {
                for (let item in element.attributes.dataSet) {
                    instance.dataset[item] = element.attributes.dataSet[item];
                }
            } else {
                if (isToggle(key)) {
                    instance.toggleAttribute(getAtt(key), element.attributes[key] == true);
                } else {
                    instance.setAttribute(getAtt(key), element.attributes[key]);
                }
            }
        }

        if (element.style && element.style.inline) {
            for (let prop in element.style.inline) {
                instance.style[prop] = renderValue(element.style.inline[prop]);
            }
        }
    }

    /**
     * Used to update the given attribute with the provided value.
     * @param {string} attribute
     * @param {string} value
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} element
     */
    useRendererSetAttribute(attribute, value, element) {
        const instance = element.instance;

        if (attribute === "dataSet") {
            for (let item in instance.dataset) {
                if (value[item] !== instance.dataset[item]) {
                    instance.dataset[item] = value[item];
                }
            }

            for (let item in value) {
                if (instance.dataset[item] === undefined) {
                    instance.dataset[item] = value[item];
                }
            }
        } else if (isToggle(attribute)) {
            instance.toggleAttribute(getAtt(attribute), value == true);
        } else {
            // does not work with some attributes updates
            instance.setAttribute(getAtt(attribute), value);

            // So we need to double check it with this one
            // which does not work on svg elements.
            instance[getAtt(attribute)] = value;
        }
    }

    /**
     * Update inline style.
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} element
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} newElement
     */
    useRendererUpdateStyle(element, newElement) {
        if (element.style && element.style.inline) {
            for (let prop in element.style.inline) {
                if (
                    newElement.style &&
                    newElement.style.inline &&
                    newElement.style.inline[prop] &&
                    newElement.style.inline[prop] !== element.style.inline[prop]
                ) {
                    element.instance.style[prop] = renderValue(newElement.style.inline[prop]);
                } else {
                    element.instance.style[prop] = "";
                }
            }
        }

        if (newElement.style && newElement.style.inline) {
            for (let prop in newElement.style.inline) {
                element.instance.style[prop] = renderValue(newElement.style.inline[prop]);
            }
        }
    }

    /**
     * Inject event listeners into the HTML instance.
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} element
     * @param {HTMLElement} instance
     */
    useRendererInjectEvents(element, instance) {
        instance.events = {};

        for (let ev in element.events) {
            instance.events[ev] = element.events[ev];

            if (hasHandler(ev)) {
                getEv(ev).handler(instance);
            } else {
                instance.addEventListener(getListener(ev), (e) => {
                    this.orchestrator.batchCallback(() => instance.events[ev](e), ev);
                });
            }
        }
    }

    /**
     * Inject children into the HTML instance
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} element
     * @param {HTMLElement} instance
     */
    useRendererInjectChildren(element, instance) {
        element.children.forEach((child) => instance.append(this.renderInstance(child)));
    }

    /**
     * @unused
     */
    useRendererClean() {}

    /**
     * Inject the tree of computed components into the root element.
     */
    useRendererRenderTree() {
        const tree = this.renderInstance(this.current);
        this.root.append(tree);
    }

    transformUid(uid) {
        function convert(uid) {
            const pool = [..."abcdefghijklmnopqrstuvwxyz-_0123456789"];
            const length = pool.length;

            return [...uid]
                .map((char, index) => {
                    return ((n) => {
                        const _char = pool[n % length];
                        return index % 3 == 0 && index != 0 ? _char.toUpperCase() : _char;
                    })(char.charCodeAt() + index + uid.length);
                })
                .join("");
        }

        const output = convert(uid);
        return output;
    }

    /**
     * Check and update the `className` of the element.
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} element
     */
    resolveClassName(element) {
        if (element.style && (element.style.scoped || element.style.className)) {
            let _class = element.style.className || "";

            if (element.style.scoped) {
                if (_class) _class += "-";

                _class += `_${this.transformUid(element.uid)}`;
            }

            if (element.attributes.className) element.attributes.className += " ";
            else element.attributes.className = "";

            element.attributes.className = element.attributes.className + _class;
            element.style.className = _class;
        }
    }

    /**
     * Flatten and return the `StyleSheets` of the elements' tree.
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} element
     * @returns {Array<any>}
     */
    flattenStyle(element) {
        const output = [];

        if (Array.isArray(element.children)) {
            element.children.forEach((child) => {
                output.push(...this.flattenStyle(child));
            });
        }

        this.resolveClassName(element);

        if (element.style) {
            output.push(element.style);
        }

        return output;
    }

    /**
     * Remove the provided attribute.
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} attribute
     * @param {HTMLElement} instance
     */
    useRendererRemoveAttribute(attribute, instance) {
        instance.removeAttribute(attribute);
    }

    /**
     * Apply style and post-computation effects.
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} tree
     */
    useRendererOnTreePrepared(tree) {
        const style = this.flattenStyle(tree);

        this.styler.update(style);
    }

    /**
     * Append an element to the DOM.
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} element
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} parentElement
     */
    useRendererAddElement(element, parentElement) {
        parentElement.instance.append(this.renderInstance(element));
    }

    /**
     * Change the position of an element in the given node element.
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} element
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} parentElement
     * @param {number} newPosition
     */
    useRendererChangeElementPosition(element, parentElement, newPosition) {
        parentElement.instance.insertBefore(
            element.instance,
            parentElement.instance.children[newPosition]
        );
    }

    /**
     * Replace the given element with the new one.
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} element
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} newElement
     */
    useRendererReplaceElement(element, newElement) {
        element.instance.replaceWith(this.renderInstance(newElement));
    }

    /**
     * Remove the provided element from the DOM.
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} element
     */
    useRendererRemoveElement(element) {
        element.instance.remove();
    }

    /**
     * Remove the given event from the instance.
     * @param {string} eventName
     * @param {HTMLElement} instance
     */
    useRendererRemoveEvent(eventName, instance) {
        instance.events[eventName] = () => {};
    }
}

export default RecursiveWebRenderer;
