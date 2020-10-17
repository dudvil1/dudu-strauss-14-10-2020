const logger = require('../service/logger');

exports.info = (req, res) => {
  logger.debug("default ctrl")
  res.status(200).send({
    message: "Welcome To Herolo Test server! ;-)",
  });
}

