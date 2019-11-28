const env = require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const path = require("path");
const app = express();
const port = process.env.PORT;
const routes = require("./routes");
const { sequelize, models } = require("./models");
const data = require("./data")(models);
const services = require("./services")(data);
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000"
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: false }));
app.use(pino);
app.use(express.static(path.join(__dirname, "../../client/build")));

routes(app, services);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`App is running on port ${port}`);
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"), err => {
    console.log("hit");
    if (err) {
      console.error("error: ", err);
      res.status(500).send(err);
    }
  });
});
