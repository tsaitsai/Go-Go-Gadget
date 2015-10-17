var express = require('express');
var router = express.Router();
var request = require('request');



router.get('/score', function(req, res, next){
  request('http://localhost:8080/rest/items/?type=json', function(err, response, body){
    var parsBody = JSON.parse(body);
    res.json(parsBody.item);
  });
});

module.exports = router;
