import { writable } from "svelte/store";

//  Layout 
export const direction = writable<"right" | "left">("left");
