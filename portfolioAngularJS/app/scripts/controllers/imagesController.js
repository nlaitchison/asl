'use strict';

myApp.controller('ImagesController', function ($scope, Restangular, $routeParams, $location) {

    Restangular.one('projects', $routeParams.id).get().then(function(p){
      $scope.project = p;
    });

   var allImgs = '';
   var imgs = [];

   // only get the images for this project

    var getImgs = function(){
      allImgs = '';
      imgs = [];
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
        getImgs();
      });

    };

    $scope.destroy = function(i) {
      console.log('delete clicked');
      Restangular.one('images', i.id).remove().then(function(){
        getImgs();
      })
    };

});
