const UserData = require("./userData");

module.exports = db => {
  const userData = new UserData(db);
  return {
    userData
  };
};
