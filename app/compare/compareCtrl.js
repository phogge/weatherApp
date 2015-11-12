angular.module('weatherApp')
	.controller('compareCtrl', function($scope, lookupService, weatherService){

	$scope.modalShown = false;
  	$scope.toggleModal = function() {
    	$scope.modalShown = !$scope.modalShown;
  	};

	$scope.One = true;
	$scope.Two = true;
	$scope.Three = true;

  	$scope.compareOne = { searchQuery: '', searchPlaceholder: 'First city to compare ...', source: 'compareOne', weather: {}};
  	$scope.compareTwo = { searchQuery: '', searchPlaceholder: 'Second city to compare ...', source: 'compareTwo', weather: {}};
  	$scope.compareThree = { searchQuery: '', searchPlaceholder: 'Third city to compare ...', source: 'compareThree', weather: {}};

	$scope.search = function(searchQuery, source) {
		lookupService.lookup(searchQuery).then(function(lookupResults){
			if (lookupResults.code === 'weather') {
				$scope.weatherForCompare(lookupResults.state, lookupResults.city, source);
			} else if (lookupResults.code === 'refine') {
				$scope.refineObj = lookupResults.refine;
				$scope.refineObj.source = source;
				$scope.toggleModal();
			}
		});
		$scope[source].searchQuery = '';
	};

	$scope.weatherForCompare = function(state, city, source) {
		weatherService.getWeather(state, city).then(function(results){
			$scope[source].weather = results;

			var searchToHide = source.substr(7);
			$scope[searchToHide] = false;
		});
	};

	$scope.clearCompare = function(a) {
		var compareToEmpty = 'compare' + a;
		$scope[a] = true;
		$scope[compareToEmpty].weather = {};
	};

});