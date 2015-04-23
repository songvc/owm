'use strict';

/**
 * @ngdoc function
 * @name owmApp.controller:CityCtrl
 * @description
 * # CityCtrl
 * Controller of the owmApp
 */
angular.module('owmApp')
	.controller('CityCtrl', function ($scope, owmCities) {
 		$scope.city = city;
  	});
