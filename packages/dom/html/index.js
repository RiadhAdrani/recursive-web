const { attribute } = require("../../templates");

/**
 * @credit MDN (2022) - https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
 */
module.exports = {
    accept: attribute({
        name: "accept",
        values: ["audio/*", "video/*", "image/*"],
        els: ["form", "input"],
        docs: ["List of types the server accepts, typically a file type."],
    }),
    acceptCharSet: attribute({
        name: "acceptcharset",
        values: "string",
        els: ["form"],
        docs: ["List of supported charsets."],
    }),
    accessKey: attribute({
        name: "accesskey",
        values: "string",
        els: true,
        docs: ["Keyboard shortcut to activate or add focus to the element."],
    }),
    action: attribute({
        name: "action",
        values: "string",
        els: ["form"],
        docs: [
            "The URI of a program that processes the information submitted via the form.",
        ],
    }),
    align: attribute({
        name: "align",
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
    }),
    allow: attribute({
        name: "allow",
        values: "string",
        els: ["iframe"],
        docs: ["Specifies a feature-policy for the iframe."],
    }),
    alt: attribute({
        name: "alt",
        values: "string",
        els: ["applet", "area", "img", "input"],
        docs: ["Alternative text in case an image can't be displayed."],
    }),
    async: attribute({
        name: "async",
        values: "string",
        els: ["script"],
        docs: ["Executes the script asynchronously."],
    }),
    as: attribute({
        name: "as",
        values: "string",
        els: ["link"],
        docs: [
            `This attribute is only used when rel="preload" or rel="prefetch" has been set on the <link> element. It specifies the type of content being loaded by the <link>, which is necessary for request matching, application of correct content security policy, and setting of correct Accept request header. Furthermore, rel="preload" uses this as a signal for request prioritization. The table below lists the valid values for this attribute and the elements or resources they apply to.`,
        ],
    }),
    autoCapitalize: attribute({
        name: "autocapitalize",
        els: true,
        values: ["off", "none", "on", "sentences", "words", "characters"],
        docs: [
            "Sets whether input is automatically capitalized when entered by user",
        ],
    }),
    autoComplete: attribute({
        name: "autocomplete",
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
    }),
    autoFocus: attribute({
        name: "autofocus",
        toggleable: true,
        values: "string",
        els: ["button", "input", "keygen", "select", "textarea"],
        docs: [
            "The element should be automatically focused after the page loaded.",
        ],
    }),
    autoplay: attribute({
        name: "autoplay",
        toggleable: true,
        values: "boolean",
        docs: ["The audio or video should play as soon as possible."],
    }),
    allowFullScreen: attribute({
        name: "allowfullscreen",
        toggleable: true,
        values: "boolean",
        docs: [],
    }),
    allowPaymentRequest: attribute({
        name: "allowpaymentrequest",
        toggleable: true,
        values: "string",
        docs: [],
    }),
    action: attribute({
        name: "action",
        values: "string",
        els: ["audio", "video"],
        docs: [],
    }),
    background: attribute({
        name: "background",
        values: "string",
        els: ["body", "table", "td", "th"],
        docs: ["Specifies the URL of an image file."],
    }),
    bgColor: attribute({
        name: "bgcolor",
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
    }),
    border: attribute({
        name: "border",
        values: "string",
        els: ["img", "object", "table"],
        docs: ["The border width."],
    }),
    buffered: attribute({
        name: "buffered",
        values: "string",
        els: ["audio", "video"],
        docs: ["Contains the time range of already buffered media."],
    }),
    capture: attribute({
        name: "capture",
        values: ["user", "environment"],
        els: ["input"],
        docs: [
            "From the Media Capture specification, specifies a new file can be captured.",
        ],
    }),
    challenge: attribute({
        name: "challenge",
        values: "string",
        els: ["keygen"],
        docs: [
            "A challenge string that is submitted along with the public key.",
        ],
    }),
    charSet: attribute({
        name: "charset",
        values: "string",
        els: ["meta", "script"],
        docs: ["Declares the character encoding of the page or script"],
    }),
    checked: attribute({
        name: "checked",
        toggleable: true,
        values: "string",
        els: ["command", "input"],
        docs: ["Indicates whether the element should be checked on page load."],
    }),
    cite: attribute({
        name: "cite",
        values: "string",
        els: ["blockquote", "del", "ins", "q"],
        docs: [
            "Contains a URI which points to the source of the quote or change.",
        ],
    }),
    className: attribute({
        name: "class",
        values: "string",
        els: true,
        docs: ["Often used with CSS to style elements with common properties."],
    }),
    code: attribute({
        name: "code",
        values: "string",
        els: ["applet"],
        docs: [
            "Specifies the URL of the applet's class file to be loaded and executed.",
        ],
    }),
    codeBase: attribute({
        name: "codebase",
        values: "string",
        els: ["applet"],
        docs: [
            "This attribute gives the absolute or relative URL of the directory where applets' .class files referenced by the code attribute are stored.",
        ],
    }),
    color: attribute({
        name: "color",
        values: "string",
        els: ["font", "hr"],
        docs: [
            "This attribute sets the text color using either a named color or a color specified in the hexadecimal #RRGGBB format.",
        ],
    }),
    cols: attribute({
        name: "cols",
        values: "number",
        els: ["textarea"],
        docs: ["Defines the number of columns in a textarea."],
    }),
    colSpan: attribute({
        name: "colSpan",
        values: "string",
        els: ["td", "th"],
        docs: [
            "The colspan attribute defines the number of columns a cell should span.",
        ],
    }),
    content: attribute({
        name: "content",
        values: "string",
        els: ["meta"],
        docs: [
            "A value associated with http-equiv or name depending on the context.",
        ],
    }),
    contentEditable: attribute({
        name: "contenteditable",
        values: ["true", "false"],
        els: true,
        docs: ["Indicates whether the element's content is editable."],
    }),
    contextMenu: attribute({
        name: "contextmenu",
        values: "string",
        els: true,
        docs: [
            "Defines the ID of a ``<menu>`` element which will serve as the element's context menu.",
        ],
    }),
    controls: attribute({
        name: "controls",
        toggleable: true,
        values: "string",
        els: ["audio", "video"],
        docs: [
            "Indicates whether the browser should show playback controls to the user.",
        ],
    }),
    compact: attribute({
        name: "compact",
        toggleable: true,
        values: "string",
        els: true,
        docs: [],
    }),
    coords: attribute({
        name: "coords",
        values: "string",
        els: ["area"],
        docs: [
            "A set of values specifying the coordinates of the hot-spot region.",
        ],
    }),
    crossOrigin: attribute({
        name: "crossorigin",
        values: ["use-credentials", "anonymous"],
        els: ["audio", "img", "link", "script", "video"],
        docs: ["How the element handles cross-origin requests"],
    }),
    csp: attribute({
        name: "csp",
        values: "string",
        els: ["iframe"],
        docs: [
            "Specifies the Content Security Policy that an embedded document must agree to enforce upon itself.",
        ],
    }),
    data: attribute({
        name: "data",
        values: "string",
        els: ["object"],
        docs: ["Specifies the URL of the resource."],
    }),
    dataSet: attribute({
        name: "dataset",
        values: "string",
        els: ["object"],
        docs: ["Lets you attach custom attributes to an HTML element."],
    }),
    dateTime: attribute({
        name: "datetime",
        values: "string",
        els: ["del", "ins", "time"],
        docs: ["Indicates the date and time associated with the element."],
    }),
    decoding: attribute({
        name: "decoding",
        values: ["sync", "async", "auto"],
        els: ["img"],
        docs: ["Indicates the preferred method to decode the image."],
    }),
    def: attribute({
        name: "default",
        values: "string",
        els: ["track"],
        docs: [
            "Indicates that the track should be enabled unless the user's preferences indicate something different.",
        ],
    }),
    defer: attribute({
        name: "defer",
        values: "string",
        els: ["script"],
        docs: [
            "Indicates that the script should be executed after the page has been parsed.",
        ],
    }),
    dir: attribute({
        name: "dir",
        values: ["ltr", "rtl", "auto"],
        els: true,
        docs: [
            "Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)",
        ],
    }),
    dirName: attribute({
        name: "dirname",
        values: "string",
        els: ["input", "textarea"],
        docs: [],
    }),
    disabled: attribute({
        name: "disabled",
        toggleable: true,
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
    }),
    download: attribute({
        name: "download",
        values: "string",
        els: ["a", "area"],
        docs: [
            "Indicates that the hyperlink is to be used for downloading a resource.",
        ],
    }),
    draggable: attribute({
        name: "draggable",
        values: ["true", "false"],
        els: true,
        docs: ["Defines whether the element can be dragged."],
    }),
    encType: attribute({
        name: "enctype",
        values: [
            "application/x-www-form-urlencoded",
            "multipart/form-data",
            "text/plain",
        ],
        els: ["form"],
        docs: [
            "Defines the content type of the form data when the method is POST.",
        ],
    }),
    entryKeyHint: attribute({
        name: "entrykeyhint",
        values: "string",
        els: ["textarea"],
        docs: [
            "The enterkeyhint specifies what action label (or icon) to present for the enter key on virtual keyboards. The attribute can be used with form controls (such as the value of textarea elements), or in elements in an editing host (e.g., using contenteditable attribute).",
        ],
    }),
    form: attribute({
        name: "form",
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
    }),
    formAction: attribute({
        name: "formaction",
        values: "string",
        els: ["button", "input"],
        docs: [
            "Indicates the action of the element, overriding the action defined in the <form>.",
        ],
    }),
    formEncType: attribute({
        name: "formenctype",
        values: "string",
        els: ["button", "input"],
        docs: [
            `If the button/input is a submit button (type="submit"), this attribute sets the encoding type to use during form submission. If this attribute is specified, it overrides the enctype attribute of the button's form owner.`,
        ],
    }),
    formMethod: attribute({
        name: "formmethod",
        values: "string",
        els: ["button", "input"],
        docs: [
            `If the button/input is a submit button (type="submit"), this attribute sets the submission method to use during form submission (GET, POST, etc.). If this attribute is specified, it overrides the method attribute of the button's form owner.`,
        ],
    }),
    formNoValidate: attribute({
        name: "formnovalidate",
        values: "string",
        els: ["button", "input"],
        docs: [
            `If the button/input is a submit button (type="submit"), this boolean attribute specifies that the form is not to be validated when it is submitted. If this attribute is specified, it overrides the novalidate attribute of the button's form owner.`,
        ],
    }),
    formTarget: attribute({
        name: "formtarget",
        values: "string",
        els: ["_self", "_blank", "_parent", "_top"],
        docs: [
            `The formtarget attribute specifies a name or a keyword that indicates where to display the response that is received after submitting the form.`,
        ],
    }),
    isFor: attribute({
        name: "for",
        values: "string",
        els: ["label", "output"],
        docs: ["Describes elements which belongs to this one."],
    }),
    headers: attribute({
        name: "headers",
        values: "string",
        els: ["td", "th"],
        docs: ["IDs of the ``<th>`` elements which applies to this element."],
    }),
    height: attribute({
        name: "height",
        values: "string",
        els: ["canvas", "embed", "iframe", "img", "input", "object", "video"],
        docs: [
            "Specifies the height of elements listed here. For all other elements, use the CSS height property.",
        ],
    }),
    hidden: attribute({
        name: "hidden",
        toggleable: true,
        values: "boolean",
        els: true,
        docs: [
            "Prevents rendering of given element, while keeping child elements, e.g. script elements, active.",
        ],
    }),
    high: attribute({
        name: "high",
        values: "string",
        els: ["meter"],
        docs: ["Indicates the lower bound of the upper range."],
    }),
    href: attribute({
        name: "href",
        values: "string",
        els: ["a", "area", "base", "link"],
        docs: ["The URL of a linked resource."],
    }),
    hrefLang: attribute({
        name: "hreflang",
        values: "string",
        els: ["a", "area", "link"],
        docs: ["Specifies the language of the linked resource."],
    }),
    httpEquiv: attribute({
        name: "httpEquiv",
        values: [
            "content-security-policy",
            "content-type",
            "default-style",
            "x-ua-compatible",
            "refresh",
        ],
        els: ["meta"],
        docs: ["Defines a pragma directive."],
    }),
    icon: attribute({
        name: "icon",
        values: "string",
        els: ["command"],
        docs: ["Specifies a picture which represents the command."],
    }),
    id: attribute({
        name: "id",
        values: "string",
        els: true,
        docs: [
            "Often used with CSS to style a specific element. The value of this attribute must be unique.",
        ],
    }),
    importance: attribute({
        name: "importance",
        values: "string",
        els: ["iframe", "img", "link", "script"],
        docs: ["Indicates the relative fetch priority for the resource."],
    }),
    integrity: attribute({
        name: "integrity",
        values: "string",
        els: ["link", "script"],
        docs: [
            "Specifies a Subresource Integrity value that allows browsers to verify what they fetch.",
        ],
    }),
    intrinsicSize: attribute({
        name: "instrinsicsize",
        values: "string",
        els: ["img"],
        docs: [
            "This attribute tells the browser to ignore the actual intrinsic size of the image and pretend it's the size specified in the attribute.",
        ],
    }),
    inputMode: attribute({
        name: "inputmode",
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
    }),
    isMap: attribute({
        name: "ismap",
        toggleable: true,
        values: "boolean",
        els: ["img"],
        docs: ["Indicates that the image is part of a server-side image map."],
    }),
    itemProp: attribute({
        name: "itemprop",
        values: "string",
        els: true,
        docs: [],
    }),
    keyType: attribute({
        name: "keytype",
        values: ["RSA"],
        els: ["keygen"],
        docs: ["Specifies the type of key generated."],
    }),
    kind: attribute({
        name: "kind",
        values: [
            "subtitles",
            "captions",
            "descriptions",
            "chapters",
            "metadata",
        ],
        els: ["track"],
        docs: ["Specifies the kind of text track."],
    }),
    label: attribute({
        name: "label",
        values: "string",
        els: ["optgroup", "option", "track"],
        docs: ["Specifies a user-readable title of the element."],
    }),
    lang: attribute({
        name: "lang",
        values: "string",
        els: true,
        docs: ["Defines the language used in the element."],
    }),
    language: attribute({
        name: "language",
        values: "string",
        els: ["script"],
        docs: ["Defines the script language used in the element."],
    }),
    loading: attribute({
        name: "loading",
        values: ["lazy", "eager"],
        els: ["img", "iframe"],
        docs: [
            'Indicates if the element should be loaded lazily (loading="lazy") or loaded immediately (loading="eager").',
        ],
    }),
    list: attribute({
        name: "list",
        values: "string",
        els: ["input"],
        docs: [
            "Identifies a list of pre-defined options to suggest to the user.",
        ],
    }),
    loop: attribute({
        name: "loop",
        toggleable: true,
        values: "boolean",
        els: ["audio", "bgsound", "marquee", "video"],
        docs: [
            "Indicates whether the media should start playing from the start when it's finished.",
        ],
    }),
    low: attribute({
        name: "low",
        values: "string",
        els: ["meter"],
        docs: ["Indicates the upper bound of the lower range."],
    }),
    manifest: attribute({
        name: "manifest",
        values: "string",
        els: ["html"],
        docs: ["Specifies the URL of the document's cache manifest."],
    }),
    max: attribute({
        name: "max",
        values: "string",
        els: ["input", "meter", "progress"],
        docs: ["Indicates the maximum value allowed."],
    }),
    maxLength: attribute({
        name: "maxLength",
        values: "string",
        els: ["input", "textarea"],
        docs: [
            "Defines the maximum number of characters allowed in the element.",
        ],
    }),
    minLength: attribute({
        name: "minLength",
        values: "string",
        els: ["input", "textarea"],
        docs: [
            "Defines the minimum number of characters allowed in the element.",
        ],
    }),
    media: attribute({
        name: "media",
        values: "string",
        els: ["a", "area", "link", "source", "style"],
        docs: [
            "Specifies a hint of the media for which the linked resource was designed.",
        ],
    }),
    method: attribute({
        name: "method",
        values: ["post", "get", "dialog"],
        els: ["form"],
        docs: [
            "Defines which HTTP method to use when submitting the form. Can be GET (default) or POST.",
        ],
    }),
    min: attribute({
        name: "min",
        values: "string",
        els: ["input", "meter"],
        docs: ["Indicates the minimum value allowed."],
    }),
    multiple: attribute({
        name: "multiple",
        toggleable: true,
        values: "boolean",
        els: ["input", "select"],
        docs: [
            "Indicates whether multiple values can be entered in an input of the type email or file.",
        ],
    }),
    muted: attribute({
        name: "muted",
        toggleable: true,
        values: "boolean",
        els: ["audio", "video"],
        docs: [
            "Indicates whether the audio will be initially silenced on page load.",
        ],
    }),
    name: attribute({
        name: "name",

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
    }),
    nonce: attribute({
        name: "nonce",
        values: "string",
        els: ["script"],
        docs: [
            "A cryptographic nonce (number used once) to allow scripts in a script-src Content-Security-Policy. The server must generate a unique nonce value each time it transmits a policy. It is critical to provide a nonce that cannot be guessed as bypassing a resource's policy is otherwise trivial.",
        ],
    }),
    noShade: attribute({
        name: "noshade",
        type: "toggle",
        values: "boolean",
        els: ["hr"],
        docs: [
            "The HTML ``<hr>`` noshade Attribute is the boolean value and used to specify the solid horizontal line instead of shaded lines.",
        ],
    }),
    noModule: attribute({
        name: "nomodule",
        values: "string",
        els: ["script"],
        docs: [
            "This Boolean attribute is set to indicate that the script should not be executed in browsers that support ES modules — in effect, this can be used to serve fallback scripts to older browsers that do not support modular JavaScript code.",
        ],
    }),
    noValidate: attribute({
        name: "novalidate",
        values: "string",
        els: ["form"],
        docs: [
            "This attribute indicates that the form shouldn't be validated when submitted.",
        ],
    }),
    open: attribute({
        name: "open",
        toggleable: true,
        values: "boolean",
        els: ["details", "dialog"],
        docs: [
            "Indicates whether the contents are currently visible (in the case of a ``<details>`` element) or whether the dialog is active and can be interacted with (in the case of a ``<dialog>`` element).",
        ],
    }),
    optimum: attribute({
        name: "optimum",
        values: "string",
        els: ["meter"],
        docs: ["Indicates the optimal numeric value."],
    }),
    pattern: attribute({
        name: "pattern",
        values: "string",
        els: ["input"],
        docs: [
            "Defines a regular expression which the element's value will be validated against.",
        ],
    }),
    ping: attribute({
        name: "ping",
        values: "string",
        els: ["a", "area"],
        docs: [
            "The ping attribute specifies a space-separated list of URLs to be notified if a user follows the hyperlink.",
        ],
    }),
    placeholder: attribute({
        name: "placeholder",
        values: "string",
        els: ["input", "textarea"],
        docs: [
            "Provides a hint to the user of what can be entered in the field.",
        ],
    }),
    poster: attribute({
        name: "poster",
        values: "string",
        els: ["video"],
        docs: [
            "A URL indicating a poster frame to show until the user plays or seeks.",
        ],
    }),
    playsInline: attribute({
        name: "playsinline",
        toggleable: true,
        values: "string",
        els: true,
        docs: [],
    }),
    preload: attribute({
        name: "preload",
        values: "string",
        els: ["audio", "video"],
        docs: [
            "Indicates whether the whole resource, parts of it or nothing should be preloaded.",
        ],
    }),
    radioGroup: attribute({
        name: "radiogroup",
        values: "string",
        els: ["command"],
        docs: [],
    }),
    readOnly: attribute({
        name: "readonly",
        toggleable: true,
        values: "boolean",
        els: ["input", "textarea"],
        docs: ["Indicates whether the element can be edited."],
    }),
    referrerPolicy: attribute({
        name: "referrerpolicy",
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
    }),
    rel: attribute({
        name: "rel",
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
    }),
    required: attribute({
        name: "required",
        toggleable: true,
        values: "boolean",
        els: ["input", "select", "textarea"],
        docs: [
            "Indicates whether this element is required to fill out or not.",
        ],
    }),
    reversed: attribute({
        name: "reversed",
        values: "boolean",
        els: ["ol"],
        docs: [
            "Indicates whether the list should be displayed in a descending order instead of a ascending.",
        ],
    }),
    role: attribute({
        name: "role",

        values: "string",
        els: true,
        docs: [
            "Defines an explicit role for an element for use by assistive technologies.",
        ],
    }),
    rows: attribute({
        name: "rows",

        values: "number",
        els: ["textarea"],
        docs: ["Defines the number of rows in a text area."],
    }),
    rowSpan: attribute({
        name: "rowspan",
        values: "string",
        els: ["td", "th"],
        docs: ["Defines the number of rows a table cell should span over."],
    }),
    sandbox: attribute({
        name: "sandbox",
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
    }),
    scope: attribute({
        name: "scope",
        values: ["row", "col", "rowgroup", "colgroup"],
        els: ["th"],
        docs: [
            "Defines the cells that the header test (defined in the th element) relates to.",
        ],
    }),
    selected: attribute({
        name: "selected",
        toggleable: true,
        values: "boolean",
        els: ["option"],
        docs: ["Defines a value which will be selected on page load."],
    }),
    shape: attribute({
        name: "shape",
        values: "string",
        els: ["a", "area"],
        docs: [],
    }),
    size: attribute({
        name: "size",
        values: "string",
        els: ["input", "select"],
        docs: [
            "Defines the width of the element (in pixels). If the element's type attribute is text or password then it's the number of characters.",
        ],
    }),
    sizes: attribute({
        name: "sizes",
        values: "string",
        els: ["link", "img", "source"],
        docs: [],
    }),
    slot: attribute({
        name: "slot",
        values: "string",
        els: true,
        docs: ["Assigns a slot in a shadow DOM shadow tree to an element."],
    }),
    span: attribute({
        name: "span",
        values: "string",
        els: ["col", "colgroup"],
        docs: [],
    }),
    spellCheck: attribute({
        name: "spellcheck",
        values: ["true", "false"],
        els: true,
        docs: ["Indicates whether spell checking is allowed for the element."],
    }),
    src: attribute({
        name: "src",
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
    }),
    srcDoc: attribute({
        name: "srcdoc",
        values: "string",
        els: ["iframe"],
        docs: [],
    }),
    srcLang: attribute({
        name: "srclang",
        values: "string",
        els: ["track"],
        docs: [],
    }),
    srcSet: attribute({
        name: "srcset",
        values: "string",
        els: ["img", "source"],
        docs: ["One or more responsive image candidates."],
    }),
    start: attribute({
        name: "start",
        values: "string",
        els: ["ol"],
        docs: ["Defines the first number if other than 1."],
    }),
    step: attribute({
        name: "step",
        values: "string",
        els: ["input"],
        docs: [],
    }),
    summary: attribute({
        name: "summary",
        values: "string",
        els: ["table"],
        docs: [],
    }),
    tabIndex: attribute({
        name: "tabindex",
        values: "string",
        els: true,
        docs: [
            "Overrides the browser's default tab order and follows the one specified instead.",
        ],
    }),
    target: attribute({
        name: "target",
        values: ["_self", "_blank", "_parent", "_top"],
        els: ["a", "area", "base", "form"],
        docs: [
            "Specifies where to open the linked document (in the case of an ``<a>`` element) or where to display the response received (in the case of a ``<form>`` element)",
        ],
    }),
    title: attribute({
        name: "title",
        values: "string",
        els: true,
        docs: [
            "Text to be displayed in a tooltip when hovering over the element.",
        ],
    }),
    translate: attribute({
        name: "translate",
        values: ["yes", "no"],
        els: true,
        docs: [
            "Specify whether an element's attribute values and the values of its Text node children are to be translated when the page is localized, or whether to leave them unchanged.",
        ],
    }),
    type: attribute({
        name: "type",
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
    }),
    useMap: attribute({
        name: "usemap",
        values: "string",
        els: ["img", "input", "object"],
        docs: [
            "Defines a default value which will be displayed in the element on page load.",
        ],
    }),
    value: attribute({
        name: "value",
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
    }),
    width: attribute({
        name: "width",
        values: "string",
        els: ["canvas", "embed", "iframe", "img", "input", "object", "video"],
        docs: [
            "For the elements listed here, this establishes the element's width.",
        ],
    }),
    wrap: attribute({
        name: "wrap",
        values: ["hard", "soft", "off"],
        els: ["textarea"],
        docs: ["Indicates whether the text should be wrapped."],
    }),
};
