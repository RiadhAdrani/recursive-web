/**
 *  ██████╗ ███████╗███╗   ██╗███████╗██████╗  █████╗ ████████╗███████╗██████╗
 * ██╔════╝ ██╔════╝████╗  ██║██╔════╝██╔══██╗██╔══██╗╚══██╔══╝██╔════╝██╔══██╗
 * ██║  ███╗█████╗  ██╔██╗ ██║█████╗  ██████╔╝███████║   ██║   █████╗  ██║  ██║
 * ██║   ██║██╔══╝  ██║╚██╗██║██╔══╝  ██╔══██╗██╔══██║   ██║   ██╔══╝  ██║  ██║
 * ╚██████╔╝███████╗██║ ╚████║███████╗██║  ██║██║  ██║   ██║   ███████╗██████╔╝
 *  ╚═════╝ ╚══════╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═════╝
 * ------------ Do not delete or modify the content of this file -------------
 */
import { BaseElement } from "@riadh-adrani/recursive/lib";
import { CommonAttributes, ElementChildren } from "../lib";
import { Events } from "../lib";
import { CssColor } from "../lib";
import { AttributeDeclarationOf } from "../lib";
import { HTMLAttributes } from "../types/htmlCommon";

/**
 * ## AddressParams
 * The `<address>` HTML element indicates that
 * the enclosed HTML provides contact information
 * for a person or people, or for an organization.
 */
export interface AddressParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Address
 * The `<address>` HTML element indicates that
 * the enclosed HTML provides contact information
 * for a person or people, or for an organization.
 * @returns {BaseElement}
 */
export function Address(params: AddressParams): BaseElement;
/**
 * ## ArticleParams
 * The `<article>` HTML element represents a self-contained composition in a
 * document, page, application, or site, which is intended to be independently
 * distributable or reusable (e.g., in syndication). Examples include: a forum post,
 * a magazine or newspaper article, or a blog entry, a product card, a user-
 * submitted comment, an interactive widget or gadget, or any other
 * independent item of content.
 */
export interface ArticleParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Article
 * The `<article>` HTML element represents a self-contained composition in a
 * document, page, application, or site, which is intended to be independently
 * distributable or reusable (e.g., in syndication). Examples include: a forum post,
 * a magazine or newspaper article, or a blog entry, a product card, a user-
 * submitted comment, an interactive widget or gadget, or any other
 * independent item of content.
 * @returns {BaseElement}
 */
export function Article(params: ArticleParams): BaseElement;
/**
 * ## AsideParams
 * The `<aside>` HTML element represents a portion of a document whose
 * content is only indirectly related to the document's main content. Asides are
 * frequently presented as sidebars or call-out boxes.
 */
export interface AsideParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Aside
 * The `<aside>` HTML element represents a portion of a document whose
 * content is only indirectly related to the document's main content. Asides are
 * frequently presented as sidebars or call-out boxes.
 * @returns {BaseElement}
 */
export function Aside(params: AsideParams): BaseElement;
/**
 * ## FooterParams
 * The `<footer>` HTML element represents a footer for its nearest ancestor
 * sectioning content or sectioning root element. A <footer> typically contains
 * information about the author of the section, copyright data or links to related documents.
 */
export interface FooterParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Footer
 * The `<footer>` HTML element represents a footer for its nearest ancestor
 * sectioning content or sectioning root element. A <footer> typically contains
 * information about the author of the section, copyright data or links to related documents.
 * @returns {BaseElement}
 */
export function Footer(params: FooterParams): BaseElement;
/**
 * ## HeaderParams
 * The `<header>` HTML element represents introductory content, typically a
 * group of introductory or navigational aids. It may contain some heading
 * elements but also a logo, a search form, an author name, and other elements.
 */
export interface HeaderParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Header
 * The `<header>` HTML element represents introductory content, typically a
 * group of introductory or navigational aids. It may contain some heading
 * elements but also a logo, a search form, an author name, and other elements.
 * @returns {BaseElement}
 */
export function Header(params: HeaderParams): BaseElement;
/**
 * ## H1Params
 * The `<h1>` to `<h6>` HTML elements represent six levels of section headings.
 * `<h1>` is the highest section level and `<h6>` is the lowest.
 */
export interface H1Params
    extends CommonAttributes,
        Events<HTMLHeadingElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## H1
 * The `<h1>` to `<h6>` HTML elements represent six levels of section headings.
 * `<h1>` is the highest section level and `<h6>` is the lowest.
 * @returns {BaseElement}
 */
export function H1(params: H1Params): BaseElement;
/**
 * ## H2Params
 * The `<h1>` to `<h6>` HTML elements represent six levels of section headings.
 * `<h1>` is the highest section level and `<h6>` is the lowest.
 */
export interface H2Params
    extends CommonAttributes,
        Events<HTMLHeadingElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## H2
 * The `<h1>` to `<h6>` HTML elements represent six levels of section headings.
 * `<h1>` is the highest section level and `<h6>` is the lowest.
 * @returns {BaseElement}
 */
export function H2(params: H2Params): BaseElement;
/**
 * ## H3Params
 * The `<h1>` to `<h6>` HTML elements represent six levels of section headings.
 * `<h1>` is the highest section level and `<h6>` is the lowest.
 */
export interface H3Params
    extends CommonAttributes,
        Events<HTMLHeadingElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## H3
 * The `<h1>` to `<h6>` HTML elements represent six levels of section headings.
 * `<h1>` is the highest section level and `<h6>` is the lowest.
 * @returns {BaseElement}
 */
export function H3(params: H3Params): BaseElement;
/**
 * ## H4Params
 * The `<h1>` to `<h6>` HTML elements represent six levels of section headings.
 * `<h1>` is the highest section level and `<h6>` is the lowest.
 */
export interface H4Params
    extends CommonAttributes,
        Events<HTMLHeadingElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## H4
 * The `<h1>` to `<h6>` HTML elements represent six levels of section headings.
 * `<h1>` is the highest section level and `<h6>` is the lowest.
 * @returns {BaseElement}
 */
export function H4(params: H4Params): BaseElement;
/**
 * ## H5Params
 * The `<h1>` to `<h6>` HTML elements represent six levels of section headings.
 * `<h1>` is the highest section level and `<h6>` is the lowest.
 */
export interface H5Params
    extends CommonAttributes,
        Events<HTMLHeadingElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## H5
 * The `<h1>` to `<h6>` HTML elements represent six levels of section headings.
 * `<h1>` is the highest section level and `<h6>` is the lowest.
 * @returns {BaseElement}
 */
export function H5(params: H5Params): BaseElement;
/**
 * ## H6Params
 * The `<h1>` to `<h6>` HTML elements represent six levels of section headings.
 * `<h1>` is the highest section level and `<h6>` is the lowest.
 */
export interface H6Params
    extends CommonAttributes,
        Events<HTMLHeadingElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## H6
 * The `<h1>` to `<h6>` HTML elements represent six levels of section headings.
 * `<h1>` is the highest section level and `<h6>` is the lowest.
 * @returns {BaseElement}
 */
export function H6(params: H6Params): BaseElement;
/**
 * ## MainParams
 * The <main> HTML element represents the dominant content of the body of
 * a document. The main content area consists of content that is directly related
 * to or expands upon the central topic of a document, or the central
 * functionality of an application.
 */
export interface MainParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Main
 * The <main> HTML element represents the dominant content of the body of
 * a document. The main content area consists of content that is directly related
 * to or expands upon the central topic of a document, or the central
 * functionality of an application.
 * @returns {BaseElement}
 */
export function Main(params: MainParams): BaseElement;
/**
 * ## NavParams
 * The `<nav>` HTML element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes.
 */
export interface NavParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Nav
 * The `<nav>` HTML element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes.
 * @returns {BaseElement}
 */
export function Nav(params: NavParams): BaseElement;
/**
 * ## SectionParams
 * The `<section>` HTML element represents a generic standalone section of a document, which doesn't have a more specific semantic element to represent it. Sections should always have a heading, with very few exceptions.
 */
export interface SectionParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Section
 * The `<section>` HTML element represents a generic standalone section of a document, which doesn't have a more specific semantic element to represent it. Sections should always have a heading, with very few exceptions.
 * @returns {BaseElement}
 */
export function Section(params: SectionParams): BaseElement;
/**
 * ## BlockquoteParams
 * The `<blockquote>` HTML element indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation (see Notes for how to change it). A URL for the source of the quotation may be given using the cite attribute, while a text representation of the source can be given using the cite element.
 */
export interface BlockquoteParams
    extends CommonAttributes,
        Events<HTMLQuoteElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## cite
     * Contains a URI which points to the source of the quote or change.
     */
    cite: AttributeDeclarationOf<string>;
}
/**
 * ## Blockquote
 * The `<blockquote>` HTML element indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation (see Notes for how to change it). A URL for the source of the quotation may be given using the cite attribute, while a text representation of the source can be given using the cite element.
 * @returns {BaseElement}
 */
export function Blockquote(params: BlockquoteParams): BaseElement;
/**
 * ## DdParams
 * The `<dd>` HTML element provides the description, definition, or value for the preceding term (dt) in a description list (dl).
 */
export interface DdParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Dd
 * The `<dd>` HTML element provides the description, definition, or value for the preceding term (dt) in a description list (dl).
 * @returns {BaseElement}
 */
export function Dd(params: DdParams): BaseElement;
/**
 * ## DivParams
 * The `<div>` HTML element is the generic container for flow content. It has no effect on the content or layout until styled in some way using CSS (e.g. styling is directly applied to it, or some kind of layout model like FlexBox is applied to its parent element).
 */
export interface DivParams
    extends CommonAttributes,
        Events<HTMLDivElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Div
 * The `<div>` HTML element is the generic container for flow content. It has no effect on the content or layout until styled in some way using CSS (e.g. styling is directly applied to it, or some kind of layout model like FlexBox is applied to its parent element).
 * @returns {BaseElement}
 */
export function Div(params: DivParams): BaseElement;
/**
 * ## DlParams
 * The `<dl>` HTML element represents a description list. The element encloses a list of groups of terms (specified using the dt element) and descriptions (provided by dd elements). Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs).
 */
export interface DlParams
    extends CommonAttributes,
        Events<HTMLDListElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Dl
 * The `<dl>` HTML element represents a description list. The element encloses a list of groups of terms (specified using the dt element) and descriptions (provided by dd elements). Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs).
 * @returns {BaseElement}
 */
export function Dl(params: DlParams): BaseElement;
/**
 * ## DtParams
 * The `<dt>` HTML element specifies a term in a description or definition list, and as such must be used inside a dl element. It is usually followed by a dd element; however, multiple <dt> elements in a row indicate several terms that are all defined by the immediate next dd element.
 */
export interface DtParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Dt
 * The `<dt>` HTML element specifies a term in a description or definition list, and as such must be used inside a dl element. It is usually followed by a dd element; however, multiple <dt> elements in a row indicate several terms that are all defined by the immediate next dd element.
 * @returns {BaseElement}
 */
export function Dt(params: DtParams): BaseElement;
/**
 * ## FigcaptionParams
 * The `<figcaption>` HTML element represents a caption or legend describing the rest of the contents of its parent figure element.
 */
export interface FigcaptionParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Figcaption
 * The `<figcaption>` HTML element represents a caption or legend describing the rest of the contents of its parent figure element.
 * @returns {BaseElement}
 */
export function Figcaption(params: FigcaptionParams): BaseElement;
/**
 * ## FigureParams
 * The `<figure>` HTML element represents self-contained content, potentially with an optional caption, which is specified using the figcaption element. The figure, its caption, and its contents are referenced as a single unit.
 */
export interface FigureParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Figure
 * The `<figure>` HTML element represents self-contained content, potentially with an optional caption, which is specified using the figcaption element. The figure, its caption, and its contents are referenced as a single unit.
 * @returns {BaseElement}
 */
export function Figure(params: FigureParams): BaseElement;
/**
 * ## HrParams
 * The `<hr>` HTML element represents a thematic break between paragraph-level elements: for example, a change of scene in a story, or a shift of topic within a section.
 */
export interface HrParams
    extends CommonAttributes,
        Events<HTMLHRElement>,
        HTMLAttributes {
    /**
     * ## align
     * Specifies the horizontal alignment of the element.
     */
    align: AttributeDeclarationOf<string>;
    /**
     * ## color
     * This attribute sets the text color using either a named color or a color specified in the hexadecimal #RRGGBB format.
     */
    color: AttributeDeclarationOf<string>;
    /**
     * ## noShade
     * The HTML ``<hr>`` noshade Attribute is the boolean value and used to specify the solid horizontal line instead of shaded lines.
     */
    noShade: AttributeDeclarationOf<boolean>;
    /**
     * ## size
     * Defines the width of the element (in pixels). If the element's type attribute is text or password then it's the number of characters.
     */
    size: AttributeDeclarationOf<string>;
    /**
     * ## width
     * For the elements listed here, this establishes the element's width.
     */
    width: AttributeDeclarationOf<string>;
}
/**
 * ## Hr
 * The `<hr>` HTML element represents a thematic break between paragraph-level elements: for example, a change of scene in a story, or a shift of topic within a section.
 * @returns {BaseElement}
 */
export function Hr(params: HrParams): BaseElement;
/**
 * ## LiParams
 * The `<li>` HTML element is used to represent an item in a list. It must be contained in a parent element: an ordered list (ol), an unordered list (ul), or a menu (menu). In menus and unordered lists, list items are usually displayed using bullet points. In ordered lists, they are usually displayed with an ascending counter on the left, such as a number or letter.
 */
export interface LiParams
    extends CommonAttributes,
        Events<HTMLLIElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## value
     */
    value: AttributeDeclarationOf<string>;
    /**
     * ## type
     * Defines the type of the element.
     */
    type: AttributeDeclarationOf<string>;
}
/**
 * ## Li
 * The `<li>` HTML element is used to represent an item in a list. It must be contained in a parent element: an ordered list (ol), an unordered list (ul), or a menu (menu). In menus and unordered lists, list items are usually displayed using bullet points. In ordered lists, they are usually displayed with an ascending counter on the left, such as a number or letter.
 * @returns {BaseElement}
 */
export function Li(params: LiParams): BaseElement;
/**
 * ## MenuParams
 * The `<menu>` HTML element is described in the HTML specification as a semantic alternative to ul, but treated by browsers (and exposed through the accessibility tree) as no different than ul. It represents an unordered list of items (which are represented by li elements).
 */
export interface MenuParams
    extends CommonAttributes,
        Events<HTMLMenuElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Menu
 * The `<menu>` HTML element is described in the HTML specification as a semantic alternative to ul, but treated by browsers (and exposed through the accessibility tree) as no different than ul. It represents an unordered list of items (which are represented by li elements).
 * @returns {BaseElement}
 */
export function Menu(params: MenuParams): BaseElement;
/**
 * ## OlParams
 * The `<ol>` HTML element represents an ordered list of items — typically rendered as a numbered list.
 */
export interface OlParams
    extends CommonAttributes,
        Events<HTMLOListElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## reversed
     * Indicates whether the list should be displayed in a descending order instead of a ascending.
     */
    reversed: AttributeDeclarationOf<boolean>;
    /**
     * ## start
     * Defines the first number if other than 1.
     */
    start: AttributeDeclarationOf<string>;
    /**
     * ## type
     * Defines the type of the element.
     */
    type: AttributeDeclarationOf<string>;
}
/**
 * ## Ol
 * The `<ol>` HTML element represents an ordered list of items — typically rendered as a numbered list.
 * @returns {BaseElement}
 */
export function Ol(params: OlParams): BaseElement;
/**
 * ## PParams
 * The `<p>` HTML element represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural grouping of related content, such as images or form fields.
 */
export interface PParams
    extends CommonAttributes,
        Events<HTMLParagraphElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## P
 * The `<p>` HTML element represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural grouping of related content, such as images or form fields.
 * @returns {BaseElement}
 */
