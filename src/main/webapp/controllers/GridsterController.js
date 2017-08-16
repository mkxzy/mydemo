/*jshint undef: false, unused: false, indent: 2*/
/*global angular: false */

'use strict';

angular.module('demoApp').controller('GridsterController', ['$scope', '$uibModal', function ($scope, $uibModal) {
    // var self = this;
    $scope.customItems = [{
        col: 0,
        row: 0,
        sizeY: 1,
        sizeX: 1,
        name: "Item 1",
    }, {
        col: 2,
        row: 1,
        sizeY: 1,
        sizeX: 1,
        name: "Item 2"
    }];
    $scope.gridsterOpts = {
        margins: [20, 20],
        columns: 10,
        rows: 20,
        draggable: {
            handle: 'h3'
        }
    };

    $scope.clear = function() {
        $scope.customItems = [];
    };

    $scope.addWidget = function() {
        $scope.customItems.push({
            name: "New Widget",
            sizeX: 1,
            sizeY: 1,
            col: 0,
            row: 0
        });
    };

    $scope.remove = function(widget) {
        $scope.customItems.splice($scope.customItems.indexOf(widget), 1);
    };

    $scope.openSettings = function(widget) {
        $uibModal.open({
            scope: $scope,
            templateUrl: 'views/widget.html',
            controller: 'WidgetController',
            resolve: {
                widget: function() {
                    return widget;
                }
            }
        });
    };

    // self.gridsterOpts = {
    //     columns: 6, // the width of the grid, in columns
    //     pushing: true, // whether to push other items out of the way on move or resize
    //     floating: true, // whether to automatically float items up so they stack (you can temporarily disable if you are adding unsorted items with ng-repeat)
    //     swapping: false, // whether or not to have items of the same size switch places instead of pushing down if they are the same size
    //     width: 'auto', // can be an integer or 'auto'. 'auto' scales gridster to be the full width of its containing element
    //     colWidth: 'auto', // can be an integer or 'auto'.  'auto' uses the pixel width of the element divided by 'columns'
    //     rowHeight: 'match', // can be an integer or 'match'.  Match uses the colWidth, giving you square widgets.
    //     margins: [10, 10], // the pixel distance between each widget
    //     outerMargin: true, // whether margins apply to outer edges of the grid
    //     sparse: false, // "true" can increase performance of dragging and resizing for big grid (e.g. 20x50)
    //     isMobile: false, // stacks the grid items if true
    //     mobileBreakPoint: 600, // if the screen is not wider that this, remove the grid layout and stack the items
    //     mobileModeEnabled: true, // whether or not to toggle mobile mode when screen width is less than mobileBreakPoint
    //     minColumns: 1, // the minimum columns the grid must have
    //     minRows: 2, // the minimum height of the grid, in rows
    //     maxRows: 100,
    //     defaultSizeX: 2, // the default width of a gridster item, if not specifed
    //     defaultSizeY: 1, // the default height of a gridster item, if not specified
    //     minSizeX: 1, // minimum column width of an item
    //     maxSizeX: null, // maximum column width of an item
    //     minSizeY: 1, // minumum row height of an item
    //     maxSizeY: null, // maximum row height of an item
    //     resizable: {
    //         enabled: true,
    //         handles: ['n', 'e', 's', 'w', 'ne', 'se', 'sw', 'nw'],
    //         start: function(event, $element, widget) {}, // optional callback fired when resize is started,
    //         resize: function(event, $element, widget) {}, // optional callback fired when item is resized,
    //         stop: function(event, $element, widget) {} // optional callback fired when item is finished resizing
    //     },
    //     draggable: {
    //         enabled: true, // whether dragging items is supported
    //         handle: '.my-class', // optional selector for drag handle
    //         start: function(event, $element, widget) {}, // optional callback fired when drag is started,
    //         drag: function(event, $element, widget) {}, // optional callback fired when item is moved,
    //         stop: function(event, $element, widget) {} // optional callback fired when item is finished dragging
    //     }
    // };
}]);

