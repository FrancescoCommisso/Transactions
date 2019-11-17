class TransactionService {
  constructor({ transactionData, stateData }) {
    this.transactionData = transactionData;
    this.stateData = stateData;
  }

  async newTransaction(args, transaction) {
    return this.transactionData.newTransaction(args, transaction);
  }
  async updateTransactionByTransactionId(
    updateFields,
    transactionId,
    transaction
  ) {
    return this.transactionData.updateTransactionByTransactionId(
      updateFields,
      transactionId,
      transaction
    );
  }
}

module.exports = TransactionService;
