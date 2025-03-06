<script>
  import { Button } from '$lib/components/ui/button';
  export let label = "";
  export let value = 0;
  export let onIncrease = () => {};
  export let onDecrease = () => {};
  export let increment = 100;
  export let showResult = false;
  export let isCorrect = false;
</script>

<div class="grid grid-cols-[1fr_auto_auto] gap-2 items-center justify-between">
  <div class="flex justify-between">
    <span>{label}</span>
    <span class="px-2" class:bg-green-200={showResult && isCorrect} class:bg-red-200={showResult && !isCorrect}>
      ${value}
    </span>
  </div>
  <Button variant="outline" size="icon" class="bg-green-500 hover:bg-green-600" on:click={() => onIncrease(increment)}>+</Button>
  <Button variant="outline" size="icon" class="bg-red-500 hover:bg-red-600" on:click={() => onDecrease(increment)}>-</Button>
</div>
