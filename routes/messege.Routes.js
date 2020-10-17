const express = require("express");
const api = express.Router();

const auth = require('../middlewares/authenticated');
const messegeController = require("../controllers/messege.Controller");

api.post("/",auth.ensureAuth,messegeController.addMessege)
api.get("/", auth.ensureAuth, messegeController.getAllMesseges);
api.delete("/:id", auth.ensureAuth, messegeController.deleteMessege);

module.exports = api;