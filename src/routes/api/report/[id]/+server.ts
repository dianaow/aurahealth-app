// src/api/report/[id]/+server.ts
import { supabaseAdmin } from '$lib/admin-supabase';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params }) => {
  const { id } = params;

  const { data, error } = await supabaseAdmin
    .from('reports')
    .select('*')
    .eq('user_id', id)
    .single();

  if (error) {
    return json({ error: error.message }, { status: 500 });
  }

  return json({ report: data });
};