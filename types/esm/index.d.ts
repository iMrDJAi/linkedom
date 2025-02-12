export function Document(): void;
export * from "./shared/facades.js";
export * from "./shared/html-classes.js";
export { DOMParser };
export { CustomEvent } from "./interface/custom-event.js";
export { Event } from "./interface/event.js";
export { EventTarget } from "./interface/event-target.js";
export { InputEvent } from "./interface/input-event.js";
export { NodeList } from "./interface/node-list.js";
export { NodeFilter } from "./interface/node-filter.js";
export function parseHTML(html: any, globals?: any): any;
import { DOMParser } from "./dom/parser.js";
export { parseJSON, toJSON } from "./shared/parse-json.js";
