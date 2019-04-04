var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'SLLS' });
  fs.watch(__dirname + '/../db.json', function () {
    res.io.emit("socketToMe", "users");
  })
});

module.exports = router;
