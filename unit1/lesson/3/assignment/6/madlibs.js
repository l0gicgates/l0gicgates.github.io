angular.module('myApp',[])
  .constant('VERSION', 1.1)
  .controller('MyCtrl', function(VERSION, $scope) {
    $scope.version = VERSION;

 	$scope.master = {};
 	$scope.reset = function() {
      $scope.user = angular.copy($scope.master);
      $scope.startOver = 'true';
    };

    $scope.login = {
        submit: function() {
            if($scope.loginform.$invalid) {
            	 alert("Please enter required fields");
            	return false;

            }
           
           show = true;
        }
    }


   var show = false;


   $scope.off = function(){
     show = false;
   } 

   $scope.showButton = function(){
     return show;
   }

    $scope.reset();


  });