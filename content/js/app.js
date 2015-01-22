var animationApp = angular.module('animationApp', ['ngRoute', 'animationControllers']);

animationApp.configure(
	function ($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'templates/list.html',
			controller: 'listController'
		}).when('/:name', {
			templateUrl: function(params) { return 'templates/' + params.name; },
			controller: 'labController'
		}).otherwise({
			redirectTo: '/'
		});
	}
);