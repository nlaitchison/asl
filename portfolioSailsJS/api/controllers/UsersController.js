/**
 * UsersController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */


module.exports = {

  // tutorial used for this controller:
  // http://sethetter.com/user-authentication-with-sails-js/

  login: function( req, res ) {
    var bcrypt = require( 'bcrypt' );

    User.findOneByUsername( req.body.username ).done( function( err, user ) {
      if ( err ) res.json( {
          error: 'DB error'
        }, 500 );

      if ( user ) {
        bcrypt.compare( req.body.password, user.password, function( err, match ) {
          if ( err ) res.json( {
              error: 'Server error'
            }, 500 );

          if ( match ) {
            // password match
            req.session.user = user.id;
            res.json( user );
          } else {
            // invalid password
            if ( req.session.user ) req.session.user = null;
            res.json( {
              error: 'Invalid password'
            }, 400 );
          }
        } );
      } else {
        res.json( {
          error: 'User not found'
        }, 404 );
      }
    } );
  },

  logout: function( req, res ) {
    req.session.user = null;
    res.send( "Successfully logged out" );
  }


};

