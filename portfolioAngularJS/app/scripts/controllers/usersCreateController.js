'use strict';

myApp.controller('UsersCreateController', function ($scope, Restangular, $location) {

    $scope.submit = function() {
      var u = Restangular.all('users');

      if($scope.user.password === $scope.user.repassword){

      	console.log('match');
      	u.post($scope.user).then(function(item){
      		// console.log(item);
      	});

      }else{
      	console.log('dont match');
      }
    }
  });