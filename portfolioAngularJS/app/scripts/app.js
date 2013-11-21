'use strict';

var myApp = angular.module('nicoleTestApp', ['restangular']);

  myApp.config(function ($routeProvider) {
    $routeProvider
      // .when('/', {
      //   templateUrl: 'views/main.html',
      //   controller: 'MainCtrl'
      // })
      .when('/projects', {
        templateUrl: 'views/projectsView.html',
        controller: 'ProjectsViewController'
      })
      .when('/projects/new', {
        templateUrl: 'views/projectsNew.html',
        controller: 'ProjectsCreateController'
      })
      .when('/projects/:id/edit/info', {
        templateUrl: 'views/projectsEdit.html',
        controller: 'ProjectsEditController'
      })
      .when('/projects/:id/edit/images', {
        templateUrl: 'views/imagesEdit.html',
        controller: 'ImagesController'
      })
      .when('/projects/:id/show', {
        templateUrl: 'views/projectsShow.html',
        controller: 'ProjectsShowController'
      })
      .when('/register', {
        templateUrl: 'views/usersNew.html',
        controller: 'UsersCreateController'
      })
      .when('/admin', {
        templateUrl: 'views/usersLogin.html',
        controller: 'UsersLoginController'
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