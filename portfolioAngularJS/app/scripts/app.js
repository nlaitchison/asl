'use strict';

var myApp = angular.module('nicoleTestApp', ['restangular', 'ngCookies', 'ngRoute']);

  myApp.config(['$routeProvider', function ($routeProvider) {
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
      .when('/projects/:id', {
        templateUrl: 'views/projectsShow.html',
        controller: 'ProjectsShowController',
        resolve: {
          project: ['Restangular', '$route', function(Restangular, $route) {
              return Restangular.one('projects', $route.current.params.id).get();
          }]        }
      })
      // .when('/register', {
      //   templateUrl: 'views/usersNew.html',
      //   controller: 'UsersCreateController'
      // })
      .when('/admin', {
        templateUrl: 'views/usersLogin.html',
        controller: 'LoginController'
      })
      .when('/logout', {
        templateUrl: 'views/usersLogout.html',
        controller: 'LogoutController'
      })
      .otherwise({
        redirectTo: '/projects'
      });
  }]);
myApp.config(['RestangularProvider', function(RestangularProvider){
    RestangularProvider.setBaseUrl('http://localhost:1337');
    RestangularProvider.setRestangularFields({
      id: '_.id.$oid'
    });
}]);