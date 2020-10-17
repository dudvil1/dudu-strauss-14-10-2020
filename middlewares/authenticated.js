const jwtService = require('../service/jwtService');

exports.ensureAuth = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).send({ message: "no token" });
  }
  try {
    const token = req.headers.authorization.split(" ")[1];
    var payload = jwtService.decodeToken(token);
  } catch (ex) {
    return res.status(403).send({ message: "Forbidden: Invalid Token..." });
  }
  req.user = payload;

  next();
};
