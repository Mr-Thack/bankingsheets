<script>
  import { Button } from '$lib/components/ui/button';
  import { gameStore, currentQuestion, currentAnswer, totalAssets, totalLiabilities } from '$lib/stores/gameStore';
  import { Check, Eye, ArrowRight } from 'lucide-svelte';
  import ItemField from './ItemField.svelte';
  import { onMount } from 'svelte';


  let values = { ...$currentQuestion.initialState };
  let checkResult = null;
  let showingResult = false;
  gameStore.updateAnswer(values);

  function reset() {
    values = { ...$currentQuestion.initialState };
    checkResult = null;
    showingResult = false;
    gameStore.updateAnswer(values);
  }
  
  function adjustValue(field, amount) {
    values[field] += amount;
    gameStore.updateAnswer(values);
  }
  
  function checkAnswer() {
    gameStore.checkAnswer();
    showingResult = true;
    checkResult = $currentAnswer;
  }
  
  function nextQuestion() {
    gameStore.nextQuestion();
  }
  
  const assetFields = [
    { id: 'requiredReserves', label: 'Required Reserves', increment: 100 },
    { id: 'excessReserves', label: 'Excess Reserves', increment: 100 },
    { id: 'loans', label: 'Loans', increment: 100 },
    { id: 'securities', label: 'Securities (bonds)', increment: 100 },
    { id: 'physicalAssets', label: 'Physical Assets', increment: 100 }
  ];
  
  const liabilityFields = [
    { id: 'demandDeposits', label: 'Demand Deposits', increment: 1000 },
    { id: 'savingDeposits', label: 'Saving Deposits', increment: 1000 },
    { id: 'otherLiabilities', label: 'Other Liabilities', increment: 1000 },
    { id: 'ownerEquity', label: 'Owner Equity', increment: 1000 }
  ];
</script>

<div class="flex flex-col space-y-4 p-4">
  <div class="text-2xl font-bold text-blue-800 text-center">{$currentQuestion.scenario}</div>
  
  <div class="text-lg text-purple-700">Score: {$gameStore.score}</div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Assets Column -->
    <div class="flex flex-col space-y-2">
      <h2 class="text-xl font-bold text-center border-b-2 border-orange-400 pb-2">Assets</h2>
      
      <div class="space-y-2">
        {#each assetFields as field}
          <ItemField 
            label={field.label}
            value={values[field.id]}
            onIncrease={(amount) => adjustValue(field.id, amount)}
            onDecrease={(amount) => adjustValue(field.id, -amount)}
            increment={field.increment}
            showResult={showingResult}
            isCorrect={checkResult?.correct?.[field.id]}
          />
        {/each}
      </div>
      
      <div class="text-center font-bold border-t-2 border-black pt-2">
        Totals: ${$totalAssets}
      </div>
    </div>
    
    <!-- Liabilities Column -->
    <div class="flex flex-col space-y-2">
      <h2 class="text-xl font-bold text-center border-b-2 border-orange-400 pb-2">Liabilities</h2>
      
      <div class="space-y-2">
        {#each liabilityFields as field}
          <ItemField 
            label={field.label}
            value={values[field.id]}
            onIncrease={(amount) => adjustValue(field.id, amount)}
            onDecrease={(amount) => adjustValue(field.id, -amount)}
            increment={field.increment}
            showResult={showingResult}
            isCorrect={checkResult?.correct?.[field.id]}
          />
        {/each}
      </div>
      
      <div class="text-center font-bold border-t-2 border-black pt-2">
        Totals: ${$totalLiabilities}
      </div>
      
      <div class="flex justify-center space-x-4 mt-4">
        <Button class="bg-cyan-400 hover:bg-cyan-500" disabled={showingResult} on:click={checkAnswer}>
          <Check class="w-5 h-5 mr-2" />
          Check Answer
        </Button>
        <Button class="bg-yellow-400 hover:bg-yellow-500" on:click={reset}>
          Reset
        </Button>
        <Button class="bg-cyan-400 hover:bg-cyan-500" on:click={nextQuestion}>
          <ArrowRight class="w-5 h-5" />
        </Button>
      </div>     
    </div>
  </div>
  
  {#if showingResult}
    <div class="text-center text-2xl font-bold" class:text-green-600={checkResult.points > 0} class:text-red-600={checkResult.points < 0}>
      {checkResult.points > 0 ? "Great Job! You got it!" : "Try again!"}
    </div>
  {/if}
</div>
