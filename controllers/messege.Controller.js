const db = require("../service/db/messagesQuerys");

exports.addMessege = async (req, res, next) => {
  try {
    await db.addMessege(req.body);
    return res.status(201).json({
      message: "Messege created successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllMesseges = async (req, res, next) => {
  try {
    const userEmail = req.user.user.email;
    const messages = await db.getAllMesseges(userEmail);

    if (messages.length > 0)
      return res.status(201).json({
        messages: messages
      });
  } catch (error) {
    next(error);
  }
};

exports.deleteMessege = async (req, res, next) => {
  try {
    const { id } = req.params;
    await db.deleteMessege(id);
    return res.status(201).json({
      message: "email deleted",
    });
  } catch (error) {
    next(error);
  }
};
