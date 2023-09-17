'use strict';

angular.
  module('myApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/', {
          template: '<home></home>'
        }).
        when('/signup', {
          template: '<signup></signup>'
        }).
        when('/login', {
          template: '<login></login>'
        }).
        when('/settings', {
          template: '<settings></settings>'
        }).
        when('/settings/search', {
          template: '<search></search>'
        }).
        otherwise('/');
    }
  ]);