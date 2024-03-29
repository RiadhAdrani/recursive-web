import { RecursiveConsole, RecursiveRenderer } from "../../use.js";
import RecursiveCSSOM from "../css/";
import { HTML_CONTAINER, HTML_NS } from "../constants/index.js";
import { renderValue } from "../css/properties";
import {
    ELEMENT_TYPE_TEXT_NODE,
    ELEMENT_TYPE_FRAGMENT,
} from "@riadh-adrani/recursive/packages/constants/index.js";
import {
    isEvent,
    isAttribute,
    isToggleableAttribute,
    getAttributeName,
    getEvent,
    eventHasHandler,
    renderAttributeValue,
} from "../dom/index.js";
import { hasProperty, isBlank } from "@riadh-adrani/utility-js";
import {
    createElement as createEl,
    createTextNode as createText,
    isElementInDocument,
    injectNode,
    changeChildPosition,
    getElementPosition,
    setTextNodeData,
    setEvent,
    replaceNodeWith,
    removeNode,
    removeEvent,
    removeAttribute,
    setAttribute,
} from "@riadh-adrani/dom-control-js";

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
     * @param {import("../../lib.js").EventCallback} callback
     * @param {HTMLElement} instance
     */
    setElementEvent(onEventName, callback, instance) {
        let _callback = () => {};

        if (typeof callback === "function") {
            _callback = callback;
        } else if (Array.isArray(callback)) {
            _callback = (e) => {
                for (let callbackItem of callback) {
                    const res = callbackItem(e);

                    if (res !== undefined) return res;
                }
            };
        }

        setEvent(
            onEventName,
            (e) =>
                this.orchestrator.batchCallback(() => {
                    _callback(e);
                }),
            instance
        );

        // instance[onEventName] = (e) =>
        //     this.orchestrator.batchCallback(() => {
        //         _callback(e);
        //     }, onEventName);
    }

    /**
     *
     * @param {string} attribute
     * @param {string | Array<string>} value
     * @param {HTMLElement} instance
     */
    setElementAttribute(attribute, value, instance) {
        const _value = renderAttributeValue(attribute, value);

        const _attributeName = getAttributeName(attribute);

        // TODO : setAttribute(_attributeName, _value, instance);

        if (isToggleableAttribute(attribute)) {
            instance.toggleAttribute(_attributeName, _value === true);
        } else {
            instance.setAttribute(_attributeName, _value);

            try {
                // So we need to double check it with this one
                // which does not work on svg elements
                // and throws an error
                // hence the need of a try catch block
                instance[attribute] = _value;
            } catch (error) {
                RecursiveConsole.warn(
                    "Recursive Web Renderer : Something went wrong when trying to update an attribute."
                );
            }
        }
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
    shouldStyleBeScoped(element) {
        if (!this.isExternalStyleSheet(element.style)) return false;

        if (element.style.scoped === true) return true;

        if (element.style.scoped !== false && this.scopedStyle) return true;

        return false;
    }

    /**
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} element
     */
    resolveClassName(element) {
        if (
            [ELEMENT_TYPE_FRAGMENT, ELEMENT_TYPE_TEXT_NODE].includes(
                element.elementType
            )
        ) {
            return;
        }

        if (!hasProperty(element, "style")) return;

        if (typeof element.style !== "object") return;

        let styleClassName = "";

        if (
            hasProperty(element, "style") &&
            hasProperty(element.style, "className") &&
            !isBlank(element.style.className)
        ) {
            styleClassName += element.style.className;
        }

        if (this.shouldStyleBeScoped(element)) {
            styleClassName += "-_" + this.transformUid(element.uid);
        }

        element.style.className = styleClassName;
        element.attributes.className = element.attributes.className
            ? renderAttributeValue("className", element.attributes.className)
            : "";

        const attrClassName =
            element.attributes.className + " " + styleClassName;

        element.attributes.className = attrClassName.trim();
    }

    /**

     * @param {object} styleSheet
     */
    isExternalStyleSheet(styleSheet) {
        return (
            typeof styleSheet === "object" &&
            Object.keys(styleSheet).filter(
                (key) => !["inline", "scoped", "className"].includes(key)
            ).length > 0
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
            const innerHTML =
                child.elementType === ELEMENT_TYPE_TEXT_NODE
                    ? child.children
                    : this.renderInstance(child).outerHTML;

            return value + innerHTML;
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
            return createText(element.children);

        let ns = HTML_NS;

        if (element.rendererOptions && element.rendererOptions.ns) {
            ns = element.rendererOptions.ns;
        }

        return createEl(element.elementType, { namespace: ns });
    }

    /**
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} element
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} newElement
     */
    useRendererUpdateText(element, newElement) {
        setTextNodeData(element.instance, newElement.children);
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
        return isElementInDocument(element.instance);
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
            this.setElementAttribute(attribute, value, instance);
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
            this.setElementAttribute(attribute, value, instance);
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

        removeEvent(eventData.on, instance);
    }

    /**
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} element
     * @param {HTMLElement} instance
     */
    useRendererInjectChild(child, instance) {
        injectNode(this.renderInstance(child), instance);
    }

    useRendererClean() {}

    useRendererRenderTree() {
        const tree = this.renderInstance(this.current);

        // this.root.append(tree);

        injectNode(tree, this.root);
    }

    /**
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} attribute
     * @param {HTMLElement} instance
     */
    useRendererRemoveAttribute(attribute, instance) {
        // works with some attributes.
        // instance.removeAttribute(attribute);

        // just making sure.
        // instance[attribute] = "";

        removeAttribute(attribute, instance);
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

        // if (typeof index == "number" && parent.childNodes.length > index) {
        //     const parent = element.parent.instance;

        //     const child = parent.childNodes.item(index);

        //     parent.insertBefore(this.renderInstance(element), child);
        // } else {
        //     parent.append(this.renderInstance(element));
        // }

        injectNode(this.renderInstance(element), parent, index);
    }

    /**
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} element
     * @param {number} newPosition
     */
    useRendererChangeElementPosition(element, newPosition) {
        // element.parent.instance.insertBefore(
        //     element.instance,
        //     element.parent.instance.children[newPosition]
        // );

        changeChildPosition(element.instance, newPosition);
    }

    /**
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} element
     */
    useRendererGetElementPosition(element) {
        // return Array.from(element.instance.parentElement.children).indexOf(
        //     element.instance
        // );

        return getElementPosition(element.instance);
    }

    /**
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} element
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} newElement
     */
    useRendererReplaceElement(element, newElement) {
        // element.instance.replaceWith(this.renderInstance(newElement));

        replaceNodeWith(element.instance, this.renderInstance(newElement));
    }

    /**
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} element
     */
    useRendererRemoveElement(element) {
        removeNode(element.instance);
    }

    /**
     * @param {import("@riadh-adrani/recursive/lib.js").RecursiveElement} element
     */
    useRendererCreateRawContainer(element) {
        const output = createEl(HTML_CONTAINER);

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

export default RecursiveWebRenderer;
