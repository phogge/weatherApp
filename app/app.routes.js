angular.module('weatherApp').config(function ($stateProvider, $urlRouterProvider){

	$stateProvider
		.state('home', {
			url: '/home',
			controller: 'homeCtrl',
			templateUrl: '/app/home/homeTmpl.html'

		}).state('forecast', {
			url: '/forecast/:param1/:param2',
			controller: 'forecastCtrl',
			templateUrl: '/app/forecast/forecastTmpl.html'

		}).state('compare', {
			url: '/compare',
			controller: 'compareCtrl',
			templateUrl: '/app/compare/compareTmpl.html'

		});

	$urlRouterProvider.otherwise('/home');

});