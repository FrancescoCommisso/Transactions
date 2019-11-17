const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLList
} = require("graphql");
const { userType } = require("../types");
const { BudgetInput, PaycheckInput } = require("../inputs");

module.exports = () => ({
  createUser: {
    type: userType,
    args: {
      firstName: { type: new GraphQLNonNull(GraphQLString) },
      lastName: { type: GraphQLString },
      email: { type: new GraphQLNonNull(GraphQLString) },
      authId: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: async (
      root,
      { firstName, lastName, email, authId },
      { services: { userService, unitOfWorkService } }
    ) => {
      let transaction;
      try {
        transaction = await unitOfWorkService.transaction();
        const newUser = await userService.newUser({
          firstName,
          lastName,
          email,
          authId
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
      firstName: { type: GraphQLString },
      lastName: { type: GraphQLString },
      email: { type: GraphQLString },
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
  },
  initializeUser: {
    type: GraphQLBoolean,
    args: {
      firstName: { type: new GraphQLNonNull(GraphQLString) },
      lastName: { type: new GraphQLNonNull(GraphQLString) },
      gender: { type: new GraphQLNonNull(GraphQLString) },
      email: { type: new GraphQLNonNull(GraphQLString) },
      budgetPeriod: { type: new GraphQLNonNull(GraphQLString) },
      dateOfBirth: { type: new GraphQLNonNull(GraphQLString) },
      paychecks: { type: new GraphQLList(PaycheckInput) },
      budgets: { type: new GraphQLList(BudgetInput) },
      authId: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: async (
      root,
      {
        firstName,
        lastName,
        authId,
        email,
        gender,
        dateOfBirth,
        budgetPeriod,
        paychecks,
        budgets
      },
      {
        services: {
          userService,
          budgetService,
          paycheckService,
          unitOfWorkService
        }
      }
    ) => {
      let transaction;

      try {
        transaction = await unitOfWorkService.transaction();
        const createdUser = await userService.newUser(
          {
            firstName,
            lastName,
            gender,
            email,
            dateOfBirth,
            budgetPeriod,
            authId
          },
          transaction
        );

        const {
          dataValues: { userId }
        } = createdUser;

        for (let i = 0; i < paychecks.length; i++) {
          const paycheck = paychecks[i];
          await paycheckService.newPaycheck(
            {
              name: paycheck.name,
              amount: paycheck.amount,
              userId
            },
            transaction
          );
        }
        for (let i = 0; i < budgets.length; i++) {
          const budget = budgets[i];
          await budgetService.newBudget(
            {
              name: budget.name,
              cap: budget.cap,
              userId
            },
            transaction
          );
        }
        await transaction.commit();
        return true;
      } catch (e) {
        if (transaction) await transaction.rollback();
        console.error("Error initializing user: ", e);
        return false;
      }
    }
  }
});
