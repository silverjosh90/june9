module.exports = {
  accountHolder: 'Alex',
  checkingBalance: 10,
  savingsBalance: 200,
  addToChecking: function (dollarAmt){
    if(dollarAmt < 0) return;
    this.checkingBalance += dollarAmt;
  },
  withdrawMoney: function(dollarAmt) {
    if(dollarAmt > this.checkingBalance) {
      throw new Error('you dont have the funds')
    }
    this.checkingBalance -= dollarAmt
  }
};
