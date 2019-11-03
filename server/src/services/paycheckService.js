class PaycheckService {
  constructor({ paycheckData, stateData }) {
    this.paycheckData = paycheckData;
    this.stateData = stateData;
  }

  async newPaycheck(args) {
    return this.paycheckData.newPaycheck(args);
  }
  async updatePaycheckByPaycheckId(updateFields, paycheckId) {
    return this.paycheckData.updatePaycheckByPaycheckId(
      updateFields,
      paycheckId
    );
  }
}

module.exports = PaycheckService;