export function P(params: PParams): BaseElement;
/**
 * ## PreParams
 * The `<pre>` HTML element represents preformatted text which is to be presented exactly as written in the HTML file. The text is typically rendered using a non-proportional, or monospaced, font. Whitespace inside this element is displayed as written.
 */
export interface PreParams
    extends CommonAttributes,
        Events<HTMLPreElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## cols
     * Defines the number of columns in a textarea.
     */
    cols: AttributeDeclarationOf<number>;
    /**
     * ## width
     * For the elements listed here, this establishes the element's width.
     */
    width: AttributeDeclarationOf<string>;
    /**
     * ## wrap
     * Indicates whether the text should be wrapped.
     */
    wrap: AttributeDeclarationOf<"hard" | "soft" | "off">;
}
/**
 * ## Pre
 * The `<pre>` HTML element represents preformatted text which is to be presented exactly as written in the HTML file. The text is typically rendered using a non-proportional, or monospaced, font. Whitespace inside this element is displayed as written.
 * @returns {BaseElement}
 */
export function Pre(params: PreParams): BaseElement;
/**
 * ## UlParams
 * The `<ul>` HTML element represents an unordered list of items, typically rendered as a bulleted list.
 */
export interface UlParams
    extends CommonAttributes,
        Events<HTMLUListElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## compact
     */
    compact: AttributeDeclarationOf<string>;
    /**
     * ## type
     * Defines the type of the element.
     */
    type: AttributeDeclarationOf<string>;
}
/**
 * ## Ul
 * The `<ul>` HTML element represents an unordered list of items, typically rendered as a bulleted list.
 * @returns {BaseElement}
 */
export function Ul(params: UlParams): BaseElement;
/**
 * ## AParams
 * The `<a>` HTML element (or anchor element), with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address.
 */
export interface AParams
    extends CommonAttributes,
        Events<HTMLAnchorElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## download
     * Indicates that the hyperlink is to be used for downloading a resource.
     */
    download: AttributeDeclarationOf<string>;
    /**
     * ## href
     * The URL of a linked resource.
     */
    href: AttributeDeclarationOf<string>;
    /**
     * ## hrefLang
     * Specifies the language of the linked resource.
     */
    hrefLang: AttributeDeclarationOf<string>;
    /**
     * ## ping
     * The ping attribute specifies a space-separated list of URLs to be notified if a user follows the hyperlink.
     */
    ping: AttributeDeclarationOf<string>;
    /**
     * ## referrerPolicy
     * Specifies which referrer is sent when fetching the resource.
     */
    referrerPolicy: AttributeDeclarationOf<
        | "no-referrer"
        | "no-referrer-when-downgrade"
        | "origin"
        | "origin-when-cross-origin"
        | "same-origin"
        | "strict-origin"
        | "strict-origin-when-cross-origin"
        | "unsafe-url"
    >;
    /**
     * ## rel
     * Specifies the relationship of the target object to the link object.
     */
    rel: AttributeDeclarationOf<
        | "alternate"
        | "author"
        | "bookmark"
        | "canonical"
        | "dns-prefetch"
        | "external"
        | "help"
        | "icon"
        | "license"
        | "manifest"
        | "me"
        | "modulepreload"
        | "next"
        | "nofollow"
        | "noopener"
        | "noreferrer"
        | "opener"
        | "pingback"
        | "preconnect"
        | "prefetch"
        | "preload"
        | "prerender"
        | "prev"
        | "search"
        | "stylesheet"
        | "tag"
    >;
    /**
     * ## target
     * Specifies where to open the linked document (in the case of an ``<a>`` element) or where to display the response received (in the case of a ``<form>`` element)
     */
    target: AttributeDeclarationOf<"_self" | "_blank" | "_parent" | "_top">;
    /**
     * ## type
     * Defines the type of the element.
     */
    type: AttributeDeclarationOf<string>;
}
/**
 * ## A
 * The `<a>` HTML element (or anchor element), with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address.
 * @returns {BaseElement}
 */
export function A(params: AParams): BaseElement;
/**
 * ## AbbrParams
 * The `<abbr>` HTML element represents an abbreviation or acronym.
 */
export interface AbbrParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Abbr
 * The `<abbr>` HTML element represents an abbreviation or acronym.
 * @returns {BaseElement}
 */
export function Abbr(params: AbbrParams): BaseElement;
/**
 * ## BParams
 * The `<b>` HTML element is used to draw the reader's attention to the element's contents, which are not otherwise granted special importance. This was formerly known as the Boldface element, and most browsers still draw the text in boldface. However, you should not use `<b>` for styling text; instead, you should use the CSS font-weight property to create boldface text, or the strong element to indicate that text is of special importance.
 */
export interface BParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## B
 * The `<b>` HTML element is used to draw the reader's attention to the element's contents, which are not otherwise granted special importance. This was formerly known as the Boldface element, and most browsers still draw the text in boldface. However, you should not use `<b>` for styling text; instead, you should use the CSS font-weight property to create boldface text, or the strong element to indicate that text is of special importance.
 * @returns {BaseElement}
 */
export function B(params: BParams): BaseElement;
/**
 * ## BdiParams
 * The `<bdi>` HTML element tells the browser's bidirectional algorithm to treat the text it contains in isolation from its surrounding text. It's particularly useful when a website dynamically inserts some text and doesn't know the directionality of the text being inserted.
 */
export interface BdiParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## dir
     * Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)
     */
    dir: AttributeDeclarationOf<"ltr" | "rtl" | "auto">;
}
/**
 * ## Bdi
 * The `<bdi>` HTML element tells the browser's bidirectional algorithm to treat the text it contains in isolation from its surrounding text. It's particularly useful when a website dynamically inserts some text and doesn't know the directionality of the text being inserted.
 * @returns {BaseElement}
 */
export function Bdi(params: BdiParams): BaseElement;
/**
 * ## BdoParams
 * The `<bdo> `HTML element overrides the current directionality of text, so that the text within is rendered in a different direction.
 */
export interface BdoParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## dir
     * Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)
     */
    dir: AttributeDeclarationOf<"ltr" | "rtl" | "auto">;
}
/**
 * ## Bdo
 * The `<bdo> `HTML element overrides the current directionality of text, so that the text within is rendered in a different direction.
 * @returns {BaseElement}
 */
export function Bdo(params: BdoParams): BaseElement;
/**
 * ## BrParams
 * The `<br>` HTML element produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant.
 */
export interface BrParams
    extends CommonAttributes,
        Events<HTMLBRElement>,
        HTMLAttributes {}
/**
 * ## Br
 * The `<br>` HTML element produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant.
 * @returns {BaseElement}
 */
export function Br(params: BrParams): BaseElement;
/**
 * ## CiteParams
 * The `<cite>` HTML element is used to describe a reference to a cited creative work, and must include the title of that work. The reference may be in an abbreviated form according to context-appropriate conventions related to citation metadata.
 */
export interface CiteParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Cite
 * The `<cite>` HTML element is used to describe a reference to a cited creative work, and must include the title of that work. The reference may be in an abbreviated form according to context-appropriate conventions related to citation metadata.
 * @returns {BaseElement}
 */
export function Cite(params: CiteParams): BaseElement;
/**
 * ## CodeParams
 * The `<code>` HTML element displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code. By default, the content text is displayed using the user agent default monospace font.
 */
export interface CodeParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Code
 * The `<code>` HTML element displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code. By default, the content text is displayed using the user agent default monospace font.
 * @returns {BaseElement}
 */
export function Code(params: CodeParams): BaseElement;
/**
 * ## DataParams
 * The `<data>` HTML element links a given piece of content with a machine-readable translation. If the content is time- or date-related, the time element must be used.
 */
export interface DataParams
    extends CommonAttributes,
        Events<HTMLDataElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## value
     */
    value: AttributeDeclarationOf<string>;
}
/**
 * ## Data
 * The `<data>` HTML element links a given piece of content with a machine-readable translation. If the content is time- or date-related, the time element must be used.
 * @returns {BaseElement}
 */
export function Data(params: DataParams): BaseElement;
/**
 * ## DfnParams
 * The `<dfn>` HTML element is used to indicate the term being defined within the context of a definition phrase or sentence. The p element, the dt/dd pairing, or the section element which is the nearest ancestor of the `<dfn>` is considered to be the definition of the term.
 */
export interface DfnParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Dfn
 * The `<dfn>` HTML element is used to indicate the term being defined within the context of a definition phrase or sentence. The p element, the dt/dd pairing, or the section element which is the nearest ancestor of the `<dfn>` is considered to be the definition of the term.
 * @returns {BaseElement}
 */
export function Dfn(params: DfnParams): BaseElement;
/**
 * ## EmParams
 * The `<em>` HTML element marks text that has stress emphasis. The `<em>` element can be nested, with each level of nesting indicating a greater degree of emphasis.
 */
export interface EmParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Em
 * The `<em>` HTML element marks text that has stress emphasis. The `<em>` element can be nested, with each level of nesting indicating a greater degree of emphasis.
 * @returns {BaseElement}
 */
export function Em(params: EmParams): BaseElement;
/**
 * ## IParams
 * The `<i>` HTML element represents a range of text that is set off from the normal text for some reason, such as idiomatic text, technical terms, taxonomical designations, among others. Historically, these have been presented using italicized type, which is the original source of the `<i>` naming of this element.
 */
export interface IParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## I
 * The `<i>` HTML element represents a range of text that is set off from the normal text for some reason, such as idiomatic text, technical terms, taxonomical designations, among others. Historically, these have been presented using italicized type, which is the original source of the `<i>` naming of this element.
 * @returns {BaseElement}
 */
export function I(params: IParams): BaseElement;
/**
 * ## KbdParams
 * The `<kbd>` HTML element represents a span of inline text denoting textual user input from a keyboard, voice input, or any other text entry device. By convention, the user agent defaults to rendering the contents of a `<kbd>` element using its default monospace font, although this is not mandated by the HTML standard.
 */
export interface KbdParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Kbd
 * The `<kbd>` HTML element represents a span of inline text denoting textual user input from a keyboard, voice input, or any other text entry device. By convention, the user agent defaults to rendering the contents of a `<kbd>` element using its default monospace font, although this is not mandated by the HTML standard.
 * @returns {BaseElement}
 */
export function Kbd(params: KbdParams): BaseElement;
/**
 * ## MarkParams
 * The `<mark>` HTML element represents text which is marked or highlighted for reference or notation purposes, due to the marked passage's relevance or importance in the enclosing context.
 */
export interface MarkParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Mark
 * The `<mark>` HTML element represents text which is marked or highlighted for reference or notation purposes, due to the marked passage's relevance or importance in the enclosing context.
 * @returns {BaseElement}
 */
export function Mark(params: MarkParams): BaseElement;
/**
 * ## QParams
 * The `<q>` HTML element indicates that the enclosed text is a short inline quotation. Most modern browsers implement this by surrounding the text in quotation marks. This element is intended for short quotations that don't require paragraph breaks; for long quotations use the blockquote element.
 */
export interface QParams
    extends CommonAttributes,
        Events<HTMLQuoteElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## cite
     * Contains a URI which points to the source of the quote or change.
     */
    cite: AttributeDeclarationOf<string>;
}
/**
 * ## Q
 * The `<q>` HTML element indicates that the enclosed text is a short inline quotation. Most modern browsers implement this by surrounding the text in quotation marks. This element is intended for short quotations that don't require paragraph breaks; for long quotations use the blockquote element.
 * @returns {BaseElement}
 */
export function Q(params: QParams): BaseElement;
/**
 * ## RpParams
 * The `<rp>` HTML element is used to provide fall-back parentheses for browsers that do not support display of ruby annotations using the ruby element. One `<rp>` element should enclose each of the opening and closing parentheses that wrap the rt element that contains the annotation's text.
 */
export interface RpParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Rp
 * The `<rp>` HTML element is used to provide fall-back parentheses for browsers that do not support display of ruby annotations using the ruby element. One `<rp>` element should enclose each of the opening and closing parentheses that wrap the rt element that contains the annotation's text.
 * @returns {BaseElement}
 */
export function Rp(params: RpParams): BaseElement;
/**
 * ## RtParams
 * The `<rt>` HTML element specifies the ruby text component of a ruby annotation, which is used to provide pronunciation, translation, or transliteration information for East Asian typography. The `<rt>` element must always be contained within a ruby element.
 */
export interface RtParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Rt
 * The `<rt>` HTML element specifies the ruby text component of a ruby annotation, which is used to provide pronunciation, translation, or transliteration information for East Asian typography. The `<rt>` element must always be contained within a ruby element.
 * @returns {BaseElement}
 */
export function Rt(params: RtParams): BaseElement;
/**
 * ## RubyParams
 * The `<ruby>` HTML element represents small annotations that are rendered above, below, or next to base text, usually used for showing the pronunciation of East Asian characters. It can also be used for annotating other kinds of text, but this usage is less common.
 */
export interface RubyParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Ruby
 * The `<ruby>` HTML element represents small annotations that are rendered above, below, or next to base text, usually used for showing the pronunciation of East Asian characters. It can also be used for annotating other kinds of text, but this usage is less common.
 * @returns {BaseElement}
 */
export function Ruby(params: RubyParams): BaseElement;
/**
 * ## SParams
 * The `<s>` HTML element renders text with a strikethrough, or a line through it. Use the <s> element to represent things that are no longer relevant or no longer accurate. However, <s> is not appropriate when indicating document edits; for that, use the del and ins elements, as appropriate.
 */
export interface SParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## S
 * The `<s>` HTML element renders text with a strikethrough, or a line through it. Use the <s> element to represent things that are no longer relevant or no longer accurate. However, <s> is not appropriate when indicating document edits; for that, use the del and ins elements, as appropriate.
 * @returns {BaseElement}
 */
export function S(params: SParams): BaseElement;
/**
 * ## SampParams
 * The `<samp>` HTML element is used to enclose inline text which represents sample (or quoted) output from a computer program. Its contents are typically rendered using the browser's default monospaced font (such as Courier or Lucida Console).
 */
export interface SampParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Samp
 * The `<samp>` HTML element is used to enclose inline text which represents sample (or quoted) output from a computer program. Its contents are typically rendered using the browser's default monospaced font (such as Courier or Lucida Console).
 * @returns {BaseElement}
 */
export function Samp(params: SampParams): BaseElement;
/**
 * ## SmallParams
 * The `<small>` HTML element represents side-comments and small print, like copyright and legal text, independent of its styled presentation. By default, it renders text within it one font-size smaller, such as from small to x-small.
 */
export interface SmallParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Small
 * The `<small>` HTML element represents side-comments and small print, like copyright and legal text, independent of its styled presentation. By default, it renders text within it one font-size smaller, such as from small to x-small.
 * @returns {BaseElement}
 */
export function Small(params: SmallParams): BaseElement;
/**
 * ## SpanParams
 * The `<span>` HTML element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element is appropriate. `<span>` is very much like a div element, but div is a block-level element whereas a `<span>` is an inline element.
 */
export interface SpanParams
    extends CommonAttributes,
        Events<HTMLSpanElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Span
 * The `<span>` HTML element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element is appropriate. `<span>` is very much like a div element, but div is a block-level element whereas a `<span>` is an inline element.
 * @returns {BaseElement}
 */
export function Span(params: SpanParams): BaseElement;
/**
 * ## StrongParams
 * The `<strong>` HTML element indicates that its contents have strong importance, seriousness, or urgency. Browsers typically render the contents in bold type.
 */
export interface StrongParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Strong
 * The `<strong>` HTML element indicates that its contents have strong importance, seriousness, or urgency. Browsers typically render the contents in bold type.
 * @returns {BaseElement}
 */
export function Strong(params: StrongParams): BaseElement;
/**
 * ## SubParams
 * The `<sub>` HTML element specifies inline text which should be displayed as subscript for solely typographical reasons. Subscripts are typically rendered with a lowered baseline using smaller text.
 */
