// The contents of individual model .js files will be concatenated into dist/models.js

(function() {

// Protects views where angular is not loaded from errors
if ( typeof angular == 'undefined' ) {
  return;
};

myApp.factory('AuthService', function(Base64, $cookieStore, Restangular, $http) {

  cookie = 'Basic' + $cookieStore.get('authData');
  $http.defaults.headers.common['Authorization'] = cookie;
 

  var auth = {
    isLoggedIn: false,
    username: ''
  };

  return {
    setLoggedIn: function(username, encoded){
      $http.defaults.headers.common['Authorization'] = 'Basic ' + encoded;
      $cookieStore.put('authData', encoded);
      auth = {
        isLoggedIn: true,
        username: username
      }
    },
    setloggedOut: function(){
      $http.defaults.headers.common['Authorization'] = '';
      $cookieStore.remove('authData');
      auth = {
        isLoggedIn: false,
        username: ''
      }
    },
    isLoggedIn: auth.isLoggedIn
  }
  

});


})();
