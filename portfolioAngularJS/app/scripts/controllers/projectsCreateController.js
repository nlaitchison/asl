'use strict';

myApp.controller('ProjectsCreateController', function ($scope, Restangular, $location, AuthService) {

    $scope.submit = function() {
      var p = Restangular.all('projects');
      p.post($scope.project).then(function(item){
      	console.log(item);
      	$location.path('/');
      });
    };

    $scope.loggedIn = AuthService.isLoggedIn();
    
  });
