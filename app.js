const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var cors = require("cors");
const path = require('path');
const mongoose = require('mongoose');
require("dotenv").config();
const logger = require('./service/logger');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'public')));

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.4plsm.azure.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));


app.use('/', require('./routes/default.Routes'));
app.use("/registraion", require("./routes/registraion.Routes"));
app.use("/messege", require("./routes/messege.Routes"));


app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  logger.error(error.message);
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
