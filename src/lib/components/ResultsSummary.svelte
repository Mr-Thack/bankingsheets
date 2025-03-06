<script>
  import { gameStore } from '$lib/stores/gameStore';
  import { Button } from '$lib/components/ui/button';
  
  let elapsedTime = '';
  $: if ($gameStore.endTime) {
    const timeInMs = $gameStore.endTime - $gameStore.startTime;
    const minutes = Math.floor(timeInMs / 60000);
    const seconds = Math.floor((timeInMs % 60000) / 1000);
    elapsedTime = `${minutes}m ${seconds}s`;
  }
  
  function resetGame() {
    gameStore.resetGame();
  }
</script>

<div class="flex flex-col items-center justify-center p-8 space-y-6">
  <h1 class="text-3xl font-bold text-center">Bank Balance Sheet Challenge Results</h1>
  
  <div class="bg-gray-100 p-6 rounded-lg max-w-md w-full">
    <div class="text-center text-2xl font-bold mb-4">
      Final Score: {$gameStore.score}
    </div>
    
    <div class="text-center mb-4">
      Time Taken: {elapsedTime}
    </div>
    
    <div class="text-center mb-6">
      Completed: {new Date($gameStore.endTime).toLocaleString()}
    </div>
    
    <Button class="w-full" on:click={resetGame}>Play Again</Button>
  </div>
</div>

