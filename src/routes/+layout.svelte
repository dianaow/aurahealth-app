<script lang="ts">
  import '$src/app.css'
  import type { PageData } from './$types'
  import { page } from '$app/stores'
  import NavBar from '$lib/components/NavBar.svelte'
  export let data: PageData
  const nakedPaths = ['/auth']
  $: naked = nakedPaths.includes($page.url.pathname)
  $: user = data?.user
  $: console.log('user', user)
</script>
{#if naked}
  <slot />
{:else}
  <NavBar bind:user={user} />
  <slot />
{/if}
