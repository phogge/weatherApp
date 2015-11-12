angular.module('weatherApp')
	.controller('forecastCtrl', function($scope, $stateParams, weatherService){

	var state = $stateParams.param1,
		city = $stateParams.param2;

	$scope.city = city;
	$scope.state = state;

	weatherService.getWeather(state, city).then(function(results){
		$scope.weather = results.simpleforecast.forecastday;
		$scope.details = results.txt_forecast.forecastday;

	});

});