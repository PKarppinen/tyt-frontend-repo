angular.module('trail-your-trails', [
     'ngRoute',
     'login-controller',      
     'list-all-trails-controller',
     'navigation-controller',
     'add-new-trail-controller',
     'update-trail-controller',
     'delete-trail-controller',
     'update-trail-directive',
     'show-iframe-directive',
     'trail-iframe-filter',
     'tyt-config'
]).config(['$httpProvider', function($httpProvider) {
     $httpProvider.defaults.withCredentials = true;
   }]);