/*jshint undef: false, unused: false, indent: 2*/
/*global angular: false */

'use strict';

// Declare app level module which depends on other modules
angular.module('demoApp', [
    'ngRoute',
    'ngResource',
    'as.sortable',
    'ui.bootstrap',
    'gridster',
  ]).
  config(['$compileProvider', function ($compileProvider) {
    $compileProvider.debugInfoEnabled(false); // testing issue #144
  }]).
  config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'views/kanban.html'});
    $routeProvider.when('/kanban', {templateUrl: 'views/kanban.html', controller: 'KanbanController'});
    $routeProvider.when('/sprint', {templateUrl: 'views/sprint.html', controller: 'SprintController'});
    $routeProvider.when('/clone', { templateUrl: 'views/clone.html', controller: 'CloneController' });
    $routeProvider.when('/ctrlclone', { templateUrl: 'views/ctrlClone.html', controller: 'CtrlCloneController' });
    $routeProvider.when('/horizontal', {templateUrl: 'views/horizontal.html', controller: 'HorizontalController'});
    $routeProvider.when('/grid', {templateUrl: 'views/grid.html', controller: 'GridController'});
    $routeProvider.when('/block', {templateUrl: 'views/block.html', controller: 'BlockController'});
    $routeProvider.when('/scrollable', {templateUrl: 'views/scrollable.html', controller: 'ScrollableController'});
    $routeProvider.when('/table', {templateUrl: 'views/table.html', controller: 'TableController'});
    $routeProvider.when('/share', {templateUrl: 'views/share.html', controller: 'ShareController'});
    $routeProvider.when('/gridster', { templateUrl: 'views/gridster.html', controller: 'GridsterController' });
    $routeProvider.otherwise({redirectTo: '/kanban'});
  }]).
  config(['$locationProvider', function($locationProvider){
      //$locationProvider.html5Mode(true);
      $locationProvider.hashPrefix("");
  }]).
  controller('DemoController', ['$scope', '$location', function ($scope, $location) {
    console.log("Load DemoController");
    $scope.isActive = function (viewLocation) {
      var active = false;
      if ($location.$$path.lastIndexOf(viewLocation, 0) != -1) {
        active = true;
      }
      return active;
    };
  }]).
  controller('CustomWidgetCtrl', ['$scope', '$uibModal',
        function($scope, $modal) {

            $scope.remove = function(widget) {
                $scope.dashboard.widgets.splice($scope.dashboard.widgets.indexOf(widget), 1);
            };

            $scope.openSettings = function(widget) {
                $modal.open({
                    scope: $scope,
                    templateUrl: 'demo/dashboard/widget_settings.html',
                    controller: 'WidgetSettingsCtrl',
                    resolve: {
                        widget: function() {
                            return widget;
                        }
                    }
                });
            };

        }
    ]);

