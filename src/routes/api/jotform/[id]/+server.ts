// src/routes/api/jotform/[id]/+server.ts
import type { RequestHandler } from '@sveltejs/kit';
import { VITE_JOTFORM_API_KEY } from '$env/static/private';

async function fetchJotFormSubmission(submissionID: number) {
  const response = await fetch(`https://api.jotform.com/submission/${submissionID}?apiKey=${VITE_JOTFORM_API_KEY}`);

  if (!response.ok) {
    throw new Error('Failed to fetch JotForm submission');
  }

  const data = await response.json();
  return data.content;
}


export const GET: RequestHandler = async ({ params }) => {
  const { id } = params;
  try {
    const submission = await fetchJotFormSubmission(id);

    if (!submission) {
      return new Response(JSON.stringify({ error: 'Submission not found' }), { status: 404 });
    }

    return new Response(JSON.stringify({ submission }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};
