angular.module('list-all-trails-controller', [ ])
.controller('ListAllTrailsController', ['$scope', '$http', 'tytConfig', function($scope, $http, config) {
    $scope.trails = [ ];
	
    $http({method: 'GET',
            url: config.apiUrl + "/api/trails/",
            withCredentials: false})
	.success(function(data) {
	    $scope.trails = data;
    });
} ]);
