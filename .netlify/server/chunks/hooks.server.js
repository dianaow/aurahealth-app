import { supabase } from '$lib/supabase';

const handle = async ({ event, resolve }) => {
  const { data, error } = await supabase.auth.getSession();

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
