const { User } = require("../model/userModel");
const bcrypt = require("bcryptjs");
const moment = require("moment");

const getdata = async () => {
  return await User.query();
};

const login = async (email, password) => {
  let checkEmail = await User.query().where("users_email", email).first();
  if (checkEmail.password.length === 60) {
    let checkPass = await bcrypt.compare(password, checkEmail.password);
    if (checkPass === true) {
      return { Success: "Login Success" };
    } else {
      return { Error: "Invalid Cradensial" };
    }
  } else {
    let loginDate = moment();
    let expiryDate = checkEmail.password_exp_date;
    let duration = moment.duration(moment(expiryDate).diff(loginDate));

    if (duration.asDays() > 0) {
      if (checkEmail.password === password) {
        return { Success: "Login Success" };
      }
    }
  }
};

module.exports = { getdata, login };
