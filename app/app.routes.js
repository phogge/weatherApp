angular.module('weatherApp').config(function ($stateProvider, $urlRouterProvider){

	$stateProvider
		.state('home', {
			url: '/home',
			controller: 'homeCtrl',
			templateUrl: 'http://tberry30.github.io/weatherApp/app/home/homeTmpl.html'

		}).state('forecast', {
			url: '/forecast/:param1/:param2',
			controller: 'forecastCtrl',
			templateUrl: 'http://tberry30.github.io/weatherApp/app/forecast/forecastTmpl.html'

		}).state('compare', {
			url: '/compare',
			controller: 'compareCtrl',
			templateUrl: 'http://tberry30.github.io/weatherApp/app/compare/compareTmpl.html'

		});

	$urlRouterProvider.otherwise('/home');

});