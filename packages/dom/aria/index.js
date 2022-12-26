import { attribute } from "../../templates";

/**
 * @credit MDN (2022) - https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes
 */
export default {
    ariaAutocomplete: attribute({
        name: "aria-autocomplete",
        values: ["none", "inline", "list", "both"],
        els: true,
        docs: [
            "The aria-autocomplete attribute indicates whether inputting text could trigger display of one or more predictions of the user's intended value for a combobox, searchbox, or textbox and specifies how predictions will be presented if they are made.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete",
        ],
    }),
    ariaChecked: attribute({
        name: "aria-checked",
        values: ["false", "true", "mixed", "undefined"],
        els: true,
        docs: [
            'The aria-checked attribute indicates the current "checked" state of checkboxes, radio buttons, and other widgets.',
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked",
        ],
    }),
    ariaDisabled: attribute({
        name: "aria-disabled",
        values: [true, false],
        els: true,
        docs: [
            "The aria-disabled state indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-disabled",
        ],
    }),
    ariaErrormessage: attribute({
        name: "aria-errormessage",
        values: "string",
        els: true,
        docs: [
            "The aria-errormessage attribute on an object identifies the element that provides an error message for that object.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage",
        ],
    }),
    ariaExpanded: attribute({
        name: "aria-expanded",
        values: "string",
        els: true,
        docs: [
            "The aria-expanded attribute is set on an element to indicate if a control is expanded or collapsed, and whether or not its child elements are displayed or hidden.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded",
        ],
    }),
    ariaHaspopup: attribute({
        name: "aria-haspopup",
        values: "string",
        els: true,
        docs: [
            "The aria-haspopup attribute indicates the availability and type of interactive popup element that can be triggered by the element on which the attribute is set.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup",
        ],
    }),
    ariaHidden: attribute({
        name: "aria-hidden",
        values: "string",
        els: true,
        docs: [
            "The aria-hidden state indicates whether the element is exposed to an accessibility API.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden",
        ],
    }),
    ariaInvalid: attribute({
        name: "aria-invalid",
        values: "string",
        els: true,
        docs: [
            "The aria-invalid state indicates the entered value does not conform to the format expected by the application.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-invalid",
        ],
    }),
    ariaLabel: attribute({
        name: "aria-label",
        values: "string",
        els: true,
        docs: [
            "The aria-label attribute defines a string value that labels an interactive element.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label",
        ],
    }),
    ariaLevel: attribute({
        name: "aria-level",
        values: "string",
        els: true,
        docs: [
            "The aria-level attribute defines the hierarchical level of an element within a structure.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-level",
        ],
    }),
    ariaModal: attribute({
        name: "aria-modal",
        values: "string",
        els: true,
        docs: [
            "The aria-modal attribute indicates whether an element is modal when displayed.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-modal",
        ],
    }),
    ariaMultiline: attribute({
        name: "aria-multiline",
        values: "string",
        els: true,
        docs: [
            "The aria-multiline attribute indicates whether a textbox accepts multiple lines of input or only a single line.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-multiline",
        ],
    }),
    ariaMultiselectable: attribute({
        name: "aria-multiselectable",
        values: "string",
        els: true,
        docs: [
            "The aria-multiselectable attribute indicates that the user may select more than one item from the current selectable descendants.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable",
        ],
    }),
    ariaOrientation: attribute({
        name: "aria-orientation",
        values: "string",
        els: true,
        docs: [
            "The aria-orientation attribute indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-orientation",
        ],
    }),
    ariaPlaceholder: attribute({
        name: "aria-placeholder",
        values: "string",
        els: true,
        docs: [
            "The aria-placeholder attribute defines a short hint (a word or short phrase) intended to help the user with data entry when a form control has no value. The hint can be a sample value or a brief description of the expected format.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-placeholder",
        ],
    }),
    ariaPressed: attribute({
        name: "aria-pressed",
        values: "string",
        els: true,
        docs: [
            'The aria-pressed attribute indicates the current "pressed" state of a toggle button.',
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-pressed",
        ],
    }),
    ariaReadonly: attribute({
        name: "aria-readonly",
        values: "string",
        els: true,
        docs: [
            "The aria-readonly attribute indicates that the element is not editable, but is otherwise operable.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-readonly",
        ],
    }),
    ariaRequired: attribute({
        name: "aria-required",
        values: "string",
        els: true,
        docs: [
            "The aria-required attribute indicates that user input is required on the element before a form may be submitted.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-required",
        ],
    }),
    ariaSelected: attribute({
        name: "aria-selected",
        values: "string",
        els: true,
        docs: [
            'The aria-selected attribute indicates the current "selected" state of various widgets.',
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected",
        ],
    }),
    ariaSort: attribute({
        name: "aria-sort",
        values: "string",
        els: true,
        docs: [
            "The aria-sort attribute indicates if items in a table or grid are sorted in ascending or descending order.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-sort",
        ],
    }),
    ariaValuemax: attribute({
        name: "aria-valuemax",
        values: "string",
        els: true,
        docs: [
            "The aria-valuemax attribute defines the maximum allowed value for a range widget.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax",
        ],
    }),
    ariaValuemin: attribute({
        name: "aria-valuemin",
        values: "string",
        els: true,
        docs: [
            "The aria-valuemin attribute defines the minimum allowed value for a range widget.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin",
        ],
    }),
    ariaValuenow: attribute({
        name: "aria-valuenow",
        values: "string",
        els: true,
        docs: [
            "The aria-valuenow attribute defines the current value for a range widget.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow",
        ],
    }),
    ariaValuetext: attribute({
        name: "aria-valuetext",
        values: "string",
        els: true,
        docs: [
            "The aria-valuetext attribute defines the human readable text alternative of aria-valuenow for a range widget.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext",
        ],
    }),
    ariaBusy: attribute({
        name: "aria-busy",
        values: "string",
        els: true,
        docs: [
            "Used in ARIA live regions, the global aria-busy state indicates an element is being modified and that assistive technologies may want to wait until the changes are complete before informing the user about the update.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-busy",
        ],
    }),
    ariaLive: attribute({
        name: "aria-live",
        values: "string",
        els: true,
        docs: [
            "The global aria-live attribute indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live",
        ],
    }),
    ariaRelevant: attribute({
        name: "aria-relevant",
        values: "string",
        els: true,
        docs: [
            "Used in ARIA live regions, the global aria-relevant attribute indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-relevant",
        ],
    }),
    ariaAtomic: attribute({
        name: "aria-atomic",
        values: "string",
        els: true,
        docs: [
            "In ARIA live regions, the global aria-atomic attribute indicates whether assistive technologies such as a screen reader will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-atomic",
        ],
    }),
    ariaDropeffect: attribute({
        name: "aria-dropeffect",
        values: "string",
        els: true,
        docs: [
            "The global aria-dropeffect attribute indicates what functions may be performed when a dragged object is released on the drop target. Deprecated",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-dropeffect",
        ],
    }),
    ariaGrabbed: attribute({
        name: "aria-grabbed",
        values: "string",
        els: true,
        docs: [
            `The aria-grabbed state indicates an element's "grabbed" state in a drag-and-drop operation. Deprecated`,
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-grabbed",
        ],
    }),
    ariaActivedescendant: attribute({
        name: "aria-activedescendant",
        values: "string",
        els: true,
        docs: [
            "The aria-activedescendant attribute identifies the currently active element when focus is on a composite widget, combobox, textbox, group, or application.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant",
        ],
    }),
    ariaColcount: attribute({
        name: "aria-colcount",
        values: "string",
        els: true,
        docs: [
            "The aria-colcount attribute defines the total number of columns in a table, grid, or treegrid when not all columns are present in the DOM.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colcount",
        ],
    }),
    ariaColindex: attribute({
        name: "aria-colindex",
        values: "string",
        els: true,
        docs: [
            "The aria-colindex attribute defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colindex",
        ],
    }),
    ariaColspan: attribute({
        name: "aria-colspan",
        values: "string",
        els: true,
        docs: [
            "The aria-colspan attribute defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colspan",
        ],
    }),
    ariaControls: attribute({
        name: "aria-controls",
        values: "string",
        els: true,
        docs: [
            "The global aria-controls property identifies the element (or elements) whose contents or presence are controlled by the element on which this attribute is set.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls",
        ],
    }),
    ariaDescribedby: attribute({
        name: "aria-describedby",
        values: "string",
        els: true,
        docs: [
            "The global aria-describedby attribute identifies the element (or elements) that describes the element on which the attribute is set.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby",
        ],
    }),
    ariaDescription: attribute({
        name: "aria-description",
        values: "string",
        els: true,
        docs: [
            "The global aria-description attribute defines a string value that describes or annotates the current element.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-description",
        ],
    }),
    ariaDetails: attribute({
        name: "aria-details",
        values: "string",
        els: true,
        docs: [
            "The global aria-details attribute identifies the element (or elements) that provide additional information related to the object.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-details",
        ],
    }),
    ariaFlowto: attribute({
        name: "aria-flowto",
        values: "string",
        els: true,
        docs: [
            "The global aria-flowto attribute identifies the next element (or elements) in an alternate reading order of content. This allows assistive technology to override the general default of reading in document source order at the user's discretion.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-flowto",
        ],
    }),
    ariaLabelledby: attribute({
        name: "aria-labelledby",
        values: "string",
        els: true,
        docs: [
            "The aria-labelledby attribute identifies the element (or elements) that labels the element it is applied to.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby",
        ],
    }),
    ariaOwns: attribute({
        name: "aria-owns",
        values: "string",
        els: true,
        docs: [
            "The aria-owns attribute identifies an element (or elements) in order to define a visual, functional, or contextual relationship between a parent and its child elements when the DOM hierarchy cannot be used to represent the relationship.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-owns",
        ],
    }),
    ariaPosinset: attribute({
        name: "aria-posinset",
        values: "string",
        els: true,
        docs: [
            "The aria-posinset attribute defines an element's number or position in the current set of listitems or treeitems when not all items are present in the DOM.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-posinset",
        ],
    }),
    ariaRowcount: attribute({
        name: "aria-rowcount",
        values: "string",
        els: true,
        docs: [
            "The aria-rowcount attribute defines the total number of rows in a table, grid, or treegrid.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount",
        ],
    }),
    ariaRowindex: attribute({
        name: "aria-rowindex",
        values: "string",
        els: true,
        docs: [
            "The aria-rowindex attribute defines an element's position with respect to the total number of rows within a table, grid, or treegrid.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex",
        ],
    }),
    ariaRowspan: attribute({
        name: "aria-rowspan",
        values: "string",
        els: true,
        docs: [
            "The aria-rowspan attribute defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan",
        ],
    }),
    ariaSetsize: attribute({
        name: "aria-setsize",
        values: "string",
        els: true,
        docs: [
            "The aria-setsize attribute defines the number of items in the current set of listitems or treeitems when not all items in the set are present in the DOM.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-setsize",
        ],
    }),
    ariaCurrent: attribute({
        name: "aria-current",
        values: "string",
        els: true,
        docs: [
            "A non-null aria-current state on an element indicates that this element represents the current item within a container or set of related elements.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current",
        ],
    }),
    ariaKeyshortcuts: attribute({
        name: "aria-keyshortcuts",
        values: "string",
        els: true,
        docs: [
            "The global aria-keyshortcuts attribute indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-keyshortcuts",
        ],
    }),
    ariaRoledescription: attribute({
        name: "aria-roledescription",
        values: "string",
        els: true,
        docs: [
            "The aria-roledescription attribute defines a human-readable, author-localized description for the role of an element.",
        ],
        links: [
            "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription",
        ],
    }),
};
