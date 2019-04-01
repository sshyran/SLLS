var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var result = JSON.parse(fs.readFileSync(__dirname + '/../db.json'));
  res.render('index', { title: 'SLLS', status: result });
});

module.exports = router;
