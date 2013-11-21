'use strict';

myApp.controller('ImagesEditController', function ($scope, Restangular, $routeParams, $location) {

    Restangular.one('projects', $routeParams.id).get().then(function(p){
      $scope.project = p;
    });

   var allImgs = '';
   var imgs = [];

    var getImgs = function(){

      Restangular.all('images').getList().then(function(items){
        allImgs = items;

        for(var i = 0, max = allImgs.length; i < max; i++){
          if(allImgs[i].projectId === $routeParams.id){
            imgs.push(allImgs[i]);
          }
        }

        $scope.imgs = imgs;

     });

    };

    getImgs();

    $scope.submit = function() {
      
      $scope.image.projectId = $routeParams.id;

      allImgs.post($scope.image).then(function(item){
        $location.path('/projects/' + $routeParams.id +'/edit/images');
        getImgs();
      });

    };

});
