'use strict';

myApp.controller('LogoutController', function (AuthService, $location) {
  AuthService.setloggedOut();
  console.log(AuthService.isLoggedIn);

  // $location.path('/');
  
  // You can redirect or whatever you want in here.
});
