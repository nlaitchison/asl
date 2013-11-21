'use strict';

myApp.controller('ProjectsViewController', function ($scope, Restangular) {

    Restangular.all('projects').getList().then(function(projects){
    	$scope.projects = projects;
    });
    	
    

});

