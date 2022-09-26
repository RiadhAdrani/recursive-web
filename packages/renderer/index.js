const { RecursiveConsole, RecursiveRenderer } = require("../../use.js");
const RecursiveCSSOM = require("../css/");
const { HTML_CONTAINER, HTML_NS } = require("../constants/index.js");
const { renderValue } = require("../css/properties");
const {
    ELEMENT_TYPE_TEXT_NODE,
} = require("@riadh-adrani/recursive/packages/constants/index.js");
const {
    isEvent,
    isAttribute,
    isToggleableAttribute,
    getAttributeName,
    getEvent,
    eventHasHandler,
} = require("../dom/index.js");
const { copy } = require("@riadh-adrani/recursive/packages/common");

class RecursiveWebRenderer extends RecursiveRenderer {
    /**
     * @param {import("@riadh-adrani/recursive/lib.js").App} app
     * @param {HTMLElement} root
     */
    constructor(app, root, bootstrapper, options = {}) {
        super(app, root, bootstrapper);

        /**
         * @type {RecursiveCSSOM}
         */
        this.styler = new RecursiveCSSOM();

        this.scopedStyle =
            options.hasOwnProperty("scopedStyle") &&
            options.scopedStyle === true;
    }

    /**
     * @param {string} onEventName
     * @param {Function} callback
     * @param {HTMLElement} instance
     */
    setElementEvent(onEventName, callback, instance) {
        instance[onEventName] = (e) =>
            this.orchestrator.batchCallback(() => callback(e), onEventName);
    }

    /**
     * @param {string} uid
     */
    transformUid(uid) {
        function convert(uid) {
            const pool = [..."abcdefghijklmnopqrstuvwxyz-_0123456789"];
            const length = pool.length;

            const sum = [...uid].reduce((res, val) => {
                return res + val.charCodeAt();
            }, 0);

            return [...uid]
                .map((char, index) => {
                    return ((n) => {
                        const _char = pool[n % length];
                        return index % 3 == 0 && index != 0
                            ? _char.toUpperCase()
                            : _char;
                    })(char.charCodeAt() + sum + index);
                })
                .join("");
        }

        const output = convert(uid);

        return output;
    }

    /**
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} element
     */
    resolveClassName(element) {
        if (typeof element.style !== "object") return;

        element.style = copy(element.style);

        if (!this.isExternalStyleSheet(element.style)) return;

        if (
            !this.scopedStyle &&
            !element.style.scoped &&
            !element.style.className
        )
            return;

        let _class = element.style.className || "";

        if (this.scopedStyle && element.style.scoped !== false) {
            if (_class) _class += "-";

            _class += `_${this.transformUid(element.uid)}`;
        }

        if (element.attributes.className) element.attributes.className += " ";
        else element.attributes.className = "";

        element.attributes.className = element.attributes.className + _class;
        element.style.className = _class;
    }

    /**

     * @param {object} styleSheet
     */
    isExternalStyleSheet(styleSheet) {
        return (
            typeof styleSheet === "object" &&
            Object.keys(styleSheet).filter((key) => key != "inline").length > 0
        );
    }

    /**
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} element
     */
    flattenStyle(element) {
        const output = [];

        if (Array.isArray(element.children)) {
            element.children.forEach((child) => {
                output.push(...this.flattenStyle(child));
            });
        }

        this.resolveClassName(element);

        if (element.style && this.isExternalStyleSheet(element.style)) {
            if (element.style.className) {
                output.push(element.style);
            } else {
                RecursiveConsole.warn(
                    "CSS: no className detected and therefore style will be ignored"
                );
            }
        }

        return output;
    }

    /**
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} element
     */
    reduceChildrenToInnerHTML(element) {
        return element.children.reduce((value, child) => {
            return value + child.children.toString();
        }, "");
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
        if (element.elementType === ELEMENT_TYPE_TEXT_NODE)
            return document.createTextNode(element.children);

        let ns = HTML_NS;

        if (element.rendererOptions && element.rendererOptions.ns) {
            ns = element.rendererOptions.ns;
        }

        return document.createElementNS(ns, element.elementType);
    }

    /**
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} element
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} newElement
     */
    useRendererUpdateText(element, newElement) {
        element.instance.data = newElement.children;
    }

    /**
     * @param {string} attribute
     * @returns {boolean}
     */
    useRendererIsAttribute(attribute) {
        return isAttribute(attribute);
    }

    /**
     * @param {string} event
     * @returns {boolean}
     */
    useRendererIsEvent(event) {
        return isEvent(event);
    }

    /**
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} element
     * @returns {boolean}
     */
    useRendererItemInTree(element) {
        return document.contains(element.instance);
    }

    /**
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} element
     * @param {HTMLElement} instance
     */
    useRendererInjectAttribute(attribute, value, instance) {
        if (attribute == "dataSet") {
            for (let item in value) {
                instance.dataset[item] = value[item];
            }
        } else {
            if (isToggleableAttribute(attribute)) {
                instance.toggleAttribute(
                    getAttributeName(attribute),
                    value == true
                );
            } else {
                instance.setAttribute(getAttributeName(attribute), value);
            }
        }
    }

