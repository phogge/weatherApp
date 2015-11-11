angular.module('weatherApp')
	.directive('searchBox', function(){

	return {
		restrict: 'E',
		transclude: true,
		scope: {
			info: '=',
			search: '&'
		},
		templateUrl: 'app/directives/searchBoxTmpl.html',


		controller: function($scope) {
			$scope.searchdir = function(searchQuery) {
				var searchQuery = searchQuery;
				var source = $scope.info.source;

				$scope.search()(searchQuery, source);
			}
		}

	};
	
});