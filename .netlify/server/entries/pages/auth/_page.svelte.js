import { c as create_ssr_component, s as subscribe, e as escape, a as add_attribute } from "../../../chunks/ssr2.js";
import { w as writable } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isNewUser, $$unsubscribe_isNewUser;
  let $errorMessage, $$unsubscribe_errorMessage;
  let $email, $$unsubscribe_email;
  let $password, $$unsubscribe_password;
  let email = writable("");
  $$unsubscribe_email = subscribe(email, (value) => $email = value);
  let password = writable("");
  $$unsubscribe_password = subscribe(password, (value) => $password = value);
  let isNewUser = writable(false);
  $$unsubscribe_isNewUser = subscribe(isNewUser, (value) => $isNewUser = value);
  let errorMessage = writable("");
  $$unsubscribe_errorMessage = subscribe(errorMessage, (value) => $errorMessage = value);
  $$unsubscribe_isNewUser();
  $$unsubscribe_errorMessage();
  $$unsubscribe_email();
  $$unsubscribe_password();
  return `<h1 class="text-4xl font-bold text-center" data-svelte-h="svelte-15k1t56">Aura Fem Health</h1> <div class="flex items-center justify-center min-h-screen bg-gray-100"><div class="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg"><h1 class="text-2xl font-bold text-center">${escape($isNewUser ? "Create Account" : "Login")}</h1> ${$errorMessage ? `<p class="text-red-500">${escape($errorMessage)}</p>` : ``} <form${add_attribute("action", $isNewUser ? "?/signup" : "?/login", 0)} method="POST" class="space-y-4"><div><label class="block text-sm font-medium text-gray-700" data-svelte-h="svelte-901hmi">Email</label> <input type="email" name="email" class="w-full p-2 border border-gray-300 rounded-md" required${add_attribute("value", $email, 0)}></div> <div><label class="block text-sm font-medium text-gray-700" data-svelte-h="svelte-62832p">Password</label> <input type="password" name="password" class="w-full p-2 border border-gray-300 rounded-md" required${add_attribute("value", $password, 0)}></div> <div><button type="submit" class="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">${escape($isNewUser ? "Sign Up" : "Login")}</button></div></form> <div class="text-center"><button class="text-blue-500 hover:underline">${escape($isNewUser ? "Already have an account? Login" : "Don't have an account? Sign Up")}</button></div></div></div>`;
});
export {
  Page as default
};
