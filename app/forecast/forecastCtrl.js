angular.module('weatherApp')
	.controller('forecastCtrl', function($scope, $stateParams, weatherService){

	var state = $stateParams.param1,
		city = $stateParams.param2;


	weatherService.getWeather(state, city).then(function(results){
		$scope.weather = results;
	});


})