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
      savingDeposits: 5000,
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
      savingDeposits: 5000,
      otherLiabilities: 3000,
      ownerEquity: 20000
    },
    explanation: "When Kayla deposits $1000 into her checking account, the checkable deposits increase to $2000. Since both sides must balance, $1000 is added to the assets side too. 10% ($100) goes into required reserves and the rest ($900) goes into excess reserves."
  },
  {
    id: 2,
    scenario: "Austin is a bond dealer who buys $2000 worth of bonds from this bank. There is a 10% reserve requirement.",
    initialState: {
      requiredReserves: 100,
      excessReserves: 900,
      loans: 3000,
      securities: 5000,
      physicalAssets: 20000,
      demandDeposits: 1000,
      savingDeposits: 5000,
      otherLiabilities: 3000,
      ownerEquity: 20000
    },
    correctState: {
      requiredReserves: 100,
      excessReserves: 2900,
      loans: 3000,
      securities: 3000,
      physicalAssets: 20000,
      demandDeposits: 1000,
      savingDeposits: 5000,
      otherLiabilities: 3000,
      ownerEquity: 20000
    },
    explanation: "The bond purchase is deducted from the bank's securities balance. Since there are no required reserves for bonds, the entire $2000 is added to the excess reserves."
  },
  {
    id: 3,
    scenario: "Nick deposits $1000 into his savings account. The reserve requirement is 10%",
    initialState: {
      requiredReserves: 100,
      excessReserves: 900,
      loans: 3000,
      securities: 5000,
      physicalAssets: 20000,
      demandDeposits: 1000,
      savingDeposits: 5000,
      otherLiabilities: 3000,
      ownerEquity: 20000
    },
    correctState: {
      requiredReserves: 100,
      excessReserves: 1900,
      loans: 3000,
      securities: 5000,
      physicalAssets: 20000,
      demandDeposits: 1000,
      savingDeposits: 6000,
      otherLiabilities: 3000,
      ownerEquity: 20000
    },
    explanation: "The deposit is added to the Other Deposits part of the balance sheet. Since there are no required reserves for savings accounts, the entire $1000 is added to the excess reserves."
  },
  {
    id: 4,
    scenario: "The Federal Reserve increases the reserve requirement to 20%.",
    initialState: {
      requiredReserves: 100,
      excessReserves: 900,
      loans: 3000,
      securities: 5000,
      physicalAssets: 20000,
      demandDeposits: 1000,
      savingDeposits: 5000,
      otherLiabilities: 3000,
      ownerEquity: 20000
    },
    correctState: {
      requiredReserves: 200,
      excessReserves: 800,
      loans: 3000,
      securities: 5000,
      physicalAssets: 20000,
      demandDeposits: 1000,
      savingDeposits: 5000,
      otherLiabilities: 3000,
      ownerEquity: 20000
    },
    explanation: "Since there is $1000 in demand deposits, the new required reserves are $200 (20% of $1000). As a result, $100 must come from the excess reserves to cover it."
  },
  {
    id: 5,
    scenario: "The bank takes out a loan of $3000 then uses the money to purchase office furniture for the bank managers. The reserve requirement is 10%",
    initialState: {
      requiredReserves: 100,
      excessReserves: 900,
      loans: 3000,
      securities: 5000,
      physicalAssets: 20000,
      demandDeposits: 1000,
      savingDeposits: 5000,
      otherLiabilities: 3000,
      ownerEquity: 20000
    },
    correctState: {
      requiredReserves: 100,
      excessReserves: 900,
      loans: 3000,
      securities: 5000,
      physicalAssets: 23000,
      demandDeposits: 1000,
      savingDeposits: 5000,
      otherLiabilities: 6000,
      ownerEquity: 20000
    },
    explanation: "This is not a loan the bank made so it is not an asset. It actually falls under Other Liabilities. The $3000 of new furniture is a physical asset."
  },
  {
    id: 6,
    scenario: "Emmett goes to the bank and takes out a loan of $500. The reserve requirement is 10%",
    initialState: {
      requiredReserves: 100,
      excessReserves: 900,
      loans: 3000,
      securities: 5000,
      physicalAssets: 20000,
      demandDeposits: 1000,
      savingDeposits: 5000,
      otherLiabilities: 3000,
      ownerEquity: 20000
    },
    correctState: {
      requiredReserves: 100,
      excessReserves: 400,
      loans: 3500,
      securities: 5000,
      physicalAssets: 20000,
      demandDeposits: 1000,
      savingDeposits: 5000,
      otherLiabilities: 3000,
      ownerEquity: 20000
    },
    explanation: "The bank is only able to loan out excess reserves. So the excess reserves are reduced by $500 and the loans are increased by $500."
  },
  {
    id: 7,
    scenario: "Malvina withdraws $1000 from her checking account to pay her $1000 loan with the bank.",
    initialState: {
      requiredReserves: 100,
      excessReserves: 900,
      loans: 3000,
      securities: 5000,
      physicalAssets: 20000,
      demandDeposits: 1000,
      savingDeposits: 5000,
      otherLiabilities: 3000,
      ownerEquity: 20000
    },
    correctState: {
      requiredReserves: 0,
      excessReserves: 1000,
      loans: 2000,
      securities: 5000,
      physicalAssets: 20000,
      demandDeposits: 0,
      savingDeposits: 5000,
      otherLiabilities: 3000,
      ownerEquity: 20000
    },
    explanation: "The checking withdrawal is from a demand deposit, so the demand deposits go to $0. The money to pay the withdrawal comes from total reserves (excess reserves and required reserves). When the loan is paid, $1000 is deducted from loans. Then that money is added to the excess reserves; bringing that to $1000."
  },
  {
    id: 8,
    scenario: "Mariana deposits $3000 in her checking account and the Federal Reserve increases the reserve requirement to 20%.",
    initialState: {
      requiredReserves: 100,
      excessReserves: 900,
      loans: 3000,
      securities: 5000,
      physicalAssets: 20000,
      demandDeposits: 1000,
      savingDeposits: 5000,
      otherLiabilities: 3000,
      ownerEquity: 20000
    },
    correctState: {
      requiredReserves: 800,
      excessReserves: 3200,
      loans: 3000,
      securities: 5000,
      physicalAssets: 20000,
      demandDeposits: 4000,
      savingDeposits: 5000,
      otherLiabilities: 3000,
      ownerEquity: 20000
    },
    explanation: "Checking accounts are demand deposits so that is where the money goes on the liabilities side. On the assets side, 80% goes into excess reserves and 20% goes into required reserves. Also, the change in the reserve requirement means the required reserves must increase by an additional $100 and the excess reserves reduced by $100."
  },
  {
    id: 9,
    scenario: "Eunice withdraws $2000 from her savings account and deposits it into her checking account. The reserve requirement is 10%.",
    initialState: {
      requiredReserves: 100,
      excessReserves: 900,
      loans: 3000,
      securities: 5000,
      physicalAssets: 20000,
      demandDeposits: 1000,
      savingDeposits: 5000,
      otherLiabilities: 3000,
      ownerEquity: 20000
    },
    correctState: {
      requiredReserves: 300,
      excessReserves: 700,
      loans: 3000,
      securities: 5000,
      physicalAssets: 20000,
      demandDeposits: 3000,
      savingDeposits: 3000,
      otherLiabilities: 3000,
      ownerEquity: 20000
    },
    explanation: "The $2000 is deducted from other deposits and added to demand deposits as checking accounts are demand deposits. The total reserves doesn't change. Since $2000 was moved from other deposits to demand deposits, required reserves must increase by $200 and excess reserves is reduced by $200."
  },
  {
    id: 10,
    scenario: "The bank sells $2000 worth of bonds and uses the proceeds to pay $2000 in dividends to its share holders. There is a 10% reserve requirement.",
    initialState: {
      requiredReserves: 100,
      excessReserves: 900,
      loans: 3000,
      securities: 5000,
      physicalAssets: 20000,
      demandDeposits: 1000,
      savingDeposits: 5000,
      otherLiabilities: 3000,
      ownerEquity: 20000
    },
    correctState: {
      requiredReserves: 100,
      excessReserves: 900,
      loans: 3000,
      securities: 3000,
      physicalAssets: 20000,
      demandDeposits: 1000,
      savingDeposits: 5000,
      otherLiabilities: 3000,
      ownerEquity: 18000
    },
    explanation: "The bond sale is deducted from the securities balance. The share holders are owners of the bank and the dividend is a payment to them out of the owner equity."
  }
];
