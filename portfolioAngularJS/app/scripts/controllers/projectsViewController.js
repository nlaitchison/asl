'use strict';

myApp.controller('ProjectsViewController', function ($scope, Restangular, AuthService) {

    Restangular.all('projects').getList().then(function(projects){
    	$scope.projects = projects;
    });
    	
    $scope.loggedIn = AuthService.isLoggedIn();

});
