var orm = require("../config/orm.js");

var burger = {
  selectAll: function(callback) {
    orm.selectAll(function(res) {
      callback(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(burger_name, callback) {
    orm.insertOne(burger_name, function(res) {
      callback(res);
    });
  },
  updateOne: function(burger_id, callback) {
    orm.updateOne(burger_id, function(res) {
      callback(res);
    });
  },
};
// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;