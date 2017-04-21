(function() {
  'use strict';

  angular
    .module('myfrontend')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope,$log) {
    var vm = this;


    vm.creationDate = 1492798393079;


$scope.postMessage=function(){
 $log.log("dfsf message1");

}




  }
})();
