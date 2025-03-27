<script>
  import { Button } from '$lib/components/ui/button';
  import { gameStore, currentQuestion, currentAnswer } from '$lib/stores/gameStore';
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

  function resetField(field) {
    values[field] = $currentQuestion.initialState[field];
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
    showingResult = false;
    gameStore.nextQuestion();
    values = { ...$currentQuestion.initialState };
    checkResult = null;
    // This update is just to populate the values with the initial values/answers. 
    // For some reason, it doesn't do it automatically in the $currentAnswer store, but this bandaid fix should be sufficient
    // The bug caused by this will only happen if the user doesn't modify the initial answer before submitting
    gameStore.updateAnswer(values);
  }
  
  const assetFields = [
    { id: 'requiredReserves', label: 'Required Reserves', increment: 100 },
    { id: 'excessReserves', label: 'Excess Reserves', increment: 100 },
    { id: 'loans', label: 'Loans', increment: 100 },
    { id: 'securities', label: 'Securities (bonds)', increment: 1000 },
    { id: 'physicalAssets', label: 'Physical Assets', increment: 1000 }
  ];
  
  const liabilityFields = [
    { id: 'demandDeposits', label: 'Demand Deposits', increment: 1000 },
    { id: 'savingDeposits', label: 'Saving Deposits', increment: 1000 },
    { id: 'otherLiabilities', label: 'Other Liabilities', increment: 1000 },
    { id: 'ownerEquity', label: 'Owner Equity', increment: 1000 }
  ];

  function calculateTotalAssets(currentValues) {
    let total = 0;
    assetFields.forEach(field => {
      total += currentValues[field.id] || 0;
    });
    return total;
  }

  function calculateTotalLiabilities(currentValues) {
    let total = 0;
    liabilityFields.forEach(field => {
      total += currentValues[field.id] || 0;
    });
    return total;
  }

  // There is a some lag between when we command the result to render,
  // and between when the result is actually computed, for some reason. 
  // So, we'll just use another variable. Bandaid fix, but it works.
  $: resultReady = showingResult && checkResult;
  $: totalAssets = calculateTotalAssets(values);
  $: totalLiabilities = calculateTotalLiabilities(values);
  $: answerPerfect = resultReady? (checkResult.points == 900) : false;
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
            onReset={() => resetField(field.id)}
            increment={field.increment}
            showResult={resultReady}
            isCorrect={checkResult?.correct?.[field.id]}
            correctValue={resultReady ? $currentQuestion.correctState[field.id] : null}
          />
        {/each}
      </div>
      
      <div class="text-center font-bold border-t-2 border-black pt-2">
          Totals: ${resultReady? calculateTotalAssets(checkResult.correctState) : totalAssets}
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
            onReset={() => resetField(field.id)}
            increment={field.increment}
            showResult={resultReady}
            isCorrect={checkResult?.correct?.[field.id]}
            correctValue={resultReady ? $currentQuestion.correctState[field.id] : null}
          />
        {/each}
      </div>
      
      <div class="text-center font-bold border-t-2 border-black pt-2">
        Totals: ${resultReady? calculateTotalLiabilities(checkResult.correctState) : totalLiabilities}
      </div>
      
      <div class="flex justify-center space-x-4 mt-4">
        <Button class="bg-cyan-400 hover:bg-cyan-500" disabled={resultReady} on:click={checkAnswer}>
          <Check class="w-5 h-5 mr-2" />
          Check Answer
        </Button>
        <Button class="bg-yellow-400 hover:bg-yellow-500" disabled={resultReady} on:click={reset}>
          Reset All
        </Button>
        <Button class="bg-cyan-400 hover:bg-cyan-500" disabled={!resultReady} on:click={nextQuestion}>
          <ArrowRight class="w-5 h-5" />
        </Button>
      </div>     
    </div>
  </div>
  
  {#if resultReady}
    <div class="text-center text-2xl font-bold" class:text-green-600={answerPerfect} class:text-red-600={!answerPerfect}>
      {answerPerfect ? "Great Job! You got it!" : $currentQuestion.explanation}
    </div>
  {/if}
</div>
