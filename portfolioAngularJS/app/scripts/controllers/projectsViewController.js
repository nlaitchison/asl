'use strict';

myApp.controller('ProjectsViewController', function ($scope, Restangular) {

    $scope.projects = Restangular.all('projects').getList();

});

