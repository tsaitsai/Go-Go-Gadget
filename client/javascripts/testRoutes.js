app.controller('testRoutes', ['$scope', '$http', '$location', function($scope,$http,$location){
  $scope.mode = '';
  $scope.testmode = function(){
    console.log($scope.mode)
    var data = {
      mode: $scope.mode
    }
    $http({
      method: 'POST',
      url: '/gogogadget/mode',
      data: data
    }).then(function(res){
      console.log('response from server', res);
    })
  }
}]);
