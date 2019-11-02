module.exports = db => ({
  ...require("./users")(db),
  ...require("./budgets")(db)
});
