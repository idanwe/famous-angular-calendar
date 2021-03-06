'use strict';

/**
 * @ngdoc function
 * @name medMatchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the medMatchApp
 */
angular.module('medMatchApp')
  .controller('MainCtrl', function ($scope, $famous, MonthsBuffer) {
    var EventHandler = $famous['famous/core/EventHandler'];

    $scope.layoutOptions = {
      headerSize: 44,
      footerSize: 60
    };

    $scope.flexibleLayoutOptions = {
      ratios: [0.6, 0.4],
      direction: 1 //FlexibleLayout.DIRECTION_Y
    };

    $scope.scrollViewEventHandler = new EventHandler();

    $scope.scrollViewEventHandler.on('pageChange', function (options) {
      $scope.$apply(function() {
        var currentMonth = $scope.months[options.index];
        $scope.currentYear = currentMonth.year;
      });
    });

    // Init
    $scope.months = new MonthsBuffer();

    $scope.startIndex = $scope.months.length / 2;
    $scope.currentYear = $scope.months[$scope.startIndex].year;
  });
