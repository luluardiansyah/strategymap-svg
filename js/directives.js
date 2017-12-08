angular.module('StrategyMapApp').directive('svgMap', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        templateUrl: './img/StrategyMap.svg',
        link: function (scope, element, attrs) {
            var regions = element[0].querySelectorAll('.strategy');
            angular.forEach(regions, function (path, key) {
                var regionElement = angular.element(path);
                regionElement.attr("region", "");
                regionElement.attr("SOData", "SOLists");
                $compile(regionElement)(scope);
            })
        }
    }
}]);


angular.module('StrategyMapApp').directive('region', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        scope: true,
        link: function (scope, element, attrs) {
            scope.elementId = element.attr("id");
            scope.regionClick = function () {
                alert(scope.elementId);
            };
            element.attr("ng-click", "regionClick()");
            element.attr("ng-attr-fill", "{{  so-data }}");
            element.removeAttr("region");
            $compile(element)(scope);
        }
    }
}]);
