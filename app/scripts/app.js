'use strict';

/**
 * @ngdoc overview
 * @name owmApp
 * @description
 * # owmApp
 *
 * Main module of the application.
 */
angular
  .module('owmApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .value('owmCities', ['New York', 'Dallas','Chicago'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/cities/:city', {
        templateUrl: 'views/city.html',
        controller: 'CityCtrl',
        resolve:{
          city: function(owmCities, $route, $location){
            var city = $route.current.params.city;
            if(owmCities.indexOf(city)==-1){
              $location.path('/error');
              return;
            }
            return city;
          }  
        }
      })
      .when('/error',{
        template:"<p>Error - Page Not Found</p>"
      })
      .otherwise({
        redirectTo: '/'
      });
  });
