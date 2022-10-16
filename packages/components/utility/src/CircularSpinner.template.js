const { component, createElement } = require("../..");
const { RecursiveConsole } = require("../../../../use");
const { CIRCULAR_SPINNER, SVG_NS } = require("../../../constants");
const { createAnimationName } = require("../../common");
const { attribute } = require("../../../templates");

module.exports = () => {
    return component({
        nativeInterface: "HTMLElement",
        tag: CIRCULAR_SPINNER,
        childless: true,
        docs: [
            "Progress indicator also known as `spinner`, ",
            "Used to display an undetermined wait time.",
        ],
        props: {
            color: attribute({ values: "Color", name: "color" }),
            thickness: attribute({ values: "number", name: "thickness" }),
            size: attribute({ values: "number", name: "size" }),
        },
        handler: (element) => {
            const color = element.color || "black";
            const size = typeof element.size === "number" ? element.size : 25;
            let thickness = 3;

            if (element.hasOwnProperty("thickness")) {
                if (typeof element.thickness === "number") {
                    if (element.thickness >= 20 || element.thickness <= 0) {
                        RecursiveConsole.warn(
                            `Circular Spinner : value of "thickness" should be between 0 and 20.`
                        );
                    } else {
                        thickness = element.thickness;
                    }
                } else {
                    RecursiveConsole.warn(
                        `Circular Spinner : type of "thickness" (${typeof element.thickness}) is not a number.`
                    );
                }
            }

            const ray = 21 - thickness;

            const spinAnimationSteps = {
                "0%": {
                    strokeDasharray: ["1px,", "200px"],
                    strokeDashoffset: 0,
                },
                "50%": {
                    strokeDasharray: ["100px,", "200px"],
                    strokeDashoffset: "-15px",
                },
                "100%": {
                    strokeDasharray: ["100px,", "200px"],
                    strokeDashoffset: "-125px",
                },
            };

            const rotateAnimationSteps = {
                from: {
                    rotate: "0deg",
                },
                to: { rotate: "360deg" },
            };

            const spinAnimationName = createAnimationName(
                CIRCULAR_SPINNER,
                "Spin",
                color,
                thickness,
                size
            );
            const rotateAnimationName = createAnimationName(
                CIRCULAR_SPINNER,
                "Rotate",
                color,
                thickness,
                size
            );

            element.children = createElement("svg", {
                rendererOptions: { ns: SVG_NS },
                viewBox: "22 22 44 44",
                height: size + "px",
                width: size + "px",
                style: {
                    scoped: true,
                    normal: {
                        animation: [
                            "1.4s",
                            "linear",
                            "0s",
                            "infinite",
                            "normal",
                            "none",
                            "running",
                            rotateAnimationName,
                        ],
                    },
                },
                children: createElement("circle", {
                    rendererOptions: { ns: SVG_NS },
                    cx: 44,
                    cy: 44,
                    r: ray,
                    strokeWidth: thickness,
                    fill: "none",
                    stroke: color,
                    strokeDasharray: "80px 200px",
                    strokeDashoffset: 0,
                    style: {
                        scoped: true,
                        normal: {
                            animation: [
                                "1.4s",
                                "ease-in-out",
                                "0s",
                                "infinite",
                                "normal",
                                "none",
                                "running",
                                spinAnimationName,
                            ],
                        },
                        animations: [
                            {
                                name: rotateAnimationName,
                                steps: rotateAnimationSteps,
                            },
                            {
                                name: spinAnimationName,
                                steps: spinAnimationSteps,
                            },
                        ],
                    },
                }),
            });
        },
    });
};
