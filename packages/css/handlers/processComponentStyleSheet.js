import { isValidName } from "../CssAnimations";
import { get as getSelector, is, customSelectorAlreadyExist } from "../CssSelectors";

/**
 * Process the given component stylesheet and convert it into a unified format.
 * @param {JSON} styleSheet
 * @returns {JSON}
 */
export default function (styleSheet) {
    const output = {};

    if (!styleSheet || styleSheet.className === undefined) return output;

    function makeSelectorObject(className, selector, content) {
        if (!className || !content) return;

        let key = "." + className + getSelector(selector);

        return { key, content };
    }

    for (let key in styleSheet) {
        switch (key) {
            case "animations":
                if (!Array.isArray(styleSheet.animations)) break;

                output.animations = {};

                styleSheet.animations.forEach((animation) => {
                    if (isValidName(animation.name) && animation.steps) {
                        output.animations[animation.name] = animation.steps;
                    }
                });

                break;
            case "mediaQueries":
                if (!Array.isArray(styleSheet.mediaQueries)) break;

                output.mediaQueries = {};

                styleSheet.mediaQueries.forEach((query) => {
                    if (!query.condition) return;

                    for (let selector in query) {
                        const res = makeSelectorObject(
                            styleSheet.className,
                            selector,
                            query[selector]
                        );

                        if (res) {
                            if (!output.mediaQueries[query.condition])
                                output.mediaQueries[query.condition] = {};

                            output.mediaQueries[query.condition][res.key] = res.content;
                        }
                    }
                });
                break;
            default:
                if (["className", "scoped", "mediaQueries", "animations"].includes(key)) {
                    break;
                }

                if (!is(key)) {
                    const _key = customSelectorAlreadyExist(key);
                    if (_key !== false) {
                        console.warn(
                            `CSSOM : Custom selector "${key}" is already defined and the custom declaration have been igonred. Use predefined selector "${_key}"`
                        );
                        break;
                    }
                }

                const res = makeSelectorObject(styleSheet.className, key, styleSheet[key]);

                if (res) {
                    if (!output.selectors) output.selectors = {};
                    output.selectors[res.key] = res.content;
                }

                break;
        }
    }

    return output;
}
