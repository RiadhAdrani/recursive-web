/**
 * @credit MDN (2022) - https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
 */
module.exports = {
    accept: {
        name: "accept",
        type: "normal",
        values: ["audio/*", "video/*", "image/*"],
        els: ["form", "input"],
        docs: ["List of types the server accepts, typically a file type."],
    },
    acceptCharSet: {
        name: "acceptcharset",
        type: "normal",
        values: "string",
        els: ["form"],
        docs: ["List of supported charsets."],
    },
    accessKey: {
        name: "accesskey",
        type: "normal",
        values: "string",
        els: true,
        docs: ["Keyboard shortcut to activate or add focus to the element."],
    },
    action: {
        name: "action",
        type: "normal",
        values: "string",
        els: ["form"],
        docs: [
            "The URI of a program that processes the information submitted via the form.",
        ],
    },
    align: {
        name: "align",
        type: "normal",
        values: "string",
        els: [
            "applet",
            "caption",
            "col",
            "colgroup",
            "hr",
            "iframe",
            "img",
            "table",
            "tbody",
            "td",
            "tfoot",
            "th",
            "thead",
            "tr",
        ],
        docs: ["Specifies the horizontal alignment of the element."],
    },
    allow: {
        name: "allow",
        type: "normal",
        values: "string",
        els: ["iframe"],
        docs: ["Specifies a feature-policy for the iframe."],
    },
    alt: {
        name: "alt",
        type: "toggle",
        values: "boolean",
        els: ["applet", "area", "img", "input"],
        docs: ["Alternative text in case an image can't be displayed."],
    },
    async: {
        name: "async",
        type: "normal",
        values: "string",
        els: ["script"],
        docs: ["Executes the script asynchronously."],
    },
    autoCapitalize: {
        name: "autocapitalize",
        type: "normal",
        els: true,
        values: ["off", "none", "on", "sentences", "words", "characters"],
        docs: [
            "Sets whether input is automatically capitalized when entered by user",
        ],
    },
    autoComplete: {
        name: "autocomplete",
        type: "normal",
        values: [
            "off",
            "on",
            "name",
            "honorific-prefix",
            "given-name",
            "additional-name",
            "family-name",
            "honorific-suffix",
            "nickname",
            "email",
            "username",
            "new-password",
            "current-password",
            "one-time-code",
            "organization-title",
            "organization",
            "street-address",
            "country",
            "country-name",
            "postal-code",
            "cc-name",
            "cc-given-name",
            "cc-additional-name",
            "cc-family-name",
            "cc-number",
            "cc-exp",
            "cc-exp-month",
            "cc-exp-year",
            "cc-csc",
            "cc-type",
            "transaction-currency",
            "transaction-amount",
            "language",
            "bday",
            "bday-day",
            "bday-month",
            "bday-year",
            "sex",
            "tel",
            "tel-country-code",
            "tel-national",
            "tel-area-code",
            "tel-local",
            "tel-extension",
            "impp",
            "url",
            "photo",
        ],
        els: ["form", "input", "select", "textarea"],
        docs: [
            "Indicates whether controls in this form can by default have their values automatically completed by the browser.",
        ],
    },
    autoFocus: {
        name: "autofocus",
        type: "toggle",
        values: "string",
        els: ["button", "input", "keygen", "select", "textarea"],
        docs: [
            "The element should be automatically focused after the page loaded.",
        ],
    },
    autoplay: {
        name: "autoplay",
        type: "toggle",
        values: "boolean",
        docs: ["The audio or video should play as soon as possible."],
    },
    allowFullScreen: {
        name: "allowfullscreen",
        type: "toggle",
        values: "boolean",
        docs: [],
    },
    allowPaymentRequest: {
        name: "allowpaymentrequest",
        type: "toggle",
        values: "string",
        docs: [],
    },
    action: {
        name: "action",
        type: "normal",
        values: "string",
        els: ["audio", "video"],
        docs: [],
    },
    background: {
        name: "background",
        type: "normal",
        values: "string",
        els: ["body", "table", "td", "th"],
        docs: ["Specifies the URL of an image file."],
    },
    bgColor: {
        name: "bgcolor",
        type: "normal",
        values: "string",
        els: [
            "body",
            "col",
            "colgroup",
            "marquee",
            "table",
            "tbody",
            "tfoot",
            "td",
            "th",
            "tr",
        ],
        docs: ["Background color of the element."],
    },
    border: {
        name: "border",
        type: "normal",
        values: "string",
        els: ["img", "object", "table"],
        docs: ["The border width."],
    },
    buffered: {
        name: "buffered",
        type: "normal",
        values: "string",
        els: ["audio", "video"],
        docs: ["Contains the time range of already buffered media."],
    },
    capture: {
        name: "capture",
        type: "normal",
        values: ["user", "environment"],
        els: ["input"],
        docs: [
            "From the Media Capture specification, specifies a new file can be captured.",
        ],
    },
    challenge: {
        name: "challenge",
        type: "normal",
        values: "string",
        els: ["keygen"],
        docs: [
            "A challenge string that is submitted along with the public key.",
        ],
    },
    charSet: {
        name: "charset",
        type: "normal",
        values: "string",
        els: ["meta", "script"],
        docs: ["Declares the character encoding of the page or script"],
    },
    checked: {
        name: "checked",
        type: "toggle",
        values: "string",
        els: ["command", "input"],
        docs: ["Indicates whether the element should be checked on page load."],
    },
    cite: {
        name: "cite",
        type: "normal",
        values: "string",
        els: ["blockquote", "del", "ins", "q"],
        docs: [
            "Contains a URI which points to the source of the quote or change.",
        ],
    },
    className: {
        name: "class",
        type: "normal",
        values: "string",
        els: true,
        docs: ["Often used with CSS to style elements with common properties."],
    },
    code: {
        name: "code",
        type: "normal",
        values: "string",
        els: ["applet"],
        docs: [
            "Specifies the URL of the applet's class file to be loaded and executed.",
        ],
    },
    codeBase: {
        name: "codebase",
        type: "normal",
        values: "string",
        els: ["applet"],
        docs: [
            "This attribute gives the absolute or relative URL of the directory where applets' .class files referenced by the code attribute are stored.",
        ],
    },
    color: {
        name: "color",
        type: "normal",
        values: "string",
        els: ["font", "hr"],
        docs: [
            "This attribute sets the text color using either a named color or a color specified in the hexadecimal #RRGGBB format.",
        ],
    },
    cols: {
        name: "cols",
        type: "normal",
        values: "number",
        els: ["textarea"],
        docs: ["Defines the number of columns in a textarea."],
    },
    colSpan: {
        name: "colSpan",
        type: "normal",
        values: "string",
        els: ["td", "th"],
        docs: [
            "The colspan attribute defines the number of columns a cell should span.",
        ],
    },
    content: {
        name: "content",
        type: "string",
        values: "string",
        els: ["meta"],
        docs: [
            "A value associated with http-equiv or name depending on the context.",
        ],
    },
    contentEditable: {
        name: "contenteditable",
        type: "normal",
        values: ["true", "false"],
        els: true,
        docs: ["Indicates whether the element's content is editable."],
    },
    contextMenu: {
        name: "contextmenu",
        type: "normal",
        values: "string",
        els: true,
        docs: [
            "Defines the ID of a ``<menu>`` element which will serve as the element's context menu.",
        ],
    },
    controls: {
        name: "controls",
        type: "toggle",
        values: "string",
        els: ["audio", "video"],
        docs: [
            "Indicates whether the browser should show playback controls to the user.",
        ],
    },
    compact: {
        name: "compact",
        type: "toggle",
        values: "string",
        els: true,
        docs: [],
    },
    coords: {
        name: "coords",
        type: "normal",
        values: "string",
        els: ["area"],
        docs: [
            "A set of values specifying the coordinates of the hot-spot region.",
        ],
    },
    crossOrigin: {
        name: "crossorigin",
        type: "normal",
        values: ["use-credentials", "anonymous"],
        els: ["audio", "img", "link", "script", "video"],
        docs: ["How the element handles cross-origin requests"],
    },
    csp: {
        name: "csp",
        type: "normal",
        values: "string",
        els: ["iframe"],
        docs: [
            "Specifies the Content Security Policy that an embedded document must agree to enforce upon itself.",
        ],
    },
    data: {
        name: "data",
        type: "normal",
        values: "string",
        els: ["object"],
        docs: ["Specifies the URL of the resource."],
    },
    dataSet: {
        name: "dataset",
        type: "normal",
        values: "string",
        els: ["object"],
        docs: ["Lets you attach custom attributes to an HTML element."],
    },
    dateTime: {
        name: "datetime",
        type: "normal",
        values: "string",
        els: ["del", "ins", "time"],
        docs: ["Indicates the date and time associated with the element."],
    },
    decoding: {
        name: "decoding",
        type: "normal",
        values: ["sync", "async", "auto"],
        els: ["img"],
        docs: ["Indicates the preferred method to decode the image."],
    },
    def: {
        name: "default",
        type: "normal",
        values: "string",
        els: ["track"],
        docs: [
            "Indicates that the track should be enabled unless the user's preferences indicate something different.",
        ],
    },
    defer: {
        name: "defer",
        type: "normal",
        values: "string",
        els: ["script"],
        docs: [
            "Indicates that the script should be executed after the page has been parsed.",
        ],
    },
    dir: {
        name: "dir",
        type: "normal",
        values: ["ltr", "rtl", "auto"],
        els: true,
        docs: [
            "Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)",
        ],
    },
    dirName: {
        name: "dirname",
        type: "normal",
        values: "string",
        els: ["input", "textarea"],
        docs: [],
    },
    disabled: {
        name: "disabled",
        type: "toggle",
        values: "boolean",
        els: [
            "button",
            "command",
            "fieldset",
            "input",
            "keygen",
            "optgroup",
            "option",
            "select",
            "textarea",
        ],
        docs: ["Indicates whether the user can interact with the element."],
    },
    download: {
        name: "download",
        type: "normal",
        values: "string",
        els: ["a", "area"],
        docs: [
            "Indicates that the hyperlink is to be used for downloading a resource.",
        ],
    },
    draggable: {
        name: "draggable",
        type: "normal",
        values: ["true", "false"],
        els: true,
        docs: ["Defines whether the element can be dragged."],
    },
    encType: {
        name: "enctype",
        type: "normal",
        values: [
            "application/x-www-form-urlencoded",
            "multipart/form-data",
            "text/plain",
        ],
        els: ["form"],
        docs: [
            "Defines the content type of the form data when the method is POST.",
        ],
    },
    entryKeyHint: {
        name: "entrykeyhint",
        type: "normal",
        values: "string",
        els: ["textarea"],
        docs: [
            "The enterkeyhint specifies what action label (or icon) to present for the enter key on virtual keyboards. The attribute can be used with form controls (such as the value of textarea elements), or in elements in an editing host (e.g., using contenteditable attribute).",
        ],
    },
    form: {
        name: "form",
        type: "normal",
        values: "string",
        els: [
            "button",
            "fieldset",
            "input",
            "keygen",
            "label",
            "meter",
            "object",
            "output",
            "progress",
            "select",
            "textarea",
        ],
        docs: ["Indicates the form that is the owner of the element."],
    },
    formAction: {
        name: "formaction",
        type: "normal",
        values: "string",
        els: ["button", "input"],
        docs: [
            "Indicates the action of the element, overriding the action defined in the <form>.",
        ],
    },
    formEncType: {
        name: "formenctype",
        type: "normal",
        values: "string",
        els: ["button", "input"],
        docs: [
            `If the button/input is a submit button (type="submit"), this attribute sets the encoding type to use during form submission. If this attribute is specified, it overrides the enctype attribute of the button's form owner.`,
        ],
    },
    formMethod: {
        name: "formmethod",
        type: "normal",
        values: "string",
        els: ["button", "input"],
        docs: [
            `If the button/input is a submit button (type="submit"), this attribute sets the submission method to use during form submission (GET, POST, etc.). If this attribute is specified, it overrides the method attribute of the button's form owner.`,
        ],
    },
    formNoValidate: {
        name: "formnovalidate",
        type: "normal",
        values: "string",
        els: ["button", "input"],
        docs: [
            `If the button/input is a submit button (type="submit"), this boolean attribute specifies that the form is not to be validated when it is submitted. If this attribute is specified, it overrides the novalidate attribute of the button's form owner.`,
        ],
    },
    formTarget: {
        name: "formtarget",
        type: "normal",
        values: "string",
        els: ["_self", "_blank", "_parent", "_top"],
        docs: [
            `The formtarget attribute specifies a name or a keyword that indicates where to display the response that is received after submitting the form.`,
        ],
    },
    isFor: {
        name: "for",
        type: "normal",
        values: "string",
        els: ["label", "output"],
        docs: ["Describes elements which belongs to this one."],
    },
    headers: {
        name: "headers",
        type: "normal",
        values: "string",
        els: ["td", "th"],
        docs: ["IDs of the ``<th>`` elements which applies to this element."],
    },
    height: {
        name: "height",
        type: "normal",
        values: "string",
        els: ["canvas", "embed", "iframe", "img", "input", "object", "video"],
        docs: [
            "Specifies the height of elements listed here. For all other elements, use the CSS height property.",
        ],
    },
    hidden: {
        name: "hidden",
        type: "toggle",
        values: "boolean",
        els: true,
        docs: [
            "Prevents rendering of given element, while keeping child elements, e.g. script elements, active.",
        ],
    },
    high: {
        name: "high",
        type: "normal",
        values: "string",
        els: ["meter"],
        docs: ["Indicates the lower bound of the upper range."],
    },
    href: {
        name: "href",
        type: "normal",
        values: "string",
        els: ["a", "area", "base", "link"],
        docs: ["The URL of a linked resource."],
    },
    hrefLang: {
        name: "hreflang",
        type: "normal",
        values: "string",
        els: ["a", "area", "link"],
        docs: ["Specifies the language of the linked resource."],
    },
    httpEquiv: {
        name: "httpEquiv",
        type: "normal",
        values: [
            "content-security-policy",
            "content-type",
            "default-style",
            "x-ua-compatible",
            "refresh",
        ],
        els: ["meta"],
        docs: ["Defines a pragma directive."],
    },
    icon: {
        name: "icon",
        type: "normal",
        values: "string",
        els: ["command"],
        docs: ["Specifies a picture which represents the command."],
    },
    id: {
        name: "id",
        type: "normal",
        values: "string",
        els: true,
        docs: [
            "Often used with CSS to style a specific element. The value of this attribute must be unique.",
        ],
    },
    importance: {
        name: "importance",
        type: "normal",
        values: "string",
        els: ["iframe", "img", "link", "script"],
        docs: ["Indicates the relative fetch priority for the resource."],
    },
    integrity: {
        name: "integrity",
        type: "normal",
        values: "string",
        els: ["link", "script"],
        docs: [
            "Specifies a Subresource Integrity value that allows browsers to verify what they fetch.",
        ],
    },
    intrinsicSize: {
        name: "instrinsicsize",
        type: "normal",
        values: "string",
        els: ["img"],
        docs: [
            "This attribute tells the browser to ignore the actual intrinsic size of the image and pretend it's the size specified in the attribute.",
        ],
    },
    inputMode: {
        name: "inputmode",
        type: "normal",
        values: [
            "none",
            "text",
            "decimal",
            "numeric",
            "tel",
            "search",
            "email",
            "url",
        ],
        els: ["textarea", "contenteditable"],
        docs: [
            "Provides a hint as to the type of data that might be entered by the user while editing the element or its contents. The attribute can be used with form controls (such as the value of textarea elements), or in elements in an editing host (e.g., using contenteditable attribute).",
        ],
    },
    isMap: {
        name: "ismap",
        type: "toggle",
        values: "boolean",
        els: ["img"],
        docs: ["Indicates that the image is part of a server-side image map."],
    },
    itemProp: {
        name: "itemprop",
        type: "normal",
        values: "string",
        els: true,
        docs: [],
    },
    keyType: {
        name: "keytype",
        type: "normal",
        values: ["RSA"],
        els: ["keygen"],
        docs: ["Specifies the type of key generated."],
    },
    kind: {
        name: "kind",
        type: "normal",
        values: [
            "subtitles",
            "captions",
            "descriptions",
            "chapters",
            "metadata",
        ],
        els: ["track"],
        docs: ["Specifies the kind of text track."],
    },
    label: {
        name: "label",
        type: "normal",
        values: "string",
        els: ["optgroup", "option", "track"],
        docs: ["Specifies a user-readable title of the element."],
    },
    lang: {
        name: "lang",
        type: "normal",
        values: "string",
        els: true,
        docs: ["Defines the language used in the element."],
    },
    language: {
        name: "language",
        type: "normal",
        values: "string",
        els: ["script"],
        docs: ["Defines the script language used in the element."],
    },
    loading: {
        name: "loading",
        type: "normal",
        values: ["lazy", "eager"],
        els: ["img", "iframe"],
        docs: [
            'Indicates if the element should be loaded lazily (loading="lazy") or loaded immediately (loading="eager").',
        ],
    },
    list: {
        name: "list",
        type: "normal",
        values: "string",
        els: ["input"],
        docs: [
            "Identifies a list of pre-defined options to suggest to the user.",
        ],
    },
    loop: {
        name: "loop",
        type: "toggle",
        values: "boolean",
        els: ["audio", "bgsound", "marquee", "video"],
        docs: [
            "Indicates whether the media should start playing from the start when it's finished.",
        ],
    },
    low: {
        name: "low",
        type: "normal",
        values: "string",
        els: ["meter"],
        docs: ["Indicates the upper bound of the lower range."],
    },
    manifest: {
        name: "manifest",
        type: "normal",
        values: "string",
        els: ["html"],
        docs: ["Specifies the URL of the document's cache manifest."],
    },
    max: {
        name: "max",
        type: "normal",
        values: "string",
        els: ["input", "meter", "progress"],
        docs: ["Indicates the maximum value allowed."],
    },
    maxLength: {
        name: "maxLength",
        type: "normal",
        values: "string",
        els: ["input", "textarea"],
        docs: [
            "Defines the maximum number of characters allowed in the element.",
        ],
    },
    minLength: {
        name: "minLength",
        type: "normal",
        values: "string",
        els: ["input", "textarea"],
        docs: [
            "Defines the minimum number of characters allowed in the element.",
        ],
    },
    media: {
        name: "media",
        type: "normal",
        values: "string",
        els: ["a", "area", "link", "source", "style"],
        docs: [
            "Specifies a hint of the media for which the linked resource was designed.",
        ],
    },
    method: {
        name: "method",
        type: "normal",
        values: ["post", "get", "dialog"],
        els: ["form"],
        docs: [
            "Defines which HTTP method to use when submitting the form. Can be GET (default) or POST.",
        ],
    },
    min: {
        name: "min",
        type: "normal",
        values: "string",
        els: ["input", "meter"],
        docs: ["Indicates the minimum value allowed."],
    },
    multiple: {
        name: "multiple",
        type: "toggle",
        values: "boolean",
        els: ["input", "select"],
        docs: [
            "Indicates whether multiple values can be entered in an input of the type email or file.",
        ],
    },
    muted: {
        name: "muted",
        type: "toggle",
        values: "boolean",
        els: ["audio", "video"],
        docs: [
            "Indicates whether the audio will be initially silenced on page load.",
        ],
    },
    name: {
        name: "name",
        type: "normal",
        values: "string",
        els: [
            "button",
            "form",
            "fieldset",
            "iframe",
            "input",
            "keygen",
            "object",
            "output",
            "select",
            "textarea",
            "map",
            "meta",
            "param",
        ],
        docs: [
            "Name of the element. For example used by the server to identify the fields in form submits.",
        ],
    },
    noShade: {
        name: "noshade",
        type: "togge",
        values: "boolean",
        els: ["hr"],
        docs: [
            "The HTML ``<hr>`` noshade Attribute is the boolean value and used to specify the solid horizontal line instead of shaded lines.",
        ],
    },
    noValidate: {
        name: "novalidate",
        type: "normal",
        values: "string",
        els: ["form"],
        docs: [
            "This attribute indicates that the form shouldn't be validated when submitted.",
        ],
    },
    open: {
        name: "open",
        type: "toggle",
        values: "boolean",
        els: ["details", "dialog"],
        docs: [
            "Indicates whether the contents are currently visible (in the case of a ``<details>`` element) or whether the dialog is active and can be interacted with (in the case of a ``<dialog>`` element).",
        ],
    },
    optimum: {
        name: "optimum",
        type: "normal",
        values: "string",
        els: ["meter"],
        docs: ["Indicates the optimal numeric value."],
    },
    pattern: {
        name: "pattern",
        type: "normal",
        values: "string",
        els: ["input"],
        docs: [
            "Defines a regular expression which the element's value will be validated against.",
        ],
    },
    ping: {
        name: "ping",
        type: "normal",
        values: "string",
        els: ["a", "area"],
        docs: [
            "The ping attribute specifies a space-separated list of URLs to be notified if a user follows the hyperlink.",
        ],
    },
    placeholder: {
        name: "placeholder",
        type: "normal",
        values: "string",
        els: ["input", "textarea"],
        docs: [
            "Provides a hint to the user of what can be entered in the field.",
        ],
    },
    poster: {
        name: "poster",
        type: "normal",
        values: "string",
        els: ["video"],
        docs: [
            "A URL indicating a poster frame to show until the user plays or seeks.",
        ],
    },
    playsInline: {
        name: "playsinline",
        type: "toggle",
        values: "string",
        els: true,
        docs: [],
    },
    preload: {
        name: "preload",
        type: "normal",
        values: "string",
        els: ["audio", "video"],
        docs: [
            "Indicates whether the whole resource, parts of it or nothing should be preloaded.",
        ],
    },
    radioGroup: {
        name: "radiogroup",
        type: "normal",
        values: "string",
        els: ["command"],
        docs: [],
    },
    readOnly: {
        name: "readonly",
        type: "toggle",
        values: "boolean",
        els: ["input", "textarea"],
        docs: ["Indicates whether the element can be edited."],
    },
    referrerPolicy: {
        name: "referrerpolicy",
        type: "normal",
        values: [
            "no-referrer",
            "no-referrer-when-downgrade",
            "origin",
            "origin-when-cross-origin",
            "same-origin",
            "strict-origin",
            "strict-origin-when-cross-origin",
            "unsafe-url",
        ],
        els: ["a", "area", "iframe", "img", "link", "script"],
        docs: ["Specifies which referrer is sent when fetching the resource."],
    },
    rel: {
        name: "rel",
        type: "normal",
        values: [
            "alternate",
            "author",
            "bookmark",
            "canonical",
            "dns-prefetch",
            "external",
            "help",
            "icon",
            "license",
            "manifest",
            "me",
            "modulepreload",
            "next",
            "nofollow",
            "noopener",
            "noreferrer",
            "opener",
            "pingback",
            "preconnect",
            "prefetch",
            "preload",
            "prerender",
            "prev",
            "search",
            "stylesheet",
            "tag",
        ],
        els: ["a", "area", "link"],
        docs: [
            "Specifies the relationship of the target object to the link object.",
        ],
    },
    required: {
        name: "required",
        type: "toggle",
        values: "boolean",
        els: ["input", "select", "textarea"],
        docs: [
            "Indicates whether this element is required to fill out or not.",
        ],
    },
    reversed: {
        name: "reversed",
        type: "toggle",
        values: "boolean",
        els: ["ol"],
        docs: [
            "Indicates whether the list should be displayed in a descending order instead of a ascending.",
        ],
    },
    role: {
        name: "role",
        type: "normal",
        values: "string",
        els: true,
        docs: [
            "Defines an explicit role for an element for use by assistive technologies.",
        ],
    },
    rows: {
        name: "rows",
        type: "normal",
        values: "number",
        els: ["textarea"],
        docs: ["Defines the number of rows in a text area."],
    },
    rowSpan: {
        name: "rowspan",
        type: "normal",
        values: "string",
        els: ["td", "th"],
        docs: ["Defines the number of rows a table cell should span over."],
    },
    sandbox: {
        name: "sandbox",
        type: "normal",
        values: [
            "allow-downloads-without-user-activation",
            "allow-downloads",
            "allow-forms",
            "allow-modals",
            "allow-orientation-lock",
            "allow-pointer-lock",
            "allow-popups",
            "allow-popups-to-escape-sandbox",
            "allow-presentation",
            "allow-same-origin",
            "allow-scripts",
            "allow-storage-access-by-user-activation",
            "allow-top-navigation",
            "allow-top-navigation-by-user-activation",
        ],
        els: ["iframe"],
        docs: [
            "Stops a document loaded in an iframe from using certain features (such as submitting forms or opening new windows).",
        ],
    },
    scope: {
        name: "scope",
        type: "normal",
        values: ["row", "col", "rowgroup", "colgroup"],
        els: ["th"],
        docs: [
            "Defines the cells that the header test (defined in the th element) relates to.",
        ],
    },
    selected: {
        name: "selected",
        type: "toggle",
        values: "boolean",
        els: ["option"],
        docs: ["Defines a value which will be selected on page load."],
    },
    shape: {
        name: "shape",
        type: "normal",
        values: "string",
        els: ["a", "area"],
        docs: [],
    },
    size: {
        name: "size",
        type: "normal",
        values: "string",
        els: ["input", "select"],
        docs: [
            "Defines the width of the element (in pixels). If the element's type attribute is text or password then it's the number of characters.",
        ],
    },
    sizes: {
        name: "sizes",
        type: "normal",
        values: "string",
        els: ["link", "img", "source"],
        docs: [],
    },
    slot: {
        name: "slot",
        type: "normal",
        values: "string",
        els: true,
        docs: ["Assigns a slot in a shadow DOM shadow tree to an element."],
    },
    span: {
        name: "span",
        type: "normal",
        values: "string",
        els: ["col", "colgroup"],
        docs: [],
    },
    spellCheck: {
        name: "spellcheck",
        type: "normal",
        values: ["true", "false"],
        els: true,
        docs: ["Indicates whether spell checking is allowed for the element."],
    },
    src: {
        name: "src",
        type: "normal",
        values: "string",
        els: [
            "audio",
            "embed",
            "iframe",
            "img",
            "input",
            "script",
            "source",
            "track",
            "video",
        ],
        docs: ["The URL of the embeddable content."],
    },
    srcDoc: {
        name: "srcdoc",
        type: "normal",
        values: "string",
        els: ["iframe"],
        docs: [],
    },
    srcLang: {
        name: "srclang",
        type: "normal",
        values: "string",
        els: ["track"],
        docs: [],
    },
    srcSet: {
        name: "srcset",
        type: "normal",
        values: "string",
        els: ["img", "source"],
        docs: ["One or more responsive image candidates."],
    },
    start: {
        name: "start",
        type: "normal",
        values: "string",
        els: ["ol"],
        docs: ["Defines the first number if other than 1."],
    },
    step: {
        name: "step",
        type: "normal",
        values: "string",
        els: ["input"],
        docs: [],
    },
    summary: {
        name: "summary",
        type: "normal",
        values: "string",
        els: ["table"],
        docs: [],
    },
    tabIndex: {
        name: "tabindex",
        type: "normal",
        values: "string",
        els: true,
        docs: [
            "Overrides the browser's default tab order and follows the one specified instead.",
        ],
    },
    target: {
        name: "target",
        type: "normal",
        values: ["_self", "_blank", "_parent", "_top"],
        els: ["a", "area", "base", "form"],
        docs: [
            "Specifies where to open the linked document (in the case of an ``<a>`` element) or where to display the response received (in the case of a ``<form>`` element)",
        ],
    },
    title: {
        name: "title",
        type: "normal",
        values: "string",
        els: true,
        docs: [
            "Text to be displayed in a tooltip when hovering over the element.",
        ],
    },
    translate: {
        name: "translate",
        type: "normal",
        values: ["yes", "no"],
        els: true,
        docs: [
            "Specify whether an element's attribute values and the values of its Text node children are to be translated when the page is localized, or whether to leave them unchanged.",
        ],
    },
    type: {
        name: "type",
        type: "normal",
        values: "string",
        els: [
            "button",
            "input",
            "command",
            "embed",
            "object",
            "script",
            "source",
            "styles",
            "menu",
            "link",
        ],
        docs: ["Defines the type of the element."],
    },
    useMap: {
        name: "usemap",
        type: "normal",
        values: "string",
        els: ["img", "input", "object"],
        docs: [
            "Defines a default value which will be displayed in the element on page load.",
        ],
    },
    value: {
        name: "value",
        type: "normal",
        values: "string",
        els: [
            "button",
            "data",
            "input",
            "li",
            "meter",
            "option",
            "progress",
            "param",
        ],
        docs: [],
    },
    width: {
        name: "width",
        type: "normal",
        values: "string",
        els: ["canvas", "embed", "iframe", "img", "input", "object", "video"],
        docs: [
            "For the elements listed here, this establishes the element's width.",
        ],
    },
    wrap: {
        name: "wrap",
        type: "normal",
        values: ["hard", "soft", "off"],
        els: ["textarea"],
        docs: ["Indicates whether the text should be wrapped."],
    },
};
