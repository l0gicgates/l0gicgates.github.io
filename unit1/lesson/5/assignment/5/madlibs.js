angular.module('myApp',[])
  .constant('VERSION', 1.1)
  .controller('MyCtrl', function(VERSION, $scope) {
    $scope.version = VERSION;


 	$scope.master = {};
  $scope.tipTotal = 0;
  $scope.mealCount=0;
  $scope.averageTip= 0;
 	$scope.reset = function() {
      $scope.user = angular.copy($scope.master);
      $scope.results = angular.copy($scope.master);
      $scope.startOver = 'true';
      $scope.tipTotal = 0;
      $scope.mealCount=0;
      $scope.averageTip= 0;
      $scope.subtotal = 0;
      $scope.tip=0;
      $scope.total=0;
    };

    $scope.cancel = function() {
      $scope.user = angular.copy($scope.master);
    };

    $scope.login = {
        submit: function() {
          var user = $scope.user; // for easier access
            if($scope.loginform.$invalid) {
            	 alert("Please enter required fields");
            	return false;

            }
           
           $scope.subtotal=user.baseMealPrice*(1+(user.taxRate/100));
           $scope.tip=user.baseMealPrice*(user.tipPercentage/100);
           $scope.tipTotal = $scope.tip +  $scope.tipTotal;
           $scope.mealCount++;
           $scope.averageTip= $scope.tipTotal/$scope.mealCount;
           $scope.total= $scope.subtotal +$scope.tip;
      
        }
    }

    $scope.reset();


  });