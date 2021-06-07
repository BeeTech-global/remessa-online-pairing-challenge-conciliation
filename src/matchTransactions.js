/**
 * @fileoverview
 * Part 3 of 3 - match settlement data
 *
 * Now that we have data from both sources we can match the transactions
 * and look for ambiguities.
 *
 * For this exercise, create a function that:
 *   * takes no arguments;
 *   * is asynchronous;
 *   * uses the `getSettlements()` and `getTransactions()` functions which
 *     we created in the previous steps
 *   * returns a map with a list of "good" (matching) transactions and a list
 *     of "bad" (mismatching) transactions, and a list of transactions that
 *     are missing on either side
 *     `{ matched: [ 100, 101 ], mismatched: [102, ...], missing: [103, ...]}`;
 *   * is the module's default export;
 *
 * Additional info:
 *   * you don't have to handle errors, but adding a comment indicating
 *     where and what would you check is highly appreciated;
 *   * the function **must** be the default export of the module;
 *   * we favour readability over speed!
 */