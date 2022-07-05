const Elements = {
    Address: { props: {} },
    Article: { props: {} },
    Aside: { props: {} },
    Footer: { props: {} },
    Header: { props: {} },
    H1: { props: {} },
    H2: { props: {} },
    H3: { props: {} },
    H4: { props: {} },
    H5: { props: {} },
    H6: { props: {} },
    Main: { props: {} },
    Nav: { props: {} },
    Section: { props: {} },
    Blockquote: { props: { cite: "string" } },
    Dd: { props: {} },
    Div: { props: {} },
    Dl: { props: {} },
    Dt: { props: {} },
    Figcaption: { props: {} },
    Figure: { props: {} },
    Hr: {
        props: {
            align: "string",
            color: "string",
            noShade: "string",
            size: "string",
            width: "string",
        },
    },
    Li: { props: { value: "string", type: "string" } },
    Menu: { props: {} },
    Ol: { props: { reversed: "boolean", start: "string", type: "string" } },
    P: { props: {} },
    Pre: { props: { cols: "string", width: "string", wrap: "string" } },
    Ul: { props: { compact: "boolean", type: "string" } },
    A: {
        props: {
            download: "string",
            href: "string",
            hrefLang: "string",
            ping: "string",
            referrerPolicy: "string",
            rel: "string",
            target: "string",
            type: "string",
        },
    },
    Abbr: { props: {} },
    B: { props: {} },
    Bdi: { props: { dir: "string" } },
    Bdo: { props: { dir: "string" } },
    Br: { props: {} },
    Cite: { props: {} },
    Code: { props: {} },
    Data: { props: { valeu: "string" } },
    Dfn: { props: {} },
    Em: { props: {} },
    I: { props: {} },
    Kbd: { props: {} },
    Mark: { props: {} },
    Q: { props: { cite: "string" } },
    Rp: { props: {} },
    Rt: { props: {} },
    Ruby: { props: {} },
    S: { props: {} },
    Samp: { props: {} },
    Small: { props: {} },
    Span: { props: {} },
    Strong: { props: {} },
    Sub: { props: {} },
    Sup: { props: {} },
    Time: { props: { dateTime: "string" } },
    U: { props: {} },
    Var: { props: {} },
    Wbr: { props: {} },
    Area: {
        props: {
            alt: "string",
            coords: "string",
            download: "string",
            href: "string",
            hrefLang: "string",
            ping: "string",
            referrerPolicy: "string",
            rel: "string",
            shape: "string",
            target: "string",
        },
    },
    Audio: {
        props: {
            autoPlay: "boolean",
            controls: "boolean",
            crossOrigin: "string",
            loop: "boolean",
            muted: "boolean",
            preload: "string",
            src: "string",
        },
    },
    Img: {
        props: {
            alt: "string",
            crossOrigin: "string",
            decoding: "string",
            height: "number",
            isMap: "boolean",
            loading: "string",
            referrerPolicy: "string",
            sizes: "string",
            src: "string",
            srcSet: "string",
            width: "number",
            useMap: "string",
        },
    },
    Map: { props: { name: "string" } },
    Track: {
        props: { def: "string", kind: "string", label: "string", src: "string", srcLang: "string" },
    },
    Video: {
        props: {
            autoPlay: "boolean",
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
    },
    Embed: { props: { height: "number", src: "string", type: "string", width: "number" } },
    Iframe: {
        props: {
            allow: "string",
            allowFullScreen: "boolean",
            allowPaymentRequest: "boolean",
            fetchPriority: "string",
            height: "number",
            loading: "string",
            name: "string",
            referrerPolicy: "string",
            sandbox: "string",
            src: "string",
            srcDoc: "string",
            width: "number",
        },
    },
    Object: {
        props: {
            data: "string",
            form: "string",
            height: "number",
            name: "string",
            type: "string",
            useMap: "string",
            width: "number",
        },
    },
    Picture: { props: {} },
    Portal: { props: { src: "string" } },
    Source: { props: {} },
    Canvas: { props: { height: "number", width: "number" } },
    Noscript: { props: {} },
    Del: { props: { cite: "string", dateTime: "string" } },
    Ins: { props: { cite: "string", dateTime: "string" } },
    Caption: { props: {} },
    Col: { props: { span: "number" } },
    Colgroup: { props: { span: "number" } },
    Table: { props: {} },
    Tbody: { props: {} },
    Td: { props: { colSpan: "number", headers: "string", rowSpan: "number" } },
    Tfoot: { props: {} },
    Th: {
        props: {
            abbr: "string",
            colSpan: "number",
            headers: "string",
            rowSpan: "number",
            scope: "string",
        },
    },
    Thead: { props: {} },
    Tr: { props: {} },
    Button: {
        props: {
            autoFocus: "boolean",
            disabled: "boolean",
            form: "string",
            formAction: "string",
            formEncType: "string",
            formMethod: "string",
            formNoValidate: "string",
            formTarget: "string",
            name: "string",
            type: "string",
            value: "string",
        },
    },
    Datalist: { props: {} },
    Fieldset: { props: { disabled: "boolean", form: "string", name: "string" } },
    Form: {
        props: {
            acceptCharSet: "string",
            autoComplete: "string",
            name: "string",
            rel: "string",
            action: "string",
            encType: "string",
            method: "string",
            noValidate: "string",
            target: "string",
        },
    },
    Input: {
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
            formTarget: "string",
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
    },
    Label: { props: { isFor: "string" } },
    Legend: { props: {} },
    Meter: {
        props: {
            value: "number",
            min: "number",
            max: "number",
            low: "number",
            high: "number",
            optimum: "number",
        },
    },
    Optgroup: { props: { disabled: "boolean", label: "string" } },
    Option: {
        props: { disabled: "boolean", label: "string", selected: "boolean", value: "string" },
    },
    Output: { props: { for: "string", form: "string", name: "string" } },
    Progress: { props: { max: "number", value: "number" } },
    Select: {
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
    },
    TextArea: {
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
    },
    Details: { props: { open: "boolean" } },
    Dialog: { props: { open: "boolean" } },
    Summary: { props: {} },
    Slot: { props: { name: "string" } },
    Template: { props: {} },
};

module.exports = Elements;
