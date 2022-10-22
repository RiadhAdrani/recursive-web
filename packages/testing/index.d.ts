import { RecursiveWebApp, RecursiveWebAppConstructorParams } from "../app";

export function createApp(
    params: RecursiveWebAppConstructorParams
): RecursiveWebApp;

export function cleanDom(): void;

export function getElement<T = Element>(selector: string): T | null;

export function executeEvent(element: Element, event: Event): void;
