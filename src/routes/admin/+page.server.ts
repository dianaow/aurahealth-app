import { supabase } from '$lib/supabase';
import { redirect, type RequestHandler } from '@sveltejs/kit';
import { VITE_JOTFORM_API_KEY, VITE_JOTFORM_FORM_ID } from '$env/static/private';

// Function to fetch JotForm submissions
async function fetchJotFormSubmissions() {
  const response = await fetch(`https://api.jotform.com/form/${VITE_JOTFORM_FORM_ID}/submissions?apiKey=${VITE_JOTFORM_API_KEY}`);

  if (!response.ok) {
    throw new Error('Failed to fetch JotForm submissions');
  }

  const data = await response.json();
  return data.content;
}
// Load function to handle authentication and data fetching
export const load: RequestHandler = async ({ fetch, locals }) => {
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    console.error('Error fetching session:', error);
    throw redirect(302, '/auth');
  }

  if (!data.session || data.session.user.user_metadata.role !== 'admin') {
    throw redirect(302, '/home');
  }

  try {
    const submissions = await fetchJotFormSubmissions();
    const response = await fetch(`/api/report`);
    const { report } = await response.json();
    submissions.forEach((d: any) => {
      d.status = report.find((r: any) => r.submission_id.toString() === d.id.toString())
    })

    return {
      props: {
        submissions,
        error: null
      }
    };
  } catch (err) {
    return {
      props: {
        submissions: [],
        error: err.message
      }
    };
  }
};
