import { Route } from "@riadh-adrani/recursive/lib";
import { RecursiveRouter, RecursiveApp } from "../../use";

/**
 * Manage web application routing.
 */
export default class RecursiveWebRouter extends RecursiveRouter {
    /**
     * create new instance of the Recursive Web Router.
     * @param route root route.
     * @param base application base.
     * @param scroll Boolean indicating if the app should reset scrolling when mounting a new route.
     * @param app current application instance.
     */
    constructor(route: Route, base: string, scroll: boolean, app: RecursiveApp);
}