export interface SubParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Sub
 * The `<sub>` HTML element specifies inline text which should be displayed as subscript for solely typographical reasons. Subscripts are typically rendered with a lowered baseline using smaller text.
 * @returns {BaseElement}
 */
export function Sub(params: SubParams): BaseElement;
/**
 * ## SupParams
 * The `<sup>` HTML element specifies inline text which is to be displayed as superscript for solely typographical reasons. Superscripts are usually rendered with a raised baseline using smaller text.
 */
export interface SupParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Sup
 * The `<sup>` HTML element specifies inline text which is to be displayed as superscript for solely typographical reasons. Superscripts are usually rendered with a raised baseline using smaller text.
 * @returns {BaseElement}
 */
export function Sup(params: SupParams): BaseElement;
/**
 * ## TimeParams
 * The `<time>` HTML element represents a specific period in time. It may include the datetime attribute to translate dates into machine-readable format, allowing for better search engine results or custom features such as reminders.
 */
export interface TimeParams
    extends CommonAttributes,
        Events<HTMLTimeElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## dateTime
     * Indicates the date and time associated with the element.
     */
    dateTime: AttributeDeclarationOf<string>;
}
/**
 * ## Time
 * The `<time>` HTML element represents a specific period in time. It may include the datetime attribute to translate dates into machine-readable format, allowing for better search engine results or custom features such as reminders.
 * @returns {BaseElement}
 */
export function Time(params: TimeParams): BaseElement;
/**
 * ## UParams
 * The `<u>` HTML element represents a span of inline text which should be rendered in a way that indicates that it has a non-textual annotation. This is rendered by default as a simple solid underline, but may be altered using CSS.
 */
export interface UParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## U
 * The `<u>` HTML element represents a span of inline text which should be rendered in a way that indicates that it has a non-textual annotation. This is rendered by default as a simple solid underline, but may be altered using CSS.
 * @returns {BaseElement}
 */
export function U(params: UParams): BaseElement;
/**
 * ## VarParams
 * The `<var>` HTML element represents the name of a variable in a mathematical expression or a programming context. It's typically presented using an italicized version of the current typeface, although that behavior is browser-dependent.
 */
export interface VarParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Var
 * The `<var>` HTML element represents the name of a variable in a mathematical expression or a programming context. It's typically presented using an italicized version of the current typeface, although that behavior is browser-dependent.
 * @returns {BaseElement}
 */
export function Var(params: VarParams): BaseElement;
/**
 * ## WbrParams
 * The `<wbr>` HTML element represents a word break opportunity—a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that location
 */
export interface WbrParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Wbr
 * The `<wbr>` HTML element represents a word break opportunity—a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that location
 * @returns {BaseElement}
 */
export function Wbr(params: WbrParams): BaseElement;
/**
 * ## AreaParams
 * The `<area>` HTML element defines an area inside an image map that has predefined clickable areas. An image map allows geometric areas on an image to be associated with Hyperlink.
 */
export interface AreaParams
    extends CommonAttributes,
        Events<HTMLAreaElement>,
        HTMLAttributes {
    /**
     * ## alt
     * Alternative text in case an image can't be displayed.
     */
    alt: AttributeDeclarationOf<string>;
    /**
     * ## coords
     * A set of values specifying the coordinates of the hot-spot region.
     */
    coords: AttributeDeclarationOf<string>;
    /**
     * ## download
     * Indicates that the hyperlink is to be used for downloading a resource.
     */
    download: AttributeDeclarationOf<string>;
    /**
     * ## href
     * The URL of a linked resource.
     */
    href: AttributeDeclarationOf<string>;
    /**
     * ## hrefLang
     * Specifies the language of the linked resource.
     */
    hrefLang: AttributeDeclarationOf<string>;
    /**
     * ## ping
     * The ping attribute specifies a space-separated list of URLs to be notified if a user follows the hyperlink.
     */
    ping: AttributeDeclarationOf<string>;
    /**
     * ## referrerPolicy
     * Specifies which referrer is sent when fetching the resource.
     */
    referrerPolicy: AttributeDeclarationOf<
        | "no-referrer"
        | "no-referrer-when-downgrade"
        | "origin"
        | "origin-when-cross-origin"
        | "same-origin"
        | "strict-origin"
        | "strict-origin-when-cross-origin"
        | "unsafe-url"
    >;
    /**
     * ## rel
     * Specifies the relationship of the target object to the link object.
     */
    rel: AttributeDeclarationOf<
        | "alternate"
        | "author"
        | "bookmark"
        | "canonical"
        | "dns-prefetch"
        | "external"
        | "help"
        | "icon"
        | "license"
        | "manifest"
        | "me"
        | "modulepreload"
        | "next"
        | "nofollow"
        | "noopener"
        | "noreferrer"
        | "opener"
        | "pingback"
        | "preconnect"
        | "prefetch"
        | "preload"
        | "prerender"
        | "prev"
        | "search"
        | "stylesheet"
        | "tag"
    >;
    /**
     * ## shape
     */
    shape: AttributeDeclarationOf<string>;
    /**
     * ## target
     * Specifies where to open the linked document (in the case of an ``<a>`` element) or where to display the response received (in the case of a ``<form>`` element)
     */
    target: AttributeDeclarationOf<"_self" | "_blank" | "_parent" | "_top">;
}
/**
 * ## Area
 * The `<area>` HTML element defines an area inside an image map that has predefined clickable areas. An image map allows geometric areas on an image to be associated with Hyperlink.
 * @returns {BaseElement}
 */
export function Area(params: AreaParams): BaseElement;
/**
 * ## AudioParams
 * The `<audio>` HTML element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the source element: the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream.
 */
export interface AudioParams
    extends CommonAttributes,
        Events<HTMLAudioElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## autoplay
     * The audio or video should play as soon as possible.
     */
    autoplay: AttributeDeclarationOf<boolean>;
    /**
     * ## controls
     * Indicates whether the browser should show playback controls to the user.
     */
    controls: AttributeDeclarationOf<string>;
    /**
     * ## crossOrigin
     * How the element handles cross-origin requests
     */
    crossOrigin: AttributeDeclarationOf<"use-credentials" | "anonymous">;
    /**
     * ## loop
     * Indicates whether the media should start playing from the start when it's finished.
     */
    loop: AttributeDeclarationOf<boolean>;
    /**
     * ## muted
     * Indicates whether the audio will be initially silenced on page load.
     */
    muted: AttributeDeclarationOf<boolean>;
    /**
     * ## preload
     * Indicates whether the whole resource, parts of it or nothing should be preloaded.
     */
    preload: AttributeDeclarationOf<string>;
    /**
     * ## src
     * The URL of the embeddable content.
     */
    src: AttributeDeclarationOf<string>;
}
/**
 * ## Audio
 * The `<audio>` HTML element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the source element: the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream.
 * @returns {BaseElement}
 */
export function Audio(params: AudioParams): BaseElement;
/**
 * ## ImgParams
 * The `<img>` HTML element embeds an image into the document.
 */
export interface ImgParams
    extends CommonAttributes,
        Events<HTMLImageElement>,
        HTMLAttributes {
    /**
     * ## alt
     * Alternative text in case an image can't be displayed.
     */
    alt: AttributeDeclarationOf<string>;
    /**
     * ## crossOrigin
     * How the element handles cross-origin requests
     */
    crossOrigin: AttributeDeclarationOf<"use-credentials" | "anonymous">;
    /**
     * ## decoding
     * Indicates the preferred method to decode the image.
     */
    decoding: AttributeDeclarationOf<"sync" | "async" | "auto">;
    /**
     * ## height
     * Specifies the height of elements listed here. For all other elements, use the CSS height property.
     */
    height: AttributeDeclarationOf<string>;
    /**
     * ## isMap
     * Indicates that the image is part of a server-side image map.
     */
    isMap: AttributeDeclarationOf<boolean>;
    /**
     * ## loading
     * Indicates if the element should be loaded lazily (loading="lazy") or loaded immediately (loading="eager").
     */
    loading: AttributeDeclarationOf<"lazy" | "eager">;
    /**
     * ## referrerPolicy
     * Specifies which referrer is sent when fetching the resource.
     */
    referrerPolicy: AttributeDeclarationOf<
        | "no-referrer"
        | "no-referrer-when-downgrade"
        | "origin"
        | "origin-when-cross-origin"
        | "same-origin"
        | "strict-origin"
        | "strict-origin-when-cross-origin"
        | "unsafe-url"
    >;
    /**
     * ## sizes
     */
    sizes: AttributeDeclarationOf<string>;
    /**
     * ## src
     * The URL of the embeddable content.
     */
    src: AttributeDeclarationOf<string>;
    /**
     * ## srcSet
     * One or more responsive image candidates.
     */
    srcSet: AttributeDeclarationOf<string>;
    /**
     * ## width
     * For the elements listed here, this establishes the element's width.
     */
    width: AttributeDeclarationOf<string>;
    /**
     * ## useMap
     * Defines a default value which will be displayed in the element on page load.
     */
    useMap: AttributeDeclarationOf<string>;
}
/**
 * ## Img
 * The `<img>` HTML element embeds an image into the document.
 * @returns {BaseElement}
 */
export function Img(params: ImgParams): BaseElement;
/**
 * ## MapParams
 * The `<map>` HTML element is used with area elements to define an image map (a clickable link area).
 */
export interface MapParams
    extends CommonAttributes,
        Events<HTMLMapElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## name
     * Name of the element. For example used by the server to identify the fields in form submits.
     */
    name: AttributeDeclarationOf<string>;
}
/**
 * ## Map
 * The `<map>` HTML element is used with area elements to define an image map (a clickable link area).
 * @returns {BaseElement}
 */
export function Map(params: MapParams): BaseElement;
/**
 * ## TrackParams
 * The `<track>` HTML element is used as a child of the media elements, audio and video. It lets you specify timed text tracks (or time-based data), for example to automatically handle subtitles. The tracks are formatted in WebVTT format (.vtt files) — Web Video Text Tracks.
 */
export interface TrackParams
    extends CommonAttributes,
        Events<HTMLTrackElement>,
        HTMLAttributes {
    /**
     * ## def
     * Indicates that the track should be enabled unless the user's preferences indicate something different.
     */
    def: AttributeDeclarationOf<string>;
    /**
     * ## kind
     * Specifies the kind of text track.
     */
    kind: AttributeDeclarationOf<
        "subtitles" | "captions" | "descriptions" | "chapters" | "metadata"
    >;
    /**
     * ## label
     * Specifies a user-readable title of the element.
     */
    label: AttributeDeclarationOf<string>;
    /**
     * ## src
     * The URL of the embeddable content.
     */
    src: AttributeDeclarationOf<string>;
    /**
     * ## srcLang
     */
    srcLang: AttributeDeclarationOf<string>;
}
/**
 * ## Track
 * The `<track>` HTML element is used as a child of the media elements, audio and video. It lets you specify timed text tracks (or time-based data), for example to automatically handle subtitles. The tracks are formatted in WebVTT format (.vtt files) — Web Video Text Tracks.
 * @returns {BaseElement}
 */
export function Track(params: TrackParams): BaseElement;
/**
 * ## VideoParams
 * The `<video>` HTML element embeds a media player which supports video playback into the document. You can use `<video>` for audio content as well, but the audio element may provide a more appropriate user experience.
 */
export interface VideoParams
    extends CommonAttributes,
        Events<HTMLVideoElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## autoplay
     * The audio or video should play as soon as possible.
     */
    autoplay: AttributeDeclarationOf<boolean>;
    /**
     * ## crossOrigin
     * How the element handles cross-origin requests
     */
    crossOrigin: AttributeDeclarationOf<"use-credentials" | "anonymous">;
    /**
     * ## height
     * Specifies the height of elements listed here. For all other elements, use the CSS height property.
     */
    height: AttributeDeclarationOf<string>;
    /**
     * ## loop
     * Indicates whether the media should start playing from the start when it's finished.
     */
    loop: AttributeDeclarationOf<boolean>;
    /**
     * ## muted
     * Indicates whether the audio will be initially silenced on page load.
     */
    muted: AttributeDeclarationOf<boolean>;
    /**
     * ## playsInline
     */
    playsInline: AttributeDeclarationOf<string>;
    /**
     * ## poster
     * A URL indicating a poster frame to show until the user plays or seeks.
     */
    poster: AttributeDeclarationOf<string>;
    /**
     * ## preload
     * Indicates whether the whole resource, parts of it or nothing should be preloaded.
     */
    preload: AttributeDeclarationOf<string>;
    /**
     * ## src
     * The URL of the embeddable content.
     */
    src: AttributeDeclarationOf<string>;
    /**
     * ## width
     * For the elements listed here, this establishes the element's width.
     */
    width: AttributeDeclarationOf<string>;
}
/**
 * ## Video
 * The `<video>` HTML element embeds a media player which supports video playback into the document. You can use `<video>` for audio content as well, but the audio element may provide a more appropriate user experience.
 * @returns {BaseElement}
 */
export function Video(params: VideoParams): BaseElement;
/**
 * ## EmbedParams
 * The `<embed>` HTML element embeds external content at the specified point in the document. This content is provided by an external application or other source of interactive content such as a browser plug-in.
 */
export interface EmbedParams
    extends CommonAttributes,
        Events<HTMLEmbedElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## height
     * Specifies the height of elements listed here. For all other elements, use the CSS height property.
     */
    height: AttributeDeclarationOf<string>;
    /**
     * ## src
     * The URL of the embeddable content.
     */
    src: AttributeDeclarationOf<string>;
    /**
     * ## type
     * Defines the type of the element.
     */
    type: AttributeDeclarationOf<string>;
    /**
     * ## width
     * For the elements listed here, this establishes the element's width.
     */
    width: AttributeDeclarationOf<string>;
}
/**
 * ## Embed
 * The `<embed>` HTML element embeds external content at the specified point in the document. This content is provided by an external application or other source of interactive content such as a browser plug-in.
 * @returns {BaseElement}
 */
export function Embed(params: EmbedParams): BaseElement;
/**
 * ## IframeParams
 * The `<iframe>` HTML element represents a nested browsing context, embedding another HTML page into the current one.
 */
export interface IframeParams
    extends CommonAttributes,
        Events<HTMLIFrameElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## allow
     * Specifies a feature-policy for the iframe.
     */
    allow: AttributeDeclarationOf<string>;
    /**
     * ## allowFullScreen
     */
    allowFullScreen: AttributeDeclarationOf<boolean>;
    /**
     * ## allowPaymentRequest
     */
    allowPaymentRequest: AttributeDeclarationOf<string>;
    /**
     * ## height
     * Specifies the height of elements listed here. For all other elements, use the CSS height property.
     */
    height: AttributeDeclarationOf<string>;
    /**
     * ## loading
     * Indicates if the element should be loaded lazily (loading="lazy") or loaded immediately (loading="eager").
     */
    loading: AttributeDeclarationOf<"lazy" | "eager">;
    /**
     * ## name
     * Name of the element. For example used by the server to identify the fields in form submits.
     */
    name: AttributeDeclarationOf<string>;
    /**
     * ## referrerPolicy
     * Specifies which referrer is sent when fetching the resource.
     */
    referrerPolicy: AttributeDeclarationOf<
        | "no-referrer"
        | "no-referrer-when-downgrade"
        | "origin"
        | "origin-when-cross-origin"
        | "same-origin"
        | "strict-origin"
        | "strict-origin-when-cross-origin"
        | "unsafe-url"
    >;
    /**
     * ## sandbox
     * Stops a document loaded in an iframe from using certain features (such as submitting forms or opening new windows).
     */
    sandbox: AttributeDeclarationOf<
        | "allow-downloads-without-user-activation"
        | "allow-downloads"
        | "allow-forms"
        | "allow-modals"
        | "allow-orientation-lock"
        | "allow-pointer-lock"
        | "allow-popups"
        | "allow-popups-to-escape-sandbox"
        | "allow-presentation"
        | "allow-same-origin"
        | "allow-scripts"
        | "allow-storage-access-by-user-activation"
        | "allow-top-navigation"
        | "allow-top-navigation-by-user-activation"
    >;
    /**
     * ## src
     * The URL of the embeddable content.
     */
    src: AttributeDeclarationOf<string>;
    /**
     * ## srcDoc
     */
    srcDoc: AttributeDeclarationOf<string>;
    /**
     * ## width
     * For the elements listed here, this establishes the element's width.
     */
    width: AttributeDeclarationOf<string>;
}
/**
 * ## Iframe
 * The `<iframe>` HTML element represents a nested browsing context, embedding another HTML page into the current one.
 * @returns {BaseElement}
 */
