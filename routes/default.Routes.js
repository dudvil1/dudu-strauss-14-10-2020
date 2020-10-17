const express = require("express");
const api = express.Router();

const DefaultController = require("../controllers/default.Controller");

api.get("/", DefaultController.info);

module.exports = api;
