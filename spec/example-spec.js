describe("Bank Account", function(){

  describe("Creating an account", function() {
    var bankAccount;

    beforeEach(() => {
      bankAccount = new BankAccount('Arunas');
    })

    it("can create a bank account", function() {
      assert.isTrue(typeof bankAccount === 'object' && bankAccount !== null);
    });

    it("has a name", function() {
      assert.isTrue(bankAccount.name === 'string');
      assert.isTrue(typeof bankAccount.name === 'Arunas');
    });

    it('has a balance', function () {
      assert.isTrue(bankAccount.balance === 0);
      assert.isTrue(typeof bankAccount.balance === 'number');
    });

    it('cannot directly change the "balance" property', () => {
      bankAccount.balance = 1000;
      assert.isTrue(bankAccount.balance === 0);
    })
  });

  describe('Adding money to the account', () => {
    var bankAccount;

    beforeEach(() => {
      bankAccount = new BankAccount('Arunas');
    })

    it('can add money using "deposit(amount)" method', () => {
      bankAccount.deposit(10);
      assert.isTrue(bankAccount.balance === 10);
    })

    it('cannot add negative amounts (-10)', () => {
      bankAccount.deposit(-10);
      assert.isTrue(bankAccount.balance === 0);

      bankAccount.deposit(-7);
      assert.isTrue(bankAccount.balance === 0);
    })
  })

  describe('Withdrawing money from the account', () => {
    var bankAccount;

    beforeEach(() => {
      bankAccount = new BankAccount('Arunas');
    })

    it('can withdraw money using "withdraw(amout)" method', () => {
      bankAccount.deposit(100);
      assert.isTrue(bankAccount.balance === 100);

      bankAccount.withdraw(10);
      assert.isTrue(bankAccount.balance === 90);
    })

    it('cannot withdraw negative amounts (-10)', () => {
      bankAccount.deposit(100);

      bankAccount.withdraw(-10);
      assert.isTrue(bankAccount.balance === 100);
    })

    it('cannot withdraw more than left on the balance', () => {
      bankAccount.deposit(10)

      bankAccount.withdraw(20)
      assert.isTrue(bankAccount.balance === 10);
    })
  })

});
