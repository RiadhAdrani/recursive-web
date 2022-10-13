export type WebEventTarget<T = HTMLElement> = EventTarget & T;

export type WebEvent<E = Event, T = HTMLElement> = E & {
    target: WebEventTarget<HTMLElement>;
    currentTarget: WebEventTarget<T>;
};

export type EventCallback<E, T> = (event: WebEvent<E, T>) => void;

export type EventDeclaration<E, T> =
    | EventCallback<E, T>
    | Array<EventCallback<E, T>>;
