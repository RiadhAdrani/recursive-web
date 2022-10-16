/**
 * ## HTMLAttributes
 */
export interface HTMLAttributes {
    /**
     * ## className
     * Often used with CSS to style elements with common properties.
     */
    className: string;
    /**
     * ## id
     * Often used with CSS to style a specific element. The value of this attribute must be unique.
     */
    id: string;
    /**
     * ## lang
     * Defines the language used in the element.
     */
    lang: string;
    /**
     * ## accessKey
     * Keyboard shortcut to activate or add focus to the element.
     */
    accessKey: string;
    /**
     * ## autoCapitalize
     * Sets whether input is automatically capitalized when entered by user
     */
    autoCapitalize:
        | "off"
        | "none"
        | "on"
        | "sentences"
        | "words"
        | "characters";
    /**
     * ## contentEditable
     * Indicates whether the element's content is editable.
     */
    contentEditable: "true" | "false";
    /**
     * ## contextMenu
     * Defines the ID of a ``<menu>`` element which will serve as the element's context menu.
     */
    contextMenu: string;
    /**
     * ## compact
     */
    compact: string;
    /**
     * ## dir
     * Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)
     */
    dir: "ltr" | "rtl" | "auto";
    /**
     * ## draggable
     * Defines whether the element can be dragged.
     */
    draggable: "true" | "false";
    /**
     * ## hidden
     * Prevents rendering of given element, while keeping child elements, e.g. script elements, active.
     */
    hidden: boolean;
    /**
     * ## itemProp
     */
    itemProp: string;
    /**
     * ## playsInline
     */
    playsInline: string;
    /**
     * ## role
     * Defines an explicit role for an element for use by assistive technologies.
     */
    role: string;
    /**
     * ## slot
     * Assigns a slot in a shadow DOM shadow tree to an element.
     */
    slot: string;
    /**
     * ## spellCheck
     * Indicates whether spell checking is allowed for the element.
     */
    spellCheck: "true" | "false";
    /**
     * ## tabIndex
     * Overrides the browser's default tab order and follows the one specified instead.
     */
    tabIndex: string;
    /**
     * ## title
     * Text to be displayed in a tooltip when hovering over the element.
     */
    title: string;
    /**
     * ## translate
     * Specify whether an element's attribute values and the values of its Text node children are to be translated when the page is localized, or whether to leave them unchanged.
     */
    translate: "yes" | "no";
    /**
     * ## ariaAutocomplete
     * The aria-autocomplete attribute indicates whether inputting text could trigger display of one or more predictions of the user's intended value for a combobox, searchbox, or textbox and specifies how predictions will be presented if they are made.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete}
     */
    ariaAutocomplete: "none" | "inline" | "list" | "both";
    /**
     * ## ariaChecked
     * The aria-checked attribute indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked}
     */
    ariaChecked: "false" | "true" | "mixed" | "undefined";
    /**
     * ## ariaDisabled
     * The aria-disabled state indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-disabled}
     */
    ariaDisabled: "true" | "false";
    /**
     * ## ariaErrormessage
     * The aria-errormessage attribute on an object identifies the element that provides an error message for that object.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage}
     */
    ariaErrormessage: string;
    /**
     * ## ariaExpanded
     * The aria-expanded attribute is set on an element to indicate if a control is expanded or collapsed, and whether or not its child elements are displayed or hidden.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded}
     */
    ariaExpanded: string;
    /**
     * ## ariaHaspopup
     * The aria-haspopup attribute indicates the availability and type of interactive popup element that can be triggered by the element on which the attribute is set.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup}
     */
    ariaHaspopup: string;
    /**
     * ## ariaHidden
     * The aria-hidden state indicates whether the element is exposed to an accessibility API.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden}
     */
    ariaHidden: string;
    /**
     * ## ariaInvalid
     * The aria-invalid state indicates the entered value does not conform to the format expected by the application.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-invalid}
     */
    ariaInvalid: string;
    /**
     * ## ariaLabel
     * The aria-label attribute defines a string value that labels an interactive element.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label}
     */
    ariaLabel: string;
    /**
     * ## ariaLevel
     * The aria-level attribute defines the hierarchical level of an element within a structure.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-level}
     */
    ariaLevel: string;
    /**
     * ## ariaModal
     * The aria-modal attribute indicates whether an element is modal when displayed.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-modal}
     */
    ariaModal: string;
    /**
     * ## ariaMultiline
     * The aria-multiline attribute indicates whether a textbox accepts multiple lines of input or only a single line.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-multiline}
     */
    ariaMultiline: string;
    /**
     * ## ariaMultiselectable
     * The aria-multiselectable attribute indicates that the user may select more than one item from the current selectable descendants.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable}
     */
    ariaMultiselectable: string;
    /**
     * ## ariaOrientation
     * The aria-orientation attribute indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-orientation}
     */
    ariaOrientation: string;
    /**
     * ## ariaPlaceholder
     * The aria-placeholder attribute defines a short hint (a word or short phrase) intended to help the user with data entry when a form control has no value. The hint can be a sample value or a brief description of the expected format.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-placeholder}
     */
    ariaPlaceholder: string;
    /**
     * ## ariaPressed
     * The aria-pressed attribute indicates the current "pressed" state of a toggle button.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-pressed}
     */
    ariaPressed: string;
    /**
     * ## ariaReadonly
     * The aria-readonly attribute indicates that the element is not editable, but is otherwise operable.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-readonly}
     */
    ariaReadonly: string;
    /**
     * ## ariaRequired
     * The aria-required attribute indicates that user input is required on the element before a form may be submitted.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-required}
     */
    ariaRequired: string;
    /**
     * ## ariaSelected
     * The aria-selected attribute indicates the current "selected" state of various widgets.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected}
     */
    ariaSelected: string;
    /**
     * ## ariaSort
     * The aria-sort attribute indicates if items in a table or grid are sorted in ascending or descending order.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-sort}
     */
    ariaSort: string;
    /**
     * ## ariaValuemax
     * The aria-valuemax attribute defines the maximum allowed value for a range widget.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax}
     */
    ariaValuemax: string;
    /**
     * ## ariaValuemin
     * The aria-valuemin attribute defines the minimum allowed value for a range widget.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin}
     */
    ariaValuemin: string;
    /**
     * ## ariaValuenow
     * The aria-valuenow attribute defines the current value for a range widget.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow}
     */
    ariaValuenow: string;
    /**
     * ## ariaValuetext
     * The aria-valuetext attribute defines the human readable text alternative of aria-valuenow for a range widget.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext}
     */
    ariaValuetext: string;
    /**
     * ## ariaBusy
     * Used in ARIA live regions, the global aria-busy state indicates an element is being modified and that assistive technologies may want to wait until the changes are complete before informing the user about the update.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-busy}
     */
    ariaBusy: string;
    /**
     * ## ariaLive
     * The global aria-live attribute indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live}
     */
    ariaLive: string;
    /**
     * ## ariaRelevant
     * Used in ARIA live regions, the global aria-relevant attribute indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-relevant}
     */
    ariaRelevant: string;
    /**
     * ## ariaAtomic
     * In ARIA live regions, the global aria-atomic attribute indicates whether assistive technologies such as a screen reader will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-atomic}
     */
    ariaAtomic: string;
    /**
     * ## ariaDropeffect
     * The global aria-dropeffect attribute indicates what functions may be performed when a dragged object is released on the drop target. Deprecated
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-dropeffect}
     */
    ariaDropeffect: string;
    /**
     * ## ariaGrabbed
     * The aria-grabbed state indicates an element's "grabbed" state in a drag-and-drop operation. Deprecated
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-grabbed}
     */
    ariaGrabbed: string;
    /**
     * ## ariaActivedescendant
     * The aria-activedescendant attribute identifies the currently active element when focus is on a composite widget, combobox, textbox, group, or application.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant}
     */
    ariaActivedescendant: string;
    /**
     * ## ariaColcount
     * The aria-colcount attribute defines the total number of columns in a table, grid, or treegrid when not all columns are present in the DOM.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colcount}
     */
    ariaColcount: string;
    /**
     * ## ariaColindex
     * The aria-colindex attribute defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colindex}
     */
    ariaColindex: string;
    /**
     * ## ariaColspan
     * The aria-colspan attribute defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colspan}
     */
    ariaColspan: string;
    /**
     * ## ariaControls
     * The global aria-controls property identifies the element (or elements) whose contents or presence are controlled by the element on which this attribute is set.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls}
     */
    ariaControls: string;
    /**
     * ## ariaDescribedby
     * The global aria-describedby attribute identifies the element (or elements) that describes the element on which the attribute is set.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby}
     */
    ariaDescribedby: string;
    /**
     * ## ariaDescription
     * The global aria-description attribute defines a string value that describes or annotates the current element.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-description}
     */
    ariaDescription: string;
    /**
     * ## ariaDetails
     * The global aria-details attribute identifies the element (or elements) that provide additional information related to the object.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-details}
     */
    ariaDetails: string;
    /**
     * ## ariaFlowto
     * The global aria-flowto attribute identifies the next element (or elements) in an alternate reading order of content. This allows assistive technology to override the general default of reading in document source order at the user's discretion.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-flowto}
     */
    ariaFlowto: string;
    /**
     * ## ariaLabelledby
     * The aria-labelledby attribute identifies the element (or elements) that labels the element it is applied to.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby}
     */
    ariaLabelledby: string;
    /**
     * ## ariaOwns
     * The aria-owns attribute identifies an element (or elements) in order to define a visual, functional, or contextual relationship between a parent and its child elements when the DOM hierarchy cannot be used to represent the relationship.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-owns}
     */
    ariaOwns: string;
    /**
     * ## ariaPosinset
     * The aria-posinset attribute defines an element's number or position in the current set of listitems or treeitems when not all items are present in the DOM.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-posinset}
     */
    ariaPosinset: string;
    /**
     * ## ariaRowcount
     * The aria-rowcount attribute defines the total number of rows in a table, grid, or treegrid.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount}
     */
    ariaRowcount: string;
    /**
     * ## ariaRowindex
     * The aria-rowindex attribute defines an element's position with respect to the total number of rows within a table, grid, or treegrid.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex}
     */
    ariaRowindex: string;
    /**
     * ## ariaRowspan
     * The aria-rowspan attribute defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan}
     */
    ariaRowspan: string;
    /**
     * ## ariaSetsize
     * The aria-setsize attribute defines the number of items in the current set of listitems or treeitems when not all items in the set are present in the DOM.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-setsize}
     */
    ariaSetsize: string;
    /**
     * ## ariaCurrent
     * A non-null aria-current state on an element indicates that this element represents the current item within a container or set of related elements.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current}
     */
    ariaCurrent: string;
    /**
     * ## ariaKeyshortcuts
     * The global aria-keyshortcuts attribute indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-keyshortcuts}
     */
    ariaKeyshortcuts: string;
    /**
     * ## ariaRoledescription
     * The aria-roledescription attribute defines a human-readable, author-localized description for the role of an element.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription}
     */
    ariaRoledescription: string;
}
