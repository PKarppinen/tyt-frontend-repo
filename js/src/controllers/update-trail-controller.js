angular.module('update-trail-controller', [ ])
.controller('UpdateTrailController', ['$scope', '$http', 'tytConfig', function($scope, $http, config) {
    $scope.trails = [ ];
    $scope.successfulUpdate = false;
    
    //This has to be an object to get a reference to it inside ng-repeat loop
    $scope.trailToBeUpdated = {};
   
    $http.get(config.apiUrl)
            .success(function(data) {
                $scope.trails = data;
    });
    
    $scope.trailSelected = function(trail) {
	$scope.trailToBeUpdated = trail;
        console.log('Trail id to be updated: ' + trail.id);
    };
    
    $scope.updateTrail = function(trail) {
        $scope.errors = null;
            
        $http({method: 'PUT',
                url: config.apiUrl,
                data: trail })
        .success(function(data) {
            $scope.successfulUpdate = true;                         
        })
        .catch(function(trail) {
            $scope.errors = trail.data.error;
        });
            
        $scope.trailToBeUpdated = {};
    };
        
} ]);