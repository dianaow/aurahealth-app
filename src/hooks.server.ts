import type { Handle } from '@sveltejs/kit';
import { supabase } from '$lib/supabase';

export const handle: Handle = async ({ event, resolve }) => {
  // Get session from Supabase auth
  const { data, error } = await supabase.auth.getSession();
  console.log('session', data.session.user)
  
  // If session exists, set user in locals
  if (data.session.user) {
    event.locals.user = data.session.user;
  } else {
    event.locals.user = null;
  }

  const response = await resolve(event);
  return response;
};