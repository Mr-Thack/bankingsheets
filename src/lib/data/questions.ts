export const questions = [
  {
    id: 1,
    scenario: "Kayla goes to the bank and deposits $1000 in her checking account. The reserve requirement is 10%",
    initialState: {
      requiredReserves: 100,
      excessReserves: 900,
      loans: 3000,
      securities: 5000,
      physicalAssets: 20000,
      demandDeposits: 1000,
      otherDeposits: 5000,
      otherLiabilities: 3000,
      ownerEquity: 20000
    },
    correctState: {
      requiredReserves: 200,
      excessReserves: 1800,
      loans: 3000,
      securities: 5000,
      physicalAssets: 20000,
      demandDeposits: 2000,
      otherDeposits: 5000,
      otherLiabilities: 3000,
      ownerEquity: 20000
    }
  },
  // Add more questions here...
];

