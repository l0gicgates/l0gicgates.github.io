angular.module("myApp", [])
    .factory('instagram', ['$http',
        function($http) {
            return {
                fetch: function(tag,callback) {


                    var endPoint = "https://api.instagram.com/v1/tags/"+tag+"/media/recent?access_token=1421904868.1fb234f.1727c988209f41d38719695b3e315318&max_tag_id=1404965770620702&callback=JSON_CALLBACK";

                    $http.jsonp(endPoint).success(function(response) {
                        callback(response.data);
                    });
                }
            }
        }
    ])
    .controller("Example", function($scope, $interval, instagram) {
      $scope.pics = [];
      $scope.have = [];
      $scope.getMore = function(tag) {
        instagram.fetch(tag, function(data) {
            for(var i=0; i<data.length; i++) {
              if (typeof $scope.have[data[i].id]==="undefined") {
                $scope.pics.push(data[i]) ;
                $scope.have[data[i].id] = "1";
              }
            }
        });
      };
      $scope.login = {
        submit: function() {
          var user = $scope.user; // for easier access
            if($scope.loginform.$invalid) {
               alert("Please enter required fields");
              return false;

            }
           
           $scope.getMore($scope.user.tag);
      
        }
    }

      
      
    });