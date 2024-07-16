import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.BpX3jx0N.js","_app/immutable/chunks/scheduler.B-UzczFQ.js","_app/immutable/chunks/index.BjutUjdo.js","_app/immutable/chunks/stores.CC1dCJZJ.js","_app/immutable/chunks/entry.D5dq0TNK.js","_app/immutable/chunks/index.rPvyiPk4.js"];
export const stylesheets = ["_app/immutable/assets/0.D3SEAvLE.css"];
export const fonts = [];
