var express = require('express');
var router = express.Router();
var request = require('request');


router.post('/image', function(err, response, body) {
  res.send('12');
});

router.get('/image', function(req, res, next) {
  var imgcode = '',
      mode = false;
  request('http://localhost:8080/rest/items/itm_num_game_state/?type=json', function(err, response,body){
    body = JSON.parse(body);
    mode = body.state == '0' ? true : false;
    request('http://192.168.100.94:8080/rest/items/itm_num_game_lang/?type=json', function(err, response, body1){
      body1 = JSON.parse(body1);
      imgcode += body1.state.length > 1 ? 1 : body1.state;
      request('http://192.168.100.94:8080/rest/items/itm_num_random/?type=json', function(err, response, body2){
        body2 = JSON.parse(body2);
        imgcode += body2.state.length > 1 ? 2 : body2.state;
        res.json({imgurl: imgcode, mode: mode});
      });
    });
  });
});

module.exports = router;
