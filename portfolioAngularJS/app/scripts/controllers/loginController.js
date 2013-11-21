'use strict';

myApp.controller('LoginController', function ($scope, Restangular, $http, AuthService, Base64) {

  $scope.submit = function() {
    var encoded = Base64.encode($scope.username + ':' + $scope.password);
    console.log(encoded);

    $http({method: 'POST', url: 'http://localhost:1337/auth/login', headers: {'Authorization': 'Basic ' + encoded}}).
    success(function(data, status, headers, config){
      if (data.message == 'login successful'){
        AuthService.setLoggedIn($scope.username, encoded);
      }else{ 
        alert('Invalid Username or Password!');
      }
    });
  }

  
});
