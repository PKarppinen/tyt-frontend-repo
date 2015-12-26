angular.module('navigation-controller', [ ])
.controller('NavigationController', ['$scope', '$location', function($scope, $location) {
    
    var path = $location.path();
    var page = path.substring(path.lastIndexOf('/') + 1);
    
    if (page !== '') {
        $scope.tab = page;
    } else {
        $scope.tab = 'list-all-trails';
    }
          
    $scope.selectTab = function(setTab) {
        $scope.tab = setTab;  
    };
        
    $scope.isSelected = function(checkTab) {
        return $scope.tab === checkTab;  
    };
} ]);