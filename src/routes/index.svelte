<script lang="ts">
  import { onMount } from 'svelte'

  import Week from '$lib/Week.svelte'
  import Time from '$lib/Time.svelte'

  let showTime = false
  let time = new Date()

  onMount(() => {
    const interval = setInterval(() => {
      time = new Date()
      showTime = !showTime
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  })
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

{#if !showTime}
  <Week />
{/if}
{#if showTime}
  <Time {time} />
{/if}
