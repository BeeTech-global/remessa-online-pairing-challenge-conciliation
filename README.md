Background Information
======================

RemessaOnline offers payments to all over the world.
As a consequence, we have bank accounts to collect payments locally before sending them globally.

Periodically, the banks will send us a list of money transfers which they have received. We
call this list the "settlement file". Once we know if the money of a transaction arrived on
one of our accounts, we can then pass it on to the bank in the destination country.

	Settlement files describe the flow of values (money) in an account and are
	used to ensure the amounts defined in a transaction reached their expected
	destinations.

To manage all this information, we created a software which downloads the settlement files
of all our bank accounts and matches them with our own internal list of transactions.
It will warn us if there are inconsistencies (i.e. a transaction was successful on our side,
but failed according to the bank's statement), and process all transactions that are correct.


Coding Exercise
===============

This exercise is based on our real-life settlement problem. You will write a small program
which downloads a settlement file from a bank, loads transactions from our BeeTech database
(here: a CSV file) and then compares them to find discrepancies. We have already prepared a
small framework and tests.


Preparations
------------
Have a look into the repository and install all dependencies using `npm`. You are now ready
to start coding!


Part 1 - Download Bank's Settlement File
----------------------------------------

If you run the first test (`npm test -- src/getSettlements.test.js`) you will see that it fails.
Have a look at the test to see what it does, and implement a function that fulfills those
requirements.

Please add your function to the file `src/getSettlements.js`. It includes a few
additional instructions.


Part 2 - Load Internal Transactions
-------------------------------

Now run the second test suite (`npm test -- src/getTransactions.test.js`) and you will see it
also failing. Have a look at the test to see what it does, and implement a function that fulfills
those requirements.

Please add your function to the file `src/getTransactions.js`. It includes a few
additional instructions.


Part 3 - Match and Compare the Settlement Data
----------------------------------------------

Now that you have read both files - one Internal, the other from the bank - you can
start looking for inconsistencies. Please keep it simple and only check the status of
the transactions (there is no need to compare currencies, amounts etc).

If a transaction fails on one side, but is reported successful on the other side, that's
obviously a red flag and needs to be reported. But what about other cases? When writing
the code please keep in mind that you might not yet have enough information to make a
concluding decision.

To start, run the third test suite (`npm test -- src/matchTransactions.test.js`), and try
to understand why it's failing.

Please add your function to the file `src/matchTransactions.js`. It includes a few
additional instructions.


Final Steps
-----------

Now that you've finished coding, please email us your changes in the repository.

