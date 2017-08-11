angular.module('FinderChallenge')
.config(function ($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("/browse");

  /**
   * Defining all states/routes
   */
  var states = [
    /*
     *Root State
    */
    {
      name: 'root',
      url: '',
      templateUrl: './main.html',
      controller: 'MainCtrl',
      resolve: {
        books: ['principal', function (principal){
          return principal.getData();
        }]
      }
    },
    {
      name: 'catalog',
      parent: 'root',
      url: '/browse',
      templateUrl: './catalog.html',
      controller: 'CatalogCtrl'
    }
  ];

  /**
   * Default states
   */
  $urlRouterProvider.when('/index', '/browse');
  $urlRouterProvider.when('/index/', '/browse');
  $urlRouterProvider.when('/main', '/browse');
  $urlRouterProvider.when('/main/', '/browse');

  states.forEach(function(state){
    $stateProvider.state(state);
  });

});
