import { supabase } from '$lib/supabase';
import { redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
  async login({ request }) {
    const form = await request.formData();
    const email = form.get('email') as string;
    const password = form.get('password') as string;

    console.log('Signin attempt:', { email, password });

    const { error, data } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      console.error('Login error:', error);
      return { error: error.message };
    }

    console.log('Signin successful:', data)

    throw redirect(302, '/home');
  },

  async signup({ request }) {
    const form = await request.formData();
    const email = form.get('email') as string;
    const password = form.get('password') as string;

    console.log('Signup attempt:', { email, password });

    const { error, data } = await supabase.auth.signUp({ email, password });

    if (error) {
      console.error('Login error:', error);
      return { error: error.message };
    }

    console.log('Signup successful:', data);

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
