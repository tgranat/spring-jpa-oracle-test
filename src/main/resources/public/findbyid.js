/**
 * 
 */
angular.module('demo', [])
.controller('FindById', function($scope, $http) {
    $http.get('http://localhost:8282/demo/findbyid?id=1').
        then(function(response) {
            $scope.userdata = response.data;
        });
});