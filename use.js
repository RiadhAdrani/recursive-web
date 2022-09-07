/**
 * Do not touch this file, unless you are a contribitor.
 *
 * It is used to reference the correct version of recursive.
 *
 * We use the `INTERNAL` version to reference a local version
 * for development of the framework and experimental reasons,
 * it is not available if you installed this package using npm.
 *
 * download `recursive` from https://www.npmjs.com/package/@riadh-adrani/recursive
 * and place both `recursive-web` and `recursive` in the same directory like this:
 *
 * development:
 *      - recursive
 *      - recursive-web
 *
 * The `PRODUCTION` version is aimed for developers
 * who build applications with recursive web.
 * If you are developing and found out that the requiring value
 * is the same as `INTERNAL`, switch it to `PRODUCTION` and notify us here:
 *
 * https://github.com/RiadhAdrani/recursive-web/issues
 *
 * INTERNAL : "../recursive/index.js"
 *
 * PRODUCTION : "@riadh-adrani/recursive/index.js"
 *
 * Before publishing to NPM, make sure to switch to production.
 */

const {
    RecursiveOrchestrator,
    RecursiveRenderer,
    RecursiveRouter,
    RecursiveState,
    RecursiveConsole,
    RecursiveApp,
} = require("../recursive/index.js");

module.exports = {
    RecursiveOrchestrator,
    RecursiveRenderer,
    RecursiveRouter,
    RecursiveState,
    RecursiveApp,
    RecursiveConsole,
};
