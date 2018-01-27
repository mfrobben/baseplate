var express = require('express');
var router = express.Router();
var db = require('../database');
var toJson = require('to-json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.query('SELECT * from `users`', function (error, results, fields) {
	if (error) throw error;
	  
	res.send(toJson(results));
  });
});

module.exports = router;
