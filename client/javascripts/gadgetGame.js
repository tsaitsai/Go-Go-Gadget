app.controller('gadgetGameRep', ['$scope', '$http', '$location', function($scope,$http,$location){
  $http({
    method: 'GET',
    url: '/gogogadget/score'
  }).then(function(res){
    console.log(res.data);
    res.data.forEach(function(item, index){
      switch (item.name){
        case 'itm_num_G1_HandLeft_Score':
          $scope.leftHand = item;
          break;
        case 'itm_num_G1_HandRight_Score':
          $scope.rightHand = item;
          break;
        case 'itm_num_G1_FootLeft_Score':
          $scope.leftFoot = item;
          break;
        case 'itm_num_G1_FootRight_Score':
          $scope.rightFoot = item;
          break;
        case 'itm_num_G1_Ear_Score':
          $scope.ear = item;
          break;
        case 'itm_num_G1_Nose_Score':
          $scope.nose = item;
          break;
      };
    });
  });

  $scope.updateMode = function() {
    $http({
      method: 'POST',
      url: '/gogogadget/mode',
      data: {mode: $scope.mode}
    }).then(function(res){
    })
  };

  $scope.updateLang = function() {
    $http({
      method: 'POST',
      url: '/gogogadget/setlanguage',
      data: {lang: $scope.lang}
    }).then(function(res){
    })
  };

  $scope.onClickAuto = function() {
    $location.url('/automation');
    };

  $scope.onClickPlay = function() {
    $location.url('/game');
    };

  $scope.objectURL = {
    '00': '/images/en_right_hand.png',
    '01':'/images/en_left_hand.png',
    '02':'/images/en_right_foot.png',
    '03':'/images/en_left_foot.png',
    '04': '/images/en_ear_big.png',
    '05': '/images/en_heart_big.png'
    '10': '/images/ch_right_hand.png',
    '11':'/images/ch_left_hand.png',
    '12':'/images/ch_right_foot.png',
    '13':'/images/ch_left_foot.png',
    '14': '/images/ch_ear_big.png',
    '15': '/images/ch_heart_big.png',
    '20': '/images/ch_right_hand.png',
    '21':'/images/ch_left_hand.png',
    '22':'/images/ch_right_foot.png',
    '23':'/images/ch_left_foot.png',
    '24': '/images/ch_ear_big.png',
    '25': '/images/ch_heart_big.png'
  }

}]);
