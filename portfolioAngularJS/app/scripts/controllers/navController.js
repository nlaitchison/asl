'use strict';

myApp.controller('NavController', function ($scope, $routeParams, $location, AuthService) {

  console.log("nav " + AuthService.isLoggedIn())
  $scope.loggedIn = AuthService.isLoggedIn();

});