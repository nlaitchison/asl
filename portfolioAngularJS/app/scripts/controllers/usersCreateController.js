'use strict';

myApp.controller('UsersCreateController', function ($scope, Restangular, $location) {

    $scope.submit = function() {
      var u = Restangular.all('users');
      u.post($scope.user).then(function(item){
      	// console.log(item);
      });
    }
  });