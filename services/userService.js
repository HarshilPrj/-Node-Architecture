const userModel = require("../model/userModel");

const getdata = async () => {
  return await userModel
    .query()
    .where("users_email", "harshil.prajapati@coodeit.com");
};

module.exports = { getdata };
