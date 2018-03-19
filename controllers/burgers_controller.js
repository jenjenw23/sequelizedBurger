var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
//var burger = require("../models/burger.js");

var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  db.Burger.findAll({}).then(function (data) {
    res.render("index", { burgers: data });
  })
});

router.post("/api/burgers", function (req, res) {
  db.Burger.create({
    burger_name: req.body.name
  }).then(function () {
    res.redirect("/");
  });
});

router.put("/api/burgers/:id", function (req, res) {
  //var condition = "id = " + req.params.id;
  db.Burger.update({
    devoured: true
  }, {
      where: {
        id: req.params.id
      }
    }).then(function () {
      res.redirect("/");
    });
});

// router.delete("/api/burgers/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   burger.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// Export routes for server.js to use.
module.exports = router;
