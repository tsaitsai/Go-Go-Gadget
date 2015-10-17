var express = require('express');
var router = express.Router();
var request = require('request');



router.get('/score', function(req, res, next){
  request('http://192.168.100.94:8080/rest/items/?type=json', function(err, response, body){
    var parsBody = JSON.parse(body);
    res.json(parsBody.item);
  });
});

router.get('/resetscore', function(req, res, next){
  request('http://localhost:8080/CMD?itm_btn_score_reset=OFF', function(err, response,  body){
    res.json(body);
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
      request('http://localhost:8080/CMD?itm_num_func_mode=0', function(err, response, body){
        res.json(body);
      });
  }
});

router.post('/setlanguage', function(req, res, next){
  switch(req.body.lang){
    case 'en':
      request('http://localhost:8080/CMD?itm_num_game_lang=0', function(err, response, body){
        res.json(body);
      });
      break;
    case 'ch':
      request('http://localhost:8080/CMD?itm_num_game_lang=1', function(err, response, body){
        res.json(body);
      });
      break;
    case 'kl':
      request('http://localhost:8080/CMD?itm_num_game_lang=2', function(err, response, body){
        res.json(body);
      });
      break;
  }
});

module.exports = router;
