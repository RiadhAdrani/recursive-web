import { CommonAttributes } from "./util";

export interface SVGAttributes extends CommonAttributes {
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
     * ## tabIndex
     * Overrides the browser's default tab order and follows the one specified instead.
     */
    tabIndex: string;
    xmlBase: string;
    xmlLang: string;
    xmlSpace: string;
}
