var express = require('express');
var router = express.Router();
var request = require('request');



router.get('/score', function(req, res, next){
  request('http://localhost:8080/rest/items/?type=json', function(err, response, body){
    if(body){
      var parsBody = JSON.parse(body);
      res.json(parsBody.item);
    }
  });
});

router.get('/text', function(req, res, next){
  request('http://localhost:8080/rest/items/?type=json', function(err, response, body){
    if(body) {
    var parsBody = JSON.parse(body);
    res.json(parsBody.item);
  } else {
    res.status(200);
  }

  });
});

router.get('/resetscore', function(req, res, next){
  request('http://localhost:8080/CMD?itm_btn_score_reset=OFF', function(err, response,  body){
    if(body){
      res.json(body);
    } else {
      res.status(200);
    }
  });
});

router.post('/mode', function(req, res, next){
  switch(req.body.mode) {
    case 'off':
      request('http://localhost:8080/CMD?itm_num_func_mode=0');
      break;
    case 'game':
      request('http://localhost:8080/CMD?itm_num_func_mode=1');
      break;
    case 'auto':
      request('http://localhost:8080/CMD?itm_num_func_mode=2');
      break;
    default:
      request('http://localhost:8080/CMD?itm_num_func_mode=0');
  }
});

router.post('/setmode', function(req,res,next){
  request('http://localhost:8080/CMD?itm_num_game_mode=' + req.body.game_mode);
});

router.post('/setlanguage', function(req, res, next){
  switch(req.body.lang){
    case 'en':
      request('http://localhost:8080/CMD?itm_num_game_lang=0');
      break;
    case 'ch':
      request('http://localhost:8080/CMD?itm_num_game_lang=1');
      break;
    case 'kl':
      request('http://localhost:8080/CMD?itm_num_game_lang=2');
      break;
    default:
      request('http://localhost:8080/CMD?itm_num_game_lang=0');
  }
  res.status(200);
});

router.get('/image/:blah?', function(req, res, next) {
  var imgcode = '',
      blah = req.params.blah;
      mode = false;
  request('http://localhost:8080/rest/items/itm_num_game_state/?type=json', function(err, response, body){
    body = JSON.parse(body);
    mode = body.state == '0' ? true : false;
    request('http://localhost:8080/rest/items/itm_num_game_mode/?type=json', function(err, response, body0){
      game_mode = body0.state == '0' ? 'learn' : 'test';
      console.log(game_mode);
      request('http://localhost:8080/rest/items/itm_num_game_lang/?type=json', function(err, response, body1){
        body1 = JSON.parse(body1);
        imgcode += body1.state.length > 1 ? 1 : body1.state;
        request('http://localhost:8080/rest/items/itm_num_mq_button/?type=json', function(err, response, body2){
          body2 = JSON.parse(body2);
          imgcode += body2.state.length > 1 ? 2 : body2.state;
          if(game_mode == 'test'){
            request('http://localhost:8080/rest/items/itm_num_random/?type=json', function(err, response, body3){
              body3 = JSON.parse(body3);
              imgcode[1] = body3.state.length > 1 ? 2 : body3.state;
              console.log('imgcode: ' + imgcode, 'body3: ', body3);
            });
          }
          res.status(200).json({imgurl: imgcode, mode: mode, game_mode: game_mode});
        });
      });
    });
  });
});

module.exports = router;
