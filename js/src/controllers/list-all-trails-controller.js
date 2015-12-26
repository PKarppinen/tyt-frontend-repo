angular.module('list-all-trails-controller', [ ])
.controller('ListAllTrailsController', ['$scope', '$http', 'tytConfig', function($scope, $http, config) {
    $scope.trails = [ ];
	
    $http.get(config.apiUrl)
	.success(function(data) {
	    $scope.trails = data;
    });
} ]);