export function Iframe(params: IframeParams): BaseElement;
/**
 * ## ObjectParams
 * The `<object>` HTML element represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin.
 */
export interface ObjectParams
    extends CommonAttributes,
        Events<HTMLObjectElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## data
     * Specifies the URL of the resource.
     */
    data: AttributeDeclarationOf<string>;
    /**
     * ## form
     * Indicates the form that is the owner of the element.
     */
    form: AttributeDeclarationOf<string>;
    /**
     * ## height
     * Specifies the height of elements listed here. For all other elements, use the CSS height property.
     */
    height: AttributeDeclarationOf<string>;
    /**
     * ## name
     * Name of the element. For example used by the server to identify the fields in form submits.
     */
    name: AttributeDeclarationOf<string>;
    /**
     * ## type
     * Defines the type of the element.
     */
    type: AttributeDeclarationOf<string>;
    /**
     * ## useMap
     * Defines a default value which will be displayed in the element on page load.
     */
    useMap: AttributeDeclarationOf<string>;
    /**
     * ## width
     * For the elements listed here, this establishes the element's width.
     */
    width: AttributeDeclarationOf<string>;
}
/**
 * ## Object
 * The `<object>` HTML element represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin.
 * @returns {BaseElement}
 */
export function Object(params: ObjectParams): BaseElement;
/**
 * ## PictureParams
 * The `<picture>` HTML element contains zero or more source elements and one img element to offer alternative versions of an image for different display/device scenarios.
 */
export interface PictureParams
    extends CommonAttributes,
        Events<HTMLPictureElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Picture
 * The `<picture>` HTML element contains zero or more source elements and one img element to offer alternative versions of an image for different display/device scenarios.
 * @returns {BaseElement}
 */
export function Picture(params: PictureParams): BaseElement;
/**
 * ## PortalParams
 * The `<portal>` HTML element enables the embedding of another HTML page into the current one for the purposes of allowing smoother navigation into new pages.
 */
export interface PortalParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## src
     * The URL of the embeddable content.
     */
    src: AttributeDeclarationOf<string>;
}
/**
 * ## Portal
 * The `<portal>` HTML element enables the embedding of another HTML page into the current one for the purposes of allowing smoother navigation into new pages.
 * @returns {BaseElement}
 */
export function Portal(params: PortalParams): BaseElement;
/**
 * ## SourceParams
 * The `<source>` HTML element specifies multiple media resources for the picture, the audio element, or the video element. It is an empty element, meaning that it has no content and does not have a closing tag. It is commonly used to offer the same media content in multiple file formats in order to provide compatibility with a broad range of browsers given their differing support for image file formats and media file formats.
 */
export interface SourceParams
    extends CommonAttributes,
        Events<HTMLSourceElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## type
     * Defines the type of the element.
     */
    type: AttributeDeclarationOf<string>;
}
/**
 * ## Source
 * The `<source>` HTML element specifies multiple media resources for the picture, the audio element, or the video element. It is an empty element, meaning that it has no content and does not have a closing tag. It is commonly used to offer the same media content in multiple file formats in order to provide compatibility with a broad range of browsers given their differing support for image file formats and media file formats.
 * @returns {BaseElement}
 */
export function Source(params: SourceParams): BaseElement;
/**
 * ## CanvasParams
 * Use the HTML `<canvas>` element with either the canvas scripting API or the WebGL API to draw graphics and animations.
 */
export interface CanvasParams
    extends CommonAttributes,
        Events<HTMLCanvasElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## height
     * Specifies the height of elements listed here. For all other elements, use the CSS height property.
     */
    height: AttributeDeclarationOf<string>;
    /**
     * ## width
     * For the elements listed here, this establishes the element's width.
     */
    width: AttributeDeclarationOf<string>;
}
/**
 * ## Canvas
 * Use the HTML `<canvas>` element with either the canvas scripting API or the WebGL API to draw graphics and animations.
 * @returns {BaseElement}
 */
export function Canvas(params: CanvasParams): BaseElement;
/**
 * ## NoscriptParams
 * The `<noscript>` HTML element defines a section of HTML to be inserted if a script type on the page is unsupported or if scripting is currently turned off in the browser.
 */
export interface NoscriptParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Noscript
 * The `<noscript>` HTML element defines a section of HTML to be inserted if a script type on the page is unsupported or if scripting is currently turned off in the browser.
 * @returns {BaseElement}
 */
export function Noscript(params: NoscriptParams): BaseElement;
/**
 * ## DelParams
 * The `<del>` HTML element represents a range of text that has been deleted from a document. This can be used when rendering "track changes" or source code diff information, for example. The ins element can be used for the opposite purpose: to indicate text that has been added to the document.
 */
export interface DelParams
    extends CommonAttributes,
        Events<HTMLModElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## cite
     * Contains a URI which points to the source of the quote or change.
     */
    cite: AttributeDeclarationOf<string>;
    /**
     * ## dateTime
     * Indicates the date and time associated with the element.
     */
    dateTime: AttributeDeclarationOf<string>;
}
/**
 * ## Del
 * The `<del>` HTML element represents a range of text that has been deleted from a document. This can be used when rendering "track changes" or source code diff information, for example. The ins element can be used for the opposite purpose: to indicate text that has been added to the document.
 * @returns {BaseElement}
 */
export function Del(params: DelParams): BaseElement;
/**
 * ## InsParams
 * The `<ins>` HTML element represents a range of text that has been added to a document. You can use the del element to similarly represent a range of text that has been deleted from the document.
 */
export interface InsParams
    extends CommonAttributes,
        Events<HTMLModElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## cite
     * Contains a URI which points to the source of the quote or change.
     */
    cite: AttributeDeclarationOf<string>;
    /**
     * ## dateTime
     * Indicates the date and time associated with the element.
     */
    dateTime: AttributeDeclarationOf<string>;
}
/**
 * ## Ins
 * The `<ins>` HTML element represents a range of text that has been added to a document. You can use the del element to similarly represent a range of text that has been deleted from the document.
 * @returns {BaseElement}
 */
export function Ins(params: InsParams): BaseElement;
/**
 * ## CaptionParams
 * The `<caption>` HTML element specifies the caption (or title) of a table.
 */
export interface CaptionParams
    extends CommonAttributes,
        Events<HTMLTableCaptionElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Caption
 * The `<caption>` HTML element specifies the caption (or title) of a table.
 * @returns {BaseElement}
 */
export function Caption(params: CaptionParams): BaseElement;
/**
 * ## ColParams
 * The `<col>` HTML element defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a colgroup element.
 */
export interface ColParams
    extends CommonAttributes,
        Events<HTMLTableColElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## span
     */
    span: AttributeDeclarationOf<string>;
}
/**
 * ## Col
 * The `<col>` HTML element defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a colgroup element.
 * @returns {BaseElement}
 */
export function Col(params: ColParams): BaseElement;
/**
 * ## ColgroupParams
 * The `<colgroup>` HTML element defines a group of columns within a table.
 */
export interface ColgroupParams
    extends CommonAttributes,
        Events<HTMLTableColElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## span
     */
    span: AttributeDeclarationOf<string>;
}
/**
 * ## Colgroup
 * The `<colgroup>` HTML element defines a group of columns within a table.
 * @returns {BaseElement}
 */
export function Colgroup(params: ColgroupParams): BaseElement;
/**
 * ## TableParams
 * The `<table>` HTML element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.
 */
export interface TableParams
    extends CommonAttributes,
        Events<HTMLTableElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Table
 * The `<table>` HTML element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.
 * @returns {BaseElement}
 */
export function Table(params: TableParams): BaseElement;
/**
 * ## TbodyParams
 * The `<tbody>` HTML element encapsulates a set of table rows (tr elements), indicating that they comprise the body of the table (table).
 */
export interface TbodyParams
    extends CommonAttributes,
        Events<HTMLTableSectionElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Tbody
 * The `<tbody>` HTML element encapsulates a set of table rows (tr elements), indicating that they comprise the body of the table (table).
 * @returns {BaseElement}
 */
export function Tbody(params: TbodyParams): BaseElement;
/**
 * ## TdParams
 * The `<td>` HTML element defines a cell of a table that contains data. It participates in the table model.
 */
export interface TdParams
    extends CommonAttributes,
        Events<HTMLTableCellElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## colSpan
     * The colspan attribute defines the number of columns a cell should span.
     */
    colSpan: AttributeDeclarationOf<string>;
    /**
     * ## headers
     * IDs of the ``<th>`` elements which applies to this element.
     */
    headers: AttributeDeclarationOf<string>;
    /**
     * ## rowSpan
     * Defines the number of rows a table cell should span over.
     */
    rowSpan: AttributeDeclarationOf<string>;
}
/**
 * ## Td
 * The `<td>` HTML element defines a cell of a table that contains data. It participates in the table model.
 * @returns {BaseElement}
 */
export function Td(params: TdParams): BaseElement;
/**
 * ## TfootParams
 * The `<tfoot>` HTML element defines a set of rows summarizing the columns of the table.
 */
export interface TfootParams
    extends CommonAttributes,
        Events<HTMLTableSectionElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Tfoot
 * The `<tfoot>` HTML element defines a set of rows summarizing the columns of the table.
 * @returns {BaseElement}
 */
export function Tfoot(params: TfootParams): BaseElement;
/**
 * ## ThParams
 * The `<th>` HTML element defines a cell as header of a group of table cells. The exact nature of this group is defined by the scope and headers attributes.
 */
export interface ThParams
    extends CommonAttributes,
        Events<HTMLTableCellElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## colSpan
     * The colspan attribute defines the number of columns a cell should span.
     */
    colSpan: AttributeDeclarationOf<string>;
    /**
     * ## headers
     * IDs of the ``<th>`` elements which applies to this element.
     */
    headers: AttributeDeclarationOf<string>;
    /**
     * ## rowSpan
     * Defines the number of rows a table cell should span over.
     */
    rowSpan: AttributeDeclarationOf<string>;
    /**
     * ## scope
     * Defines the cells that the header test (defined in the th element) relates to.
     */
    scope: AttributeDeclarationOf<"row" | "col" | "rowgroup" | "colgroup">;
}
/**
 * ## Th
 * The `<th>` HTML element defines a cell as header of a group of table cells. The exact nature of this group is defined by the scope and headers attributes.
 * @returns {BaseElement}
 */
export function Th(params: ThParams): BaseElement;
/**
 * ## TheadParams
 * The `<thead>` HTML element defines a set of rows defining the head of the columns of the table.
 */
export interface TheadParams
    extends CommonAttributes,
        Events<HTMLTableSectionElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Thead
 * The `<thead>` HTML element defines a set of rows defining the head of the columns of the table.
 * @returns {BaseElement}
 */
export function Thead(params: TheadParams): BaseElement;
/**
 * ## TrParams
 * The `<tr>` HTML element defines a row of cells in a table. The row's cells can then be established using a mix of td (data cell) and th (header cell) elements.
 */
export interface TrParams
    extends CommonAttributes,
        Events<HTMLTableRowElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Tr
 * The `<tr>` HTML element defines a row of cells in a table. The row's cells can then be established using a mix of td (data cell) and th (header cell) elements.
 * @returns {BaseElement}
 */
export function Tr(params: TrParams): BaseElement;
/**
 * ## ButtonParams
 * The `<button>` HTML element is an interactive element activated by a user with a mouse, keyboard, finger, voice command, or other assistive technology. Once activated, it then performs a programmable action, such as submitting a form or opening a dialog.
 */
export interface ButtonParams
    extends CommonAttributes,
        Events<HTMLButtonElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## autoFocus
     * The element should be automatically focused after the page loaded.
     */
    autoFocus: AttributeDeclarationOf<string>;
    /**
     * ## disabled
     * Indicates whether the user can interact with the element.
     */
    disabled: AttributeDeclarationOf<boolean>;
    /**
     * ## form
     * Indicates the form that is the owner of the element.
     */
    form: AttributeDeclarationOf<string>;
    /**
     * ## formAction
     * Indicates the action of the element, overriding the action defined in the <form>.
     */
    formAction: AttributeDeclarationOf<string>;
    /**
     * ## formEncType
     * If the button/input is a submit button (type="submit"), this attribute sets the encoding type to use during form submission. If this attribute is specified, it overrides the enctype attribute of the button's form owner.
     */
    formEncType: AttributeDeclarationOf<string>;
    /**
     * ## formMethod
     * If the button/input is a submit button (type="submit"), this attribute sets the submission method to use during form submission (GET, POST, etc.). If this attribute is specified, it overrides the method attribute of the button's form owner.
     */
    formMethod: AttributeDeclarationOf<string>;
    /**
     * ## formNoValidate
     * If the button/input is a submit button (type="submit"), this boolean attribute specifies that the form is not to be validated when it is submitted. If this attribute is specified, it overrides the novalidate attribute of the button's form owner.
     */
    formNoValidate: AttributeDeclarationOf<string>;
    /**
     * ## formTarget
     * The formtarget attribute specifies a name or a keyword that indicates where to display the response that is received after submitting the form.
     */
    formTarget: AttributeDeclarationOf<string>;
    /**
     * ## name
     * Name of the element. For example used by the server to identify the fields in form submits.
     */
    name: AttributeDeclarationOf<string>;
    /**
     * ## type
     * Defines the type of the element.
     */
    type: AttributeDeclarationOf<string>;
    /**
     * ## value
     */
    value: AttributeDeclarationOf<string>;
}
/**
 * ## Button
 * The `<button>` HTML element is an interactive element activated by a user with a mouse, keyboard, finger, voice command, or other assistive technology. Once activated, it then performs a programmable action, such as submitting a form or opening a dialog.
 * @returns {BaseElement}
 */
export function Button(params: ButtonParams): BaseElement;
/**
 * ## DatalistParams
 * The `<datalist>` HTML element contains a set of option elements that represent the permissible or recommended options available to choose from within other controls.
 */
export interface DatalistParams
    extends CommonAttributes,
        Events<HTMLDataListElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Datalist
 * The `<datalist>` HTML element contains a set of option elements that represent the permissible or recommended options available to choose from within other controls.
 * @returns {BaseElement}
 */
export function Datalist(params: DatalistParams): BaseElement;
/**
 * ## FieldsetParams
 * The `<fieldset>` HTML element is used to group several controls as well as labels (label) within a web form.
 */
export interface FieldsetParams
    extends CommonAttributes,
        Events<HTMLFieldSetElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## disabled
     * Indicates whether the user can interact with the element.
     */
    disabled: AttributeDeclarationOf<boolean>;
    /**
     * ## form
     * Indicates the form that is the owner of the element.
     */
    form: AttributeDeclarationOf<string>;
    /**
     * ## name
     * Name of the element. For example used by the server to identify the fields in form submits.
     */
    name: AttributeDeclarationOf<string>;
}
/**
 * ## Fieldset
 * The `<fieldset>` HTML element is used to group several controls as well as labels (label) within a web form.
 * @returns {BaseElement}
 */
export function Fieldset(params: FieldsetParams): BaseElement;
/**
 * ## FormParams
 * The `<form>` HTML element represents a document section containing interactive controls for submitting information.
 */
