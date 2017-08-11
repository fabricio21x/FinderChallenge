angular
.module('FinderChallenge')
.config(["$locationProvider", function($locationProvider) {

  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
}]);
