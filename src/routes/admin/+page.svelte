<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { writable } from 'svelte/store';

  export let submissions = [];
  export let error = '';

  // Extract submissions and error from the page data
  $: ({ submissions, error } = $page.data.props);

  const viewDetails = (submissionId: string) => {
    goto(`/admin/submission/${submissionId}`);
  };
</script>

{#if error}
  <p class="text-red-500">{error}</p>
{/if}

{#if submissions.length > 0}
  <div class="flex flex-col items-center min-h-screen bg-gray-100">
    <h1 class="text-2xl font-bold m-8">Form submissions</h1>
    <table class="w-[70%] mx-auto divide-y divide-gray-200">
      <thead>
        <tr>
          <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Submission ID
          </th>
          <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Actions
          </th>
          <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        {#each submissions as submission}
          <tr>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{submission.id}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <button 
                on:click={() => viewDetails(submission.id)} 
                class="text-indigo-600 hover:text-indigo-900">
                View Details
              </button>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <span class={submission.status === 'complete' ? 'text-green-500' : 'text-gray-700'}>
                {submission.status ? 'Report completed' : 'Pending report'}
              </span>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
{:else}
  <p>No submissions found.</p>
{/if}
