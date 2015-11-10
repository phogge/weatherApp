angular.module('weatherApp')
	.controller('weatherController', function($scope, weatherService){

	weatherService.getWeather().then(function(results){
		$scope.weather = results;
	});

});