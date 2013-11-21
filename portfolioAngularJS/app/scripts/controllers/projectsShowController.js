'use strict';

myApp.controller('ProjectsShowController', function ($scope, $routeParams, $location, project, images, AuthService, $filter) {

  $scope.project = project;

  $scope.images = $filter('filter')(images, {projectId: $routeParams.id});

   $scope.githubExists = function() {
   		if($scope.project.github != "")
   			return true;
   		else
   			return false;
   };

   $scope.websiteExists = function() {
   		if($scope.project.website != ""){
   			return true;
   		}else{
   			return false;
   		}
   };

  $scope.loggedIn = AuthService.isLoggedIn();

});