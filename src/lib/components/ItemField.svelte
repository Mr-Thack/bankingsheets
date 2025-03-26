<script>
  import { Button } from '$lib/components/ui/button';
  import { Plus, Minus, RotateCcw } from 'lucide-svelte';
  export let label = "";
  export let value = 0;
  export let onIncrease = () => {};
  export let onDecrease = () => {};
  export let onReset = () => {};
  export let increment = 100;
  export let showResult = false;
  export let isCorrect = false;
  export let correctValue = null;
</script>

<div class="grid grid-cols-[1fr_auto_auto_auto] gap-2 items-center justify-between">
  <div class="flex justify-between w-full">
    <span>{label}</span>
    <div class="flex items-center">
      <span class="px-2" class:bg-green-200={showResult && isCorrect} class:bg-red-200={showResult && !isCorrect}>
        ${value}
      </span>
      {#if showResult && !isCorrect && correctValue !== null}
        <span class="ml-2 text-green-600 font-medium">→ ${correctValue}</span>
      {/if}
    </div>
  </div>
  <Button variant="outline" size="icon" class="bg-green-500 hover:bg-green-600" on:click={() => onIncrease(increment)}>
    <Plus size={18} />
  </Button>
  <Button variant="outline" size="icon" class="bg-yellow-500 hover:bg-yellow-600" disabled={showResult} on:click={() => onReset()}>
    <RotateCcw size={18} />
  </Button>
  <Button variant="outline" size="icon" class="bg-red-500 hover:bg-red-600" on:click={() => onDecrease(increment)}>
    <Minus size={18} />
  </Button>

</div>
