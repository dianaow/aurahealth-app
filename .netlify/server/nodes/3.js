import * as server from '../entries/pages/auth/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/auth/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/auth/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.C15oDXjV.js","_app/immutable/chunks/scheduler.B-UzczFQ.js","_app/immutable/chunks/index.BjutUjdo.js","_app/immutable/chunks/index.rPvyiPk4.js"];
export const stylesheets = [];
export const fonts = [];
