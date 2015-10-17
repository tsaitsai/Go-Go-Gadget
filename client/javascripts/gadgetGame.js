app.controller('gadgetGameRep', ['$scope', '$http', '$location', function($scope,$http,$location){
  $http({
    method: 'GET',
    url: '/gogogadget/score'
  }).then(function(res){
    console.log(res.data);
    res.data.forEach(function(item, index){
      switch (item.name){
        case 'itm_num_G1_AL_S_Score':
          $scope.leftHand = item;
          break;
        case 'itm_num_G1_AR_S_Score':
          $scope.rightHand = item;
          break;
        case 'itm_num_G1_LL_S_Score':
          $scope.leftFoot = item;
          break;
        case 'itm_num_G1_LR_S_Score':
          $scope.rightFoot = item;
          break;
        case 'itm_num_G1_EA_S_Score':
          $scope.ear = item;
          break;
        case 'itm_num_G1_EX_S_Score':
          $scope.nose = item;
          break;
      };
    });
  });
}]);
