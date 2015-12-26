angular.module('delete-trail-controller', [ ])
.controller('DeleteTrailController', ['$scope', '$http', 'tytConfig', function($scope, $http, config) {
    $scope.trails = [ ];
    $scope.successfulDelete = false;
    
    //This has to be an object to get a reference to it inside ng-repeat loop
    $scope.trailIdToBeDeleted = {id: ''};
   
    $http.get(config.apiUrl)
            .success(function(data) {
                $scope.trails = data;
    });
           
    $scope.deleteTrails = function() {
	$scope.errors = null;        
  
        if ($scope.trailIdToBeDeleted !== '') {                
            $http({method: 'DELETE',
                    url: config.apiUrl + $scope.trailIdToBeDeleted.id })
                       .success(function(data) {
                           $scope.successfulDelete = true;
                           $scope.trailIdToBeDeleted.id = '';                          
                       })
                       .catch(function(trail) {
                           $scope.errors = trail.data.error;
                });
        }
    };        
} ]);