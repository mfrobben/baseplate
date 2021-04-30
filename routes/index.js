var express = require('express');
var router = express();

/* GET home page. */
router.get('/', async function(req, res, next) {
  await res.render('index', { title: 'Express' });
});

module.exports = router;
