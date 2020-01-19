# Bank Account

In this little project you will create a `BankAccount` class which will be responsible for holding customer's money, putting money in and taking money out.

Follow the instructions below:

### 1. Fork the repository

First of all, you will need to fork this repository. At the top-right corner of this website you will see a "Fork" button. Click on it and wait for it to complete.

### 2. Clone the forked repository to your computer

Next, you will need to copy the repository link and then clone it to your computer using this command:
```
git clone <insert link here>
```

### 3. Open the `index.html` file in your browser

You can either use live-server, or just open it by duoble clicking the `idnex.html` file.

The page will contain the results of tests that you must pass for this challenge. Initially every test will be failing, but as you write code and solve requirements, more and more tests will become passing.

### 4. Write your code in `src/bankAccount.js`

Write all your code inside `src/bankAccount.js` file. You will need to create a `BankAccount` class which will follow the specifications described below. Please read the specifications **carefully** as they will contain hints on what to do next and how to pass the tests.

You can reload the `index.html` page any time you want to run the tests again and check your progress. Once all the tests are passing, the challenge is complete!

## The Specification

- [ ] Create a `BankAccount` class

- [ ] The `BankAccount` class must access only one parameters - the `name` of the account owner. For example, `new BankAccount('Arunas')`

- [ ] The `BankAccount` must also have a `balance` which will be `0` for all new accounts

- [ ] The user must be able to access the `name` and `balance` properties of the bank account. E.g. `account.name` and `account.balance`

- [ ] The user must NOT be able to change the balance of the account. E.g. `account.balance = 100000` should NOT change the actual balance. Hint: use the magical `set balance()` setter method to change the default behaviour

- [ ] The user must be able to **deposit** (put in) money. Create a `deposit(amount)` method which will take the `amount` of money to put into the account.

- [ ] The user cannot deposit negative amounts. E.g. `deposit(-10)`

- [ ] The user must be able to **withdraw** (take out) money. Create a `withdraw(amount)` method which will take the `amount` of money to take out from the account.

- [ ] The user cannot withdraw negative amounts. E.g. `withdraw(-10)`

- [ ] The user cannot withdraw more money than available on the balance. If the user tries to withdraw more than available, do not withdraw any money at all (leave the balance unchanged).
