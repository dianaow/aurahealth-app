import { supabaseAdmin } from '$lib/admin-supabase';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params }) => {

  const { data, error } = await supabaseAdmin
    .from('reports')
    .select('*')

  if (error) {
    return json({ error: error.message }, { status: 500 });
  }

  return json({ report: data });
};