const jwt = require("../service/jwtService");
const bcrypt = require("../service/bcryptService");
const db = require("../service/db/authQuerys");

exports.register = async (req, res, next) => {
  try {
    const user = await db.findUserByEmail(req.body.email);
    if (user)
      return res.status(401).json({
        message: "user already exist,try again",
      });

    await db.addUser(req.body);
    return res.status(201).json({
      message: "User Created Successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res) => {
  try {
    const user = await db.findUserByEmail(req.body.email);
    if (!user)
      return res.status(404).json({
        message: "user is not exist",
      });

    const result = bcrypt.checkPassword(req.body.password, user.password);
    if (!result)
      return res.status(404).json({
        message: "wrong password",
      });

    let token = jwt.createtoken(user);
    return res.status(200).json({
      message: "Auth successful",
      user: user,
      token: token,
    });
  } catch (error) {
    next(error)
  }
};
