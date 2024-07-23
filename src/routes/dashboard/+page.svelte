<script lang="ts">
  import { page } from '$app/stores'

  let submissions: any[] = [];
  $: ({ submissions } = $page.data);
</script>

<div class="flex justify-center min-h-screen bg-gray-100">
  <div>
    <h1 class="text-2xl font-bold m-8 text-center">Dashboard</h1>
    {#if submissions.length === 0}
      <p class="text-xl mb-4">No submission found.</p>
    {:else}
      <p class="text-xl mb-4">Your report</p>
      <ul>
        {#each submissions as submission}
          <table class="w-[70%] mx-auto divide-y divide-gray-200">
            <thead>
              <tr>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Field</th>
                <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
              </tr>
            </thead>
            <tbody  class="bg-white divide-y divide-gray-200">
              {#each Object.entries(submission.data.answers) as [key, value]}
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
        {/each}
      </ul>
    {/if}
  </div>
</div>