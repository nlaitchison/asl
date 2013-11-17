'use strict';

myApp.controller('ProjectCreateController', function ($scope, Restangular, $location) {

    $scope.submit = function() {
      var p = Restangular.all('projects');
      p.post($scope.project).then(function(item){
      	console.log(item);
      	$location.path('/');
      });
    }
  });