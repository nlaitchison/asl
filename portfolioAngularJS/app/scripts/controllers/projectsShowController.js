'use strict';

myApp.controller('ProjectsShowController', function ($scope, Restangular, $routeParams, $location) {

    Restangular.one('projects', $routeParams.id).get().then(function(p){
    	$scope.project = p;
    });

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