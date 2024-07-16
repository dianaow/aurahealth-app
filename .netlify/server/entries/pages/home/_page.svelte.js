import { c as create_ssr_component } from "../../../chunks/ssr2.js";
import "../../../chunks/client.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex items-center justify-center min-h-screen bg-gray-100"><div class="text-center space-y-6 p-8 bg-white shadow-md rounded-lg"><h1 class="text-4xl font-bold mb-8" data-svelte-h="svelte-p6gkwj">Choose Action</h1> <button class="w-full py-4 text-xl text-white bg-blue-500 rounded-md hover:bg-blue-600" data-svelte-h="svelte-ncmi4a">Fill in Form</button> <button class="w-full py-4 text-xl text-white bg-green-500 rounded-md hover:bg-green-600" data-svelte-h="svelte-1k3a0i0">View Submission Results</button></div></div>`;
});
export {
  Page as default
};