export interface FormParams
    extends CommonAttributes,
        Events<HTMLFormElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## acceptCharSet
     * List of supported charsets.
     */
    acceptCharSet: AttributeDeclarationOf<string>;
    /**
     * ## autoComplete
     * Indicates whether controls in this form can by default have their values automatically completed by the browser.
     */
    autoComplete: AttributeDeclarationOf<
        | "off"
        | "on"
        | "name"
        | "honorific-prefix"
        | "given-name"
        | "additional-name"
        | "family-name"
        | "honorific-suffix"
        | "nickname"
        | "email"
        | "username"
        | "new-password"
        | "current-password"
        | "one-time-code"
        | "organization-title"
        | "organization"
        | "street-address"
        | "country"
        | "country-name"
        | "postal-code"
        | "cc-name"
        | "cc-given-name"
        | "cc-additional-name"
        | "cc-family-name"
        | "cc-number"
        | "cc-exp"
        | "cc-exp-month"
        | "cc-exp-year"
        | "cc-csc"
        | "cc-type"
        | "transaction-currency"
        | "transaction-amount"
        | "language"
        | "bday"
        | "bday-day"
        | "bday-month"
        | "bday-year"
        | "sex"
        | "tel"
        | "tel-country-code"
        | "tel-national"
        | "tel-area-code"
        | "tel-local"
        | "tel-extension"
        | "impp"
        | "url"
        | "photo"
    >;
    /**
     * ## name
     * Name of the element. For example used by the server to identify the fields in form submits.
     */
    name: AttributeDeclarationOf<string>;
    /**
     * ## rel
     * Specifies the relationship of the target object to the link object.
     */
    rel: AttributeDeclarationOf<
        | "alternate"
        | "author"
        | "bookmark"
        | "canonical"
        | "dns-prefetch"
        | "external"
        | "help"
        | "icon"
        | "license"
        | "manifest"
        | "me"
        | "modulepreload"
        | "next"
        | "nofollow"
        | "noopener"
        | "noreferrer"
        | "opener"
        | "pingback"
        | "preconnect"
        | "prefetch"
        | "preload"
        | "prerender"
        | "prev"
        | "search"
        | "stylesheet"
        | "tag"
    >;
    /**
     * ## action
     */
    action: AttributeDeclarationOf<string>;
    /**
     * ## encType
     * Defines the content type of the form data when the method is POST.
     */
    encType: AttributeDeclarationOf<
        | "application/x-www-form-urlencoded"
        | "multipart/form-data"
        | "text/plain"
    >;
    /**
     * ## method
     * Defines which HTTP method to use when submitting the form. Can be GET (default) or POST.
     */
    method: AttributeDeclarationOf<"post" | "get" | "dialog">;
    /**
     * ## noValidate
     * This attribute indicates that the form shouldn't be validated when submitted.
     */
    noValidate: AttributeDeclarationOf<string>;
    /**
     * ## target
     * Specifies where to open the linked document (in the case of an ``<a>`` element) or where to display the response received (in the case of a ``<form>`` element)
     */
    target: AttributeDeclarationOf<"_self" | "_blank" | "_parent" | "_top">;
}
/**
 * ## Form
 * The `<form>` HTML element represents a document section containing interactive controls for submitting information.
 * @returns {BaseElement}
 */
export function Form(params: FormParams): BaseElement;
/**
 * ## InputParams
 * The `<input>` HTML element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. The <input> element is one of the most powerful and complex in all of HTML due to the sheer number of combinations of input types and attributes.
 */
export interface InputParams
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes {
    /**
     * ## accept
     * List of types the server accepts, typically a file type.
     */
    accept: AttributeDeclarationOf<"audio/*" | "video/*" | "image/*">;
    /**
     * ## alt
     * Alternative text in case an image can't be displayed.
     */
    alt: AttributeDeclarationOf<string>;
    /**
     * ## autoComplete
     * Indicates whether controls in this form can by default have their values automatically completed by the browser.
     */
    autoComplete: AttributeDeclarationOf<
        | "off"
        | "on"
        | "name"
        | "honorific-prefix"
        | "given-name"
        | "additional-name"
        | "family-name"
        | "honorific-suffix"
        | "nickname"
        | "email"
        | "username"
        | "new-password"
        | "current-password"
        | "one-time-code"
        | "organization-title"
        | "organization"
        | "street-address"
        | "country"
        | "country-name"
        | "postal-code"
        | "cc-name"
        | "cc-given-name"
        | "cc-additional-name"
        | "cc-family-name"
        | "cc-number"
        | "cc-exp"
        | "cc-exp-month"
        | "cc-exp-year"
        | "cc-csc"
        | "cc-type"
        | "transaction-currency"
        | "transaction-amount"
        | "language"
        | "bday"
        | "bday-day"
        | "bday-month"
        | "bday-year"
        | "sex"
        | "tel"
        | "tel-country-code"
        | "tel-national"
        | "tel-area-code"
        | "tel-local"
        | "tel-extension"
        | "impp"
        | "url"
        | "photo"
    >;
    /**
     * ## capture
     * From the Media Capture specification, specifies a new file can be captured.
     */
    capture: AttributeDeclarationOf<"user" | "environment">;
    /**
     * ## checked
     * Indicates whether the element should be checked on page load.
     */
    checked: AttributeDeclarationOf<string>;
    /**
     * ## dirName
     */
    dirName: AttributeDeclarationOf<string>;
    /**
     * ## disabled
     * Indicates whether the user can interact with the element.
     */
    disabled: AttributeDeclarationOf<boolean>;
    /**
     * ## form
     * Indicates the form that is the owner of the element.
     */
    form: AttributeDeclarationOf<string>;
    /**
     * ## formAction
     * Indicates the action of the element, overriding the action defined in the <form>.
     */
    formAction: AttributeDeclarationOf<string>;
    /**
     * ## formEncType
     * If the button/input is a submit button (type="submit"), this attribute sets the encoding type to use during form submission. If this attribute is specified, it overrides the enctype attribute of the button's form owner.
     */
    formEncType: AttributeDeclarationOf<string>;
    /**
     * ## formMethod
     * If the button/input is a submit button (type="submit"), this attribute sets the submission method to use during form submission (GET, POST, etc.). If this attribute is specified, it overrides the method attribute of the button's form owner.
     */
    formMethod: AttributeDeclarationOf<string>;
    /**
     * ## formNoValidate
     * If the button/input is a submit button (type="submit"), this boolean attribute specifies that the form is not to be validated when it is submitted. If this attribute is specified, it overrides the novalidate attribute of the button's form owner.
     */
    formNoValidate: AttributeDeclarationOf<string>;
    /**
     * ## formTarget
     * The formtarget attribute specifies a name or a keyword that indicates where to display the response that is received after submitting the form.
     */
    formTarget: AttributeDeclarationOf<string>;
    /**
     * ## height
     * Specifies the height of elements listed here. For all other elements, use the CSS height property.
     */
    height: AttributeDeclarationOf<string>;
    /**
     * ## list
     * Identifies a list of pre-defined options to suggest to the user.
     */
    list: AttributeDeclarationOf<string>;
    /**
     * ## max
     * Indicates the maximum value allowed.
     */
    max: AttributeDeclarationOf<string>;
    /**
     * ## maxLength
     * Defines the maximum number of characters allowed in the element.
     */
    maxLength: AttributeDeclarationOf<string>;
    /**
     * ## min
     * Indicates the minimum value allowed.
     */
    min: AttributeDeclarationOf<string>;
    /**
     * ## minLength
     * Defines the minimum number of characters allowed in the element.
     */
    minLength: AttributeDeclarationOf<string>;
    /**
     * ## multiple
     * Indicates whether multiple values can be entered in an input of the type email or file.
     */
    multiple: AttributeDeclarationOf<boolean>;
    /**
     * ## name
     * Name of the element. For example used by the server to identify the fields in form submits.
     */
    name: AttributeDeclarationOf<string>;
    /**
     * ## pattern
     * Defines a regular expression which the element's value will be validated against.
     */
    pattern: AttributeDeclarationOf<string>;
    /**
     * ## placeholder
     * Provides a hint to the user of what can be entered in the field.
     */
    placeholder: AttributeDeclarationOf<string>;
    /**
     * ## readOnly
     * Indicates whether the element can be edited.
     */
    readOnly: AttributeDeclarationOf<boolean>;
    /**
     * ## required
     * Indicates whether this element is required to fill out or not.
     */
    required: AttributeDeclarationOf<boolean>;
    /**
     * ## size
     * Defines the width of the element (in pixels). If the element's type attribute is text or password then it's the number of characters.
     */
    size: AttributeDeclarationOf<string>;
    /**
     * ## src
     * The URL of the embeddable content.
     */
    src: AttributeDeclarationOf<string>;
    /**
     * ## step
     */
    step: AttributeDeclarationOf<string>;
    /**
     * ## type
     * Defines the type of the element.
     */
    type: AttributeDeclarationOf<string>;
    /**
     * ## value
     */
    value: AttributeDeclarationOf<string>;
    /**
     * ## width
     * For the elements listed here, this establishes the element's width.
     */
    width: AttributeDeclarationOf<string>;
}
/**
 * ## Input
 * The `<input>` HTML element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. The <input> element is one of the most powerful and complex in all of HTML due to the sheer number of combinations of input types and attributes.
 * @returns {BaseElement}
 */
export function Input(params: InputParams): BaseElement;
/**
 * ## LabelParams
 * The `<label>` HTML element represents a caption for an item in a user interface.
 */
export interface LabelParams
    extends CommonAttributes,
        Events<HTMLLabelElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## isFor
     * Describes elements which belongs to this one.
     */
    isFor: AttributeDeclarationOf<string>;
}
/**
 * ## Label
 * The `<label>` HTML element represents a caption for an item in a user interface.
 * @returns {BaseElement}
 */
export function Label(params: LabelParams): BaseElement;
/**
 * ## LegendParams
 * The `<legend>` HTML element represents a caption for the content of its parent fieldset.
 */
export interface LegendParams
    extends CommonAttributes,
        Events<HTMLLegendElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Legend
 * The `<legend>` HTML element represents a caption for the content of its parent fieldset.
 * @returns {BaseElement}
 */
export function Legend(params: LegendParams): BaseElement;
/**
 * ## MeterParams
 * The `<meter>` HTML element represents either a scalar value within a known range or a fractional value.
 */
export interface MeterParams
    extends CommonAttributes,
        Events<HTMLMeterElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## value
     */
    value: AttributeDeclarationOf<string>;
    /**
     * ## min
     * Indicates the minimum value allowed.
     */
    min: AttributeDeclarationOf<string>;
    /**
     * ## max
     * Indicates the maximum value allowed.
     */
    max: AttributeDeclarationOf<string>;
    /**
     * ## low
     * Indicates the upper bound of the lower range.
     */
    low: AttributeDeclarationOf<string>;
    /**
     * ## high
     * Indicates the lower bound of the upper range.
     */
    high: AttributeDeclarationOf<string>;
    /**
     * ## optimum
     * Indicates the optimal numeric value.
     */
    optimum: AttributeDeclarationOf<string>;
}
/**
 * ## Meter
 * The `<meter>` HTML element represents either a scalar value within a known range or a fractional value.
 * @returns {BaseElement}
 */
export function Meter(params: MeterParams): BaseElement;
/**
 * ## OptgroupParams
 * The `<optgroup>` HTML element creates a grouping of options within a select element.
 */
export interface OptgroupParams
    extends CommonAttributes,
        Events<HTMLOptGroupElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## disabled
     * Indicates whether the user can interact with the element.
     */
    disabled: AttributeDeclarationOf<boolean>;
    /**
     * ## label
     * Specifies a user-readable title of the element.
     */
    label: AttributeDeclarationOf<string>;
}
/**
 * ## Optgroup
 * The `<optgroup>` HTML element creates a grouping of options within a select element.
 * @returns {BaseElement}
 */
export function Optgroup(params: OptgroupParams): BaseElement;
/**
 * ## OptionParams
 * The <option> HTML element is used to define an item contained in a select, an optgroup, or a datalist element. As such, <option> can represent menu items in popups and other lists of items in an HTML document.
 */
export interface OptionParams
    extends CommonAttributes,
        Events<HTMLOptionElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## disabled
     * Indicates whether the user can interact with the element.
     */
    disabled: AttributeDeclarationOf<boolean>;
    /**
     * ## label
     * Specifies a user-readable title of the element.
     */
    label: AttributeDeclarationOf<string>;
    /**
     * ## selected
     * Defines a value which will be selected on page load.
     */
    selected: AttributeDeclarationOf<boolean>;
    /**
     * ## value
     */
    value: AttributeDeclarationOf<string>;
}
/**
 * ## Option
 * The <option> HTML element is used to define an item contained in a select, an optgroup, or a datalist element. As such, <option> can represent menu items in popups and other lists of items in an HTML document.
 * @returns {BaseElement}
 */
export function Option(params: OptionParams): BaseElement;
/**
 * ## OutputParams
 * The `<output>` HTML element is a container element into which a site or app can inject the results of a calculation or the outcome of a user action.
 */
export interface OutputParams
    extends CommonAttributes,
        Events<HTMLOutputElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## isFor
     * Describes elements which belongs to this one.
     */
    isFor: AttributeDeclarationOf<string>;
    /**
     * ## form
     * Indicates the form that is the owner of the element.
     */
    form: AttributeDeclarationOf<string>;
    /**
     * ## name
     * Name of the element. For example used by the server to identify the fields in form submits.
     */
    name: AttributeDeclarationOf<string>;
}
/**
 * ## Output
 * The `<output>` HTML element is a container element into which a site or app can inject the results of a calculation or the outcome of a user action.
 * @returns {BaseElement}
 */
export function Output(params: OutputParams): BaseElement;
/**
 * ## ProgressParams
 * The `<progress>` HTML element displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
 */
export interface ProgressParams
    extends CommonAttributes,
        Events<HTMLProgressElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## max
     * Indicates the maximum value allowed.
     */
    max: AttributeDeclarationOf<string>;
    /**
     * ## value
     */
    value: AttributeDeclarationOf<string>;
}
/**
 * ## Progress
 * The `<progress>` HTML element displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
 * @returns {BaseElement}
 */
export function Progress(params: ProgressParams): BaseElement;
/**
 * ## SelectParams
 * The `<select>` HTML element represents a control that provides a menu of options.
 */
export interface SelectParams
    extends CommonAttributes,
        Events<HTMLSelectElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## autoComplete
     * Indicates whether controls in this form can by default have their values automatically completed by the browser.
     */
    autoComplete: AttributeDeclarationOf<
        | "off"
        | "on"
        | "name"
        | "honorific-prefix"
        | "given-name"
        | "additional-name"
        | "family-name"
        | "honorific-suffix"
        | "nickname"
        | "email"
        | "username"
        | "new-password"
        | "current-password"
        | "one-time-code"
        | "organization-title"
        | "organization"
        | "street-address"
        | "country"
        | "country-name"
        | "postal-code"
        | "cc-name"
        | "cc-given-name"
        | "cc-additional-name"
        | "cc-family-name"
        | "cc-number"
        | "cc-exp"
        | "cc-exp-month"
        | "cc-exp-year"
        | "cc-csc"
        | "cc-type"
        | "transaction-currency"
        | "transaction-amount"
        | "language"
        | "bday"
        | "bday-day"
        | "bday-month"
        | "bday-year"
        | "sex"
        | "tel"
        | "tel-country-code"
        | "tel-national"
        | "tel-area-code"
        | "tel-local"
        | "tel-extension"
        | "impp"
        | "url"
        | "photo"
    >;
    /**
     * ## autoFocus
     * The element should be automatically focused after the page loaded.
     */
    autoFocus: AttributeDeclarationOf<string>;
    /**
     * ## disabled
     * Indicates whether the user can interact with the element.
     */
    disabled: AttributeDeclarationOf<boolean>;
    /**
     * ## form
     * Indicates the form that is the owner of the element.
     */
    form: AttributeDeclarationOf<string>;
    /**
     * ## multiple
     * Indicates whether multiple values can be entered in an input of the type email or file.
     */
    multiple: AttributeDeclarationOf<boolean>;
    /**
     * ## name
     * Name of the element. For example used by the server to identify the fields in form submits.
     */
    name: AttributeDeclarationOf<string>;
    /**
     * ## required
     * Indicates whether this element is required to fill out or not.
     */
    required: AttributeDeclarationOf<boolean>;
    /**
     * ## size
     * Defines the width of the element (in pixels). If the element's type attribute is text or password then it's the number of characters.
     */
    size: AttributeDeclarationOf<string>;
}
/**
 * ## Select
 * The `<select>` HTML element represents a control that provides a menu of options.
 * @returns {BaseElement}
 */
