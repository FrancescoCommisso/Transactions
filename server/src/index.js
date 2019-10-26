const env = require("dotenv").config();
const express = require("express");
const express_graphql = require("express-graphql");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const path = require("path");
const app = express();
const port = process.env.PORT;
const { sequelize, models } = require("./models");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: false }));
app.use(pino);
app.use(express.static(path.join(__dirname, "../../client/build")));

// graphql
var { buildSchema } = require("graphql");
var schema = buildSchema(`
    type Query {
        message: String
    }
`);
var root = {
  message: () => "Hello World!"
};
app.use(
  "/graphql",
  express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

// db stuff
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Express server is running on ${port}`);
  });
});

app.get("/test", async (req, res) => {
  const { userData } = require("./data/index")(models);
  // const userService =

  const resp = await userData.newUser({
    firstName: "francesco",
    lastName: "Commisso",
    email: "francesco@gmail.com"
  });
  res.send(resp);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"), err => {
    if (err) {
      console.log("error: ", err);
      res.status(500).send(err);
    }
  });
});
