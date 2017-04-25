(function() {
  'use strict';

  angular
    .module('myfrontend')
    .controller('MainController',MainController);

  /** @ngInject */
  function MainController($scope,$http,$log) {

    var vm=this;
    this.creationDate = 1492798393079;

    $scope.getMessage=function(){
      alert("hello");
      $http.get('http://localhost:5000/api/message').then(function(result) {
        console.log("get request successfully");
        console.log(result);
      }, function(data){
        console.error("error in get");
      })
    }

  $scope.postMessage=function(){

   $http.post('http://localhost:5000/api/message',{'msg' :this.message}).success(function(data) {
      console.log("posted successfully");
    }).error(function(data) {
      console.error("error in posting");

    })

}

    $scope.getMessage();




  }
})();
