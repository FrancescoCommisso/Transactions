class UnitOfWorkService {
  constructor({ unitOfWorkData, stateData }) {
    this.unitOfWorkData = unitOfWorkData;
    this.stateData = stateData;
  }
  async transaction() {
    console.log("sercice transaction call");

    const t = await this.unitOfWorkData.transaction();
    console.log("sercice transaction complete");
    return t;
  }

  async commit() {
    return this.unitOfWorkData.commit();
  }

  async rollback() {
    return this.unitOfWorkData.rollback();
  }
}

module.exports = UnitOfWorkService;