    /**
     * @param {import("../../lib.js").StyleSheet} style
     * @param {HTMLElement} instance
     */
    useRendererInjectStyle(style, instance) {
        if (style && style.inline) {
            for (let prop in style.inline) {
                instance.style[prop] = renderValue(style.inline[prop], prop);
            }
        }
    }

    /**
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
        } else {
            const attrName = getAttributeName(attribute);
            const isToggleable = isToggleableAttribute(attribute);
            const reallyNewValue = isToggleable ? value == true : value;

            if (isToggleable) {
                instance.toggleAttribute(attrName, reallyNewValue);
            } else {
                instance.setAttribute(attrName, reallyNewValue);
            }

            try {
                // So we need to double check it with this one
                // which does not work on svg elements
                // and throws an error
                // hence the need of a try catch block
                instance[attrName] = reallyNewValue;
            } catch (error) {
                RecursiveConsole.warn(
                    "Recursive Web Renderer : Something went wrong when trying to update an attribute."
                );
            }
        }
    }

    /**
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} element
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} newElement
     */
    useRendererUpdateStyle(element, newElement) {
        let inline = {};
        let newInline = {};

        if (element.style && element.style.inline)
            inline = element.style.inline;
        if (newElement.style && newElement.style.inline)
            newInline = newElement.style.inline;

        const combined = { ...inline, ...newInline };

        for (let key in combined) {
            element.instance.style[key] =
                newInline[key] != undefined
                    ? renderValue(combined[key], key).trim()
                    : "";
        }
    }

    /**
     * @param {string} event
     * @param {Function} callback
     * @param {HTMLElement} instance
     */
    useRendererInjectEvent(event, callback, instance) {
        const eventData = getEvent(event);

        if (!eventData) return;

        this.setElementEvent(eventData.on, callback, instance);

        if (eventHasHandler(event)) {
            eventData.handler(instance);
        }
    }

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} element
     * @param {HTMLElement} instance
     */
    useRendererAddEvent(eventName, callback, element) {
        this.useRendererInjectEvent(eventName, callback, element.instance);
    }

    /**
     *
     * @param {string} event
     * @param {Function} callback
     * @param {HTMLElement} instance
     */
    useRendererUpdateEvent(event, callback, element) {
        const eventData = getEvent(event);

        if (!eventData) return;

        this.setElementEvent(eventData.on, callback, element.instance);
    }

    /**
     * @param {string} eventName
     * @param {HTMLElement} instance
     */
    useRendererRemoveEvent(eventName, instance) {
        const eventData = getEvent(eventName);

        if (!eventData) return;

        instance[eventData.on] = null;
    }

    /**
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} element
     * @param {HTMLElement} instance
     */
    useRendererInjectChild(child, instance) {
        instance.append(this.renderInstance(child));
    }

    useRendererClean() {}

    useRendererRenderTree() {
        const tree = this.renderInstance(this.current);
        this.root.append(tree);
    }

    /**
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} attribute
     * @param {HTMLElement} instance
     */
    useRendererRemoveAttribute(attribute, instance) {
        // works with some attributes.
        instance.removeAttribute(attribute);

        // just making sure.
        instance[attribute] = "";
    }

    /**
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} tree
     */
    useRendererOnTreePrepared(tree) {
        const style = this.flattenStyle(tree);

        this.styler.update(style);
    }

    /**
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} element
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} parentElement
     * @param {number} index
     */
    useRendererAddElement(element, parentElement, index = undefined) {
        /**
         * @type {HTMLElement}
         */
        const parent = parentElement.instance;

        if (typeof index == "number" && parent.childNodes.length > index) {
            const parent = element.parent.instance;

            const child = parent.childNodes.item(index);

            parent.insertBefore(this.renderInstance(element), child);
        } else {
            parent.append(this.renderInstance(element));
        }
    }

    /**
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} element
     * @param {number} newPosition
     */
    useRendererChangeElementPosition(element, newPosition) {
        element.parent.instance.insertBefore(
            element.instance,
            element.parent.instance.children[newPosition]
        );
    }

    /**
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} element
     */
    useRendererGetElementPosition(element) {
        return Array.from(element.instance.parentElement.children).indexOf(
            element.instance
        );
    }

    /**
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} element
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} newElement
     */
    useRendererReplaceElement(element, newElement) {
        element.instance.replaceWith(this.renderInstance(newElement));
    }

    /**
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} element
     */
    useRendererRemoveElement(element) {
        element.instance.remove();
    }

    /**
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} element
     */
    useRendererCreateRawContainer(element) {
        const output = document.createElement(HTML_CONTAINER);

        output.innerHTML = this.reduceChildrenToInnerHTML(element);

        return output;
    }

    /**
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} element
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} newElement
     */
    useRendererUpdateRawContainersAgainstEachOthers(element, newElement) {
        const oldInnerHTML = this.reduceChildrenToInnerHTML(element);
        const newInnerHTML = this.reduceChildrenToInnerHTML(newElement);

        if (oldInnerHTML !== newInnerHTML) {
            element.instance.innerHTML = newInnerHTML;
        }
    }
}

module.exports = RecursiveWebRenderer;
