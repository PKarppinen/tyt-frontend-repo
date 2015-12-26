angular.module('add-new-trail-controller', [ ])
.controller('AddNewTrailController', ['$scope', '$http', 'tytConfig', function($scope, $http, config) {
    $scope.trail = {};
    $scope.successfulAdd = false;

    $scope.addNewTrail = function(trail) {
        $scope.errors = null;
            
        $http({method: 'POST',
                url: config.apiUrl,
                data: trail })
        .success(function(data) {
            $scope.successfulAdd = true;                         
        })
        .catch(function(trail) {
            $scope.errors = trail.data.error;
        });
            
        $scope.trail = {};
    };
} ]);