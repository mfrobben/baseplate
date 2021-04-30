var express = require('express');
var router = express();
var db = require('../database');
var pool = db.promise()
var toJson = require('to-json');

/* GET users listing. */
router.get('/users', async function(req, res, next) {

  var results = await pool.query('SELECT * from `users`')
	res.send(toJson(results));
});

module.exports = router;
