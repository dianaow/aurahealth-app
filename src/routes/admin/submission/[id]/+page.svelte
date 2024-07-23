<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { writable } from 'svelte/store';

  let submissionId = $page.params.id;
  let submissionDetails = writable(null);
  let processedData = writable(null);
  let isProcessing = writable(false);
  let errorMessage = writable(null);

  onMount(async () => {
    try {
      const response = await fetch(`/api/jotform/${submissionId}`);
      const result = await response.json();

      if (result.error) {
        errorMessage.set(result.error);
      } else {
        submissionDetails.set(result.submission);
      }
    } catch (err) {
      errorMessage.set('Failed to fetch submission details');
    }
  });

  const generateReport = async () => {
    isProcessing.set(true);
    try {
      // Dummy processing function, replace with actual logic
      const processed = processFormData($submissionDetails);
      processedData.set(processed);
    } catch (err) {
      errorMessage.set('Failed to process submission data');
    } finally {
      isProcessing.set(false);
    }
  };

  const saveReport = async () => {
    try {
      let data = $processedData
      let userId = null;
      for (const key in data.answers) {
        if (data.answers[key].name === "userId") {
          userId = data.answers[key].answer;
          break;
        }
      }

      const formData = new FormData();
      formData.append('userId', userId);
      formData.append('submissionId', submissionId);
      formData.append('processedData', JSON.stringify(data));

      const response = await fetch(`/admin/submission/${submissionId}`, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.error) {
        errorMessage.set(result.error);
      } else {
        alert('Report saved successfully');
        goto('/admin');
      }
    } catch (err) {
      errorMessage.set('Failed to save report');
    }
  };

  const processFormData = (data) => {
    // Your data processing logic here
    return { processed: true, ...data };
  };
</script>

{#if $errorMessage}
  <p class="text-red-500">{$errorMessage}</p>
{/if}


{#if $submissionDetails}
  <div class="flex flex-col items-center min-h-screen bg-gray-100">
    <h1 class="text-2xl font-bold m-8">Form: {submissionId}</h1>
    <div class="m-4">
      <button 
        on:click={generateReport} 
        class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Generate Report
      </button>
      {#if $processedData}
        <button 
          on:click={saveReport} 
          class="mt-4 px-4 py-2 bg-green-500 text-white rounded">
          Save Report
        </button>
      {/if}
    </div>
    <table class="w-[70%] mx-auto divide-y divide-gray-200">
      <thead>
        <tr>
          <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Field</th>
          <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
        </tr>
      </thead>
      <tbody  class="bg-white divide-y divide-gray-200">
        {#each Object.entries($submissionDetails.answers) as [key, value]}
          <tr>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">{value.text}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
              {#if typeof value.answer === 'object'}
                {#each Object.entries(value.answer) as [subKey, subValue]}
                  <div>{subKey}: {subValue}</div>
                {/each}
              {:else}
                {value.answer}
              {/if}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
{:else}
  <p>Loading...</p>
{/if}
