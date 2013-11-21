'use strict';

myApp.controller('ProjectsViewController', function ($scope, Restangular, AuthService) {

    Restangular.all('projects').getList().then(function(projects){
    	$scope.projects = projects;
    });
    	
    $scope.loggedIn = AuthService.isLoggedIn();
    console.log("meow " + $scope.loggedIn);

});

// <div ng-show"loggedIn">
// <ul id="admin_nav">
//   <li> <a ng-href="#/">View All Projects</a> </li>
//   <li class="nav_pipe"> / </li>
//   <li> <a ng-href="#/projects/new">Add a Project</a> </li>
//   <li class="nav_pipe"> / </li>
//   <li > <a  ng-href="#/logout">Logout</a> </li>
//   <div class="clear_fix"></div>
// </ul> 
// </div>