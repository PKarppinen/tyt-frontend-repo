angular.module('trail-your-trails')
.config(function($routeProvider) {
    
    $routeProvider
	.when('/', {
	    templateUrl: 'templates/list_all_trails.html',
	    controller: 'ListAllTrailsController'
	}).when('/list-all-trails', {
	    templateUrl: 'templates/list_all_trails.html',
	    controller: 'ListAllTrailsController'
	}).when('/add-new-trail', {
	    templateUrl: 'templates/add_new_trail.html',
	    controller: 'AddNewTrailController'
	}).when('/update-trail', {
	    templateUrl: 'templates/update_trail.html',
	    controller: 'UpdateTrailController'
	}).when('/delete-trail', {
	    templateUrl: 'templates/delete_trail.html',
	    controller: 'DeleteTrailController'
	}).otherwise( {redirectTo: '/' });
});