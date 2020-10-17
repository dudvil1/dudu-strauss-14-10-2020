const bcrypt = require("bcryptjs");
 
exports.checkPassword = (password) => {
  return bcrypt.compareSync(password, 10, (err, res) => {
    if (err) return false;
    return res;
  });
};

exports.createHashPassword = (password) => {
  return bcrypt.hashSync(password, 10, (err, hash) => {
    if (err) return false;
    return hash;
  });
};
