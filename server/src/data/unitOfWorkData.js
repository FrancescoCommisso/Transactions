class unitOfWork {
  constructor(model) {
    this.sequelize = model.sequelize;
  }

  async transaction() {
    return this.sequelize.transaction();
  }

  async commit() {
    return this.sequelize.commit();
  }

  async rollback() {
    return this.sequelize.rollback();
  }
}

module.exports = unitOfWork;
