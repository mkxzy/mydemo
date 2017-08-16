'use strict';


console.log('load stockWidget');
angular.module('demoApp', []).directive('abc', [function () {
        return {
            // templateUrl: "views/partials/stock.html",
            template: "<h1></h1>",
            restrict: 'AE',
            scope: {
                stockData: '='
            },
            link: function ($scope, $element, $attrs) {
                $scope.getChange = function (stock) {
                    return Math.ceil(
                        ((stock.price - stock.previous) / stock.previous) * 100
                    );
                };
            }
        };
}]);
console.log('load stock Widget success!');