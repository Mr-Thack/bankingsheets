/**
 * ------------------------ DOCUMENTATION FOR questions.ts ------------------------
 *
 * This file contains an array of questions designed for an educational exercise
 * related to bank balance sheets and basic banking transactions.
 *
 * PURPOSE:
 * - Teach basic banking principles: Concepts like reserve requirements, loans,
 *   deposits, securities, and their impact on a bank's balance sheet.
 * - Provide interactive learning: Users might be expected to interact with these
 *   questions, perhaps by manipulating a virtual balance sheet based on the scenario
 *   and then checking against the `correctState`.
 * - Assess understanding: The questions can be used to evaluate a user's comprehension
 *   of balance sheet mechanics and banking transactions.
 *
 * ----------------------------- SCHEMA OF questions ARRAY -----------------------------
 *
 * The `questions` array is an array of JavaScript objects. Each object represents a
 * single question and has the following properties:
 *
 *   id: number,             // Unique identifier for the question (positive integer, sequential)
 *   scenario: string,       // Textual description of the banking scenario (the question itself)
 *   initialState: BalanceSheetState, // Bank's balance sheet BEFORE the scenario
 *   correctState: BalanceSheetState, // Bank's balance sheet AFTER the scenario (correct answer)
 *   explanation: string      // Explanation of how initialState changes to correctState
 *
 * ----------------------------- BalanceSheetState SCHEMA -----------------------------
 *
 * The `BalanceSheetState` interface defines the structure of the bank's balance sheet.
 * It is used for both `initialState` and `correctState`.
 *
 * interface BalanceSheetState {
 *   requiredReserves: number; // ASSET: Legally required reserves
 *   excessReserves: number;   // ASSET: Reserves held beyond required reserves
 *   loans: number;            // ASSET: Money lent out by the bank
 *   securities: number;       // ASSET: Bank investments in bonds etc. (often "Securities (bonds)")
 *   physicalAssets: number;   // ASSET: Tangible assets like buildings, furniture
 *   demandDeposits: number;   // LIABILITY: Funds in checking accounts (also "checkable deposits")
 *   savingDeposits: number;   // LIABILITY: Funds in savings accounts (also "Other Deposits")
 *   otherLiabilities: number; // LIABILITY: Other debts and obligations of the bank
 *   ownerEquity: number;      // EQUITY: Owners' stake in the bank (net worth)
 * }
 *
 * IMPORTANT INVARIANT: For any BalanceSheetState, Total Assets MUST equal Total Liabilities + Owner Equity:
 * requiredReserves + excessReserves + loans + securities + physicalAssets  =  demandDeposits + savingDeposits + otherLiabilities + ownerEquity
 *
 * ----------------------------- FILTER CRITERIA -----------------------------
 *
 * The following questions have been retained because they relate to deposits, bonds, and loans.
 * Any questions that manipulate owner equity have been removed.
 *
 * Retained questions:
 * - Question 1: Deposits into checking account.
 * - Question 2: Bond transaction.
 * - Question 3: Deposit into savings account.
 * - Question 5: Bank takes out a loan for purchasing physical assets.
 * - Question 6: Loan to a customer.
 * - Question 7: Withdrawal from checking to pay a loan.
 * - Question 8: Deposit into checking (with a reserve requirement change).
 * - Question 9: Transfer from savings to checking.
 */

export interface BalanceSheetState {
  requiredReserves: number;
  excessReserves: number;
  loans: number;
  securities: number;
  physicalAssets: number;
  demandDeposits: number;
  savingDeposits: number;
  otherLiabilities: number;
  ownerEquity: number;
}

