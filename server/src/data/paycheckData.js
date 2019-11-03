class PaycheckData {
  constructor(model) {
    this.model = model;
  }

  async newPaycheck({ name, amount, userId }) {
    return this.model.Paycheck.create({
      name,
      userId,
      amount
    });
  }

  async updatePaycheckByPaycheckId(updateFields, paycheckId) {
    const res = await this.model.Paycheck.update(updateFields, {
      where: { paycheckId },
      returning: true
    });

    return res[1][0];
  }
}
module.exports = PaycheckData;
