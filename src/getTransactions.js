/**
 * @fileoverview
 * Part 2 of 3 - Load Internal Transactions
 *
 * In this part you will read transaction information from a CSV file.
 *
 * Implement a function that:
 *   * takes no arguments;
 *   * is asynchronous;
 *   * reads the contents from `./data/transactions.csv`, which contains
 *     a list of internal transactions;
 *   * converts the information from the CSV into a `status -> id[]` map:
 *     `{ statusA: [ 100, 101 ], statusB: [102, ...], ...}`;
 *   * returns the above mentioned map;
 *
 * Additional info:
 *   * you don't have to handle errors, but adding a comment indicating
 *     where and what would you check is highly appreciated;
 *   * The function **must** be the default export of the module;
 */