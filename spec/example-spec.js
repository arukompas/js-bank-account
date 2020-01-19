describe("Bank Account", () => {

  describe("Creating an account", () => {
    var bankAccount;

    beforeEach(() => {
      bankAccount = new BankAccount('Arunas');
    })

    it("can create a bank account", () => {
      assert.isEqual(typeof bankAccount, 'object', 'A new bank account must be an object');
    });

    it("has a name", () => {
      assert.isEqual(bankAccount.name, 'Arunas', 'must be able to access the "name" property on the bank account');
      assert.isEqual(typeof bankAccount.name, 'string', 'bank account "name" must be a string');
    });

    it('has a balance', () => {
      assert.isEqual(bankAccount.balance, 0, 'A new account must have a balance of 0');
      assert.isEqual(typeof bankAccount.balance, 'number', 'The account balance must be a number');
    });

    it('cannot directly change the "balance" property', () => {
      bankAccount.balance = 1000;
      assert.isEqual(bankAccount.balance, 0, 'account balance must not change');
    })
  });

  describe('Adding money to the account', () => {
    var bankAccount;

    beforeEach(() => {
      bankAccount = new BankAccount('Arunas');
    })

    it('can add money using "deposit(amount)" method', () => {
      bankAccount.deposit(10);
      assert.isEqual(bankAccount.balance, 10, 'account balance must be increased by the amount given');
    })

    it('cannot add negative amounts (-10)', () => {
      bankAccount.deposit(-10);
      assert.isEqual(bankAccount.balance, 0, 'account balance must be left unchanged because a negative amount is not valid');

      bankAccount.deposit(-7);
      assert.isEqual(bankAccount.balance, 0, 'account balance must be left unchanged because a negative amount is not valid');
    })
  })

  describe('Withdrawing money from the account', () => {
    var bankAccount;

    beforeEach(() => {
      bankAccount = new BankAccount('Arunas');
      bankAccount.deposit(50);
    })

    it('can withdraw money using "withdraw(amout)" method', () => {
      bankAccount.withdraw(10);
      assert.isEqual(bankAccount.balance, 40, 'balance should be reduced by the amount given');
    })

    it('cannot withdraw negative amounts (-10)', () => {
      bankAccount.withdraw(-10);
      assert.isEqual(bankAccount.balance, 50, 'balance must be left unchanged because a negative amount is not valid');
    })

    it('cannot withdraw more than left on the balance', () => {
      bankAccount.withdraw(100)
      assert.isEqual(bankAccount.balance, 50, 'balance must be left unchanged when trying to withdraw more than available on the balance');
    })
  })

});
