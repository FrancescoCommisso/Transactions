class TransactionData {
  constructor(model) {
    this.model = model;
  }

  async newTransaction({ vendor, amount, userId }) {
    return this.model.Transaction.create({
      vendor,
      userId,
      amount
    });
  }

  async updateTransactionByTransactionId(updateFields, transactionId) {
    const res = await this.model.Transaction.update(updateFields, {
      where: { transactionId },
      returning: true
    });

    return res[1][0];
  }
}
module.exports = TransactionData;
