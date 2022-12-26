import { component } from "../../templates/index.js";

export const items = {
    Address: component({
        tag: "address",
        props: {},
        nativeInterface: "HTMLElement",
        docs: [
            "The `<address>` HTML element indicates that",
            "the enclosed HTML provides contact information ",
            "for a person or people, or for an organization.",
        ],
    }),
    Article: component({
        tag: "article",
        props: {},
        nativeInterface: "HTMLElement",
        docs: [
            "The `<article>` HTML element represents a self-contained composition in a",
            "document, page, application, or site, which is intended to be independently",
            "distributable or reusable (e.g., in syndication). Examples include: a forum post,",
            "a magazine or newspaper article, or a blog entry, a product card, a user-",
            "submitted comment, an interactive widget or gadget, or any other",
            "independent item of content.",
        ],
    }),
    Aside: component({
        tag: "aside",
        props: {},
        nativeInterface: "HTMLElement",
        docs: [
            "The `<aside>` HTML element represents a portion of a document whose",
            "content is only indirectly related to the document's main content. Asides are",
            "frequently presented as sidebars or call-out boxes.",
        ],
    }),
    Footer: component({
        tag: "footer",
        props: {},
        nativeInterface: "HTMLElement",
        docs: [
            "The `<footer>` HTML element represents a footer for its nearest ancestor",
            "sectioning content or sectioning root element. A <footer> typically contains",
            "information about the author of the section, copyright data or links to related documents.",
        ],
    }),
    Header: component({
        tag: "header",
        props: {},
        nativeInterface: "HTMLElement",
        docs: [
            "The `<header>` HTML element represents introductory content, typically a",
            "group of introductory or navigational aids. It may contain some heading",
            "elements but also a logo, a search form, an author name, and other elements.",
        ],
    }),
    H1: component({
        tag: "h1",
        props: {},
        nativeInterface: "HTMLHeadingElement",
        docs: [
            "The `<h1>` to `<h6>` HTML elements represent six levels of section headings.",
            "`<h1>` is the highest section level and `<h6>` is the lowest.",
        ],
    }),
    H2: component({
        tag: "h2",
        props: {},
        nativeInterface: "HTMLHeadingElement",
        docs: [
            "The `<h1>` to `<h6>` HTML elements represent six levels of section headings.",
            "`<h1>` is the highest section level and `<h6>` is the lowest.",
        ],
    }),
    H3: component({
        tag: "h3",
        props: {},
        nativeInterface: "HTMLHeadingElement",
        docs: [
            "The `<h1>` to `<h6>` HTML elements represent six levels of section headings.",
            "`<h1>` is the highest section level and `<h6>` is the lowest.",
        ],
    }),
    H4: component({
        tag: "h4",
        props: {},
        nativeInterface: "HTMLHeadingElement",
        docs: [
            "The `<h1>` to `<h6>` HTML elements represent six levels of section headings.",
            "`<h1>` is the highest section level and `<h6>` is the lowest.",
        ],
    }),
    H5: component({
        tag: "h5",
        props: {},
        nativeInterface: "HTMLHeadingElement",
        docs: [
            "The `<h1>` to `<h6>` HTML elements represent six levels of section headings.",
            "`<h1>` is the highest section level and `<h6>` is the lowest.",
        ],
    }),
    H6: component({
        tag: "h6",
        props: {},
        nativeInterface: "HTMLHeadingElement",
        docs: [
            "The `<h1>` to `<h6>` HTML elements represent six levels of section headings.",
            "`<h1>` is the highest section level and `<h6>` is the lowest.",
        ],
    }),
    Main: component({
        tag: "main",
        props: {},
        nativeInterface: "HTMLElement",
        docs: [
            "The <main> HTML element represents the dominant content of the body of",
            "a document. The main content area consists of content that is directly related",
            "to or expands upon the central topic of a document, or the central",
            "functionality of an application.",
        ],
    }),
    Nav: component({
        tag: "nav",
        props: {},
        nativeInterface: "HTMLElement",
        docs: [
            "The `<nav>` HTML element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes.",
        ],
    }),
    Section: component({
        tag: "section",
        props: {},
        nativeInterface: "HTMLElement",
        docs: [
            "The `<section>` HTML element represents a generic standalone section of a document, which doesn't have a more specific semantic element to represent it. Sections should always have a heading, with very few exceptions.",
        ],
    }),
    Blockquote: component({
        tag: "blockquote",
        props: { cite: "string" },
        nativeInterface: "HTMLQuoteElement",
        docs: [
            "The `<blockquote>` HTML element indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation (see Notes for how to change it). A URL for the source of the quotation may be given using the cite attribute, while a text representation of the source can be given using the cite element.",
        ],
    }),
    Dd: component({
        tag: "dd",
        props: {},
        nativeInterface: "HTMLElement",
        docs: [
            "The `<dd>` HTML element provides the description, definition, or value for the preceding term (dt) in a description list (dl).",
        ],
    }),
    Div: component({
        tag: "div",
        props: {},
        nativeInterface: "HTMLDivElement",
        docs: [
            "The `<div>` HTML element is the generic container for flow content. It has no effect on the content or layout until styled in some way using CSS (e.g. styling is directly applied to it, or some kind of layout model like FlexBox is applied to its parent element).",
        ],
    }),
    Dl: component({
        tag: "dl",
        props: {},
        nativeInterface: "HTMLDListElement",
        docs: [
            "The `<dl>` HTML element represents a description list. The element encloses a list of groups of terms (specified using the dt element) and descriptions (provided by dd elements). Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs).",
        ],
    }),
    Dt: component({
        tag: "dt",
        props: {},
        nativeInterface: "HTMLElement",
        docs: [
            "The `<dt>` HTML element specifies a term in a description or definition list, and as such must be used inside a dl element. It is usually followed by a dd element; however, multiple <dt> elements in a row indicate several terms that are all defined by the immediate next dd element.",
        ],
    }),
    Figcaption: component({
        tag: "figcaption",
        props: {},
        nativeInterface: "HTMLElement",
        docs: [
            "The `<figcaption>` HTML element represents a caption or legend describing the rest of the contents of its parent figure element.",
        ],
    }),
    Figure: component({
        tag: "figure",
        props: {},
        nativeInterface: "HTMLElement",
        docs: [
            "The `<figure>` HTML element represents self-contained content, potentially with an optional caption, which is specified using the figcaption element. The figure, its caption, and its contents are referenced as a single unit.",
        ],
    }),
    Hr: component({
        tag: "hr",
        nativeInterface: "HTMLHRElement",
        props: {
            align: "string",
            color: "Color",
            noShade: "string",
            size: "string",
            width: "string",
        },
        childless: true,
        docs: [
            "The `<hr>` HTML element represents a thematic break between paragraph-level elements: for example, a change of scene in a story, or a shift of topic within a section.",
        ],
    }),
    Li: component({
        tag: "li",
        props: { value: "string", type: "string" },
        nativeInterface: "HTMLLIElement",
        docs: [
            "The `<li>` HTML element is used to represent an item in a list. It must be contained in a parent element: an ordered list (ol), an unordered list (ul), or a menu (menu). In menus and unordered lists, list items are usually displayed using bullet points. In ordered lists, they are usually displayed with an ascending counter on the left, such as a number or letter.",
        ],
    }),
    Menu: component({
        tag: "menu",
        props: {},
        nativeInterface: "HTMLMenuElement",
        docs: [
            "The `<menu>` HTML element is described in the HTML specification as a semantic alternative to ul, but treated by browsers (and exposed through the accessibility tree) as no different than ul. It represents an unordered list of items (which are represented by li elements).",
        ],
    }),
    Ol: component({
        tag: "ol",
        props: {
            reversed: "boolean",
            start: "string",
            type: `"a"|"A"|"i"|"I"|"1"`,
        },
        nativeInterface: "HTMLOListElement",
        docs: [
            "The `<ol>` HTML element represents an ordered list of items — typically rendered as a numbered list.",
        ],
    }),
    P: component({
        tag: "p",
        props: {},
        nativeInterface: "HTMLParagraphElement",
        docs: [
            "The `<p>` HTML element represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural grouping of related content, such as images or form fields.",
        ],
    }),
    Pre: component({
        tag: "pre",
        props: { cols: "string", width: "string", wrap: "string" },
        nativeInterface: "HTMLPreElement",
        docs: [
            "The `<pre>` HTML element represents preformatted text which is to be presented exactly as written in the HTML file. The text is typically rendered using a non-proportional, or monospaced, font. Whitespace inside this element is displayed as written.",
        ],
    }),
    Ul: component({
        tag: "ul",
        props: { compact: "boolean", type: "string" },
        nativeInterface: "HTMLUListElement",
        docs: [
            "The `<ul>` HTML element represents an unordered list of items, typically rendered as a bulleted list.",
        ],
    }),
    A: component({
        tag: "a",
        nativeInterface: "HTMLAnchorElement",
        props: {
            download: "string",
            href: "string",
            hrefLang: "string",
            ping: "string",
            referrerPolicy: `"no-referrer"|"no-referrer-when-downgrade"|"origin"|"origin-when-cross-origin"|"same-origin"|"strict-origin"|"strict-origin-when-cross-origin"|"unsafe-url"`,
            rel: "string",
            target: `"_self"|"_blank"|"_parent"|"_top"`,
            type: "string",
        },
        docs: [
            "The `<a>` HTML element (or anchor element), with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address.",
        ],
    }),
    Abbr: component({
        tag: "abbr",
        props: {},
        nativeInterface: "HTMLElement",
        docs: [
            "The `<abbr>` HTML element represents an abbreviation or acronym.",
        ],
    }),
    B: component({
        tag: "b",
        props: {},
        nativeInterface: "HTMLElement",
        docs: [
            "The `<b>` HTML element is used to draw the reader's attention to the element's contents, which are not otherwise granted special importance. This was formerly known as the Boldface element, and most browsers still draw the text in boldface. However, you should not use `<b>` for styling text; instead, you should use the CSS font-weight property to create boldface text, or the strong element to indicate that text is of special importance.",
        ],
    }),
    Bdi: component({
        tag: "bdi",
        props: { dir: "string" },
        nativeInterface: "HTMLElement",
        docs: [
            "The `<bdi>` HTML element tells the browser's bidirectional algorithm to treat the text it contains in isolation from its surrounding text. It's particularly useful when a website dynamically inserts some text and doesn't know the directionality of the text being inserted.",
        ],
    }),
    Bdo: component({
        tag: "bdo",
        props: { dir: "string" },
        nativeInterface: "HTMLElement",
        docs: [
            "The `<bdo> `HTML element overrides the current directionality of text, so that the text within is rendered in a different direction.",
        ],
    }),
    Br: component({
        tag: "br",
        props: {},
        childless: true,
        nativeInterface: "HTMLBRElement",
        docs: [
            "The `<br>` HTML element produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant.",
        ],
    }),
    Cite: component({
        tag: "cite",
        props: {},
        nativeInterface: "HTMLElement",
        docs: [
            "The `<cite>` HTML element is used to describe a reference to a cited creative work, and must include the title of that work. The reference may be in an abbreviated form according to context-appropriate conventions related to citation metadata.",
        ],
    }),
    Code: component({
        tag: "code",
        props: {},
        nativeInterface: "HTMLElement",
        docs: [
            "The `<code>` HTML element displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code. By default, the content text is displayed using the user agent default monospace font.",
        ],
    }),
    Data: component({
        tag: "data",
        props: { value: "string" },
        nativeInterface: "HTMLDataElement",
        docs: [
            "The `<data>` HTML element links a given piece of content with a machine-readable translation. If the content is time- or date-related, the time element must be used.",
        ],
    }),
    Dfn: component({
        tag: "dfn",
        props: {},
        nativeInterface: "HTMLElement",
        docs: [
            "The `<dfn>` HTML element is used to indicate the term being defined within the context of a definition phrase or sentence. The p element, the dt/dd pairing, or the section element which is the nearest ancestor of the `<dfn>` is considered to be the definition of the term.",
        ],
    }),
    Em: component({
        tag: "em",
        props: {},
        nativeInterface: "HTMLElement",
        docs: [
            "The `<em>` HTML element marks text that has stress emphasis. The `<em>` element can be nested, with each level of nesting indicating a greater degree of emphasis.",
        ],
    }),
    I: component({
        tag: "i",
        props: {},
        nativeInterface: "HTMLElement",
        docs: [
            "The `<i>` HTML element represents a range of text that is set off from the normal text for some reason, such as idiomatic text, technical terms, taxonomical designations, among others. Historically, these have been presented using italicized type, which is the original source of the `<i>` naming of this element.",
        ],
    }),
    Kbd: component({
        tag: "kdb",
        props: {},
        nativeInterface: "HTMLElement",
        docs: [
            "The `<kbd>` HTML element represents a span of inline text denoting textual user input from a keyboard, voice input, or any other text entry device. By convention, the user agent defaults to rendering the contents of a `<kbd>` element using its default monospace font, although this is not mandated by the HTML standard.",
        ],
    }),
    Mark: component({
        tag: "mark",
        props: {},
        nativeInterface: "HTMLElement",
        docs: [
            "The `<mark>` HTML element represents text which is marked or highlighted for reference or notation purposes, due to the marked passage's relevance or importance in the enclosing context.",
        ],
    }),
    Q: component({
        tag: "q",
        props: { cite: "string" },
        nativeInterface: "HTMLQuoteElement",
        docs: [
            "The `<q>` HTML element indicates that the enclosed text is a short inline quotation. Most modern browsers implement this by surrounding the text in quotation marks. This element is intended for short quotations that don't require paragraph breaks; for long quotations use the blockquote element.",
        ],
    }),
    Rp: component({
        tag: "rp",
        props: {},
        nativeInterface: "HTMLElement",
        docs: [
            "The `<rp>` HTML element is used to provide fall-back parentheses for browsers that do not support display of ruby annotations using the ruby element. One `<rp>` element should enclose each of the opening and closing parentheses that wrap the rt element that contains the annotation's text.",
        ],
    }),
    Rt: component({
        tag: "rt",
        props: {},
        nativeInterface: "HTMLElement",
        docs: [
            "The `<rt>` HTML element specifies the ruby text component of a ruby annotation, which is used to provide pronunciation, translation, or transliteration information for East Asian typography. The `<rt>` element must always be contained within a ruby element.",
        ],
    }),
    Ruby: component({
        tag: "ruby",
        props: {},
        nativeInterface: "HTMLElement",
        docs: [
            "The `<ruby>` HTML element represents small annotations that are rendered above, below, or next to base text, usually used for showing the pronunciation of East Asian characters. It can also be used for annotating other kinds of text, but this usage is less common.",
        ],
    }),
    S: component({
        tag: "s",
        props: {},
        nativeInterface: "HTMLElement",
        docs: [
            "The `<s>` HTML element renders text with a strikethrough, or a line through it. Use the <s> element to represent things that are no longer relevant or no longer accurate. However, <s> is not appropriate when indicating document edits; for that, use the del and ins elements, as appropriate.",
        ],
    }),
    Samp: component({
        tag: "samp",
        props: {},
        nativeInterface: "HTMLElement",
        docs: [
            "The `<samp>` HTML element is used to enclose inline text which represents sample (or quoted) output from a computer program. Its contents are typically rendered using the browser's default monospaced font (such as Courier or Lucida Console).",
        ],
    }),
    Small: component({
        tag: "small",
        props: {},
        nativeInterface: "HTMLElement",
        docs: [
            "The `<small>` HTML element represents side-comments and small print, like copyright and legal text, independent of its styled presentation. By default, it renders text within it one font-size smaller, such as from small to x-small.",
        ],
    }),
    Span: component({
        tag: "span",
        props: {},
        nativeInterface: "HTMLSpanElement",
        docs: [
            "The `<span>` HTML element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element is appropriate. `<span>` is very much like a div element, but div is a block-level element whereas a `<span>` is an inline element.",
        ],
    }),
    Strong: component({
        tag: "strong",
        props: {},
        nativeInterface: "HTMLElement",
        docs: [
            "The `<strong>` HTML element indicates that its contents have strong importance, seriousness, or urgency. Browsers typically render the contents in bold type.",
        ],
    }),
    Sub: component({
        tag: "sub",
        props: {},
        nativeInterface: "HTMLElement",
        docs: [
            "The `<sub>` HTML element specifies inline text which should be displayed as subscript for solely typographical reasons. Subscripts are typically rendered with a lowered baseline using smaller text.",
        ],
    }),
    Sup: component({
        tag: "sup",
        props: {},
        nativeInterface: "HTMLElement",
        docs: [
            "The `<sup>` HTML element specifies inline text which is to be displayed as superscript for solely typographical reasons. Superscripts are usually rendered with a raised baseline using smaller text.",
        ],
    }),
    Time: component({
        tag: "time",
        props: { dateTime: "string" },
        nativeInterface: "HTMLTimeElement",
        docs: [
            "The `<time>` HTML element represents a specific period in time. It may include the datetime attribute to translate dates into machine-readable format, allowing for better search engine results or custom features such as reminders.",
        ],
    }),
    U: component({
        tag: "u",
        props: {},
        nativeInterface: "HTMLElement",
        docs: [
            "The `<u>` HTML element represents a span of inline text which should be rendered in a way that indicates that it has a non-textual annotation. This is rendered by default as a simple solid underline, but may be altered using CSS.",
        ],
    }),
    Var: component({
        tag: "var",
        props: {},
        nativeInterface: "HTMLElement",
        docs: [
            "The `<var>` HTML element represents the name of a variable in a mathematical expression or a programming context. It's typically presented using an italicized version of the current typeface, although that behavior is browser-dependent.",
        ],
    }),
    Wbr: component({
        tag: "wbr",
        props: {},
        nativeInterface: "HTMLElement",
        docs: [
            "The `<wbr>` HTML element represents a word break opportunity—a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that location",
        ],
    }),
    Area: component({
        tag: "area",
        props: {
            alt: "string",
            coords: "string",
            download: "string",
            href: "string",
            hrefLang: "string",
            ping: "string",
            referrerPolicy: `"no-referrer"|"no-referrer-when-downgrade"|"origin"|"origin-when-cross-origin"|"same-origin"|"strict-origin"|"strict-origin-when-cross-origin"|"unsafe-url"`,
            rel: "string",
            shape: "string",
            target: `"_self"|"_blank"|"_parent"|"_top"`,
        },
        childless: true,
        nativeInterface: "HTMLAreaElement",
        docs: [
            "The `<area>` HTML element defines an area inside an image map that has predefined clickable areas. An image map allows geometric areas on an image to be associated with Hyperlink.",
        ],
    }),
    Audio: component({
        tag: "audio",
        nativeInterface: "HTMLAudioElement",
        props: {
            autoplay: "boolean",
            controls: "boolean",
            crossOrigin: "string",
            loop: "boolean",
            muted: "boolean",
            preload: "string",
            src: "string",
        },
        docs: [
            "The `<audio>` HTML element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the source element: the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream.",
        ],
    }),
    Img: component({
        tag: "img",
        nativeInterface: "HTMLImageElement",
        props: {
            alt: "string",
            crossOrigin: "string",
            decoding: "string",
            height: "number",
            isMap: "boolean",
            loading: "string",
            referrerPolicy: `"no-referrer"|"no-referrer-when-downgrade"|"origin"|"origin-when-cross-origin"|"same-origin"|"strict-origin"|"strict-origin-when-cross-origin"|"unsafe-url"`,
            sizes: "string",
            src: "string",
            srcSet: "string",
            width: "number",
            useMap: "string",
        },
        childless: true,
        docs: ["The `<img>` HTML element embeds an image into the document."],
    }),
    Map: component({
        tag: "map",
        props: { name: "string" },
        nativeInterface: "HTMLMapElement",
        docs: [
            "The `<map>` HTML element is used with area elements to define an image map (a clickable link area).",
        ],
    }),
    Track: component({
        tag: "track",
        props: {
            def: "string",
            kind: "string",
            label: "string",
            src: "string",
            srcLang: "string",
        },
        childless: true,
        nativeInterface: "HTMLTrackElement",
        docs: [
            "The `<track>` HTML element is used as a child of the media elements, audio and video. It lets you specify timed text tracks (or time-based data), for example to automatically handle subtitles. The tracks are formatted in WebVTT format (.vtt files) — Web Video Text Tracks.",
        ],
    }),
    Video: component({
        tag: "video",
        props: {
            autoplay: "boolean",
            crossOrigin: "string",
            height: "number",
            loop: "boolean",
            muted: "boolean",
            playsInline: "boolean",
            poster: "string",
            preload: "string",
            src: "string",
            width: "number",
        },
        nativeInterface: "HTMLVideoElement",
        docs: [
            "The `<video>` HTML element embeds a media player which supports video playback into the document. You can use `<video>` for audio content as well, but the audio element may provide a more appropriate user experience.",
        ],
    }),
    Embed: component({
        tag: "embed",
        props: {
            height: "number",
            src: "string",
            type: "string",
            width: "number",
        },
        nativeInterface: "HTMLEmbedElement",
        docs: [
            "The `<embed>` HTML element embeds external content at the specified point in the document. This content is provided by an external application or other source of interactive content such as a browser plug-in.",
        ],
    }),
    Iframe: component({
        tag: "iframe",
        props: {
            allow: "string",
            allowFullScreen: "boolean",
            allowPaymentRequest: "boolean",
            // fetchPriority: "string",
            height: "number",
            loading: "string",
            name: "string",
            referrerPolicy: `"no-referrer"|"no-referrer-when-downgrade"|"origin"|"origin-when-cross-origin"|"same-origin"|"strict-origin"|"strict-origin-when-cross-origin"|"unsafe-url"`,
            sandbox: "string",
            src: "string",
            srcDoc: "string",
            width: "number",
        },
        nativeInterface: "HTMLIFrameElement",
        docs: [
            "The `<iframe>` HTML element represents a nested browsing context, embedding another HTML page into the current one.",
        ],
    }),
    Object: component({
        tag: "object",
        props: {
            data: "string",
            form: "string",
            height: "number",
            name: "string",
            type: "string",
            useMap: "string",
            width: "number",
        },
        nativeInterface: "HTMLObjectElement",
        docs: [
            "The `<object>` HTML element represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin.",
        ],
    }),
    Picture: component({
        tag: "picture",
        props: {},
        nativeInterface: "HTMLPictureElement",
        docs: [
            "The `<picture>` HTML element contains zero or more source elements and one img element to offer alternative versions of an image for different display/device scenarios.",
        ],
    }),
    Portal: component({
        tag: "portal",
        props: { src: "string" },
        nativeInterface: "HTMLElement",
        docs: [
            "The `<portal>` HTML element enables the embedding of another HTML page into the current one for the purposes of allowing smoother navigation into new pages.",
        ],
    }),
    Source: component({
        tag: "source",
        props: { type: "string" },
        nativeInterface: "HTMLSourceElement",
        docs: [
            "The `<source>` HTML element specifies multiple media resources for the picture, the audio element, or the video element. It is an empty element, meaning that it has no content and does not have a closing tag. It is commonly used to offer the same media content in multiple file formats in order to provide compatibility with a broad range of browsers given their differing support for image file formats and media file formats.",
        ],
    }),
    Canvas: component({
        tag: "canvas",
        props: { height: "number", width: "number" },
        nativeInterface: "HTMLCanvasElement",
        docs: [
            "Use the HTML `<canvas>` element with either the canvas scripting API or the WebGL API to draw graphics and animations.",
        ],
    }),
    Noscript: component({
        tag: "noscript",
        props: {},
        nativeInterface: "HTMLElement",
        docs: [
            "The `<noscript>` HTML element defines a section of HTML to be inserted if a script type on the page is unsupported or if scripting is currently turned off in the browser.",
        ],
    }),
    Del: component({
        tag: "del",
        props: { cite: "string", dateTime: "string" },
        nativeInterface: "HTMLModElement",
        docs: [
            'The `<del>` HTML element represents a range of text that has been deleted from a document. This can be used when rendering "track changes" or source code diff information, for example. The ins element can be used for the opposite purpose: to indicate text that has been added to the document.',
        ],
    }),
    Ins: component({
        tag: "ins",
        props: { cite: "string", dateTime: "string" },
        nativeInterface: "HTMLModElement",
        docs: [
            "The `<ins>` HTML element represents a range of text that has been added to a document. You can use the del element to similarly represent a range of text that has been deleted from the document.",
        ],
    }),
    Caption: component({
        tag: "caption",
        props: {},
        nativeInterface: "HTMLTableCaptionElement",
        docs: [
            "The `<caption>` HTML element specifies the caption (or title) of a table.",
        ],
    }),
    Col: component({
        tag: "col",
        props: { span: "number" },
        nativeInterface: "HTMLTableColElement",
        docs: [
            "The `<col>` HTML element defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a colgroup element.",
        ],
    }),
    Colgroup: component({
        tag: "colgroup",
        props: { span: "number" },
        nativeInterface: "HTMLTableColElement",
        docs: [
            "The `<colgroup>` HTML element defines a group of columns within a table.",
        ],
    }),
    Table: component({
        tag: "table",
        props: {},
        nativeInterface: "HTMLTableElement",
        docs: [
            "The `<table>` HTML element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.",
        ],
    }),
    Tbody: component({
        tag: "tbody",
        props: {},
        nativeInterface: "HTMLTableSectionElement",
        docs: [
            "The `<tbody>` HTML element encapsulates a set of table rows (tr elements), indicating that they comprise the body of the table (table).",
        ],
    }),
    Td: component({
        tag: "td",
        props: { colSpan: "number", headers: "string", rowSpan: "number" },
        nativeInterface: "HTMLTableCellElement",
        docs: [
            "The `<td>` HTML element defines a cell of a table that contains data. It participates in the table model.",
        ],
    }),
    Tfoot: component({
        tag: "tfoot",
        props: {},
        nativeInterface: "HTMLTableSectionElement",
        docs: [
            "The `<tfoot>` HTML element defines a set of rows summarizing the columns of the table.",
        ],
    }),
    Th: component({
        tag: "th",
        props: {
            // abbr: "string",
            colSpan: "number",
            headers: "string",
            rowSpan: "number",
            scope: "string",
        },
        docs: [
            "The `<th>` HTML element defines a cell as header of a group of table cells. The exact nature of this group is defined by the scope and headers attributes.",
        ],
        nativeInterface: "HTMLTableCellElement",
    }),
    Thead: component({
        tag: "thead",
        props: {},
        nativeInterface: "HTMLTableSectionElement",
        docs: [
            "The `<thead>` HTML element defines a set of rows defining the head of the columns of the table.",
        ],
    }),
    Tr: component({
        tag: "tr",
        props: {},
        nativeInterface: "HTMLTableRowElement",
        docs: [
            "The `<tr>` HTML element defines a row of cells in a table. The row's cells can then be established using a mix of td (data cell) and th (header cell) elements.",
        ],
    }),
    Button: component({
        tag: "button",
        nativeInterface: "HTMLButtonElement",
        props: {
            autoFocus: "boolean",
            disabled: "boolean",
            form: "string",
            formAction: "string",
            formEncType: "string",
            formMethod: "string",
            formNoValidate: "string",
            formTarget: `"_self"|"_blank"|"_parent"|"_top"`,
            name: "string",
            type: "string",
            value: "string",
        },
        docs: [
            "The `<button>` HTML element is an interactive element activated by a user with a mouse, keyboard, finger, voice command, or other assistive technology. Once activated, it then performs a programmable action, such as submitting a form or opening a dialog.",
        ],
    }),
    Datalist: component({
        tag: "datalist",
        props: {},
        nativeInterface: "HTMLDataListElement",
        docs: [
            "The `<datalist>` HTML element contains a set of option elements that represent the permissible or recommended options available to choose from within other controls.",
        ],
    }),
    Fieldset: component({
        tag: "fieldset",
        props: { disabled: "boolean", form: "string", name: "string" },
        nativeInterface: "HTMLFieldSetElement",
        docs: [
            "The `<fieldset>` HTML element is used to group several controls as well as labels (label) within a web form.",
        ],
    }),
    Form: component({
        tag: "form",
        nativeInterface: "HTMLFormElement",
        props: {
            acceptCharSet: "string",
            autoComplete: "string",
            name: "string",
            rel: "string",
            action: "string",
            encType: "string",
            method: "string",
            noValidate: "string",
            target: `"_self"|"_blank"|"_parent"|"_top"`,
        },
        docs: [
            "The `<form>` HTML element represents a document section containing interactive controls for submitting information.",
        ],
    }),
    Input: component({
        tag: "input",
        nativeInterface: "HTMLInputElement",
        props: {
            accept: "string",
            alt: "string",
            autoComplete: "string",
            capture: "string",
            checked: "boolean",
            dirName: "string",
            disabled: "boolean",
            form: "string",
            form: "string",
            formAction: "string",
            formEncType: "string",
            formMethod: "string",
            formNoValidate: "string",
            formTarget: `"_self"|"_blank"|"_parent"|"_top"`,
            height: "number",
            list: "string",
            max: "number",
            maxLength: "number",
            min: "number",
            minLength: "number",
            multiple: "boolean",
            name: "string",
            pattern: "string",
            placeholder: "string",
            readOnly: "boolean",
            required: "boolean",
            size: "number",
            src: "string",
            step: "number",
            type: "string",
            value: "string",
            width: "number",
        },
        childless: true,
        docs: [
            "The `<input>` HTML element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. The <input> element is one of the most powerful and complex in all of HTML due to the sheer number of combinations of input types and attributes.",
        ],
    }),
    Label: component({
        tag: "label",
        props: { isFor: "string" },
        nativeInterface: "HTMLLabelElement",
        docs: [
            "The `<label>` HTML element represents a caption for an item in a user interface.",
        ],
    }),
    Legend: component({
        tag: "legend",
        props: {},
        nativeInterface: "HTMLLegendElement",
        docs: [
            "The `<legend>` HTML element represents a caption for the content of its parent fieldset.",
        ],
    }),
    Meter: component({
        tag: "meter",
        nativeInterface: "HTMLMeterElement",
        props: {
            value: "number",
            min: "number",
            max: "number",
            low: "number",
            high: "number",
            optimum: "number",
        },
        docs: [
            "The `<meter>` HTML element represents either a scalar value within a known range or a fractional value.",
        ],
    }),
    Optgroup: component({
        tag: "optgroup",
        props: { disabled: "boolean", label: "string" },
        nativeInterface: "HTMLOptGroupElement",
        docs: [
            "The `<optgroup>` HTML element creates a grouping of options within a select element.",
        ],
    }),
    Option: component({
        tag: "option",
        nativeInterface: "HTMLOptionElement",
        props: {
            disabled: "boolean",
            label: "string",
            selected: "boolean",
            value: "string",
        },
        docs: [
            "The <option> HTML element is used to define an item contained in a select, an optgroup, or a datalist element. As such, <option> can represent menu items in popups and other lists of items in an HTML document.",
        ],
    }),
    Output: component({
        tag: "output",
        props: { isFor: "string", form: "string", name: "string" },
        nativeInterface: "HTMLOutputElement",
        docs: [
            "The `<output>` HTML element is a container element into which a site or app can inject the results of a calculation or the outcome of a user action.",
        ],
    }),
    Progress: component({
        tag: "progress",
        props: { max: "number", value: "number" },
        nativeInterface: "HTMLProgressElement",
        docs: [
            "The `<progress>` HTML element displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
        ],
    }),
    Select: component({
        tag: "select",
        nativeInterface: "HTMLSelectElement",
        props: {
            autoComplete: "string",
            autoFocus: "boolean",
            disabled: "boolean",
            form: "string",
            multiple: "boolean",
            name: "string",
            required: "boolean",
            size: "number",
        },
        docs: [
            "The `<select>` HTML element represents a control that provides a menu of options.",
        ],
    }),
    TextArea: component({
        tag: "textarea",
        nativeInterface: "HTMLTextAreaElement",
        props: {
            autoComplete: "string",
            autoFocus: "boolean",
            cols: "string",
            disabled: "boolean",
            form: "string",
            maxLength: "number",
            name: "string",
            placeholder: "string",
            readOnly: "boolean",
            required: "rows",
            spellCheck: "string",
            wrap: "string",
        },
        docs: [
            "The `<textarea>` HTML element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.",
        ],
    }),
    Details: component({
        tag: "details",
        props: { open: "boolean" },
        nativeInterface: "HTMLDetailsElement",
        docs: [
            'The `<details>` HTML element creates a disclosure widget in which information is visible only when the widget is toggled into an "open" state. A summary or label must be provided using the summary element.',
        ],
    }),
    Dialog: component({
        tag: "dialog",
        props: { open: "boolean" },
        nativeInterface: "HTMLDialogElement",
        docs: [
            "The `<dialog>` HTML element represents a dialog box or other interactive component, such as a dismissible alert, inspector, or sub window.",
        ],
    }),
    Summary: component({
        tag: "summary",
        props: {},
        nativeInterface: "HTMLElement",
        docs: [
            "The `<summary>` HTML element specifies a summary, caption, or legend for a details element's disclosure box. Clicking the <summary> element toggles the state of the parent <details> element open and closed.",
        ],
    }),
    Slot: component({
        tag: "slot",
        props: { name: "string" },
        nativeInterface: "HTMLSlotElement",
        docs: [
            "The `<slot>` HTML element—part of the Web Components technology suite—is a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together.",
        ],
    }),
    Template: component({
        tag: "template",
        props: {},
        nativeInterface: "HTMLTemplateElement",
        docs: [
            "The `<template>` HTML element is a mechanism for holding HTML that is not to be rendered immediately when a page is loaded but may be instantiated subsequently during runtime using JavaScript.",
        ],
    }),
};
