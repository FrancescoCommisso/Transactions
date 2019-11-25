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

const TransactionInput = new GraphQLInputObjectType({
  name: "TransactionInput",
  fields: {
    vendor: { type: new GraphQLNonNull(GraphQLString) },
    amount: { type: new GraphQLNonNull(GraphQLString) },
    date: { type: GraphQLString },
    group: { type: GraphQLString }
  }
});

module.exports = { BudgetInput, PaycheckInput, TransactionInput };
