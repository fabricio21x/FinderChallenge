angular.module("FinderChallenge")
.controller('MainCtrl', ['$scope','$http','books', function ($scope,$http,books) {
  $scope.logo = "Finder Challenge";
  $scope.enableSearch = true;
  $scope.searchText = "";

  $scope.toggleMenu = false;
  $scope.toggleItem1 = false;
  $scope.toggleItem2 = false;
  $scope.toggleItem3 = false;
  $scope.toggleItem4 = false;
  $scope.toggleItem5 = false;

  function resetValues(){
    $scope.toggleItem1 = false;
    $scope.toggleItem2 = false;
    $scope.toggleItem3 = false;
    $scope.toggleItem4 = false;
    $scope.toggleItem5 = false;
  }

  $scope.toggleItem = function(number) {
    switch(number) {
      case 1:
        resetValues();
        $scope.toggleItem1 = !$scope.toggleItem1;
        break;
      case 2:
        resetValues();
        $scope.toggleItem2 = !$scope.toggleItem2;
        break;
      case 3:
        resetValues();
        $scope.toggleItem3 = !$scope.toggleItem3;
        break;
      case 4:
        resetValues();
        $scope.toggleItem4 = !$scope.toggleItem4;
        break;
      case 5:
        resetValues();
        $scope.toggleItem5 = !$scope.toggleItem5;
        break;
    }
  }

  $scope.filterBooks = {
    title: ""
  }

  $scope.data = books.data;

  $scope.submitSearch = function (){
    if (!(typeof $scope.searchText.title === 'string'))
      $scope.filterBooks.title = $scope.searchText;
    else
      $scope.filterBooks.title = $scope.searchText.title;
  };

  $scope.selectedLink = 0;

  $scope.setActive = function (index){
    $scope.selectedLink = index;
  };

  $scope.executeSavedSearch = function (item){
    $scope.filterBooks.title = item.label;
  };

  $scope.executeFilterByCategory = function (item){

    //http get request to get the items filtered by category
  };

  $scope.executeFilterByLang = function (item){
    //http get request to get the items filtered by language
  };

  $scope.executeFilterByDate = function (item){
    //http get request to get the items filtered by date
  };

  $scope.executeFilterByEdition = function (item){
    //http get request to get the items filtered by type of edition
  };

  $scope.saveSearch = function (item){
    //here goes the http method to add the saved link to the database, it has to be handled in the server-side
  };

  $scope.categories = books.entities.categories[0];
  $scope.langs = books.entities.lang[0];
  $scope.savedLinks = books.entities.saved;
  $scope.editions = books.entities.edition[0];
  $scope.frecuencia = [
    {
      "id": 1,
      "label": "Hoy",
      "days": 0
    },
    {
      "id": 2,
      "label": "Hace una semana",
      "days": 7
    },
    {
      "id": 3,
      "label": "Hace un mes",
      "days": 30
    },
    {
      "id": 4,
      "label": "Hace un año",
      "days": 365
    }
  ];

}]);

