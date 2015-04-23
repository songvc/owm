'use strict';

/**
 * @ngdoc function
 * @name owmApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the owmApp
 */
angular.module('owmApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
