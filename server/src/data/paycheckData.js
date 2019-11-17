class PaycheckData {
  constructor(model) {
    this.model = model;
  }

  async newPaycheck({ name, amount, userId }, transaction) {
    return this.model.Paycheck.create(
      {
        name,
        userId,
        amount
      },
      { transaction }
    );
  }

  async updatePaycheckByPaycheckId(updateFields, paycheckId, transaction) {
    const res = await this.model.Paycheck.update(
      updateFields,
      {
        where: { paycheckId },
        returning: true
      },
      { transaction }
    );

    return res[1][0];
  }
}
module.exports = PaycheckData;
