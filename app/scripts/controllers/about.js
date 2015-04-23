'use strict';

/**
 * @ngdoc function
 * @name owmApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the owmApp
 */
angular.module('owmApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
