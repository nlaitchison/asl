'use strict';

myApp.controller('UsersLoginController', function ($scope, Restangular, $location) {

    $scope.submit = function() {
      var u = Restangular.all('users');

    }

});