"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 200,
};

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use(cors(corsOptions));
app.use(helmet());
app.disable("x-powered-by");

const db = require("./models");
db.sequelize.sync();

// routes
require('./routes/auth.routes')(app);
require('./routes/public.routes')(app);

// start the server
app.listen(port, () => {
  console.log("%s listening at %s", app.name, app.url);
});
