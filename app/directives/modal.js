angular.module('weatherApp')
    .directive('modalBox', function() {

    return {
        restrict: 'E',
        scope: {
            show: '='
        },
        replace: true,
        transclude: true,
        link: function(scope, element, attrs) {
            scope.hideModal = function() {
                scope.show = false;
            };
        },
        templateUrl: 'app/directives/modalTmpl.html'
    };
});