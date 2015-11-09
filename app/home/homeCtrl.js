angular.module('weatherApp')
	.controller('homeCtrl', function($scope, lookupService, $state, $stateParams){

	$scope.search = function(searchQuery) {
		lookupService.lookup(searchQuery).then(function(results){
			if (results.code === 'weather') {
				$state.go('forecast', {param1: results.state, param2: results.city});
			} else if (results.code === 'refine') {
				$scope.refineObj = results.refine;
				$state.go('home.refine');
			} else if (results.code === 'error') {
				return 'There seems to be an error with your search request';
			}

		});
	};
});


