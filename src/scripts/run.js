angular.module('FinderChallenge',['ui.router','angularUtils.directives.dirPagination','ngSanitize','ngAnimate','ui.bootstrap'])
.factory('principal',['$http','$q', function ($http,$q){
  return {
    getData: function (){
      var deferred = $q.defer();
      var data={};
      $http.get('../books-schema.json')
        .then(function responseCallBack(res){
            data = res.data;
            deferred.resolve(data);
        }, function errorCallBack(err){
          console.log(err);
        });
      return deferred.promise;
    }
  }
}]);
