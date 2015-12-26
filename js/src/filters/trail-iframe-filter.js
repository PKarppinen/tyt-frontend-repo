angular.module('trail-iframe-filter', [ ])
.filter('trust_iframe', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);
