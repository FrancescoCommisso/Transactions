module.exports = db => ({
  ...require("./users")(db),
  ...require("./budgets")(db),
  ...require("./transactions")(db),
  ...require("./paychecks")(db)
});
