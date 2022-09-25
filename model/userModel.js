const Model = require("../config/dbKnex");

class User extends Model {
  static get tableName() {
    return "entity.users";
  }

  static get idColumn() {
    return "id";
  }
}

module.exports = User;
