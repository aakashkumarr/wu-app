'use strict';

angular.
  module('login').
  component('login', {
    templateUrl: 'auth/login/login.template.html',
    // template:'<h1> hello </h1>',
    controller: [
      function LoginController() {
        this.message = 'login works...!'
      }
    ]
  });