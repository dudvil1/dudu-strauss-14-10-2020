const bcrypt = require("bcryptjs");
 
exports.checkPassword = (password,userPassword) => {
  return bcrypt.compareSync(password, userPassword, (err, res) => {
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
