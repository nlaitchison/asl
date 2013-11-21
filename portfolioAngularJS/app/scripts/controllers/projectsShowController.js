'use strict';

myApp.controller('ProjectsShowController', function ($scope, $routeParams, $location, project) {

    // Restangular.one('projects', $routeParams.id).get().then(function(p){
    // 	$scope.project = p;
    // });
$scope.project = project;

   $scope.githubExists = function() {
   		if($scope.project.github != ""){
   			return true;
   		}else{
   			return false;
   		}
   }

   $scope.websiteExists = function() {
   		if($scope.project.website != ""){
   			return true;
   		}else{
   			return false;
   		}
   }

});