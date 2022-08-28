import CustomElements from "../packages/components/utility";
import { createElement } from "../packages/components";

/**
 * ## _`Address` Component_
 *
 * The `<address>` HTML element indicates that
 * the enclosed HTML provides contact information
 * for a person or people, or for an organization.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address
 * @param {import("../lib").AddressProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Address(props) {
    const el = createElement("address", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Article` Component_
 *
 * The `<article>` HTML element represents a self-contained composition in a
 * document, page, application, or site, which is intended to be independently
 * distributable or reusable (e.g., in syndication). Examples include: a forum post,
 * a magazine or newspaper article, or a blog entry, a product card, a user-
 * submitted comment, an interactive widget or gadget, or any other
 * independent item of content.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article
 * @param {import("../lib").ArticleProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Article(props) {
    const el = createElement("article", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Aside` Component_
 *
 * The ``<aside>`` HTML element represents a portion of a document whose
 * content is only indirectly related to the document's main content. Asides are
 * frequently presented as sidebars or call-out boxes.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside
 * @param {import("../lib").AsideProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Aside(props) {
    const el = createElement("aside", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Footer` Component_
 *
 * The ``<footer>`` HTML element represents a footer for its nearest ancestor
 * sectioning content or sectioning root element. A <footer> typically contains
 * information about the author of the section, copyright data or links to related documents.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer
 * @param {import("../lib").FooterProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Footer(props) {
    const el = createElement("footer", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Header` Component_
 *
 * The ``<header>`` HTML element represents introductory content, typically a
 * group of introductory or navigational aids. It may contain some heading
 * elements but also a logo, a search form, an author name, and other elements.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header
 * @param {import("../lib").HeaderProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Header(props) {
    const el = createElement("header", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`H1` Component_
 *
 * The ``<h1>`` to ``<h6>`` HTML elements represent six levels of section headings.
 * ``<h1>`` is the highest section level and ``<h6>`` is the lowest.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h1
 * @param {import("../lib").H1Props} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function H1(props) {
    const el = createElement("h1", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`H2` Component_
 *
 * The ``<h1>`` to ``<h6>`` HTML elements represent six levels of section headings.
 * ``<h1>`` is the highest section level and ``<h6>`` is the lowest.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h2
 * @param {import("../lib").H2Props} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function H2(props) {
    const el = createElement("h2", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`H3` Component_
 *
 * The ``<h1>`` to ``<h6>`` HTML elements represent six levels of section headings.
 * ``<h1>`` is the highest section level and ``<h6>`` is the lowest.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h3
 * @param {import("../lib").H3Props} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function H3(props) {
    const el = createElement("h3", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`H4` Component_
 *
 * The ``<h1>`` to ``<h6>`` HTML elements represent six levels of section headings.
 * ``<h1>`` is the highest section level and ``<h6>`` is the lowest.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h4
 * @param {import("../lib").H4Props} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function H4(props) {
    const el = createElement("h4", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`H5` Component_
 *
 * The ``<h1>`` to ``<h6>`` HTML elements represent six levels of section headings.
 * ``<h1>`` is the highest section level and ``<h6>`` is the lowest.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h5
 * @param {import("../lib").H5Props} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function H5(props) {
    const el = createElement("h5", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`H6` Component_
 *
 * The ``<h1>`` to ``<h6>`` HTML elements represent six levels of section headings.
 * ``<h1>`` is the highest section level and ``<h6>`` is the lowest.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h6
 * @param {import("../lib").H6Props} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function H6(props) {
    const el = createElement("h6", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Main` Component_
 *
 * The <main> HTML element represents the dominant content of the body of
 * a document. The main content area consists of content that is directly related
 * to or expands upon the central topic of a document, or the central
 * functionality of an application.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main
 * @param {import("../lib").MainProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Main(props) {
    const el = createElement("main", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Nav` Component_
 *
 * The ``<nav>`` HTML element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav
 * @param {import("../lib").NavProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Nav(props) {
    const el = createElement("nav", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Section` Component_
 *
 * The ``<section>`` HTML element represents a generic standalone section of a document, which doesn't have a more specific semantic element to represent it. Sections should always have a heading, with very few exceptions.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section
 * @param {import("../lib").SectionProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Section(props) {
    const el = createElement("section", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Blockquote` Component_
 *
 * The ``<blockquote>`` HTML element indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation (see Notes for how to change it). A URL for the source of the quotation may be given using the cite attribute, while a text representation of the source can be given using the cite element.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote
 * @param {import("../lib").BlockquoteProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Blockquote(props) {
    const el = createElement("blockquote", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Dd` Component_
 *
 * The ``<dd>`` HTML element provides the description, definition, or value for the preceding term (dt) in a description list (dl).
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd
 * @param {import("../lib").DdProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Dd(props) {
    const el = createElement("dd", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Div` Component_
 *
 * The ``<div>`` HTML element is the generic container for flow content. It has no effect on the content or layout until styled in some way using CSS (e.g. styling is directly applied to it, or some kind of layout model like Flexbox is applied to its parent element).
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div
 * @param {import("../lib").DivProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Div(props) {
    const el = createElement("div", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Dl` Component_
 *
 * The ``<dl>`` HTML element represents a description list. The element encloses a list of groups of terms (specified using the dt element) and descriptions (provided by dd elements). Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs).
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl
 * @param {import("../lib").DlProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Dl(props) {
    const el = createElement("dl", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Dt` Component_
 *
 * The ``<dt>`` HTML element specifies a term in a description or definition list, and as such must be used inside a dl element. It is usually followed by a dd element; however, multiple <dt> elements in a row indicate several terms that are all defined by the immediate next dd element.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt
 * @param {import("../lib").DtProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Dt(props) {
    const el = createElement("dt", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Figcaption` Component_
 *
 * The ``<figcaption>`` HTML element represents a caption or legend describing the rest of the contents of its parent figure element.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption
 * @param {import("../lib").FigcaptionProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Figcaption(props) {
    const el = createElement("figcaption", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Figure` Component_
 *
 * The ``<figure>`` HTML element represents self-contained content, potentially with an optional caption, which is specified using the figcaption element. The figure, its caption, and its contents are referenced as a single unit.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure
 * @param {import("../lib").FigureProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Figure(props) {
    const el = createElement("figure", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Hr` Component_
 *
 * The ``<hr>`` HTML element represents a thematic break between paragraph-level elements: for example, a change of scene in a story, or a shift of topic within a section.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr
 * @param {import("../lib").HrProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Hr(props) {
    const el = createElement("hr", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Li` Component_
 *
 * The ``<li>`` HTML element is used to represent an item in a list. It must be contained in a parent element: an ordered list (ol), an unordered list (ul), or a menu (menu). In menus and unordered lists, list items are usually displayed using bullet points. In ordered lists, they are usually displayed with an ascending counter on the left, such as a number or letter.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li
 * @param {import("../lib").LiProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Li(props) {
    const el = createElement("li", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Menu` Component_
 *
 * The ``<menu>`` HTML element is described in the HTML specification as a semantic alternative to ul, but treated by browsers (and exposed through the accessibility tree) as no different than ul. It represents an unordered list of items (which are represented by li elements).
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu
 * @param {import("../lib").MenuProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Menu(props) {
    const el = createElement("menu", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Ol` Component_
 *
 * The ``<ol>`` HTML element represents an ordered list of items — typically rendered as a numbered list.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol
 * @param {import("../lib").OlProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Ol(props) {
    const el = createElement("ol", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`P` Component_
 *
 * The ``<p>`` HTML element represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural grouping of related content, such as images or form fields.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p
 * @param {import("../lib").PProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function P(props) {
    const el = createElement("p", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Pre` Component_
 *
 * The ``<pre>`` HTML element represents preformatted text which is to be presented exactly as written in the HTML file. The text is typically rendered using a non-proportional, or monospaced, font. Whitespace inside this element is displayed as written.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre
 * @param {import("../lib").PreProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Pre(props) {
    const el = createElement("pre", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Ul` Component_
 *
 * The ``<ul>`` HTML element represents an unordered list of items, typically rendered as a bulleted list.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul
 * @param {import("../lib").UlProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Ul(props) {
    const el = createElement("ul", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`A` Component_
 *
 * The ``<a>`` HTML element (or anchor element), with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
 * @param {import("../lib").AProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function A(props) {
    const el = createElement("a", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Abbr` Component_
 *
 * The ``<abbr>`` HTML element represents an abbreviation or acronym.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr
 * @param {import("../lib").AbbrProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Abbr(props) {
    const el = createElement("abbr", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`B` Component_
 *
 * The ``<b>`` HTML element is used to draw the reader's attention to the element's contents, which are not otherwise granted special importance. This was formerly known as the Boldface element, and most browsers still draw the text in boldface. However, you should not use ``<b>`` for styling text; instead, you should use the CSS font-weight property to create boldface text, or the strong element to indicate that text is of special importance.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b
 * @param {import("../lib").BProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function B(props) {
    const el = createElement("b", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Bdi` Component_
 *
 * The ``<bdi>`` HTML element tells the browser's bidirectional algorithm to treat the text it contains in isolation from its surrounding text. It's particularly useful when a website dynamically inserts some text and doesn't know the directionality of the text being inserted.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi
 * @param {import("../lib").BdiProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Bdi(props) {
    const el = createElement("bdi", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Bdo` Component_
 *
 * The ``<bdo> ``HTML element overrides the current directionality of text, so that the text within is rendered in a different direction.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdo
 * @param {import("../lib").BdoProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Bdo(props) {
    const el = createElement("bdo", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Br` Component_
 *
 * The ``<br>`` HTML element produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br
 * @param {import("../lib").BrProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Br(props) {
    const el = createElement("br", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Cite` Component_
 *
 * The ``<cite>`` HTML element is used to describe a reference to a cited creative work, and must include the title of that work. The reference may be in an abbreviated form according to context-appropriate conventions related to citation metadata.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite
 * @param {import("../lib").CiteProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Cite(props) {
    const el = createElement("cite", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Code` Component_
 *
 * The ``<code>`` HTML element displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code. By default, the content text is displayed using the user agent default monospace font.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code
 * @param {import("../lib").CodeProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Code(props) {
    const el = createElement("code", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Data` Component_
 *
 * The ``<data>`` HTML element links a given piece of content with a machine-readable translation. If the content is time- or date-related, the time element must be used.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/data
 * @param {import("../lib").DataProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Data(props) {
    const el = createElement("data", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Dfn` Component_
 *
 * The ``<dfn>`` HTML element is used to indicate the term being defined within the context of a definition phrase or sentence. The p element, the dt/dd pairing, or the section element which is the nearest ancestor of the ``<dfn>`` is considered to be the definition of the term.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn
 * @param {import("../lib").DfnProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Dfn(props) {
    const el = createElement("dfn", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Em` Component_
 *
 * The ``<em>`` HTML element marks text that has stress emphasis. The ``<em>`` element can be nested, with each level of nesting indicating a greater degree of emphasis.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em
 * @param {import("../lib").EmProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Em(props) {
    const el = createElement("em", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`I` Component_
 *
 * The ``<i>`` HTML element represents a range of text that is set off from the normal text for some reason, such as idiomatic text, technical terms, taxonomical designations, among others. Historically, these have been presented using italicized type, which is the original source of the ``<i>`` naming of this element.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i
 * @param {import("../lib").IProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function I(props) {
    const el = createElement("i", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Kbd` Component_
 *
 * The ``<kbd>`` HTML element represents a span of inline text denoting textual user input from a keyboard, voice input, or any other text entry device. By convention, the user agent defaults to rendering the contents of a ``<kbd>`` element using its default monospace font, although this is not mandated by the HTML standard.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd
 * @param {import("../lib").KbdProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Kbd(props) {
    const el = createElement("kbd", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Mark` Component_
 *
 * The ``<mark>`` HTML element represents text which is marked or highlighted for reference or notation purposes, due to the marked passage's relevance or importance in the enclosing context.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark
 * @param {import("../lib").MarkProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Mark(props) {
    const el = createElement("mark", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Q` Component_
 *
 * The ``<q>`` HTML element indicates that the enclosed text is a short inline quotation. Most modern browsers implement this by surrounding the text in quotation marks. This element is intended for short quotations that don't require paragraph breaks; for long quotations use the blockquote element.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q
 * @param {import("../lib").QProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Q(props) {
    const el = createElement("q", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Rp` Component_
 *
 * The ``<rp>`` HTML element is used to provide fall-back parentheses for browsers that do not support display of ruby annotations using the ruby element. One ``<rp>`` element should enclose each of the opening and closing parentheses that wrap the rt element that contains the annotation's text.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rp
 * @param {import("../lib").RpProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Rp(props) {
    const el = createElement("rp", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Rt` Component_
 *
 * The ``<rt>`` HTML element specifies the ruby text component of a ruby annotation, which is used to provide pronunciation, translation, or transliteration information for East Asian typography. The ``<rt>`` element must always be contained within a ruby element.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rt
 * @param {import("../lib").RtProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Rt(props) {
    const el = createElement("rt", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Ruby` Component_
 *
 * The ``<ruby>`` HTML element represents small annotations that are rendered above, below, or next to base text, usually used for showing the pronunciation of East Asian characters. It can also be used for annotating other kinds of text, but this usage is less common.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby
 * @param {import("../lib").RubyProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Ruby(props) {
    const el = createElement("ruby", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`S` Component_
 *
 * The ``<s>`` HTML element renders text with a strikethrough, or a line through it. Use the <s> element to represent things that are no longer relevant or no longer accurate. However, <s> is not appropriate when indicating document edits; for that, use the del and ins elements, as appropriate.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s
 * @param {import("../lib").SProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function S(props) {
    const el = createElement("s", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Samp` Component_
 *
 * The ``<samp>`` HTML element is used to enclose inline text which represents sample (or quoted) output from a computer program. Its contents are typically rendered using the browser's default monospaced font (such as Courier or Lucida Console).
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/samp
 * @param {import("../lib").SampProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Samp(props) {
    const el = createElement("samp", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Small` Component_
 *
 * The ``<small>`` HTML element represents side-comments and small print, like copyright and legal text, independent of its styled presentation. By default, it renders text within it one font-size smaller, such as from small to x-small.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small
 * @param {import("../lib").SmallProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Small(props) {
    const el = createElement("small", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Span` Component_
 *
 * The ``<span>`` HTML element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element is appropriate. ``<span>`` is very much like a div element, but div is a block-level element whereas a ``<span>`` is an inline element.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span
 * @param {import("../lib").SpanProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Span(props) {
    const el = createElement("span", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Strong` Component_
 *
 * The ``<strong>`` HTML element indicates that its contents have strong importance, seriousness, or urgency. Browsers typically render the contents in bold type.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong
 * @param {import("../lib").StrongProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Strong(props) {
    const el = createElement("strong", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Sub` Component_
 *
 * The ``<sub>`` HTML element specifies inline text which should be displayed as subscript for solely typographical reasons. Subscripts are typically rendered with a lowered baseline using smaller text.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub
 * @param {import("../lib").SubProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Sub(props) {
    const el = createElement("sub", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Sup` Component_
 *
 * The ``<sup>`` HTML element specifies inline text which is to be displayed as superscript for solely typographical reasons. Superscripts are usually rendered with a raised baseline using smaller text.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup
 * @param {import("../lib").SupProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Sup(props) {
    const el = createElement("sup", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Time` Component_
 *
 * The ``<time>`` HTML element represents a specific period in time. It may include the datetime attribute to translate dates into machine-readable format, allowing for better search engine results or custom features such as reminders.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time
 * @param {import("../lib").TimeProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Time(props) {
    const el = createElement("time", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`U` Component_
 *
 * The ``<u>`` HTML element represents a span of inline text which should be rendered in a way that indicates that it has a non-textual annotation. This is rendered by default as a simple solid underline, but may be altered using CSS.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u
 * @param {import("../lib").UProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function U(props) {
    const el = createElement("u", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Var` Component_
 *
 * The ``<var>`` HTML element represents the name of a variable in a mathematical expression or a programming context. It's typically presented using an italicized version of the current typeface, although that behavior is browser-dependent.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/var
 * @param {import("../lib").VarProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Var(props) {
    const el = createElement("var", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Wbr` Component_
 *
 * The ``<wbr>`` HTML element represents a word break opportunity—a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that location
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/wbr
 * @param {import("../lib").WbrProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Wbr(props) {
    const el = createElement("wbr", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Area` Component_
 *
 * The ``<area>`` HTML element defines an area inside an image map that has predefined clickable areas. An image map allows geometric areas on an image to be associated with Hyperlink.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area
 * @param {import("../lib").AreaProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Area(props) {
    const el = createElement("area", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Audio` Component_
 *
 * The ``<audio>`` HTML element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the source element: the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
 * @param {import("../lib").AudioProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Audio(props) {
    const el = createElement("audio", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Img` Component_
 *
 * 	The ``<img>`` HTML element embeds an image into the document.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img
 * @param {import("../lib").ImgProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Img(props) {
    const el = createElement("img", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Map` Component_
 *
 * The ``<map>`` HTML element is used with area elements to define an image map (a clickable link area).
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map
 * @param {import("../lib").MapProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Map(props) {
    const el = createElement("map", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Track` Component_
 *
 * The ``<track>`` HTML element is used as a child of the media elements, audio and video. It lets you specify timed text tracks (or time-based data), for example to automatically handle subtitles. The tracks are formatted in WebVTT format (.vtt files) — Web Video Text Tracks.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track
 * @param {import("../lib").TrackProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Track(props) {
    const el = createElement("track", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Video` Component_
 *
 * The ``<video>`` HTML element embeds a media player which supports video playback into the document. You can use ``<video>`` for audio content as well, but the audio element may provide a more appropriate user experience.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
 * @param {import("../lib").VideoProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Video(props) {
    const el = createElement("video", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Embed` Component_
 *
 * The ``<embed>`` HTML element embeds external content at the specified point in the document. This content is provided by an external application or other source of interactive content such as a browser plug-in.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed
 * @param {import("../lib").EmbedProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Embed(props) {
    const el = createElement("embed", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Iframe` Component_
 *
 * The ``<iframe>`` HTML element represents a nested browsing context, embedding another HTML page into the current one.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
 * @param {import("../lib").IframeProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Iframe(props) {
    const el = createElement("iframe", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Object` Component_
 *
 * The ``<object>`` HTML element represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object
 * @param {import("../lib").ObjectProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Object(props) {
    const el = createElement("object", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Picture` Component_
 *
 * The ``<picture>`` HTML element contains zero or more source elements and one img element to offer alternative versions of an image for different display/device scenarios.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture
 * @param {import("../lib").PictureProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Picture(props) {
    const el = createElement("picture", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Portal` Component_
 *
 * The ``<portal>`` HTML element enables the embedding of another HTML page into the current one for the purposes of allowing smoother navigation into new pages.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/portal
 * @param {import("../lib").PortalProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Portal(props) {
    const el = createElement("portal", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Source` Component_
 *
 * The ``<source>`` HTML element specifies multiple media resources for the picture, the audio element, or the video element. It is an empty element, meaning that it has no content and does not have a closing tag. It is commonly used to offer the same media content in multiple file formats in order to provide compatibility with a broad range of browsers given their differing support for image file formats and media file formats.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source
 * @param {import("../lib").SourceProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Source(props) {
    const el = createElement("source", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Canvas` Component_
 *
 * Use the HTML ``<canvas>`` element with either the canvas scripting API or the WebGL API to draw graphics and animations.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas
 * @param {import("../lib").CanvasProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Canvas(props) {
    const el = createElement("canvas", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Noscript` Component_
 *
 * The ``<noscript>`` HTML element defines a section of HTML to be inserted if a script type on the page is unsupported or if scripting is currently turned off in the browser.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript
 * @param {import("../lib").NoscriptProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Noscript(props) {
    const el = createElement("noscript", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Del` Component_
 *
 * The ``<del>`` HTML element represents a range of text that has been deleted from a document. This can be used when rendering "track changes" or source code diff information, for example. The ins element can be used for the opposite purpose: to indicate text that has been added to the document.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del
 * @param {import("../lib").DelProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Del(props) {
    const el = createElement("del", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Ins` Component_
 *
 * The ``<ins>`` HTML element represents a range of text that has been added to a document. You can use the del element to similarly represent a range of text that has been deleted from the document.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins
 * @param {import("../lib").InsProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Ins(props) {
    const el = createElement("ins", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Caption` Component_
 *
 * The ``<caption>`` HTML element specifies the caption (or title) of a table.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
 * @param {import("../lib").CaptionProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Caption(props) {
    const el = createElement("caption", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Col` Component_
 *
 * The ``<col>`` HTML element defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a colgroup element.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col
 * @param {import("../lib").ColProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Col(props) {
    const el = createElement("col", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Colgroup` Component_
 *
 * The ``<colgroup>`` HTML element defines a group of columns within a table.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup
 * @param {import("../lib").ColgroupProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Colgroup(props) {
    const el = createElement("colgroup", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Table` Component_
 *
 * The ``<table>`` HTML element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
 * @param {import("../lib").TableProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Table(props) {
    const el = createElement("table", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Tbody` Component_
 *
 * The ``<tbody>`` HTML element encapsulates a set of table rows (tr elements), indicating that they comprise the body of the table (table).
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody
 * @param {import("../lib").TbodyProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Tbody(props) {
    const el = createElement("tbody", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Td` Component_
 *
 * The ``<td>`` HTML element defines a cell of a table that contains data. It participates in the table model.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td
 * @param {import("../lib").TdProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Td(props) {
    const el = createElement("td", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Tfoot` Component_
 *
 * The ``<tfoot>`` HTML element defines a set of rows summarizing the columns of the table.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot
 * @param {import("../lib").TfootProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Tfoot(props) {
    const el = createElement("tfoot", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Th` Component_
 *
 * The ``<th>`` HTML element defines a cell as header of a group of table cells. The exact nature of this group is defined by the scope and headers attributes.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th
 * @param {import("../lib").ThProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Th(props) {
    const el = createElement("th", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Thead` Component_
 *
 * The ``<thead>`` HTML element defines a set of rows defining the head of the columns of the table.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead
 * @param {import("../lib").TheadProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Thead(props) {
    const el = createElement("thead", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Tr` Component_
 *
 * The ``<tr>`` HTML element defines a row of cells in a table. The row's cells can then be established using a mix of td (data cell) and th (header cell) elements.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr
 * @param {import("../lib").TrProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Tr(props) {
    const el = createElement("tr", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Button` Component_
 *
 * The ``<button>`` HTML element is an interactive element activated by a user with a mouse, keyboard, finger, voice command, or other assistive technology. Once activated, it then performs a programmable action, such as submitting a form or opening a dialog.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
 * @param {import("../lib").ButtonProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Button(props) {
    const el = createElement("button", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Datalist` Component_
 *
 * The ``<datalist>`` HTML element contains a set of option elements that represent the permissible or recommended options available to choose from within other controls.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist
 * @param {import("../lib").DatalistProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Datalist(props) {
    const el = createElement("datalist", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Fieldset` Component_
 *
 * The ``<fieldset>`` HTML element is used to group several controls as well as labels (label) within a web form.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset
 * @param {import("../lib").FieldsetProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Fieldset(props) {
    const el = createElement("fieldset", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Form` Component_
 *
 * The ``<form>`` HTML element represents a document section containing interactive controls for submitting information.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
 * @param {import("../lib").FormProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Form(props) {
    const el = createElement("form", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Input` Component_
 *
 * The ``<input>`` HTML element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. The <input> element is one of the most powerful and complex in all of HTML due to the sheer number of combinations of input types and attributes.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
 * @param {import("../lib").InputProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Input(props) {
    const el = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Label` Component_
 *
 * The ``<label>`` HTML element represents a caption for an item in a user interface.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label
 * @param {import("../lib").LabelProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Label(props) {
    const el = createElement("label", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Legend` Component_
 *
 * The ``<legend>`` HTML element represents a caption for the content of its parent fieldset.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend
 * @param {import("../lib").LegendProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Legend(props) {
    const el = createElement("legend", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Meter` Component_
 *
 * The ``<meter>`` HTML element represents either a scalar value within a known range or a fractional value.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter
 * @param {import("../lib").MeterProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Meter(props) {
    const el = createElement("meter", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Optgroup` Component_
 *
 * The ``<optgroup>`` HTML element creates a grouping of options within a select element.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup
 * @param {import("../lib").OptgroupProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Optgroup(props) {
    const el = createElement("optgroup", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Option` Component_
 *
 * The <option> HTML element is used to define an item contained in a select, an optgroup, or a datalist element. As such, <option> can represent menu items in popups and other lists of items in an HTML document.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option
 * @param {import("../lib").OptionProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Option(props) {
    const el = createElement("option", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Output` Component_
 *
 * The ``<output>`` HTML element is a container element into which a site or app can inject the results of a calculation or the outcome of a user action.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output
 * @param {import("../lib").OutputProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Output(props) {
    const el = createElement("output", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Progress` Component_
 *
 * The ``<progress>`` HTML element displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress
 * @param {import("../lib").ProgressProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Progress(props) {
    const el = createElement("progress", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Select` Component_
 *
 * The ``<select>`` HTML element represents a control that provides a menu of options.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
 * @param {import("../lib").SelectProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Select(props) {
    const el = createElement("select", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`TextArea` Component_
 *
 * The ``<textarea>`` HTML element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea
 * @param {import("../lib").TextAreaProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function TextArea(props) {
    const el = createElement("textarea", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Details` Component_
 *
 * The ``<details>`` HTML element creates a disclosure widget in which information is visible only when the widget is toggled into an "open" state. A summary or label must be provided using the summary element.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details
 * @param {import("../lib").DetailsProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Details(props) {
    const el = createElement("details", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Dialog` Component_
 *
 * The ``<dialog>`` HTML element represents a dialog box or other interactive component, such as a dismissible alert, inspector, or subwindow.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
 * @param {import("../lib").DialogProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Dialog(props) {
    const el = createElement("dialog", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Summary` Component_
 *
 * The ``<summary>`` HTML element specifies a summary, caption, or legend for a details element's disclosure box. Clicking the <summary> element toggles the state of the parent <details> element open and closed.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary
 * @param {import("../lib").SummaryProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Summary(props) {
    const el = createElement("summary", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Slot` Component_
 *
 * The ``<slot>`` HTML element—part of the Web Components technology suite—is a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot
 * @param {import("../lib").SlotProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Slot(props) {
    const el = createElement("slot", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Template` Component_
 *
 * The ``<template>`` HTML element is a mechanism for holding HTML that is not to be rendered immediately when a page is loaded but may be instantiated subsequently during runtime using JavaScript.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template
 * @param {import("../lib").TemplateProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Template(props) {
    const el = createElement("template", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`HtmlContainer` Component_
 *
 *
 *
 * @param {import("../lib").HtmlContainerProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function HtmlContainer(props) {
    const el = createElement("#raw", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Fragment` Component_
 *
 *
 *
 * @param {import("../lib").FragmentProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Fragment(props) {
    const el = createElement("fragment", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Column` Component_
 *
 *
 *
 * @param {import("../lib").ColumnProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Column(props) {
    const el = createElement("column-view", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`CheckBox` Component_
 *
 *
 *
 * @param {import("../lib").CheckBoxProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function CheckBox(props) {
    const el = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.CheckBox.handler(el);
    return el;
}
/**
 * ## _`ColorPicker` Component_
 *
 *
 *
 * @param {import("../lib").ColorPickerProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function ColorPicker(props) {
    const el = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.ColorPicker.handler(el);
    return el;
}
/**
 * ## _`DatePicker` Component_
 *
 *
 *
 * @param {import("../lib").DatePickerProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function DatePicker(props) {
    const el = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.DatePicker.handler(el);
    return el;
}
/**
 * ## _`DateTimeLocalPicker` Component_
 *
 *
 *
 * @param {import("../lib").DateTimeLocalPickerProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function DateTimeLocalPicker(props) {
    const el = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.DateTimeLocalPicker.handler(el);
    return el;
}
/**
 * ## _`EmailField` Component_
 *
 *
 *
 * @param {import("../lib").EmailFieldProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function EmailField(props) {
    const el = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.EmailField.handler(el);
    return el;
}
/**
 * ## _`FilePicker` Component_
 *
 *
 *
 * @param {import("../lib").FilePickerProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function FilePicker(props) {
    const el = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.FilePicker.handler(el);
    return el;
}
/**
 * ## _`HiddenInput` Component_
 *
 *
 *
 * @param {import("../lib").HiddenInputProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function HiddenInput(props) {
    const el = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.HiddenInput.handler(el);
    return el;
}
/**
 * ## _`ImagePicker` Component_
 *
 *
 *
 * @param {import("../lib").ImagePickerProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function ImagePicker(props) {
    const el = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.ImagePicker.handler(el);
    return el;
}
/**
 * ## _`MonthPicker` Component_
 *
 *
 *
 * @param {import("../lib").MonthPickerProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function MonthPicker(props) {
    const el = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.MonthPicker.handler(el);
    return el;
}
/**
 * ## _`NumberPicker` Component_
 *
 *
 *
 * @param {import("../lib").NumberPickerProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function NumberPicker(props) {
    const el = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.NumberPicker.handler(el);
    return el;
}
/**
 * ## _`PasswordField` Component_
 *
 *
 *
 * @param {import("../lib").PasswordFieldProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function PasswordField(props) {
    const el = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.PasswordField.handler(el);
    return el;
}
/**
 * ## _`RadioButton` Component_
 *
 *
 *
 * @param {import("../lib").RadioButtonProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function RadioButton(props) {
    const el = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.RadioButton.handler(el);
    return el;
}
/**
 * ## _`RangePicker` Component_
 *
 *
 *
 * @param {import("../lib").RangePickerProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function RangePicker(props) {
    const el = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.RangePicker.handler(el);
    return el;
}
/**
 * ## _`ResetButton` Component_
 *
 *
 *
 * @param {import("../lib").ResetButtonProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function ResetButton(props) {
    const el = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.ResetButton.handler(el);
    return el;
}
/**
 * ## _`SearchField` Component_
 *
 *
 *
 * @param {import("../lib").SearchFieldProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function SearchField(props) {
    const el = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.SearchField.handler(el);
    return el;
}
/**
 * ## _`SubmitButton` Component_
 *
 *
 *
 * @param {import("../lib").SubmitButtonProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function SubmitButton(props) {
    const el = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.SubmitButton.handler(el);
    return el;
}
/**
 * ## _`TelephoneNumberField` Component_
 *
 *
 *
 * @param {import("../lib").TelephoneNumberFieldProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function TelephoneNumberField(props) {
    const el = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.TelephoneNumberField.handler(el);
    return el;
}
/**
 * ## _`TextField` Component_
 *
 *
 *
 * @param {import("../lib").TextFieldProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function TextField(props) {
    const el = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.TextField.handler(el);
    return el;
}
/**
 * ## _`TimePicker` Component_
 *
 *
 *
 * @param {import("../lib").TimePickerProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function TimePicker(props) {
    const el = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.TimePicker.handler(el);
    return el;
}
/**
 * ## _`UrlField` Component_
 *
 *
 *
 * @param {import("../lib").UrlFieldProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function UrlField(props) {
    const el = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.UrlField.handler(el);
    return el;
}
/**
 * ## _`WeekPicker` Component_
 *
 *
 *
 * @param {import("../lib").WeekPickerProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function WeekPicker(props) {
    const el = createElement("input", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.WeekPicker.handler(el);
    return el;
}
/**
 * ## _`Row` Component_
 *
 *
 *
 * @param {import("../lib").RowProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Row(props) {
    const el = createElement("row-view", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Spacer` Component_
 *
 *
 *
 * @param {import("../lib").SpacerProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Spacer(props) {
    const el = createElement("spacer-view", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.Spacer.handler(el);
    return el;
}
/**
 * ## _`LazyColumn` Component_
 *
 *
 *
 * @param {import("../lib").LazyColumnProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function LazyColumn(props) {
    const el = createElement("lazy-column", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.LazyColumn.handler(el);
    return el;
}
/**
 * ## _`LazyRow` Component_
 *
 *
 *
 * @param {import("../lib").LazyRowProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function LazyRow(props) {
    const el = createElement("lazy-row", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.LazyRow.handler(el);
    return el;
}
/**
 * ## _`HorizontalLine` Component_
 *
 *
 *
 * @param {import("../lib").HorizontalLineProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function HorizontalLine(props) {
    const el = createElement("horizontal-line", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.HorizontalLine.handler(el);
    return el;
}
/**
 * ## _`VerticalLine` Component_
 *
 *
 *
 * @param {import("../lib").VerticalLineProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function VerticalLine(props) {
    const el = createElement("vertical-line", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.VerticalLine.handler(el);
    return el;
}
/**
 * ## _`CenteredColumn` Component_
 *
 *
 *
 * @param {import("../lib").CenteredColumnProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function CenteredColumn(props) {
    const el = createElement("centered-column", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`CenteredRow` Component_
 *
 *
 *
 * @param {import("../lib").CenteredRowProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function CenteredRow(props) {
    const el = createElement("centered-row", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });

    return el;
}
/**
 * ## _`Link` Component_
 *
 *
 *
 * @param {import("../lib").LinkProps} props properties
 * @returns {import("@riadh-adrani/recursive/lib").RecursiveElement} element
 */
export function Link(props) {
    const el = createElement("a", {
        ...props,
        rendererOptions: { ns: "http://www.w3.org/1999/xhtml" },
    });
    CustomElements.items.Link.handler(el);
    return el;
}
