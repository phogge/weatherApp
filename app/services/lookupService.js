angular.module('weatherApp').service('lookupService', function($http, $q){

	this.lookup = function(searchQuery) {
		var deferred = $q.defer();
		

		$http({
			method: 'GET',
			url: 'http://api.wunderground.com/api/b69c4eacca9cd389/geolookup/q/' + searchQuery + '.json'
		}).then(function(response) {
			var resultsObj = {};

			if (response.data.location) {
				resultsObj.code = 'weather';
				resultsObj.city = response.data.location.city;
				resultsObj.state = response.data.location.state;
			} else if (response.data.response.results) {
				resultsObj.code = 'refine';

				var item = response.data.response.results;

				item.forEach(function(each){
					if (each.state === "") {
						each.state = each.country_name;
					}
				})

				resultsObj.refine = item;
			} else {
				resultsObj.code = 'error';
			}

			return deferred.resolve(resultsObj);
		});
		return deferred.promise;
	};

});