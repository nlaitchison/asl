'use strict';

var myApp = angular.module('nicoleTestApp', ['restangular']);

  myApp.config(function ($routeProvider) {
    $routeProvider
      // .when('/', {
      //   templateUrl: 'views/main.html',
      //   controller: 'MainCtrl'
      // })
      .when('/projects', {
        templateUrl: 'views/projectsIndex.html',
        controller: 'ProjectsViewController'
      })
      .when('/projects/new', {
        templateUrl: 'views/projectsNew.html',
        controller: 'ProjectsCreateController'
      })
      .when('/projects/:id/edit', {
        templateUrl: 'views/projectsEdit.html',
        controller: 'ProjectsEditController'
      })
      .when('/projects/:id/show', {
        templateUrl: 'views/projectsShow.html',
        controller: 'ProjectsShowController'
      })
      .when('/register', {
        templateUrl: 'views/usersNew.html',
        controller: 'UsersCreateController'
      })
      .otherwise({
        redirectTo: '/projects'
      });
  });
myApp.config(['RestangularProvider', function(RestangularProvider){
    RestangularProvider.setBaseUrl('http://localhost:1337');
    RestangularProvider.setRestangularFields({
      id: '_.id.$oid'
    });
}]);