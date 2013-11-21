'use strict';

myApp.controller('LogoutController', function (AuthService, $location) {
  AuthService.setloggedOut();

  $location.path('/');
  
  // You can redirect or whatever you want in here.
});
