<script lang="ts">
  import { supabase } from '$lib/supabase';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  let submissions: any[] = [];

  // const fetchSubmissions = async () => {
  //   const user = supabase.auth.getUser();
  //   if (!user) {
  //     goto('/login');
  //     return;
  //   }

  //   const response = await fetch(`/api/jotform/${user.id}`);
  //   submissions = await response.json();
  // };

  // onMount(() => {
  //   fetchSubmissions();
  // });
</script>

<div class="flex justify-center min-h-screen bg-gray-100">
  <div>
    <h1 class="text-4xl font-bold mb-8">Dashboard</h1>
    <h2 class="text-xl mb-8">Your Form Submissions</h2>
    <!-- {#if submissions.length === 0}
      <p>No submissions found.</p>
    {:else}
      <ul>
        {#each submissions as submission}
          <li>{JSON.stringify(submission)}</li>
        {/each}
      </ul>
    {/if} -->
  </div>
</div>