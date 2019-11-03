class UnitOfWorkService {
  constructor({ unitOfWorkData, stateData }) {
    this.unitOfWorkData = unitOfWorkData;
    this.stateData = stateData;
  }
  async transaction() {
    return this.unitOfWorkData.transaction();
  }

  async commit() {
    return this.unitOfWorkData.commit();
  }

  async rollback() {
    return this.unitOfWorkData.rollback();
  }
}

module.exports = UnitOfWorkService;