export const questions = [
  {
    id: 1,
    scenario:
      "Kayla goes to the bank and deposits $1000 in her checking account. The reserve requirement is 10%",
    initialState: {
      requiredReserves: 100,
      excessReserves: 900,
      loans: 3000,
      securities: 5000,
      physicalAssets: 20000,
      demandDeposits: 1000,
      savingDeposits: 5000,
      otherLiabilities: 3000,
      ownerEquity: 20000,
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
      ownerEquity: 20000,
    },
    explanation:
      "When Kayla deposits $1000 into her checking account, the checkable deposits increase to $2000. Since both sides must balance, $1000 is added to the assets side too. 10% ($100) goes into required reserves and the rest ($900) goes into excess reserves.",
  },
  {
    id: 2,
    scenario:
      "Austin is a bond dealer who buys $2000 worth of bonds from this bank. There is a 10% reserve requirement.",
    initialState: {
      requiredReserves: 100,
      excessReserves: 900,
      loans: 3000,
      securities: 5000,
      physicalAssets: 20000,
      demandDeposits: 1000,
      savingDeposits: 5000,
      otherLiabilities: 3000,
      ownerEquity: 20000,
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
      ownerEquity: 20000,
    },
    explanation:
      "The bond purchase is deducted from the bank's securities balance. Since there are no required reserves for bonds, the entire $2000 is added to the excess reserves.",
  },
  {
    id: 3,
    scenario:
      "Nick deposits $1000 into his savings account. The reserve requirement is 10%",
    initialState: {
      requiredReserves: 100,
      excessReserves: 900,
      loans: 3000,
      securities: 5000,
      physicalAssets: 20000,
      demandDeposits: 1000,
      savingDeposits: 5000,
      otherLiabilities: 3000,
      ownerEquity: 20000,
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
      ownerEquity: 20000,
    },
    explanation:
      "The deposit is added to the Other Deposits part of the balance sheet. Since there are no required reserves for savings accounts, the entire $1000 is added to the excess reserves.",
  },
  {
    id: 5,
    scenario:
      "The bank takes out a loan of $3000 then uses the money to purchase office furniture for the bank managers. The reserve requirement is 10%",
    initialState: {
      requiredReserves: 100,
      excessReserves: 900,
      loans: 3000,
      securities: 5000,
      physicalAssets: 20000,
      demandDeposits: 1000,
      savingDeposits: 5000,
      otherLiabilities: 3000,
      ownerEquity: 20000,
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
      ownerEquity: 20000,
    },
    explanation:
      "This is not a loan the bank made so it is not an asset. It actually falls under Other Liabilities. The $3000 of new furniture is a physical asset.",
  },
  {
    id: 6,
    scenario:
      "Emmett goes to the bank and takes out a loan of $500. The reserve requirement is 10%",
    initialState: {
      requiredReserves: 100,
      excessReserves: 900,
      loans: 3000,
      securities: 5000,
      physicalAssets: 20000,
      demandDeposits: 1000,
      savingDeposits: 5000,
      otherLiabilities: 3000,
      ownerEquity: 20000,
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
      ownerEquity: 20000,
    },
    explanation:
      "The bank is only able to loan out excess reserves. So the excess reserves are reduced by $500 and the loans are increased by $500.",
  },
  {
    id: 7,
    scenario:
      "Malvina withdraws $1000 from her checking account to pay her $1000 loan with the bank.",
    initialState: {
      requiredReserves: 100,
      excessReserves: 900,
      loans: 3000,
      securities: 5000,
      physicalAssets: 20000,
      demandDeposits: 1000,
      savingDeposits: 5000,
      otherLiabilities: 3000,
      ownerEquity: 20000,
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
      ownerEquity: 20000,
    },
    explanation:
      "The checking withdrawal is from a demand deposit, so the demand deposits go to $0. The money to pay the withdrawal comes from total reserves (excess reserves and required reserves). When the loan is paid, $1000 is deducted from loans. Then that money is added to the excess reserves; bringing that to $1000.",
  },
  {
    id: 8,
    scenario:
      "Mariana deposits $3000 in her checking account and the Federal Reserve increases the reserve requirement to 20%.",
    initialState: {
      requiredReserves: 100,
      excessReserves: 900,
      loans: 3000,
      securities: 5000,
      physicalAssets: 20000,
      demandDeposits: 1000,
      savingDeposits: 5000,
      otherLiabilities: 3000,
      ownerEquity: 20000,
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
      ownerEquity: 20000,
    },
    explanation:
      "Checking accounts are demand deposits so that is where the money goes on the liabilities side. On the assets side, 80% goes into excess reserves and 20% goes into required reserves. Also, the change in the reserve requirement means the required reserves must increase by an additional $100 and the excess reserves reduced by $100.",
  },
  {
    id: 9,
    scenario:
      "Eunice withdraws $2000 from her savings account and deposits it into her checking account. The reserve requirement is 10%.",
    initialState: {
      requiredReserves: 100,
      excessReserves: 900,
      loans: 3000,
      securities: 5000,
      physicalAssets: 20000,
      demandDeposits: 1000,
      savingDeposits: 5000,
      otherLiabilities: 3000,
      ownerEquity: 20000,
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
      ownerEquity: 20000,
    },
    explanation:
      "The $2000 is deducted from other deposits and added to demand deposits as checking accounts are demand deposits. The total reserves doesn't change. Since $2000 was moved from other deposits to demand deposits, required reserves must increase by $200 and excess reserves is reduced by $200.",
  },
];