export function Select(params: SelectParams): BaseElement;
/**
 * ## TextAreaParams
 * The `<textarea>` HTML element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.
 */
export interface TextAreaParams
    extends CommonAttributes,
        Events<HTMLTextAreaElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## autoComplete
     * Indicates whether controls in this form can by default have their values automatically completed by the browser.
     */
    autoComplete: AttributeDeclarationOf<
        | "off"
        | "on"
        | "name"
        | "honorific-prefix"
        | "given-name"
        | "additional-name"
        | "family-name"
        | "honorific-suffix"
        | "nickname"
        | "email"
        | "username"
        | "new-password"
        | "current-password"
        | "one-time-code"
        | "organization-title"
        | "organization"
        | "street-address"
        | "country"
        | "country-name"
        | "postal-code"
        | "cc-name"
        | "cc-given-name"
        | "cc-additional-name"
        | "cc-family-name"
        | "cc-number"
        | "cc-exp"
        | "cc-exp-month"
        | "cc-exp-year"
        | "cc-csc"
        | "cc-type"
        | "transaction-currency"
        | "transaction-amount"
        | "language"
        | "bday"
        | "bday-day"
        | "bday-month"
        | "bday-year"
        | "sex"
        | "tel"
        | "tel-country-code"
        | "tel-national"
        | "tel-area-code"
        | "tel-local"
        | "tel-extension"
        | "impp"
        | "url"
        | "photo"
    >;
    /**
     * ## autoFocus
     * The element should be automatically focused after the page loaded.
     */
    autoFocus: AttributeDeclarationOf<string>;
    /**
     * ## cols
     * Defines the number of columns in a textarea.
     */
    cols: AttributeDeclarationOf<number>;
    /**
     * ## disabled
     * Indicates whether the user can interact with the element.
     */
    disabled: AttributeDeclarationOf<boolean>;
    /**
     * ## form
     * Indicates the form that is the owner of the element.
     */
    form: AttributeDeclarationOf<string>;
    /**
     * ## maxLength
     * Defines the maximum number of characters allowed in the element.
     */
    maxLength: AttributeDeclarationOf<string>;
    /**
     * ## name
     * Name of the element. For example used by the server to identify the fields in form submits.
     */
    name: AttributeDeclarationOf<string>;
    /**
     * ## placeholder
     * Provides a hint to the user of what can be entered in the field.
     */
    placeholder: AttributeDeclarationOf<string>;
    /**
     * ## readOnly
     * Indicates whether the element can be edited.
     */
    readOnly: AttributeDeclarationOf<boolean>;
    /**
     * ## required
     * Indicates whether this element is required to fill out or not.
     */
    required: AttributeDeclarationOf<boolean>;
    /**
     * ## spellCheck
     * Indicates whether spell checking is allowed for the element.
     */
    spellCheck: AttributeDeclarationOf<"true" | "false">;
    /**
     * ## wrap
     * Indicates whether the text should be wrapped.
     */
    wrap: AttributeDeclarationOf<"hard" | "soft" | "off">;
}
/**
 * ## TextArea
 * The `<textarea>` HTML element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.
 * @returns {BaseElement}
 */
export function TextArea(params: TextAreaParams): BaseElement;
/**
 * ## DetailsParams
 * The `<details>` HTML element creates a disclosure widget in which information is visible only when the widget is toggled into an "open" state. A summary or label must be provided using the summary element.
 */
export interface DetailsParams
    extends CommonAttributes,
        Events<HTMLDetailsElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## open
     * Indicates whether the contents are currently visible (in the case of a ``<details>`` element) or whether the dialog is active and can be interacted with (in the case of a ``<dialog>`` element).
     */
    open: AttributeDeclarationOf<boolean>;
}
/**
 * ## Details
 * The `<details>` HTML element creates a disclosure widget in which information is visible only when the widget is toggled into an "open" state. A summary or label must be provided using the summary element.
 * @returns {BaseElement}
 */
export function Details(params: DetailsParams): BaseElement;
/**
 * ## DialogParams
 * The `<dialog>` HTML element represents a dialog box or other interactive component, such as a dismissible alert, inspector, or sub window.
 */
export interface DialogParams
    extends CommonAttributes,
        Events<HTMLDialogElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## open
     * Indicates whether the contents are currently visible (in the case of a ``<details>`` element) or whether the dialog is active and can be interacted with (in the case of a ``<dialog>`` element).
     */
    open: AttributeDeclarationOf<boolean>;
}
/**
 * ## Dialog
 * The `<dialog>` HTML element represents a dialog box or other interactive component, such as a dismissible alert, inspector, or sub window.
 * @returns {BaseElement}
 */
export function Dialog(params: DialogParams): BaseElement;
/**
 * ## SummaryParams
 * The `<summary>` HTML element specifies a summary, caption, or legend for a details element's disclosure box. Clicking the <summary> element toggles the state of the parent <details> element open and closed.
 */
export interface SummaryParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Summary
 * The `<summary>` HTML element specifies a summary, caption, or legend for a details element's disclosure box. Clicking the <summary> element toggles the state of the parent <details> element open and closed.
 * @returns {BaseElement}
 */
export function Summary(params: SummaryParams): BaseElement;
/**
 * ## SlotParams
 * The `<slot>` HTML element—part of the Web Components technology suite—is a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together.
 */
export interface SlotParams
    extends CommonAttributes,
        Events<HTMLSlotElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## name
     * Name of the element. For example used by the server to identify the fields in form submits.
     */
    name: AttributeDeclarationOf<string>;
}
/**
 * ## Slot
 * The `<slot>` HTML element—part of the Web Components technology suite—is a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together.
 * @returns {BaseElement}
 */
export function Slot(params: SlotParams): BaseElement;
/**
 * ## TemplateParams
 * The `<template>` HTML element is a mechanism for holding HTML that is not to be rendered immediately when a page is loaded but may be instantiated subsequently during runtime using JavaScript.
 */
export interface TemplateParams
    extends CommonAttributes,
        Events<HTMLTemplateElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Template
 * The `<template>` HTML element is a mechanism for holding HTML that is not to be rendered immediately when a page is loaded but may be instantiated subsequently during runtime using JavaScript.
 * @returns {BaseElement}
 */
export function Template(params: TemplateParams): BaseElement;
/**
 * ## HtmlContainerParams
 * Element rendering string as HTML.
 */
export interface HtmlContainerParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## HtmlContainer
 * Element rendering string as HTML.
 * @returns {BaseElement}
 */
export function HtmlContainer(params: HtmlContainerParams): BaseElement;
/**
 * ## FragmentParams
 * Utility element used to group elements without rendering the actual container,
 * instead children will be rendered within the parent component.
 */
export interface FragmentParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Fragment
 * Utility element used to group elements without rendering the actual container,
 * instead children will be rendered within the parent component.
 * @returns {BaseElement}
 */
export function Fragment(params: FragmentParams): BaseElement;
/**
 * ## ColumnParams
 * An element displaying its children vertically.
 */
export interface ColumnParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Column
 * An element displaying its children vertically.
 * @returns {BaseElement}
 */
export function Column(params: ColumnParams): BaseElement;
/**
 * ## RowParams
 * An element displaying its children horizontally.
 */
export interface RowParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## Row
 * An element displaying its children horizontally.
 * @returns {BaseElement}
 */
export function Row(params: RowParams): BaseElement;
/**
 * ## CenteredColumnParams
 * An element displaying its children vertically and centered
 */
export interface CenteredColumnParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## CenteredColumn
 * An element displaying its children vertically and centered
 * @returns {BaseElement}
 */
export function CenteredColumn(params: CenteredColumnParams): BaseElement;
/**
 * ## CenteredRowParams
 * An element displaying its children horizontally and centered
 */
export interface CenteredRowParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## CenteredRow
 * An element displaying its children horizontally and centered
 * @returns {BaseElement}
 */
export function CenteredRow(params: CenteredRowParams): BaseElement;
/**
 * ## CheckBoxParams
 * An element representing a boolean state of `true` or `false`.
 * Implement `onInput` or `onChange` to trigger actions when the state changes
 */
export interface CheckBoxParams
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## value
     */
    value: AttributeDeclarationOf<string>;
    /**
     * ## checked
     * Indicates whether the element should be checked on page load.
     */
    checked: AttributeDeclarationOf<string>;
}
/**
 * ## CheckBox
 * An element representing a boolean state of `true` or `false`.
 * Implement `onInput` or `onChange` to trigger actions when the state changes
 * @returns {BaseElement}
 */
export function CheckBox(params: CheckBoxParams): BaseElement;
/**
 * ## ColorPickerParams
 * Element allowing the user to pick a color from the displayed spectrum.
 */
export interface ColorPickerParams
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## value
     */
    value: AttributeDeclarationOf<string>;
}
/**
 * ## ColorPicker
 * Element allowing the user to pick a color from the displayed spectrum.
 * @returns {BaseElement}
 */
export function ColorPicker(params: ColorPickerParams): BaseElement;
/**
 * ## DatePickerParams
 * Element providing a method for the user to pick a specific date.
 */
export interface DatePickerParams
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## value
     */
    value: AttributeDeclarationOf<string>;
    /**
     * ## max
     * Indicates the maximum value allowed.
     */
    max: AttributeDeclarationOf<string>;
    /**
     * ## min
     * Indicates the minimum value allowed.
     */
    min: AttributeDeclarationOf<string>;
    /**
     * ## step
     */
    step: AttributeDeclarationOf<string>;
}
/**
 * ## DatePicker
 * Element providing a method for the user to pick a specific date.
 * @returns {BaseElement}
 */
export function DatePicker(params: DatePickerParams): BaseElement;
/**
 * ## DateTimeLocalPickerParams
 * A more specific version of the `DatePicker` element,
 * allowing the user to easily pick both date and time.
 */
export interface DateTimeLocalPickerParams
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## value
     */
    value: AttributeDeclarationOf<string>;
    /**
     * ## max
     * Indicates the maximum value allowed.
     */
    max: AttributeDeclarationOf<string>;
    /**
     * ## min
     * Indicates the minimum value allowed.
     */
    min: AttributeDeclarationOf<string>;
    /**
     * ## step
     */
    step: AttributeDeclarationOf<string>;
}
/**
 * ## DateTimeLocalPicker
 * A more specific version of the `DatePicker` element,
 * allowing the user to easily pick both date and time.
 * @returns {BaseElement}
 */
export function DateTimeLocalPicker(
    params: DateTimeLocalPickerParams
): BaseElement;
/**
 * ## EmailFieldParams
 * Element used to let the user input one e-mail address,
 * or multiple in case `multiple` attribute is specified.
 */
export interface EmailFieldParams
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## value
     */
    value: AttributeDeclarationOf<string>;
    /**
     * ## autoComplete
     * Indicates whether controls in this form can by default have their values automatically completed by the browser.
     */
    autoComplete: AttributeDeclarationOf<
        | "off"
        | "on"
        | "name"
        | "honorific-prefix"
        | "given-name"
        | "additional-name"
        | "family-name"
        | "honorific-suffix"
        | "nickname"
        | "email"
        | "username"
        | "new-password"
        | "current-password"
        | "one-time-code"
        | "organization-title"
        | "organization"
        | "street-address"
        | "country"
        | "country-name"
        | "postal-code"
        | "cc-name"
        | "cc-given-name"
        | "cc-additional-name"
        | "cc-family-name"
        | "cc-number"
        | "cc-exp"
        | "cc-exp-month"
        | "cc-exp-year"
        | "cc-csc"
        | "cc-type"
        | "transaction-currency"
        | "transaction-amount"
        | "language"
        | "bday"
        | "bday-day"
        | "bday-month"
        | "bday-year"
        | "sex"
        | "tel"
        | "tel-country-code"
        | "tel-national"
        | "tel-area-code"
        | "tel-local"
        | "tel-extension"
        | "impp"
        | "url"
        | "photo"
    >;
    /**
     * ## list
     * Identifies a list of pre-defined options to suggest to the user.
     */
    list: AttributeDeclarationOf<string>;
    /**
     * ## maxLength
     * Defines the maximum number of characters allowed in the element.
     */
    maxLength: AttributeDeclarationOf<string>;
    /**
     * ## minLength
     * Defines the minimum number of characters allowed in the element.
     */
    minLength: AttributeDeclarationOf<string>;
    /**
     * ## multiple
     * Indicates whether multiple values can be entered in an input of the type email or file.
     */
    multiple: AttributeDeclarationOf<boolean>;
    /**
     * ## pattern
     * Defines a regular expression which the element's value will be validated against.
     */
    pattern: AttributeDeclarationOf<string>;
    /**
     * ## placeholder
     * Provides a hint to the user of what can be entered in the field.
     */
    placeholder: AttributeDeclarationOf<string>;
    /**
     * ## readOnly
     * Indicates whether the element can be edited.
     */
    readOnly: AttributeDeclarationOf<boolean>;
    /**
     * ## required
     * Indicates whether this element is required to fill out or not.
     */
    required: AttributeDeclarationOf<boolean>;
    /**
     * ## size
     * Defines the width of the element (in pixels). If the element's type attribute is text or password then it's the number of characters.
     */
    size: AttributeDeclarationOf<string>;
}
/**
 * ## EmailField
 * Element used to let the user input one e-mail address,
 * or multiple in case `multiple` attribute is specified.
 * @returns {BaseElement}
 */
export function EmailField(params: EmailFieldParams): BaseElement;
/**
 * ## FilePickerParams
 * Element allowing the user to choose and select one or more files from their device storage,
 * which can be later processed using JavaScript or uploaded directly using `form submission`.
 */
export interface FilePickerParams
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## required
     * Indicates whether this element is required to fill out or not.
     */
    required: AttributeDeclarationOf<boolean>;
    /**
     * ## accept
     * List of types the server accepts, typically a file type.
     */
    accept: AttributeDeclarationOf<"audio/*" | "video/*" | "image/*">;
    /**
     * ## capture
     * From the Media Capture specification, specifies a new file can be captured.
     */
    capture: AttributeDeclarationOf<"user" | "environment">;
    /**
     * ## multiple
     * Indicates whether multiple values can be entered in an input of the type email or file.
     */
    multiple: AttributeDeclarationOf<boolean>;
}
/**
 * ## FilePicker
 * Element allowing the user to choose and select one or more files from their device storage,
 * which can be later processed using JavaScript or uploaded directly using `form submission`.
 * @returns {BaseElement}
 */
export function FilePicker(params: FilePickerParams): BaseElement;
/**
 * ## HiddenInputParams
 * Element that let web developers include data that cannot be seen or modified
 * by users when a form is submitted.
 */
