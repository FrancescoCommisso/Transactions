const { GraphQLString, GraphQLList, GraphQLNonNull } = require("graphql");
const { userType } = require("../types");
const { resolver } = require("graphql-sequelize");

module.exports = () => ({
  users: {
    type: new GraphQLList(userType),
    args: {},
    resolve: async (
      root,
      { firstName, lastName, email },
      { services: { userService } }
    ) => {
      return await userService.getAllUsers();
    }
  }
});
