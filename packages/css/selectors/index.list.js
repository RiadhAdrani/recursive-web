const { selector } = require("../../templates");

const ListOfCssSelectors = {
    normal: selector({
        css: "",
        docs: [
            "## ``.element``",
            "Define style for the normal state of the element.",
        ],
    }),
    active: selector({
        css: ":active",
        docs: [
            "## ``:active ``",
            "Define style for the element when clicked.",
            "",
            "@link {https://developer.mozilla.org/en-US/docs/Web/CSS/:active}",
        ],
    }),
    anyLink: selector({
        css: ":any-link",
        docs: [
            "## ``:any-link ``",
            "Define the style that represents an element",
            "that acts as the source anchor of a hyperlink,",
            "independent of whether it has been visited.",
            "",
            "@link {https://developer.mozilla.org/en-US/docs/Web/CSS/:any-link}",
        ],
    }),
    autofill: selector({
        css: ":autofill",
        docs: [
            "## `:autofill `",
            "The :autofill CSS pseudo-class matches when an ``<input>``",
            "element has its value autofilled by the browser.",
            "The class stops matching if the user edits the field.",
            "",
            "@link {https://developer.mozilla.org/en-US/docs/Web/CSS/:autofill}",
        ],
    }),
    checked: selector({
        css: ":checked",
        docs: [
            "## ``:checked ``",
            "The ``:checked`` CSS pseudo-class selector represents any radio",
            '(`<input type="radio">`), checkbox (``<input type="checkbox">``),',
            "or option (``<option>`` in a ``<select>``)",
            "element that is checked or toggled to an on state.",
            "",
            "@link {https://developer.mozilla.org/en-US/docs/Web/CSS/:checked}",
        ],
    }),
    default: selector({
        css: ":default",
        docs: [
            "## ``:default ``",
            "The :default CSS pseudo-class selects",
            "form elements that are the default in a group of related elements.",
            "",
            "@link {https://developer.mozilla.org/en-US/docs/Web/CSS/:default}",
        ],
    }),
    defined: selector({
        css: ":defined",
        docs: [
            "## `:defined `",
            "The :defined CSS pseudo-class",
            "represents any element that has been defined.",
            "This includes any standard element built in to the browser,",
            "and custom elements that have been successfully defined",
            "(i.e. with the CustomElementRegistry.define() method).",
            "",
            "@link {https://developer.mozilla.org/en-US/docs/Web/CSS/:defined}",
        ],
    }),
    disabled: selector({
        css: ":disabled",
        docs: [
            "## `:disabled `",
            "The :disabled CSS pseudo-class represents any disabled element.",
            "An element is disabled if it can't be activated",
            "(selected, clicked on, typed into, etc.) or accept focus.",
            "The element also has an enabled state,",
            "in which it can be activated or accept focus.",
            "",
            "@link {https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled}",
        ],
    }),
    empty: selector({
        css: ":empty",
        docs: [
            "## `:empty `",
            "The :empty CSS pseudo-class represents any element that has no children.",
            "Children can be either element nodes or text (including whitespace).",
            "Comments, processing instructions,",
            "and CSS content do not affect whether an element is considered empty.",
            "@link {https://developer.mozilla.org/en-US/docs/Web/CSS/:empty}",
        ],
    }),
    enabled: selector({
        css: ":enabled",
        docs: [
            "## `:enabled `",
            "The :enabled CSS pseudo-class represents any enabled element.",
            "An element is enabled if it can be activated",
            "(selected, clicked on, typed into, etc.) or accept focus.",
            "The element also has a disabled state,",
            "in which it can't be activated or accept focus.",
            "",
            "@link {https://developer.mozilla.org/en-US/docs/Web/CSS/:enabled}",
        ],
    }),
    first: selector({
        css: ":first",
        docs: [
            "## `:first `",
            "The :first CSS pseudo-class, used with the ``@page`` at-rule,",
            "represents the first page of a printed document.",
            "",
            "@link {https://developer.mozilla.org/en-US/docs/Web/CSS/:first}",
        ],
    }),
    firstChild: selector({
        css: ":first-child",
        docs: [
            "## `:first-child `",
            "The :first-child CSS pseudo-class",
            "represents the first element among a group of sibling elements.",
            "",
            "@link {https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child}",
        ],
    }),
    firstOfType: selector({
        css: ":first-of-type",
        docs: [
            "## `:first-of-type `",
            "The :first-of-type CSS pseudo-class represents",
            "the first element of its type among a group of sibling elements.",
            "",
            "@link {https://developer.mozilla.org/en-US/docs/Web/CSS/:first-of-type}",
        ],
    }),
    fullscreen: selector({
        css: "fullscreen",
        docs: [
            "## `:fullscreen `",
            "The :fullscreen CSS pseudo-class",
            "matches every element which is currently in fullscreen mode.",
            "If multiple elements have been put into fullscreen mode,",
            "this selects them all.",
            "",
            "@link {https://developer.mozilla.org/en-US/docs/Web/CSS/:fullscreen}",
        ],
    }),
    focus: selector({
        css: ":focus",
        docs: [
            "## `:focus `",
            "The :focus CSS pseudo-class represents an element",
            "(such as a form input) that has received focus.",
            "It is generally triggered when the user clicks",
            "or taps on an element or selects it with the keyboard's Tab key.",
            "",
            "@link {https://developer.mozilla.org/en-US/docs/Web/CSS/:focus}",
        ],
    }),
    focusVisible: selector({
        css: ":focus-visible",
        docs: [
            "## `focus-visible`",
            "The :focus-visible pseudo-class applies",
            "while an element matches the :focus pseudo-class and the UA (User Agent)",
            "determines via heuristics that the focus should be made evident on the element.",
            '(Many browsers show a "focus ring" by default in this case.)',
            "",
            "@link {https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible}",
        ],
    }),
    focusWithin: selector({
        css: ":focus-within",
        docs: [
            "## `:focus-within`",
            "The :focus-within CSS pseudo-class",
            "matches an element if the element or any of its descendants are focused.",
            "In other words, it represents an element that is itself matched",
            "by the :focus pseudo-class or has a descendant that is matched",
            "by :focus. (This includes descendants in shadow trees.)",
            "",
            "@link {https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within}",
        ],
    }),
    host: selector({
        css: ":host",
        docs: [
            "## `:host`",
            "The :host CSS pseudo-class",
            "selects the shadow host of the shadow DOM",
            "containing the CSS it is used inside — in other words,",
            "this allows you to select a custom element from inside its shadow DOM.",
            "",
            "@link {https://developer.mozilla.org/en-US/docs/Web/CSS/:host}",
        ],
    }),
    hover: selector({
        css: ":hover",
        docs: [
            "## `:hover`",
            "The :hover CSS pseudo-class",
            "matches when the user interacts with an element with a pointing device,",
            "but does not necessarily activate it.",
            "It is generally triggered",
            "when the user hovers over an element with the cursor (mouse pointer).",
        ],
    }),
    indeterminate: selector({
        css: ":indeterminate",
        docs: [
            "## `:indeterminate`",
            "The :indeterminate CSS pseudo-class",
            "represents any form element whose state is indeterminate,",
            "such as checkboxes which have their HTML indeterminate attribute set to true,",
            "radio buttons which are members of a group in which all radio buttons are unchecked,",
            "and indeterminate ``<progress>`` elements.",
        ],
    }),
    inRange: selector({
        css: ":in-range",
        docs: [
            "`:in-range`",
            "The :in-range CSS pseudo-class represents an ``<input>`` element",
            "whose current value is within the range limits specified by the min and max attributes.",
        ],
    }),
    invalid: selector({
        css: ":invalid",
        docs: [
            "## `:invalid`",
            "The :invalid CSS pseudo-class represents",
            "any ``<form>``, ``<fieldset>``, ``<input>``",
            "or other ``<form>`` element whose contents fail to validate.",
        ],
    }),
    lastChild: selector({
        css: ":last-child",
        docs: [
            "## `:last-child`",
            "The :last-child CSS pseudo-class",
            "represents the last element among a group of sibling elements.",
        ],
    }),
    lastOfType: selector({
        css: ":last-of-type",
        docs: [
            "## `:last-of-type`",
            "The :last-of-type CSS pseudo-class",
            "represents the last element of its type among a group of sibling elements.",
        ],
    }),
    left: selector({
        css: ":left",
        docs: [
            "## `:left`",
            "The :left CSS pseudo-class,",
            "used with the ``@page`` at-rule,",
            "represents all left-hand pages of a printed document.",
        ],
    }),
    link: selector({
        css: ":link",
        docs: [
            "## `:link`",
            "The :link CSS pseudo-class",
            "represents an element that has not yet been visited.",
            "It matches every unvisited ``<a>`` or ``<area>`` element",
            "that has an href attribute.",
        ],
    }),
    modal: selector({
        css: ":modal",
        docs: [
            "## `:modal`",
            "The :modal CSS pseudo-class",
            "matches an element that is in a state",
            "in which it excludes all interaction",
            "with elements outside it until",
            "the interaction has been dismissed.",
            "Multiple elements can be selected",
            "by the :modal pseudo-class at the same time,",
            "but only one of them will be active and able to receive input.",
        ],
    }),
    onlyChild: selector({
        css: ":only-child",
        docs: [
            "## `:only-child`",
            "The :only-child CSS pseudo-class",
            "represents an element without any siblings.",
            "This is the same as :first-child:last-child",
            "or :nth-child(1):nth-last-child(1),",
            "but with a lower specificity.",
        ],
    }),
    onlyOfType: selector({
        css: ":only-of-type",
        docs: [
            "## `:only-of-type`",
            "The :only-of-type CSS pseudo-class",
            "represents an element that has no siblings of the same type.",
        ],
    }),
    optional: selector({
        css: ":optional",
        docs: [
            "## `:optional`",
            "The :optional CSS pseudo-class represents any ``<input>``",
            ,
            "``<select>``, or ``<textarea>`` element",
            "that does not have the required attribute set on it.",
        ],
    }),
    outOfRange: selector({
        css: ":out-of-range",
        docs: [
            "## `:out-of-range`",
            "The :out-of-range CSS pseudo-class",
            "represents an ``<input>`` element whose current value",
            "is outside the range limits specified",
            "by the min and max attributes.",
        ],
    }),
    pictureInPicutre: selector({
        css: ":picture-in-picture",
        docs: [
            "## `:picture-in-picture`",
            "The :picture-in-picture CSS pseudo-class",
            "matches the element which is currently",
            "in picture-in-picture mode.",
        ],
    }),
    placeholderShown: selector({
        css: ":placeholder-shown",
        docs: [
            "## `:placeholder-shown`",
            "The :placeholder-shown CSS pseudo-class",
            "represents any ``<input>`` or ``<textarea>`` element",
            "that is currently displaying placeholder text.",
        ],
    }),
    readOnly: selector({
        css: ":read-only",
        docs: [
            "## `:read-only`",
            "The :read-only CSS pseudo-class",
            "represents an element (such as input or textarea)",
            "that is not editable by the user.",
        ],
    }),
    readWrite: selector({
        css: ":read-write",
        docs: [
            "## `:read-write`",
            "The :read-write CSS pseudo-class",
            "represents an element (such as input or textarea)",
            "that is editable by the user.",
        ],
    }),
    required: selector({
        css: ":required",
        docs: [
            "## `:required`",
            "The :required CSS pseudo-class",
            "represents any ``<input>``, ``<select>``, or ``<textarea>`` element",
            "that has the required attribute set on it.",
        ],
    }),
    scope: selector({
        css: ":scope",
        docs: [
            "## `:scope`",
            "The :scope CSS pseudo-class",
            "represents elements that are a reference point",
            "for selectors to match against.",
        ],
    }),
    target: selector({
        css: ":target",
        docs: [
            "## `:target`",
            "The :target CSS pseudo-class",
            "represents a unique element (the target element)",
            "with an id matching the URL's fragment.",
        ],
    }),
    valid: selector({
        css: ":valid",
        docs: [
            "## `:valid`",
            "The :valid CSS pseudo-class",
            "represents any ``<input>`` or other ``<form>`` element",
            "whose contents validate successfully.",
            "This allows to easily make valid fields",
            "adopt an appearance that helps the user confirm",
            "that their data is formatted properly.",
        ],
    }),
    visited: selector({
        css: ":visited",
        docs: [
            "## `:visited`",
            "The :visited CSS pseudo-class",
            "represents links that the user has already visited.",
            "For privacy reasons,",
            "the styles that can be modified",
            "using this selector are very limited.",
        ],
    }),

    after: selector({
        css: "::after",
        docs: [
            "## `::after`",
            "In CSS, ::after creates a pseudo-element",
            "that is the last child of the selected element.",
            "It is often used to add cosmetic content",
            "to an element with the content property.",
            "It is inline by default.",
        ],
    }),
    before: selector({
        css: "::before",
        docs: [
            "## `::before`",
            "In CSS, ::before creates a pseudo-element",
            "that is the first child of the selected element.",
            "It is often used to add cosmetic content",
            "to an element with the content property.",
            "It is inline by default.",
        ],
    }),
    cue: selector({
        css: "::cue",
        docs: [
            "## `::cue`",
            "The ::cue CSS pseudo-element matches WebVTT cues",
            "within a selected element.",
            "This can be used to style captions",
            "and other cues in media with VTT tracks.",
        ],
    }),
    firstLetter: selector({
        css: "::first-letter",
        docs: [
            "## `::first-letter`",
            "The ::first-letter CSS pseudo-element",
            "applies styles to the first letter",
            "of the first line of a block-level element,",
            "but only when not preceded by other content",
            "(such as images or inline tables).",
        ],
    }),
    firstLine: selector({
        css: "::first-line",
        docs: [
            "## `::first-line`",
            "The ::first-line CSS pseudo-element",
            "applies styles to the first line of a block-level element.",
        ],
    }),
    fileSelectorButton: selector({
        css: "::file-selector-button",
        docs: [
            "## `::file-selector-button`",
            "The ::file-selector-button CSS pseudo-element",
            'represents the button of an ``<input>`` of type="file".',
        ],
    }),
    placeholder: selector({
        css: "::placeholder",
        docs: [
            "## `::placeholder`",
            "The ::placeholder CSS pseudo-element",
            "represents the placeholder text in",
            "an ``<input>`` or ``<textarea>`` element.",
        ],
    }),
    selection: selector({
        css: "::selection",
        docs: [
            "## `::selection`",
            "The ::selection CSS pseudo-element",
            "applies styles to the part of a document",
            "that has been highlighted by the user",
            "(such as clicking and dragging the mouse across text).",
        ],
    }),
    marker: selector({
        css: "::marker",
        docs: [
            "## `::marker`",
            "The ::marker CSS pseudo-element selects the marker box",
            "of a list item, which typically contains a bullet or number.",
            "It works on any element or pseudo-element set",
            "to display: list-item,",
            "such as the ``<li> ``and ``<summary>`` elements.",
        ],
    }),

    webkitScrollbar: selector({ css: "::-webkit-scrollbar" }),
    webkitScrollbarTrack: selector({ css: "::-webkit-scrollbar-track" }),
    webkitScrollbarThumb: selector({ css: "::-webkit-scrollbar-thumb" }),
    webkitScrollbarThumbHover: selector({
        css: "::-webkit-scrollbar-thumb:hover",
    }),
    webkitScrollbarThumbActive: selector({
        css: "::-webkit-scrollbar-thumb:active",
    }),
};

module.exports = { ListOfCssSelectors };
