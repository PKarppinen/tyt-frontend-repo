angular.module('update-trail-directive', [ ])
.directive('updateTrail', function() {
    return {
	restrict: 'E',
	templateUrl: 'templates/update_trail_details.html'
    };
});