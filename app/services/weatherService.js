angular.module('weatherApp').service('weatherService', function($http, $q){

	this.getWeather = function(state, city) {
		var deferred = $q.defer();

		$http({
			method: 'GET',
			url: 'http://api.wunderground.com/api/b69c4eacca9cd389/forecast/q/' + state + '/' + city + '.json'
		}).then(function(response) {
			// response.data.forecast.txt_forecast.forecastday
			// response.data.forecast.simpleforecast.forecastday
			var weatherObj = response.data.forecast;



			weatherObj.searchlocation = {state, city};

			return deferred.resolve(weatherObj);
		});

		return deferred.promise;
	};


});