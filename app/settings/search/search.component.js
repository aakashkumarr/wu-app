'use strict';

angular.
  module('search').
  component('search', {
    templateUrl: 'settings/search/search.template.html',
    // template:'<h1> hello </h1>',
    controller: [
      function SearchController() {
        this.search = function () {
          alert('Search');
        }
      }
    ]
  });