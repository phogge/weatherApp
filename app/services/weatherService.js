angular.module('weatherApp').service('weatherService', function($http, $q){

	this.getWeather = function(state, city) {
		var deferred = $q.defer();

		$http({
			method: 'GET',
			url: 'http://api.wunderground.com/api/b69c4eacca9cd389/forecast/q/' + state + '/' + city + '.json'
		}).then(function(response) {
			//return deferred.resolve(response.data.forecast.txt_forecast.forecastday);
			return deferred.resolve(response.data.forecast.simpleforecast.forecastday);
		});

		return deferred.promise;
	};


});