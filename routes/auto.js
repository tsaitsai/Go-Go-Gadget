var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('in automation');
});

module.exports = router;
