const userModel = require("../model/userModel");

const getdata = async () => {
  return await userModel.query();
};

module.exports = { getdata };
