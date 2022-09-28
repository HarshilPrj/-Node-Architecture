const { User } = require("../model/userModel");
const bcrypt = require("bcryptjs");
const moment = require("moment");

const getdata = async () => {
  return await User.query();
};

const login = async (userBody) => {
  let checkEmail = await User.query()
    .where("users_email", userBody.email)
    .orWhere("user_name", userBody.email)
    .first();

  try {
    if (checkEmail) {
      let loginDate = moment();
      let expiryDate = checkEmail.password_exp_date;
      let duration = moment.duration(moment(expiryDate).diff(loginDate));

      if (checkEmail.password.length === 60) {
        let checkPass = await bcrypt.compare(
          userBody.password,
          checkEmail.password
        );
        if (checkPass === true) {
          return checkEmail;
        } else {
          return { message: "Invalid Password" };
        }
      }
      if (duration.asDays() > 0) {
        if (checkEmail.password === password) {
          return checkEmail;
        } else {
          return { message: "Invalid Password" };
        }
      } else {
        return { message: "Your Password is Expire" };
      }
    } else {
      return { message: "Invalid Email" };
    }
  } catch (error) {
    return {
      message: error.message,
      stack: error.stack,
    };
  }
};

module.exports = { getdata, login };
