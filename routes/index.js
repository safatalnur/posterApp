var express = require('express');
var router = express.Router();
const passport = require('passport');
const userController = require('../controllers/users')


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { 
//     user: req.user,
//     title: 'Create and Submit Your Own Poster/Art' 
//   });
// });
router.get('/home', userController.index)

// Log In route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email']}
))


// Google callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
      successRedirect: '/posters',
      failureRedirect: '/'
  }
))

// Log out route
router.get('/logout', function(req,res){
  req.logout()
  res.redirect('/home')
})

function notLoggedIn(req, res, next){
  if (req.isAuthenticated()) return next()
  res.redirect('/auth/google')
}

module.exports = router;
