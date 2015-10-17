var express = require('express');
var router = express.Router();
var request = require('request');



router.get('/score', function(req, res, next){
  request('http://localhost:8080/rest/items/?type=json', function(err, response, body){
    var parsBody = JSON.parse(body);
    res.json(parsBody.item);
  });
});

router.post('/mode', function(req, res, next){
  console.log(req.body.mode);
  switch(req.body.mode) {
    case 'off':
      console.log('mode: off');
      request('http://localhost:8080/CMD?itm_num_func_mode=0', function(err, response, body){
        res.json(body);
      });
      break;
    case 'game':
      console.log('mode: game');
      request('http://localhost:8080/CMD?itm_num_func_mode=1', function(err, response, body){
        res.json(body);
      });
      break;
    case 'auto':
      console.log('mode: auto');
      request('http://localhost:8080/CMD?itm_num_func_mode=2', function(err, response, body){
        res.json(body);
      });
      break;
    default:
      request('http://localhost:8080/CMD?itm_num_func_mode=0', function(err, httpRes, body){
        res.json(body);
      });
  }
});

module.exports = router;
