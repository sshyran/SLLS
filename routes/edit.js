var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function (req, res, next) {
  var result = JSON.parse(fs.readFileSync(__dirname + '/../db.json'));
  if (req.query.status === 'true') {
    result[req.params.id] = true;
    fs.writeFileSync(__dirname + '/../db.json', JSON.stringify(result, null, 2));
    res.send('Changed: ' + req.params.id + ': ' + req.query.status);
  } else if (req.query.status === 'false') {
    result[req.params.id] = false;
    fs.writeFileSync(__dirname + '/../db.json', JSON.stringify(result, null, 2));
    res.send('Changed: ' + req.params.id + ': ' + req.query.status);
  } else {
    res.send('Bad status: ' + req.query.status);
  }
});

module.exports = router;
