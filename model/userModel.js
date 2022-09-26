const Model = require("../config/dbKnex");

class User extends Model {
  static get tableName() {
    return "entity.users";
  }

  static get idColumn() {
    return "id";
  }
}
class Contact extends Model {
  static get tableName() {
    return "entity.contact";
  }

  static get idColumn() {
    return "contact.id";
  }
}

module.exports = { User, Contact };
