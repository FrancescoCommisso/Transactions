const UserService = require("./userService");

module.exports = data => {
  const userService = new UserService(data);

  return {
    userService
  };
};
