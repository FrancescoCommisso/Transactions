module.exports = db => ({
  ...require("./users")(db)
});
