'use strict';

myApp.controller('ProjectsEditController', function ($scope, Restangular, $routeParams, $location, AuthService) {

    Restangular.one('projects', $routeParams.id).get().then(function(p){
    	$scope.project = p;
    });

    $scope.submit = function() {
      $scope.project.put().then(function(){
        $location.path('/');
      });
    }

    $scope.destroy = function() {
      $scope.project.remove().then(function(){
      	$location.path('/');
      });
    }

    $scope.loggedIn = AuthService.isLoggedIn();

});
