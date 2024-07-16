

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/form/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.B541Zv_9.js","_app/immutable/chunks/scheduler.B-UzczFQ.js","_app/immutable/chunks/index.BjutUjdo.js"];
export const stylesheets = [];
export const fonts = [];
