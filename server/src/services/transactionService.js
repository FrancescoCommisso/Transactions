class TransactionService {
  constructor({ transactionData, stateData }) {
    this.transactionData = transactionData;
    this.stateData = stateData;
  }

  async newTransaction(args) {
    return this.transactionData.newTransaction(args);
  }
  async updateTransactionByTransactionId(updateFields, transactionId) {
    return this.transactionData.updateTransactionByTransactionId(
      updateFields,
      transactionId
    );
  }
}

module.exports = TransactionService;
