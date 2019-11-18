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
  },
  getUserByEmail: {
    type: userType,
    args: { email: { type: GraphQLString } },
    resolve: async (root, { email }, { services: { userService } }) => {
      return await userService.getUserByEmail(email);
    }
  },
  getUserByAuthId: {
    type: userType,
    args: { authId: { type: GraphQLString } },
    resolve: async (root, { authId }, { services: { userService } }) => {
      return await userService.getUserByAuthId(authId);
    }
  },
  getUserByUserId: {
    type: userType,
    args: { userId: { type: GraphQLString } },
    resolve: async (root, { userId }, { services: { userService } }) => {
      return await userService.getUserByUserId(userId);
    }
  }
});
