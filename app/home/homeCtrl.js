angular.module('weatherApp')
	.controller('homeCtrl', function($scope, lookupService, $state, $stateParams){

	$scope.forecast = { searchQuery: '', searchPlaceholder: 'City/state, zip, or airport code ...'};

	$scope.modalShown = false;
  	$scope.toggleModal = function() {
    	$scope.modalShown = !$scope.modalShown;
    	$scope.forecast.searchQuery = '';
  	};

	$scope.search = function(searchQuery) {
		lookupService.lookup(searchQuery).then(function(results){
			if (results.code === 'weather') {
				$state.go('forecast', {param1: results.state, param2: results.city});
			} else if (results.code === 'refine') {
				$scope.refineObj = results.refine;
				$scope.toggleModal();
			}
		});
		$scope.searchQuery = '';
	};

});


