(function() {
    'use strict';

    angular
        .module('demoApp')
        .controller('WidgetController', WidgetController);

    WidgetController.$inject = ['$scope', '$timeout', '$rootScope','$uibModalInstance', 'widget'];

    function WidgetController($scope, $timeout, $rootScope, $uibModalInstance, widget) {
        $scope.widget = widget;

		$scope.form = {
			name: widget.name,
			sizeX: widget.sizeX,
			sizeY: widget.sizeY,
			col: widget.col,
			row: widget.row
		};

		$scope.sizeOptions = [{
			id: '1',
			name: '1'
		}, {
			id: '2',
			name: '2'
		}, {
			id: '3',
			name: '3'
		}, {
			id: '4',
			name: '4'
		}];

		$scope.dismiss = function() {
			$uibModalInstance.dismiss();
		};

		$scope.remove = function() {
			$scope.customItems.splice($scope.customItems.indexOf(widget), 1);
			$uibModalInstance.close();
		};

		$scope.submit = function() {
			angular.extend(widget, $scope.form);

			$uibModalInstance.close(widget);
		};
    }
})();
