<script>
  import { gameStore } from '$lib/stores/gameStore';
  import BalanceSheet from '$lib/components/BalanceSheet.svelte';
  import ResultsSummary from '$lib/components/ResultsSummary.svelte';
</script>

<div class="container mx-auto py-8">
  {#if $gameStore.gameComplete}
    <ResultsSummary />
  {:else}
    <BalanceSheet />
  {/if}
</div>
