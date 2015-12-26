angular.module('show-iframe-directive', [ ])
.directive('showIframe', function() {
    return {
	restrict: 'E',
	templateUrl: 'templates/show_iframe.html'
    };
});