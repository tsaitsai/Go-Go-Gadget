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
    '12': '/images/ch_ear_big.png'
  }

}]);
