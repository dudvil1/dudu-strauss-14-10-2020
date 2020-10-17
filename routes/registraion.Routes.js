const express = require("express");
const api = express.Router();

const registrationController = require("../controllers/registration.Controller");

api.post("/register", registrationController.register);
api.post("/login", registrationController.login);

module.exports = api;
