import { supabaseAdmin } from '$lib/admin-supabase';
import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
  const userId = locals.user?.id;

  if (!userId) {
    throw redirect(302, '/auth');
  }

  // Fetch user submissions
  const { data: submissions, error: submissionsError } = await supabaseAdmin
    .from('reports')
    .select('*')
    .eq('user_id', userId);

  if (submissionsError) {
    console.error('Failed to fetch submissions:', submissionsError);
    throw error(500, 'Failed to fetch submissions');
  }

  return {
    submissions
  };
};
