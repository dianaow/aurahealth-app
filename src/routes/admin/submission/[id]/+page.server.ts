import { type Actions } from '@sveltejs/kit';
import { supabaseAdmin } from '$lib/admin-supabase';

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const submissionId = formData.get('submissionId') as string;
    const userId = formData.get('userId') as string;
    const processedData = JSON.parse(formData.get('processedData') as string);

    const { error } = await supabaseAdmin
      .from('reports')
      .insert({ submission_id: submissionId, user_id: userId, data: processedData });

    if (error) {
      return { error: error.message };
    }

    return { success: true };
  }
};