export interface HiddenInputParams
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## name
     * Name of the element. For example used by the server to identify the fields in form submits.
     */
    name: AttributeDeclarationOf<string>;
    /**
     * ## value
     */
    value: AttributeDeclarationOf<string>;
    /**
     * ## autoComplete
     * Indicates whether controls in this form can by default have their values automatically completed by the browser.
     */
    autoComplete: AttributeDeclarationOf<
        | "off"
        | "on"
        | "name"
        | "honorific-prefix"
        | "given-name"
        | "additional-name"
        | "family-name"
        | "honorific-suffix"
        | "nickname"
        | "email"
        | "username"
        | "new-password"
        | "current-password"
        | "one-time-code"
        | "organization-title"
        | "organization"
        | "street-address"
        | "country"
        | "country-name"
        | "postal-code"
        | "cc-name"
        | "cc-given-name"
        | "cc-additional-name"
        | "cc-family-name"
        | "cc-number"
        | "cc-exp"
        | "cc-exp-month"
        | "cc-exp-year"
        | "cc-csc"
        | "cc-type"
        | "transaction-currency"
        | "transaction-amount"
        | "language"
        | "bday"
        | "bday-day"
        | "bday-month"
        | "bday-year"
        | "sex"
        | "tel"
        | "tel-country-code"
        | "tel-national"
        | "tel-area-code"
        | "tel-local"
        | "tel-extension"
        | "impp"
        | "url"
        | "photo"
    >;
}
/**
 * ## HiddenInput
 * Element that let web developers include data that cannot be seen or modified
 * by users when a form is submitted.
 * @returns {BaseElement}
 */
export function HiddenInput(params: HiddenInputParams): BaseElement;
/**
 * ## ImagePickerParams
 * Element allowing the user to choose and select an image from their device storage,
 * which can be later processed using JavaScript or uploaded directly using `form submission`.
 */
export interface ImagePickerParams
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## alt
     * Alternative text in case an image can't be displayed.
     */
    alt: AttributeDeclarationOf<string>;
    /**
     * ## src
     * The URL of the embeddable content.
     */
    src: AttributeDeclarationOf<string>;
    /**
     * ## height
     * Specifies the height of elements listed here. For all other elements, use the CSS height property.
     */
    height: AttributeDeclarationOf<string>;
    /**
     * ## formAction
     * Indicates the action of the element, overriding the action defined in the <form>.
     */
    formAction: AttributeDeclarationOf<string>;
    /**
     * ## formEncType
     * If the button/input is a submit button (type="submit"), this attribute sets the encoding type to use during form submission. If this attribute is specified, it overrides the enctype attribute of the button's form owner.
     */
    formEncType: AttributeDeclarationOf<string>;
    /**
     * ## formMethod
     * If the button/input is a submit button (type="submit"), this attribute sets the submission method to use during form submission (GET, POST, etc.). If this attribute is specified, it overrides the method attribute of the button's form owner.
     */
    formMethod: AttributeDeclarationOf<string>;
    /**
     * ## formNoValidate
     * If the button/input is a submit button (type="submit"), this boolean attribute specifies that the form is not to be validated when it is submitted. If this attribute is specified, it overrides the novalidate attribute of the button's form owner.
     */
    formNoValidate: AttributeDeclarationOf<string>;
    /**
     * ## formTarget
     * The formtarget attribute specifies a name or a keyword that indicates where to display the response that is received after submitting the form.
     */
    formTarget: AttributeDeclarationOf<string>;
}
/**
 * ## ImagePicker
 * Element allowing the user to choose and select an image from their device storage,
 * which can be later processed using JavaScript or uploaded directly using `form submission`.
 * @returns {BaseElement}
 */
export function ImagePicker(params: ImagePickerParams): BaseElement;
/**
 * ## MonthPickerParams
 * Element providing a method for the user to pick a specific month.
 */
export interface MonthPickerParams
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## autoComplete
     * Indicates whether controls in this form can by default have their values automatically completed by the browser.
     */
    autoComplete: AttributeDeclarationOf<
        | "off"
        | "on"
        | "name"
        | "honorific-prefix"
        | "given-name"
        | "additional-name"
        | "family-name"
        | "honorific-suffix"
        | "nickname"
        | "email"
        | "username"
        | "new-password"
        | "current-password"
        | "one-time-code"
        | "organization-title"
        | "organization"
        | "street-address"
        | "country"
        | "country-name"
        | "postal-code"
        | "cc-name"
        | "cc-given-name"
        | "cc-additional-name"
        | "cc-family-name"
        | "cc-number"
        | "cc-exp"
        | "cc-exp-month"
        | "cc-exp-year"
        | "cc-csc"
        | "cc-type"
        | "transaction-currency"
        | "transaction-amount"
        | "language"
        | "bday"
        | "bday-day"
        | "bday-month"
        | "bday-year"
        | "sex"
        | "tel"
        | "tel-country-code"
        | "tel-national"
        | "tel-area-code"
        | "tel-local"
        | "tel-extension"
        | "impp"
        | "url"
        | "photo"
    >;
    /**
     * ## list
     * Identifies a list of pre-defined options to suggest to the user.
     */
    list: AttributeDeclarationOf<string>;
    /**
     * ## readOnly
     * Indicates whether the element can be edited.
     */
    readOnly: AttributeDeclarationOf<boolean>;
    /**
     * ## step
     */
    step: AttributeDeclarationOf<string>;
    /**
     * ## value
     */
    value: AttributeDeclarationOf<string>;
}
/**
 * ## MonthPicker
 * Element providing a method for the user to pick a specific month.
 * @returns {BaseElement}
 */
export function MonthPicker(params: MonthPickerParams): BaseElement;
/**
 * ## NumberPickerParams
 * Element providing a method for the user to pick a number in a given intervall.
 */
export interface NumberPickerParams
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## autoComplete
     * Indicates whether controls in this form can by default have their values automatically completed by the browser.
     */
    autoComplete: AttributeDeclarationOf<
        | "off"
        | "on"
        | "name"
        | "honorific-prefix"
        | "given-name"
        | "additional-name"
        | "family-name"
        | "honorific-suffix"
        | "nickname"
        | "email"
        | "username"
        | "new-password"
        | "current-password"
        | "one-time-code"
        | "organization-title"
        | "organization"
        | "street-address"
        | "country"
        | "country-name"
        | "postal-code"
        | "cc-name"
        | "cc-given-name"
        | "cc-additional-name"
        | "cc-family-name"
        | "cc-number"
        | "cc-exp"
        | "cc-exp-month"
        | "cc-exp-year"
        | "cc-csc"
        | "cc-type"
        | "transaction-currency"
        | "transaction-amount"
        | "language"
        | "bday"
        | "bday-day"
        | "bday-month"
        | "bday-year"
        | "sex"
        | "tel"
        | "tel-country-code"
        | "tel-national"
        | "tel-area-code"
        | "tel-local"
        | "tel-extension"
        | "impp"
        | "url"
        | "photo"
    >;
    /**
     * ## list
     * Identifies a list of pre-defined options to suggest to the user.
     */
    list: AttributeDeclarationOf<string>;
    /**
     * ## placeholder
     * Provides a hint to the user of what can be entered in the field.
     */
    placeholder: AttributeDeclarationOf<string>;
    /**
     * ## readOnly
     * Indicates whether the element can be edited.
     */
    readOnly: AttributeDeclarationOf<boolean>;
    /**
     * ## value
     */
    value: AttributeDeclarationOf<string>;
}
/**
 * ## NumberPicker
 * Element providing a method for the user to pick a number in a given intervall.
 * @returns {BaseElement}
 */
export function NumberPicker(params: NumberPickerParams): BaseElement;
/**
 * ## PasswordFieldParams
 * Element that treat the input of the user as a password and replace characters
 * depending on the browser's `user agent` and operating system.
 */
export interface PasswordFieldParams
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## autoComplete
     * Indicates whether controls in this form can by default have their values automatically completed by the browser.
     */
    autoComplete: AttributeDeclarationOf<
        | "off"
        | "on"
        | "name"
        | "honorific-prefix"
        | "given-name"
        | "additional-name"
        | "family-name"
        | "honorific-suffix"
        | "nickname"
        | "email"
        | "username"
        | "new-password"
        | "current-password"
        | "one-time-code"
        | "organization-title"
        | "organization"
        | "street-address"
        | "country"
        | "country-name"
        | "postal-code"
        | "cc-name"
        | "cc-given-name"
        | "cc-additional-name"
        | "cc-family-name"
        | "cc-number"
        | "cc-exp"
        | "cc-exp-month"
        | "cc-exp-year"
        | "cc-csc"
        | "cc-type"
        | "transaction-currency"
        | "transaction-amount"
        | "language"
        | "bday"
        | "bday-day"
        | "bday-month"
        | "bday-year"
        | "sex"
        | "tel"
        | "tel-country-code"
        | "tel-national"
        | "tel-area-code"
        | "tel-local"
        | "tel-extension"
        | "impp"
        | "url"
        | "photo"
    >;
    /**
     * ## inputMode
     * Provides a hint as to the type of data that might be entered by the user while editing the element or its contents. The attribute can be used with form controls (such as the value of textarea elements), or in elements in an editing host (e.g., using contenteditable attribute).
     */
    inputMode: AttributeDeclarationOf<
        | "none"
        | "text"
        | "decimal"
        | "numeric"
        | "tel"
        | "search"
        | "email"
        | "url"
    >;
    /**
     * ## maxLength
     * Defines the maximum number of characters allowed in the element.
     */
    maxLength: AttributeDeclarationOf<string>;
    /**
     * ## minLength
     * Defines the minimum number of characters allowed in the element.
     */
    minLength: AttributeDeclarationOf<string>;
    /**
     * ## pattern
     * Defines a regular expression which the element's value will be validated against.
     */
    pattern: AttributeDeclarationOf<string>;
    /**
     * ## placeholder
     * Provides a hint to the user of what can be entered in the field.
     */
    placeholder: AttributeDeclarationOf<string>;
    /**
     * ## readOnly
     * Indicates whether the element can be edited.
     */
    readOnly: AttributeDeclarationOf<boolean>;
    /**
     * ## required
     * Indicates whether this element is required to fill out or not.
     */
    required: AttributeDeclarationOf<boolean>;
    /**
     * ## size
     * Defines the width of the element (in pixels). If the element's type attribute is text or password then it's the number of characters.
     */
    size: AttributeDeclarationOf<string>;
    /**
     * ## value
     */
    value: AttributeDeclarationOf<string>;
}
/**
 * ## PasswordField
 * Element that treat the input of the user as a password and replace characters
 * depending on the browser's `user agent` and operating system.
 * @returns {BaseElement}
 */
export function PasswordField(params: PasswordFieldParams): BaseElement;
/**
 * ## RadioButtonParams
 * Element used generally in a group, describing a set of related options.
 */
export interface RadioButtonParams
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## checked
     * Indicates whether the element should be checked on page load.
     */
    checked: AttributeDeclarationOf<string>;
    /**
     * ## value
     */
    value: AttributeDeclarationOf<string>;
    /**
     * ## required
     * Indicates whether this element is required to fill out or not.
     */
    required: AttributeDeclarationOf<boolean>;
}
/**
 * ## RadioButton
 * Element used generally in a group, describing a set of related options.
 * @returns {BaseElement}
 */
export function RadioButton(params: RadioButtonParams): BaseElement;
/**
 * ## RangePickerParams
 * Element that let the user specify a numeric value which must be no less than a given value,
 * and no more than another given value.
 */
export interface RangePickerParams
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## autoComplete
     * Indicates whether controls in this form can by default have their values automatically completed by the browser.
     */
    autoComplete: AttributeDeclarationOf<
        | "off"
        | "on"
        | "name"
        | "honorific-prefix"
        | "given-name"
        | "additional-name"
        | "family-name"
        | "honorific-suffix"
        | "nickname"
        | "email"
        | "username"
        | "new-password"
        | "current-password"
        | "one-time-code"
        | "organization-title"
        | "organization"
        | "street-address"
        | "country"
        | "country-name"
        | "postal-code"
        | "cc-name"
        | "cc-given-name"
        | "cc-additional-name"
        | "cc-family-name"
        | "cc-number"
        | "cc-exp"
        | "cc-exp-month"
        | "cc-exp-year"
        | "cc-csc"
        | "cc-type"
        | "transaction-currency"
        | "transaction-amount"
        | "language"
        | "bday"
        | "bday-day"
        | "bday-month"
        | "bday-year"
        | "sex"
        | "tel"
        | "tel-country-code"
        | "tel-national"
        | "tel-area-code"
        | "tel-local"
        | "tel-extension"
        | "impp"
        | "url"
        | "photo"
    >;
    /**
     * ## list
     * Identifies a list of pre-defined options to suggest to the user.
     */
    list: AttributeDeclarationOf<string>;
    /**
     * ## max
     * Indicates the maximum value allowed.
     */
    max: AttributeDeclarationOf<string>;
    /**
     * ## min
     * Indicates the minimum value allowed.
     */
    min: AttributeDeclarationOf<string>;
    /**
     * ## step
     */
    step: AttributeDeclarationOf<string>;
    /**
     * ## value
     */
    value: AttributeDeclarationOf<string>;
}
/**
 * ## RangePicker
 * Element that let the user specify a numeric value which must be no less than a given value,
 * and no more than another given value.
 * @returns {BaseElement}
 */
export function RangePicker(params: RangePickerParams): BaseElement;
/**
 * ## ResetButtonParams
 * Button that, by default, reset all inputs in the form to their initial values.
 */
export interface ResetButtonParams
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## value
     */
    value: AttributeDeclarationOf<string>;
}
/**
 * ## ResetButton
 * Button that, by default, reset all inputs in the form to their initial values.
 * @returns {BaseElement}
 */
export function ResetButton(params: ResetButtonParams): BaseElement;
/**
 * ## SearchFieldParams
 * A Text field element designed for the user to enter search queries into.
 */
export interface SearchFieldParams
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## autoComplete
     * Identifies a list of pre-defined options to suggest to the user.
     */
    autoComplete: AttributeDeclarationOf<string>;
    /**
     * ## list
     * Identifies a list of pre-defined options to suggest to the user.
     */
    list: AttributeDeclarationOf<string>;
    /**
     * ## maxLength
     * Defines the maximum number of characters allowed in the element.
     */
    maxLength: AttributeDeclarationOf<string>;
    /**
     * ## minLength
     * Defines the minimum number of characters allowed in the element.
     */
    minLength: AttributeDeclarationOf<string>;
    /**
     * ## pattern
     * Defines a regular expression which the element's value will be validated against.
     */
    pattern: AttributeDeclarationOf<string>;
    /**
     * ## placeholder
     * Provides a hint to the user of what can be entered in the field.
     */
    placeholder: AttributeDeclarationOf<string>;
    /**
     * ## required
     * Indicates whether this element is required to fill out or not.
     */
    required: AttributeDeclarationOf<boolean>;
    /**
     * ## size
     * Defines the width of the element (in pixels). If the element's type attribute is text or password then it's the number of characters.
     */
    size: AttributeDeclarationOf<string>;
    /**
     * ## value
     */
    value: AttributeDeclarationOf<string>;
}
/**
 * ## SearchField
 * A Text field element designed for the user to enter search queries into.
 * @returns {BaseElement}
 */
export function SearchField(params: SearchFieldParams): BaseElement;
/**
 * ## SubmitButtonParams
 * Element rendered as a button, when it is clicked,
 * the `user agent` (by default) attempts to submit the form to the server.
 */
export interface SubmitButtonParams
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## value
     */
    value: AttributeDeclarationOf<string>;
}
/**
 * ## SubmitButton
 * Element rendered as a button, when it is clicked,
 * the `user agent` (by default) attempts to submit the form to the server.
 * @returns {BaseElement}
 */
export function SubmitButton(params: SubmitButtonParams): BaseElement;
/**
 * ## TelephoneNumberFieldParams
 * Element used to let the user enter and edit a telephone number.
 */
