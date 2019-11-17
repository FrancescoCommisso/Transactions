class TransactionData {
  constructor(model) {
    this.model = model;
  }

  async newTransaction({ vendor, amount, userId }, transaction) {
    return this.model.Transaction.create(
      {
        vendor,
        userId,
        amount
      },
      { transaction }
    );
  }

  async updateTransactionByTransactionId(
    updateFields,
    transactionId,
    transaction
  ) {
    const res = await this.model.Transaction.update(
      updateFields,
      {
        where: { transactionId },
        returning: true
      },
      { transaction }
    );

    return res[1][0];
  }
}
module.exports = TransactionData;
