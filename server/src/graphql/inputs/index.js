const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString
} = require("graphql");

const BudgetInput = new GraphQLInputObjectType({
  name: "BudgetInput",
  fields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    cap: { type: new GraphQLNonNull(GraphQLString) }
  }
});

const PaycheckInput = new GraphQLInputObjectType({
  name: "PaycheckInput",
  fields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    amount: { type: new GraphQLNonNull(GraphQLString) }
  }
});

module.exports = { BudgetInput, PaycheckInput };
