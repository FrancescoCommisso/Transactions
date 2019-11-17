class PaycheckService {
  constructor({ paycheckData, stateData }) {
    this.paycheckData = paycheckData;
    this.stateData = stateData;
  }

  async newPaycheck(args, transaction) {
    return this.paycheckData.newPaycheck(args, transaction);
  }
  async updatePaycheckByPaycheckId(updateFields, paycheckId, transaction) {
    return this.paycheckData.updatePaycheckByPaycheckId(
      updateFields,
      paycheckId,
      transaction
    );
  }
}

module.exports = PaycheckService;
