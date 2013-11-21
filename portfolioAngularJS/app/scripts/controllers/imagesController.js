'use strict';

myApp.controller('ImagesController', function ($scope, Restangular, $routeParams, $location, $filter) {

    Restangular.one('projects', $routeParams.id).get().then(function(p){
      $scope.project = p;
    });


    Restangular.all('images').getList().then(function(items){
      $scope.images = $filter('filter')(items, {projectId: $routeParams.id});
    })

    $scope.submit = function() {
      
      $scope.image.projectId = $routeParams.id;

      Restangular.all('images').post($scope.image).then(function(item){ 
        $scope.images.push(item);
      });

    };

    $scope.destroy = function(img, index) {
      Restangular.one('images', img.id).remove().then(function(){
        $scope.images.splice(index, 1);
      })
    };

});
