'use strict';

angular.
  module('search').
  component('search', {
    templateUrl: 'settings/search/search.template.html',
    // template:'<h1> hello </h1>',
    controller: [
      function SearchController() {
        this.txn = [];
        this.search = function (event) {
          const apiEndpoint = '';

          $http.get(apiEndpoint, {params : { searchText : this.searchText}})
              .then(function(result) {
                // UPDATE THE TXN WITH THE RESULTS FROM API 
                this.txn = result.data;
              }).catch((err) => {
                console.error('Error fetching data: ', err);
              });      
          // alert('Search');
        }
        this.submitForm = function () {
        }
      }
    ]
  });
