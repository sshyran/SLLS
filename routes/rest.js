var express = require('express');
var fs = require('fs');
var router = express.Router();

router.get('/', function (req, res, next) {
    var result = JSON.parse(fs.readFileSync(__dirname + '/../db.json'));
    res.json(result);
});

router.post('/:id/:status', function (req, res, next) {
    var result = JSON.parse(fs.readFileSync(__dirname + '/../db.json'));
    console.log(req.params.status);
    if (["true", "false", "disable"].lastIndexOf(req.params.status) >= 0) {
        result[req.params.id] = req.params.status;
        fs.writeFileSync(__dirname + '/../db.json', JSON.stringify(result, null, 2));
    } else {
        result = {};
        result[req.params.id] = req.params.status;
        result["return"] = "Bad_Status";
    }
    res.json(result);
});

router.delete('/:id', function (req, res, next) {
    var result = JSON.parse(fs.readFileSync(__dirname + '/../db.json'));
    delete result[req.params.id];
    fs.writeFileSync(__dirname + '/../db.json', JSON.stringify(result, null, 2));
    res.json(result);
});

module.exports = router;
