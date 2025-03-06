import { writable, derived } from 'svelte/store';
import { questions } from '$lib/data/questions';

function createGameStore() {
  const initialState = {
    currentQuestion: 0,
    score: 0,
    answers: Array(questions.length).fill(null),
    gameComplete: false,
    startTime: new Date(),
    endTime: null
  };

  const { subscribe, set, update } = writable(initialState);

  return {
    subscribe,
    updateAnswer: (values) => {
      update(state => {
        const newAnswers = [...state.answers];
        newAnswers[state.currentQuestion] = values;
        return { ...state, answers: newAnswers };
      });
    },
    checkAnswer: () => {
      update(state => {
        const currentQuestionData = questions[state.currentQuestion];
        const currentAnswer = state.answers[state.currentQuestion];

        if (!currentAnswer) return state;

        let pointsForQuestion = 0;
        const correct = {}; // Initialize as an empty object

        // Check each field in the answer
        Object.keys(currentQuestionData.correctState).forEach(field => {
          if (currentAnswer[field] === currentQuestionData.correctState[field]) {
            pointsForQuestion += 100;
            correct[field] = true;
          } else {
            pointsForQuestion -= 100;
            correct[field] = false;
          }
        });

        const updatedAnswer = {
          ...currentAnswer, // Keep the existing values
          correct: correct, // Add the correct object
          points: pointsForQuestion // Add the points
        };

        const newAnswers = [...state.answers];
        newAnswers[state.currentQuestion] = updatedAnswer;

        return {
          ...state,
          answers: newAnswers,
          score: state.score + pointsForQuestion
        };
      });
    },
    nextQuestion: () => {
      update(state => {
        const nextQuestionIndex = state.currentQuestion + 1;

        if (nextQuestionIndex >= questions.length) {
          return {
            ...state,
            gameComplete: true,
            endTime: new Date()
          };
        }

        return { ...state, currentQuestion: nextQuestionIndex };
      });
    },
    resetGame: () => set(initialState)
  };
}

export const gameStore = createGameStore();

export const currentQuestion = derived(
  gameStore,
  $gameStore => questions[$gameStore.currentQuestion]
);

export const currentAnswer = derived(
  gameStore,
  $gameStore => $gameStore.answers[$gameStore.currentQuestion]
);

export const totalAssets = derived(
  currentAnswer,
  $currentAnswer => {
    if (!$currentAnswer) return 0;

    return (
      Number($currentAnswer.requiredReserves) + // Ensure these are numbers
      Number($currentAnswer.excessReserves) +
      Number($currentAnswer.loans) +
      Number($currentAnswer.securities) +
      Number($currentAnswer.physicalAssets)
    );
  }
);

export const totalLiabilities = derived(
  currentAnswer,
  $currentAnswer => {
    if (!$currentAnswer) return 0;

    console.log($currentAnswer);

    return (
      Number($currentAnswer.demandDeposits) + // Ensure these are numbers
      Number($currentAnswer.savingDeposits) +
      Number($currentAnswer.otherLiabilities) +
      Number($currentAnswer.ownerEquity)
    );
  }
);
