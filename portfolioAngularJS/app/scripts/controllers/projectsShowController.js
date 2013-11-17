'use strict';

myApp.controller('ProjectsShowController', function ($scope, Restangular, $routeParams, $location) {

    Restangular.one('projects', $routeParams.id).get().then(function(p){
    	$scope.project = p;
    });

});