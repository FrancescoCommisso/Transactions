const { GraphQLString, GraphQLNonNull, GraphQLBoolean } = require("graphql");
const { userType } = require("../types");
const { resolver } = require("graphql-sequelize");

module.exports = () => ({
  createUser: {
    type: userType,
    args: {
      firstName: { type: new GraphQLNonNull(GraphQLString) },
      lastName: { type: GraphQLString },
      email: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: async (
      root,
      { firstName, lastName, email },
      { services: { userService, unitOfWorkService } }
    ) => {
      let transaction;
      try {
        transaction = await unitOfWorkService.transaction();
        const newUser = await userService.newUser({
          firstName,
          lastName,
          email
        });
        await transaction.commit();
        return newUser;
      } catch (e) {
        if (transaction) await transaction.rollback();
        console.error("Error creating user: ", e);
        return null;
      }
    }
  },
  updateUser: {
    type: userType,
    args: {
      firstName: { type: new GraphQLNonNull(GraphQLString) },
      lastName: { type: GraphQLString },
      email: { type: new GraphQLNonNull(GraphQLString) },

      userId: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: async (
      root,
      { firstName, lastName, email, userId },
      { services: { userService, unitOfWorkService } }
    ) => {
      let transaction;
      try {
        transaction = await unitOfWorkService.transaction();
        const updatedUser = await userService.updateUser(
          {
            firstName,
            lastName,
            email
          },
          userId
        );
        await transaction.commit();
        return updatedUser;
      } catch (e) {
        if (transaction) await transaction.rollback();
        console.error("Error creating user: ", e);
        return null;
      }
    }
  }
});
