const express_graphql = require("express-graphql");
const { schema, root } = require("../graphql");
const { resolver } = require("graphql-sequelize");
const { models } = require("../models");

module.exports = services => (req, res, next) =>
  express_graphql({
    schema: schema,

    context: {
      services
    }
  })(req, res, next);
