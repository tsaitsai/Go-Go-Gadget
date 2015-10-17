app.controller('gadgetGameRep', ['$scope', '$http', '$location', '$timeout', function($scope,$http,$location,$timeout){
  $http({
    method: 'GET',
    url: '/gogogadget/score'
  }).then(function(res){
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

  $scope.readImages = function() {
    $http({
      method: 'GET',
      url: '/gogogadget/image'
    }).then(function(res){
      console.log(res.data);
      $scope.gameMode = res.data.mode;
      $scope.imgurl = $scope.objectURL[res.data.imgurl];
    })
  }

  $scope.objectURL = {
    '12': '/images/ch_ear_big.png'
  };
  $scope.readImages();
  var image = setInterval($scope.readImages(), 5000);
}]);
