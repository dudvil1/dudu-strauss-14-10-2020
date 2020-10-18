const mongoose = require("mongoose");
const Messege = require("../../models/messege.model");

exports.addMessege = async (messege) => {
  const newMeesege = new Messege({
    _id: new mongoose.Types.ObjectId(),
    ...messege
  });
  return await newMeesege.save();
};

exports.getAllMesseges = async (userEmail) => {
  return await Messege.find({
    $or: [{ sender: userEmail }, { reciver: userEmail }],
  }).exec();
};

exports.deleteMessege = async (messegeId, cb) => {
  return await Messege.findOneAndDelete({ _id: messegeId }).exec();
};
