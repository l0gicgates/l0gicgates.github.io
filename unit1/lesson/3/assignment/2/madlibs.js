angular.module('myApp', [])
  .constant('VERSION', 1.1)
  .controller('MyCtrl', function(VERSION, $scope) {
    $scope.version = VERSION;
  });