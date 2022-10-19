/**
 *  ██████╗ ███████╗███╗   ██╗███████╗██████╗  █████╗ ████████╗███████╗██████╗
 * ██╔════╝ ██╔════╝████╗  ██║██╔════╝██╔══██╗██╔══██╗╚══██╔══╝██╔════╝██╔══██╗
 * ██║  ███╗█████╗  ██╔██╗ ██║█████╗  ██████╔╝███████║   ██║   █████╗  ██║  ██║
 * ██║   ██║██╔══╝  ██║╚██╗██║██╔══╝  ██╔══██╗██╔══██║   ██║   ██╔══╝  ██║  ██║
 * ╚██████╔╝███████╗██║ ╚████║███████╗██║  ██║██║  ██║   ██║   ███████╗██████╔╝
 *  ╚═════╝ ╚══════╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═════╝
 */
import { createElement } from "../packages/components";
import CustomElements from "../packages/components/utility";

/**
 * ## Address
 * The `<address>` HTML element indicates that
 * the enclosed HTML provides contact information
 * for a person or people, or for an organization.
 * @param {import('./index').AddressParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Address(props) {
    const element = createElement("address", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Article
 * The `<article>` HTML element represents a self-contained composition in a
 * document, page, application, or site, which is intended to be independently
 * distributable or reusable (e.g., in syndication). Examples include: a forum post,
 * a magazine or newspaper article, or a blog entry, a product card, a user-
 * submitted comment, an interactive widget or gadget, or any other
 * independent item of content.
 * @param {import('./index').ArticleParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Article(props) {
    const element = createElement("article", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Aside
 * The `<aside>` HTML element represents a portion of a document whose
 * content is only indirectly related to the document's main content. Asides are
 * frequently presented as sidebars or call-out boxes.
 * @param {import('./index').AsideParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Aside(props) {
    const element = createElement("aside", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Footer
 * The `<footer>` HTML element represents a footer for its nearest ancestor
 * sectioning content or sectioning root element. A <footer> typically contains
 * information about the author of the section, copyright data or links to related documents.
 * @param {import('./index').FooterParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Footer(props) {
    const element = createElement("footer", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Header
 * The `<header>` HTML element represents introductory content, typically a
 * group of introductory or navigational aids. It may contain some heading
 * elements but also a logo, a search form, an author name, and other elements.
 * @param {import('./index').HeaderParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Header(props) {
    const element = createElement("header", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## H1
 * The `<h1>` to `<h6>` HTML elements represent six levels of section headings.
 * `<h1>` is the highest section level and `<h6>` is the lowest.
 * @param {import('./index').H1Params} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function H1(props) {
    const element = createElement("h1", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## H2
 * The `<h1>` to `<h6>` HTML elements represent six levels of section headings.
 * `<h1>` is the highest section level and `<h6>` is the lowest.
 * @param {import('./index').H2Params} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function H2(props) {
    const element = createElement("h2", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## H3
 * The `<h1>` to `<h6>` HTML elements represent six levels of section headings.
 * `<h1>` is the highest section level and `<h6>` is the lowest.
 * @param {import('./index').H3Params} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function H3(props) {
    const element = createElement("h3", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## H4
 * The `<h1>` to `<h6>` HTML elements represent six levels of section headings.
 * `<h1>` is the highest section level and `<h6>` is the lowest.
 * @param {import('./index').H4Params} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function H4(props) {
    const element = createElement("h4", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## H5
 * The `<h1>` to `<h6>` HTML elements represent six levels of section headings.
 * `<h1>` is the highest section level and `<h6>` is the lowest.
 * @param {import('./index').H5Params} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function H5(props) {
    const element = createElement("h5", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## H6
 * The `<h1>` to `<h6>` HTML elements represent six levels of section headings.
 * `<h1>` is the highest section level and `<h6>` is the lowest.
 * @param {import('./index').H6Params} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function H6(props) {
    const element = createElement("h6", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Main
 * The <main> HTML element represents the dominant content of the body of
 * a document. The main content area consists of content that is directly related
 * to or expands upon the central topic of a document, or the central
 * functionality of an application.
 * @param {import('./index').MainParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Main(props) {
    const element = createElement("main", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Nav
 * The `<nav>` HTML element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes.
 * @param {import('./index').NavParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Nav(props) {
    const element = createElement("nav", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Section
 * The `<section>` HTML element represents a generic standalone section of a document, which doesn't have a more specific semantic element to represent it. Sections should always have a heading, with very few exceptions.
 * @param {import('./index').SectionParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Section(props) {
    const element = createElement("section", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Blockquote
 * The `<blockquote>` HTML element indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation (see Notes for how to change it). A URL for the source of the quotation may be given using the cite attribute, while a text representation of the source can be given using the cite element.
 * @param {import('./index').BlockquoteParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Blockquote(props) {
    const element = createElement("blockquote", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Dd
 * The `<dd>` HTML element provides the description, definition, or value for the preceding term (dt) in a description list (dl).
 * @param {import('./index').DdParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Dd(props) {
    const element = createElement("dd", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Div
 * The `<div>` HTML element is the generic container for flow content. It has no effect on the content or layout until styled in some way using CSS (e.g. styling is directly applied to it, or some kind of layout model like FlexBox is applied to its parent element).
 * @param {import('./index').DivParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Div(props) {
    const element = createElement("div", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Dl
 * The `<dl>` HTML element represents a description list. The element encloses a list of groups of terms (specified using the dt element) and descriptions (provided by dd elements). Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs).
 * @param {import('./index').DlParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Dl(props) {
    const element = createElement("dl", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Dt
 * The `<dt>` HTML element specifies a term in a description or definition list, and as such must be used inside a dl element. It is usually followed by a dd element; however, multiple <dt> elements in a row indicate several terms that are all defined by the immediate next dd element.
 * @param {import('./index').DtParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Dt(props) {
    const element = createElement("dt", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Figcaption
 * The `<figcaption>` HTML element represents a caption or legend describing the rest of the contents of its parent figure element.
 * @param {import('./index').FigcaptionParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Figcaption(props) {
    const element = createElement("figcaption", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Figure
 * The `<figure>` HTML element represents self-contained content, potentially with an optional caption, which is specified using the figcaption element. The figure, its caption, and its contents are referenced as a single unit.
 * @param {import('./index').FigureParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Figure(props) {
    const element = createElement("figure", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Hr
 * The `<hr>` HTML element represents a thematic break between paragraph-level elements: for example, a change of scene in a story, or a shift of topic within a section.
 * @param {import('./index').HrParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Hr(props) {
    const element = createElement("hr", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Li
 * The `<li>` HTML element is used to represent an item in a list. It must be contained in a parent element: an ordered list (ol), an unordered list (ul), or a menu (menu). In menus and unordered lists, list items are usually displayed using bullet points. In ordered lists, they are usually displayed with an ascending counter on the left, such as a number or letter.
 * @param {import('./index').LiParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Li(props) {
    const element = createElement("li", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Menu
 * The `<menu>` HTML element is described in the HTML specification as a semantic alternative to ul, but treated by browsers (and exposed through the accessibility tree) as no different than ul. It represents an unordered list of items (which are represented by li elements).
 * @param {import('./index').MenuParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Menu(props) {
    const element = createElement("menu", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Ol
 * The `<ol>` HTML element represents an ordered list of items — typically rendered as a numbered list.
 * @param {import('./index').OlParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Ol(props) {
    const element = createElement("ol", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## P
 * The `<p>` HTML element represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural grouping of related content, such as images or form fields.
 * @param {import('./index').PParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function P(props) {
    const element = createElement("p", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Pre
 * The `<pre>` HTML element represents preformatted text which is to be presented exactly as written in the HTML file. The text is typically rendered using a non-proportional, or monospaced, font. Whitespace inside this element is displayed as written.
 * @param {import('./index').PreParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Pre(props) {
    const element = createElement("pre", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Ul
 * The `<ul>` HTML element represents an unordered list of items, typically rendered as a bulleted list.
 * @param {import('./index').UlParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Ul(props) {
    const element = createElement("ul", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## A
 * The `<a>` HTML element (or anchor element), with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address.
 * @param {import('./index').AParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function A(props) {
    const element = createElement("a", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Abbr
 * The `<abbr>` HTML element represents an abbreviation or acronym.
 * @param {import('./index').AbbrParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Abbr(props) {
    const element = createElement("abbr", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## B
 * The `<b>` HTML element is used to draw the reader's attention to the element's contents, which are not otherwise granted special importance. This was formerly known as the Boldface element, and most browsers still draw the text in boldface. However, you should not use `<b>` for styling text; instead, you should use the CSS font-weight property to create boldface text, or the strong element to indicate that text is of special importance.
 * @param {import('./index').BParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function B(props) {
    const element = createElement("b", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Bdi
 * The `<bdi>` HTML element tells the browser's bidirectional algorithm to treat the text it contains in isolation from its surrounding text. It's particularly useful when a website dynamically inserts some text and doesn't know the directionality of the text being inserted.
 * @param {import('./index').BdiParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Bdi(props) {
    const element = createElement("bdi", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Bdo
 * The `<bdo> `HTML element overrides the current directionality of text, so that the text within is rendered in a different direction.
 * @param {import('./index').BdoParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Bdo(props) {
    const element = createElement("bdo", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Br
 * The `<br>` HTML element produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant.
 * @param {import('./index').BrParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Br(props) {
    const element = createElement("br", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Cite
 * The `<cite>` HTML element is used to describe a reference to a cited creative work, and must include the title of that work. The reference may be in an abbreviated form according to context-appropriate conventions related to citation metadata.
 * @param {import('./index').CiteParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Cite(props) {
    const element = createElement("cite", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Code
 * The `<code>` HTML element displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code. By default, the content text is displayed using the user agent default monospace font.
 * @param {import('./index').CodeParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Code(props) {
    const element = createElement("code", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Data
 * The `<data>` HTML element links a given piece of content with a machine-readable translation. If the content is time- or date-related, the time element must be used.
 * @param {import('./index').DataParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Data(props) {
    const element = createElement("data", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Dfn
 * The `<dfn>` HTML element is used to indicate the term being defined within the context of a definition phrase or sentence. The p element, the dt/dd pairing, or the section element which is the nearest ancestor of the `<dfn>` is considered to be the definition of the term.
 * @param {import('./index').DfnParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Dfn(props) {
    const element = createElement("dfn", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Em
 * The `<em>` HTML element marks text that has stress emphasis. The `<em>` element can be nested, with each level of nesting indicating a greater degree of emphasis.
 * @param {import('./index').EmParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Em(props) {
    const element = createElement("em", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## I
 * The `<i>` HTML element represents a range of text that is set off from the normal text for some reason, such as idiomatic text, technical terms, taxonomical designations, among others. Historically, these have been presented using italicized type, which is the original source of the `<i>` naming of this element.
 * @param {import('./index').IParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function I(props) {
    const element = createElement("i", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Kbd
 * The `<kbd>` HTML element represents a span of inline text denoting textual user input from a keyboard, voice input, or any other text entry device. By convention, the user agent defaults to rendering the contents of a `<kbd>` element using its default monospace font, although this is not mandated by the HTML standard.
 * @param {import('./index').KbdParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Kbd(props) {
    const element = createElement("kdb", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Mark
 * The `<mark>` HTML element represents text which is marked or highlighted for reference or notation purposes, due to the marked passage's relevance or importance in the enclosing context.
 * @param {import('./index').MarkParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Mark(props) {
    const element = createElement("mark", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Q
 * The `<q>` HTML element indicates that the enclosed text is a short inline quotation. Most modern browsers implement this by surrounding the text in quotation marks. This element is intended for short quotations that don't require paragraph breaks; for long quotations use the blockquote element.
 * @param {import('./index').QParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Q(props) {
    const element = createElement("q", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Rp
 * The `<rp>` HTML element is used to provide fall-back parentheses for browsers that do not support display of ruby annotations using the ruby element. One `<rp>` element should enclose each of the opening and closing parentheses that wrap the rt element that contains the annotation's text.
 * @param {import('./index').RpParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Rp(props) {
    const element = createElement("rp", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Rt
 * The `<rt>` HTML element specifies the ruby text component of a ruby annotation, which is used to provide pronunciation, translation, or transliteration information for East Asian typography. The `<rt>` element must always be contained within a ruby element.
 * @param {import('./index').RtParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Rt(props) {
    const element = createElement("rt", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Ruby
 * The `<ruby>` HTML element represents small annotations that are rendered above, below, or next to base text, usually used for showing the pronunciation of East Asian characters. It can also be used for annotating other kinds of text, but this usage is less common.
 * @param {import('./index').RubyParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Ruby(props) {
    const element = createElement("ruby", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## S
 * The `<s>` HTML element renders text with a strikethrough, or a line through it. Use the <s> element to represent things that are no longer relevant or no longer accurate. However, <s> is not appropriate when indicating document edits; for that, use the del and ins elements, as appropriate.
 * @param {import('./index').SParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function S(props) {
    const element = createElement("s", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Samp
 * The `<samp>` HTML element is used to enclose inline text which represents sample (or quoted) output from a computer program. Its contents are typically rendered using the browser's default monospaced font (such as Courier or Lucida Console).
 * @param {import('./index').SampParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Samp(props) {
    const element = createElement("samp", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Small
 * The `<small>` HTML element represents side-comments and small print, like copyright and legal text, independent of its styled presentation. By default, it renders text within it one font-size smaller, such as from small to x-small.
 * @param {import('./index').SmallParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Small(props) {
    const element = createElement("small", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Span
 * The `<span>` HTML element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element is appropriate. `<span>` is very much like a div element, but div is a block-level element whereas a `<span>` is an inline element.
 * @param {import('./index').SpanParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Span(props) {
    const element = createElement("span", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Strong
 * The `<strong>` HTML element indicates that its contents have strong importance, seriousness, or urgency. Browsers typically render the contents in bold type.
 * @param {import('./index').StrongParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Strong(props) {
    const element = createElement("strong", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Sub
 * The `<sub>` HTML element specifies inline text which should be displayed as subscript for solely typographical reasons. Subscripts are typically rendered with a lowered baseline using smaller text.
 * @param {import('./index').SubParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Sub(props) {
    const element = createElement("sub", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Sup
 * The `<sup>` HTML element specifies inline text which is to be displayed as superscript for solely typographical reasons. Superscripts are usually rendered with a raised baseline using smaller text.
 * @param {import('./index').SupParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Sup(props) {
    const element = createElement("sup", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Time
 * The `<time>` HTML element represents a specific period in time. It may include the datetime attribute to translate dates into machine-readable format, allowing for better search engine results or custom features such as reminders.
 * @param {import('./index').TimeParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Time(props) {
    const element = createElement("time", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## U
 * The `<u>` HTML element represents a span of inline text which should be rendered in a way that indicates that it has a non-textual annotation. This is rendered by default as a simple solid underline, but may be altered using CSS.
 * @param {import('./index').UParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function U(props) {
    const element = createElement("u", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Var
 * The `<var>` HTML element represents the name of a variable in a mathematical expression or a programming context. It's typically presented using an italicized version of the current typeface, although that behavior is browser-dependent.
 * @param {import('./index').VarParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Var(props) {
    const element = createElement("var", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Wbr
 * The `<wbr>` HTML element represents a word break opportunity—a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that location
 * @param {import('./index').WbrParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Wbr(props) {
    const element = createElement("wbr", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Area
 * The `<area>` HTML element defines an area inside an image map that has predefined clickable areas. An image map allows geometric areas on an image to be associated with Hyperlink.
 * @param {import('./index').AreaParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Area(props) {
    const element = createElement("area", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Audio
 * The `<audio>` HTML element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the source element: the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream.
 * @param {import('./index').AudioParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Audio(props) {
    const element = createElement("audio", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Img
 * The `<img>` HTML element embeds an image into the document.
 * @param {import('./index').ImgParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Img(props) {
    const element = createElement("img", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Map
 * The `<map>` HTML element is used with area elements to define an image map (a clickable link area).
 * @param {import('./index').MapParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Map(props) {
    const element = createElement("map", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Track
 * The `<track>` HTML element is used as a child of the media elements, audio and video. It lets you specify timed text tracks (or time-based data), for example to automatically handle subtitles. The tracks are formatted in WebVTT format (.vtt files) — Web Video Text Tracks.
 * @param {import('./index').TrackParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Track(props) {
    const element = createElement("track", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Video
 * The `<video>` HTML element embeds a media player which supports video playback into the document. You can use `<video>` for audio content as well, but the audio element may provide a more appropriate user experience.
 * @param {import('./index').VideoParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Video(props) {
    const element = createElement("video", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Embed
 * The `<embed>` HTML element embeds external content at the specified point in the document. This content is provided by an external application or other source of interactive content such as a browser plug-in.
 * @param {import('./index').EmbedParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Embed(props) {
    const element = createElement("embed", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Iframe
 * The `<iframe>` HTML element represents a nested browsing context, embedding another HTML page into the current one.
 * @param {import('./index').IframeParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Iframe(props) {
    const element = createElement("iframe", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Object
 * The `<object>` HTML element represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin.
 * @param {import('./index').ObjectParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Object(props) {
    const element = createElement("object", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Picture
 * The `<picture>` HTML element contains zero or more source elements and one img element to offer alternative versions of an image for different display/device scenarios.
 * @param {import('./index').PictureParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Picture(props) {
    const element = createElement("picture", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Portal
 * The `<portal>` HTML element enables the embedding of another HTML page into the current one for the purposes of allowing smoother navigation into new pages.
 * @param {import('./index').PortalParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Portal(props) {
    const element = createElement("portal", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Source
 * The `<source>` HTML element specifies multiple media resources for the picture, the audio element, or the video element. It is an empty element, meaning that it has no content and does not have a closing tag. It is commonly used to offer the same media content in multiple file formats in order to provide compatibility with a broad range of browsers given their differing support for image file formats and media file formats.
 * @param {import('./index').SourceParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Source(props) {
    const element = createElement("source", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Canvas
 * Use the HTML `<canvas>` element with either the canvas scripting API or the WebGL API to draw graphics and animations.
 * @param {import('./index').CanvasParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Canvas(props) {
    const element = createElement("canvas", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Noscript
 * The `<noscript>` HTML element defines a section of HTML to be inserted if a script type on the page is unsupported or if scripting is currently turned off in the browser.
 * @param {import('./index').NoscriptParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Noscript(props) {
    const element = createElement("noscript", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Del
 * The `<del>` HTML element represents a range of text that has been deleted from a document. This can be used when rendering "track changes" or source code diff information, for example. The ins element can be used for the opposite purpose: to indicate text that has been added to the document.
 * @param {import('./index').DelParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Del(props) {
    const element = createElement("del", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Ins
 * The `<ins>` HTML element represents a range of text that has been added to a document. You can use the del element to similarly represent a range of text that has been deleted from the document.
 * @param {import('./index').InsParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Ins(props) {
    const element = createElement("ins", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Caption
 * The `<caption>` HTML element specifies the caption (or title) of a table.
 * @param {import('./index').CaptionParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Caption(props) {
    const element = createElement("caption", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Col
 * The `<col>` HTML element defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a colgroup element.
 * @param {import('./index').ColParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Col(props) {
    const element = createElement("col", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Colgroup
 * The `<colgroup>` HTML element defines a group of columns within a table.
 * @param {import('./index').ColgroupParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Colgroup(props) {
    const element = createElement("colgroup", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Table
 * The `<table>` HTML element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.
 * @param {import('./index').TableParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Table(props) {
    const element = createElement("table", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Tbody
 * The `<tbody>` HTML element encapsulates a set of table rows (tr elements), indicating that they comprise the body of the table (table).
 * @param {import('./index').TbodyParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Tbody(props) {
    const element = createElement("tbody", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Td
 * The `<td>` HTML element defines a cell of a table that contains data. It participates in the table model.
 * @param {import('./index').TdParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Td(props) {
    const element = createElement("td", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Tfoot
 * The `<tfoot>` HTML element defines a set of rows summarizing the columns of the table.
 * @param {import('./index').TfootParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Tfoot(props) {
    const element = createElement("tfoot", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Th
 * The `<th>` HTML element defines a cell as header of a group of table cells. The exact nature of this group is defined by the scope and headers attributes.
 * @param {import('./index').ThParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Th(props) {
    const element = createElement("th", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Thead
 * The `<thead>` HTML element defines a set of rows defining the head of the columns of the table.
 * @param {import('./index').TheadParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Thead(props) {
    const element = createElement("thead", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Tr
 * The `<tr>` HTML element defines a row of cells in a table. The row's cells can then be established using a mix of td (data cell) and th (header cell) elements.
 * @param {import('./index').TrParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Tr(props) {
    const element = createElement("tr", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Button
 * The `<button>` HTML element is an interactive element activated by a user with a mouse, keyboard, finger, voice command, or other assistive technology. Once activated, it then performs a programmable action, such as submitting a form or opening a dialog.
 * @param {import('./index').ButtonParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Button(props) {
    const element = createElement("button", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Datalist
 * The `<datalist>` HTML element contains a set of option elements that represent the permissible or recommended options available to choose from within other controls.
 * @param {import('./index').DatalistParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Datalist(props) {
    const element = createElement("datalist", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Fieldset
 * The `<fieldset>` HTML element is used to group several controls as well as labels (label) within a web form.
 * @param {import('./index').FieldsetParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Fieldset(props) {
    const element = createElement("fieldset", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Form
 * The `<form>` HTML element represents a document section containing interactive controls for submitting information.
 * @param {import('./index').FormParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Form(props) {
    const element = createElement("form", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Input
 * The `<input>` HTML element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. The <input> element is one of the most powerful and complex in all of HTML due to the sheer number of combinations of input types and attributes.
 * @param {import('./index').InputParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Input(props) {
    const element = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Label
 * The `<label>` HTML element represents a caption for an item in a user interface.
 * @param {import('./index').LabelParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Label(props) {
    const element = createElement("label", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Legend
 * The `<legend>` HTML element represents a caption for the content of its parent fieldset.
 * @param {import('./index').LegendParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Legend(props) {
    const element = createElement("legend", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Meter
 * The `<meter>` HTML element represents either a scalar value within a known range or a fractional value.
 * @param {import('./index').MeterParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Meter(props) {
    const element = createElement("meter", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Optgroup
 * The `<optgroup>` HTML element creates a grouping of options within a select element.
 * @param {import('./index').OptgroupParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Optgroup(props) {
    const element = createElement("optgroup", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Option
 * The <option> HTML element is used to define an item contained in a select, an optgroup, or a datalist element. As such, <option> can represent menu items in popups and other lists of items in an HTML document.
 * @param {import('./index').OptionParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Option(props) {
    const element = createElement("option", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Output
 * The `<output>` HTML element is a container element into which a site or app can inject the results of a calculation or the outcome of a user action.
 * @param {import('./index').OutputParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Output(props) {
    const element = createElement("output", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Progress
 * The `<progress>` HTML element displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
 * @param {import('./index').ProgressParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Progress(props) {
    const element = createElement("progress", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Select
 * The `<select>` HTML element represents a control that provides a menu of options.
 * @param {import('./index').SelectParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Select(props) {
    const element = createElement("select", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## TextArea
 * The `<textarea>` HTML element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.
 * @param {import('./index').TextAreaParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function TextArea(props) {
    const element = createElement("textarea", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Details
 * The `<details>` HTML element creates a disclosure widget in which information is visible only when the widget is toggled into an "open" state. A summary or label must be provided using the summary element.
 * @param {import('./index').DetailsParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Details(props) {
    const element = createElement("details", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Dialog
 * The `<dialog>` HTML element represents a dialog box or other interactive component, such as a dismissible alert, inspector, or sub window.
 * @param {import('./index').DialogParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Dialog(props) {
    const element = createElement("dialog", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Summary
 * The `<summary>` HTML element specifies a summary, caption, or legend for a details element's disclosure box. Clicking the <summary> element toggles the state of the parent <details> element open and closed.
 * @param {import('./index').SummaryParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Summary(props) {
    const element = createElement("summary", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Slot
 * The `<slot>` HTML element—part of the Web Components technology suite—is a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together.
 * @param {import('./index').SlotParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Slot(props) {
    const element = createElement("slot", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Template
 * The `<template>` HTML element is a mechanism for holding HTML that is not to be rendered immediately when a page is loaded but may be instantiated subsequently during runtime using JavaScript.
 * @param {import('./index').TemplateParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Template(props) {
    const element = createElement("template", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## HtmlContainer
 * Element rendering string as HTML.
 * @param {import('./index').HtmlContainerParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function HtmlContainer(props) {
    const element = createElement("#raw", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Fragment
 * Utility element used to group elements without rendering the actual container,
 * instead children will be rendered within the parent component.
 * @param {import('./index').FragmentParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Fragment(props) {
    const element = createElement("fragment", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Column
 * An element displaying its children vertically.
 * @param {import('./index').ColumnParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Column(props) {
    const element = createElement("column-view", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## Row
 * An element displaying its children horizontally.
 * @param {import('./index').RowParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Row(props) {
    const element = createElement("row-view", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## CenteredColumn
 * An element displaying its children vertically and centered
 * @param {import('./index').CenteredColumnParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function CenteredColumn(props) {
    const element = createElement("centered-column", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## CenteredRow
 * An element displaying its children horizontally and centered
 * @param {import('./index').CenteredRowParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function CenteredRow(props) {
    const element = createElement("centered-row", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return element;
}
/**
 * ## CheckBox
 * An element representing a boolean state of `true` or `false`.
 * Implement `onInput` or `onChange` to trigger actions when the state changes
 * @param {import('./index').CheckBoxParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function CheckBox(props) {
    const element = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.CheckBox.handler(element);
    return element;
}
/**
 * ## ColorPicker
 * Element allowing the user to pick a color from the displayed spectrum.
 * @param {import('./index').ColorPickerParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function ColorPicker(props) {
    const element = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.ColorPicker.handler(element);
    return element;
}
/**
 * ## DatePicker
 * Element providing a method for the user to pick a specific date.
 * @param {import('./index').DatePickerParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function DatePicker(props) {
    const element = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.DatePicker.handler(element);
    return element;
}
/**
 * ## DateTimeLocalPicker
 * A more specific version of the `DatePicker` element,
 * allowing the user to easily pick both date and time.
 * @param {import('./index').DateTimeLocalPickerParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function DateTimeLocalPicker(props) {
    const element = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.DateTimeLocalPicker.handler(element);
    return element;
}
/**
 * ## EmailField
 * Element used to let the user input one e-mail address,
 * or multiple in case `multiple` attribute is specified.
 * @param {import('./index').EmailFieldParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function EmailField(props) {
    const element = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.EmailField.handler(element);
    return element;
}
/**
 * ## FilePicker
 * Element allowing the user to choose and select one or more files from their device storage,
 * which can be later processed using JavaScript or uploaded directly using `form submission`.
 * @param {import('./index').FilePickerParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function FilePicker(props) {
    const element = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.FilePicker.handler(element);
    return element;
}
/**
 * ## HiddenInput
 * Element that let web developers include data that cannot be seen or modified
 * by users when a form is submitted.
 * @param {import('./index').HiddenInputParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function HiddenInput(props) {
    const element = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.HiddenInput.handler(element);
    return element;
}
/**
 * ## ImagePicker
 * Element allowing the user to choose and select an image from their device storage,
 * which can be later processed using JavaScript or uploaded directly using `form submission`.
 * @param {import('./index').ImagePickerParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function ImagePicker(props) {
    const element = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.ImagePicker.handler(element);
    return element;
}
/**
 * ## MonthPicker
 * Element providing a method for the user to pick a specific month.
 * @param {import('./index').MonthPickerParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function MonthPicker(props) {
    const element = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.MonthPicker.handler(element);
    return element;
}
/**
 * ## NumberPicker
 * Element providing a method for the user to pick a number in a given intervall.
 * @param {import('./index').NumberPickerParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function NumberPicker(props) {
    const element = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.NumberPicker.handler(element);
    return element;
}
/**
 * ## PasswordField
 * Element that treat the input of the user as a password and replace characters
 * depending on the browser's `user agent` and operating system.
 * @param {import('./index').PasswordFieldParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function PasswordField(props) {
    const element = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.PasswordField.handler(element);
    return element;
}
/**
 * ## RadioButton
 * Element used generally in a group, describing a set of related options.
 * @param {import('./index').RadioButtonParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function RadioButton(props) {
    const element = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.RadioButton.handler(element);
    return element;
}
/**
 * ## RangePicker
 * Element that let the user specify a numeric value which must be no less than a given value,
 * and no more than another given value.
 * @param {import('./index').RangePickerParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function RangePicker(props) {
    const element = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.RangePicker.handler(element);
    return element;
}
/**
 * ## ResetButton
 * Button that, by default, reset all inputs in the form to their initial values.
 * @param {import('./index').ResetButtonParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function ResetButton(props) {
    const element = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.ResetButton.handler(element);
    return element;
}
/**
 * ## SearchField
 * A Text field element designed for the user to enter search queries into.
 * @param {import('./index').SearchFieldParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function SearchField(props) {
    const element = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.SearchField.handler(element);
    return element;
}
/**
 * ## SubmitButton
 * Element rendered as a button, when it is clicked,
 * the `user agent` (by default) attempts to submit the form to the server.
 * @param {import('./index').SubmitButtonParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function SubmitButton(props) {
    const element = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.SubmitButton.handler(element);
    return element;
}
/**
 * ## TelephoneNumberField
 * Element used to let the user enter and edit a telephone number.
 * @param {import('./index').TelephoneNumberFieldParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function TelephoneNumberField(props) {
    const element = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.TelephoneNumberField.handler(element);
    return element;
}
/**
 * ## TextField
 * Element for basic single-line text input.
 * @param {import('./index').TextFieldParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function TextField(props) {
    const element = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.TextField.handler(element);
    return element;
}
/**
 * ## TimePicker
 * Element that let the user easily enter a time (hours and minutes, and optionally seconds).
 * @param {import('./index').TimePickerParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function TimePicker(props) {
    const element = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.TimePicker.handler(element);
    return element;
}
/**
 * ## UrlField
 * Element used to let the user enter and edit an URL.
 * @param {import('./index').UrlFieldParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function UrlField(props) {
    const element = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.UrlField.handler(element);
    return element;
}
/**
 * ## WeekPicker
 * Element allowing easy entry of a year plus the ``ISO 8601`` week number during that year
 * @param {import('./index').WeekPickerParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function WeekPicker(props) {
    const element = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.WeekPicker.handler(element);
    return element;
}
/**
 * ## Spacer
 * Element allowing the user to create space between components, vertically or horizontally.
 * The space occupied by this element is undisputed by other components.
 * @param {import('./index').SpacerParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Spacer(props) {
    const element = createElement("spacer-view", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.Spacer.handler(element);
    return element;
}
/**
 * ## LazyColumn
 * Element displaying element vertically containing an `IntersectionObserver`
 * that can watch for when the last element enter the user screen
 * and execute the callback passed in `onObserved`.
 * @param {import('./index').LazyColumnParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function LazyColumn(props) {
    const element = createElement("lazy-column", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.LazyColumn.handler(element);
    return element;
}
/**
 * ## LazyRow
 * Element displaying element horizontally containing an `IntersectionObserver`
 * that can watch for when the last element enter the user screen
 * and execute the callback passed in `onObserved`.
 * @param {import('./index').LazyRowParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function LazyRow(props) {
    const element = createElement("lazy-row", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.LazyRow.handler(element);
    return element;
}
/**
 * ## HorizontalLine
 * Element representing a line break between two elements.
 * It works similarly to `<hr>`, but with better CSS support.`
 * `element.style.normal` can only be overriden within `element.style.mediaQueries`.
 * @param {import('./index').HorizontalLineParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function HorizontalLine(props) {
    const element = createElement("horizontal-line", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.HorizontalLine.handler(element);
    return element;
}
/**
 * ## VerticalLine
 * Element representing a line break between two elements.
 * It works similarly to `<hr>`, but vertically and with better CSS support.`
 * `element.style.normal` can only be overriden within `element.style.mediaQueries`.
 * @param {import('./index').VerticalLineParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function VerticalLine(props) {
    const element = createElement("vertical-line", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.VerticalLine.handler(element);
    return element;
}
/**
 * ## Link
 * An anchor element that allow the user to navigate between the different routes of the application.
 * Use `href` to pass the destination route.
 * @param {import('./index').LinkParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function Link(props) {
    const element = createElement("a", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.Link.handler(element);
    return element;
}
/**
 * ## ToggleSwitch
 * Custom element rendered as `<toggle-switch>`.
 *
 * Create a toggle switch button allowing the user to change settings between two states, `true` and `false`.
 *
 * The `checked` parameter could be assigned a boolean to set the initial value of the switch.
 *
 * Use `radiuxPx` to set the radius of the button knob in pixels, with which other dimensions will be calculated automatically.
 * @param {import('./index').ToggleSwitchParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function ToggleSwitch(props) {
    const element = createElement("toggle-switch", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.ToggleSwitch.handler(element);
    return element;
}
/**
 * ## CircularSpinner
 * Progress indicator also known as `spinner`,
 * Used to display an undetermined wait time.
 * @param {import('./index').CircularSpinnerParams} props
 * @returns {import('@riadh-adrani/recursive/lib').BaseElement}
 */
export function CircularSpinner(props) {
    const element = createElement("circular-spinner", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.CircularSpinner.handler(element);
    return element;
}
