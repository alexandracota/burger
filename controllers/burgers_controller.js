// Inside the burgers_controller.js file, import the following:
// Express
// burger.js
// Create the router for the app, and export the router at the end of your file.

var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();
// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");
// Create all routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
router.post("/", function(req, res) {
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function() {
    res.redirect("/");
  });
});
router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);
  burger.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});
router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  burger.delete(condition, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;