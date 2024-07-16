import { s as supabase } from "./supabase.js";
const handle = async ({ event, resolve }) => {
  const { data, error } = await supabase.auth.getSession();
  console.log("session", data.session);
  if (data.session.user) {
    event.locals.user = data.session.user;
  } else {
    event.locals.user = null;
  }
  const response = await resolve(event);
  return response;
};
export {
  handle
};
