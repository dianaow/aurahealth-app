import { supabase } from '$lib/supabase';
import { redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
  async login({ request }) {
    const form = await request.formData();
    const email = form.get('email') as string;
    const password = form.get('password') as string;

    const { error, data } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      return { error: error.message };
    }

    if (data && data.user.user_metadata.role === 'admin') {
      throw redirect(302, '/admin');
    }
  
    throw redirect(302, '/home');
  },

  async signup({ request }) {
    const form = await request.formData();
    const email = form.get('email') as string;
    const password = form.get('password') as string;

    const { error, data } = await supabase.auth.signUp({ email, password });

    if (error) {
      return { error: error.message };
    }

    throw redirect(302, '/home');
  },

  async logout({ request }) {
    const { error } = await supabase.auth.signOut();
    if (error) {
      return { error: error.message };
    }

    throw redirect(302, '/login');
  }
};