export interface TelephoneNumberFieldParams
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## readOnly
     * Indicates whether the element can be edited.
     */
    readOnly: AttributeDeclarationOf<boolean>;
    /**
     * ## autoComplete
     * Identifies a list of pre-defined options to suggest to the user.
     */
    autoComplete: AttributeDeclarationOf<string>;
    /**
     * ## list
     * Identifies a list of pre-defined options to suggest to the user.
     */
    list: AttributeDeclarationOf<string>;
    /**
     * ## maxLength
     * Defines the maximum number of characters allowed in the element.
     */
    maxLength: AttributeDeclarationOf<string>;
    /**
     * ## minLength
     * Defines the minimum number of characters allowed in the element.
     */
    minLength: AttributeDeclarationOf<string>;
    /**
     * ## pattern
     * Defines a regular expression which the element's value will be validated against.
     */
    pattern: AttributeDeclarationOf<string>;
    /**
     * ## placeholder
     * Provides a hint to the user of what can be entered in the field.
     */
    placeholder: AttributeDeclarationOf<string>;
    /**
     * ## size
     * Defines the width of the element (in pixels). If the element's type attribute is text or password then it's the number of characters.
     */
    size: AttributeDeclarationOf<string>;
    /**
     * ## value
     */
    value: AttributeDeclarationOf<string>;
}
/**
 * ## TelephoneNumberField
 * Element used to let the user enter and edit a telephone number.
 * @returns {BaseElement}
 */
export function TelephoneNumberField(
    params: TelephoneNumberFieldParams
): BaseElement;
/**
 * ## TextFieldParams
 * Element for basic single-line text input.
 */
export interface TextFieldParams
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## required
     * Indicates whether this element is required to fill out or not.
     */
    required: AttributeDeclarationOf<boolean>;
    /**
     * ## readOnly
     * Indicates whether the element can be edited.
     */
    readOnly: AttributeDeclarationOf<boolean>;
    /**
     * ## autoComplete
     * Identifies a list of pre-defined options to suggest to the user.
     */
    autoComplete: AttributeDeclarationOf<string>;
    /**
     * ## list
     * Identifies a list of pre-defined options to suggest to the user.
     */
    list: AttributeDeclarationOf<string>;
    /**
     * ## maxLength
     * Defines the maximum number of characters allowed in the element.
     */
    maxLength: AttributeDeclarationOf<string>;
    /**
     * ## minLength
     * Defines the minimum number of characters allowed in the element.
     */
    minLength: AttributeDeclarationOf<string>;
    /**
     * ## pattern
     * Defines a regular expression which the element's value will be validated against.
     */
    pattern: AttributeDeclarationOf<string>;
    /**
     * ## placeholder
     * Provides a hint to the user of what can be entered in the field.
     */
    placeholder: AttributeDeclarationOf<string>;
    /**
     * ## size
     * Defines the width of the element (in pixels). If the element's type attribute is text or password then it's the number of characters.
     */
    size: AttributeDeclarationOf<string>;
    /**
     * ## value
     */
    value: AttributeDeclarationOf<string>;
}
/**
 * ## TextField
 * Element for basic single-line text input.
 * @returns {BaseElement}
 */
export function TextField(params: TextFieldParams): BaseElement;
/**
 * ## TimePickerParams
 * Element that let the user easily enter a time (hours and minutes, and optionally seconds).
 */
export interface TimePickerParams
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## autoComplete
     * Indicates whether controls in this form can by default have their values automatically completed by the browser.
     */
    autoComplete: AttributeDeclarationOf<
        | "off"
        | "on"
        | "name"
        | "honorific-prefix"
        | "given-name"
        | "additional-name"
        | "family-name"
        | "honorific-suffix"
        | "nickname"
        | "email"
        | "username"
        | "new-password"
        | "current-password"
        | "one-time-code"
        | "organization-title"
        | "organization"
        | "street-address"
        | "country"
        | "country-name"
        | "postal-code"
        | "cc-name"
        | "cc-given-name"
        | "cc-additional-name"
        | "cc-family-name"
        | "cc-number"
        | "cc-exp"
        | "cc-exp-month"
        | "cc-exp-year"
        | "cc-csc"
        | "cc-type"
        | "transaction-currency"
        | "transaction-amount"
        | "language"
        | "bday"
        | "bday-day"
        | "bday-month"
        | "bday-year"
        | "sex"
        | "tel"
        | "tel-country-code"
        | "tel-national"
        | "tel-area-code"
        | "tel-local"
        | "tel-extension"
        | "impp"
        | "url"
        | "photo"
    >;
    /**
     * ## list
     * Identifies a list of pre-defined options to suggest to the user.
     */
    list: AttributeDeclarationOf<string>;
    /**
     * ## readOnly
     * Indicates whether the element can be edited.
     */
    readOnly: AttributeDeclarationOf<boolean>;
    /**
     * ## step
     */
    step: AttributeDeclarationOf<string>;
    /**
     * ## value
     */
    value: AttributeDeclarationOf<string>;
}
/**
 * ## TimePicker
 * Element that let the user easily enter a time (hours and minutes, and optionally seconds).
 * @returns {BaseElement}
 */
export function TimePicker(params: TimePickerParams): BaseElement;
/**
 * ## UrlFieldParams
 * Element used to let the user enter and edit an URL.
 */
export interface UrlFieldParams
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## pattern
     * Defines a regular expression which the element's value will be validated against.
     */
    pattern: AttributeDeclarationOf<string>;
    /**
     * ## value
     */
    value: AttributeDeclarationOf<string>;
    /**
     * ## autoComplete
     * Indicates whether controls in this form can by default have their values automatically completed by the browser.
     */
    autoComplete: AttributeDeclarationOf<
        | "off"
        | "on"
        | "name"
        | "honorific-prefix"
        | "given-name"
        | "additional-name"
        | "family-name"
        | "honorific-suffix"
        | "nickname"
        | "email"
        | "username"
        | "new-password"
        | "current-password"
        | "one-time-code"
        | "organization-title"
        | "organization"
        | "street-address"
        | "country"
        | "country-name"
        | "postal-code"
        | "cc-name"
        | "cc-given-name"
        | "cc-additional-name"
        | "cc-family-name"
        | "cc-number"
        | "cc-exp"
        | "cc-exp-month"
        | "cc-exp-year"
        | "cc-csc"
        | "cc-type"
        | "transaction-currency"
        | "transaction-amount"
        | "language"
        | "bday"
        | "bday-day"
        | "bday-month"
        | "bday-year"
        | "sex"
        | "tel"
        | "tel-country-code"
        | "tel-national"
        | "tel-area-code"
        | "tel-local"
        | "tel-extension"
        | "impp"
        | "url"
        | "photo"
    >;
    /**
     * ## list
     * Identifies a list of pre-defined options to suggest to the user.
     */
    list: AttributeDeclarationOf<string>;
    /**
     * ## maxLength
     * Defines the maximum number of characters allowed in the element.
     */
    maxLength: AttributeDeclarationOf<string>;
    /**
     * ## minLength
     * Defines the minimum number of characters allowed in the element.
     */
    minLength: AttributeDeclarationOf<string>;
    /**
     * ## multiple
     * Indicates whether multiple values can be entered in an input of the type email or file.
     */
    multiple: AttributeDeclarationOf<boolean>;
    /**
     * ## placeholder
     * Provides a hint to the user of what can be entered in the field.
     */
    placeholder: AttributeDeclarationOf<string>;
    /**
     * ## readOnly
     * Indicates whether the element can be edited.
     */
    readOnly: AttributeDeclarationOf<boolean>;
    /**
     * ## required
     * Indicates whether this element is required to fill out or not.
     */
    required: AttributeDeclarationOf<boolean>;
    /**
     * ## size
     * Defines the width of the element (in pixels). If the element's type attribute is text or password then it's the number of characters.
     */
    size: AttributeDeclarationOf<string>;
}
/**
 * ## UrlField
 * Element used to let the user enter and edit an URL.
 * @returns {BaseElement}
 */
export function UrlField(params: UrlFieldParams): BaseElement;
/**
 * ## WeekPickerParams
 * Element allowing easy entry of a year plus the ``ISO 8601`` week number during that year
 */
export interface WeekPickerParams
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## autoComplete
     * Indicates whether controls in this form can by default have their values automatically completed by the browser.
     */
    autoComplete: AttributeDeclarationOf<
        | "off"
        | "on"
        | "name"
        | "honorific-prefix"
        | "given-name"
        | "additional-name"
        | "family-name"
        | "honorific-suffix"
        | "nickname"
        | "email"
        | "username"
        | "new-password"
        | "current-password"
        | "one-time-code"
        | "organization-title"
        | "organization"
        | "street-address"
        | "country"
        | "country-name"
        | "postal-code"
        | "cc-name"
        | "cc-given-name"
        | "cc-additional-name"
        | "cc-family-name"
        | "cc-number"
        | "cc-exp"
        | "cc-exp-month"
        | "cc-exp-year"
        | "cc-csc"
        | "cc-type"
        | "transaction-currency"
        | "transaction-amount"
        | "language"
        | "bday"
        | "bday-day"
        | "bday-month"
        | "bday-year"
        | "sex"
        | "tel"
        | "tel-country-code"
        | "tel-national"
        | "tel-area-code"
        | "tel-local"
        | "tel-extension"
        | "impp"
        | "url"
        | "photo"
    >;
    /**
     * ## list
     * Identifies a list of pre-defined options to suggest to the user.
     */
    list: AttributeDeclarationOf<string>;
    /**
     * ## readOnly
     * Indicates whether the element can be edited.
     */
    readOnly: AttributeDeclarationOf<boolean>;
    /**
     * ## step
     */
    step: AttributeDeclarationOf<string>;
    /**
     * ## value
     */
    value: AttributeDeclarationOf<string>;
}
/**
 * ## WeekPicker
 * Element allowing easy entry of a year plus the ``ISO 8601`` week number during that year
 * @returns {BaseElement}
 */
export function WeekPicker(params: WeekPickerParams): BaseElement;
/**
 * ## SpacerParams
 * Element allowing the user to create space between components, vertically or horizontally.
 * The space occupied by this element is undisputed by other components.
 */
export interface SpacerParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes {
    /**
     * ## height
     */
    height: AttributeDeclarationOf<string>;
    /**
     * ## width
     */
    width: AttributeDeclarationOf<string>;
}
/**
 * ## Spacer
 * Element allowing the user to create space between components, vertically or horizontally.
 * The space occupied by this element is undisputed by other components.
 * @returns {BaseElement}
 */
export function Spacer(params: SpacerParams): BaseElement;
/**
 * ## LazyColumnParams
 * Element displaying element vertically containing an `IntersectionObserver`
 * that can watch for when the last element enter the user screen
 * and execute the callback passed in `onObserved`.
 */
export interface LazyColumnParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## LazyColumn
 * Element displaying element vertically containing an `IntersectionObserver`
 * that can watch for when the last element enter the user screen
 * and execute the callback passed in `onObserved`.
 * @returns {BaseElement}
 */
export function LazyColumn(params: LazyColumnParams): BaseElement;
/**
 * ## LazyRowParams
 * Element displaying element horizontally containing an `IntersectionObserver`
 * that can watch for when the last element enter the user screen
 * and execute the callback passed in `onObserved`.
 */
export interface LazyRowParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes,
        ElementChildren {}
/**
 * ## LazyRow
 * Element displaying element horizontally containing an `IntersectionObserver`
 * that can watch for when the last element enter the user screen
 * and execute the callback passed in `onObserved`.
 * @returns {BaseElement}
 */
export function LazyRow(params: LazyRowParams): BaseElement;
/**
 * ## HorizontalLineParams
 * Element representing a line break between two elements.
 * It works similarly to `<hr>`, but with better CSS support.`
 * `element.style.normal` can only be overriden within `element.style.mediaQueries`.
 */
export interface HorizontalLineParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes {
    /**
     * ## thickness
     */
    thickness: AttributeDeclarationOf<string>;
    /**
     * ## width
     */
    width: AttributeDeclarationOf<string>;
    /**
     * ## marginVertical
     */
    marginVertical: AttributeDeclarationOf<string>;
    /**
     * ## color
     */
    color: AttributeDeclarationOf<string>;
}
/**
 * ## HorizontalLine
 * Element representing a line break between two elements.
 * It works similarly to `<hr>`, but with better CSS support.`
 * `element.style.normal` can only be overriden within `element.style.mediaQueries`.
 * @returns {BaseElement}
 */
export function HorizontalLine(params: HorizontalLineParams): BaseElement;
/**
 * ## VerticalLineParams
 * Element representing a line break between two elements.
 * It works similarly to `<hr>`, but vertically and with better CSS support.`
 * `element.style.normal` can only be overriden within `element.style.mediaQueries`.
 */
export interface VerticalLineParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes {
    /**
     * ## thickness
     */
    thickness: AttributeDeclarationOf<string>;
    /**
     * ## height
     */
    height: AttributeDeclarationOf<string>;
    /**
     * ## marginHorizontal
     */
    marginHorizontal: AttributeDeclarationOf<string>;
    /**
     * ## color
     */
    color: AttributeDeclarationOf<CssColor>;
}
/**
 * ## VerticalLine
 * Element representing a line break between two elements.
 * It works similarly to `<hr>`, but vertically and with better CSS support.`
 * `element.style.normal` can only be overriden within `element.style.mediaQueries`.
 * @returns {BaseElement}
 */
export function VerticalLine(params: VerticalLineParams): BaseElement;
/**
 * ## LinkParams
 * An anchor element that allow the user to navigate between the different routes of the application.
 * Use `href` to pass the destination route.
 */
export interface LinkParams
    extends CommonAttributes,
        Events<HTMLAnchorElement>,
        HTMLAttributes,
        ElementChildren {
    /**
     * ## href
     * The URL of a linked resource.
     */
    href: AttributeDeclarationOf<string>;
    /**
     * ## target
     * Specifies where to open the linked document (in the case of an ``<a>`` element) or where to display the response received (in the case of a ``<form>`` element)
     */
    target: AttributeDeclarationOf<"_self" | "_blank" | "_parent" | "_top">;
}
/**
 * ## Link
 * An anchor element that allow the user to navigate between the different routes of the application.
 * Use `href` to pass the destination route.
 * @returns {BaseElement}
 */
export function Link(params: LinkParams): BaseElement;
/**
 * ## ToggleSwitchParams
 * Custom element rendered as `<toggle-switch>`.
 *
 * Create a toggle switch button allowing the user to change settings between two states, `true` and `false`.
 *
 * The `checked` parameter could be assigned a boolean to set the initial value of the switch.
 *
 * Use `radiuxPx` to set the radius of the button knob in pixels, with which other dimensions will be calculated automatically.
 */
export interface ToggleSwitchParams
    extends CommonAttributes,
        Events<HTMLInputElement>,
        HTMLAttributes {
    /**
     * ## radiusPx
     */
    radiusPx: AttributeDeclarationOf<string>;
    /**
     * ## color
     */
    color: AttributeDeclarationOf<CssColor>;
    /**
     * ## backgroundColor
     */
    backgroundColor: AttributeDeclarationOf<CssColor>;
    /**
     * ## onBackgroundColor
     */
    onBackgroundColor: AttributeDeclarationOf<CssColor>;
    /**
     * ## checked
     * Indicates whether the element should be checked on page load.
     */
    checked: AttributeDeclarationOf<string>;
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
 * @returns {BaseElement}
 */
export function ToggleSwitch(params: ToggleSwitchParams): BaseElement;
/**
 * ## CircularSpinnerParams
 * Progress indicator also known as `spinner`,
 * Used to display an undetermined wait time.
 */
export interface CircularSpinnerParams
    extends CommonAttributes,
        Events<HTMLElement>,
        HTMLAttributes {
    /**
     * ## color
     */
    color: AttributeDeclarationOf<CssColor>;
    /**
     * ## thickness
     */
    thickness: AttributeDeclarationOf<number>;
    /**
     * ## size
     */
    size: AttributeDeclarationOf<number>;
}
/**
 * ## CircularSpinner
 * Progress indicator also known as `spinner`,
 * Used to display an undetermined wait time.
 * @returns {BaseElement}
 */
export function CircularSpinner(params: CircularSpinnerParams): BaseElement;
