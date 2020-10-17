const jwt = require('jsonwebtoken');
const moment = require('moment');
const secret = process.env.TOKEN_SECRET;

exports.createtoken = (user) => {
  return jwt.sign(
    {
     user
    },
    secret,
    {
      expiresIn: "1h",
    }
  );
};  

exports.decodeToken = (token) => {
  return jwt.decode(token, secret);
};
